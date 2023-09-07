const bodyObj = document.body;
const bodyClass = 'noScroll'
const ham = document.querySelector('.hamburger');
const themeClass = ['dark', 'light'];
const themeElem = document.querySelector('.themeSwitch');


ham.addEventListener('click', () => {
  if(!bodyObj.classList.contains(bodyClass)){
    bodyObj.classList.add(bodyClass);
  }else{
    bodyObj.classList.remove(bodyClass);
  }

  if(!bodyObj.classList.contains(themeClass[0])){
    bodyObj.classList.add(themeClass[0]);
    bodyObj.classList.remove(themeClass[1]);
  }else{
    bodyObj.classList.add(themeClass[1]);
    bodyObj.classList.remove(themeClass[0]);
  }
});


themeElem.addEventListener('click', () => {
  if(!bodyObj.classList.contains(themeClass[0])){
    bodyObj.classList.add(themeClass[0]);
    bodyObj.classList.remove(themeClass[1]);
  }else{
    bodyObj.classList.add(themeClass[1]);
    bodyObj.classList.remove(themeClass[0]);
  }
});


window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', e => {
  const newColorScheme = e.matches ? "dark" : "light";
  
  switch (e) {
    case matchMedia('(prefers-color-scheme: dark'):
      if(!bodyObj.classList.contains(themeClass[0])){
        bodyObj.classList.add(themeClass[0]);
        bodyObj.classList.remove(themeClass[1]);
      }else{
        bodyObj.classList.add(themeClass[1]);
        bodyObj.classList.remove(themeClass[0]);
      }
      break;
      
    default :
      if(!bodyObj.classList.contains(themeClass[1])){
        bodyObj.classList.add(themeClass[1]);
        bodyObj.classList.remove(themeClass[0]);
      }else{
        bodyObj.classList.add(themeClass[0]);
        bodyObj.classList.remove(themeClass[1]);
      }
      break;
  }
})


// debug designMode makes everything editable
document.designMode = "on"
