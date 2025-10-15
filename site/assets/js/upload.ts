import { decodeImage } from './image-decode';
import { updateInfiniteImage } from './virtual-scroll';

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

let topObjectUrl: string | null = null;
let infiniteObjectUrl: string | null = null;

export function initUpload() {
  const topInput = document.getElementById('top-upload') as HTMLInputElement;
  const infiniteInput = document.getElementById('infinite-upload') as HTMLInputElement;

  if (topInput) {
    topInput.addEventListener('change', () => handleUpload(topInput, 'top'));
  }

  if (infiniteInput) {
    infiniteInput.addEventListener('change', () => handleUpload(infiniteInput, 'infinite'));
  }
}

async function handleUpload(input: HTMLInputElement, role: 'top' | 'infinite') {
  const errorEl = document.getElementById(`${role}-error`);
  if (errorEl) errorEl.textContent = '';

  const file = input.files?.[0];
  if (!file) return;

  // Validate type
  if (!ALLOWED_TYPES.includes(file.type)) {
    showError(errorEl, 'Invalid file type. Please use JPEG, PNG, or WebP.');
    return;
  }

  // Validate size
  if (file.size > MAX_SIZE) {
    showError(errorEl, 'File too large. Maximum size is 10 MB.');
    return;
  }

  try {
    const { objectUrl } = await decodeImage(file);

    if (role === 'top') {
      if (topObjectUrl) URL.revokeObjectURL(topObjectUrl);
      topObjectUrl = objectUrl;
      const topImg = document.getElementById('top-image') as HTMLImageElement;
      if (topImg) topImg.src = objectUrl;
    } else {
      if (infiniteObjectUrl) URL.revokeObjectURL(infiniteObjectUrl);
      infiniteObjectUrl = objectUrl;
      updateInfiniteImage(objectUrl);
    }
  } catch (err) {
    showError(errorEl, 'Failed to decode image. Please try a different file.');
  }
}

function showError(el: HTMLElement | null, message: string) {
  if (el) el.textContent = message;
}

export function revokeUrls() {
  if (topObjectUrl) {
    URL.revokeObjectURL(topObjectUrl);
    topObjectUrl = null;
  }
  if (infiniteObjectUrl) {
    URL.revokeObjectURL(infiniteObjectUrl);
    infiniteObjectUrl = null;
  }

  const topImg = document.getElementById('top-image') as HTMLImageElement;
  if (topImg) topImg.src = '/images/default-top.png';

  updateInfiniteImage('/images/default-infinite.png');
}