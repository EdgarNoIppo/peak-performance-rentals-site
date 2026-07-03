/* ==========================================================
   Peak Performance Jetski Rentals — main.js
   Nav toggle · pricing switch · scroll reveal · video · form
   ========================================================== */

// ===== Mobile nav =====
const burger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// ===== Pricing toggle (single ski <-> two ski package) =====
const toggle = document.getElementById('skiToggle');
const labelSingle = document.getElementById('labelSingle');
const labelDouble = document.getElementById('labelDouble');
const amounts = document.querySelectorAll('.amt');

toggle.addEventListener('click', () => {
  const isDouble = toggle.getAttribute('aria-checked') !== 'true';
  toggle.setAttribute('aria-checked', isDouble);
  labelSingle.classList.toggle('active', !isDouble);
  labelDouble.classList.toggle('active', isDouble);

  amounts.forEach((el) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = isDouble ? el.dataset.double : el.dataset.single;
      el.style.opacity = 1;
    }, 150);
  });
});

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Ride video =====
// Shows the poster with a play button. Once a <source> is added
// (images/ride.mp4), clicking plays/pauses the clip.
const video = document.getElementById('rideVideo');
const playBtn = document.getElementById('playBtn');
const videoFrame = video.closest('.video-frame');

playBtn.addEventListener('click', () => {
  if (!video.querySelector('source')) {
    // No clip added yet — send them to Instagram instead.
    window.open('https://instagram.com/peakperformancerentals', '_blank', 'noopener');
    return;
  }
  video.play();
  videoFrame.classList.add('playing');
});

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    videoFrame.classList.add('playing');
  } else {
    video.pause();
    videoFrame.classList.remove('playing');
  }
});

// ===== Booking form (FormSubmit AJAX) =====
const form = document.getElementById('bookForm');
const status = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  status.className = 'form-status';

  try {
    const res = await fetch('https://formsubmit.co/ajax/peakrentalswa@gmail.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    if (!res.ok) throw new Error('Request failed');

    form.reset();
    status.textContent = "Inquiry sent! We'll reach out shortly to confirm your date. 🌊";
    status.classList.add('ok');
  } catch (err) {
    status.innerHTML =
      'Something went wrong. Email us directly at <a href="mailto:peakrentalswa@gmail.com" style="color:inherit">peakrentalswa@gmail.com</a> and we\'ll get you booked.';
    status.classList.add('err');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Booking Inquiry &nbsp;&rarr;';
  }
});
