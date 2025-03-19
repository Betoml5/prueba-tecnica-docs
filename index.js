const dialog = document.querySelector("dialog");
const btnModal = document.querySelector("#btn-modal");
const btnClose = document.querySelector("#dialog-close");

btnClose.addEventListener("click", () => {
  dialog.close();
});

btnModal.addEventListener("click", () => {
  dialog.showModal();
});
