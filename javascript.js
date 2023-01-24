const endDate = " 30 January 2023 12:00 PM"
document.getElementById('end-date').innerHTML=endDate;
const inputs=document.querySelectorAll("input")

function clock(){
    var end = new Date(endDate);
    var now = new Date();
    
    var difference = (end - now)/1000;
    // convering into days hours minutes and seconds
    inputs[0].value=Math.floor(difference/24/3600)
    inputs[1].value=Math.floor((difference/3600)%24)
    inputs[2].value=Math.floor((difference/60)%60)
    inputs[3].value=Math.floor((difference)%60)
}
clock()


// 1 day = 24 hours
// 1 hour = 60 minutes
// 1 minutes = 60 seconds

setInterval(
    ()=>{
        clock()
    },
    1000
)