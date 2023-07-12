import './assets/scss/all.scss';

const hamberger = document.querySelector('.header-hamberger-btn').addEventListener(
    "click",
    function(e){
        e.preventDefault();
        const headerHambergerList = document.querySelector('.header-hamberger-list').style.maxHeight;
        if(headerHambergerList == '141px'){
            document.querySelector('.header-hamberger-list').style.maxHeight = "0px";
            console.log(headerHambergerList)
        }else{
            document.querySelector('.header-hamberger-list').style.maxHeight = "141px";
            console.log(headerHambergerList)
        }
        
    }
)
