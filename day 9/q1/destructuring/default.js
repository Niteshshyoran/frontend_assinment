function getCoordinates({ x = 0, y = 0 } = {}) {
    return `X: ${x}, Y: ${y}`;
  }
  
  console.log(getCoordinates({ x: 5, y: 10 })); 