function publish() {
  const desc = document.getElementById("desc").value.trim();
  const imageLinks = document.getElementById("images").value.split(",");
  const videoLinks = document.getElementById("videos").value.split(",");

  let html = `<p>${desc}</p>`;

  // Images
  if (imageLinks[0].trim() !== "") {
    html += `<div class="gallery">`;
    imageLinks.forEach(link => {
      if (link.trim()) {
        html += `<img src="${link.trim()}">`;
      }
    });
    html += `</div>`;
  }

  // Videos
  videoLinks.forEach(link => {
    if (link.includes("v=")) {
      const id = link.split("v=")[1];
      html += `
        <iframe
          src="https://www.youtube.com/embed/${id}"
          allowfullscreen>
        </iframe>
      `;
    }
  });

  document.getElementById("content").innerHTML = html;
  document.getElementById("preview").classList.remove("hidden");
}
