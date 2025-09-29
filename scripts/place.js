
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

 // ===== Weather Section (Static Inputs for Now) =====
const temperature = 29;        // °C
const windSpeed = 6;           // km/h
const conditions = "Sunny";    // Static for now

// Wind chill formula (Celsius version)
function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

// Determine wind chill
let windChillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChillValue = `${calculateWindChill(temperature, windSpeed)} °C`;
}

// ✅ Update weather section AFTER calculation
document.getElementById("temperature").innerHTML = `<span class="label">Temperature:</span> ${temperature} °C`;
document.getElementById("conditions").innerHTML = `<span class="label">Conditions:</span> ${conditions}`;
document.getElementById("wind").innerHTML = `<span class="label">Wind Speed:</span> ${windSpeed} km/h`;
document.getElementById("windchill").innerHTML = `<span class="label">Wind Chill:</span> ${windChillValue}`;
