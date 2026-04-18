 const menuToggle = document.getElementById("menuToggle");
      const mobileNav = document.getElementById("mobileNav");
      const topbar = document.getElementById("topbar");
      const progressBar = document.getElementById("progressBar");

      menuToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
      });

      document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("active");
        });
      });

      window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
          topbar.classList.add("scrolled");
        } else {
          topbar.classList.remove("scrolled");
        }

        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + "%";
      });

      const reveals = document.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.12 },
      );

      reveals.forEach((item) => observer.observe(item));

      const filterButtons = document.querySelectorAll(".filter-btn");
      const kitchenCards = document.querySelectorAll(".kitchen-card");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          const filter = button.dataset.filter;

          kitchenCards.forEach((card) => {
            if (filter === "all" || card.dataset.category === filter) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });