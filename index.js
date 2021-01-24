const container = document.getElementById('project-card-container')

const projects = [
    {
        'name': 'USA Education Choropleth',
        'url': 'https://rtempest.github.io/fcc-choropleth/',
        'img': 'images/choropleth.jpg',
        'description': 'Challenge #4 of the freeCodeCamp Data Visualization Certificate',
        'tags': ['d3.js', 'data-viz']
    },
    {
        'name': 'Land Temperature Heatmap',
        'url': 'https://rtempest.github.io/fcc_heatmap/',
        'img': 'images/heatmap.jpg',
        'description': 'Challenge #3 of the freeCodeCamp Data Visualization Certificate',
        'tags': ['d3.js', 'data-viz']
    },
    {
        'name': 'Doping in Professional Cycling',
        'url': 'https://rtempest.github.io/fcc_scatter_chart/',
        'img': 'images/scatter_chart.jpg',
        'description': 'Challenge #2 of the freeCodeCamp Data Visualization Certificate',
        'tags': ['d3.js', 'data-viz']
    },
    {
        'name': 'Vancouver Street Trees',
        'url': 'https://rtempest.github.io/web_maps/street_trees_webapp/',
        'img': 'images/street_trees.jpg',
        'description': 'An interactive web map of street trees in downtown Vancouver made with Leaflet.js',
        'tags': ['leaflet', 'webmap']
    },
    {
        'name': 'US GDP Bar Chart',
        'url': 'https://rtempest.github.io/fcc_bar_chart/',
        'img': 'images/bar_chart.jpg',
        'description': 'Challenge #1 of the freeCodeCamp Data Visualization Certificate and my first project using D3',
        'tags': ['d3.js', 'data-viz']
    },
    {
        'name': 'BC Wildfires of 2020',
        'url': 'https://rtempest.github.io/bcit_gis_projects/gisweb_wildfires/',
        'img': 'images/wildfires.jpg',
        'description': 'A leaflet web map showing wildfires in BC',
        'tags': ['leaflet', 'webmap']
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
            <a href=${x.url} target='_blank'>
            <img class="card-img-top" src=${x.img} width="300" height="auto"></a>
            <div class="card-body">
                <h5>${x.name}</h5>
                <p class="card-text">${x.description}</p>
                ${makeTags(x.tags)}
            </div>
        </div>
    </div>`

});


const tags = document.querySelectorAll('.tag')
// tags.addEventListener('click')