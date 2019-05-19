document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }
    
var workTime = 0;
var BreakTime = 0;
var timer;
var sec = 0;
var min = 0;
var hour = 0;
var flag="";
var t=[];
document.getElementById("startWork").addEventListener("click", function () {
    time(0,0,0,"w");
    deactiveButton(this);
    activeButtons();
});
document.getElementById("startBreak").addEventListener("click", function () {
  //  console.log("start break last break is",BreakTime)
    getFormalTime(BreakTime);
//console.log("time from formal fun",t)
    clearInterval(timer);
    time(t[0],t[1],t[2],"b");
    activeResum();
    deactiveButton(this);
});
document.getElementById("resume").addEventListener("click", function () {
   getFormalTime(workTime);
   clearInterval(timer);
    time(t[0],t[1],t[2],"w");
    activeBreak();
    deactiveButton(this);
});
document.getElementById("endWork").addEventListener("click", function () {
  endDay();
});
function time(sec,min,hour,flag) {
     timer = setInterval(function () {
         console.log("hello from time",sec,min,hour,flag);
        if (sec < 10) {
            document.getElementById(flag+'TimeSec').innerHTML = "0" + sec;
        }
        else if (sec < 60) {
            document.getElementById(flag+'TimeSec').innerHTML = sec;
        }
        else if (sec == 60 ) {
            sec = 0;
            min++;
            document.getElementById(flag+'TimeSec').innerHTML = "0" + sec;
        }
        if (min < 10) {
            document.getElementById(flag+'TimeMin').innerHTML = "0" + min;
        }
        else if (min < 60) {
            document.getElementById(flag+'TimeMin').innerHTML = min;
        }
        else if (min == 60) {
            min = 0;
            hour++;
            document.getElementById(flag+'TimeHour').innerHTML = hour;
        }
        sec++;
        if (flag=="w"){
            workTime++;
            console.log("work time",workTime);
        }
        else if(flag=="b")
        {
            BreakTime++;
            console.log("break time",BreakTime);
        }
    }, 1000);
}
function deactiveButton(elem) {
    elem.disabled = true;
    elem.style.backgroundColor = "grey";
}
function activeButtons(){
    document.getElementById("startBreak").disabled = false;
    document.getElementById("endWork").disabled = false;
    document.getElementById("startBreak").style.backgroundColor = "#24e4bd";
    document.getElementById("endWork").style.backgroundColor = "#24e4bd";
}
function getFormalTime(tsec){
    t=[0,0,0];
    t[2]=Math.floor(tsec/3600);
    console.log("hour time",t[2]);
    t[1]=Math.floor((tsec%3600)/60);
    console.log("min time",t[1]);
    t[0]=Math.floor((((tsec%3600)/60)-t[1])*60);
    console.log("sec time",t[0]);
}
function endDay(){
    clearInterval(timer);
    getFormalTime(workTime)
    var tw=t;
    getFormalTime(BreakTime)
    var tb=t;
    alert("your work hours : "+tw[0] +" sec "+tw[1]+" min "+tw[2]+" hr " +" ,your break hours :"+tb[0]+" sec "+tb[1]+" min "+tb[2]+" hr " );
   workTime=0;
   BreakTime=0;
   document.getElementById('bTimeSec').innerHTML = "00";
   document.getElementById('wTimeSec').innerHTML = "00";
}
function activeResum(){
    document.getElementById("resume").disabled = false;
    document.getElementById("resume").style.backgroundColor = "#24e4bd";  
}
function activeBreak(){
    document.getElementById("startBreak").disabled = false;
    document.getElementById("startBreak").style.backgroundColor = "#24e4bd";  
}



