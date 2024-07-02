// 1. 웹사이트를 아래로 스크롤할때 header의 배경색 어둡게 변경

const header =document.querySelector('.header');
const headerHeight =header.offsetHeight;
// headerHeight =header.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if(headerHeight<window.scrollY)
        header.style.backgroundColor="var(--color-primary)";
    else
        header.style.backgroundColor="transparent";
})