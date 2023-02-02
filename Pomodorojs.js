//variables
let workTime = 25;
let breakTime = 5;

let seconds = "00"


//display
window.onload = () =>{
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;   
}

function start(){
    //change the time
    seconds = 59;

    //disable the start button
    document.getElementById("start").disabled = true;


    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () =>{
        //change the display
       /* if(workMinutes / 10 < 1){
            document.getElementById('minutes').innerHTML = "0" + workMinutes;
            if(workSeconds / 10 < 1){
                document.getElementById('seconds').innerHTML = "0" + seconds;
            }
        }
        else{*/
            document.getElementById('minutes').innerHTML = workMinutes;
            document.getElementById('seconds').innerHTML = seconds;
    /*}*/
        

        //start
        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    //start break
                    alert('Break has started');
                    workMinutes = breakMinutes;
                    breakCount++;
                }else{
                    //continue work
                    workMinutes = workTime;
                    breakCount++;
                }
            }
            seconds = 59;
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
    alert('This feature is yet to come!!');
}