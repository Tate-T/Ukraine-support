(() => {
  const refs = {
    openInfo: document.querySelector("[data-info]"),
    closeInfo: document.querySelector("[data-info-close]"),
    modal: document.querySelector("[data-photo]"),
  };

  refs.openInfo.addEventListener("click", toggleModal);
  refs.closeInfo.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
