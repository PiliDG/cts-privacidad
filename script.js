// Encabezado animado
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

// Test: cada opción se marca en gris y permanece así
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");

// Guarda qué preguntas ya respondieron
const answered = new Set();

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // marcar el botón elegido
    btn.classList.add("selected");

    // identificar la pregunta
    const questionText = btn.previousElementSibling?.textContent || "";
    if (!answered.has(questionText)) {
      answered.add(questionText);
      score += parseInt(btn.dataset.value);
    }

    // mostrar resultado dinámico
    if (score >= 5) {
      resultDiv.textContent = "💪 Sos muy consciente y cuidadosa con tu privacidad digital.";
    } else if (score >= 3) {
      resultDiv.textContent = "🧠 Mantenés un equilibrio entre libertad y seguridad digital.";
    } else {
      resultDiv.textContent = "😅 Compartís mucho... ¡Atención con tu huella digital!";
    }
  });
});
