import { initUpload, revokeUrls } from './upload';
import { initVirtualScroll } from './virtual-scroll';
import { initRarity } from './rarity';

const rarityCounts = {
  common: 0,
  rare: 0,
  epic: 0,
  wow: 0,
};

function updateCounters() {
  const commonCounter = document.getElementById('common-counter');
  const rareCounter = document.getElementById('rare-counter');
  const epicCounter = document.getElementById('epic-counter');
  const wowCounter = document.getElementById('wow-counter');

  if (commonCounter) commonCounter.textContent = String(rarityCounts.common);
  if (rareCounter) rareCounter.textContent = String(rarityCounts.rare);
  if (epicCounter) epicCounter.textContent = String(rarityCounts.epic);
  if (wowCounter) wowCounter.textContent = String(rarityCounts.wow);
}

function incrementRarity(rarity: 'common' | 'rare' | 'epic' | 'wow') {
  rarityCounts[rarity]++;
  updateCounters();

  const liveRegion = document.getElementById('aria-live-' + rarity);
  if (liveRegion) {
    liveRegion.textContent = `${rarityCounts.wow}`;
  }
}

function resetSession() {
  rarityCounts.common = 0;
  rarityCounts.rare = 0;
  rarityCounts.epic = 0;
  rarityCounts.wow = 0;
  updateCounters();
  revokeUrls();
  initRarity();
  initVirtualScroll(incrementRarity);
}

document.addEventListener('DOMContentLoaded', () => {
  initUpload();
  initRarity();
  initVirtualScroll(incrementRarity);
  updateCounters();

  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetSession);
  }
});
