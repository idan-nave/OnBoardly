export const createSubmitModal = (onConfirm, onCancel) => {
  // Create modal container
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create the modal message
  const message = document.createElement("p");
  message.textContent = "Are you sure you want to submit the process?";

  // Create the footer with buttons
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  // Create Cancel button
  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button");
  cancelButton.textContent = "Cancel";
  cancelButton.onclick = () => {
    onCancel();
    modal.classList.remove("show"); // Hide the modal
  };

  // Create Confirm button
  const confirmButton = document.createElement("button");
  confirmButton.classList.add("confirm-button");
  confirmButton.textContent = "Submit";
  confirmButton.onclick = () => {
    onConfirm();
    modal.classList.remove("show"); // Hide the modal
  };

  // Append buttons to footer
  modalFooter.appendChild(cancelButton);
  modalFooter.appendChild(confirmButton);

  // Append message and footer to modal content
  modalContent.appendChild(message);
  modalContent.appendChild(modalFooter);

  // Append modal content to modal container
  modal.appendChild(modalContent);

  return modal;
};

export default createSubmitModal;