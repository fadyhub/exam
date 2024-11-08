import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import '../sass/style.scss';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
    }
)();

document.querySelectorAll('.add-to-cart').forEach(item => {
  item.addEventListener("click", () => {
      alert("أضيف المُنتج إلى العربة")
  })
});


const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl =>{
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')){
    navLinkEl.classList.add('active');
  }
});



