(function(){var q=new URLSearchParams(location.search).get("lang");var l=q||((navigator.language||"pt").toLowerCase().startsWith("pt")?"pt-BR":"en");
function set(v){document.documentElement.lang=v;document.querySelectorAll("nav.lang button").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.l===v))});document.title=document.body.dataset[v==="en"?"ten":"tpt"];}
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("nav.lang button").forEach(function(b){b.onclick=function(){set(b.dataset.l)}});set(l)});})();
