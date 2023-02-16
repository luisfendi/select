import data from './data';
//если без сборщиков модулей то объявляем/получаем в этом же файле
// let data = {
//   P24UAH: {
//     BTC: {
//       round: 8,
//       curs_in: 948445.37,
//       curs_out: "1",
//       res: "0.582394",
//       fee: "0.00004068",
//       min: 500,
//       max: "29500",
//     },
//     ETH: {
//       round: 8,
//       curs_in: 67492.48,
//       curs_out: "1",
//       res: "3.38833",
//       fee: "0.00044100",
//       min: 400,
//       max: "29500",
//     },
//     USDTERC20: {
//       round: 5,
//       curs_in: "30",
//       curs_out: "1",
//       res: "0",
//       fee: "2.09",
//       min: 921.27,
//       max: "29500",
//     },
//     TRX: {
//       round: 2,
//       curs_in: 2.97,
//       curs_out: "1",
//       res: "44761.1",
//       fee: 0,
//       min: "200",
//       max: "29500",
//     },
//     USDTTRC20: {
//       round: 3,
//       curs_in: "43.7",
//       curs_out: "1",
//       res: "19453.6",
//       fee: "15",
//       min: "500",
//       max: "29500",
//     },
//   },
//   BTC: {
//     P24UAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 843305.93,
//       res: "309079",
//       fee: "0",
//       min: "0.005",
//       max: "0.11858093",
//     },
//     CARDUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 832353.9,
//       res: "309079",
//       fee: "0",
//       min: "0.005",
//       max: "0.12014120",
//     },
//     MONOBUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 854257.95,
//       res: "309079",
//       fee: "0",
//       min: "0.005",
//       max: "0.11706066",
//     },
//     feesat: 18,
//     USDTTRC20: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "21837",
//       res: "1741.86",
//       fee: "0",
//       min: "0.002",
//       max: "0.1",
//     },
//   },
//   ETH: {
//     P24UAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 58288.96,
//       res: "199656",
//       fee: "0",
//       min: 0.005,
//       max: "0.85779537",
//     },
//     CARDUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 58288.96,
//       res: "199656",
//       fee: "0",
//       min: 0.005,
//       max: "0.85779537",
//     },
//     MONOBUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 58288.96,
//       res: "199656",
//       fee: "0",
//       min: 0.005,
//       max: "0.85779537",
//     },
//     feesat: 21,
//     USDTTRC20: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 1487.9,
//       res: "2150",
//       fee: "0",
//       min: "0.02",
//       max: "1",
//     },
//   },
//   MONOBUAH: {
//     ETH: {
//       round: 8,
//       curs_in: 67492.48,
//       curs_out: "1",
//       res: "3.38833",
//       fee: "0.00044100",
//       min: 400,
//       max: "29500",
//     },
//     BTC: {
//       round: 8,
//       curs_in: 948445.37,
//       curs_out: "1",
//       res: "0.582394",
//       fee: "0.00004068",
//       min: 500,
//       max: "29500",
//     },
//     USDTERC20: {
//       round: 5,
//       curs_in: "30",
//       curs_out: "1",
//       res: "0",
//       fee: "2.09",
//       min: 921.27,
//       max: "29500",
//     },
//     TRX: {
//       round: 2,
//       curs_in: 2.97,
//       curs_out: "1",
//       res: "44761.1",
//       fee: 0,
//       min: "200",
//       max: "29500",
//     },
//     USDTTRC20: {
//       round: 3,
//       curs_in: "43.7",
//       curs_out: "1",
//       res: "19453.6",
//       fee: "15",
//       min: "500",
//       max: "29500",
//     },
//   },
//   CARDUAH: {
//     ETH: {
//       round: 8,
//       curs_in: 67492.48,
//       curs_out: "1",
//       res: "3.38833",
//       fee: "0.00044100",
//       min: 400,
//       max: "29500",
//     },
//     BTC: {
//       round: 8,
//       curs_in: 948445.37,
//       curs_out: "1",
//       res: "0.582394",
//       fee: "0.00004068",
//       min: 500,
//       max: "29500",
//     },
//     USDTERC20: {
//       round: 5,
//       curs_in: "30",
//       curs_out: "1",
//       res: "0",
//       fee: "2.09",
//       min: 921.27,
//       max: "29500",
//     },
//     TRX: {
//       round: 2,
//       curs_in: 2.97,
//       curs_out: "1",
//       res: "44761.1",
//       fee: 0,
//       min: "200",
//       max: "29500",
//     },
//     USDTTRC20: {
//       round: 3,
//       curs_in: "43.7",
//       curs_out: "1",
//       res: "19453.6",
//       fee: "15",
//       min: "500",
//       max: "29500",
//     },
//   },
//   USDTERC20: {
//     P24UAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "26",
//       res: "0",
//       fee: "0",
//       min: "50",
//       max: 1923.08,
//     },
//     MONOBUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "26",
//       res: "0",
//       fee: "0",
//       min: "50",
//       max: 1923.08,
//     },
//     CARDUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "26",
//       res: "0",
//       fee: "0",
//       min: "50",
//       max: 1923.08,
//     },
//   },
//   TRX: {
//     P24UAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 2.4558,
//       res: "92659.6",
//       fee: "0",
//       min: "200",
//       max: 20359.96,
//     },
//     MONOBUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "2.5464",
//       res: "92659.5",
//       fee: "0",
//       min: "200",
//       max: 19635.56,
//     },
//     CARDUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 2.4558,
//       res: "92659.6",
//       fee: "0",
//       min: "200",
//       max: 20359.96,
//     },
//     USDTTRC20: {
//       round: 2,
//       curs_in: "1",
//       curs_out: 0.062688,
//       res: "2184",
//       fee: "0",
//       min: "500",
//       max: "20000",
//     },
//   },
//   USDTTRC20: {
//     P24UAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "38",
//       res: "184210",
//       fee: "0",
//       min: 50,
//       max: 1315.79,
//     },
//     MONOBUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "39.6459",
//       res: "186123",
//       fee: "0",
//       min: 50,
//       max: 1261.16,
//     },
//     CARDUAH: {
//       round: 2,
//       curs_in: "1",
//       curs_out: "38",
//       res: "184206",
//       fee: "0",
//       min: 50,
//       max: 1315.79,
//     },
//     BTC: {
//       round: 8,
//       curs_in: 22561.17,
//       curs_out: "1",
//       res: "0.155874",
//       fee: "0.00004068",
//       min: 30,
//       max: "1000",
//     },
//     ETH: {
//       round: 8,
//       curs_in: 1579.94,
//       curs_out: "1",
//       res: "0.41184",
//       fee: "0.00044100",
//       min: 30,
//       max: "1000",
//     },
//     TRX: {
//       round: 4,
//       curs_in: 0.067858,
//       curs_out: "1",
//       res: "5710.58",
//       fee: "0",
//       min: "10",
//       max: "1000",
//     },
//   },
//   bestcours: 1,
//   time_up: "1676215687",
// };

const sendInput = document.querySelector( ".currency-field__input--send");
const getInput = document.querySelector(".currency-field__input--get");
const link = document.querySelector(".converter__link");
const titleGet = document.querySelector( ".converter-block__title--get");
const titleSend = document.querySelector(".converter-block__title--send");
const reverse = document.querySelector(".converter__btn-reverse");
const sendList = document.querySelector(".currency-field__list--send");
const getList = document.querySelector(".currency-field__list--get");

//имена - ссылки
const mapName = {
  P24UAH: { title: "Приват24", url: "privat24" },
  MONOBUAH: { title: "Монобанк", url: "monobuah" },
  CARDUAH: { title: "Visa/Mastercard", url: "carduah" },
  BTC: { title: "Bitcoin", url: "bitcoin" },
  ETH: { title: "Etherium", url: "etherium" },
  USDTERC20: { title: "USDT", url: "usdterc20" },
  USDTTRC20: { title: "TRC20 USDT", url: "usdttrc20" },
  TRX: { title: "TRON", url: "trx" },
};

let sendCurrent = "P24UAH"; //дефолтная валюта отправить
let getCurrent = "BTC";     //дефолтная валюта получить
let startSendSum = 2500;    //дефотное значение для P24UAH
let reversed = false; //для корректной работы калькулятора индикатор, была ли смена инпутов

renderRadioSelectGet();
renderRadioSelectSend();
resetStyle(
  [...sendList.querySelectorAll("label")],
  sendCurrent,
  "active"
);
resetStyle(
  [...getList.querySelectorAll("label")],
  getCurrent,
  "active"
);

const hiddenBtns = document.querySelectorAll(
  ".currency-field__hidden-btn"
);
hiddenBtns.forEach((btn) => {
  btn.onclick = (e) => {
    if (e.target.getAttribute("data-type") === "send") {
      const sendItemsList = document.querySelector(".currency-field__items--send");
      sendItemsList.classList.toggle("open");
      return;
    }
    const getItemsList = document.querySelector(
      ".currency-field__items--get"
    );
    getItemsList.classList.toggle("open");
  };
});

let readyForReverse = true;
reverse.addEventListener("click", () => {
  if(readyForReverse){
  readyForReverse = false;
  sendInput.value = +getInput.value;
  reversed = !reversed;
  [getCurrent, sendCurrent] = [sendCurrent, getCurrent];
  renderRadioSelectGet();
  renderRadioSelectSend();
  changeLink();
  changeTitle();
  readyForReverse = true
  return
  }
});

//функция рендера радио инпутов "отправить" после изменения в поле "Получить"
function renderRadioSelectSend() {
  const currencies = Object.keys(data).filter(curr => curr != getCurrent)
  sendList.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("currency-field__items");
  ul.classList.add("currency-field__items--send");
  currencies.forEach((curr, i) => {
    
    if (typeof data[curr] != "object") return;
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.innerHTML = `
      <span class="currency-field__item-title">${mapName[curr].title}</span>
    `;
    input.type = "radio";
    input.value = curr;
    input.name = "send-currency";
    input.id = `${curr.toLowerCase()}-send`;
    input.checked = curr === sendCurrent;
    input.disabled = !isAbleToExchange(curr)
    input.disabled ? label.classList.add('disabled') : null
    label.setAttribute("for", `${curr.toLowerCase()}-send`);
    label.classList.add("currency-field__item");
    label.setAttribute("value", curr);
    label.classList.add(
      `currency-field__item--${curr.toLowerCase()}`
    );
    if (curr == sendCurrent) {
      ul.prepend(label);
      label.classList.add("active");
    } else {
      ul.appendChild(label);
    }
    ul.appendChild(input);
  });
  sendList.appendChild(ul);
  listenGetRadio();
  listenSendRadio(); 
  setGetInput()


  function isAbleToExchange(curr){
    return Object.keys(data[curr]).some(target => +data[curr][target].res)
  }
}

//функция рендера радио инпутов "Получить" после изменения в поле "Отправить"
function renderRadioSelectGet() {
  if(!data[sendCurrent][getCurrent]){
    getCurrent = Object.keys(data[sendCurrent])[0];
    renderRadioSelectSend()
  }
  const currencies = data[sendCurrent];
  getList.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("currency-field__items");
  ul.classList.add("currency-field__items--get");
  Object.keys(currencies).forEach((curr, i) => {
    if (typeof currencies[curr] != "object") return;
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.innerHTML = `
      <p class="currency-field__item-title">${mapName[curr].title}</p>
    `;
    input.type = "radio";
    input.value = curr;
    input.name = "get-currency";
    input.disabled = !(+currencies[curr].res);
    input.id = `${curr.toLowerCase()}-get`;
    input.checked = curr === getCurrent;
    input.disabled ? label.classList.add('disabled') : null
    label.setAttribute("for", `${curr.toLowerCase()}-get`);
    label.setAttribute("value", curr);
    label.classList.add("currency-field__item");
    label.classList.add(
      `currency-field__item--${curr.toLowerCase()}`
    );
    if (curr == getCurrent) {
      ul.prepend(label);
      label.classList.add("active");
    } else {
      ul.appendChild(label);
    }
    ul.appendChild(input);
  });
  getList.appendChild(ul);
  listenSendRadio();
  listenGetRadio();
  
  setGetInput()
}

// смена значений ссылки
function changeLink() {
  link.innerText = `Обменять ${mapName[sendCurrent].title} на ${mapName[getCurrent].title}`;
  link.href = `https://bitcoin24.com.ua/${mapName[sendCurrent].url}-to-${mapName[getCurrent].url}`;
}

// смена значений заголовков
function changeTitle() {
  titleSend.innerText = `Отправить,  ${mapName[sendCurrent].title}`;
  titleGet.innerText = `Получить, ${mapName[getCurrent].title}`;
}

// сброс стилей в селектах после изменения выборы
function resetStyle(arr, target, selector) {
  arr.forEach((el) => {
    if (el.getAttribute("value") == target) {
      el.classList.add(selector);
    } else {
      el.classList.remove(selector);
    }
  });
}

function listenSendRadio() {
  let radioSend = sendList.querySelectorAll("input");
  [...radioSend].forEach((input) => {
    input.addEventListener("input", (e) => {
      sendCurrent = e.target.value;
      resetStyle(
        [...sendList.querySelectorAll("label")],
        sendCurrent,
        "active"
      );
      sendList.querySelector("ul").classList.remove("open");
      renderRadioSelectGet();
      changeLink();
      changeTitle();
    });
  });
}

function listenGetRadio() {
  let radioGet = getList.querySelectorAll("input");
  [...radioGet].forEach((input) => {
    input.addEventListener("input", (e) => {
      getCurrent = e.target.value;
      resetStyle(
        [...getList.querySelectorAll("label")],
        getCurrent,
        "active"
      );
      getList.querySelector("ul").classList.remove("open");
      renderRadioSelectSend();
      changeLink();
      changeTitle();
    });
  });
}

function setSendInput(){
  if(data[getCurrent][sendCurrent].curs_in > data[getCurrent][sendCurrent].curs_out){
    sendInput.value = +(getInput.value / data[getCurrent][sendCurrent].curs_in).toFixed(5); 
  }
  else{
    sendInput.value = +(getInput.value * data[sendCurrent][getCurrent].curs_in).toFixed(5); 
  }
}

function resetInputs(){
  sendInput.value = data[sendCurrent][getCurrent].curs_in;
  getInput.value = data[sendCurrent][getCurrent].curs_out;
}

function setGetInput(){
  if(data[sendCurrent][getCurrent].curs_in > data[sendCurrent][getCurrent].curs_out){
    getInput.value = +(sendInput.value / data[sendCurrent][getCurrent].curs_in).toFixed(5); 
  }
  else{
    getInput.value = +(sendInput.value * data[sendCurrent][getCurrent].curs_out).toFixed(5); 
  }
}

sendInput.addEventListener('input', (e) => {
  if(/[^0-9.]/.test(e.target.value.toString())){
    sendInput.classList.add('error')
    return
  }
  sendInput.classList.remove('error')
  setGetInput()
})

getInput.addEventListener('input', (e) => {
  if(/[^0-9.]/.test(e.target.value.toString())){
    getInput.classList.add('error')
    return
  }
  getInput.classList.remove('error')
  setSendInput()
})

sendInput.value = startSendSum;
setGetInput()
changeLink();
changeTitle();