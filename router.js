function route() {
    const uri = window.location.hash;
    if (uri.endsWith("#projects")) {
        renderProjects();
    } else if (uri.endsWith("#certifications")) {
        renderCertifications();
    } else if (uri.endsWith("#experience")) {
        renderExperience();
    } else {
        renderHome();
    }
}

function renderHome() {
    render(homePage);
}

function renderProjects() {
    render(projectsPage);
}

function renderCertifications() {
    render(certificationsPage);
}

function renderExperience() {
    render(experiencePage);
}

function render(content) {
    document.getElementById("content").innerHTML = content;
}
