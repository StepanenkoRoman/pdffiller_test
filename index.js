let params = {
  lines: [
    {
      background: "#00F",
      updateTime: 2000,
      elements: [
        {
          background: "#FFF",
          width: 25
        },
        {
          background: "#000",
          width: 50
        },
        {
          background: "#FFF",
          width: 25
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 3000,
      elements: [
        {
          background: "#000",
          width: 20
        },
        {
          background: "#FFF",
          width: 50
        },
        {
          background: "#000",
          width: 25
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 4000,
      elements: [
        {
          background: "#FFF",
          width: 33
        },
        {
          background: "#000",
          width: 33
        },
        {
          background: "#FFF",
          width: 33
        }
      ]
    },
    {
      background: "#00F",
      updateTime: 2000,
      elements: [
        {
          background: "#000",
          width: 10
        },
        {
          background: "#FFF",
          width: 60
        },
        {
          background: "#000",
          width: 10
        }
      ]
    },  
    {
      background: "#00F",
      updateTime: 1000,
      elements: [
        {
          background: "#FFF",
          width: 20
        },
        {
          background: "#000",
          width: 20
        },
        {
          background: "#FFF",
          width: 20
        }
      ]
    }
  ]
};

let intervals = [];

function random() {
  return Math.floor(Math.random() * 255);
}

function getNewColor(){
  return `rgb(${random()},${random()},${random()})`
}

function colourGeneration(id, interval) {
  let node = document.getElementById(id);
  
  let timer = setInterval(function() {
    for (let k = 0; k < node.childNodes.length; k++) {
      node.childNodes[k].style.background = getNewColor();
    }
  }, interval);

  intervals.push(timer);
}

function creation() {
  let numberOfLines = params.lines.length;

  for (let el = 0; el < params.lines.length; el++) {
    let div = document.createElement("div");

    div.style.width = "100vw";
    div.style.height = 100 / numberOfLines + "vh";
    div.style.background = params.lines[el].background;
    div.style.display = "flex";
    div.style.flexDirection = "row";

    document.body.appendChild(div);
    div.id = el;

    for (let k in params.lines[el].elements) {
      let divider = document.createElement("div");

      console.log(params.lines[el].elements[k]);
      divider.style.width = params.lines[el].elements[k].width + "%";
      divider.style.height = 100 / numberOfLines + "vh";
      divider.style.background = params.lines[el].elements[k].background;
      divider.style.zIndex = "1";

      document.getElementById(el).appendChild(divider);
    }
    colourGeneration(el, params.lines[el].updateTime);
  }
}

creation();
