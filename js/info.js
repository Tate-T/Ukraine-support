(() => {
  const refs = {
    openInfo: document.querySelector("[data-info]"),
    closeInfo: document.querySelector("[data-info-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
