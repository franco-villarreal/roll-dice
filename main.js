const btnRoll = document.getElementById("btnRoll");

const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const roll3 = document.getElementById("roll3");
const roll4 = document.getElementById("roll4");
const roll5 = document.getElementById("roll5");
const roll6 = document.getElementById("roll6");
let row1q = 3;
let row2q = 3;
const disableRolls = ( roll, value ) => {
    if ( roll === 1 ) {
        roll1.hidden = true;
        roll2.hidden = true;
        roll3.hidden = true;

        switch ( value ) {
            case 1:
                roll1.hidden = false;
                row1q = 1;
                break;
            case 2:
                roll1.hidden = false;
                roll2.hidden = false;
                row1q = 2;
                break;
            case 3:
                roll1.hidden = false;
                roll2.hidden = false;
                roll3.hidden = false;
                row1q = 3;
                break;
        }

    }

    if ( roll === 2 ) {
        roll4.hidden = true;
        roll5.hidden = true;
        roll6.hidden = true;

        switch ( value ) {
            case 1:
                roll4.hidden = false;
                row2q = 1;
                break;
            case 2:
                roll4.hidden = false;
                roll5.hidden = false;
                row2q = 2;
                break;
            case 3:
                roll4.hidden = false;
                roll5.hidden = false;
                roll6.hidden = false;
                row2q = 3;
                break;
        }
    }
    
}

const roll = ( row ) => {

    let rollsQ = 0;

    let randomList = [ 0, 0, 0];

    if (row === 1) {
        rollsQ = row1q;
    } else {
        rollsQ = row2q;
    }

    console.log(rollsQ)

    switch ( rollsQ ) {
        case 1:
            randomList = [ 1, 0, 0 ]
            break;
        case 2:
            randomList = [ 1, 1, 0 ]
            break;
        case 3:
            randomList = [ 1, 1, 1 ]
            break;
    }

    for ( let i = 0; i < randomList.length ; i++) {
        if (randomList[i] !== 0) {
            randomList[i] = Math.round(Math.random() * 5) + 1;
            console.log('random', randomList[i]);
        }
    }

    randomList = orderRolls( randomList );

    switch ( row ){
        case 1:
            roll1.innerText = randomList[0];
            roll2.innerText = randomList[1];
            roll3.innerText = randomList[2];
            break;
        case 2:
            roll4.innerText = randomList[0];
            roll5.innerText = randomList[1];
            roll6.innerText = randomList[2];
            break;
    }

};

const orderRolls = ( row ) => {
    let orderedRoll = [ 1,1,1 ]

    for (let i=0; i<row.length; i++){
        if ( row[i]>orderedRoll[0] ){
            orderedRoll[0] = row[i]
        } else if ( row[i]>orderedRoll[1]) {
            orderedRoll[1] = row[i]
        } else {
            orderedRoll[2] = row[i]
        }
    }

    return orderedRoll;
};

roll(1);
roll(2);



