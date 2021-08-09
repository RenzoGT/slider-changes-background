function getEl(elementTag, index) {
  return document.getElementsByTagName( elementTag )[ index ];
}

const main = getEl("main", 0);
const firstInput = getEl( "input", 0 );
const secondInput = getEl( "input", 1 );
const thirdInput = getEl( "input", 2 );
const firstSpan = getEl( "span", 0 );
const secondSpan = getEl( "span", 1 );
const thirdSpan = getEl( "span", 2 );
const rgbSpan = getEl( "span", 3 );
const hexSpan = getEl( "span", 4 );

function inputSpan(inputs, spans) {
  let inputValue = inputs.value;
  spans.innerText = inputValue;
}

function convertHex(color) {
  let hex = parseInt(color).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function changes() {
  inputSpan(firstInput, firstSpan);
  inputSpan(secondInput, secondSpan);
  inputSpan(thirdInput, thirdSpan);

  let rgb = `rgb(${firstInput.value}, ${secondInput.value}, ${thirdInput.value})`;
  let hexText = convertHex(firstInput.value) + convertHex(secondInput.value) + convertHex(thirdInput.value);
  main.style.backgroundColor = rgb;
  rgbSpan.innerText = rgb;
  hexSpan.innerText = `#${hexText}`;
};

[ firstInput, secondInput, thirdInput ].forEach(el => el.addEventListener("input", changes));