const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const compact = fs
    .readFileSync('lint-report-compact.txt', {encoding: 'utf-8'})
    .split('\n')
    .slice(0, -3);

const codeclimate = compact.map(issue => {
    const parts = issue.match(/(.*): line (\d+), col \d+, (.*) \((.*)\)$/);

    return {
        description: `${parts[4]}: ${parts[3]}`,
        fingerprint: crypto
            .createHmac('sha256', 'non-secret')
            .update(issue)
            .digest('hex'),
        location: {
            path: path.relative(_dirame, parts[1]),
            lines: {
                begin: parseInt(parts[2])
            }
        }
    }
});

fs.writeFileSync('gl-code-quality-report.json', JSON.stringify(codeclimate, null, 2));