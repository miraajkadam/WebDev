do {
    var answer = prompt("Are we there yet?");
    if (answer === 'yes' || answer.indexOf('yes') != -1) {
        console.log('We are there! yey')
    }
} while (answer != 'yes' && answer.indexOf('yes') == -1);