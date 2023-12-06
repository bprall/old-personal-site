export default function renderProjectPage(project) {
    const main = document.querySelector("main");
    
    if (project.id === "segproj") {
        main.innerHTML = `
            <section class="project">
                <h3>${project.title}<a href="${project.titleLink}"><u>${project.titleLinkLabel}</u></a></h3>
                <iframe src="${project.materials[0].path}" 
                  type="application/pdf" style="width: 100%; height: 100vh;" scrolling="yes"></iframe>
            </section>`;
    } else if (project.id === "emulate") {
        main.innerHTML = `
            <section class="project" id="emulate">
                <h3>${project.title}</h3>
                <p>${project.contents}</p>
            </section>`;
    } else {
        main.innerHTML = "<p>Project not found.</p>";
    }
  }