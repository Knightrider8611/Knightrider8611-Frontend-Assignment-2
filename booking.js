function verifyNullValue(){
    let buyerName = document.getElementById("name").value;
    let buyerTel = document.getElementById("telnum").value;
    let check = true;
    if(buyerName === null || buyerName === ""){
        alert("Buyer's name cannot be a null value.");
        check = false;
    }
    if(buyerTel === null || buyerTel === ""){
        alert("Buyer's telephone number cannot be a null value.");
        check = false;
    }
    return check;
}
function verifyRange(min,max){
    let travellerCount = document.getElementById("members").value;
    let check = true;
    if(travellerCount === null || travellerCount < min || travellerCount > max){
        alert(`Number of travellers must be between ${min} and ${max}.`);
        check = false;
    }
    return check;
}
function verifyJoinLand(){
    let joinLand = document.getElementById("join_land");
    if(joinLand.checked){
        let confirmation = confirm("Are you sure that you want to buy tickets on your own?");
        if(confirmation === true){
            alert("You chose to buy tickets on your own.");
        }
    }
}
function verifyConfirmation(){
    verifyNullValue();
    verifyRange(1,15);
    verifyJoinLand();
}