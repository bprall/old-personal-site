import renderNavbar from "./RenderNav.js";

export default function renderResume(resume) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="project">
      <iframe src="${resume}" 
              type="application/pdf" style="width: 100%; height: 100vh;" scrolling="yes"></iframe>
    </section>`;
}
