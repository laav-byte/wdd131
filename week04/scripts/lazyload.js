document.addEventListener("DOMContentLoaded", () => {
    // Add copyright year
    document.getElementById("currentyear").innerHTML =
      `&copy; ${new Date().getFullYear()} Loara Adyz Acosta`;
  
    // Add last modified date
    document.getElementById("lastModified").textContent =
      `Last Modified: ${document.lastModified}`;
  
    // Add fade-in effect when each image finishes loading
    const images = document.querySelectorAll("img");
    images.forEach(img => {
      img.addEventListener("load", () => {
        img.classList.add("fade-in");
      });
    });
  });