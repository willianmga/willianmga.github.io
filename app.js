function showPage() {
    const uri = window.location.hash;
    if (uri.endsWith("#projects")) {
        showProjects();
    } else if (uri.endsWith("#content")) {
        showContent();
    } else {
        showAbout();
    }
}

function showAbout() {
    document.getElementById("content").innerHTML = renderAbout();
}

function showProjects() {
    document.getElementById("content").innerHTML = renderProjects();
}

function showContent() {
    document.getElementById("content").innerHTML = renderContent();
}

function renderAbout() {
    return `
<h1 class="text-title text-title-h1">About me</h1>
<div class="content">
    <div class="about-photo">
        <img src="img/new logo.jpg">
    </div>
    <div class="about-text text-no-focus">
        <p>Hello, I'm <span class="text-focus">Willian Azevedo</span>, a passionate <span class="text-focus">Software Engineer</span> based in <span class="text-focus">London, UK</span>,
        with large experience building, maintaining and troubleshooting scalable and reliable services 
        using <span class="text-focus">Java, TypeScript, Node.js, MongoDB, Kubernetes</span> and <span class="text-focus">Terraform</span> on <span class="text-focus">Google Cloud</span>.<p></br>
        My list of <span class="text-focus">certifications</span> include:
            <ul>
                <li>Certified <span class="text-focus">Java Programmer</span> by Oracle (OCAJP 8)</li>
                <li>Certified <span class="text-focus">Kubernetes Administrator</span> (CKA)</li>
                <li>Certified <span class="text-focus">Kubernetes Application Developer</span> (CKAD)</li>
                <li><span class="text-focus">Google Cloud</span> Certified Professional <span class="text-focus">Cloud Security Engineer</span> (CSE)</li>
                <li><span class="text-focus">Bachelors</span> in Software Engineering</li>
            </ul>
            <p>Passionate about software design, security, clean code, test automation, infrastructure provisioning and application monitoring.            
        </p>
    </div>
</div>`
}

function renderProjects() {

    const gameProjects = [
        {
            name: 'Wobbly Winnings',
            image: 'img/games/game-wobbly-winnings.jpg',
            infoLink: 'https://www.virgingames.com/category/slots?game-info=play-wobbly-winnings',
            demolink: 'https://www.virgingames.com/game/play-wobbly-winnings/demo',
            date: ''
        },
        {
            name: 'Mermaid Megaways',
            image: 'img/games/game-mermaid-megaways.jpg',
            infoLink: 'https://www.virgingames.com/category/slots?game-info=play-bgs-mermaid-megaways',
            demolink: 'https://www.virgingames.com/game/play-bgs-mermaid-megaways/demo',
            date: ''
        },
        {
            name: 'Barnyard Bonanza',
            image: 'img/games/game-barnyard-bonanza.jpg',
            infoLink: 'https://www.virgingames.com/category/slots?game-info=play-barnyard-bonanza',
            demolink: 'https://www.virgingames.com/game/play-barnyard-bonanza/demo',
            date: ''
        },
        {
            name: 'Rockabillies',
            image: 'img/games/game-rockabillies.jpg',
            infoLink: 'https://www.virgingames.com/category/slots?game-info=play-bgs-rockabillies',
            demolink: 'https://www.virgingames.com/game/play-bgs-rockabillies/demo',
            date: ''
        },
        {
            name: 'Blox Wild Zones',
            image: 'img/games/game-blox-wild-zones.jpg',
            infoLink: 'https://www.virgingames.com/category/slots?game-info=play-blox-wild-zones',
            demolink: 'https://www.virgingames.com/game/play-blox-wild-zones/demo',
            date: ''
        },
        {
            name: 'Caribbean Stud Poker',
            image: 'img/games/game-caribbean-stud-poker.jpg',
            infoLink: 'https://www.virgingames.com/category/casino?game-info=play-caribbean-stud-poker',
            demolink: 'https://www.virgingames.com/game/play-caribbean-stud-poker/demo',
            date: ''
        },
        {
            name: 'Lobstermania',
            image: 'img/games/game-lobstermania.jpg',
            infoLink: 'https://www.virgingames.com/category/slots?game-info=play-bgs-lobstermania',
            demolink: 'https://www.virgingames.com/game/play-bgs-lobstermania/demo',
            date: ''
        }
    ];

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

            </div>
            `
    }).concat();

    return `
        <h1 class="text-title text-title-h1">Projects</h1>
        <h2 class="text-title text-title-h2">2019-2021 - Gamesys & Roxor Games</h2>
        <p class="text-no-focus">Between 2019 and 2021 I worked as a <span class="text-focus">backend games developer</span>
        creating <span class="text-focus">Slot and Casino games</span> played by 
        <span class="text-focus">thousands of people</span> everyday on the <span class="text-focus">UK's</span> best online casinos</p>
        <div class="project-content">
            ${projects}
        </div>  
    `
}

function renderContent() {
    return `
    <h1 class="text-title">Contents</h1> 
    `
}