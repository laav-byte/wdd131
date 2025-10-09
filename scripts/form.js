document.addEventListener("DOMContentLoaded", function () {
  // ---------- COMMON FOOTER INFO ----------
  const footer = document.querySelector("footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <p>&copy; ${year} | Loara Adyz A. Villa</p>
      <p>Last Modified: ${document.lastModified}</p>
    `;
  }

  // ---------- FORM PAGE LOGIC ----------
  const form = document.getElementById("reviewForm");
  if (form) {
    const products = [
      { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
      { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
      { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
      { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
      { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    const productSelect = document.getElementById("productName");
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.name; // ✅ use product.name for display
      option.textContent = product.name;
      productSelect.appendChild(option);
    });

    // Optional validation helper
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }

  // ---------- REVIEW PAGE LOGIC ----------
  if (window.location.pathname.includes("review.html")) {
    function getQueryParams() {
      const params = new URLSearchParams(window.location.search);
      const features = params.getAll("features");
      return {
        product: params.get("productName") || "(not specified)",
        rating: params.get("rating") || "(none)",
        date: params.get("installationDate") || "(none)",
        features: features.length > 0 ? features.join(", ") : "(none)",
        comments: params.get("writtenReview") || "(none)",
        username: params.get("userName") || "(anonymous)"
      };
    }

    const data = getQueryParams();
    document.getElementById("product").textContent = data.product;
    document.getElementById("rating").textContent = data.rating;
    document.getElementById("date").textContent = data.date;
    document.getElementById("features").textContent = data.features;
    document.getElementById("comments").textContent = data.comments;
    document.getElementById("username").textContent = data.username;

    // --- LocalStorage counter ---
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);

    document.getElementById("reviewCounter").textContent =
      `You have completed ${count} review${count > 1 ? "s" : ""}.`;
  }
});
