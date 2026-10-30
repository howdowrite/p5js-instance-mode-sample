import p5 from 'p5';

class canvas{
  constructor(id){
    this.containerId = id;
    this.p5Instance = new p5(this.sketch.bind(this), this.containerId);
  };

  sketch(p){
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      p.background('#FFF');
      p.noStroke();

      let width = 8;
      let height = 8;
      let d = 120;
      const colors = [
        '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf',
        '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
      ];

      for(let x = 0; x <= width; x++){
        for(let y = 0; y <= height; y++){
          p.fill(colors[(x + y) % colors.length]);
          p.ellipse(120 + d * x, 120 + d * y, 80, 80);
        }
      }
    }

    p.windowResized = () => {
      this.p.resizeCanvas(this.p.windowWidth, this.p.windowHeight);
    };
  };
}

const rainbowCircles = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background('#FFF');
    p.noStroke();

    let width = 8;
    let height = 8;
    let d = 120;
    const colors = [
      '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf',
      '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
    ];

    for(let x = 0; x <= width; x++){
      for(let y = 0; y <= height; y++){
        p.fill(colors[(x + y) % colors.length]);
        p.ellipse(120 + d * x, 120 + d * y, 80, 80); } } }; p.windowResized = () => { p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
};

let grid = new canvas("1");

new p5(grid);
