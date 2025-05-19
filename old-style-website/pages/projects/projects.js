const projects = gameProjects.map(game => {
  return `
    <div class="card">                
        <a href="${game.infoLink}" target="_blank"><img src=${game.image}></a>
        <div class="card-title">
            <h2 class="text-title text-title-h3">${game.name}</h2>
        </div>
        <div class="card-content">
            <a href="${game.infoLink}" target="_blank"><span class="card-button">Info</span></a>
            <a  href="${game.demolink}" target="_blank"><span class="card-button">Demo</span></a>                                    
        </div>
    </div>`
}).concat();

const projectsSection = `
<div class="container">
    <h1 class="text-title text-title-h1">Projects</h1>
    <h2 class="text-title text-title-h2">2019-2022 - Gamesys & Roxor Gaming</h2>
    <div class="about-text text-no-focus">
        <p class="text-no-focus">Between 2019 and 2022, I worked as a <strong>backend games developer</strong>
        creating <strong>Slot and Casino games</strong> played by 
        <strong>thousands of people</strong> everyday on many <strong>Europe</strong> best online casinos.</p>
    </div>
    <div class="project-content">
        ${projects}
    </div>  
</div>
`;