import { assignRarity } from './rarity';

const SEGMENT_HEIGHT = 300;
const BUFFER_SIZE = 20;
let container: HTMLElement | null = null;
let seenSegments = new Set<number>();
let rafId: number | null = null;
let highestIndex = 0;
let currentInfiniteUrl = '/images/default-infinite.png';
let onRarityCallback: ((rarity: 'common' | 'rare' | 'epic' | 'wow') => void) | null = null;

let rarityObserver: IntersectionObserver | null = null;

export function initVirtualScroll(
  onRarity: (rarity: 'common' | 'rare' | 'epic' | 'wow') => void
) {
  container = document.getElementById('infinite-container');
  if (!container) return;

  container.innerHTML = '';
  seenSegments.clear();
  highestIndex = 0;
  onRarityCallback = onRarity;

  rarityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const seg = entry.target as HTMLElement;
          const index = parseInt(seg.dataset.index || '0', 10);
          const rarity = seg.dataset.rarity as 'common' | 'rare' | 'epic' | 'wow';

          if (!seenSegments.has(index)) {
            seenSegments.add(index);
            if (onRarityCallback) {
              onRarityCallback(rarity);
            }
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  for (let i = 0; i < BUFFER_SIZE * 2; i++) {
    appendSegment(i);
  }

  const throttledScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      handleScroll();
      rafId = null;
    });
  };

  window.addEventListener('scroll', throttledScroll, { passive: true });
}

function appendSegment(index: number): HTMLElement {
  const seg = document.createElement('div');
  seg.className = 'segment';
  seg.style.backgroundImage = `url(${currentInfiniteUrl})`;
  seg.dataset.index = String(index);

  const rarity = assignRarity(index);
  seg.dataset.rarity = rarity;

  const overlay = document.createElement('div');
  overlay.className = 'segment-overlay';
  overlay.textContent = rarity.toUpperCase();
  overlay.setAttribute('aria-label', `Rarity: ${rarity}`);
  seg.appendChild(overlay);

  if (rarityObserver) {
    rarityObserver.observe(seg);
  }

  if (container) {
    container.appendChild(seg);
  }

  if (index > highestIndex) {
    highestIndex = index;
  }

  return seg;
}

function handleScroll() {
  if (!container) return;

  const scrollTop = window.scrollY;
  const viewportBottom = scrollTop + window.innerHeight;

  const containerBottom = container.offsetHeight;
  const distanceToBottom = containerBottom - viewportBottom;

  if (distanceToBottom < window.innerHeight * 2) {
    const segmentsToAdd = BUFFER_SIZE;
    for (let i = 0; i < segmentsToAdd; i++) {
      appendSegment(highestIndex + 1);
    }
  }

  const segments = container.querySelectorAll('.segment');
  const firstVisibleIndex = Math.floor(scrollTop / SEGMENT_HEIGHT);

  segments.forEach((seg) => {
    const segIndex = parseInt((seg as HTMLElement).dataset.index || '0', 10);
    if (segIndex < firstVisibleIndex - BUFFER_SIZE) {
      if (rarityObserver) {
        rarityObserver.unobserve(seg);
      }
      seg.remove();
    }
  });
}

export function updateInfiniteImage(url: string) {
  currentInfiniteUrl = url;
  const segments = document.querySelectorAll('.segment');
  segments.forEach((seg) => {
    (seg as HTMLElement).style.backgroundImage = `url(${url})`;
  });
}