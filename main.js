fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);

  function renderNavbar() {
    const header = document.querySelector("header");
      header.innerHTML = `
        <nav>
          <div class="menu-toggle" tabindex="0">☰</div>
          <div class="nav-container">
            <ul class="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
        </nav>`;
  }


  function renderMainPage(data) {
    const main = document.querySelector("main");
    main.innerHTML = renderAbout(data.about);
    main.innerHTML += renderSelfSummary(data.selfSummary);
    main.innerHTML += renderNews(data.news);
    main.innerHTML += renderProjects(data.projects);
  }

  function renderAbout(about) {
    return `
    <section id="about">
        <center><img src="${about.photo}" alt="Your Photo"></center>
        <h1>${about.name}</h1>
        <h3>${about.title}</h3>
        <p>${about.majors[0]}<br>
            ${about.majors[1]}<br>
            ${about.address}<br>
            <br>
            <br>
            <img src="${about.icons[0]}" alt="Icon" width="16" height="16">
            Email:  &nbsp;&nbsp;<a href="mailto:${about.email}">${about.email}</a><br>
            <img src="${about.icons[1]}" alt="Icon" width="16" height="16">
            Phone:  &nbsp;&nbsp;<a href="tel:${about.phone}">${about.phone}</a><br>
            <img src="${about.icons[2]}" alt="Icon" width="16" height="16">
            Github:  &nbsp;&nbsp;<a href="${about.github[0]}">${about.github[1]}</a><br>
            <img src="${about.icons[3]}" alt="Icon" width="16" height="16">
            Url: &nbsp;&nbsp;<a href="${about.url[0]}">${about.url[1]}</a><br>
        </p>
    </section>`;
  }

  function renderSelfSummary(selfSummary) {
    return `
    <section id="self-summary">
        <p>${selfSummary}</p>
    </section>`;
  }

  function renderNews(news) {
    const newsItems = news.map(item => {
        return `
        <div class="news_row">
            <div class="news_title">${item.title}</div>
            <div class="news_date">${item.date}</div>
        </div>`;
    }).join('');

    return `
    <section id="news">
        <h2>News</h2>
        <ul>${newsItems}</ul>
    </section>`;
  }

  function renderProjects(projects) {
    const projectItems = projects.map(project => {
        return `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="?project=${project.id}"><u>Read More</u></a>
        </div>`;
    }).join('');

    return `
    <section id="projects">
        <h2>Projects</h2>
        <div>${projectItems}</div>
    </section>`;
  }

  function renderProjectPage(project) {
    const main = document.querySelector("main");
    
    if (project.id === "segproj") {
        main.innerHTML = `
            <section id="project-detail">
                <h3>${project.title}<a href="${project.titleLinkLabel}"><u>${project.titleLinkLabel}</u></a></h3>
                <iframe src="${project.materials[0].path}" 
                  type="application/pdf" style="width: 100%; height: 100vh;" scrolling="yes"></iframe>
            </section>`;
    } else if (project.id === "emulate") {
        main.innerHTML = `
            <section id="project-detail">
                <h3>${project.title}</h3>
                <p>${project.contents}</p>
            </section>`;
    } else {
        main.innerHTML = "<p>Project not found.</p>";
    }
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project");
  const page = projectId == null ? "main" : "project-detetail";
  
  renderNavbar();
  
  if (page === "main") {
    renderMainPage(data);
    
  } else {
    const p = data.projects.find((p) => p.id == projectId);
    renderProjectPage(p);
  }
});
