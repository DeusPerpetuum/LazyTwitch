let collected = 0;
let counter = document.createElement("p");

setInterval(() => {
  let button = document.querySelector('button.ScCoreButtonSuccess-sc-ocjdkq-5');
  if (!button) return;
  collected += 1;
  button.click();
  if(!document.querySelector('.collectedcounter')) {
    counter.classList.add("collectedcounter");
    document.querySelector('.community-points-summary').appendChild(counter);
    counter.innerText = `(${collected})`;
  } else {
    counter.innerText = `(${collected})`;
  }
}, 5000);