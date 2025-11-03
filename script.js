// Animación del encabezado
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

// FAQ interactivo
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(a => (a.style.display = "none"));
    answer.style.display = isOpen ? "none" : "block";
  });
});

// Mini test actualizado con feedback visual
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("selected");
    btn.parentNode.querySelectorAll(".btn").forEach(other => {
      if (other !== btn) other.classList.remove("selected");
    });

    score += parseInt(btn.dataset.value);
    const total = 6;
    if (score >= 5) {
      resultDiv.textContent = "💪 Sos muy consciente y cuidados@ con tu privacidad digital.";
    } else if (score >= 3) {
      resultDiv.textContent = "🧠 Mantenés un equilibrio entre libertad y seguridad digital.";
    } else {
      resultDiv.textContent = "😅 Compartís mucho... ¡Cuidado con tu huella digital!";
    }
  });
});
