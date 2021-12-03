
let btnTranslate = document.querySelector('#btn-translate');
btnTranslate.addEventListener('click',translate);
let inputText = document.querySelector('#input-textarea');
let outputText = document.querySelector('#output-text');


function getTranslationUrl(text){
    // let url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
    let url = 'https://api.funtranslations.com/translate/yoda.json'
    return url + '?text=' + text;
}

function errorHandler(error){
    alert('Something went wrong at the server. Try later.')
}


function translate(){
    let url = getTranslationUrl(inputText.value);
    btnTranslate.disabled = true;
    fetch(url)
    .then(response => response.json())
    .then((json) => {
        outputText.innerText = json.contents.translated;
    })
    .catch(errorHandler);
    btnTranslate.disabled = false;
}