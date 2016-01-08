var informationBtn = document.getElementById('information-dialog');
var ipc = require('electron').ipcRenderer;

informationBtn.addEventListener('click', function (event) {
  ipc.send('open-information-dialog');
});

ipc.on('information-dialog-selection', function (event, index) {
  var message = "You selected ";
  if (index === 0) message += "yes.";
  else message += "no.";
  document.getElementById('info-selection').innerHTML = message;
});