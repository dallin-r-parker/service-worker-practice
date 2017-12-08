const base_url = 'https://swapi.co/api/people';
// event listeners =======================
const btnInc = document.querySelector('#btn-inc');
const btnReq = document.querySelector('#btn-request');

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
        .then(registered => console.log('I was just registered: ', registered))
        .catch(err => console.log('something went wrong: ', err))
}


// fetch(`${base_url}/3`)