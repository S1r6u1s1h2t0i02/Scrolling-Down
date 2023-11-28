window.addEventListener("scroll", function () {
    var container = this.document.querySelector(".flex-container");
    var cards = this.document.querySelectorAll(".flex-container .card");
    console.log(cards);
    var windowHeight = window.innerHeight;
    var visible = 200;
    var elementTop = container.getBoundingClientRect().top;
    for (var i = 0; i < cards.length; i++) {
        if (elementTop < windowHeight - visible) {
            console.log("visible");
            if (i % 2 == 0) {
                cards[i].classList.add("right");
            }
            else {
                cards[i].classList.add("left");
            }
            container.classList.add("active");
        }
        else {
            if (cards[i].classList.contains("left")) {
                cards[i].classList.remove("left");
            }
            if (cards[i].classList.contains("right")) {
                cards[i].classList.remove("right");
            }
            container.classList.remove("active");
        }
    }
    var container = this.document.querySelector(".flex-container1");
    var cards = this.document.querySelectorAll(".flex-container1 .card");
    console.log(cards);
    var windowHeight = this.window.innerHeight;
    var visible = 200;
    var elementTop = container.getBoundingClientRect().top;
    for (var i = 0; i < cards.length; i++) {
        if (elementTop < windowHeight - visible) {
            if (i % 2 == 0) {
                cards[i].classList.add("right");
            }
            else {
                card[i].classList.add("left");
            }
            container.classList.add("active");
        }
        else {
            if (cards[i].classList.contains("left")) {
                cards[i].classList.remove("left");
            }
            if (cards[i].classList.contains("right")) {
                cards[i].classList.remove("right");
            }
            container.classList.remove("active");
        }
    }
})
