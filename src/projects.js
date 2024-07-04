'use-strict';

// console.log(header);  ReferenceError: header is not defined

/**
 * 1. work 파트에서 project 종류별로 project 필터링
 * 2. 
 * 3. 
 */


const workMenu = document.querySelector('.mywork__menu');// menu ul
const works =document.querySelector('.works');  // project ul
const work = document.querySelectorAll('.work'); // project li들

workMenu.addEventListener('click',(e)=>{
    const category= e.target.dataset.category;

    if(e.target.tagName!=="BUTTON"){
        return;
    }

    filterProjects(category);
    handleActiveSelection(e.target);
   
})


//함수를 설정하면 코드별로 주석을 적을 필요없이 함수만으로 코드를 파악할 수 있다는 장점이 있다.
// 프로젝트 유형별 필터링 및 필터링시 프로젝트들에 애니메이션같은 효과 지정  -> 주석 쓰지 않아도 파악 가능
function filterProjects(category){
    works.classList.add('anim-out');

    work.forEach(item=>{
     if(category==="all"||category===item.dataset.type ){
        item.classList.remove('hidden');
        
     }   
     else{
        item.classList.add('hidden');
     }
    //  중요!! setTimeout은 생각못했네...
     setTimeout(()=>works.classList.remove('anim-out'),400);
     
    })
}

function handleActiveSelection(target){
    const active =document.querySelector('.mywork__item--selected');
    active.classList.remove('mywork__item--selected');
   target.classList.add('mywork__item--selected');
}


