"use strict";!function(){var n=$("html"),t=function(){$(".btn-menu").on("click",function(t){t.preventDefault(),n.toggleClass("menu-opened")})},e=function(){t()};e()}();

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle-button');

    themeButton.addEventListener('click', function () {
        body.classList.toggle('theme-dark');
        body.classList.toggle('theme-light');
    });
});
