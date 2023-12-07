import renderNavbar from "./components/RenderNav.js";
import renderMainPage from "./components/RenderMainPage.js";
import renderProjectPage from "./components/RenderProjectPage.js";
import renderResume from "./components/RenderResume.js"

fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get("project");
        const page = projectId == null ? "main" : "project-detail";

        renderNavbar(page, data);

        if (page === "main") {
            renderMainPage(data);
        } else {
            const p = data.projects.find((p) => p.id == projectId);
            renderProjectPage(p);
        }
    });