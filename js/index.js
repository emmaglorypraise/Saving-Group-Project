const form = document.querySelector('#signup');
const totalMoney = document.getElementById('totalGroupMoney');
let amount = document.getElementById('amount');

totalMoney.innerHTML = ' N0.00';
 
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

    // get name
    let name = form.elements["name"];
    let fullname = name.value;
    console.log(fullname);

    // get tier
    let tier = document.getElementById('SelectTier');
    let tierSelected = tier.options[tier.selectedIndex].value; //gets value
    var tierSelectedvalue = tier.options[tier.selectedIndex].text; //gets text
    console.log(tierSelected);

    const msg = document.getElementById("small");
	let percent;

    if (tierSelected === 'tier 1') {
        percent = 0.07;
        msg.innerHTML = "You will get N" + percent + ' weekly';
    } else if (tierSelected === 'tier 2') {
        percent = 0.12;
        
        // msg.innerHTML = "You will get a percentage of 12%";
    } else if (tierSelected === 'tier 3') {
        percent = 0.25;
        msg.innerHTML = "You will get N" + percent + ' weekly';
        // msg.innerHTML = "You will get a percentage of 24%";
    } else {
        alert('Select a tier!')
    }

    // get current amount inputed
    newAmount = amount.value;
    console.log(newAmount)
    let calAmount = percent * newAmount;
    console.log(calAmount, "amount")
    msg.innerHTML = "You will get N" + calAmount + ' weekly';

});