const showcaseProjects = [
    { 
        title: "The Unsent Letter", 
        author: "By Srinidhi", 
        cover: "images/unsentletter.png", 
        website: "https://hackclubvizag.github.io/Unsent-Letter/"
    },
];

function generateShowcaseCards(projects, containerId) {
    const container = document.getElementById(containerId);
    
    const cardsHTML = projects.map(project => 
        `<div class="showcase-card">
            <div class="showcase-cover">
                <img src="${project.cover}" alt="${project.title}">
            </div>
            <div class="showcase-info">
                <h3>${project.title}</h3>
                <p>${project.author}</p>
                <a href="${project.website}" class="showcase-link">See Website</a>
            </div>
        </div>`
    ).join('');

    container.innerHTML = cardsHTML;
}

generateShowcaseCards(showcaseProjects, 'showcase-grid');