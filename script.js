document.addEventListener("DOMContentLoaded", function () {
    var changeColorButton = document.getElementById("changeColorButton");
    var openPDFButton = document.getElementById("openPDFButton");

    if (changeColorButton) {
        changeColorButton.addEventListener("click", function () {
            changeBackgroundColor();
        });
    }

    if (openPDFButton) {
        openPDFButton.addEventListener("click", function () {
            openPDF();
        });
    }

    function changeBackgroundColor() {
        var body = document.body;
        body.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function openPDF() {
        window.open('it_advisory_phishing.pdf', '_blank');
    }
});
