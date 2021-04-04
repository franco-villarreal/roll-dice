const btnRoll1 = document.getElementById("btnRoll1");
const btnRoll2 = document.getElementById("btnRoll2");
const totalTry = document.getElementById("total");
const totalByNumber1 = document.getElementById("totalByNumber1");
const totalByNumber2 = document.getElementById("totalByNumber2");
const totalByNumber3 = document.getElementById("totalByNumber3");
const totalByNumber4 = document.getElementById("totalByNumber4");
const totalByNumber5 = document.getElementById("totalByNumber5");
const totalByNumber6 = document.getElementById("totalByNumber6");

const roll1img = document.getElementById("roll1img");
const roll2img = document.getElementById("roll2img");
const roll3img = document.getElementById("roll3img");
const roll4img = document.getElementById("roll4img");
const roll5img = document.getElementById("roll5img");
const roll6img = document.getElementById("roll6img");

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
                roll1img.src = "sprites/Sprite-000" + randomList[0] + ".png";
            } else if (randomList.length < 3){
                roll1img.src = "sprites/Sprite-000" + randomList[0] + ".png";
                roll2img.src = "sprites/Sprite-000" + randomList[1] + ".png";
            } else if(randomList.length < 4){
                roll1img.src = "sprites/Sprite-000" + randomList[0] + ".png";
                roll2img.src = "sprites/Sprite-000" + randomList[1] + ".png";
                roll3img.src = "sprites/Sprite-000" + randomList[2] + ".png";
            }
            break;
        case 2:
            if(randomList.length < 2){
                roll4img.src = "sprites/Sprite-000" + randomList[0] + ".png";
            } else if(randomList.length < 3){
                roll4img.src = "sprites/Sprite-000" + randomList[0] + ".png";
                roll5img.src = "sprites/Sprite-000" + randomList[1] + ".png";
            } else if(randomList.length < 4){
                roll4img.src = "sprites/Sprite-000" + randomList[0] + ".png";
                roll5img.src = "sprites/Sprite-000" + randomList[1] + ".png";
                roll6img.src = "sprites/Sprite-000" + randomList[2] + ".png";
            }
            break;
    }

};

const disableRolls = ( row, value ) => {
    if ( row === 1 ) {
        roll1img.hidden = true;
        roll2img.hidden = true;
        roll3img.hidden = true;

        switch ( value ) {
            case 1:
                roll1img.hidden = false;
                row1q = 1;
                break;
            case 2:
                roll1img.hidden = false;
                roll2img.hidden = false;
                row1q = 2;
                break;
            case 3:
                roll1img.hidden = false;
                roll2img.hidden = false;
                roll3img.hidden = false;
                row1q = 3;
                break;
        }

    }

    if ( row === 2 ) {
        roll4img.hidden = true;
        roll5img.hidden = true;
        roll6img.hidden = true;

        switch ( value ) {
            case 1:
                roll4img.hidden = false;
                row2q = 1;
                break;
            case 2:
                roll4img.hidden = false;
                roll5img.hidden = false;
                row2q = 2;
                break;
            case 3:
                roll4img.hidden = false;
                roll5img.hidden = false;
                roll6img.hidden = false;
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

        btnRoll1.className = "btn btn-danger btnRoll col-12 mb-2 p-1 pt-4";
        roll1img.src = "";
        roll2img.src = "";
        roll3img.src = "";
        
        setTimeout(() => {
            btnRoll1.className = "btn btn-success btnRoll col-12 mb-2 p-1 pt-4";
            roll( row );
        }, 1000);

    } else {

        btnRoll2.className = "btn btn-danger btnRoll col-12 mb-2 p-1 pt-4";
        roll4img.src = "";
        roll5img.src = "";
        roll6img.src = "";

        setTimeout(() => {
            btnRoll2.className = "btn btn-success btnRoll col-12 mb-2 p-1 pt-4";
            roll( row );
        }, 1000);

    }    
    
};

roll(1);
roll(2);



