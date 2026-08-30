"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, MessageCircle } from "lucide-react";

type Pose = "idle" | "wave" | "thinking" | "celebrating";

interface Message {
  id: string;
  sender: "mascot" | "user";
  text: string;
  timestamp: string;
}

const POSES: Record<Pose, string> = {
  idle: "/assets/mascot-idle.png",
  wave: "/assets/mascot-wave.png",
  thinking: "/assets/mascot-thinking.png",
  celebrating: "/assets/mascot-celebrating.png",
};



export default function FloatingMascot() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isClickAnimating, setIsClickAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Chat Panel States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPose, setCurrentPose] = useState<Pose>("idle");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "mascot",
      text: "Hi! Ask me about Angula, Hasta, Vitasti, or any traditional measurement.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const poseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ pointerX: number; pointerY: number; elemX: number; elemY: number }>({
    pointerX: 0,
    pointerY: 0,
    elemX: 0,
    elemY: 0,
  });
  const hasMovedRef = useRef(false);

  const MASCOT_WIDTH = 130;
  const MASCOT_HEIGHT = 130;

  // Auto-scroll chat history to bottom
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen, isThinking]);

  // Pose helper with automatic timeout management
  const setTemporaryPose = (pose: Pose, durationMs: number) => {
    if (poseTimeoutRef.current) clearTimeout(poseTimeoutRef.current);
    setCurrentPose(pose);
    poseTimeoutRef.current = setTimeout(() => {
      setCurrentPose("idle");
    }, durationMs);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    
    const elem = elementRef.current;
    if (!elem) return;

    let currentX = position?.x;
    let currentY = position?.y;

    if (currentX === undefined || currentY === undefined) {
      const rect = elem.getBoundingClientRect();
      currentX = rect.left;
      currentY = rect.top;
      setPosition({ x: currentX, y: currentY });
    }

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      elemX: currentX,
      elemY: currentY,
    };

    try {
      elem.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if capture fails on mobile
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - dragStartRef.current.pointerX;
    const deltaY = e.clientY - dragStartRef.current.pointerY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      hasMovedRef.current = true;
    }

    const targetX = dragStartRef.current.elemX + deltaX;
    const targetY = dragStartRef.current.elemY + deltaY;

    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 800;
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 600;

    const minX = -MASCOT_WIDTH / 2;
    const maxX = windowWidth - MASCOT_WIDTH / 2;
    const minY = -MASCOT_HEIGHT / 2;
    const maxY = windowHeight - MASCOT_HEIGHT / 2;

    const clampedX = Math.max(minX, Math.min(maxX, targetX));
    const clampedY = Math.max(minY, Math.min(maxY, targetY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (elementRef.current) {
      try {
        elementRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }

    if (!hasMovedRef.current) {
      handleMascotClick();
    }
  };

  const handleMascotClick = () => {
    // Visual scale animation
    setIsClickAnimating(true);
    setTimeout(() => setIsClickAnimating(false), 250);

    // Toggle chat panel
    if (!isChatOpen) {
      setIsChatOpen(true);
      // Pose swap to 'wave' for ~1.5s on open
      setTemporaryPose("wave", 1500);
    } else {
      // If panel is already open, wave again briefly
      if (currentPose === "idle") {
        setTemporaryPose("wave", 1200);
      }
    }
  };

  const handleSendMessage = async () => {
    const trimmed = inputText.trim();
    if (!trimmed || isThinking) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsThinking(true);

    // Swap to 'thinking' pose while waiting for response
    if (poseTimeoutRef.current) clearTimeout(poseTimeoutRef.current);
    setCurrentPose("thinking");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();
      const replyText =
        data?.reply ?? "I don't have an answer for that right now — please try again in a bit!";

      const mascotMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "mascot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, mascotMsg]);
      setIsThinking(false);

      // Swap to 'celebrating' pose for ~1.5s then back to 'idle'
      setTemporaryPose("celebrating", 1500);
    } catch {
      const mascotMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "mascot",
        text: "Hmm, something went wrong on my end — please try again in a moment!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, mascotMsg]);
      setIsThinking(false);
      setCurrentPose("idle");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleMascotClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsClosing(true);
    setIsChatOpen(false);
    setTimeout(() => {
      setIsHidden(true);
    }, 300);
  };

  if (isHidden) return null;

  // Mascot position on screen
  const mascotStyle: React.CSSProperties = position
    ? {
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        bottom: "auto",
        right: "auto",
      }
    : {
        position: "fixed",
        bottom: "24px",
        right: "24px",
      };

  // Calculate Chat Panel position relative to Mascot while keeping inside viewport bounds
  const getPanelPosition = (): React.CSSProperties => {
    const windowW = typeof window !== "undefined" ? window.innerWidth : 800;
    const windowH = typeof window !== "undefined" ? window.innerHeight : 600;

    const panelWidth = Math.min(340, windowW - 32);
    const panelHeight = 420;

    let mascotLeft = position?.x ?? (windowW - MASCOT_WIDTH - 24);
    let mascotTop = position?.y ?? (windowH - MASCOT_HEIGHT - 24);

    // Prefer placing panel above mascot
    let targetTop = mascotTop - panelHeight - 12;
    let targetLeft = mascotLeft + MASCOT_WIDTH / 2 - panelWidth / 2;

    // If near top edge, place below mascot
    if (targetTop < 16) {
      targetTop = mascotTop + MASCOT_HEIGHT + 12;
    }

    // Clamp inside screen bounds with safety margin
    targetLeft = Math.max(16, Math.min(windowW - panelWidth - 16, targetLeft));
    targetTop = Math.max(16, Math.min(windowH - panelHeight - 16, targetTop));

    return {
      position: "fixed",
      left: `${targetLeft}px`,
      top: `${targetTop}px`,
      width: `${panelWidth}px`,
      height: `${panelHeight}px`,
      zIndex: 9998,
    };
  };

  return (
    <>
      {/* Draggable Floating Mascot */}
      <div
        ref={elementRef}
        style={{
          ...mascotStyle,
          touchAction: "none",
          zIndex: 9999,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`group select-none cursor-grab active:cursor-grabbing transition-opacity duration-300 ease-in-out ${
          isClosing ? "opacity-0 scale-75 transition-all duration-300" : "opacity-100"
        }`}
      >
        <div className="relative">
          {/* Close Mascot Icon (X) */}
          <button
            onClick={handleMascotClose}
            type="button"
            aria-label="Hide Mascot"
            className="absolute -top-2 -right-2 z-20 p-1.5 bg-[#4A3426] hover:bg-[#6F4E37] text-white rounded-full shadow-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Chat Open Indicator Pulse Badge */}
          {!isChatOpen && (
            <div className="absolute top-0 left-0 z-20 p-1 bg-[#B88646] text-white rounded-full shadow-sm animate-pulse">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
          )}

          {/* Mascot Container with Idle Bobbing & Click Scale */}
          <div
            className={`relative w-[130px] h-[130px] animate-mascot-bob transition-transform duration-200 ease-out ${
              isClickAnimating ? "scale-110" : "scale-100"
            }`}
          >
            {/* Render all Poses with CSS opacity crossfade to prevent jump-cuts */}
            {(Object.keys(POSES) as Pose[]).map((poseKey) => (
              <img
                key={poseKey}
                src={POSES[poseKey]}
                alt={`DESINAAP Mascot - ${poseKey}`}
                draggable={false}
                className={`absolute inset-0 w-full h-full object-contain drop-shadow-lg pointer-events-none select-none transition-opacity duration-300 ease-in-out ${
                  currentPose === poseKey ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chat Panel */}
      {isChatOpen && (
        <div
          style={getPanelPosition()}
          className="flex flex-col bg-[#FAF7F2] border border-[#E8DED1] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-3"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#4A3426] text-white select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B88646] p-0.5 flex items-center justify-center overflow-hidden border border-white/20">
                <img
                  src={POSES[currentPose]}
                  alt="Mascot Avatar"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none flex items-center gap-1.5">
                  DESINAAP Assistant
                  <Sparkles className="w-3 h-3 text-[#B88646]" />
                </h3>
                <span className="text-[11px] text-[#C8B8A2]">Traditional Measurements</span>
              </div>
            </div>

            {/* Collapse Panel Button */}
            <button
              onClick={() => {
                setIsChatOpen(false);
                setCurrentPose("idle");
              }}
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message History Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FAF7F2] text-xs">
            {messages.map((msg) => {
              const isMascot = msg.sender === "mascot";
              return (
                <div
                  key={msg.id}
                  className={`flex ${isMascot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl shadow-sm leading-relaxed ${
                      isMascot
                        ? "bg-[#FFFFFF] text-[#2E2A26] border border-[#E8DED1] rounded-tl-xs"
                        : "bg-[#6F4E37] text-white rounded-tr-xs"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`block text-[10px] mt-1 text-right ${
                        isMascot ? "text-[#7A6E65]" : "text-white/70"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Thinking / Typing Indicator Bubble */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-[#FFFFFF] border border-[#E8DED1] rounded-2xl rounded-tl-xs px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#B88646] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-[#B88646] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-[#B88646] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#FFFFFF] border-t border-[#E8DED1]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 px-3.5 py-2 bg-[#FAF7F2] border border-[#E8DED1] rounded-full text-xs text-[#2E2A26] focus:outline-none focus:border-[#6F4E37] transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isThinking}
                className="p-2 bg-[#6F4E37] hover:bg-[#4A3426] disabled:opacity-40 text-white rounded-full transition-all duration-200 shadow-sm flex-shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
