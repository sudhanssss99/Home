// This JS file is here as a placeholder for any extra demo animation logic.
// For this design, all entry animations are handled via CSS.
// Additional fancy demo animations (e.g. sparkles, floating icons) can be added here.

document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.classList.add('animated-pop');
  });
  tile.addEventListener('mouseleave', () => {
    tile.classList.remove('animated-pop');
  });
});

// You can add more demo interactivity or animated effects here if desired.
