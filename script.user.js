// ==UserScript==
// @name         nxhentai
// @namespace    http://github.com/taropun
// @version      0.1
// @description  Make nhentai a tiny bit more like exhentai
// @author       taropun
// @match        http://nhentai.net/g/*/*/
// @match        https://nhentai.net/g/*/*/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function spaceScroller(e) {
    if (!e.shiftKey && e.keyCode === 32) { // space
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            var currentPage = parseInt(document.querySelector('.page-number>.current').textContent, 10);
            var pageCount = parseInt(document.querySelector('.page-number>.num-pages').textContent, 10);

            e.preventDefault();
            if (currentPage < pageCount) {
                document.querySelector('.next').click();
            } else {
                document.querySelector('.back-to-gallery>a').click();
            }
        }
    }
}

window.addEventListener('keydown', spaceScroller);
