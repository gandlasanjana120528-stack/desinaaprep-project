const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const images = [
  {
    input: 'C:\\Users\\study\\.gemini\\antigravity-ide\\brain\\5aef5243-bc48-4c24-a885-bd002c451eef\\media__1785234856352.png',
    output: 'c:\\Users\\study\\Downloads\\desinaap\\desinaap\\public\\assets\\mascot-idle.png'
  },
  {
    input: 'C:\\Users\\study\\.gemini\\antigravity-ide\\brain\\5aef5243-bc48-4c24-a885-bd002c451eef\\media__1785236028388.png',
    output: 'c:\\Users\\study\\Downloads\\desinaap\\desinaap\\public\\assets\\mascot-wave.png'
  },
  {
    input: 'C:\\Users\\study\\.gemini\\antigravity-ide\\brain\\5aef5243-bc48-4c24-a885-bd002c451eef\\media__1785236039073.png',
    output: 'c:\\Users\\study\\Downloads\\desinaap\\desinaap\\public\\assets\\mascot-thinking.png'
  },
  {
    input: 'C:\\Users\\study\\.gemini\\antigravity-ide\\brain\\5aef5243-bc48-4c24-a885-bd002c451eef\\media__1785236047700.png',
    output: 'c:\\Users\\study\\Downloads\\desinaap\\desinaap\\public\\assets\\mascot-celebrating.png'
  }
];

function floodFillRemoveBg(task) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(task.input)
      .pipe(new PNG())
      .on('parsed', function() {
        const width = this.width;
        const height = this.height;
        const visited = new Uint8Array(width * height);
        const queue = [];

        // Add all edge pixels to queue
        for (let x = 0; x < width; x++) {
          queue.push(x, 0);
          queue.push(x, height - 1);
        }
        for (let y = 1; y < height - 1; y++) {
          queue.push(0, y);
          queue.push(width - 1, y);
        }

        let qHead = 0;

        function isBgPixel(r, g, b) {
          const brightness = (r + g + b) / 3;
          // White background or white sticker border contour
          return brightness > 195;
        }

        while (qHead < queue.length) {
          const x = queue[qHead++];
          const y = queue[qHead++];
          const pos = y * width + x;

          if (visited[pos]) continue;
          visited[pos] = 1;

          const idx = pos << 2;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];

          if (isBgPixel(r, g, b)) {
            this.data[idx + 3] = 0; // Make transparent

            // Neighbors (4-way)
            if (x > 0 && !visited[pos - 1]) queue.push(x - 1, y);
            if (x < width - 1 && !visited[pos + 1]) queue.push(x + 1, y);
            if (y > 0 && !visited[pos - width]) queue.push(x, y - 1);
            if (y < height - 1 && !visited[pos + width]) queue.push(x, y + 1);
          }
        }

        this.pack().pipe(fs.createWriteStream(task.output)).on('finish', () => {
          console.log('Cleaned & saved:', task.output);
          resolve();
        });
      })
      .on('error', reject);
  });
}

async function main() {
  for (const img of images) {
    await floodFillRemoveBg(img);
  }
  console.log('All images cleanly processed with flood-fill!');
}

main();
