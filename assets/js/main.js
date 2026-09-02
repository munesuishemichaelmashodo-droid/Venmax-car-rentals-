// VenMax Car Rental & Tours — site interactions
document.addEventListener('DOMContentLoaded', function () {
  var WA_NUMBER = '263714225314';

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
    });
  }

  // Fleet filter chips
  var chips = document.querySelectorAll('.filter-chip');
  var cards = document.querySelectorAll('#fleetGrid .car-card');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var filter = chip.getAttribute('data-filter');
      cards.forEach(function (card) {
        var cat = card.getAttribute('data-cat');
        card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
      });
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Quick booking band -> WhatsApp
  var bkSubmit = document.getElementById('bk-submit');
  if (bkSubmit) {
    bkSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      var type = document.getElementById('bk-type').value;
      var loc = document.getElementById('bk-loc').value;
      var vehicle = document.getElementById('bk-vehicle').value;
      var date = document.getElementById('bk-date').value;
      var msg = 'Hi VenMax, I\'d like a quote:\n' +
                '- Hire type: ' + type + '\n' +
                '- Pick-up: ' + loc + '\n' +
                '- Vehicle: ' + vehicle +
                (date ? '\n- Pick-up date: ' + date : '');
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // Contact form -> WhatsApp
  var cSubmit = document.getElementById('c-submit');
  if (cSubmit) {
    cSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      var name = document.getElementById('c-name').value.trim();
      var phone = document.getElementById('c-phone').value.trim();
      var msgText = document.getElementById('c-msg').value.trim();
      var msg = 'Hi VenMax, my name is ' + (name || '—') +
                (phone ? ' (contact: ' + phone + ')' : '') +
                '.\n' + (msgText || 'I\'d like more information about your vehicles.');
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // Intentionally no scroll-reveal animation: content is visible by default.
});
