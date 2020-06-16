//Example 1: SetTimeOut
function example1(){
    console.log ("Before time out " + new Date());
    function f(){
        console.log("After time out: " + new Date());
    }
    setTimeout(f,15*1000); //fifteen second
    console.log ("I am inbetween timeout lmao.");

    //setTimeOut will active the function after the set amount of time. 


    //this is the standard way of using setTimeOut
    setTimeout(function(){console.log("After time outL " + new Date());
    },5*1000); //five second
}



//Example 2: SetInterval and ClearInterval
function example2(){
    const start = new Date();
    let i = 0;
    const intervalId = setInterval(function(){
        let now = new Date();
        if (now.getMinutes() !== start.getMinutes() || ++i > 10) //interval clears when the minute rolls over OR the code has ran 10 times (meaning 50 seconds have passed).
            return clearInterval(intervalId);
        console.log('${i}: ${now}');
    }, 5*1000);  //code runs every 5 seconds
}

//Exercise 1: False 5 second coutdown, find and comment what's wrong
function countdown() {
    
    console.log("Countdown:");
    for (let i = 5; i >=0;i--){ //if you use var here, the i will be scoped to the countdown function and will therefore be -1 when the loop finishes AKA when the timeouts start executing
        console.log ('bruh' + i);
        setTimeout(function(){
            console.log(i===0 ? "GO!": i); //if i == 0 then "Go" else i
        },(5-i)*1000);
    }
}
countdown();
//The takeaway is: th

