const btnRoll1 = document.getElementById("btnRoll1");
const btnRoll2 = document.getElementById("btnRoll2");
const totalTry = document.getElementById("total");
const totalByNumber1 = document.getElementById("totalByNumber1");
const totalByNumber2 = document.getElementById("totalByNumber2");
const totalByNumber3 = document.getElementById("totalByNumber3");
const totalByNumber4 = document.getElementById("totalByNumber4");
const totalByNumber5 = document.getElementById("totalByNumber5");
const totalByNumber6 = document.getElementById("totalByNumber6");

const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const roll3 = document.getElementById("roll3");
const roll4 = document.getElementById("roll4");
const roll5 = document.getElementById("roll5");
const roll6 = document.getElementById("roll6");

let row1q = 3;
let row2q = 3;

let total = 0;
let totalByNumber = [ 0, 0, 0, 0, 0, 0];

const roll = ( row ) => {

    let rollsQ = 0;

    let randomList = [];

    if (row === 1) {
        rollsQ = row1q;
    } else {
        rollsQ = row2q;
    }

    console.log(rollsQ)

    switch ( rollsQ ) {
        case 1:
            randomList = [ 1 ]
            break;
        case 2:
            randomList = [ 1, 1 ]
            break;
        case 3:
            randomList = [ 1, 1, 1 ]
            break;
    }

    for ( let i = 0; i < randomList.length ; i++) {
        
        randomList[i] = Math.round(Math.random() * 5) + 1;
        counter( randomList[i] );
        console.log('random', randomList[i]);
       
    }

    randomList = orderRolls( randomList );

    switch ( row ){
        case 1:
            if(randomList.length < 2){
                roll1.innerText = randomList[0];
            } else if (randomList.length < 3){
                roll1.innerText = randomList[0];
                roll2.innerText = randomList[1];
            } else if(randomList.length < 4){
                roll1.innerText = randomList[0];
                roll2.innerText = randomList[1];
                roll3.innerText = randomList[2];
            }
            break;
        case 2:
            if(randomList.length < 2){
                roll4.innerText = randomList[0];
            } else if(randomList.length < 3){
                roll4.innerText = randomList[0];
                roll5.innerText = randomList[1];
            } else if(randomList.length < 4){
                roll4.innerText = randomList[0];
                roll5.innerText = randomList[1];
                roll6.innerText = randomList[2];
            }
            break;
    }

};

const disableRolls = ( row, value ) => {
    if ( row === 1 ) {
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

    if ( row === 2 ) {
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

    roll( row );
    
}

const orderRolls = ( row ) => {
    let orderedRoll = [];
    if( row.length < 2){
        orderedRoll[0] = row[0];
    } else if( row.length < 3){
        orderedRoll = [ 0, 0 ];
        for (let i=0; i<row.length; i++){
            if ( row[i]>orderedRoll[0] ){
                orderedRoll[1] = orderedRoll[0];
                orderedRoll[0] = row[i];
            } else {
                orderedRoll[1] = row[i];
            }
        }
    } else if( row.length < 4){
        orderedRoll = [ 0, 0, 0 ];
        for (let i=0; i<row.length; i++){
            if ( row[i]>orderedRoll[0] ){
                orderedRoll[2] = orderedRoll[1];
                orderedRoll[1] = orderedRoll[0];
                orderedRoll[0] = row[i]
            } else if ( row[i]>orderedRoll[1]) {
                orderedRoll[2] = orderedRoll[1];
                orderedRoll[1] = row[i]
            } else {
                orderedRoll[2] = row[i]
            }
        }
    }
    return orderedRoll;
};

const counter = ( number ) => {

    total ++;

    totalByNumber[ number - 1] ++;
    totalTry.innerText = "Total = " + total;
    totalByNumber1.innerText = "1 = " + ((totalByNumber[1 - 1]*100)/total).toFixed(1) + " %";
    totalByNumber2.innerText = "2 = " + ((totalByNumber[2 - 1]*100)/total).toFixed(1) + " %";
    totalByNumber3.innerText = "3 = " + ((totalByNumber[3 - 1]*100)/total).toFixed(1) + " %";
    totalByNumber4.innerText = "4 = " + ((totalByNumber[4 - 1]*100)/total).toFixed(1) + " %";
    totalByNumber5.innerText = "5 = " + ((totalByNumber[5 - 1]*100)/total).toFixed(1) + " %";
    totalByNumber6.innerText = "6 = " + ((totalByNumber[6 - 1]*100)/total).toFixed(1) + " %";

};

const animateRolls = ( row ) => {
    
    if ( row === 1) {

        btnRoll1.className = "btn btnRoll col-12 mb-2 btn-danger";
        roll1.innerText = "";
        roll2.innerText = "";
        roll3.innerText = "";
        
        setTimeout(() => {
            btnRoll1.className = "btn btnRoll col-12 mb-2 btn-info";
            roll( row );
        }, 1000);

    } else {

        btnRoll2.className = "btn btnRoll col-12 mb-2 btn-danger";
        roll4.innerText = "";
        roll5.innerText = "";
        roll6.innerText = "";

        setTimeout(() => {
            btnRoll2.className = "btn btnRoll col-12 mb-2 btn-info";
            roll( row );
        }, 1000);

    }    
    
};

roll(1);
roll(2);



