(() => {
    const refs = {
      openInfo: document.querySelector("[data-oleksiy]"),
      closeInfo: document.querySelector("[data-oleksiy-close]"),
      modal: document.querySelector("[data-photo-oleksiy]"),
    };
  
    refs.openInfo.addEventListener("click", toggleModal);
    refs.closeInfo.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();