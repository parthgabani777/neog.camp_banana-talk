const button = document.querySelector('#btn');
const plain = document.querySelector('#plain');
const banana = document.querySelector('#banana');

let url = 'https://api.funtranslations.com/translate/minion.json';

function clickEventHandler(){
      let txt = plain.value;
      
      url = url + "?text=" + encodeURI(txt);
      console.log(url);
      fetch(url).then(res=>res.json())
      .then((data)=>{
            banana.value = data["contents"]["translated"];
      })
      .catch((e)=>console.log("Error occured"+ e))
}