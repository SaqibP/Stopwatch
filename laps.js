window.onload = function () {
  const min = document.getElementById('min');
  const tens = document.getElementById('tens');
  const sec = document.getElementById('sec');

  //   console.log(min, tens, sec);

  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');
  const lapsBtn = document.getElementById('laps-btn');
  const resetBtn = document.getElementById('reset-btn');

  //   console.log(startBtn, stopBtn, lapsBtn, resetBtn);

  let minSet = 00;
  let secSet = 00;
  let tensSet = 00;
  let interval;

  // Start Button

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  // Stop Button

  stopBtn.onclick = function () {
    clearInterval(interval);
  };

  //    Laps botton

  lapsBtn.onclick = function () {
    const laps = document.getElementById('laps');
    const li = document.createElement('li');
    li.innerHTML = `Lap: <span> ${min.innerHTML}:${sec.innerHTML}:${tens.innerHTML}</span>`;

    laps.appendChild(li);
  };

  //  Reset Button

  resetBtn.onclick = function () {
    // clearInterval(interval);

    minSet = '00';
    secSet = '00';
    tensSet = '00';
    min.innerHTML = minSet;
    sec.innerHTML = secSet;
    tens.innerHTML = tensSet;

    document.getElementById('laps').innerHTML = '';
  };

  //   Create Start Timer Function

  function startTimer() {
    tensSet++;
    if (tensSet < 9) {
      tens.innerHTML = '0' + tensSet;
    }

    if (tensSet > 9) {
      tens.innerHTML = tensSet;
    }

    if (tensSet > 99) {
      secSet++;
      sec.innerHTML = '0' + secSet;
      tensSet = 0;
      tens.innerHTML = '0' + 0;
    }

    if (secSet > 9) {
      sec.innerHTML = secSet;
    }

    if (secSet === 60) {
      minSet++;
      min.innerHTML = '0' + minSet;
      secSet = 0;
    }

    if (minSet > 9) {
      min.innerHTML = minSet;
    }
  }


};
