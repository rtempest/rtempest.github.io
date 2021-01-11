const container = document.getElementById('project-card-container')

const projects = [
    {
        'name': 'D3 Scattter Chart',
        'url': 'https://rtempest.github.io/fcc_scatter_chart/',
        'img': 'fcc_scatter_chart_cropped.jpg',
        'description': 'Challenge #2 of the freeCodeCamp Data Visualization Certificate',
        'tags': ['d3.js', 'data-viz']
    },
    {
        'name': 'Vancouver Street Trees',
        'url': 'http://www.google.com',
        'img': 'fcc_scatter_chart_cropped.jpg',
        'description': 'An interactive web map of street trees in downtown Vancouver made with Leaflet.js',
        'tags': ['leaflet', 'webmaps']
    },
    {
        'name': 'Bar Chart',
        'url': 'http://www.google.com',
        'img': 'fcc_scatter_chart_cropped.jpg',
        'description': 'A bar chart',
        'tags': ['d3.js', 'data-viz']
    }
]

const makeTags = function (tags) {
    let result = ''
    tags.forEach((tag) => result += `<span class='tag'>${tag}</span>`)
    return result
}

projects.forEach((x) => {
    container.innerHTML += `
    <div class="col">
        <div class="card shadow-sm">
            <a href=${x.url}>
            <img src=${x.img} width="300" height="auto"></a>
            <div class="card-body">
                <h3>${x.name}</h3>
                <p class="card-text">${x.description}</p>
                ${makeTags(x.tags)}
            </div>
        </div>
    </div>`

});