export function showStatus(message, type) {
  const status = document.querySelector("#status-message");
  status.textContent = message;
  status.className = type;
}

export function clearStatus() {
  const status = document.querySelector("#status-message");
  status.textContent = "";
  status.className = "";
}
