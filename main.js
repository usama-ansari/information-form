let popup = document.getElementById('popup');
let btnSubmit = document.getElementById('btnSubmit');
let form = document.getElementById('form');


function openPop(){
    popup.classList.add('popupShow');
    form.style.visibility = 'hidden';
}
function closePop(){
    popup.classList.remove('popupShow');
    form.style.visibility='visible';
}
