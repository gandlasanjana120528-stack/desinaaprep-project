const fs = require('fs');
const { PNG } = require('pngjs');

const tasks = [
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

function processImage(task) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(task.input)
      .pipe(new PNG())
      .on('parsed', function() {
        for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
            const idx = (this.width * y + x) << 2;
            const r = this.data[idx];
            const g = this.data[idx + 1];
            const b = this.data[idx + 2];
            const a = this.data[idx + 3];

            const brightness = (r + g + b) / 3;
            const colorDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

            if (brightness > 245 && colorDiff < 15) {
              this.data[idx + 3] = 0;
            } else if (brightness > 220 && colorDiff < 15) {
              const alphaFactor = (245 - brightness) / 25;
              this.data[idx + 3] = Math.round(a * Math.max(0, Math.min(1, alphaFactor)));
            }
          }
        }

        this.pack().pipe(fs.createWriteStream(task.output)).on('finish', () => {
          console.log('Saved:', task.output);
          resolve();
        });
      })
      .on('error', reject);
  });
}

async function main() {
  for (const t of tasks) {
    await processImage(t);
  }
  console.log('All poses processed successfully!');
}

main();
