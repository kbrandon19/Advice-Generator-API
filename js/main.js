//initializing the variables and getting the DOM

let adviceChange = document.getElementsByClassName('advice__dice-image');


//this function retrieves the data from the api and then stores the data to be used and displayed in another function



function adviceSlip(){

    /*  assigning the api link */
    var url = `https://api.adviceslip.com/advice`;

    fetch(url)
    .then(response =>{
        return response.json();
    })

    .then( data =>{

        let adviceId = document.getElementsByClassName('.advice__text');
        let adviceQuote = document.getElementsByClassName('advice__quote');

        /* created variables to store the data from the api */
        let slipId = data['slip']['id'];
        let advice = data['slip']['advice'];

        //conecting the api variables to the dom

        
        // adviceQuote.textContent = advice;

        console.log(slipId);
       

        
    })
      //error text is thrown if the data fetched cannot be retrieved


}

document.onload=adviceSlip();


