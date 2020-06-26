var bt1 = document.querySelector("button")
// flag = false
// bt1.addEventListener('click', function () {
//     if (flag === false)
//         document.body.style.backgroundColor = "purple"
//     else
//         document.body.style.backgroundColor = "white"
//     flag = !flag
// })

bt1.addEventListener('click', function () {
    document.body.classList.toggle("purp")
})