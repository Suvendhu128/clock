const hour = document.getElementById("hour");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm ="AM";
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

hour.innerText = h;
minutes.innerText = m;
seconds.innerText =s;

setTimeout(()=>{
    updateClock();
},1000);
}
updateClock();
