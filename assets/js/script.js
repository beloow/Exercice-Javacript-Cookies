"use strict";

// constantes
let btnCookieCreate = document.getElementById('btn-cookie-create');
let btnCookieRead = document.getElementById('btn-cookie-read');
let btnCookieEdit = document.getElementById('btn-cookie-edit');
let btnCookieRecovered = document.getElementById('btn-cookie-recovered');
let btnCookieDelete = document.getElementById('btn-cookie-delete');

// fonctions
function cookieCreate() {
    document.cookie = "yourCookie=12345";
    alert('Cookie créé !');
}

function cookieRead(yourCookie) {
    cookieGet();
    console.log(cookieGet);
}

function cookieGet() {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let split = el.split('=');
        cookie[split[0].trim()] = split.slice(1).join("=");
    })
    return cookie[name];
}

function cookieEdit() {
    document.cookie = "yourCookie=54321";
    alert('Cookie modifié ! Sa valeur est désormais 54321');
}

function cookieDelete() {
    // document.cookie = "yourcookie=true";
    alert('Fonction vide');
}

// events
btnCookieCreate.addEventListener("click", cookieCreate);
btnCookieRead.addEventListener("click", cookieRead);
btnCookieEdit.addEventListener("click", cookieEdit);
btnCookieDelete.addEventListener("click", cookieDelete);