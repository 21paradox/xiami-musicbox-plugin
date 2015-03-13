﻿// ==UserScript==
// @name         虾米音乐盒 发布信息自动加时间戳
// @namespace    21paradox@outlook.com
// @version      0.1
// @description  xiami 音乐盒 小具
// @author       https://github.com/21paradox/xiami-musicbox-plugin
// @include      http://www.xiami.com/play*
// @grant        none
// ==/UserScript==


$(window).on('load', function () {
    setTimeout(init, 1000);
});

function init() {

    // 增加 发送的监控
    function add() {

        var messageTextArea = $('.my-message');

        var messageTextAreaCopy = messageTextArea.clone();

        messageTextArea.after(messageTextAreaCopy).hide();

        var sendBtn = $('.btn-send');

        var sendBtnCopy = sendBtn.clone();

        sendBtn.after(sendBtnCopy).hide();

        sendBtnCopy.on('click', function () {

            var val = messageTextAreaCopy.val();

            if (!val) {
                return;
            }

            var date = new Date();

            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            var valnew = 'At: ' + hour + ':' + minutes + ':' + seconds + ' ' + val;

            messageTextArea.val(valnew);

            simulateClick(sendBtn[0]);

            messageTextAreaCopy.val('');

        });

        $('.smile-list').on('click', 'li', function (e) {

            var emoji = $(this).text();
            messageTextAreaCopy.val(messageTextAreaCopy.val() + emoji);
        });

        var lastkey;
        messageTextAreaCopy.on('keyup', function (e) {

            if (e.which == 13 && lastkey == 16) {
                sendBtnCopy.click();
            }

            lastkey = e.which;
        });
    }

    // http://stackoverflow.com/questions/5658849/whats-the-equivalent-of-jquerys-trigger-method-without-jquery
    function simulateClick(el) {
        var evt;
        if (document.createEvent) {
            evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
    }

    if ($('.my-message')) {

        setTimeout(add, 1000);
        console.log('init xiami 时间戳 插件')

    } else {

        $('.seiya-btn').one('click', function () {
            setTimeout(add, 1000);
        });
    }
}