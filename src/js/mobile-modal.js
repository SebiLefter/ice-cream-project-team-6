(() => {
  const refsMobile = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refsMobile.openModalBtn.addEventListener('click', toggleMobileModal);
  refs.closeModalBtn.addEventListener('click', toggleMobileModal);

  function toggleMobileModal() {
    refsMobile.modal.classList.toggle('is-hidden');
  }
})();
