function getTheme(){return localStorage.getItem('theme')?localStorage.getItem('theme'):null;}
function setTheme(style){document.documentElement.setAttribute('data-theme',style);localStorage.setItem('theme',style);}
function init(){var theme=getTheme();const userPrefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;if(theme===null){if(userPrefersDark){setTheme('dark');}
else{setTheme('light');}}
else{if(theme=='light'){document.documentElement.setAttribute('data-theme','light');}
else{document.documentElement.setAttribute('data-theme','dark');}}}
function switchTheme(){var theme=getTheme();var e=theme=='light';setTheme(e?'dark':'light');};document.addEventListener('DOMContentLoaded',function(){var themeSwitcher=document.querySelector('.theme-switch');themeSwitcher.addEventListener('click',switchTheme);},false);document.addEventListener('DOMContentLoaded',function(){var themeSwitcher=document.querySelector('.theme-switch-m');themeSwitcher.addEventListener('click',switchTheme);},false);init();