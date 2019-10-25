const layers = document.querySelectorAll('.parallax__layer');

function parallaxMove(wScroll) {
  Array.from(layers).forEach(layer => {
    const layerStyle = getComputedStyle(layer)
    if (layerStyle.display !== 'none') {
      const speed = layer.dataset.speed;
      const strafe = wScroll * speed / 10;
      layer.style.transform = `translateY(-${strafe}%)`;
    }
  });
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  parallaxMove(wScroll);
})