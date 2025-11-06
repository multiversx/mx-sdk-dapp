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

  const output = {
    coverage: totalCoverage
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
  console.log(`Coverage extracted: ${totalCoverage}%`);
} catch (error) {
  console.error('Error extracting coverage:', error.message);
  process.exit(1);
}
