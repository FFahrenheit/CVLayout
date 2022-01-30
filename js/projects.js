(async()=>{
    let projects = await fetch('sources/projects.json');
    projects = await projects.json();

    let content = '';

    projects.forEach(project => {

        let properties = '';

        project.description.forEach(d => {
            properties += `<li> ${d} </li>`
        });

        let links = '';
        if(project.url){
            links += `
            <a href="${ project.url }" target="_blank" title="Link to the webpage"
                class="repository mx-2">
                <i class="fas fa-globe"></i> Visit the webpage
            </a>`;
        }
        if(project.video){
            links += `
            <a href="${ project.video }" target="_blank" title="Link to YouTube"
                class="repository mx-2">
                <i class="fab fa-youtube"></i> View demo
            </a>`;
        }
        if(project.repository){
            links += `
            <a href="${ project.repository }" target="_blank" title="Link to Github"
                class="repository mx-2">
                <i class="fab fa-github"></i> Visit the repository
            </a>`;
        }
        
        content += `
        <div class="card m-3">
            <div class="card-horizontal">
                <div class="img-square-wrapper hover-opacity">
                    <img class="card-icon" src="${ project.image }">
                </div>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold border-animation-black">
                        ${ project.name }
                        <span class="year">${ project.year }</span>
                    </h4>
                    <ul class="card-text">
                        ${ properties }
                    </ul>
                </div>
            </div>
            <div class="card-footer">
                ${links}
            </div>
        </div>
        `
    });

    document.getElementById('projects').innerHTML = content;
    console.log(projects);
})();