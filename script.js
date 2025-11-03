// Animación de escritura del encabezado
document.addEventListener("DOMContentLoaded", () => {
  const text = "Bienvenidos al Proyecto CTS: Privacidad y Vigilancia Masiva";
  const typewriter = document.getElementById("typewriter");
  let i = 0;
  function typing() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 60);
    }
  }
  typing();
});

// Lógica del FAQ
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(a => (a.style.display = "none"));
    answer.style.display = isOpen ? "none" : "block";
  });
});

// Mini test
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    score += parseInt(btn.dataset.value);
    btn.style.opacity = 0.5;
    if (score >= 3) {
      resultDiv.textContent = "💪 Sos consciente y crítica con la tecnología. Protegés tu privacidad.";
    } else if (score === 2) {
      resultDiv.textContent = "🧠 Mantenés equilibrio entre libertad y seguridad digital.";
    } else {
      resultDiv.textContent = "😅 Compartís mucho... ¡Atención con tu huella digital!";
    }
  });
});
