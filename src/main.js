
const container = document.getElementById('projects');

function createProject(project) {
    const title = project.title;
    const description = project.description;
    const repo = project.repo;
    const tech = project.tech;

    const card = document.createElement('div');
    card.className = "flex flex-col p-5 gap-1";

    const header = document.createElement('div');
    header.className = "flex";

    const h1 = document.createElement('h1');
    h1.innerHTML = title;
    h1.className = "font-bold text-xl ";

    const link = document.createElement('a');
    link.href = repo;
    link.className = "ml-auto"

    const icon = new Image();
    icon.src = icon.src = './dist/github-original.svg';
    icon.className = "size-7";
    icon.alt = "giticon";
    link.appendChild(icon);
    header.append(h1, link);

    const descp = document.createElement('p');
    descp.innerHTML = description;
    descp.className = "break-words text-sm";

    const techp = document.createElement('p');
    techp.innerHTML = "Tech: " +tech;
    techp.className = "break-words font-bold text-sm";

    

    card.append(header,descp, techp)

    container.appendChild(card)
}


fetch('src/projects.json')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            createProject(project)
        });
    })
    .catch(error => console.log(error))



