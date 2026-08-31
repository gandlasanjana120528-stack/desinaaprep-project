const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const wb = XLSX.readFile(path.join(__dirname, '..', 'Gujarat.xlsx'));
const allSheets = {};

wb.SheetNames.forEach(name => {
  const ws = wb.Sheets[name];
  const data = XLSX.utils.sheet_to_json(ws, { defval: '' });
  allSheets[name] = data;
});

fs.writeFileSync(
  path.join(__dirname, '..', 'scripts', 'gujarat_excel_data.json'),
  JSON.stringify(allSheets, null, 2)
);

console.log('Excel data extracted successfully!');
console.log('Sheets:', wb.SheetNames);
wb.SheetNames.forEach(name => {
  console.log(`  ${name}: ${allSheets[name].length} records`);
});
