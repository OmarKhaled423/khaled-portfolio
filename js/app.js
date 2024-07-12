
let headerNav = document.querySelector("header")


// function myFunction() {
//     // let body = document.querySelector("body");
//     let x = body.scrollY;
//     let y = body.scrollTop;
//     // let height = body.clientHeight;
//     // if(height){
//     //     // headerNav.style.cssText=`background: #ff0000;`
        
//     // }else{
//     //     // headerNav.style.cssText=`background: #ffffff;`

//     // }
//     // console.log()
//     document.getElementById("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
// }

// body.addEventListener("scroll", myFunction);


window.onload = function () {
    // let date = new Date();
    document.getElementById('copy-right-duration-year').innerHTML =`${new Date().getFullYear()}`
}



window.onscroll = function (e){
    console.log(document.body.scrollTop)
}