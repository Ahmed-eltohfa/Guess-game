// game name
let gameName = "Geuss the word"
document.querySelector("title").innerHTML = gameName
document.querySelector("h2").innerHTML = gameName

// word to geuss
let arrOfWords = [
    'apple', 'ocean', 'chair', 'green', 'music',
    'happy', 'stone', 'cloud', 'laugh', 'brush',
    'beach', 'dance', 'smile', 'river', 'bread',
    'honey', 'grape', 'radio', 'lucky', 'watch',
    'light', 'sleep', 'water', 'sound', 'spicy',
    'flask', 'quick', 'frost', 'queen', 'broom',
    'frost', 'heart', 'orbit', 'snore', 'laugh',
    'blade', 'frost', 'snail', 'storm', 'peach',
    'power', 'crash', 'olive', 'stone',
    'fairy', 'dream', 'shade', 'tiger', 'slice',
    'blaze', 'maple', 'swirl', 'brush', 'sweet',
    'blood', 'creek', 'spicy', 'bloom',
    'snore', 'orbit', 'radio', 'queen',
    'heart', 'laugh', 'crash', 'storm',
    'dream', 'tiger', 'peach', 'blaze', 'olive',
    'snail', 'stone', 'fairy', 'shade', 'slice',
    'spicy', 'dream', 'tiger', 'blaze',
    'queen', 'olive',
    'crash', 'heart', 'stone', 'laugh'
];
let index = Math.floor(Math.random() * arrOfWords.length)
let wordToGeuss = arrOfWords[index]
console.log(wordToGeuss)

// create the inputs
let numberOfTries = 5
let numberOfLetters = 5
let father = document.querySelector(".tries")

let generateInputs = function () {
    for (let i = 1; i <= numberOfTries; i++) {
        let div = document.createElement("div")
        div.classList.add(`try-${i}`)
        let span = document.createElement("span")
        let spantxt = document.createTextNode(`try ${i}`)
        span.appendChild(spantxt)
        div.appendChild(span)
        for (let j = 1; j <= numberOfLetters; j++) {
            let input = document.createElement("input")
            input.classList.add("letter")
            input.classList.add(`try-${i}-letter-${j}`)
            input.maxLength = 1
            input.type = "text"
            div.appendChild(input)
        }
        father.appendChild(div)
    }
}
window.onload = generateInputs()

//dealing wiht inputs and buttons
let final = true

let checkbtn = document.querySelector(".check")

let divs = document.querySelectorAll(".tries div")
let inputs = document.querySelectorAll("input")
let currentTry = 1;

let win = document.querySelector(".foz")
let loss = document.querySelector(".mshfoz")

let result = document.querySelector(".result")
result.style.display = "none"
let msg = document.querySelector(".msg")
let fin = document.querySelector(".fin")
fin.innerHTML = wordToGeuss
let restart = document.querySelector(".restart")
restart.onclick = function () {
    location.reload()
}

inputs.forEach((input) => {
    input.disabled = true
})

function doit() {
    divs.forEach((div) => {
        let tryInputs = document.querySelectorAll(`.try-${currentTry} input`)
        if ((div.classList.contains(`try-${currentTry}`))) {
            tryInputs.forEach((input, index) => {
                input.disabled = false
                tryInputs[0].focus()
                input.oninput = function () {
                    if (tryInputs[index + 1] && tryInputs[index + 1].disabled === false) {
                        input.blur()
                        tryInputs[index + 1].focus()
                    } else if (tryInputs[index + 1].disabled === true &&
                        tryInputs[index + 2].disabled === false &&
                        tryInputs[index + 2]) {
                        input.blur()
                        tryInputs[index + 2].focus()
                    } else if (tryInputs[index + 1].disabled === true &&
                        tryInputs[index + 2].disabled === true &&
                        tryInputs[index + 3]) {
                        input.blur()
                        tryInputs[index + 3].focus()
                    }
                }
                input.addEventListener("keydown", (event) => {
                    // console.log(event.key)
                    if (event.key === "ArrowLeft") {
                        if (tryInputs[index - 1] && tryInputs[index - 1].disabled === false) {
                            tryInputs[index - 1].focus()
                        } else if (tryInputs[index - 2] && tryInputs[index - 2].disabled === false) {
                            tryInputs[index - 2].focus()
                        } else if (tryInputs[index - 3] && tryInputs[index - 3].disabled === false) {
                            tryInputs[index - 3].focus()
                        }
                    } else if (event.key === "ArrowRight") {
                        if (tryInputs[index + 1] && tryInputs[index + 1].disabled === false) {
                            tryInputs[index + 1].focus()
                        } else if (tryInputs[index + 2] && tryInputs[index + 2].disabled === false) {
                            tryInputs[index + 2].focus()
                        } else if (tryInputs[index + 3] && tryInputs[index + 3].disabled === false) {
                            tryInputs[index + 3].focus()
                        }
                    } else if (event.key === "Backspace") {
                        if (input.value !== "") {
                            input.value = ""
                        } else if (tryInputs[index - 1] && tryInputs[index - 1].disabled == false) {
                            tryInputs[index - 1].value = ""
                            tryInputs[index - 1].focus()
                        }
                    }
                })
            })
        }
    })
}
doit()

checkbtn.onclick = function () {

    currentInputs = document.querySelectorAll(`.try-${currentTry} input`)
    // console.log(currentInputs)
    let count = 0
    currentInputs.forEach((input, index) => {
        if (input.value === wordToGeuss[index]) {
            input.classList.add("rip")
            count += 1
        } else if (wordToGeuss.includes(input.value) && input.value !== "") {
            input.classList.add("rnp")
            final = false
        } else {
            input.classList.add("wib")
            final = false
        }
        input.disabled = true
        input.style.color = "white"
    })
    if (count === numberOfLetters) {
        final = true
    }

    // manage win
    if (final) {
        msg.innerHTML = "You win"
        result.style.display = "block"
        result.style.animation = "spin .3s 1 forwards linear"
        win.play()
    } else {
        // manage loss
        if (currentTry === 5) {
            msg.innerHTML = "You lost"
            result.style.display = "block"
            result.style.animation = "spin .3s 1 forwards linear"
            loss.play()
        }
        currentTry += 1
        doit()
    }
}
// make enter do the check btn
document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkbtn.click()
    }
})
// hints
let numberOfHints = 2

let hintbtn = document.querySelector(".hint")
let hinto = document.querySelector(".hinto")
hinto.innerHTML = numberOfHints
hinto.style.color = "#00950b"
hintbtn.onclick = function () {
    if (numberOfHints > 0) {
        numberOfHints -= 1;
        hinto.innerHTML = numberOfHints
        let randomIndex = Math.floor(Math.random() * wordToGeuss.length)
        let randomLetter = wordToGeuss[randomIndex]
        let inputToFill = document.querySelector(`.try-${currentTry}-letter-${randomIndex + 1}`)
        while (true) {
            if (inputToFill.disabled == true) {
                randomIndex = Math.floor(Math.random() * wordToGeuss.length)
                randomLetter = wordToGeuss[randomIndex]
                inputToFill = document.querySelector(`.try-${currentTry}-letter-${randomIndex + 1}`)
            } else {
                break;
            }
        }
        inputToFill.value = randomLetter
        inputToFill.classList.add("rip")
        inputToFill.disabled = true
        inputToFill.style.color = "white"
    }
}