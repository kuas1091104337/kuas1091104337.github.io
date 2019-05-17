;(function(){
  console.log(123);
  // trunk based development
  document.querySelector('.m_menu').onclick = function(){
    document.querySelector('header').classList.toggle('m_menu--open');
    
  };
})()