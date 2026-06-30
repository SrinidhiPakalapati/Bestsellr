const showcaseProjects = [
    { 
        title: "The Unsent Letter", 
        author: "By Srinidhi", 
        cover: "images/unsentletter.png", 
        website: "https://hackclubvizag.github.io/Unsent-Letter/"
    },
    { 
        title: "Story Title 2", 
        author: "By Author Name", 
        cover: "images/bookmarks.png", 
        website: "https://example.com/story2"
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