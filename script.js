(function () {
  const card = document.querySelector('.card');
  const overlay = document.querySelector('.card__overlay');
  const imageContainer = document.querySelector('.card__image');

  if (!card || !imageContainer) return;

  const overlayTabIndex = -1;
  if (overlay) {
    overlay.setAttribute('tabindex', overlayTabIndex.toString());
  }

  imageContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
    }
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--transition-speed', '0s');
  }

  console.log('NFT preview card loaded successfully.');
})();
