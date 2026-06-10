const fs = require('fs');
const path = 'data/landingData.json';
let data = JSON.parse(fs.readFileSync(path, 'utf8'));
for (const lang of Object.keys(data)) {
  if (data[lang]?.team?.members) {
    for (const m of data[lang].team.members) {
      delete m.proyectos;
    }
  }
}
fs.writeFileSync(path, JSON.stringify(data, null, 2));
