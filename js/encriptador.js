const input = document.querySelector('input');
const log = document.getElementById('encriptado');

input.addEventListener('input', getMessageEncoding);

// function updateValue(e) {
//   log.textContent = e.srcElement.value;
//   base64Encode(log);
//   console.log("result", base64Encode(log));
// }

function getMessageEncoding() {
    const messageBox = document.querySelector("input");
    let message = messageBox.value;
    let enc = new TextEncoder();
    log.textContent = enc.encode(message);
    return enc.encode(message);
  }