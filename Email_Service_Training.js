//alert("This is an alarm!");

let form;
document.addEventListener("DOMContentLoaded", function() {
    form = document.getElementById("form1");
})

let tableEntryNr = 1;

function validateFormFunction(){
    const isValid = form.checkValidity();
    form.reportValidity();
    return isValid;
}

function confirmButtonFunction(){
    if (validateFormFunction()){
        var table = document.getElementById("table_id");
        var row = table.insertRow(tableEntryNr+2);
        
        var cell =  row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        
        cell.innerHTML  = tableEntryNr;
        cell1.innerHTML = document.getElementById("sender").value;
        cell2.innerHTML = document.getElementById("receiver").value;
        cell3.innerHTML = document.getElementById("cc").value;
        cell4.innerHTML = document.getElementById("bcc").value;
        cell5.innerHTML = document.getElementById("subject").value;
        cell6.innerHTML = document.getElementById("message").value;
        cell7.innerHTML = document.getElementById("attachment").value;
        tableEntryNr = tableEntryNr+1;
        return tableEntryNr; 
    }
    else console.log("Inputfiels are not valid! Table not created!");
    return false;
}
