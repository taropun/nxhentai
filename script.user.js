// ==UserScript==
// @name         nxhentai
// @namespace    http://github.com/taropun
// @version      0.1
// @description  Make nhentai a tiny bit more like exhentai
// @author       taropun
// @match        http://nhentai.net/g/*/*/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function spaceScroller(e) {
    if (!e.shiftKey && e.keyCode === 32) { // space
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            var currentPage = parseInt($('.page-number>.current')[0].textContent, 10);
            var pageCount = parseInt($('.page-number>.num-pages')[0].textContent, 10);
            
            e.preventDefault();
            if (currentPage < pageCount) {
                $('.next')[0].click();
            } else {
                $('.back-to-gallery>a')[0].click();
            }
        }
    }
}

window.addEventListener('keydown', spaceScroller);
