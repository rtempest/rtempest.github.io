const container = document.getElementById('project-card-container')

const projects = [
    {
        'name': 'fCC Scattter Chart',
        'url': 'https://rtempest.github.io/fcc_scatter_chart/',
        'img': 'fcc_scatter_chart_cropped.jpg',
        'description': 'Challenge #2 of the freeCodeCamp Data Visualization Certificate'
    },
    {
        'name': 'project 2',
        'url': 'http://www.google.com'
    },
    {
        'name': 'project 3',
        'url': 'http://www.google.com'
    }
]

projects.forEach((x) => {
    container.innerHTML += `<div class="col">
    <div class="card shadow-sm">
    <a href=${x.url}>
        <img src=${x.img} width="350" height="auto"></a>
        <div class="card-body">
        <h3>${x.name}</h3>
            <p class="card-text">${x.description}</p>
            <div class="d-flex justify-content-between align-items-center">
            </div>
        </div>
    </div>
</div>`

})