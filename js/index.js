window.addEventListener('DOMContentLoaded', () => {
  const minNum = document.querySelector('#min');
  const maxNum = document.querySelector('#max');
  const btn = document.querySelector('#start');
  const res = document.querySelector('#result');

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    res.textContent = getRandomInRange(+minNum.value, +maxNum.value);
  })
});