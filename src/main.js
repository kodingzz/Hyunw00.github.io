'use-strict';
/**
 * 사용한 기능들
 *  1. 웹사이트를 아래로 스크롤할때 header의 배경색 어둡게 변경
 *  2. home section을 지날때 home의 투명도를 점차적으로 늘린다.
 *  3. arrow btn을 아래로 스크롤하면 사라지게 한다.
 *  4. navBar toggle 버튼 클릭 처리
 */

const header =document.querySelector('.header');
const headerHeight =header.getBoundingClientRect().height;
// const headerHeight =header.offsetHeight;   -> 정수반환(소수점 제거) 

const home =document.querySelector('#home');
const homeConatiner= document.querySelector('.home__container');
const homeHeight =home.offsetHeight;

const about =document.querySelector('#about');
const aboutConatiner= document.querySelector('.about__container');
const aboutHeight =about.offsetHeight;

const skills =document.querySelector('#skills');
const skillsConatiner= document.querySelector('.skills__container');
const skillsHeight =skills.offsetHeight;

const mywork =document.querySelector('#mywork');
const myworkConatiner= document.querySelector('.mywork__container');
const myworkHeight =mywork.offsetHeight;


const arrowUp = document.querySelector('.arrowup');

const headerMenu =document.querySelector('.header__menu');
const headerBar =document.querySelector('.header__bar');



document.addEventListener('scroll',()=>{
    headerDarker();
    Blurred(homeConatiner,home,homeHeight);
    Blurred(aboutConatiner,about,aboutHeight);
    Blurred(skillsConatiner,skills,skillsHeight);
    Blurred(myworkConatiner,mywork,myworkHeight);



    showArrowBtn(); 
  
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

function Blurred(container,section,height){
    
    container.style.opacity = 1- (window.scrollY-section.offsetTop)/height; 

}

function showArrowBtn(){

 
    if(window.scrollY>=homeHeight){
        arrowUp.style.opacity = "1"; 
    }
    else{
        arrowUp.style.opacity = "0";
        /*
         display:none, visibility로 대체가능하지만 이 속성들은
         transition이 적용되지 않는다.
         */
    }
}



headerBar.addEventListener('click',()=>{
    headerMenu.classList.toggle('open');
    header.classList.add('header--dark');

})

headerMenu.addEventListener('click',(e)=>{
    if(e.target.tagName==="A"){
        headerMenu.classList.remove('open');
    }

})

//  모바일 환경에서는 클릭할 수있는 범위를 넓혀주는 것이 좋다!!
