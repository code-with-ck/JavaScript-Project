const ask = require('readline-sync')

let Questions = [':The International Literacy Day is observed on ?',
    ': The language of Lakshadweep. a Union Territory of India, is ?',
    ':In which group of places the Kumbha Mela is held every twelve years?',
    ':Bahubali festival is related to',
    ':Which day is observed as the World Standards  Day?',
    ':Which of the following was the theme of the World Red Cross and Red Crescent Day?',
    ':September 27 is celebrated every year as ?',
    ':Who is the author of Manas Ka-Hans ?',
    ':The death anniversary of which of the following leaders is observed as Martyrs Day ?',
    ':Who is the author of the epic Meghdoot"?']


let options = [['1.Sep 8 ', '2.Nov 28  ', '3.May 2 ', '4.Sep 22 ', ' '],
['1. Tamil', '2.Hindi', '3.Malayalam', '4.Telugu ', ' '],
['1.Ujjain.Purl.Prayag.Haridwar', '2.Prayag.Haridwar,Ujjain,Nasik     ', '3.Rameshwaram. Purl, Badrinath. Dwarika   ', '4.Chittakoot,Ujjain,Prayag,Haridwar', ' ', ' '],
['1.Islam ', '2.Hinduism     ', '3.Buddhism    ', '4.Jainism ', ' '],
['1,June 26 ', '2,Oct 14    ', '3,Nov 15    ', '4,Dec 2  ', ' '],
['1,Dignity for all-focus on women ', '2,Dignity for all-focus on Children', '3,Focus on health for all ', '4,Nourishment for all-focus on children ', ' '],
["1,Teachers' Day ", "2,National Integration Day  ", "3,World Tourism Day    ", "4,International Literacy Day  ", " "],
[" 1,Khushwant Singh ", " 2,Prem Chand    ", " 3,Jayashankar Prasad    ", " 4,Amrit Lal Nagar   ", " "],
["1,Smt. Indira Gandhi  ", "2,PI. Jawaharlal Nehru  ", "3,Mahatma Gandhi  ", "4,Lal Bahadur Shastri   ", " "],
["1,Vishakadatta    ", "2,Valmiki    ", "3,Banabhatta    ", "4,Kalidas   ", "  "]]

let helpline_options = [['1.Sep 8 ', '2.Nov 28 ',], ['1.Telugu  ', '3.Malayalam'],
['1.Ujjain.Purl.Prayag. Haridwar', '2.Prayag.Haridwar,Ujjain,Nasik'],
['4.Jainism ', '2,Hinduism'], ['1,June 26', '2,Oct 14'],
['1,Dignity for all-focus on Children ', '2.Dignity for all - focus on women'],
["1,Teachers' Day  ", "3,World Tourism Day"],
["4,Amrit Lal Nagar   ", "2,Khushwant Singh"], ["1,Smt. Indira Gandhi  ", "3,Mahatma Gandhi"],
["1,Banabhatta ", "4,Kalidas"]]

let answers = [1, 3, 2, 4, 2, 2, 3, 4, 3, 4]

let a_i = 0
let amount = [1000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 9000]
let win_a = 0

help_count = 1
helpline = [') 50:50', ') phone call', ') skip', ') audience poll']


for (let i = 0; i < Questions.length; i++) {
    console.log(Questions[i]);
    for (let op of options[i]) {
        console.log(op);
    }
    user_ans = parseInt(ask.question('choose the correct answer______:\npress 5 for helpline______: '))
    if (user_ans === answers[i]) {
        console.log('congratulation');
        win_a += amount[a_i]
        a_i += 1
    } else if (user_ans === 5) {
        if (help_count === 0) {
            console.log('you do not have chance ');
            console.log('you lose the game !!! \ngame over !!!');
            break;
        } else {
            console.log('You  have only one chance for the option');
            let z = 1
            for (let hp_op of helpline) {
                console.log(`${z} ${hp_op}`);
                z++;
            }
            let user_sl_hp_option = ask.question('choose anyone_____: ');
            if (user_sl_hp_option == 1) {
                for (let H_op of helpline_options[i]) {
                    console.log(H_op);
                }
                let h_l_op = ask.question('choose your answer____:')
                if (h_l_op == answers[i]) {
                    console.log('your answer is correct\nyou win !!!!');
                    win_a += amount[a_i]
                    a_i += 1
                } else {
                    console.log('you lose the game !!! \ngame over !!!');
                    break;
                }
            } else if (user_sl_hp_option == 2) {
                console.log("Whom you want to call\npress 1 for call mom\npress 2 for girlfriend");
                let p_choice = ask.question("select one____:")
                if (p_choice == 1) {
                    console.log("calling mom...........\nmom says  ", answers[i]);
                    let ans_m = ask.question("submit you'r answer_____: ")
                    if (ans_m == answers[i]) {
                        console.log('your answer is correct\nyou win !!!!');
                        win_a += amount[a_i]
                        a_i += 1
                    } else {
                        console.log('you lose the game !!! \ngame over !!!');
                        break;
                    }
                } else {
                    console.log("calling__girlfriend..........\ngirlfriend says____:", answers[i]);
                    let Gf_se = ask.question('submit the answer____:');
                    if (Gf_se == answers[i]) {
                        console.log('your answer is correct\nyou win !!!!');

                    } else {
                        console.log('you lose the game !!! \ngame over !!!');
                        break;
                    }
                }
            }
        }
        help_count -= 1
    }
    else {
        console.log('you loose the game ');
        i = Questions.length
        break
    }
}
console.log("your wining amount is ", win_a);