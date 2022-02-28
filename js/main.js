function adviceSlip() {

  var url = `https://api.adviceslip.com/advice`;

  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {

      let displayID = document.getElementsByClassName('advice__id');
      let displayText = document.getElementsByClassName('advice__quote');
 
      /* created variables to store the data from the api */
      let slipId = data["slip"]["id"];
      let advice = data["slip"]["advice"];

      console.log(slipId);
      console.log(advice);

      displayID.innerHTML = `Advice ID #${slipId}`;
      displayText.innerHTML = advice;

    });

  //error text is thrown if the data fetched cannot be retrieved
};

window.addEventListener('onload', adviceSlip());