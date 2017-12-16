var keyList="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var temp='';
function generatePass(plength){
    temp='';
  var i;  
    for(i=0;i<plength;i++){
        temp+=keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return temp;
}

function populateform(enterlength){
     document.passGen.output.value=generatePass(enterlength);
}