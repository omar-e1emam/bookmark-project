document.getElementById("bookmarkForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const siteName = document.getElementById("name").value.trim();
    const siteUrl = document.getElementById("url").value.trim();
    if (!siteName || !siteUrl) {
      alert("Please, write the site name and site link correctly!");
      return;
    }
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(siteUrl)) {
      alert("The website link is invalid.");
      return;
    }
    const tableBody = document.querySelector("#bookmarkTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${tableBody.children.length + 1}</td>
      <td>${siteName}</td>
      <td><a href="${siteUrl}" target="_blank" class="btn btn-primary">Visit</a></td>
      <td><button class="btn btn-danger delete-btn">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
  });
  
  document.querySelector("#bookmarkTable tbody").addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("delete-btn")) {
      e.target.closest("tr").remove();
      const rows = document.querySelectorAll("#bookmarkTable tbody tr");
      rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
      });
    }
  });
  