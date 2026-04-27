const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'landingData.json');
const rawData = fs.readFileSync(jsonPath, 'utf-8');
const data = JSON.parse(rawData);

function updateMemberProjects(locale) {
  const members = data[locale].team.members;

  members.forEach(member => {
    // Si el miembro tiene proyectos, actualizamos la ruta basándonos en su slug
    if (member.proyectos && member.proyectos.length > 0) {
      member.proyectos.forEach((proj, index) => {
        // Asignar 1.jpg, 2.jpg, 3.jpg correlativamente según su slug personal
        proj.image = `/img/equipo/proyectos personales/${member.slug}/${index + 1}.jpg`;
      });
    }
  });
}

updateMemberProjects('en');
updateMemberProjects('es');

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Project images updated successfully in landingData.json');
