const nav = document.getElementById("nav");
const btnMenu = document.getElementById("hamburguer");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnMenu.innerHTML = nav.classList.contains("active") ? "&#10005;" : "&#9776;";
});

const slides = document.querySelectorAll('.carrossel-container img');
const controles = document.querySelectorAll('.controle');
let slideAtual = 0;
let intervalo;

function mostrarSlide(index) {
  slideAtual = (index + slides.length) % slides.length;

  slides.forEach(s => s.classList.remove('ativo'));
  controles.forEach(c => c.classList.remove('ativo'));

  slides[slideAtual].classList.add('ativo');
  controles[slideAtual].classList.add('ativo');
}

function proximoSlide() {
  mostrarSlide(slideAtual + 1);
}

function iniciarAuto() {
  intervalo = setInterval(proximoSlide, 4000);
}

function reiniciarAuto() {
  clearInterval(intervalo);
  iniciarAuto();
}

controles.forEach((controle, index) => {
  controle.addEventListener('click', () => {
    mostrarSlide(index);
    reiniciarAuto();
  });
});

mostrarSlide(0);
iniciarAuto();

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const status = document.createElement('p');
  status.textContent = "Obrigado pela sua mensagem!";
  status.style.color = 'lightgreen';

  form.append(status);
  form.reset();

  setTimeout(() => status.remove(), 5000);
});