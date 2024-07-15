export default function renderAbout(about) {
    return `
    <section class="about">
        <center><img src="${about.photo}" alt="Your Photo"></center>
        <h1>${about.name}</h1>
        <h3 id = education>${about.education}</h3>
        <p>${about.majors[0]}<br>
            ${about.majors[1]}<br>
            ${about.address}<br>
            <br>
            <br>
            <img src="${about.icons[4]}" alt="Icon" width="16" height="16">
            Url: &nbsp;&nbsp;<a href="${about.url[0]}">${about.url[1]}</a><br>
            <img src="${about.icons[0]}" alt="Icon" width="16" height="16">
            Email:  &nbsp;&nbsp;<a href="mailto:${about.email}">${about.email}</a><br>
            <img src="${about.icons[1]}" alt="Icon" width="16" height="16">
            Phone:  &nbsp;&nbsp;<a href="tel:${about.phone}">${about.phone}</a><br>
            <img src="${about.icons[2]}" alt="Icon" width="16" height="16">
            Github:  &nbsp;&nbsp;<a href="${about.github[0]}">${about.github[1]}</a><br>
            <img src="${about.icons[3]}" alt="Icon" width="16" height="16">
            LinkedIn: &nbsp;&nbsp;<a href="${about.linkedin[0]}">${about.linkedin[1]}</a><br>
            
        </p>
    </section>`;
  }
