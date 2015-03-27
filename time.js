// ==UserScript==
// @name         虾米音乐盒 发布信息自动加时间戳
// @namespace    21paradox@outlook.com
// @version      0.2.4
// @description  xiami 直播间 小工具
// @author       https://github.com/21paradox/xiami-musicbox-plugin
// @include      http://www.xiami.com/play*
// @grant        none
// ==/UserScript==

//下载地址 https://greasyfork.org/zh-CN/scripts/8572-%E8%99%BE%E7%B1%B3%E9%9F%B3%E4%B9%90%E7%9B%92-%E5%8F%91%E5%B8%83%E4%BF%A1%E6%81%AF%E8%87%AA%E5%8A%A8%E5%8A%A0%E6%97%B6%E9%97%B4%E6%88%B3

KISSY.use('core', function (KISSY) {

    var $ = KISSY.Node.all;

    function change() {
        var val = $('.my-message').val();

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

        var $msg = $('.my-message');

        $msg.val(valnew);

        $('.btn-send').fire('click');

    }

    $(document).on('keypress', function (e) {
        if (e.which === 112) {
            $('#J_volumeSpeaker').fire('click')
        }
    });

    KISSY.ready(function (S) {

        setTimeout(function () {
            console.log('init xiami 时间戳 插件');

            $('.btn-send').on('mousedown', function (e) {
                change();
            });

            $('.my-message').detach().on('keypress', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    change();
                }
            })

            .on('focus', function (e) {

                if ($(this).val() === '请输入内容') {
                    $(this).val('');
                }
            });

        }, 1000);
    });

});