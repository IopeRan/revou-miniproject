const name = document.querySelector('.about-name');
const text = name.innerHTML;

name.innerHTML = '';

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.innerHTML = text[i];
  name.appendChild(span);
}

setTimeout(() => {
  name.classList.add('animated');
}, 1000);
