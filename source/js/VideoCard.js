  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".video-card");
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    const closeBtn = document.getElementById("videoClose");

    if (!cards.length || !modal || !frame) return;

    function openModal(videoId) {
      if (!videoId) return;

      frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("active");
      frame.src = "";
      document.body.style.overflow = "";
    }

    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const videoId = this.dataset.video;
        openModal(videoId);
      });
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  });
