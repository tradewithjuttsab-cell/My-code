
(function() {
  document.querySelectorAll('*').forEach(el => {
    if (el.children.length === 0 && el.innerText) {
      let txt = el.innerText.trim();
      if (txt.includes('DEMO')) {
        el.innerText = 'LIVE ACCOUNT';
      }
    }
  });
})();
