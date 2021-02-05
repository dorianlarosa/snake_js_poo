export default class Map {
    constructor(canvas, canvasCtx) {
        this.canvas = canvas;
        this.ctx = canvasCtx;
        this.gridSize = 25;
        this.backgroundcolor = "#202020";
        this.backgroundcolorGrid = "rgb(29, 29, 29)";
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    draw() {
        this.ctx.fillStyle = this.backgroundcolor;
        this.ctx.fillRect(0, 0, this.width, this.height);

        let c = 0;
        let countColumn = this.width / this.gridSize;

        for (let indexColumn = 0; indexColumn < countColumn; indexColumn++) {
            let l = 0;
            (indexColumn % 2) ? l = this.gridSize: l = 0;

            for (let indexLine = 0; indexLine < countColumn; indexLine++) {
                this.ctx.fillStyle = this.backgroundcolorGrid;
                this.ctx.fillRect(c, l, this.gridSize, this.gridSize);
                l += this.gridSize + this.gridSize;
            }
            c += this.gridSize;
        }
    }

    get getGridSize() {
        return this.gridSize;
    }
}