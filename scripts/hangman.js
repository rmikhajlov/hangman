class Hangman {
    constructor(word, guesses){
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    calculateStatus() {
        let isGameFinished = true

        this.puzzle.split('').forEach((element) => {
            if (element == '*') {
                isGameFinished = false
            }
        })
    
        if (this.guesses <= 0) {
            this.status = 'failed'
        } else if (isGameFinished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
        
        console.log(this.status)
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return 'Nice try! The word was: ' + '"' +  this.word.join('') + '"' 
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        }
    }

    makeGuess(character) {
        if (this.status === 'playing') {
            character = character.toLowerCase()
            const isUnique = !this.guessedLetters.includes(character)
            const isBadGuess = !this.word.includes(character)
            
        if (isUnique) {
                this.guessedLetters.push(character)
        }
        
        if (isUnique && isBadGuess) {
                this.guesses--
        }
        
        this.calculateStatus()
        }
    }
}




