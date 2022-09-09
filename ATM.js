let input = require('readline-sync')



// welcome in ATM and ask for insert card
console.log('WELCOME TO SBI ATM________:\nplease insert your card_____:');

// insert card 
let InSert = input.question('If Card inserted press (y/n)____: ');
if (InSert == 'y') {
    var Card_pin = 12345
    let Balance = 10000
    console.log('Card inserted successfully !!!!\nenter your pin____: ');
    let Chance = 3;
    while (Chance != 0) {
        let pin = input.question('____________:')
        if (pin == Card_pin) {
            console.log('pin is correct  !!!!');
            use = 1
            while (use != 0) {
                console.log('press 1 for balance enquiry\npress 2 for withdraw\npress 3 for deposite\npress 4 for pin change\npress 0 for exsite')
                let clinde = input.question('______')

                // for exsite the loops
                if (clinde == '0') {
                    use -= 1
                    Chance = 0
                }

                // for balance enquire
                else if (clinde == '1') {
                    console.log(Balance);
                }

                else if (clinde == '2') {
                    let With = parseInt(input.question('enter your amount________: '))
                    if (With <= Balance) {
                        console.log('please wait few minutes\nwithdraw succesfull !!!\nyour current account balnce : ', Balance - With);
                    }
                    else {
                        console.log("your enterted amount is out of range !!!!");
                    }
                }
                else if (clinde == '3') {
                    let Deposite = parseInt(input.question("enter amount______: "))
                    console.log('wait !!!!!!!\nyour current amount::', Balance + Deposite);
                }
                else if (clinde == '4') {
                    let _old_pin = input.question("enter old pin ____: ")
                    if (_old_pin == Card_pin) {
                        let change_pin = input.question("enter new pin_____: ")
                        let conform_pin = input.question('enter again___: ')
                        if (change_pin == conform_pin) {
                            Card_pin = change_pin
                            console.log("pin change successful");
                        }
                        else {
                            console.log("you enter wrong pin !!!!");
                        }
                    }
                    else {
                        console.log("you enter wrong pin");
                    }
                }
            }
        }
        else {
            Chance -= 1
            if (Chance != 0) {
                console.log("incorrect pin\nyou have left chance is ", Chance);
            }
            else {
                console.log('your card is blocked !!!!');
            }
        }
    }
    console.log("thanks for use me_!!!!!");
}




