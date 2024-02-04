(() => {
    const refs = {
      openInfo: document.querySelector("[data-jesica]"),
      closeInfo: document.querySelector("[data-jesica-close]"),
      modal: document.querySelector("[data-photo-jesica]"),
    };
  
    refs.openInfo.addEventListener("click", toggleModal);
    refs.closeInfo.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
