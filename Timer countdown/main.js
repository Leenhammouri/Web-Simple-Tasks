const days = document.querySelector('.day');
const hrs = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.sec');

function remindTime() {
    currentDate = new Date();
    giveAwayDate = new Date(2024, 4, 10, 11, 30);

    console.log(giveAwayDate)

    timeDiff = giveAwayDate.getTime() - currentDate.getTime(); //get differenece in ms

    rdays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    reminder = timeDiff % (1000 * 60 * 60 * 24); // remind times in ms after subtract days 
    rhrs = Math.floor(reminder / (1000 * 60 * 60));
    reminder = reminder % (1000 * 60 * 60); // remind times in ms after subtract hours 
    rmins = Math.floor(reminder / (1000 * 60));
    reminder = reminder % (1000 * 60); // remind times in ms after subtract minutes 
    rsecs = Math.floor(reminder / 1000);


    if (rdays < 10) {
        days.innerText = '0' + rdays;
    }
    else {
        days.innerText = rdays;
    }

    if (rhrs < 10) {
        hrs.innerText = '0' + rhrs;
    }
    else {
        hrs.innerText = rhrs;
    }

    if (rmins < 10) {
        mins.innerText = '0' + rmins;
    }
    else {
        mins.innerText = rmins;
    }

    if (rsecs < 10) {
        secs.innerText = '0' + rsecs;
    }
    else {
        secs.innerText = rsecs;
    }

}

remindTime();
setInterval(remindTime, 1000);