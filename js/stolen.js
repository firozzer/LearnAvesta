function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

String.prototype.shuffle = function () { //stolen from SO
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function shuffle(array) { // i stole this function from SO, my brain is too weak
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
// let rawinput = { // this is to make raw text to images
//     1: ["country", [[18,1,9,40,5], [18,1,3,34,36,5]]],
//     2: ["mountain", [[11,1,3,20,3,43], [22,1,20,25,46,1,33,36]]],
//     3: ["pain", [[18,27], [18,20,3,23,1]]],
//     4: ["teaching", [[24,7,1,16,44,1],  [42,1,42,23,3]]],
//     5: ["to go", [[11,1,32,51], [3,51], [11,1,32,51]]]
// }

// newKill = {}

// for (let i = 1; i <= 5; i++) {
//     temp3 = [];
//     rawinput[i][1].forEach(element => {
//         temp4 = []
//         element.forEach(elem => {
//         temp4.push(avestaDict[elem])
// });
//         temp3.push(temp4)
// });
//     newKill[i] = {"englishQ": rawinput[i][0], "avestaAns": [[temp3]]}
// }