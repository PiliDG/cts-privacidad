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

// FAQ
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(a => (a.style.display = "none"));
    answer.style.display = isOpen ? "none" : "block";
  });
});

// Test: cada opción queda marcada en gris
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // desmarcar botones de esa pregunta
    const parent = btn.parentNode;
    parent.querySelectorAll(".btn").forEach(sib => sib.classList.remove("selected"));
    // marcar el elegido
    btn.classList.add("selected");

    // recalcular puntuación total
    const allSelected = document.querySelectorAll(".quiz .btn.selected");
    score = 0;
    allSelected.forEach(sel => (score += parseInt(sel.dataset.value)));

    // mostrar resultado
    if (score >= 5) {
      resultDiv.textContent = "💪 Sos muy consciente y cuidadosa con tu privacidad digital.";
    } else if (score >= 3) {
      resultDiv.textContent = "🧠 Mantenés un equilibrio entre libertad y seguridad digital.";
    } else {
      resultDiv.textContent = "😅 Compartís mucho... ¡Atención con tu huella digital!";
    }
  });
});
