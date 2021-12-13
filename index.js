let computerChoice = Math.floor(Math.random() * 3);

function clickEvent() {
    if (computerChoice === 0 ) {
        alert("You will perish soon.");
    } else if (computerChoice === 1) {
        alert("Wealth will find you.");
    } else if (computerChoice === 2) {
        alert("Love is in the air.");
    }
}
