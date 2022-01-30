(async()=>{
    let projects = await fetch('../sources/projects.json');
    projects = await projects.json();

    let content = '';

    projects.forEach(project => {

        let properties = '';

        project.description.forEach(d => {
            properties += `<li> ${d} </li>`
        })
        content += `
        <div class="card m-3">
            <div class="card-horizontal">
                <div class="img-square-wrapper hover-opacity">
                    <img class="card-icon" src="${ project.image }">
                </div>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold border-animation-black">POSBE</h4>
                    <ul class="card-text">
                        ${ properties }
                    </ul>
                </div>
            </div>
            <div class="card-footer">
                <a href="${ project.repository }" target="_blank" title="Link to Github"
                    class="repository">
                    <i class="fab fa-github"></i> Visit the repository
                </a>
            </div>
        </div>
        `
    });

    document.getElementById('projects').innerHTML = content;
    console.log(projects);
})();