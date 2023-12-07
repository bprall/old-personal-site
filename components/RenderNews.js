export function renderNewsItems(item) {
  return `
      <div class="news-row">
          <div class="news-title">${item.title}</div>
          <div class="news-date">${item.date}</div>
      </div>`;
}

export default function renderNews(news) {
  const newsItems = news.map(item => renderNewsItems(item)).join('');

  return `
    <section id="news">
      <h2>News</h2>
      <div class="search">
        <input type="search" name='news' placeholder="Search News...">
      </div>
      <ul class="news-list">${newsItems}</ul>
    </section>`;
}