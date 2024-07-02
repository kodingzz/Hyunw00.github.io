
/**
 * 사용하는 기능들
 *  1. 웹사이트를 아래로 스크롤할때 header의 배경색 어둡게 변경
 *  2. home section을 지날때 home의 투명도를 점차적으로 늘린다.
 * 
 */



const header =document.querySelector('.header');
const headerHeight =header.getBoundingClientRect().height;
// const headerHeight =header.offsetHeight;   -> 정수반환(소수점 제거) 

const home =document.querySelector('#home');
const homeImg =document.querySelector('.home__img');
const homeInfo = document.querySelector('.home__info');
const homeHeight =home.offsetHeight;


document.addEventListener('scroll',()=>{
    headerDarker();
    homeBlurred();
}
)

function headerDarker(){
   
        if(headerHeight<window.scrollY){
            header.classList.add('header--dark');
        }
        else{
            header.classList.remove('header--dark');
        }
}

function homeBlurred(){
    homeImg.style.opacity =1-window.scrollY/homeHeight; 
    homeInfo.style.opacity =1-window.scrollY/homeHeight; 
    console.log(1-window.scrollY/homeHeight);
}