import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i}from"./assets/vendor-BbbuE1sJ.js";const e={timer:document.querySelector(".timer"),input:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),button:document.querySelector("[data-start]")};let u=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){u=t[0],u<Date.now()?(i.error({timeout:2e3,position:"topRight",title:"Error",message:"Please choose a date in the future!"}),e.button.setAttribute("disabled","true")):(e.button.removeAttribute("disabled"),i.success({timeout:2e3,position:"topRight",title:"OK",message:"You can press START"}))}};y(e.input,b);const s={timerId:null,disable:e.button.disabled=!0,start(){this.timerId=setInterval(()=>{const t=Date.now(),o=u-t;if(o<=0){clearInterval(this.timerId),c(l(0)),e.input.disabled=!1;return}const n=l(o);c(n)},1e3),i.info({position:"topRight",title:"Caution",message:"Please, wait until the time is out"})}};e.button.addEventListener("click",()=>{s.timerId&&clearInterval(s.timerId),s.start(),e.button.disabled=!0,e.input.disabled=!0});const r=t=>String(t).padStart(2,"0");function c(t){const{days:o,hours:n,minutes:a,seconds:d}=e;o.textContent=r(t.days),n.textContent=r(t.hours),a.textContent=r(t.minutes),d.textContent=r(t.seconds)}function l(t){const m=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:p,seconds:f}}
//# sourceMappingURL=1-timer.js.map
