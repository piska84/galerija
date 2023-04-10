function changeColor(event) {
    const card = event.target.closest('.card');
    if (card) {
      card.classList.add('selected');
    } else {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.classList.remove('selected'));
    }
  }
  
  window.addEventListener('click', changeColor);
  