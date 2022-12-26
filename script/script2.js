const nameid = document.getElementById("nameId");
const surnameid = document.getElementById("surnameId");
const yearid = document.getElementById("yearId");
const genderid = document.getElementById("genderId");
const phoneid = document.getElementById("phoneId");
const skypeid = document.getElementById("skypeId");

function checkForm(){
    let nameTemplate = /^([a-zA-Z]+)$/;
    let limit = /^.{1,20}$/;
    let phoneTemplate = /^\(?(\d{3})\)?\s?(\d{3})\s?[-]?\s?(\d{2})\s?[-]?\s?(\d{2,4})$/;
    let skypeTemplate = /^([A-Za-z\d\s.-]+)$/;

    const nameVal = document.getElementById("nameId").value;
    if(!nameTemplate.test(nameVal)){
        alert("Ім'я повинно мати тільки літери!");
        return false;
    }
    if(!limit.test(nameVal)){
        alert("Ім'я повинно мати тмаксимум 20 символів!");
        return false;
    }

    const surnameVal = document.getElementById("surnameId").value;
    if(!nameTemplate.test(surnameVal)){
        alert("Прізвище повинно мати тільки літери!");
        return false;
    }
    if(!limit.test(surnameVal)){
        alert("Прізвище повинно мати тмаксимум 20 символів!");
        return false;
    }

    const currentYear = new Date().getFullYear();
    let num = (currentYear%10);
    let numL = (parseInt(currentYear/10))%10;
    let yearTemplate = /^(19[0-9]\d|200\d|20[0-numL][0-num])$/;
    const yearVal = document.getElementById("yearId").value;
    if(!yearTemplate.test(yearVal)){
        alert("Рік народження має бути від 1900 до поточного!");
        return false;
    }

    const phoneVal = document.getElementById("phoneId").value;
    if(!phoneTemplate.test(phoneVal)){
        alert("Номер телефону має бути від 10 до 12 цифр!")
    }

    const skypeVal = document.getElementById("skypeId").value;
    if(!skypeTemplate.test(skypeVal)){
        alert("Skype повинен мати будь-яку кількість символів: літери, цифри, дефіс, крапка!")
    }

    setCookies(nameid.name, nameid.value, 1);
    setCookies(surnameid.name, surnameid.value, 1);
    setCookies(yearid.name, yearid.value, 1);
    setCookies(genderid.name, genderid.value, 1);
    setCookies(phoneid.name, phoneid.value, 1);
    setCookies(skypeid.name, skypeid.value, 1);
    return true;
}

const obj = getCookies();
console.log(obj);
nameid.value = obj.firstname;
surnameid.value = obj.surname;
yearid.value = obj.yearOfbirth;
genderid.value = obj.gender;
phoneid.value = obj.phone;
skypeid.value = obj.skype;

textHello.innerText = `Hello, ${obj.emailN} `;

if(nameid.value == 'undefined'){
    nameid.value = "";
}
if(surnameid.value == 'undefined'){
    surnameid.value = "";
}
if(yearid.value == 'undefined'){
    yearid.value = "";
}
if(phoneid.value == 'undefined'){
    phoneid.value = "";
}
if(skypeid.value == 'undefined'){
    skypeid.value = "";
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

function exitFunction(){
    setCookies(nameid.name, nameid.value, -1);
    setCookies(surnameid.name, surnameid.value, -1);
    setCookies(yearid.name, yearid.value, -1);
    setCookies(genderid.name, genderid.value, -1);
    setCookies(phoneid.name, phoneid.value, -1);
    setCookies(skypeid.name, skypeid.value, -1);
}