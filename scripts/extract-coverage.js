const fs = require('fs');
const path = require('path');

const coverageSummaryPath = path.join(
  __dirname,
  '..',
  'coverage',
  'coverage-summary.json'
);
const outputPath = path.join(__dirname, '..', 'coverage-total.json');

try {
  const coverageSummary = JSON.parse(
    fs.readFileSync(coverageSummaryPath, 'utf8')
  );
  const totalCoverage = coverageSummary.total?.lines?.pct ?? 0;

  // Determine color based on coverage percentage
  let color = 'red';
  if (totalCoverage >= 80) {
    color = 'green';
  } else if (totalCoverage >= 60) {
    color = 'yellow';
  }

  // shields.io endpoint badge format
  const output = {
    schemaVersion: 1,
    label: 'Coverage',
    message: `${totalCoverage.toFixed(2)}%`,
    color: color
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
  console.log(`Coverage extracted: ${totalCoverage}%`);
} catch (error) {
  console.error('Error extracting coverage:', error.message);
  process.exit(1);
}
