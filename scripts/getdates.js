
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