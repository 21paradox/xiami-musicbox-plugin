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

    //var address = 'http://www.baidu.com'


    if (status !== 'success') {

        console.log('Unable to load the address!');
        phantom.exit();

    } else {

        page.onResourceReceived = function (res, network) {

            console.log(res.url)

            setTimeout(function () {

                phantom.exit();

            },10*1000)

        };


        page.onPageCreated = function (newPage) {

            newPage.onLoadFinished = function () {
                console.log(newPage.url);

                //newPage.includeJs('http://libs.baidu.com/jquery/1.9.0/jquery.js', function () {

                //    var title = newPage.evaluate(function () {

                //        //document.getElementById('u').value =
                //        return $('#ptlogin_iframe').contents().find('#u').attr('class');
                //    });

                //    console.log(title);
                //    phantom.exit();

                //});

                var title = newPage.evaluate(function () {

                    //document.getElementById('u').value =
                    //return $('#ptlogin_iframe').contents().find('#u').attr('class');
                    document.getElementById('ptlogin_iframe')
                            .contentDocument
                            .getElementById('u').value = '1036339815';

                    document.getElementById('ptlogin_iframe')
                            .contentDocument
                            .getElementById('p').value = '88224426swz';

                    function simulateClick(el) {
                        var evt;
                        if (document.createEvent) {
                            evt = document.createEvent("MouseEvents");
                            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        }
                        (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
                    }

                    var loginbtn = document.getElementById('ptlogin_iframe')
                                           .contentDocument
                                           .getElementById('login_button');

                    simulateClick(loginbtn);

                    return document.getElementById('ptlogin_iframe')
                                    .contentDocument
                                    .getElementById('verifycode');
                });

                console.log(title);
            };

            page.onNavigationRequested = function (url, type, willNavigate, main) {
                console.log('Trying to navigate to: ' + url);
                console.log('Caused by: ' + type);
                console.log('Will actually navigate: ' + willNavigate);
                console.log('Sent from the page\'s main frame: ' + main);
            }

        };

        page.evaluate(function (url) {

            function simulateClick(el) {
                var evt;
                if (document.createEvent) {
                    evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                }
                (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
            }

            simulateClick($('.icon.qq')[0]);
        });

    }



    //phantom.exit();

});