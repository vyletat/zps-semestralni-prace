/**
 * primitivni validace pomoci stringu z inputu
 */
function validateLogin() {
    const nick = $('#inputNickname').val();
    const password = $('#inputPassword').val();

    if (nick != null || password != null) {
        if (nick === 'admin' || password === 'admin') {
            console.log('Nice admin, you are login');
            //add alert and timeout - spis ne
            window.open("", "_self")
        } else {
            //neplatny uzivatel alert
            $('.alert').alert('show');
        }
    } else {
        //nic jste nenapsali
    }
}