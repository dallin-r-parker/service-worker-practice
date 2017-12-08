if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
        .then(registered => console.log('I was just registered: ', registered))
        .catch(err => console.log('something went wrong: ', err))
}

const base_url = 'https://swapi.co/api/people';
// event listeners =======================
const btnInc = document.querySelector('#btn-inc');
const btnReq = document.querySelector('#btn-request');
let count = document.getElementsByTagName('span')[0];
let value = 0

btnInc.addEventListener('click', handleInc)
btnReq.addEventListener('click', handleReq);

function handleInc(evt){
    value++
    let incHTML = count.innerHTML.replace(/a*\d/g, value);
    return count.innerHTML = incHTML
}

function handleReq(evt) {
    fetch(base_url)
        .then(res =>  (res.body))
        .then(data => {
            let parsed = data.getReader()
            parsed.read().then(res => {
                const {value} = res;
                console.log('value: ', value);
            })
        })
        .catch(err => console.log('err: ', err))
    
}


// fetch(`${base_url}/3`)