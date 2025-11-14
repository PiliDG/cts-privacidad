// -------------------------
// 1) Efecto máquina de escribir
// -------------------------
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

// -------------------------
// 2) FAQ Interactivo
// -------------------------
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const visible = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
    answer.style.display = visible ? "none" : "block";
  });
});

// -------------------------
// 3) TEST – puntaje y feedback
// -------------------------
let score = 0;
const buttons = document.querySelectorAll(".quiz .btn");
const resultDiv = document.getElementById("result");
const answered = new Set();

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const question = btn.previousElementSibling?.textContent || "";
    btn.classList.add("selected");

    if (!answered.has(question)) {
      answered.add(question);
      score += parseInt(btn.dataset.value);
    }

    if (score >= 5) {
      resultDiv.textContent = "💪 Sos muy cuidadosa con tu privacidad digital.";
    } else if (score >= 3) {
      resultDiv.textContent = "🧠 Tenés un equilibrio entre libertad y protección.";
    } else {
      resultDiv.textContent = "😅 Estás un poco expuesta... ¡Podés mejorar!";
    }
  });
});

// -------------------------
// 4) ANIMACIÓN de las barras cuando entran en pantalla
// -------------------------
const bars = document.querySelectorAll(".bar");
let barsAnimated = false;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !barsAnimated) {
      barsAnimated = true;
      bars.forEach(bar => {
        const width = bar.style.getPropertyValue("--target-width");
        bar.style.width = width;
      });
    }
  });
}, { threshold: 0.4 });

bars.forEach(bar => observer.observe(bar));

// -------------------------
// 5) SCROLL SUAVE
// -------------------------
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// -------------------------
// 6) Animación Fade-In para TODAS las secciones
// -------------------------
const fadeElements = document.querySelectorAll("section, header");

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all .8s ease";
});

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));

// -------------------------
// 7) Formulario de contacto (simulado)
// -------------------------
const contactForm = document.querySelector(".contact-form");
const contactResponse = document.getElementById("contact-response");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    contactResponse.textContent = "🌸 ¡Gracias! Tu mensaje fue enviado correctamente.";
    contactForm.reset();

    setTimeout(() => {
      contactResponse.textContent = "";
    }, 3500);
  });
}
