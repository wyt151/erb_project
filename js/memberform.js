const today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = String(today.getFullYear()-80);
let minDate = yyyy + '-' + mm + '-' + dd;
let maxDate = today.toJSON().slice(0, 10);
const dp = document.getElementById("f-birthdate");
dp.setAttribute('min', minDate);
dp.setAttribute('max', maxDate);


const otherCheckbox = document.querySelector("#sport7");
const otherText = document.querySelector("#sportOther");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
if (otherCheckbox.checked) {
otherText.style.visibility = "visible";
otherText.value = "";
} else {
otherText.style.visibility = "hidden";
}
});

function checkSurname() {
let x = document.getElementById("f-surname");
let y = document.querySelector(".a1");
if (x.value === ""){
y.style.visibility = "visible";
} else {
y.style.visibility = "hidden";
};
}

function checkName() {
let x = document.getElementById("f-name");
let y = document.querySelector(".a2");
if (x.value === ""){
y.style.visibility = "visible";
} else {
y.style.visibility = "hidden";
};
}

function checkHkid() {
let x1 = document.getElementById("f-hkid");
let x2 = document.getElementById("f-hkid-1");
let y = document.querySelector(".a3");
if ((x1.value !== "") && (x2.value !== "")){
y.style.visibility = "hidden";
} else {
    y.style.visibility = "visible";
};
}

function checkDate() {
let x = document.getElementById("f-birthdate");
let y = document.querySelector(".a4");
if (x.value === ""){
y.style.visibility = "visible";
} else {
y.style.visibility = "hidden";
};
}

function checkTel() {
let x1 = document.getElementById("f-tel");
let y = document.querySelector(".a5");
if ((x1.value !== "") && (x1.value.length === 8)){
y.style.visibility = "hidden";
} else {
    y.style.visibility = "visible";
};
}

function checkEmail() {
let x = document.getElementById("fEmail1");
let y = document.querySelector(".a6");
if (x.value === ""){
y.style.visibility = "visible";
} else {
y.style.visibility = "hidden";
};
}

function checkEmailMatch() {
const email1 = document.getElementById("fEmail1").value;
const email2 = document.getElementById("fEmail2").value;
let y = document.querySelector(".not-match");
if (email1 !== email2) {
    y.style.visibility = "visible";
} else {
y.style.visibility = "hidden";
};
}