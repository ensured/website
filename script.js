document.getElementById("mint").addEventListener("click", function() {
    window.location.href = "mint.html";
});

const hitMeBtn = document.getElementById('hitme');
hitMeBtn.addEventListener('click', function() {
    clearInterval(timer);
    hitMeBtn.innerHTML = 'get based';
});
hitme.addEventListener('click', function() {
    let timer = setInterval(() => {
        var fullWidth = window.outerWidth;
        var fullHeight = window.outerHeight;
        var text = 'peanutbutterjellytime.gif';
        var elem = document.createElement("img");
        elem.src = text;
        elem.style.zIndex = "-1";
        elem.style.position = "absolute";
        elem.style.top = Math.random() * fullHeight + "px";
        elem.style.left = Math.random() * fullWidth + "px";
        elem.style.width = "100px";
        document.body.appendChild(elem);
    }, 1500);
});
document.getElementById("mint-form").addEventListener("click", function() {
    var selected = document.querySelector('input[name="debt-amount"]:checked').value;
    document.getElementById('mint').innerHTML = "Mint " + selected + " NFTS";
});
document.getElementById("mint").addEventListener("click", function() {

    document.getElementById('mint').innerHTML = "Minting " + selected + " NFTS";
});