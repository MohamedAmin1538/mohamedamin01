let main = document.getElementById("main");
let logo = document.getElementsByClassName("logo");
console.log(logo[0], main);
window.onload = function () {
  main.style.opacity = "1";
  main.style.top = "35%";
  logo[0].style.left = "0";
};
// section
let section1 = document.querySelector(".section1");

let section2 = document.querySelector(".section2");
let scrollsec = scrollY;
console.log(section1);

addEventListener("scroll", function (e) {
  let dectanse1 = section1.offsetTop - scrollY;
  let dectanse2 = section2.offsetTop - scrollY;
  if (dectanse1 <= 620) {
    section1.style.left = "0";
    section1.style.opacity = "1";
  }
  if (dectanse2 <= 620) {
    section2.style.right = "0";
    section2.style.opacity = "1";
  }
});

// ad-script
let ad = document.querySelectorAll(".ad-script");
console.log(ad);
ad.forEach(function (index) {
  addEventListener("scroll", function (e) {
    let adDictance = index.offsetTop - this.scrollY;
    // 795
    if (adDictance <= 700) {
      index.style.top = "0";
    }
  });
});

// image-clients
let clients = document.querySelectorAll(".image-clients");
clients.forEach(function (index) {
  addEventListener("scroll", function (e) {
    let clientsDictance = index.offsetTop - this.scrollY;
    if (clientsDictance <= 620) {
      index.style.width = "70px";
    }
  });
});

// click
let click = document.getElementById("click");
let list = document.getElementById("list");
console.log(list);
click.addEventListener("click", function (e) {
  list.classList.toggle("navmob");
});
let defult = document.querySelectorAll(".defult li");
console.log(defult);
defult.forEach(function (index) {
  index.addEventListener("click", function (e) {
    index.parentNode.classList.toggle("navmob");
  });
});

// services

let services = document.querySelectorAll(".services-script");
console.log(ad);
services.forEach(function (index) {
  addEventListener("scroll", function (e) {
    let servicesDictance = index.offsetTop - this.scrollY;
    // 795
    if (servicesDictance <= 700) {
      index.style.top = "0";
    }
  });
});

// slide
let slide = document.getElementsByClassName("slide")[0];
setInterval(function () {
  slide.classList.toggle("overlay2");
}, 4000);

// PORTFOLIO
// let port_div = document.querySelector(".images-port div")
// let div = document.createElement("div")
// let portfolio = document.createElement("img")
// port_div.append(div)

// let myImgArray=["img/portfolio/portfolio-1.jpg","img/portfolio/portfolio-2.jpg","img/portfolio/portfolio-3.jpg","img/portfolio/portfolio-4.jpg","img/portfolio/portfolio-5.jpg","img/portfolio/portfolio-6.jpg","img/portfolio/portfolio-7.jpg","img/portfolio/portfolio-8.jpg","img/portfolio/portfolio-9.jpg",]
// let appArray=["img/portfolio/portfolio-1.jpg","img/portfolio/portfolio-2.jpg","img/portfolio/portfolio-3.jpg",]
// let cardArray=["img/portfolio/portfolio-4.jpg","img/portfolio/portfolio-5.jpg","img/portfolio/portfolio-6.jpg",]
// let webArray=["img/portfolio/portfolio-7.jpg","img/portfolio/portfolio-8.jpg","img/portfolio/portfolio-9.jpg",]
// let all = document.getElementById("all")
// let app = document.getElementById("app")
// let card = document.getElementById("card")
// let web = document.getElementById("web")

// console.log(portfolio)
// all.addEventListener("click",function(e){
//     for(let i = 0;i<=myImgArray.length-1;i++){
//         console.log(i)
//         portfolio.src=myImgArray[i]
//          div.appendChild(portfolio)

//          console.log(div)
//    }
// })
// app.addEventListener("click",function(e){
//     portfolio.forEach(function(item,index){
//         item.src=appArray[index]
//         if((item.src).includes("undefined")){
//             item.src.remove()
//         }
//     })
// })
// card.addEventListener("click",function(e){
//     portfolio.forEach(function(item,index){
//         item.src=cardArray[index]

//     })
// })
// web.addEventListener("click",function(e){
//     portfolio.forEach(function(item,index){
//         item.src=webArray[index]

//     })
// })

// portfolio2
let port_div = document.querySelectorAll(".images-port div");
let all = document.getElementById("all");
let app = document.getElementById("app");
let card = document.getElementById("card");
let web = document.getElementById("web");

all.addEventListener("click", function (e) {
  for (let i = 0; i <= port_div.length-1; i++) {
    port_div[i].classList.add("d-none");
    port_div[i].style.transform="scale(0)"
    port_div[i].classList.toggle("d-none");
    setTimeout(() => {
        port_div[i].style.transform="scale(1)"
        
    },100);

  }
});

app.addEventListener("click", function (e) {
  for (let i = 0; i <= port_div.length-1; i++) {
      port_div[i].classList.add("d-none");
    port_div[i].style.transform="scale(0)"

    if(i>=6 && i<9){
        port_div[i].classList.toggle("d-none");
        setTimeout(() => {
            port_div[i].style.transform="scale(1)"
            
        },100);
    
    }
}
});
card.addEventListener("click", function (e) {
    for (let i = 0; i <= port_div.length-1; i++) {
        port_div[i].classList.add("d-none");
    port_div[i].style.transform="scale(0)"

      if(i>=3 && i<6){
          port_div[i].classList.toggle("d-none");
          setTimeout(() => {
            port_div[i].style.transform="scale(1)"
            
        },100);
    
      }
    }
});
web.addEventListener("click", function (e) {
    for (let i = 0; i <= port_div.length-1; i++) {
        port_div[i].classList.add("d-none");
    port_div[i].style.transform="scale(0)"

      if(i>=0 && i<3){
          port_div[i].classList.toggle("d-none");
          setTimeout(() => {
            port_div[i].style.transform="scale(1)"
            
        },100);
    
      }
    }
});



// PRICING 
let price = document.querySelectorAll(".pricejs")
console.log(price)
price.forEach((index)=>{
console.log(index)
addEventListener("scroll",(e)=>{
    if(index.offsetTop-scrollY <=620){
        index.style.transform="scale(1)"
    }})
})