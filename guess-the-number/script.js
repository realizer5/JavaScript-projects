let result = document.getElementById("output");
let form = document.getElementById("form");
let number = Math.floor(Math.random() * 100);
let i = 0;
form.onsubmit = (event) => {
    let guess = document.getElementById("inputNumber").value;
    guess = Number.parseInt(guess);
    i++;
    if (i < 10) {
        if (guess < number) {
            result.innerHTML = "<p>Your guess was smaller than the actual number :\')</p> <p>Try again</p>";
        }
        else if (guess > number) {
            result.innerHTML = "<p>Your guess was bigger than the actual number :\')</p> <p>Try again</p>";
        }
        else if (guess == number) {
            result.innerHTML = ` <p>Your guess was correct :-)</p> <p>Your score is ${(10 - i)}</p> <p> Actual number was ${number}</p>`;
            number = Math.floor(Math.random() * 100);
            i = 0;
        }
        else {
            result.innerHTML = "<p>uh... You have to enter something #_#</p>"
            i == 0 ? i = 0 : i--;
            stop;
        }
    }
    if (guess != number && i === 10) {
        result.innerHTML = `<p>You ran out of chances :/</p> <p> Actual number was ${number}</p>`;
        i = 0;
        number = Math.floor(Math.random() * 100);
    }
    event.preventDefault();
}