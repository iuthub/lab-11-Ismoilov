

document.querySelector('#pimpinIt').onclick = function () {
    let text = document.querySelector('#pimp-text');
    text.style.fontSize = "24pt";
}

document.querySelector('#check').onclick = function () {
    let text = document.querySelector('#pimp-text');
    if (this.checked) {
        text.style.fontWeight = "bold";
        text.style.color = "green";
        text.style.textDecoration = "underline";
    }
    else {
        text.style.fontWeight = "normal";
    }
}

document.querySelector('#snoop').onclick = function () {
    let text = document.querySelector('#pimp-text');
    text.value += ".";
    text.style.textTransform = "uppercase";
    text.value = text.value.split('.').join('-izzle.');
}




