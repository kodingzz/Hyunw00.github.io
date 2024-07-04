// 1. 사이트를 스크롤링해서 해당 section이 나오면 nav안에 section에 해당하는 메뉴 활성화
//  다수의 섹션이 동시에 보여지면 가장 첫번째 섹션 선택
// 단 마지막 contact 섹션이 보여지면 contact 섹션 선택

'use-strict';

const sectionIds= ['#home','#about','#skills','#mywork','#testimonial','#contact'];
const menus = sectionIds.map(menu=>document.querySelector(`[href="${menu}"]`));
const sections= sectionIds.map(section=>document.querySelector(section));
const visibleSections = sectionIds.map(()=>false);   // 각각의 섹션이 화면에 보여지고 있는지를 확인하는 불린형 배열
let activeMenuItem = menus[0]; // 처음에 active된 menu를 home으로 초기화

const options = {
    rootMargin: "-25% 0px 0px 0px ",
    threshold: [0,0.98]
  };

 const callback = (entries,observer)=>{
    let selectLastOne;
    entries.forEach(entry=>{
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;  // 관측되는 각 entry를 돌면서 현재 관측되고 있으면 true값 넣어줌


        selectLastOne = index=== sectionIds.length-1 && entry.isIntersecting && entry.intersectionRatio>=0.9;
       // 제일 마지막 섹션이라면 index가 제일 마지막 인덱스 값이어야 하고 관측되고 있어야 하며 관측되고있는 비율이 90%이상이어야 한다.
       
        
    })
    const menuIndex= selectLastOne ? sectionIds.length-1 : findFirstIntersecting(visibleSections);    
    // 제일 마지막 섹션이면 인덱스는 마지막 인덱스 값이고 아니면 함수 호출
    // console.log(visibleSections);
    console.log('무조건 라스트 섹션',selectLastOne);
  
   selectActiveItem(menuIndex);
}

// visibleSections 배열에서 true들중에 제일 앞에 있는 index 반환
  function findFirstIntersecting(intersections){
    const index =intersections.indexOf(true);
    return index>=0 ? index : 0;
  }

  // 초기화 active되어있던 activeMenuItem의 active 클래스 제거, 현재 관측되는 메뉴에 active 클래스 추가
  function selectActiveItem(index){
    const menu = menus[index];
    activeMenuItem.classList.remove('active');
    activeMenuItem = menu;
    activeMenuItem.classList.add('active');
  }

  const observer = new IntersectionObserver(callback, options);
  sections.forEach(section=>observer.observe(section));

