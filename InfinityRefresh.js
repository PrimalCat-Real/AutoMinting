// ==UserScript==
// @name         AutoMint
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @match        http://localhost/*
// @match        http://127.0.0.1/*
// @icon         https://www.google.com/s2/favicons?domain=169pixel.app
// @grant        none
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


(function () {
    // Infinity repeat !!!

    const HOW_MUCH_TRIES_BEFORE_RELOAD = 20;

    for (let index = 0; index < HOW_MUCH_TRIES_BEFORE_RELOAD; index++) {
        parsWebsite()
    }
    setTimeout(() => location.reload(), 2000);

    function parsWebsite(){
        const buttons = document.querySelectorAll("button");
        const divs = document.querySelectorAll("div");
        // Loop through each button
        buttons.forEach(function(button, index) {
            if(button.textContent.toLowerCase() && button.textContent.toLowerCase().includes('mint')){
                console.log("Button " + (index + 1) + " text: " + button.textContent);
                try{
                    button.click()     
                }catch(e){
                    console.log(e);
                }  
            }
        });
    }
})();
