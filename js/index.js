const form = document.querySelector('#signup');
const totalMoney = document.getElementById('totalGroupMoney');
let amount = document.getElementById('amount');
let small = document.getElementsByTagName('small');
const msg = document.getElementById("small");
let list = document.getElementById('list');
let ridersList = [];
let percent;
let calAmount;

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

    // get selected tier
    let tier = document.getElementById('SelectTier');
    let tierSelected = tier.options[tier.selectedIndex].value; //gets value

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

    // get amount inputed and checks if it matches the tier  
    newAmount = amount.value;

    if (newAmount == '' || newAmount.length == 0){
        alert('Please input your amount to save')
    } else if (tierSelected === 'tier 1') {
        if (newAmount < 1000 || newAmount > 10000) {
        alert("Amount must be greater than 1000 and not more than 10000");
        msg.innerHTML = "Please try registering again";
        location.reload()
       } else {
            alert('Good to go...');
            calAmount = percent * newAmount;
            calAmount = calAmount.toFixed(2);

            // updates total money value
            totalMoney.innerHTML = newAmount;

            // shows percentage received
            msg.innerHTML = "You will get N" + calAmount + ' weekly';

            // pushes new rider into array of riders
            ridersList.push(fullname) 
            list.innerHTML = ridersList;
       }
    } else if (tierSelected === 'tier 2') {
        if (newAmount < 20000 || newAmount > 30000) {
        alert("Amount must be greater than 20000 and not more than 30000");
        msg.innerHTML = "Please try registering again";
        location.reload()
       } else {
            alert('Good to go...');
            calAmount = percent * newAmount;
            calAmount = calAmount.toFixed(2);

            // updates total money value
            totalMoney.innerHTML = newAmount;

            // shows percentage received
            msg.innerHTML = "You will get N" + calAmount + ' weekly';

            // pushes new rider into array of riders
            ridersList.push(fullname) 
            list.innerHTML = ridersList;
   }
    } else if (tierSelected === 'tier 3') {
        if (newAmount < 30000) {
        alert("Amount must be greater than 30000")
        msg.innerHTML = "Please try registering again";
        location.reload()
       } else {
            alert('Good to go...');
            calAmount = percent * newAmount;
            calAmount = calAmount.toFixed(2);

            // updates total money value
            totalMoney.innerHTML = newAmount;

            // shows percentage received
            msg.innerHTML = "You will get N" + calAmount + ' weekly';

            // pushes new rider into array of riders
            ridersList.push(fullname) 
            list.innerHTML = ridersList;
   }
    } else {
        alert('Something is wrong, please try again');
        location.reload()

    }
    

    


});