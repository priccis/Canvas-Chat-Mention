// https://stackoverflow.com/a/8496919 @zatatatata

function callback(e) {
    var e = window.e || e;

    if (e.target.className !== 'ctf-message__name')
        return;

    var chatInput = document.getElementsByTagName('input')[1];
    var userName = e.target.textContent.split(" ");
    chatInput.value = `@${userName[0]} ${userName[1]}: `;
    chatInput.focus();
}
// TODO: Check if target is iframe @ chat.instructure.com
var r = document.getElementById('root');
if (r) {
    if (r.addEventListener)
        r.addEventListener('click', callback, false);
    else
        r.attachEvent('onclick', callback);
}