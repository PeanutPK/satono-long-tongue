let seed = Date.now();

export function initRarity() {
  seed = Date.now();
}

export function assignRarity(index: number): string {
  const rand = seededRandom(seed + index);

  // WOW: 0.1% = 0.001
  if (rand < 0.001) return 'wow';
  
  // Epic: 4.9% = 0.049, cumulative 0.001 + 0.049 = 0.050
  if (rand < 0.050) return 'epic';
  
  // Rare: 25% = 0.25, cumulative 0.050 + 0.25 = 0.300
  if (rand < 0.300) return 'rare';
  
  // Common: 70% = remaining (0.300 to 1.0)
  return 'common';
}

function seededRandom(s: number): number {
  const x = Math.sin(s) * 10000;
  return x - Math.floor(x);
}