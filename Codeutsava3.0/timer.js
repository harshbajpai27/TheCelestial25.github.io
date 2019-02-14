const start = new Date(Date.UTC(2019, 1, 16, 0, 0, 0));
const elem = document.getElementById('count');

function count() {
  const now = new Date();
  let diff = ~~((start - now)/1000),
      days = ~~(diff/86400),
      hours = ~~((diff - days * 86400)/3600),
      minutes = ~~((diff - days * 86400 - hours * 3600)/60),
      seconds = diff - days * 86400 - hours * 3600 - minutes * 60;
  let dw = (days == 1) ? "day" : "days";
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  let b = `${days} ${dw}\n ${hours} : ${minutes} : ${seconds}`;
  elem.innerText = b;
};

setInterval(count, 1000);
