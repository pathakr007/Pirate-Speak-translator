var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output-div");

var url = "https://api.funtranslations.com/translate/pirate.json";

function constructUrl (text)
{
    newUrl = url + "?" + "text=" + text;
    return newUrl;

}

function errorHandler(error) {
    console.log("Error" + error);
}

function clickHandler() {
    var textinput = txtInput.value;

    fetch(constructUrl(textinput))
        .then (response => response.json())
        .then (json=> {txtOutput.innerText=json.contents.translated
        }).catch (errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);