import p5 from 'p5';

function useCanvas(id,drawLoop, opts){
  return new p5((p)=>{
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
      p.background('#FFF');
      drawLoop(p, opts);
    }

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  }, id);
}

const rainbowCircles = (p, opts = {}) => {
  let w =  opts.width ?? 8;
  let h = opts.height ?? 8;
  let d = opts.distance ?? 120;
  const colors = opts.colors ?? [
    '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf',
    '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
  ];

  p.noStroke();

  for(let x = 0; x < w; x++){
    for(let y = 0; y < h; y++){
      p.fill(colors[(x + y) % colors.length]);
      p.ellipse(120 + d * x, 120 + d * y, 80, 80);
    }
  }

  p.noLoop();
};

const randomRainbowCircles = (p, opts = {}) => {
  const max = opts.max ?? 100;
  const maxSize = opts.maxSize ?? 200;
  const minSize = opts.minSize ?? 40;
  const colors = opts.colors ?? [
    '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf',
    '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
  ];

  p.noStroke();

  for(let i = 0; i < max; i++){
    const x = p.random(p.width);
    const y = p.random(p.height);

    const color = colors[p.floor(p.random(colors.length))];

    const sz = p.random(minSize,maxSize);
    p.fill(color);
    p.ellipse(x,y,sz);
  }
  p.noLoop();
}

// useCanvas("rainbowcircles", rainbowCircles, {width: 25, distance: 90});

useCanvas("1", randomRainbowCircles, {max: 500});

