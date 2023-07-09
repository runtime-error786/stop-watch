let sec = 0, min = 0, hou = 0 , timer=0;
function watch()
{
   
    let f1 = document.getElementById("s2");
    let f2 = document.getElementById("s4");
    let f3 = document.getElementById("s6");
    sec++;
    if(sec==60)
    {
        min++;
        if(min==60)
        {
            hou++;
           min=0;
        }
        sec=0;
    }
    f1.innerHTML = hou;
    f2.innerHTML = min;
    f3.innerHTML = sec;
}

let f3 = document.getElementById("s7");
f3.addEventListener("click" , function(){
    if(f3.innerHTML=="Start")
    {
        timer = setInterval(watch,10);
        f3.innerHTML = "Pause"
    }
    else if(f3.innerHTML = "Pause")
    {
        f3.innerHTML = "Start";
        clearInterval(timer);
    }
}
);

let f4 = document.getElementById("s8");
f4.addEventListener("click" , function()
{
    let f1 = document.getElementById("s2");
    let f2 = document.getElementById("s4");
    let f3 = document.getElementById("s6");
    clearInterval(timer);
    f1.innerHTML = "00";
    f2.innerHTML = "00";
    f3.innerHTML = "00";
    sec = 0;
    min=0;
    hou=0;
    let f5 = document.getElementById("s7");
    f5.innerHTML = "Start";
}
);