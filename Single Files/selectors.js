var lis = document.querySelectorAll("li")

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.style.color = "grey"
    })
    lis[i].addEventListener("mouseout", function () {
        this.style.color = "black"
    })
    lis[i].addEventListener("click", function () {
        this.classList.toggle("tg")
    })
}