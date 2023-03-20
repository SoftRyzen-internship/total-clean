const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

card1.addEventListener('click', () => {
  card1.classList.toggle('clicked');
});

card2.addEventListener('click', () => {
  card2.classList.toggle('clicked');
});

card3.addEventListener('click', () => {
  card3.classList.toggle('clicked');
});

card4.addEventListener('click', () => {
  card4.classList.toggle('clicked');
});
