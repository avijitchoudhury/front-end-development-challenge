import _ from 'lodash';

function component() {
  const element = document.createElement('div');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

function fetchData1 () {
  fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=JQ1LE8WZCWJRAMXL_').then(response => {
  if(!response.ok) {
    throw Error("ERROR")
  }
  return response.json();
  }).then(data => {
    let payload = Object.values(data);
    let objPayload = Object.values(payload[0]);
  
    for(let i = 0; i < objPayload.length; i++) {
      if (objPayload[8] > 0) {
        return document.querySelector('#app1').insertAdjacentHTML("afterbegin", `GOOGLeeeeee Current Price: ${Math.floor(objPayload[4] * 100) / 100} Stock up by: +${Math.floor(objPayload[8] * 100) / 100}%`) 
      } else {
        return document.querySelector('#app1').insertAdjacentHTML("afterbegin", `GOOGL Current Price: ${Math.floor(objPayload[4] * 100) / 100} Stock down by: ${Math.floor(objPayload[8] * 100) / 100}%`) 
      }
    }
  }).catch(error => {
    console.log(error)
  });
}

function fetchData2() {
  fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=JQ1LE8WZCWJRAMXL_').then(response => {
    if (!response.ok) {
      throw Error("ERROR")
    }
    return response.json();
  }).then(data => {
    let payload = Object.values(data);
    let objPayload = Object.values(payload[0]);

    for (let i = 0; i < objPayload.length; i++) {
      if (objPayload[8] > 0) {
        return document.querySelector('#app2').insertAdjacentHTML("afterbegin", `MSFT Current Price: ${Math.floor(objPayload[4] * 100) / 100} Stock up by: +${Math.floor(objPayload[8] * 100) / 100}%`)
      } else {
        return document.querySelector('#app2').insertAdjacentHTML("afterbegin", `MSFT Current Price: ${Math.floor(objPayload[4] * 100) / 100} Stock down by: ${Math.floor(objPayload[8] * 100) / 100}%`)
      }
    }
  }).catch(error => {
    console.log(error)
  });
}


function fetchData3() {
  fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BTCUSD&apikey=JQ1LE8WZCWJRAMXL_').then(response => {
    if (!response.ok) {
      throw Error("ERROR")
    }
    return response.json();
  }).then(data => {
    let payload = Object.values(data);
    let objPayload = Object.values(payload[0]);

    for (let i = 0; i < objPayload.length; i++) {
      if (objPayload[8] > 0) {
        return document.querySelector('#app3').insertAdjacentHTML("afterbegin", `BTCUSD Current Price: ${Math.floor(objPayload[4] * 100) / 100} Stock up by: +${Math.floor(objPayload[8] * 100) / 100}%`)
      } else {
        return document.querySelector('#app3').insertAdjacentHTML("afterbegin", `BTCUSD Current Price: ${Math.floor(objPayload[4] * 100) / 100} Stock down by: ${Math.floor(objPayload[8] * 100) / 100}%`)
      }
    }
  }).catch(error => {
    console.log(error)
  });
}

fetchData1();
fetchData2();
fetchData3();