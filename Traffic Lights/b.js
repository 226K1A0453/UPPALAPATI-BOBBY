const red = document.querySelector('.s5');
  const yellow = document.querySelector('.s6');
  const green = document.querySelector('.s7');

  const stopBtn = document.querySelector('.s1');
  const readyBtn = document.querySelector('.s2');
  const goBtn = document.querySelector('.s3');

  function reset() {
    red.style.backgroundColor = 'rgba(37, 37, 43, 1)';
    yellow.style.backgroundColor = 'rgb(43, 37, 37)';
    green.style.backgroundColor = 'rgb(43, 37, 37)';
  }

  stopBtn.onclick = function () {
    reset();
    red.style.backgroundColor = 'red';
  }

  readyBtn.onclick = function () {
    reset();
    yellow.style.backgroundColor = 'yellow';
  }

  goBtn.onclick = function () {
    reset();
    green.style.backgroundColor = 'green';
  }