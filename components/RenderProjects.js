export function renderProjectItems(project) {
  return `
    <div class="project">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="?project=${project.id}"><u>Read More</u></a>
    </div>
  `
}

export default function renderProjects(projects) {
    const projectItems = projects.map(project => renderProjectItems(project)).join('');

    return `
    <section id="projects">
        <h2>Projects</h2>
        <div class="search">
          <input type="search" name='projects' placeholder="Search Projects...">
        </div>
        <div class=project-list>${projectItems}</div>
    </section>`;
  }