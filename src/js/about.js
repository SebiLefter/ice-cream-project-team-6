(() => {
    const refsAbout = {
      openModalBtn: document.querySelector("[data-about-open]"),
      closeModalBtn: document.querySelector("[data-about-close]"),
      modal: document.querySelector("[data-about]"),
    };
    refsAbout.openModalBtn.addEventListener("click", toggleAboutModal);
    refsAbout.closeModalBtn.addEventListener("click", toggleAboutModal);
    function toggleAboutModal() {
      refsAbout.modal.classList.toggle("is-hidden");
    }
  })();