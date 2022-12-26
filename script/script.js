function checkForm(){
    let emailTemplate = /^\w+([\-._]\w+)+@\w+([\.]\w+)/;

    const emailTxt = document.getElementById("emailId").value;
    const errorEmail = document.getElementById("errorEmailId");
    if(!emailTemplate.test(emailTxt)){
        errorEmail.innerText = 'Wrong email address';
        return false;
    }

    const passCheck = document.getElementById("passwordId").value;
    if(!/^.{6,}$/.test(passCheck)){
        alert('Пароль повинен мати мінімум 6 символів!');
        return false;
    }
    if(!/[a-z]/.test(passCheck)){
        alert("Пароль повинен мати хоча б символ нижнього регістру!");
        return false;
    }
    if(!/[A-Z]/.test(passCheck)){
        alert("Пароль повинен мати хоча б символ верхнього регістру!");
        return false;
    }
    if(!/\d/.test(passCheck)){
        alert('Пароль повинен мати хоча б один цифровий символ!');
        return false;
    }
    
    const repeatTxt = document.getElementById("repeatId").value;
    const passTxt = document.getElementById("passwordId").value;
    const errorRepeat = document.getElementById("errorRepeatId");
    if(repeatTxt !== passTxt){
        errorRepeat.innerText = 'Passwords must match';
        return false;
    }
    setCookies(document.getElementById("emailId").name, document.getElementById("emailId").value, 1);
    setCookies(document.getElementById("passwordId").name, document.getElementById("passwordId").value, 1);
    setCookies(document.getElementById("repeatId").name, document.getElementById("repeatId").value, 1);
    
    return location.assign('http://127.0.0.1:5500/index2.html');
}

let cookiesObject = getCookies();
console.log(cookiesObject);

document.getElementById("emailId").value =  cookiesObject.emailN;
document.getElementById("passwordId").value = cookiesObject.pass;
document.getElementById("repeatId").value = cookiesObject.passRepeat;

if(document.getElementById("emailId").value == 'undefined'){
    document.getElementById("emailId").value = "";
}
if(document.getElementById("passwordId").value == 'undefined'){
    document.getElementById("passwordId").value = "";
}
if(document.getElementById("repeatId").value == 'undefined'){
    document.getElementById("repeatId").value = "";
}

function setCookies(cname, cvalue, time){
    var today = new Date();
    var expiry = new Date(today.getTime() + time * 3600 * 1000);
    let expires = `expires=${expiry.toUTCString()};`;
    let cookie = `${cname}=${cvalue};${expires}path=\\;`;
    document.cookie = cookie;
}

function getCookies(){
    let cookieObject = {};
    let cookieValues = document.cookie.split("; ");
    console.log(cookieValues);
    for(let i=0; i<cookieValues.length; i++){
        let parts = cookieValues[i].split("=");
        cookieObject[parts[0]] = parts[1];
    }
    return cookieObject;
}