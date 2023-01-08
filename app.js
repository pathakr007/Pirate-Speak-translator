var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("btn-translate");
var outputDiv = document.querySelector("#output-div");

var url = "https://api.funtranslations.com/translate/pirate.json";

function constructUrl (text)
{
    newUrl = url + "?" + "text=" + text;
    return input;

}

function errorHandler(error) {
    console.log("Error" + error);
}

function clickHandler() {
    var textinput = txtInput.value;

    fetch(constructUrl(textinput))
        .then (response => response.json())
        .then (json=> {txtoutput.innerText=json.contents.translated
        }).catch (errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);