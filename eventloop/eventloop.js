let lastTime = new Date().getTime();

function printTimePassed() {
  const now = new Date().getTime();
  console.log(now - lastTime);
  lastTime = now;
}

function spendTime() {
  const dummy = [];
  for(let i = 0; i < 10000000; i++) {
    dummy.push(new Object());
  }
}

setTimeout(printTimePassed, 1000);
spendTime();