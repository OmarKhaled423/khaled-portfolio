const cursor = document.querySelector('.cursor');
let timeout = null;


function hide(){
    timeout = setTimeout(function () {
    cursor.style = "opacity: 0";
}, 2000);
}

document.addEventListener('mouseover', (e) => {
    e.target.setAttribute("title",e.target.innerText)
})
document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;")
})


document.addEventListener('click', (e) => {
    cursor.style = "opacity: 1";
    cursor.classList.add("expand");
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;")
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 300)
    clearTimeout(timeout)
    hide()
})


document.addEventListener('mousedown', () => {
    cursor.classList.add("expand");
});
document.addEventListener('mouseup', () => {
    cursor.classList.remove("expand");
});
document.addEventListener('mouseleave', () => {
    cursor.style = "display: none";
});

document.addEventListener('mouseenter', () => {
    cursor.style = "display: inline";
});

document.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    // Reset the timeo; 
    hide()
});

