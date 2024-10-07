// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bot for Yandex
// @author       Zhuleva Yana F.
// @match        https://ya.ru/*
// @match        https://napli.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

let searchBtn = document.getElementsByClassName("search3__button")[0]
let input = document.getElementsByClassName("mini-suggest__input")[0];
let links = document.links;
let keywords = ["баба яга в славянской мифологии", "боги и существа из мифологии", "мифология бабы яги"];
let keyword = keywords[getRandom(0, keywords.length)];

if (searchBtn !== undefined) {
  let i = 0;
  let timerId = setInterval(function() {
    input.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      searchBtn.click();
    }
  }, 300)

} else if (location.hostname == "mifolog.com") {
  console.log("Мы на целевом сайте");
}

else {
  let nextPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("mifolog.com") != -1) {
        let link = links[i];
        nextPage = false;
        console.log("Нашел строку " + link)
        setTimeout(()=>{
        link.click();
      }, getRandom(2000, 4000));
        break;
    }
  }
  if (document.querySelector(".Pager-Item_type_page").innerText == "5") {
    nextPage = false;
    location.href = "https://ya.ru/";
  }
      if (nextPage) {
    setTimeout(()=>{
      document.querySelector('.Pager-Item_type_next').click();
    }, getRandom(2500, 4000))

  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
