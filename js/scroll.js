//const of the HTML 
const header = document.getElementById("main-header");
const aboutSection = document.getElementById("about-section");
const aboutImg = document.getElementById("about-img");
const scrollButton = document.getElementById("scroll-button")
const mainSection = document.getElementById("scroll-home")

const linkItem = document.getElementsByClassName("item")


for(let i = 0; i < linkItem.length; i++) {
    const element = linkItem[i];
    
    element.addEventListener("click", function(){
        element[i].classList.remove("active")
        element.classList.add("active")
    })
}






//section of The Scroll-Header

function scrollHeeaderTop () {
    let offsetAbout = aboutSection.offsetTop - 200;
    // console.log("offset -100 ----->", offsetAbout/4;
    // console.log("offset original----->", offsetAbout - 100 )
    if(window.scrollY >  500  ) {
        header.classList.add("fixed-header");
    } else if (window.scrollY === 0) {
        header.classList.remove("fixed-header")
    }
    if( window.scrollY > offsetAbout ) {
        aboutImg.style.opacity = "1" ;
    }else if (window.scrollY < offsetAbout ) {
        aboutImg.style.opacity="0"
    }
}

function scrollWindowTop() {
    // let scrollWindow = mainSection.scrollTo;
    let offsetMain = mainSection.offsetTop;
    window.scrollTo(0, 25);
}


document.addEventListener("scroll", scrollHeeaderTop );
// header.addEventListener("click", scrollHeeaderTop );
// document.addEventListener("click", scrollWindowTop);
//section  About JS 

scrollButton.onclick =  scrollWindowTop;

document.header
console.log(header);

