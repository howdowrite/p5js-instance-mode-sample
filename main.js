import p5 from 'p5';

function createAutoResizer(p){
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

function createScreenCanvas(p){
  p.createCanvas(p.windowWidth, p.windowHeight);

}

const rainbowCircles = (p, opts = {}) => {
  let w =  opts.width ?? 8;
  let h = opts.height ?? 8;
  let d = opts.distance ?? 120;
  const colors = opts.colros ?? [
    '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf',
    '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
  ];

  p.setup = () => createScreenCanvas(p);

  p.draw = () => {
    p.background('#FFF');
    p.noStroke();

    for(let x = 0; x <= w; x++){
      for(let y = 0; y <= h; y++){
        p.fill(colors[(x + y) % colors.length]);
        p.ellipse(120 + d * x, 120 + d * y, 80, 80);
      }
    }
  };

  createAutoResizer(p);

};


new p5((p)=>rainbowCircles(p, {width:30}));
