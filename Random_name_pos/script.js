// Autor: Marek Charvát 
// 15.2. 2022
const words = []
    function setup() {
        createCanvas(windowWidth, windowHeight)
        const str = 'Marek Charvát'
        const wordsStr = str.split(' ')
        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);          }   
        textSize(67)
        let x = 800 
        let y = 400
        fill(60, 7, 81)
        for (let i = 0; i < wordsStr.length; i++) {
            const wordStr = wordsStr[i]
            const wordStrWidth = textWidth(wordStr)
            const word = new Word(wordStr, x, y, i)
            words.push(word)
            x = x + wordStrWidth + textWidth(' ')
            const nextWordStrWidth = textWidth(wordsStr[i+1]) || 0
            if (x > width - nextWordStrWidth) {
                y += 40
                x = 20        }    } }
        function draw() {
            background(4, 1, 36)           
        for (let i = 0; i < words.length; i++) {
            const word = words[i]
            word.update()
            word.display()            }        }
        function keyPressed() {
        if (key === 's') {
            for (let word of words) word.spread()
        } else if (key === 'r') {
            for (let word of words) word.reset()            }                }        class Word {
            constructor(word, x, y, idx) {
            this.word = word
            this.x = x
            this.y = y
            this.tx = this.x
            this.ty = this.y
            this.origx = this.x
            this.origy = this.y
            this.idx = idx
            this.fcolor = color(1, 0, 81)            }
        reset() {
            this.tx = this.origx
            this.ty = this.origy            }
        spread() {
            this.tx = random(width)
            this.ty = random(height)            }
        update() {
            this.x = lerp(this.x, this.tx, 0.1)
            this.y = lerp(this.y, this.ty, 0.1)            }
            display() {
                fill(this.fcolor)
                noStroke()
                text(this.word, this.x, this.y)            }        }
