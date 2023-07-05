const lavenueGreene = {};

// hamburger menu: https://www.youtube.com/watch?v=flItyHiDm7E&t=2s
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((link) =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);

// clearing formspree form
// tutorial: https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission
lavenueGreene.clearForm = () => {

    const contactForm = document.querySelector('#form');
    window.onbeforeunload = () => {
        contactForm.reset();
    };
};

// captcha
window.onload = function() { 
  var el = document.querySelector('#g-recaptcha-response'); 
  if (el) { 
    el.setAttribute('required', 'required'); 
  } 
}

lavenueGreene.clearForm();

