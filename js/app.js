
let submit = document.getElementById("submit");
let date = document.getElementById("datee");
let time= document.getElementById("timee");
let secondrow=document.getElementById("secondrow");

let sendday = document.getElementById("day");
let sendhour = document.getElementById("hour");
let sendminute = document.getElementById("minute");
let sendsecond = document.getElementById("second");


var dite="";
var tame="";
function click(){
    let finaltime =[];
    submit.addEventListener("click",function(){
        let diite = date.value;
        let taame = time.value;
        // tame=taame;
        console.log(taame)
        dite=diite;
        
        

        secondrow.innerHTML=`${diite}  ${taame}`;
        let formatedtime = taame.split(':')

        // console.log(formatedtime)
        let hours=parseInt(formatedtime[0]);
        let minute=parseInt(formatedtime[1]);

        if (hours > 12) {
            formatedtime[0] = hours - 12;
        } else {
            formatedtime[0] = hours;
        }

        tame = formatedtime.join(':'); // Join back into a string
        // tame = taame;
        tame=`0${tame}`;
        console.log(tame)
        
})
}


function clock(){

    //2023-08-13T15:30:00.000Z
    let latest=dite+"T"+tame+":"+"00"+"."+"000Z"
    const current = new Date()
    const newdate = new Date(latest)
    
    console.log(latest)
    console.log(newdate)
   
    console.log(current)
    
    
    const diff = (newdate-current) /1000;

    if(diff <0){return;}
    finaldate=Math.floor(diff / 3600 /24);

    
    sendday.innerHTML=finaldate
    remindre = Math.floor( (diff / 3600) % 24)
    sendhour.innerHTML= remindre

    reminder2= Math.floor(( diff /60 ) % 60)
    sendminute.innerHTML=reminder2

    reminder3=Math.floor(diff) % 60;
    sendsecond.innerHTML=reminder3



}

function stop(){

    let stop = document.getElementById('stop')
    stop.addEventListener('click', function(){
        tame="";
        dite="";
    })
}

setInterval(click , 1000)
setInterval(clock , 1000)
setInterval(stop , 1000)