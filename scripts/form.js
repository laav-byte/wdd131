
// Get the current year
const currentYear = new Date().getFullYear();

// Select the footer's first and second paragraphs
const footer = document.querySelector("footer");
const firstPara = footer.querySelector("p:nth-of-type(1)");
const secondPara = footer.querySelector("p:nth-of-type(2)");

// Insert copyright year into the first paragraph
firstPara.innerHTML = `&copy; ${currentYear} | Loara Adyz A. Villa`;

// Insert last modified date into the second paragraph
secondPara.textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
  
    const productSelect = document.getElementById("productName");
  
    products.forEach((product) => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  
  const form = document.getElementById("reviewForm");
  if (form) {
      form.addEventListener("submit", (e) => {
          if (!form.checkValidity()) {
              e.preventDefault();
              const firstInvalid = form.querySelector(":invalid");
              if (firstInvalid) firstInvalid.focus();
          }
      });
  }