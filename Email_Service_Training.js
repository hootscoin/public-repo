alert("This is an alarm!");
/*
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form1");
// VARIABLE DECLARATIONS
const form = document.getElementById("form1");
var testInputValueSaved = "wrong";
*/


// FUNKTIONS
function validateFormFunction(){
    const isValid = form.checkValidity();

    if(isValid){
        //liest werte aus und setzt sie als neue Variablen (sender,reseiver,cc,bcc,subject,message,attachment)
        const sender = form["sender"].value;
        const reciever = form["reciever"].value;

        alert("Sender: "+sender+"\nReciever: "+reciever);
    }

    return isValid;
}



function saveInputValueFunktion (inputValue){
testInputValueSaved = document.getElementById(inputValue).value;
alert("saveInputValueFunktion called!");
};


function testButtonFunction() {
alert("test");
saveInputValueFunktion(document.getElementById("sender".value));
alert(`The Value is ${55}`)
}


/*
!!!!!!!  OLD   !!!!!!!!!!:




// Nimmt einen Satz und ein Symbol und sagt im Log wie oft das Symbol im Satz ist.
// Wenn ein Symbol öfter als 1 mal drin ist gibt es ture aus. 
function countCharInString (inputString,targetChar){
let count = 0;
let index = inputString.indexOf(targetChar);

while (index !== -1) {
count++;
index = inputString.indexOf(targetChar, index + 1);
}
//console.log(`You have ${count} @ smybols.`);
if (count > 1){
//console.log("You have to many @ Symbols!");
return true;
}
else return false;
}



// Überprüft of Sender und Empfänger Email ausgefüllt wurden. Entweder Anhang oder Nachricht
// müssen Enthalten sein. Gibt true wieder wenn alle Pflichfelder ausgefüllt sind sonst false.
function validateRequiredInputs (senderEmail,receiverEmail,anhang,emailMessage){
if (!senderEmail){
    console.log("Email-Sender missing!")
    return false;
}
else if (!receiverEmail){
    console.log("Email-Recerver missing!")
    return false;
}
else if (!(anhang || emailMessage))
{
    console.log("Message or Attachment required!")
    return false;
}
else 
console.log("Valide Requirements!");  
return true;
}



// Nimmt eine Email und überprüft ob @ da ist oder zu oft genutzt wurde. Am Anfang oder Ende
// steht, Die Email Spaces hat. Gibt true zurück wenn alles stimmt.
function validateEmailSyntax (emailName) {
// Überprüft ob Leerzeichen enthalten sind. Falls ja -> keine erlaubte Email-Adresse
if (emailName.length === 0){
    console.log("You entered a empty Email!");
    return false;
}
// Überprüft ob Leerzeichen drin sind. Falls ja -> keine erlaubte Email-Adresse
else if (emailName.includes(" ")===true) {
    console.log ("Your Email contains Spaces!");
    return false;
}
// Überprüft ob @ vorhanden ist. Falls nicht -> keine erlaubte Email-Adresse
else if (emailName.includes("@")===false){
    console.log("Your Email has no @ Symbol!");
    return false;
}
// Überprüft ob @ das erste oder letzte Symbol ist -> keine erlaubte Email-Adresse
else if (emailName.indexOf("@")===0 || emailName.endsWith("@")){
    console.log("Your @ Symbol is the first or last Symbol");
    return false;
}
// Überprüft ob man zuviele @ Symbole hat. Falls ja -> keine erlaubte Email-Adresse
else if (countCharInString(emailName,"@")){
     console.log("You have to many @ Symbols");
     return false;
}
else console.log("The Email is valid!"); return true;
}



function emailCheck(){
if (validateEmailSyntax(document.getElementById("sender").value)){
   alert("You succesfully wrote a proper email-adress!");

}
}



function validateIPaddress(ipaddress) 
{
if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
{
return (true)
}
console.log("You have entered an invalid IP address!");
return (false)
}

}

*/
/*
OLD TEST VALUES
let senderEmail = "fridean64@gmail.com";
let testSenderIpAdress = "192.168.0.1";
let receiverEmail = "erikesins@gmail.com";
let anhang = "BilderLink:efsegsgdgrh";
let emailMessage = "this is my Email Message!";
*/

//FUNCTION TESTING
//validateIPaddress(testSenderIpAdress);
//validateEmailSyntax(senderEmail);
//countCharInString(senderEmail,"@");
//validateRequiredInputs (senderEmail,receiverEmail,anhang,emailMessage);
//buttonPressedFunCtion();


























