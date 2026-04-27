const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'landingData.json');
const rawData = fs.readFileSync(jsonPath, 'utf-8');
const data = JSON.parse(rawData);

function updateMembers(locale) {
  const members = data[locale].team.members;
  const jesus = members.find(m => m.slug === 'jesus-fleitas');
  if (!jesus || !jesus.proyectos) return;

  const proyectos = JSON.parse(JSON.stringify(jesus.proyectos));

  members.forEach(member => {
    if (member.slug !== 'facundo-majda' && member.slug !== 'jesus-fleitas') {
      member.proyectos = proyectos;
    }
  });
}

updateMembers('en');
updateMembers('es');

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('JSON updated successfully');
