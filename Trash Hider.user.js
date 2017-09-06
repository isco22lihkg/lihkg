// ==UserScript==
// @name         Trash Hider
// @version      0.1
// @description  隱藏KPOP同陳雲
// @author       ISCO22
// @match        https://lihkg.com/category/*
// @match        https://lihkg.com/thread/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==


jQuery(window).load(function () {var Trash = ['KPOP]','GFRIEND','K-HipHop','Wanna One','I.O.I','BLACKPINK','NCTzen','MAMAMOO','TWICE','AOA','EXID','IU','SEVENTEEN','DIA','Sone','Lovelinus','OH MY GIRL','Red Velvet','WINNER','SECHSKIES','Gugudan','Vixx','CLC','Apink','Weki Meki','防彈少年團','Dreamcatcher','宇宙少女','EXO',`Girl's Day`,'Pristin','本月少女','APRIL','T-ARA','陳雲', '陳雲根', '陳云', '陳云根'];var i,u;setTimeout(function () {for (i=0; i < Trash.length; i++){var TrashTopic = $("span:contains(" + Trash[i] + ")");if (TrashTopic.length > 0){for(u=0; u < TrashTopic.length; u++){TrashTopic.eq(u).closest("div").closest("div").closest("div").closest("a").closest("div").hide();}}}}, 500);});