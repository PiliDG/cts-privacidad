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

// Mini test con selección permanente por pregunta
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");

// Cada pregunta tendrá sus propios botones
const questions = [];
let currentQuestionIndex = -1;

buttons.forEach(btn => {
  // Cada grupo de dos botones pertenece a una pregunta
  const questionId = btn.previousElementSibling?.textContent || "pregunta";
  questions.push(questionId);

  btn.addEventListener("click", () => {
    // Quitar selección previa dentro de la misma pregunta
    const parent = btn.parentNode;
    const siblings = parent.querySelectorAll(".btn");
    siblings.forEach(sib => sib.classList.remove("selected"));

    // Marcar el botón elegido
    btn.classList.add("selected");

    // Calcular puntaje total nuevamente
    const allSelected = document.querySelectorAll(".quiz .btn.selected");
    score = 0;
    allSelected.forEach(sel => {
      score += parseInt(sel.dataset.value);
    });

    // Mostrar resultado dinámico
    const total = 6;
    if (score >= 5) {
      resultDiv.textContent = "💪 Sos muy consciente y cuidadosa con tu privacidad digital.";
    } else if (score >= 3) {
      resultDiv.textContent = "🧠 Mantenés un equilibrio entre libertad y seguridad digital.";
    } else {
      resultDiv.textContent = "😅 Compartís mucho... ¡Atención con tu huella digital!";
    }
  });
});
