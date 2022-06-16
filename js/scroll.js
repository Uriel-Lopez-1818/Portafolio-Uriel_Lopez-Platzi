const header = document.getElementById("main-header")
console.log(header)

function scrollHeeaderTop () {
    if(window.scrollY >  500  ) {
        header.classList.add("fixed-header");
    } else if (window.scrollY === 0) {
        header.classList.remove("fixed-header")
    }
}

document.addEventListener("scroll", scrollHeeaderTop );
header.addEventListener("click", scrollHeeaderTop );