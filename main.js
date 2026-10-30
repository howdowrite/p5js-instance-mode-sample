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


const perlinField = (p, opts = {}) => {
  const rows = opts.rows ?? 28;
  const cols = opts.cols ?? 28;
  const gw = opts.gridWidth ?? 1200;

  const m = opts.margin ?? 10;
  p.noiseSeed(opts.seed ?? 21)
  const d = gw/rows;

  const noiseScale = 0.03;
  p.noStroke()
  p.textAlign(p.CENTER, p.CENTER)

  p.textSize(d*0.60);
  p.textFont('courier new')
  for(let x = 0; x < rows; x++){
    for(let y = 0; y < cols; y++){
      const value = p.noise(x * noiseScale,y * noiseScale);
      const normalized = p.floor(p.map(value, 0, 1, 1, 255))

      const spacingX = m + d * x;
      const spacingY = m + d * y;
      p.fill(normalized);
      p.rect(spacingX, spacingY, d, d);
      p.fill(255);
      p.text(normalized, spacingX + d/2, spacingY + d/2);

    }
  }

}

useCanvas("1", perlinField, {rows: 100, cols: 100});
