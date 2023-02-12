const DATA_URL = `https://bitcoin24.com.ua/ajax/coursesv2.json`;
let data = {
  P24UAH: {
    BTC: {
      round: 8,
      curs_in: 948445.37,
      curs_out: "1",
      res: "0.582394",
      fee: "0.00004068",
      min: 500,
      max: "29500",
    },
    ETH: {
      round: 8,
      curs_in: 67492.48,
      curs_out: "1",
      res: "3.38833",
      fee: "0.00044100",
      min: 400,
      max: "29500",
    },
    USDTERC20: {
      round: 5,
      curs_in: "30",
      curs_out: "1",
      res: "0",
      fee: "2.09",
      min: 921.27,
      max: "29500",
    },
    TRX: {
      round: 2,
      curs_in: 2.97,
      curs_out: "1",
      res: "44761.1",
      fee: 0,
      min: "200",
      max: "29500",
    },
    USDTTRC20: {
      round: 3,
      curs_in: "43.7",
      curs_out: "1",
      res: "19453.6",
      fee: "15",
      min: "500",
      max: "29500",
    },
  },
  BTC: {
    P24UAH: {
      round: 2,
      curs_in: "1",
      curs_out: 843305.93,
      res: "309079",
      fee: "0",
      min: "0.005",
      max: "0.11858093",
    },
    CARDUAH: {
      round: 2,
      curs_in: "1",
      curs_out: 832353.9,
      res: "309079",
      fee: "0",
      min: "0.005",
      max: "0.12014120",
    },
    MONOBUAH: {
      round: 2,
      curs_in: "1",
      curs_out: 854257.95,
      res: "309079",
      fee: "0",
      min: "0.005",
      max: "0.11706066",
    },
    feesat: 18,
    USDTTRC20: {
      round: 2,
      curs_in: "1",
      curs_out: "21837",
      res: "1741.86",
      fee: "0",
      min: "0.002",
      max: "0.1",
    },
  },
  ETH: {
    P24UAH: {
      round: 2,
      curs_in: "1",
      curs_out: 58288.96,
      res: "199656",
      fee: "0",
      min: 0.005,
      max: "0.85779537",
    },
    CARDUAH: {
      round: 2,
      curs_in: "1",
      curs_out: 58288.96,
      res: "199656",
      fee: "0",
      min: 0.005,
      max: "0.85779537",
    },
    MONOBUAH: {
      round: 2,
      curs_in: "1",
      curs_out: 58288.96,
      res: "199656",
      fee: "0",
      min: 0.005,
      max: "0.85779537",
    },
    feesat: 21,
    USDTTRC20: {
      round: 2,
      curs_in: "1",
      curs_out: 1487.9,
      res: "2150",
      fee: "0",
      min: "0.02",
      max: "1",
    },
  },
  MONOBUAH: {
    ETH: {
      round: 8,
      curs_in: 67492.48,
      curs_out: "1",
      res: "3.38833",
      fee: "0.00044100",
      min: 400,
      max: "29500",
    },
    BTC: {
      round: 8,
      curs_in: 948445.37,
      curs_out: "1",
      res: "0.582394",
      fee: "0.00004068",
      min: 500,
      max: "29500",
    },
    USDTERC20: {
      round: 5,
      curs_in: "30",
      curs_out: "1",
      res: "0",
      fee: "2.09",
      min: 921.27,
      max: "29500",
    },
    TRX: {
      round: 2,
      curs_in: 2.97,
      curs_out: "1",
      res: "44761.1",
      fee: 0,
      min: "200",
      max: "29500",
    },
    USDTTRC20: {
      round: 3,
      curs_in: "43.7",
      curs_out: "1",
      res: "19453.6",
      fee: "15",
      min: "500",
      max: "29500",
    },
  },
  CARDUAH: {
    ETH: {
      round: 8,
      curs_in: 67492.48,
      curs_out: "1",
      res: "3.38833",
      fee: "0.00044100",
      min: 400,
      max: "29500",
    },
    BTC: {
      round: 8,
      curs_in: 948445.37,
      curs_out: "1",
      res: "0.582394",
      fee: "0.00004068",
      min: 500,
      max: "29500",
    },
    USDTERC20: {
      round: 5,
      curs_in: "30",
      curs_out: "1",
      res: "0",
      fee: "2.09",
      min: 921.27,
      max: "29500",
    },
    TRX: {
      round: 2,
      curs_in: 2.97,
      curs_out: "1",
      res: "44761.1",
      fee: 0,
      min: "200",
      max: "29500",
    },
    USDTTRC20: {
      round: 3,
      curs_in: "43.7",
      curs_out: "1",
      res: "19453.6",
      fee: "15",
      min: "500",
      max: "29500",
    },
  },
  USDTERC20: {
    P24UAH: {
      round: 2,
      curs_in: "1",
      curs_out: "26",
      res: "0",
      fee: "0",
      min: "50",
      max: 1923.08,
    },
    MONOBUAH: {
      round: 2,
      curs_in: "1",
      curs_out: "26",
      res: "0",
      fee: "0",
      min: "50",
      max: 1923.08,
    },
    CARDUAH: {
      round: 2,
      curs_in: "1",
      curs_out: "26",
      res: "0",
      fee: "0",
      min: "50",
      max: 1923.08,
    },
  },
  TRX: {
    P24UAH: {
      round: 2,
      curs_in: "1",
      curs_out: 2.4558,
      res: "92659.6",
      fee: "0",
      min: "200",
      max: 20359.96,
    },
    MONOBUAH: {
      round: 2,
      curs_in: "1",
      curs_out: "2.5464",
      res: "92659.5",
      fee: "0",
      min: "200",
      max: 19635.56,
    },
    CARDUAH: {
      round: 2,
      curs_in: "1",
      curs_out: 2.4558,
      res: "92659.6",
      fee: "0",
      min: "200",
      max: 20359.96,
    },
    USDTTRC20: {
      round: 2,
      curs_in: "1",
      curs_out: 0.062688,
      res: "2184",
      fee: "0",
      min: "500",
      max: "20000",
    },
  },
  USDTTRC20: {
    P24UAH: {
      round: 2,
      curs_in: "1",
      curs_out: "38",
      res: "184210",
      fee: "0",
      min: 50,
      max: 1315.79,
    },
    MONOBUAH: {
      round: 2,
      curs_in: "1",
      curs_out: "39.6459",
      res: "186123",
      fee: "0",
      min: 50,
      max: 1261.16,
    },
    CARDUAH: {
      round: 2,
      curs_in: "1",
      curs_out: "38",
      res: "184206",
      fee: "0",
      min: 50,
      max: 1315.79,
    },
    BTC: {
      round: 8,
      curs_in: 22561.17,
      curs_out: "1",
      res: "0.155874",
      fee: "0.00004068",
      min: 30,
      max: "1000",
    },
    ETH: {
      round: 8,
      curs_in: 1579.94,
      curs_out: "1",
      res: "0.41184",
      fee: "0.00044100",
      min: 30,
      max: "1000",
    },
    TRX: {
      round: 4,
      curs_in: 0.067858,
      curs_out: "1",
      res: "5710.58",
      fee: "0",
      min: "10",
      max: "1000",
    },
  },
  bestcours: 1,
  time_up: "1676215687",
};

const blockOut = document.querySelector(".block--out");
const blockIn = document.querySelector(".block--in");

const output = blockOut.querySelector(".select");
const input = blockIn.querySelector(".select");


const inputSend = blockOut.querySelector('.input')
const inputGet = blockIn.querySelector('.input');
console.log(inputGet, inputSend)


const defaultValue = output.value || 'BTC';


let couple = {
    out: defaultValue,
    in: ''
}



function getList(val) {
  return data[val];
}

function setList(source, target) {
    let selectedValOut, selectedValIn;

    selectedValOut = [...source.options].filter(option => option.selected)[0].value
    selectedValIn = [...target.options].filter(option => option.selected)[0].value
    console.log(selectedValOut, selectedValIn)
    
  let currencyList = data[source.value]
  console.log(currencyList)
  let selectedIndex = 0;
  target.innerHTML = "";
  const arrOfCurrency = Object.keys(currencyList);
  arrOfCurrency.forEach((curr, i) => {
    if(typeof currencyList[curr] != 'object') return
    const option = document.createElement("option");
    option.value = curr;
    option.innerText = curr;
    if(curr === selectedValIn){
        selectedIndex = i;
    }
    target.appendChild(option);
  });
  source.options
  target.options[selectedIndex].selected = true;
  couple.out = output.value;
  couple.in = input.value;
}

function firstRender(){
    let currencyList = data[defaultValue];
    let selectedIndex = 0;
    input.innerHTML = "";
    const arrOfCurrency = Object.keys(currencyList);
    arrOfCurrency.forEach((curr, i) => {
      const option = document.createElement("option");
      option.value = curr;
      option.innerText = curr;
      input.appendChild(option);
    });
    input.options[selectedIndex].selected = true;
    couple.in = input.value;
    console.log(couple)
}

function fillInputs(){
    inputGet.value = +inputSend.value * data[couple.out][couple.in]['curs_in']
    console.log(data[couple.out][couple.in]['curs_in'])
}


output.addEventListener("change", (e) => {
  setList(e.target, input);
  console.log(couple)
});
input.addEventListener("change", (e) => {
  setList(e.target, output);
  console.log(couple)
});

firstRender()
setList(output, input);
fillInputs()
console.log(data);
