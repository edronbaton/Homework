class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv () {
        let elementDiv = document.createElement('div')
        elementDiv.textContent = 'Текст';
        elementDiv.style.cssText=`height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size: ${this.fontSize}px;text-align:${this.textAlign};`;
        document.body.appendChild(elementDiv);
        
        
    }
}

div = new Options(100, 200, 'green', 30, 'center');

console.log(div.createDiv())
