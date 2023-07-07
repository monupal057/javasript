let newDate = new Date();
    let Hour = newDate.getHours();
    let Minute = newDate.getMinutes();
    let Second = newDate.getSeconds();
    let PMAM = "AM";

    if(Hour>=6 && 12>Hour){
        const firstText = document.getElementById("Greeting");
        firstText.innerHTML = "GOOD MORNING!! WAKE UP!!";

        const secondText = document.getElementById("change");
        secondText.innerHTML="GRAB SOME HEALTHY BREAKFAST!";

        const  cgPhoto = document.getElementById("myphoto");
        cgPhoto.src = "./img/Component 30 – 1.svg";
        // alert("cheack the message");
    }
    
    if(Hour>=12 && 16>Hour){
        const firstText = document.getElementById("Greeting");
        firstText.innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"

        const secondText = document.getElementById("change");
        secondText.innerHTML="LET'S HAVE SOME LUNCH!";

        const  cgPhoto = document.getElementById("myphoto");
        cgPhoto.src = "./img/Group 5183.svg";
        // alert("cheack the message");
    }

    if (Hour>=16 && 21>Hour) {
        const firstText = document.getElementById("Greeting");
        firstText.innerHTML = "GOOD EVENING !!"

        const secondText = document.getElementById("change");
        secondText.innerHTML="STOP YAWNING, GET SOME TEA... IT JUST EVENING!";

        const  cgPhoto = document.getElementById("myphoto");
        cgPhoto.src = "./img/lunch_image.png";
        // alert("Cheacking the condition");
    }
    if (Hour>=21 && 24>Hour ) {
        const firstText = document.getElementById("Greeting");
        firstText.innerHTML = "GOOD NIGHT!!"

        const secondText = document.getElementById("change");
        secondText.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";

        const  cgPhoto = document.getElementById("myphoto");
        cgPhoto.src = "./img/Group 5194.svg";
        // alert("cheack the message");
    }
    if(Hour>=0 && 6>Hour){
        const firstText = document.getElementById("Greeting");
        firstText.innerHTML = "GOOD NIGHT!!"

        const secondText = document.getElementById("change");
        secondText.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";

        const  cgPhoto = document.getElementById("myphoto");
        cgPhoto.src = "./img/Group 5194.svg";
        // alert("cheack the message");
    }
function changeAlarm() {
    document.getElementById("btn").innerHTML="Party time!";
    // console.log("Function running");
}
function backAlarm() {
    document.getElementById("btn").innerHTML="Set Alarm";
    // console.log("Function running");
}

function clickMe() {
    let mor = document.getElementById("wake");
    let eight = mor.options[document.getElementById("wake").selectedIndex];

    let aft = document.getElementById("lunch");
    let two = aft.options[document.getElementById("lunch").selectedIndex];

    let evi = document.getElementById("nap");
    let five = evi.options[document.getElementById("nap").selectedIndex];
    
    let night = document.getElementById("night");
    let nine = night.options[document.getElementById("night").selectedIndex];

    let change = document.getElementsByClassName("store");
    change[0].innerHTML = eight.textContent;
    change[1].innerHTML = two.textContent;
    change[2].innerHTML = five.textContent;
    change[3].innerHTML = nine.textContent;


    let myTime = new Date();
    let myHR = myTime.getHours();

    if (myHR === parseInt(mor.value)) {
        console.log("Good Morning");

        let OneText = document.getElementById("Greeting");
        OneText.innerHTML = "GOOD MORNING!! WAKE UP!!";

        // let TwoText = document.getElementById("change");
        // TwoText.innerHTML="GRAB SOME HEALTHY BREAKFAST!";

        let  ChangePhoto = document.getElementById("myphoto");
        ChangePhoto.src = "./img/Component 30 – 1.svg";
        
    }
    else if (myHR === parseInt(aft.value)) {
        console.log("Good AfterNoon");

        const OneText = document.getElementById("Greeting");
        OneText.innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"

        // const TwoText = document.getElementById("change");
        // TwoText.innerHTML="LET'S HAVE SOME LUNCH!";

        const  ChangePhoto = document.getElementById("myphoto");
        ChangePhoto.src = "./img/Group 5183.svg";
    }
    else if (myHR === parseInt(evi.value)) {
        console.log("Good Eveining");

        const OneText = document.getElementById("Greeting");
        OneText.innerHTML = "GOOD EVENING !!"

        // const TwoText = document.getElementById("change");
        // TwoText.innerHTML="STOP YAWNING, GET SOME TEA... IT JUST EVENING!";

        const  ChangePhoto = document.getElementById("myphoto");
        ChangePhoto.src = "./img/lunch_image.png";


    }
    else if (myHR === parseInt(night.value)) {
        console.log("Good Night");

        const OneText = document.getElementById("Greeting");
        OneText.innerHTML = "GOOD NIGHT!!"

        // const TwoText = document.getElementById("change");
        // TwoText.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";

        const  ChangePhoto = document.getElementById("myphoto");
        ChangePhoto.src = "./img/Group 5194.svg";
    }
    else{
        console.log("Please inter valid time");
    }

}

setInterval(updateTime, 1000);
function updateTime() {
    // console.log("javscript is live");
    let newDate = new Date();
    let Hour = newDate.getHours();
    let Minute = newDate.getMinutes();
    let Second = newDate.getSeconds();
    let PMAM = "AM";

   
    
    // console.log(Hour);
    if (Hour > 12) {
        Hour -= 12;
        PMAM = "PM";
    }

    if (Hour == 12) {
        PMAM = "PM"
    }
    // if (Hour == 00) {
    //     PMAM = "AM"
    // }
    // else{
    //     PMAM = "AM";
    // }

    if(Hour < 10){
        Hour = "0"+ Hour;
    }
    if(Minute < 10){
        Minute = "0"+ Minute;
    }
    if(Second < 10){
        Second = "0"+ Second;
    }
    
    document.getElementById("myHours").innerHTML = " " + Hour;
    document.getElementById("myMint").innerHTML = "" + Minute;
    document.getElementById("mySecd").innerHTML = "" + Second;
    document.getElementById("APM").innerHTML = "" +  PMAM;

    // const dorp_down = document.getElementById("wake"); 
    
}

















    
    
    
    