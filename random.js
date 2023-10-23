const generateRandom = function () {
  let count = 0;
  let list = [];
  let result = [];
  for (let i = 0; i < 18; i++) {
    let one = Math.floor(parseFloat(Math.random()) * Math.pow(10, 6));
    count += one;
    list.push(one);
  }

  for(let i = 0; i < 17; i++) {
    result.push(Math.pow(10, 6) * list[i] / count)
  }

  
};

generateRandom();
