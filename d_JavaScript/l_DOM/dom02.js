document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  a.textContent = '<h2>textContent </h2>';
  b.innerHTML = '<h2>innerHTML 속성 </h2>';
});

document.addEventListener('DOMContentLoaded', () => {
  const memphis = document.querySelectorAll('.memphi');

  memphis.forEach((memphi, index) => {
    const width = (index+1)*100;

    memphi.setAttribute('width',width);
    memphi.setAttribute('height','250px');

    const source = './memphi.png';
    const alter = '멤피스';

    memphi.src = source;
    memphi.alt = alter
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('#container div');
  divs.forEach((div, index) => {
    const gradation = index*10;
    div.style.height = '10px';
    div.style['backgroundColor'] = `rgb(${gradation}, ${gradation}, ${gradation})`;
  });
});