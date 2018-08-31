var q = document.querySelector.bind(document);
var qa = document.querySelectorAll.bind(document);

document.addEventListener('click', function(e) {
    var el = e.target;
    while(el = el.parentElement) 
        if (el.id === 'open-toolbar' || el.classList.contains('splitter-collapse')) break;

    var open = !!el;
    var splitter = q('.splitter-collapse');
    if (open) splitter.classList.add('open');
    else splitter.classList.remove('open');
});

var backBtn = q('.back-button');
if (backBtn) {
    backBtn.addEventListener('click', function() {
        window.history && window.history.back();
    });
}
