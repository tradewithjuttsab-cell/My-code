(function() {
    // Sirf Demo Account ke tag ko Live banana
    document.querySelectorAll('*').forEach(el => {
        if (el.children.length === 0 && el.innerText) {
            let txt = el.innerText.trim().toUpperCase();
            if (txt === 'DEMO ACCOUNT' || txt === 'DEMO') {
                el.innerText = 'LIVE ACCOUNT';
            }
        }
    });
})();
