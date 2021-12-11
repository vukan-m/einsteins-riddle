function action(btn) {
    btn.style.display = "none";
}

function reset() {
    // document.getElementsByTagName("td").style.display = "inline";
    location.reload();
}

function btnChange(btn) {
    btn.style.transform = "translate(-1px, 1px)";
    btn.style.boxShadow = "1px 1px 2px 0 #000";
}