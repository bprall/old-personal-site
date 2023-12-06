import renderAbout from "./RenderAbout.js";
import renderSelfSummary from "./RenderSelfSummary.js";
import renderNews from "./RenderNews.js";
import renderProjects from "./RenderProjects.js";
import renderProjectPage from "./RenderProjectPage.js";

export default function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = '';
  main.innerHTML = renderAbout(data.about);
  main.innerHTML += renderSelfSummary(data.selfSummary);
  main.innerHTML += renderNews(data.news);

  const search = document.querySelector('.search input');
  search.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filtered = data.news.filter(newsitem => 
      newsitem.title.toLowerCase().includes(value) || 
      newsitem.date.toLowerCase().includes(value)
      );
    console.log(filtered);

    const list = document.querySelector(".newslist");
    list.innerHTML = filtered.map(newsitem => renderNews(newsitem)).join("");
  });
  main.innerHTML += renderProjects(data.projects);
  
    const projectSearch = document.querySelector('.search input[name="projects"]');
  projectSearch.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filteredProjects = data.projects.filter(project =>
      project.title.toLowerCase().includes(value) ||
      project.description.toLowerCase().includes(value)
    );

    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = filteredProjects.map(project => renderProjects(project)).join("");
  });
}