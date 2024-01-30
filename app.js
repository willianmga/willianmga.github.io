function showPage() {
    const uri = window.location.hash;
    if (uri.endsWith("#projects")) {
        renderProjects();
    } else {
        renderAbout();
    }
}

function renderAbout() {

    const links = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/willian-azevedo/",
            img: "img/links/linkedin.png"
        },
        {
            name: "GitHub",
            link: "https://github.com/willianmga",
            img: "img/links/github.png"
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/@devlondres",
            img: "img/links/youtube.svg"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/devlondres",
            img: "img/links/instagram.png"
        }
    ].map(link => {
        return `
            <a href="${link.link}" target="_blank">
                <img class="about-links-img" src="${link.img}" alt="${link.name}">
            </a>
        `;
    }).concat();    

    const content = `
    <div>
        <section class="section-intro">
            <div class="container">
                <div class="content">                 
                    <div class="about-photo">
                        <img src="img/profile.jpg"/>
                    </div>
                    <div class="about-text text-no-focus">
                        <h1 class="text-title text-title-h1">I'm Willian,</h1>
                        <p>A <strong>Staff Software Engineer</strong> with <strong>DevOps</strong> skills based in <strong>London, UK</strong>.</p>
                        <p>I'm <strong>experienced</strong> in <strong>all phases</strong> of software development - from <strong>design</strong> to <strong>monitoring</strong> - having built scalable services for
                        companies all over <strong>America</strong>, the <strong>UK</strong> and <strong>Brazil</strong>.</p>
                        <p>Skills: <strong>APIs</strong>, Kong and Apigee, <strong>Java</strong> and <strong>TypeScript</strong>, Redis, <strong>MongoDB</strong>, Linux, <strong>Kubernetes</strong>, CI/CD (Github, Jenkins, ArgoCD) </p>
                    </div>                
                </div>
                <div>
                    ${links}
                </div>
            </div> 
        </section>
        <section class="section-certifications">
            <div class="container">
                <h1 class="text-title text-title-h1">Certifications</h1>                    
                <div class="centralized">
                    <a href="https://www.credly.com/badges/b2969435-be2c-4588-93e3-9ef576554ba1/public_url" target="_blank">
                        <img class="section-certifications-img-1" alt="Certified Kubernetes Administrator" src="img/certifications/cka.png"></img>
                    </a>
                    <a href="https://www.credly.com/badges/b3a70483-a4a9-4b5e-af26-b9779fea5290/public_url" target="_blank">
                        <img class="section-certifications-img-1" alt="Certified Kubernetes Application Developer" src="img/certifications/ckad.png"></img>
                    </a>                    
                    <a href="https://www.credential.net/cf66c2a4-7b56-48f3-8ac5-a49191196896?key=880d3e748c1d3d46a7ea5c5ce82fadfb4e59dbc3f72ebd9df1662734ebfca344" target="_blank">
                        <img class="section-certifications-img-2" alt="Google Cloud Certified Cloud Security Engineer" src="img/certifications/gcp-security-engineer.png"></img>
                    </a>
                    <a href="https://www.credly.com/badges/b358b3f4-0663-488f-b50e-cc3fe6116472" target="_blank">
                        <img class="section-certifications-img-2" alt="Oracle Certified Java Programmer 8" src="img/certifications/ocajp-8.png"></img>
                    </a>
                </div>
            </div>
        </section>
        <section class="section-experience">
            <div class="container">
                <h1 class="text-title text-title-h1">Experience</h1>
                <div class="about-text text-no-focus">
                    <p><strong class="text-focus">Liferay Cloud</strong> - London, UK</p>
                    <ul>
                        <li>(2022 - now) Senior Software Engineer</li>
                    </ul>
                    <p><strong class="text-focus">Gamesys</strong> - London, UK</p>
                    <ul>
                        <li>(2022 - 2022) Senior Backend Games Developer</li>
                        <li>(2021 - 2022) Backend Games Developer</li>
                    </ul>                
                    <p><strong class="text-focus">Roxor Games</strong> - London, UK</p>
                    <ul>
                        <li>(2019 - 2021) Backend Games Developer</li>
                    </ul>
                    <p><strong class="text-focus">Spectrum USA (Matera outsourced)</strong> - Brazil</p>
                    <ul>
                        <li>(2017 - 2019) Software Developer</li>
                    </ul>  
                </div>
            </div>
    </section>
    </div>
    `;

    document.getElementById("content").innerHTML = content;
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
            </div>`
    }).concat();

    const content = `
    <div class="container">
        <h1 class="text-title text-title-h1">Projects</h1>
        <h2 class="text-title text-title-h2">2019-2021 - Gamesys & Roxor Games</h2>
        <div class="about-text text-no-focus">
            <p class="text-no-focus">Between 2019 and 2021, I worked as a <strong>backend games developer</strong>
            creating <strong>Slot and Casino games</strong> played by 
            <strong>thousands of people</strong> everyday in the <strong>UK's</strong> best online casinos.</p>
        </div>
        <div class="project-content">
            ${projects}
        </div>  
    </div>
    `;

    document.getElementById("content").innerHTML = content;
}
