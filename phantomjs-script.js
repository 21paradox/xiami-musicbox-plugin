var page = require('webpage').create();

page.open('http://www.xiami.com', function (status) {

    //if (status === "success") {

    //    var title = page.evaluate(function () {

    //        //function simulateClick(el) {
    //        //    var evt;
    //        //    if (document.createEvent) {
    //        //        evt = document.createEvent("MouseEvents");
    //        //        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    //        //    }
    //        //    (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
    //        //}

    //        //simulateClick($('.icon.qq')[0]);

    //        //$('.icon.qq').click();

    //        //return $('.icon.qq').length;

    //        window.open('http://www.baidu.com');

    //    });

    //} else {

    //}

    var address = 'http://www.baidu.com'


    if (status !== 'success') {

        console.log('Unable to load the address!');
        phantom.exit();

    } else {

        page.onPageCreated = function (newPage) {

            newPage.onLoadFinished = function () {
                console.log(newPage.url);

                newPage.includeJs('http://libs.baidu.com/jquery/1.9.0/jquery.js', function () {

                    var title = newPage.evaluate(function () {

                        //document.getElementById('u').value = 
                        return $('#ptlogin_iframe').contents().find('#u').attr('class');
                    });

                    console.log(title);
                    phantom.exit();

                });
            };

        };

        page.evaluate(function (url) {

            //window.open(url + "?something=other", "_blank");

            function simulateClick(el) {
                var evt;
                if (document.createEvent) {
                    evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                }
                (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
            }

            simulateClick($('.icon.qq')[0]);

        }, address);

    }



    //phantom.exit();

});