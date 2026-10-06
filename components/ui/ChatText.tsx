import React from "react";

/** Renders the small subset of markdown the assistant uses: **bold**, *italic*, bullet lines and line breaks. */
function inline(text: string, keyBase: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g);
  return parts.map((p, i) => {
    if (/^\*\*[^*]+\*\*$/.test(p)) return <strong key={`${keyBase}-${i}`}>{p.slice(2, -2)}</strong>;
    if (/^\*[^*]+\*$/.test(p)) return <em key={`${keyBase}-${i}`}>{p.slice(1, -1)}</em>;
    return <React.Fragment key={`${keyBase}-${i}`}>{p}</React.Fragment>;
  });
}

export default function ChatText({ text }: { text: string }) {
  const lines = text.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let list: React.ReactNode[] = [];
  const flush = (k: number) => {
    if (list.length) {
      blocks.push(<ul key={`ul-${k}`} className="list-disc pl-4 space-y-0.5 my-1">{list}</ul>);
      list = [];
    }
  };
  lines.forEach((raw, i) => {
    const line = raw.trimEnd();
    const bullet = line.match(/^\s*(?:[-•*]|\d+[.)])\s+(.*)$/);
    if (bullet) {
      list.push(<li key={`li-${i}`}>{inline(bullet[1], `li-${i}`)}</li>);
      return;
    }
    flush(i);
    if (line.trim() === "") return;
    blocks.push(<p key={`p-${i}`} className="my-0.5">{inline(line.replace(/^#+\s*/, ""), `p-${i}`)}</p>);
  });
  flush(lines.length);
  return <>{blocks}</>;
}
