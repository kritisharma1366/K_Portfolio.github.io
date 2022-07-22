var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

})

const nav = document.querySelector(".nav"),
    navList=nav.querySelector("li"),
    totalNavList=navList.length;
    for(let i=0;i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        a.addEventListner("click",function(){
            this.classList.add("active")
            showSection(this);
        })
    }

    function showSection(element){
        console.log(element.getAttribute("href").split("#"))
    }

