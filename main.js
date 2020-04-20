
// This is the first file to run.
window.onload = function(){
    let canvas = this.document.getElementById("canvas");
    
    window.game = new Game();
    window.game.keyboardlistenerObject = this.document;
    window.game.setCanvas(canvas);
    window.game.start();
}
class Game{
    keyboardController;
    canvas;
    renderEngine;
    constructor(){
        this.keyboardController = new KeyboardControl();
        this.renderEngine = new RenderEngine();
        this.physicsEngine = new Physics();

        this.blobs = [];

        // Create some blobs.
        this.createBlob(100, 100, 10);
    }
    setCanvas(canvas){
        this.canvas = canvas;
        this.renderEngine.setCanvas(this.canvas);
    }
    set keyboardlistenerObject(keyboardlistenerObject){
        this.keyboardController.listenerObject = keyboardlistenerObject;
    }
    start(){
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
    createBlob(x = 0,y = 0,r = 10){
        let newBlob = new Blob();
        newBlob.posX = x;
        newBlob.posY = y;
        newBlob.radius = r;
        this.blobs.push(newBlob);
        this.physicsEngine.addBlob(newBlob);
        this.renderEngine.addBlob(newBlob);
    }
    gameLoop(){

        // Do physics calculations.
        this.physicsEngine.run();

        // Render all blobs.
        this.renderEngine.render();

        if(this.keyboardController.w.isDown){
            console.log("!!");
        }
        
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
}
