//variables
let workTime = 5;
let breakTime = 1;
let breakCounter = 0; //how many breaks are used

let seconds = "00"


//display
window.onload = () =>{
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
}

function start(){
    //change the time
    seconds = 5;
    workTime=workTime-1;

    //disable the start button
    document.getElementById("start").disabled = true;

    //work tag active
    document.getElementById('active').style = "display:block;";
    document.getElementById('active').innerHTML = "Work";
    


    let workMinutes = workTime;
    let breakMinutes = breakTime - 1;

    let breakCount = 0;

    //countdown
    let timerFunction = () =>{
        //change the display
            document.getElementById('minutes').innerHTML = workMinutes;
            document.getElementById('seconds').innerHTML = seconds;
        

        //start
        seconds = seconds - 1;

        if(seconds === -1){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    //start break
                    workMinutes = breakMinutes;
                    breakCount++;
                    var myWindow = window.open("", "MsgWindow", "width=600px,height=300px");
                    myWindow.document.write("<p style='font-size:4rem;margin:1em;padding:0.1em;text-align:center;'>It's Break Time</p>");
                    document.getElementById('active').innerHTML = "Break";
                    breakCounter++;
                    document.getElementById('breakcounter').innerHTML = "Number of breaks : " + breakCounter;
                }else{
                    //continue work
                    document.getElementById('active').innerHTML = "Work";
                    var myWindow = window.open("", "MsgWindow", "width=600px,height=300px");
                    myWindow.document.write("<p style='font-size:4rem;margin:1em;padding:0.1em;text-align:center;'>Time To Work</p>");
                    workMinutes = workTime;
                    breakCount++;

                }
            }
            seconds = 5;
        }

    }

    //start countdown
    setInterval(timerFunction, 1000); //1000 = 1s

}

function stop(){
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    location.reload(true);
}

function signupbtn(){
    alert('This feature will arrive soon!!');
}
