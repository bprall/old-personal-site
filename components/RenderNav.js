import renderMainPage from "./RenderMainPage.js";
import renderResume from "./RenderResume.js";

export default function renderNavbar(page, data) {
    const header = document.querySelector("header");
    header.innerHTML = `
        <nav>
            <div class="menu-toggle" tabindex="0">☰</div>
            <div class="nav-container">
                <ul class="nav-links">
                    <li><a href="#about" id="about-link">About</a></li>
                    <li><a href="#news" id="news-link">News</a></li>
                    <li><a href="#projects" id="projects-link">Projects</a></li>
                    <li><a href="/resume" id="resume-link">Resume</a></li>
                </ul>
            </div>
        </nav>`;

    const aboutLink = document.getElementById("about-link");
    const newsLink = document.getElementById("news-link");
    const projectsLink = document.getElementById("projects-link");
    const resumeLink = document.getElementById("resume-link");

    aboutLink.addEventListener("click", (event) => scrollToSection(event, page, data));
    newsLink.addEventListener("click", (event) => scrollToSection(event, page, data));
    projectsLink.addEventListener("click", (event) => scrollToSection(event, page, data));
    resumeLink.addEventListener("click", (event) => {
        event.preventDefault();
        const newUrl = resumeLink.getAttribute("href");
        history.pushState({}, "", newUrl);
        renderResume(data.resume);
    });
}

export function scrollToSection(event, page, data) {
    if (page !== "main") {
        renderMainPage(data);
        const newUrl = window.location.origin;
        history.pushState({}, "", newUrl);
    }

    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
}
