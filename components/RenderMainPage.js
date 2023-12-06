import renderAbout from "./RenderAbout.js";
import renderSelfSummary from "./RenderSelfSummary.js";
import renderNews, {renderNewsItems} from "./RenderNews.js";
import renderProjects, {renderProjectItems} from "./RenderProjects.js";
import renderProjectPage from "./RenderProjectPage.js";

export default function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = '';
  main.innerHTML = renderAbout(data.about);
  main.innerHTML += renderSelfSummary(data.selfSummary);
  main.innerHTML += renderNews(data.news);
  main.innerHTML += renderProjects(data.projects);
  
  const newsSearch = document.querySelector('.search input[name="news"]');
  newsSearch.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filtered = data.news.filter(newsitem => newsitem.title.toLowerCase().includes(value));
    const list = document.querySelector(".news-list");
    list.innerHTML = filtered.map(newsitem => renderNewsItems(newsitem)).join("");
  });
  
  const projectSearch = document.querySelector('.search input[name="projects"]');
  projectSearch.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filtered = data.projects.filter(project => project.title.toLowerCase().includes(value));
    const list = document.querySelector(".project-list");
    list.innerHTML = filtered.map(project => renderProjectItems(project)).join("");
  });
}