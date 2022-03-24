let displayId = document.getElementById('advice__id_text');
let displayQuote = document.getElementById('advice__quote_text');
let displayChangeBtn = document.getElementById('advice__dice');

function adviceSlip() {

  var url = `https://api.adviceslip.com/advice`;

  fetch(url)
    .then(response => {
      return response.json();
    })

    .then(data => {
      /* created variables to store the data from the api */
      let slipId = data.slip.id;
      let slipAdvice = data.slip.advice;

      console.log(slipId);
      console.log(slipAdvice);

      displayId.textContent = `Advice #${slipId}`;
      displayQuote.textContent = `${slipAdvice}`;


    })

  //error text is thrown if the data fetched cannot be retrieved
  .catch(err => alert("Something not good happened"));
};

window.onload = adviceSlip();

displayChangeBtn.addEventListener('click', () => {
        adviceSlip()
    })
