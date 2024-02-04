(() => {
    const refs = {
      openInfo: document.querySelector("[data-taras-open]"),
      closeInfo: document.querySelector("[data-taras-close]"),
      modal: document.querySelector("[data-photo-taras]"),
    };
  
    refs.openInfo.addEventListener("click", toggleModal);
    refs.closeInfo.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  