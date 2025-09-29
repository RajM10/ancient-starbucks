// CSS for beach-themed toast notification
const toastStyles = `
.toast-notification {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  background: linear-gradient(135deg, #87CEEB 0%, #4A90E2 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  box-shadow: 
    0 8px 24px rgba(0,0,0,0.2),
    inset 0 -2px 8px rgba(255,255,255,0.3),
    0 4px 12px rgba(135, 206, 235, 0.4);
  z-index: 9999;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  pointer-events: none;
  border: 3px solid rgba(255,255,255,0.4);
  letter-spacing: 0.5px;
}

.toast-notification.show {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

`;

// Inject styles into document
function injectToastStyles() {
  if (!document.getElementById("toast-styles")) {
    const styleTag = document.createElement("style");
    styleTag.id = "toast-styles";
    styleTag.textContent = toastStyles;
    document.head.appendChild(styleTag);
  }
}

// Track current toast
let currentToast = null;
let currentTimeout = null;

// Show toast notification with beach/sky theme
export default function showToast(message, duration = 5000) {
  // Inject styles if not already present
  injectToastStyles();

  // Remove previous toast immediately if exists
  if (currentToast && currentToast.parentNode) {
    clearTimeout(currentTimeout);
    document.body.removeChild(currentToast);
    currentToast = null;
  }

  // Create new toast element
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  currentToast = toast;

  // Add to body
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });
  });

  // Remove after duration
  currentTimeout = setTimeout(() => {
    if (toast.classList) {
      toast.classList.remove("show");
    }

    // Remove from DOM after fade out
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
      if (currentToast === toast) {
        currentToast = null;
      }
    }, 400);
  }, duration);
}

// Usage examples:
// import { showToast } from './toast.js';
// showToast("Coffee Brewed!");
// showToast("Perfect Score!");
// showToast("New Customer!");
