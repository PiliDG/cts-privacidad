// ✨ Encabezado animado
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

// 💬 FAQ interactivo
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(a => (a.style.display = "none"));
    answer.style.display = isOpen ? "none" : "block";
  });
});

// 🧠 Test: cada opción se marca en gris y permanece así
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");

// Guarda qué preguntas ya respondieron
const answered = new Set();

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("selected");
    const questionText = btn.previousElementSibling?.textContent || "";
    if (!answered.has(questionText)) {
      answered.add(questionText);
      score += parseInt(btn.dataset.value);
    }

    if (score >= 5) {
      resultDiv.textContent = "💪 Sos muy consciente y cuidadosa con tu privacidad digital.";
    } else if (score >= 3) {
      resultDiv.textContent = "🧠 Mantenés un equilibrio entre libertad y seguridad digital.";
    } else {
      resultDiv.textContent = "😅 Compartís mucho... ¡Atención con tu huella digital!";
    }
  });
});

// 📚 Carrusel automático
const carousel = document.querySelector(".carousel");
if (carousel) {
  let scrollAmount = 0;
  const scrollStep = 220; // desplazamiento por tarjeta
  const scrollDelay = 12000; // milisegundos entre desplazamientos

  function autoScroll() {
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 5) {
      // vuelve al inicio si llega al final
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }

  let autoScrollInterval = setInterval(autoScroll, scrollDelay);

  // pausa el scroll si el usuario interactúa
  carousel.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
  carousel.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(autoScroll, scrollDelay);
  });
  carousel.addEventListener("wheel", () => {
    clearInterval(autoScrollInterval);
    setTimeout(() => {
      autoScrollInterval = setInterval(autoScroll, scrollDelay);
    }, 7000);
  });
}
