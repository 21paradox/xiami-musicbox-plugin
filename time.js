


$(function () {

    if (location.href.indexOf('http://www.xiami.com/play?ids=/song/playlist/id') !== 0) {
        return;
    }

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

            var valnew = val + ' At: ' + hour + ':' + minutes + ':' + seconds;

            messageTextArea.val(valnew);

            simulateClick(sendBtn[0]);

            messageTextAreaCopy.val('');

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

    $('.seiya-btn').one('click', function () {

        setTimeout(add, 1000);

    });

});