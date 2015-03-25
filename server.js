var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path;


var phantomscript = path.join(__dirname, 'phantomjs-script.js');

//console.log(phantomscript);


var childArgs = ['--web-security=no', phantomscript];

childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {


    console.log(stdout);

})