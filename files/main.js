// ==================== GAME SETUP ====================

const GAME_NAME = "Guess the Word"
const NUMBER_OF_TRIES = 5
const NUMBER_OF_LETTERS = 5
const NUMBER_OF_HINTS = 2

// Set game title
document.querySelector("title").innerHTML = GAME_NAME
document.querySelector("h2").innerHTML = GAME_NAME

// ==================== WORD SELECTION ====================

const arrOfWords = [
    'apple', 'ocean', 'chair', 'green', 'music',
    'happy', 'stone', 'cloud', 'laugh', 'brush',
    'beach', 'dance', 'smile', 'river', 'bread',
    'honey', 'grape', 'radio', 'lucky', 'watch',
    'light', 'sleep', 'water', 'sound', 'spicy',
    'flask', 'quick', 'frost', 'queen', 'broom',
    'heart', 'orbit', 'snore', 'blade', 'snail',
    'storm', 'peach', 'power', 'crash', 'olive',
    'brain', 'fairy', 'dream', 'shade', 'tiger',
    'slice', 'blaze', 'maple', 'swirl', 'sweet',
    'blood', 'creek', 'bloom', 'think', 'drink',
    'plant', 'truck', 'bring', 'field', 'sword',
    'mango', 'lemon', 'berry', 'melon', 'grape',
    'pizza', 'bread', 'pasta', 'sauce', 'cream',
    'flame', 'spark', 'flash', 'crack', 'shock',
    'steam', 'swamp', 'marsh', 'drown', 'float',
    'wings', 'spark', 'glaze', 'glow', 'shine',
    'twine', 'spine', 'prime', 'crime', 'grime',
    'prism', 'chasm', 'spasm', 'smart', 'craft',
    'draft', 'shelf', 'dwarf', 'staff', 'stuff',
    'trust', 'trust', 'ghost', 'beast', 'feast',
    'yeast', 'coast', 'roast', 'toast', 'boast',
    'blast', 'frost', 'crust', 'trust', 'burst',
    'worst', 'first', 'birth', 'earth', 'worth',
    'north', 'forth', 'cloth', 'broth', 'froth',
    'truth', 'youth', 'mouth', 'south', 'route',
    'shout', 'about', 'doubt', 'scout', 'snout',
    'stout', 'trout', 'grout', 'shred', 'bread',
    'dread', 'tread', 'stead', 'stead', 'braid',
    'afraid', 'avoid', 'blend', 'spend', 'trend',
    'friend', 'sound', 'found', 'bound', 'round',
    'wound', 'grand', 'brand', 'stand', 'strand',
    'gland', 'bland', 'piano', 'radio', 'ratio',
    'patio', 'attic', 'panic', 'magic', 'sonic',
    'toxic', 'topic', 'comic', 'basic', 'logic',
    'cubic', 'civic', 'ethic', 'relic', 'epic'
]

// Select random word
const randomIndex = Math.floor(Math.random() * arrOfWords.length)
const wordToGuess = arrOfWords[randomIndex].toLowerCase()
console.log('Word to guess:', wordToGuess)

// ==================== DOM ELEMENTS ====================

const gameTriesContainer = document.querySelector(".tries")
const checkButton = document.querySelector(".check")
const hintButton = document.querySelector(".hint")
const hintCounter = document.querySelector(".hinto")
const resultContainer = document.querySelector(".result")
const resultMessage = document.querySelector(".msg")
const resultWord = document.querySelector(".fin")
const restartButton = document.querySelector(".restart")
const winSound = document.querySelector(".foz")
const lossSound = document.querySelector(".mshfoz")

// ==================== GAME STATE ====================

let currentTry = 1
let isGameOver = false
let hasWon = false
let numberOfHintsRemaining = NUMBER_OF_HINTS

// Set initial values
resultWord.innerHTML = wordToGuess
hintCounter.innerHTML = numberOfHintsRemaining
resultContainer.style.display = "none"

// ==================== INPUT GENERATION ====================

function generateInputs() {
    for (let i = 1; i <= NUMBER_OF_TRIES; i++) {
        const tryDiv = document.createElement("div")
        tryDiv.classList.add(`try-${i}`)

        const tryLabel = document.createElement("span")
        tryLabel.textContent = `Try ${i}`
        tryDiv.appendChild(tryLabel)

        for (let j = 1; j <= NUMBER_OF_LETTERS; j++) {
            const input = document.createElement("input")
            input.classList.add("letter")
            input.classList.add(`try-${i}-letter-${j}`)
            input.maxLength = 1
            input.type = "text"
            input.inputMode = "latin"
            input.disabled = true

            tryDiv.appendChild(input)
        }

        gameTriesContainer.appendChild(tryDiv)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    generateInputs()
    enableCurrentTry()
})

// ==================== INPUT KEYBOARD NAVIGATION ====================

function enableCurrentTry() {
    const inputs = document.querySelectorAll(`.try-${currentTry} input`)

    inputs.forEach((input, index) => {
        input.disabled = false

        // Auto-focus on first input
        if (index === 0) {
            input.focus()
        }

        // Handle input event - auto advance to next input
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.toLowerCase()

            if (e.target.value.length > 0) {
                findNextEnabledInput(inputs, index)?.focus()
            }
        })

        // Handle keyboard navigation
        input.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                findPreviousEnabledInput(inputs, index)?.focus()
            } else if (e.key === 'ArrowRight') {
                findNextEnabledInput(inputs, index)?.focus()
            } else if (e.key === 'Backspace') {
                if (input.value === '') {
                    const prev = findPreviousEnabledInput(inputs, index)
                    if (prev) {
                        prev.value = ''
                        prev.focus()
                    }
                }
            }
        })

        // Only accept letters
        input.addEventListener('keypress', (e) => {
            if (!/[a-z]/i.test(e.key)) {
                e.preventDefault()
            }
        })
    })
}

function findNextEnabledInput(inputs, currentIndex) {
    for (let i = currentIndex + 1; i < inputs.length; i++) {
        if (!inputs[i].disabled) {
            return inputs[i]
        }
    }
    return null
}

function findPreviousEnabledInput(inputs, currentIndex) {
    for (let i = currentIndex - 1; i >= 0; i--) {
        if (!inputs[i].disabled) {
            return inputs[i]
        }
    }
    return null
}

// ==================== GAME CHECK LOGIC ====================

function checkWord() {
    if (isGameOver) return

    const currentInputs = document.querySelectorAll(`.try-${currentTry} input`)
    let correctCount = 0
    const guessedWord = Array.from(currentInputs).map(input => input.value.toLowerCase()).join('')

    // Validate input
    if (guessedWord.length < NUMBER_OF_LETTERS) {
        alert('Please fill all letters!')
        return
    }

    // Check each letter
    currentInputs.forEach((input, index) => {
        input.disabled = true

        const letter = input.value.toLowerCase()
        const correctLetter = wordToGuess[index]

        if (letter === correctLetter) {
            input.classList.add('rip')
            correctCount++
        } else if (wordToGuess.includes(letter)) {
            input.classList.add('rnp')
        } else {
            input.classList.add('wib')
        }
    })

    // Check win condition
    if (correctCount === NUMBER_OF_LETTERS) {
        endGame(true)
    } else if (currentTry < NUMBER_OF_TRIES) {
        currentTry++
        setTimeout(() => enableCurrentTry(), 300)
    } else {
        endGame(false)
    }
}

function endGame(won) {
    isGameOver = true
    hasWon = won

    // Disable all inputs
    document.querySelectorAll('input').forEach(input => {
        input.disabled = true
    })

    // Show result
    resultContainer.style.display = 'block'

    if (won) {
        resultMessage.innerHTML = '🎉 You Won!'
        winSound.play().catch(err => console.log('Audio play error:', err))
    } else {
        resultMessage.innerHTML = '😔 You Lost!'
        lossSound.play().catch(err => console.log('Audio play error:', err))
    }
}

// ==================== HINTS ====================

function giveHint() {
    if (isGameOver) return

    if (numberOfHintsRemaining > 0) {
        numberOfHintsRemaining--
        hintCounter.innerHTML = numberOfHintsRemaining

        const currentInputs = document.querySelectorAll(`.try-${currentTry} input`)
        let randomIndex = Math.floor(Math.random() * wordToGuess.length)
        let inputToFill = currentInputs[randomIndex]

        // Find an enabled input
        while (inputToFill.disabled) {
            randomIndex = Math.floor(Math.random() * wordToGuess.length)
            inputToFill = currentInputs[randomIndex]
        }

        inputToFill.value = wordToGuess[randomIndex]
        inputToFill.classList.add('rip')
        inputToFill.disabled = true
    }
}

// ==================== EVENT LISTENERS ====================

checkButton.addEventListener('click', checkWord)
hintButton.addEventListener('click', giveHint)
restartButton.addEventListener('click', () => location.reload())

// Enter key triggers check
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !isGameOver) {
        checkWord()
    }
})
