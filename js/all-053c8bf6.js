function toggleVisible(e){var t=document.getElementById(e);t.classList.contains("hidden")?t.className="visible":t.className="hidden"}function get_hiddable(e){for(var t=e.childElementCount,n=e.children,i=0;i<t;i++)if(n[i].className.indexOf("hiddable_content")>-1)return n[i]}function arraysEqual(e,t){if(e===t)return!0;if(null===e||null===t)return!1;if(e.length!=t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}document.getElementById("programmer").addEventListener("click",function(){toggleVisible("programming")}),document.getElementById("speaker").addEventListener("click",function(){toggleVisible("speaking")});for(var elements=document.querySelectorAll(".hiddable"),length=elements.length,i=0;i<length;i++)elements[i].childNodes[1].addEventListener("click",function(){var e=get_hiddable(this.parentNode);e&&(e.classList.contains("hidden")?e.className="hiddable_content visible":e.className="hiddable_content hidden")});var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-2107177-10"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var code=[38,38,40,40,37,39,37,39,66,65],input=[];document.onkeyup=function(e){for(var t=0;t<code.length;t++)if(e.which==code[t]){input.push(code[t]),input[t]==code[t]?arraysEqual(code,input)&&(document.getElementById("konami").className="visible",document.getElementById("contra").className="visible",document.getElementById("main").style.marginTop="195px"):input=[];break}return!1};