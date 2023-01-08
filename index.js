var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

var arrayLength = finances.length;

// The total number of months included in the dataset.
// 1 - done
console.log("Total months: " + finances.length);

// The net total amount of Profit/Losses over the entire period.
// 2 - done
var sum = 0
    for (i=0; i<finances.length; i++){
        sum += finances[i][1];
    }
console.log("Total: $" + sum);

/* The average of the **changes** in Profit/Losses over the entire period.
  * You will need to track what the total change in profits are from month to month and then find the average.
* (`Total/Number of months`)*/
// 3 - done

// this is for task3 
// function to get the difference between two corresponding array items
function diff(arr) {
    var result = [];
    for (var i = 0; i < arr.length - 1; i++) {
      result.push(arr[i+1] - arr[i]);
    }
    return result;
  }

  // getting the numbers from our finances array and running the diff function on them
  function getDifferences() {
    const arr = []
    for (let i = 0; i < finances.length; i++) {
    let numbers = finances[i][1]
    arr.push(numbers)
    }
    let diffs = diff(arr)
    return diffs
}
// now we have the differences, we are running a function to find the average
 let total = [];
 let differences = [];

function getAverage() {
    let differences = getDifferences()

    const total = differences.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return total / differences.length;
}

const average = getAverage(differences);

// Displaying to 2 decimal places
var averageR = average.toFixed(2);
console.log("Average change: $" + averageR);

// The greatest increase in profits (date and amount) over the entire period.
// 4 - not done

// All the code I tried that did not work
/*
var netArray = [];
var netChangeSum = 0;

for(let i=0; i<netArray.length; i++){
    netChangeSum += netArray[i];
}

average = Math.round((netChangeSum / 86) * 100 / 100);

console.log("Greatest increase in profits: " + average);

var largest = [''];

for (var i = 0; i < differences.length; i++) {
    for(let i2=0; i2<finances[i].length; i2++){
        if (largest < differences[i]) {
            largest = differences[i];
        }    
    }
}
for(var i=0; i<=differences.length; i++){
    if (largest<differences[i]) {
        largest=differences[i];
    }
}
*/


//var largest = Math.max(differences);

//const big = differences
//const max = big.reduce((a, b) => Math.max(a, b), -Infinity);

//var array = differences;
//var largest = Math.max.apply(Math, array);
/*
let least = ['', 99999999999999];
let greatest = ['', 0];
let net = 0;
let netArray = [];

for(let i=0; i<finances.length; i++){
    for(let i2=0; i2<finances[i].length; i2++) {
        if(typeof finances[i][i2] !== 'string') {
            total += finances[i][i2];
            change = finances[i][i2] - net;
            net = finances[i][i2];
            netArray.push(change);

            if(change>greatest[1]){
                greatest = [finances[i][0], finances[i[1]]]
            }

            if(change<least[1]){
                least =[finances[i][0], finances[i][1]]
            }
        }
    }
}
*/
var largest = finances[0];

for (var i = 0; i < finances.length; i++) {
    if (largest < finances[i]) {
        largest = finances[i];
    }
}
// Correct answer is Feb 2012 - $1926159
console.log("Greatest increase in profits: " + largest[0] + " ($" + largest[1] + ")");

// The greatest decrease in losses (date and amount) over the entire period.
// 5 - not done

// All the code I tried that did not work
//var least = [' ', 999999999999999999];
/*
for (var i = 0; i < finances.length; i++) {
    if (smallest < finances[i] ) {
        smallest = finances[i];
    }
}


var smallest = [''];

for (var i = 0; i < differences.length; i++) {
    for(let i2=0; i2<finances[i].length; i2++){
        if (smallest < differences[i]) {
            smallest = differences[i];
        }    
    }
}
for(var i=0; i<=differences.length; i++){
    if (smallest<differences[i]) {
        smallest=differences[i];
    }
}
*/

var smallest = finances[0];

for (var i = 0; i < finances.length; i++) {
    if (smallest > finances[i]) {
        smallest = finances[i];
    }
}

// Correct answer is Sep 2013 - -$2196167
console.log("Greatest decrease in profits: "+ smallest[0] + " $(" + smallest[1] + ")");