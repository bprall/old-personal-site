export default function renderNews(news) {
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
        <div class="search">
          <input type="search" name='news' placeholder="Search News...">
        </div>
        <ul>${newsItems}</ul>
    </section>`;
  }