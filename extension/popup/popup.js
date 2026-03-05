const toggle = document.getElementById('enableToggle');
const statusBadge = document.getElementById('statusBadge');
const statusText = document.getElementById('statusText');

function updateUI(enabled) {
  toggle.checked = enabled;
  statusBadge.className = enabled ? 'status-badge on' : 'status-badge off';
  statusText.textContent = enabled ? 'ON' : 'OFF';
}

chrome.storage.sync.get({ enabled: true }, (result) => {
  updateUI(result.enabled);
});

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
  updateUI(toggle.checked);
});
