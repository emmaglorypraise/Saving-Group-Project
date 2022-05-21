const form = document.querySelector('#signup');
const totalMoney = document.getElementById('totalGroupMoney');
let amount = document.getElementById('amount');
let small = document.getElementsByTagName('small');
const msg = document.getElementById("small");
let percent;

totalMoney.innerHTML = ' N0.00';
 
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

    // get name
    let name = form.elements["name"];
    let fullname = name.value;
    if (fullname.value == '' || fullname.length == 0){
        alert('Please input name')
    }
    console.log(fullname);

    // get tier
    let tier = document.getElementById('SelectTier');
    let tierSelected = tier.options[tier.selectedIndex].value; //gets value
    // var tierSelectedvalue = tier.options[tier.selectedIndex].text; //gets text
    console.log(tierSelected);

    // checks percentage
    if (tierSelected === 'tier 1') {
        percent = 0.07;
    } else if (tierSelected === 'tier 2') {
        percent = 0.12;
    } else if (tierSelected === 'tier 3') {
        percent = 0.25;
    } else {
        alert('Select a tier!')
    }

    // get current amount inputed
    newAmount = amount.value;
    if (newAmount == '' || newAmount.length == 0){
        alert('Please input your amount to save')
    }
    console.log(newAmount)
    let calAmount = percent * newAmount;
    calAmount = calAmount.toFixed(2);
    console.log(calAmount, "amount");

    // updates input
    totalMoney.innerHTML = newAmount;

    // prints percentage received
    msg.innerHTML = "You will get N" + calAmount + ' weekly';

});