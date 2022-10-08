
export function replaceNbsps(str) {
    var re = new RegExp(String.fromCharCode(160), "g");
    return str.replace(re, " ");
  }
  
  export function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }


  export default function dateToDDmmYYYY(str) {
    var pattern = /(\d{4})-(\d{2})-(\d{2})(T)(\d{2}:\d{2}:\d{2})+/g
    return  str.replace(pattern, '$3.$2.$1')


  }
