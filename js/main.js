    /* ***Menu responsive*** */
    ((d)=>{
        const $btnNav = d.querySelector(".header__menu--btn"),
        $navbar = d.querySelector(".header__nav");
        
        $btnNav.addEventListener("click", (e)=>{
            $btnNav.firstElementChild.classList.toggle("display__none");
            $btnNav.lastElementChild.classList.toggle("display__none");
            $navbar.classList.toggle("is__nav--active");
        });

        const $dd__content = d.querySelector(".dropdown__content"),
        $dd__btn = d.querySelector(".header__dropdown--btn");
        $dd__btn.addEventListener("click", (e)=>{
            $dd__content.classList.toggle("display__none");
        });


        window.addEventListener("scroll", function(){
            var scroll__header = document.querySelector(".header");
            scroll__header.classList.toggle("sticky__nav", window.scrollY > 0);
        })


    })(document);