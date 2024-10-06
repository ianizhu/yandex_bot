// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bot for Yandex
// @author       Zhuleva Yana F.
// @match        https://ya.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==



  let searchBtn = document.getElementsByClassName("search3__button")[0]
  let input = document.getElementsByClassName("mini-suggest__input")[0];
  let links = document.links;

if (searchBtn !== undefined) {
  input.value = "Мифология бабы яги";
  searchBtn.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("mifolog.com") == true) {
      console.log("Нашел строку " + links[i])
    }
  }
}
