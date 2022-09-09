const ask = require('readline-sync')
let d = {
    'ck@gmail.com': {
        UserName: 'ck surya',
        Mobile: '7319640608',
        Password: 'ck@123'

    }
};



let singup = () => {
    function emailcheck() {
        var email = ask.question("enter yoour email___: ")
        if (email.includes('@gmail.com')) {
            function checkMobile_no() {
                mo = ask.question('enter your mobile number____:')
                if (mo.length === 10) {
                    d[email] = {
                        UserName: ask.question('enter your Name____:'),
                        Mobile: mo,
                        Password: ask.question('enter your password____:')
                    }
                    console.log('your registration successful......\n');
                } else {
                    console.log('your Mobile number length is not correct enter 10 digits phone number');
                    checkMobile_no()
                }
            }
            checkMobile_no()
        } else {
            console.log(`your email is worng enter something like this cksurya@gmail.com`);
            emailcheck()
        }
    }
    emailcheck()
}
let login = () => {
    function checkEmail() {
        let Email = ask.question('Enter user Email ___: ')
        if (Email.includes('@gmail.com')) {
            if (Email in d) {
                function checkPass() {
                    let Pas_word = ask.question('Enter User password___:')
                    if (Pas_word === d[Email]['Password']) {
                        for (const k in d) {
                            console.log(d[k]);
                        }

                        console.log('login successfull !!!!');
                    } else {
                        console.log(`your password is wrong`);
                        checkEmail()
                    }
                }
                checkPass()
            } else {
                console.log(`you data doesn't found try another email`);
                checkEmail()
            }
        } else {
            console.log(`your Email is not valid Enter valid Email`);
            checkEmail()
        }
    }
    checkEmail()
}

let update = () => {
    function checkEmail() {
        let Email = ask.question('Enter user Email ___: ')
        if (Email.includes('@gmail.com')) {
            if (Email in d) {
                function checkPass() {
                    let Pas_word = ask.question('Enter User password___:')
                    if (Pas_word === d[Email]['Password']) {
                        console.log(`Email of user is ${Email}`);
                        console.log('login successfull !!!!');
                        function conform_update() {
                            let conf = ask.question('press 0 for exist\nwhat you want to update Email / phone Number/username/password__:').toLowerCase()
                            if (conf === 'email') {
                                function check_new_email() {
                                    d1 = {}
                                    let New_email = ask.question("Enter your new Email___: ")
                                    if (New_email in d) {
                                        console.log('sorry boss This Email already taken ');
                                        check_new_email()
                                    } else {
                                        d1[New_email] = d[Email]
                                        d = d1
                                        console.log(d);
                                        console.log('successfull update');
                                        for (const k in d) {
                                            console.log(d[k]);
                                        }

                                        conform_update()
                                    }
                                }
                                check_new_email()
                            } else if (conf === 'phone number') {
                                function check_ph_ln() {
                                    let new_number = ask.question("enter New Number___:")
                                    if (new_number.length === 10) {
                                        d[Email][Mobile] = new_number
                                        console.log('update successfull.....');
                                        for (const k in d) {
                                            console.log(d[k]);
                                        }

                                    } else {
                                        console.log('your phone number length is not perfect Enter 10 digits number...');
                                        check_ph_ln()
                                    }
                                }
                                check_ph_ln()
                            } else if (conf === 'username') {
                                new_userName = ask.question('Enter new userName_____:')
                                d[Email].UserName = new_userName
                                for (const k in d) {
                                    console.log(d[k]);
                                }

                            } else if (conf === 'password') {
                                function ck_ps() {
                                    let old_pas = ask.question("Enter your old password____: ")
                                    if (old_pas === d[Email].Password) {
                                        function conf_password() {
                                            let new_ps = ask.question('Enter your new Password____: ')
                                            let co_new_ps = ask.question('Enter again your New Password___:')
                                            if (new_ps === co_new_ps) {
                                                d[Email].Password = new_ps
                                                console.log('passwrod updated successfull.....');
                                                for (const k in d) {
                                                    console.log(d[k]);
                                                }


                                            }

                                        }
                                        conf_password()
                                    }
                                }
                                ck_ps()
                            } else {
                                return 1
                            }
                        }
                        conform_update()
                    } else {
                        console.log(`your password is wrong`);
                        checkEmail()
                    }
                }
                checkPass()
            } else {
                console.log(`you data doesn't found try another email`);
                checkEmail()
            }
        } else {
            console.log(`your Email is not valid Enter valid Email`);
            checkEmail()
        }
    }
    checkEmail()

}
let delete1 = () => {
    function checkEmail() {
        let Email = ask.question('Enter user Email ___: ')
        if (Email.includes('@gmail.com')) {
            if (Email in d) {
                function checkPass() {
                    let Pas_word = ask.question('Enter User password___:')
                    if (Pas_word === d[Email]['Password']) {
                        delete d.Email
                        console.log('delete successfull !!!!');
                    } else {
                        console.log(`your password is wrong`);
                        checkEmail()
                    }
                }
                checkPass()
            } else {
                console.log(`you data doesn't found try another email`);
                checkEmail()
            }
        } else {
            console.log(`your Email is not valid Enter valid Email`);
            checkEmail()
        }
    }
    checkEmail()

}
while (true) {
    console.log('press 1 for singup\n\npress 2 for login\n\npress 3 for update\n\npress 4 for delete\n\npress 5 for exist\n');
    let command = ask.question('choice one____: ')
    if (command == 1) {
        singup()
    } else if (command == 2) {
        login()
    } else if (command == 3) {
        update()
    } else if (command == 4) {
        delete1()
    } else if (command == 5) {
        console.log(d);
        break
    }
}


