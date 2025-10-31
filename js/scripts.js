```javascript
// Небольшая логика: мобильное меню, простая защита админ-панели (frontend only – обязательна git-backed CMS для реальной админки)
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', ()=>{
    if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
  });
});
```
