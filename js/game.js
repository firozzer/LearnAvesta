const avestaDict = {
    1: "a",
    2: "A",
    3: "i",
    4: "I",
    5: "u",
    6: "U",
    7: "k",
    8: "x",
    9: "F",
    10: "X",
    11: "g",
    12: "G",
    13: "o",
    14: "O",
    15: "e",
    16: "E",
    17: "q",
    18: "d",
    19: "D",
    20: "r",
    21: "f",
    22: "b",
    23: "t",
    24: "T",
    25: "v",
    26: "V",
    27: "vrv",
    28: "c",
    29: "j",
    30: "n",
    31: "N",
    32: "m",
    33: "M",
    34: "?",
    35: "p",
    36: "h",
    37: "B",
    38: "l",
    39: "&",
    40: "y",
    41: "Y",
    42: "s",
    43: "S",
    44: "C",
    45: "‚",
    46: "z",
    47: "Z",
    48: "w",
    49: "W",
    50: "!",
    51: "√-",
}
const oldTests = {
    1: [[23,1,30,5], "body"], //1: {englishQ: "body", avestaAns: [['t','a','n','u']]}
    2: [[2,1,24], "then"], //
    3: [[1,44,1], "righteousness"],  
    4: [[1,36,5,20,25,32], "Ahurem"],
    5: [[18,2,23,1,20,25], "Dātré"],
    6: [[32,26], "my"],
    7: [[1,31,11,5,43,23,1], "toe/finger"],
    8: [[28,48,1,31,24], "How many?"],
    9: [[20,1,17,37,40,1], "timely"],
    10: [[49,1,36,3,43,23,1], "best"],
    11: [[5,44,1], "dawn"],
    12: [[1,45,40,1], "blessed"], //1,41,40,1
    13: [[5,35,2,46,1,30,1], "driving away"],
    14: [[18,20,1,48,2,42,35,1], "having healthy horses"],
    15: [[18,20,1,48,1], "healthy"],
    16: [[1,42,35,1], "horse"],
    17: [[30,3,18,1,17,2,32,1], "we gave"],
    18: [[28,1,20,2,30,3], "field"],
    19: [[49,1,30,39,32], "tree"],
    20: [[30,4,20,15], "I poured down."],
    21: [[36,5], "good"],
    22: [[5,8,23,1], "word"],
    23: [[36,6,8,23,1], "good word"], //36,4,8,23,1
    24: [[3,19,1], "here"],
    25: [[30,1,16,19,1], "not here/neither"],
    26: [[36,1,19,1], "together"],
    27: [[36,1,19,1,13,8,23,1], "Hadokht (Nask)"],
    28: [[1,20], "to go towards"],
    29: [[32,1,46,18,2,3], "for Mazda"],
    30: [[1,36,5,20,2,3], "for Ahura"],
    31: [[2], "comes"],
    32: [[2,3,23,16], "comes towards"],
    33: [[5,3,23,3], "thus"],
    34: [[5,3,23,40,1,13,29,1,30,1], "speaking thus"],
    35: [[35,1,3,23,3], "against"],
    36: [[35,1,3,23,40,2,20,1], "opposition"],
    37: [[42,35,3,23,40,5,20,1], "Spityura"],
    38: [[1,44,1,13,30,40,2,3], "For the holy lady."],
    39: [[23,1,30,48,1,24], "from the body"],
    40: [[36,48,2,21,20,3,23,1], "greatly beloved"],
    41: [[5,20,5], "wide"],
    42: [[2,35,1], "water"],
    43: [[5,20,48,2,35,1], "widely flowing water"], //5,20,48,2,35,1
    44: [[7,1,42,5], "very small"],
    45: [[7,1,42,48,3], "small"],
    46: [[46,20,48,2,30,1], "time"],
    47: [[11,1,13], "cow/bull"],
    48: [[11,1,48,1], "with the cow/bull"], //1,48,1
    49: [[11,1,48,39,32], "of the cow's/bull's"], //
    50: [[18,20,3,23,1], "affliction"], //
    51: [[46,4,24], "indeed/surely"], //
    52: [[1,30,6,8,23,1], "speaking in accordance"], //
    53: [[5,35,1,16,23,1], "approached"],
    54: [[30,2,3,20,40,1,42,28,1], "and the women"],
    55: [[1,33,36,48,15], "for the world"],
    56: [[46,20,5], "to be old"],
    57: [[11,2,17,2,3], "for Gathas"],
    58: [[21,20,1,13,8,23,1], "spoke forth"],
    59: [[3,20,3,8,23,1], "poured"],
    60: [[22,1,8,23,1], "divided/approportioned"],
    61: [[3,20,3,42,23,1], "dead"],
    62: [[20,2,42,23,3], "truth"], //20,2,42,23,1
    63: [[32,40,1,46,18,1], "offering"],
    64: [[18,1,46,18,1], "gift"],
    65: [[30,3,18,1,17,2,32,1], "we gave"],
    66: [[18,1,51], "to give/to know/to create"],
    67: [[18,2,17,51], "to create"],
    68: [[11,20,1,31,23,1], "angry"], //51 in end
    69: [[41,1,46,51], "to venerate/to worship"],
    70: [[41,1,43,23,1], "venerated/attuned"],
    71: [[35,1,20,42,51], "to ask"],
    72: [[35,1,20,43,23,1], "asked/question"],
    73: [[1,36,51], "to be/is"],
    74: [[1,42,23,3], "he is/she is/it is"],
    75: [[49,1,36,51], "to wear"],
    76: [[49,1,42,23,15], "he wears/she wears"],
    77: [[41,1,42,30,1], "veneration"],
    78: [[20,1,44,30,5], "arrangement"],
    79: [[49,1,42,32,1], "carrying"],
    80: [[32,1,20,51], "to die"],
    81: [[32,1,45,40,1], "man"],
    82: [[21,20,1,48,1,44,3], "Guardian Spirit/Fravashi"],
    83: [[23,1,8,32,1,30], "seed"],
    84: [[23,1,35,51], "to heat"],
    85: [[23,1,21,30,5], "fever/heat"],
    86: [[32,1,42,23,3], "exhilaration"],
    87: [[28,3,24,51], "to think"],
    88: [[28,3,42,23,3], "knowledge"],
    89: [[49,1,31,23,1], "vomited"],
    90: [[32,1,20,43,23,1], "rubbed"],
    91: [[3,44,51], "to wish/to desire/to throw"],
    92: [[5,44,51], "to burn/to shine"],
    93: [[7,27,51], "to do"],
    94: [[8,44,3,51], "to rule/to shine"],
    95: [[11,1,32,51], "to go"],
    96: [[11,5,44,51], "to hear"],
    97: [[18,27,51], "to tear"],
    98: [[18,20,5,29,51], "to lie/to hurt/to decieve"],
    99: [[35,2,51], "to protect"],
    // 100: [[35,2,51], "country"],
}
const tests = {
    "1":{"englishQ":"body","avestaAns":[["t","a","n","u"]]},
    "2":{"englishQ":"then","avestaAns":[["A","a","T"]]},
    "3":{"englishQ":"righteousness","avestaAns":[["a","C","a"]]},
    "4":{"englishQ":"Ahurem","avestaAns":[["a","h","u","r","v","m"]]},
    "5":{"englishQ":"Dātré","avestaAns":[["d","A","t","a","r","v"]]},
    "6":{"englishQ":"my","avestaAns":[["m","V"]]},
    "7":{"englishQ":"toe / finger","avestaAns":[["a","N","g","u","S","t","a"]]},
    "8":{"englishQ":"How many?","avestaAns":[["c","w","a","N","T"]]},
    "9":{"englishQ":"timely","avestaAns":[["r","a","q","B","y","a"]]},
    "10":{"englishQ":"best","avestaAns":[["W","a","h","i","S","t","a"]]},
    "11":{"englishQ":"dawn","avestaAns":[["u","C","a"]]},
    "12":{"englishQ":"blessed","avestaAns":[["a","‚","y","a"]]},
    "13":{"englishQ":"driving away","avestaAns":[["u","p","A","z","a","n","a"]]},
    "14":{"englishQ":"having healthy horses","avestaAns":[["d","r","a","w","A","s","p","a"]]},
    "15":{"englishQ":"healthy","avestaAns":[["d","r","a","w","a"]]},
    "16":{"englishQ":"horse","avestaAns":[["a","s","p","a"]]},
    "17":{"englishQ":"we gave","avestaAns":[["n","i","d","a","q","A","m","a"]]},
    "18":{"englishQ":"field","avestaAns":[["c","a","r","A","n","i"]]},
    "19":{"englishQ":"tree","avestaAns":[["W","a","n","&","m"]]},
    "20":{"englishQ":"I poured down.","avestaAns":[["n","I","r","e"]]},
    "21":{"englishQ":"good","avestaAns":[["h","u"]]},
    "22":{"englishQ":"word","avestaAns":[["u","x","t","a"]]},
    "23":{"englishQ":"good word","avestaAns":[["h","U","x","t","a"]]},
    "24":{"englishQ":"here","avestaAns":[["i","D","a"]]},
    "25":{"englishQ":"not here / neither","avestaAns":[["n","a","E","D","a"]]},
    "26":{"englishQ":"together","avestaAns":[["h","a","D","a"]]},
    "27":{"englishQ":"Hadokht (Nask)","avestaAns":[["h","a","D","a","o","x","t","a"]]},
    "28":{"englishQ":"to go towards","avestaAns":[["a","r"]]},
    "29":{"englishQ":"for Mazda","avestaAns":[["m","a","z","d","A","i"]]},
    "30":{"englishQ":"for Ahura","avestaAns":[["a","h","u","r","A","i"]]},
    "31":{"englishQ":"comes","avestaAns":[["A"]]},
    "32":{"englishQ":"comes towards","avestaAns":[["A","i","t","E"]]},
    "33":{"englishQ":"thus","avestaAns":[["u","i","t","i"]]},
    "34":{"englishQ":"speaking thus","avestaAns":[["u","i","t","y","a","o","j","a","n","a"]]},
    "35":{"englishQ":"against","avestaAns":[["p","a","i","t","i"]]},
    "36":{"englishQ":"opposition","avestaAns":[["p","a","i","t","y","A","r","a"]]},
    "37":{"englishQ":"Spityura","avestaAns":[["s","p","i","t","y","u","r","a"]]},
    "38":{"englishQ":"For the holy lady.","avestaAns":[["a","C","a","o","n","y","A","i"]]},
    "39":{"englishQ":"from the body","avestaAns":[["t","a","n","w","a","T"]]},
    "40":{"englishQ":"greatly beloved","avestaAns":[["h","w","A","f","r","i","t","a"]]},
    "41":{"englishQ":"wide","avestaAns":[["u","r","u"]]},
    "42":{"englishQ":"water","avestaAns":[["A","p","a"]]},
    "43":{"englishQ":"widely flowing water","avestaAns":[["u","r","w","A","p","a"]]},
    "44":{"englishQ":"very small","avestaAns":[["k","a","s","u"]]},
    "45":{"englishQ":"small","avestaAns":[["k","a","s","w","i"]]},
    "46":{"englishQ":"time","avestaAns":[["z","r","w","A","n","a"]]},
    "47":{"englishQ":"cow / bull","avestaAns":[["g","a","o"]]},
    "48":{"englishQ":"with the cow / bull","avestaAns":[["g","a","w","a"]]},
    "49":{"englishQ":"of the cow's / bull's","avestaAns":[["g","a","w","&","m"]]},
    "50":{"englishQ":"affliction","avestaAns":[["d","r","i","t","a"]]},
    "51":{"englishQ":"indeed / surely","avestaAns":[["z","I","T"]]},
    "52":{"englishQ":"speaking in accordance","avestaAns":[["a","n","U","x","t","a"]]},
    "53":{"englishQ":"approached","avestaAns":[["u","p","a","E","t","a"]]},
    "54":{"englishQ":"and the women","avestaAns":[["n","A","i","r","y","a","s","c","a"]]},
    "55":{"englishQ":"for the world","avestaAns":[["a","M","h","w","e"]]},
    "56":{"englishQ":"to be old","avestaAns":[["z","r","u"]]},
    "57":{"englishQ":"for Gathas","avestaAns":[["g","A","q","A","i"]]},
    "58":{"englishQ":"spoke forth","avestaAns":[["f","r","a","o","x","t","a"]]},
    "59":{"englishQ":"poured","avestaAns":[["i","r","i","x","t","a"]]},
    "60":{"englishQ":"divided / approportioned","avestaAns":[["b","a","x","t","a"]]},
    "61":{"englishQ":"dead","avestaAns":[["i","r","i","s","t","a"]]},
    "62":{"englishQ":"truth","avestaAns":[["r","A","s","t","i"]]},
    "63":{"englishQ":"offering","avestaAns":[["m","y","a","z","d","a"]]},
    "64":{"englishQ":"gift","avestaAns":[["d","a","z","d","a"]]},
    "65":{"englishQ":"we gave","avestaAns":[["n","i","d","a","q","A","m","a"]]},
    "66":{"englishQ":"to give / to know / to create","avestaAns":[["d","a","√-"]]},
    "67":{"englishQ":"to create","avestaAns":[["d","A","q","√-"]]},
    "68":{"englishQ":"angry","avestaAns":[["g","r","a","N","t","a"]]},
    "69":{"englishQ":"to venerate / to worship","avestaAns":[["Y","a","z","√-"]]},
    "70":{"englishQ":"venerated / attuned","avestaAns":[["Y","a","S","t","a"]]},
    "71":{"englishQ":"to ask","avestaAns":[["p","a","r","s","√-"]]},
    "72":{"englishQ":"asked / question","avestaAns":[["p","a","r","S","t","a"]]},
    "73":{"englishQ":"to be / is","avestaAns":[["a","h","√-"]]},
    "74":{"englishQ":"he is / she is / it is","avestaAns":[["a","s","t","i"]]},
    "75":{"englishQ":"to wear","avestaAns":[["W","a","h","√-"]]},
    "76":{"englishQ":"he wears / she wears","avestaAns":[["W","a","s","t","e"]]},
    "77":{"englishQ":"veneration","avestaAns":[["Y","a","s","n","a"]]},
    "78":{"englishQ":"arrangement","avestaAns":[["r","a","C","n","u"]]},
    "79":{"englishQ":"carrying","avestaAns":[["W","a","s","m","a"]]},
    "80":{"englishQ":"to die","avestaAns":[["m","a","r","√-"]]},
    "81":{"englishQ":"man","avestaAns":[["m","a","‚","y","a"]]},
    "82":{"englishQ":"Guardian Spirit / Fravashi","avestaAns":[["f","r","a","w","a","C","i"]]},
    "83":{"englishQ":"seed","avestaAns":[["t","a","x","m","a","n"]]},
    "84":{"englishQ":"to heat","avestaAns":[["t","a","p","√-"]]},
    "85":{"englishQ":"fever / heat","avestaAns":[["t","a","f","n","u"]]},
    "86":{"englishQ":"exhilaration","avestaAns":[["m","a","s","t","i"]]},
    "87":{"englishQ":"to think","avestaAns":[["c","i","T","√-"]]},
    "88":{"englishQ":"knowledge","avestaAns":[["c","i","s","t","i"]]},
    "89":{"englishQ":"vomited","avestaAns":[["W","a","N","t","a"]]},
    "90":{"englishQ":"rubbed","avestaAns":[["m","a","r","S","t","a"]]},
    "91":{"englishQ":"to wish / to desire / to throw","avestaAns":[["i","C","√-"]]},
    "92":{"englishQ":"to burn / to shine","avestaAns":[["u","C","√-"]]},
    "93":{"englishQ":"to do","avestaAns":[["k","vrv","√-"]]},
    "94":{"englishQ":"to rule / to shine","avestaAns":[["x","C","i","√-"]]},
    "95":{"englishQ":"to go","avestaAns":[["g","a","m","√-"]]},
    "96":{"englishQ":"to hear","avestaAns":[["g","u","C","√-"]]},
    "97":{"englishQ":"to tear","avestaAns":[["d","vrv","√-"]]},
    "98":{"englishQ":"to lie / to hurt / to decieve","avestaAns":[["d","r","u","j","√-"]]},
    "99":{"englishQ":"to protect","avestaAns":[["p","A","√-"]]},
    "100":{"englishQ":"country","avestaAns":[["d","a","F","y","u"],["d","a","i","?","h","u"]]},
    "101":{"englishQ":"mountain","avestaAns":[["g","a","i","r","i","S"],["b","a","r","v","z","a","M","h"]]},
    "102":{"englishQ":"pain","avestaAns":[["d","vrv"],["d","r","i","t","a"]]},
    "103":{"englishQ":"teaching","avestaAns":[["T","k","a","E","C","a"],["s","a","s","t","i"]]},
    "104":{"englishQ":"to go","avestaAns":[["g","a","m","√-"],["i","√-"],["a","r","√-"]]}
}

function restartStraightTest() {
    setTimeout(function() {
        avestaLetters = document.querySelectorAll(".AvestaLetters"); // nodeList of all the avestaLetters in the origin. since it is not declared, it becomes a global variable. Capturing this after sometime as the app.js insertavestaLetters() function is generating these html img elements firstly.
	    avestaLetters.forEach((avestaLetter) => {
		const event = () => {
            let buttonStatus = document.getElementById("checkButton").text
			if (isAnimating || buttonStatus == "Next" || buttonStatus == "Correct!")  return; // if we already have an animation playing, don't let the user start a new one. Also if already correct answer has been given, don't animate naymore.
			avestaLetter.closest(".thirdSectionElements") ? move(avestaLetter) : putback(avestaLetter); // decide if we should use the move() or putback() functions based on the avestaLetter's current location
		};
	
		avestaLetter.addEventListener("mouseup", event);
        avestaLetter.addEventListener("touchend", event);
    })

    jumperInput = document.querySelector("#jumperInput") // giving the deelopment stage input test number field enter functionality
    jumperInput.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("jumperButton").click();
        }
      });

    }, 300)

    // changing page so getting rid of stuff from the previous time from the page
    try {
        document.getElementById("heading").remove()
        let secondSection = document.querySelector("#secondSection")
        for (let index = secondSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from second section
            secondSection.children[index].remove()            
        }
        let thirdSection = document.querySelector("#thirdSection")
        for (let index = thirdSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from third section
            thirdSection.children[index].remove()            
        }
        thirdSection.style.display = "flex"
    } catch (e) {
        if (e instanceof TypeError) {
            // continuing since it must be first time opening page and can't find the elements it is trying to delete
        }
    }

    document.getElementById("checkButton").text = "Check" // need this to run when in development i type in a new test no immediately after clicking on showAnswer
    document.getElementById('showAnswerButton').classList.remove("disabled") // need this to run when in development i type in a new test no immediately after clicking on showAnswer

    oldRandomNos += 1
    randomNo = oldRandomNos
    console.log("Random/Test No: ", randomNo)
    
    document.getElementById("jumperInput").value = ""
    document.getElementById("jumperInput").value = randomNo

    let tempStr1 = ""
    tests[randomNo]['avestaAns'][0].forEach(element => {
        let theKey = Object.keys(avestaDict).find(key => avestaDict[key] === element);
        tempStr1 += `${theKey},`
    });
    console.log("Correct Ans: ", tempStr1)
    console.log("Correct Ans: ", tests[randomNo]['avestaAns'][0])
    tempList = [];
    repeatingLetters = [];
    tests[randomNo]["avestaAns"].forEach(element => { //extracting correct answers from tests dict & putting them in tempList for further processing. 
        element.forEach(elem => {
            if (tempList.indexOf(elem) == -1){ //check if letter is already in list
                tempList.push(elem)
            } else { // if letter is already in list i also need to check if orig answer contains multiple same letters.If it does, then push appropriate number of duplicate letters to the list.
                console.log("enterd duplicate checker")
                let countOfElemInOrigArray = element.filter(x => x === elem).length;
                let countOfElemInTempArray = tempList.filter(x => x === elem).length;
                console.log(elem, countOfElemInOrigArray)
                console.log(elem, countOfElemInTempArray)
                if (countOfElemInOrigArray - countOfElemInTempArray > 0) {
                    tempList.push(elem)
                }
            }
        });
    });

    let totalUniqueAvestaLettersInTest = tempList.length //capturing the correct Avesta unique letters length as later on will generate elements on its basis. Minimum i will show 10 & max the number of this variable.
    console.log("Tot Unique Avesta Letters in Test answer: ", totalUniqueAvestaLettersInTest)
    thirdSection = document.getElementById("thirdSection")
    for (let index = 0; index < 10 || index < totalUniqueAvestaLettersInTest; index++) { // generating number of containers basis totalUniqueAve... var.
        let divTemp = document.createElement('div');
        divTemp.className = "thirdSectionElements fade-in";
        thirdSection.appendChild(divTemp);
    }

    thirdSectionElements = document.querySelectorAll(".thirdSectionElements")

    while (tempList.length < thirdSectionElements.length) { //using the Random No generated above, that specific test no being filled up with random nos from 1 to 50.
        tempList.push(avestaDict[Math.floor(Math.random()*51)+1])
    }

    shuffle(tempList)
    // console.log(tempList)

    let heading = document.createElement("h4")
    heading.textContent = tests[randomNo]["englishQ"]
    heading.id = "heading"
    heading.className = "fade-in"
    firstSection.appendChild(heading)

    tempList.forEach((elem,index) => {
        let p = document.createElement('p');
        p.className = "AvestaLetters noselect";
        p.textContent = elem;
        thirdSectionElements[index].appendChild(p);
    });
}

function restartTest() {
    document.getElementById("checkButton").text = "Check" // need this to run when in development i type in a new test no immediately after clicking on showAnswer
    document.getElementById('showAnswerButton').classList.remove("disabled") // need this to run when in development i type in a new test no immediately after clicking on showAnswer
    
    setTimeout(function() {
        avestaLetters = document.querySelectorAll(".AvestaLetters"); // nodeList of all the avestaLetters in the origin. since it is not declared, it becomes a global variable. Capturing this after sometime as the app.js insertavestaLetters() function is generating these html img elements firstly.
	    avestaLetters.forEach((avestaLetter) => {
		const event = () => {
            let buttonStatus = document.getElementById("checkButton").text
			if (isAnimating || buttonStatus == "Next" || buttonStatus == "Correct!")  return; // if we already have an animation playing, don't let the user start a new one. Also if already correct answer has been given, don't animate naymore.
			avestaLetter.closest(".thirdSectionElements") ? move(avestaLetter) : putback(avestaLetter); // decide if we should use the move() or putback() functions based on the avestaLetter's current location
		};
	
		avestaLetter.addEventListener("mouseup", event);
        avestaLetter.addEventListener("touchend", event);
    })

    // jumperInput = document.querySelector("#jumperInput") // giving the deelopment stage input test number field enter functionality
    // jumperInput.addEventListener("keyup", function(event) {
    //     // Number 13 is the "Enter" key on the keyboard
    //     if (event.keyCode === 13) {
    //       // Cancel the default action, if needed
    //       event.preventDefault();
    //       // Trigger the button element with a click
    //       document.getElementById("jumperButton").click();
    //     }
    //   });

    }, 300)

    // changing page so getting rid of stuff from the page
    try {
        document.getElementById("heading").remove()
        let secondSection = document.querySelector("#secondSection")
        for (let index = secondSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from second section
            secondSection.children[index].remove()            
        }
        let thirdSection = document.querySelector("#thirdSection")
        for (let index = thirdSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from third section
            thirdSection.children[index].remove()            
        }
        thirdSection.style.display = "flex"
    } catch (e) {
        if (e instanceof TypeError) {
            // continuing since it must be first time opening page and can't find the elements it is trying to delete
        }
    }

    while(true){ //generating the random number which will be the Test Number
        randomNo = Math.floor(Math.random() * lengthOfTests)+1;
        console.log("Random/Test No: ", randomNo)
        tempString = ""
        tests[randomNo]['avestaAns'][0].forEach(element => {
            theKey = Object.keys(avestaDict).find(key => avestaDict[key] === element);
            tempString += `${theKey},`
        });
        // console.log("Correct Ans: ", tempString)
        if(oldRandomNos.length === lengthOfTests){oldRandomNos = []}; // change the no here to no of tests you've fed in the code.
        if(oldRandomNos.indexOf(randomNo) === -1){ // This check in place to ensure same random number is not reoldRandom in 1 run.
            oldRandomNos.push(randomNo);
            break;
        }
    }

    // document.getElementById("jumperInput").value = randomNo
    
    let tempStr1 = ""
    tests[randomNo]['avestaAns'][0].forEach(element => {
        let theKey = Object.keys(avestaDict).find(key => avestaDict[key] === element);
        tempStr1 += `${theKey},`
    });
    console.log("Correct Ans: ", tempStr1)
    console.log("Correct Ans: ", tests[randomNo]['avestaAns'][0])
    tempList = [];
    repeatingLetters = [];
    tests[randomNo]["avestaAns"].forEach(element => { //extracting correct answers from tests dict & putting them in tempList for further processing. 
        element.forEach(elem => {
            if (tempList.indexOf(elem) == -1){ //check if letter is already in list
                tempList.push(elem)
            } else { // if letter is already in list i also need to check if orig answer contains multiple same letters.If it does, then push appropriate number of duplicate letters to the list.
                console.log("enterd duplicate checker")
                let countOfElemInOrigArray = element.filter(x => x === elem).length;
                let countOfElemInTempArray = tempList.filter(x => x === elem).length;
                console.log(elem, countOfElemInOrigArray)
                console.log(elem, countOfElemInTempArray)
                if (countOfElemInOrigArray - countOfElemInTempArray > 0) {
                    tempList.push(elem)
                }
            }
        });
    });

    let totalUniqueAvestaLettersInTest = tempList.length //capturing the correct Avesta unique letters length as later on will generate elements on its basis. Minimum i will show 10 & max the number of this variable.
    console.log("Min no of Avesta letter options to be shown: ", totalUniqueAvestaLettersInTest)
    thirdSection = document.getElementById("thirdSection")
    for (let index = 0; index < 10 || index < totalUniqueAvestaLettersInTest; index++) { // generating number of containers basis totalUniqueAve... var.
        let divTemp = document.createElement('div');
        divTemp.className = "thirdSectionElements fade-in";
        thirdSection.appendChild(divTemp);
    }

    thirdSectionElements = document.querySelectorAll(".thirdSectionElements")

    while (tempList.length < thirdSectionElements.length) { //using the Random No generated above, that specific test no being filled up with random nos from 1 to 50.
        tempList.push(avestaDict[Math.floor(Math.random()*51)+1])
    }

    shuffle(tempList)
    // console.log(tempList)

    let heading = document.createElement("h4")
    heading.textContent = tests[randomNo]["englishQ"]
    heading.id = "heading"
    heading.className = "fade-in"
    firstSection.appendChild(heading)

    tempList.forEach((elem,index) => {
        let p = document.createElement('p');
        p.className = "AvestaLetters noselect";
        p.textContent = elem;
        thirdSectionElements[index].appendChild(p);
    });
}

function buttonPressed() { //this gets fired everytime the #checkButton is pressed
    testPassed = false;
    let button = document.getElementById("checkButton")
    if (button.text == "Next") {
        button.text = "Check" // need to do this immediately to prevent multiple page loads if user taps Next like crazy. EDIT - no succ, still user can bypass.
        console.log("next page")
        restartTest();
        // restartStraightTest();
        return;
    }
    // Below section checks the answer given by user.
    let userAns = ""
    let userAnsRaw = document.querySelectorAll("div#secondSection > p")
    userAnsRaw.forEach(elem => {
        userAns += elem.textContent
    });
    console.log(userAns)
    
    tests[randomNo]["avestaAns"].forEach(element => {
            correctAns = ""
            element.forEach(elem => {
                correctAns+=elem
            });
        if (userAns==correctAns) {
            testPassed = true;
            console.log("Correcto!")
            checkButton = document.getElementById("checkButton")
            checkButton.text = "Correct!"
            checkButton.classList.add("pulse")
            checkButton.classList.remove("teal")
            checkButton.classList.add("blue")
            setTimeout(function() {
                checkButton.classList.remove("pulse")
                checkButton.classList.remove("blue")
                checkButton.classList.add("teal")
                checkButton.text = "Next"
            }, 1000) 
            return;
        }
    });
    
    if (testPassed == true) {
        showSynonymsIfPresent();
        return;
    }
    else {
        console.log("wrong :(")
        checkButton = document.getElementById("checkButton")
        checkButton.text = "Try Again!"
        checkButton.classList.add("pulse")
        checkButton.classList.remove("teal")
        checkButton.classList.add("red")
        setTimeout(function() {
            checkButton.classList.remove("pulse")
            checkButton.classList.remove("red")
            checkButton.classList.add("teal")
            checkButton.text = "Check"
        }, 1000) 
        return;
    }
}

function showCorrectAnswer() {
    animationInitiatedByShowCorrectAnswer = true; // if this is true, then i'm disabling sibling animation in game2.js as it glitches if all move together
    document.getElementById("checkButton").text = "Next"

    let lettersInSecondSection = document.getElementById("secondSection") // select the second section
    for (let index = lettersInSecondSection.childElementCount-1; index >= 0; index--) {
        putback(lettersInSecondSection.children[index]) // then run all the child elements of second section (letters submitted by user) through the putback() function to send back to 3rd section

    }

    document.getElementById('showAnswerButton').classList.add("disabled")
    // document.getElementById('jumperButton').classList.add("disabled")
    
    tests[randomNo]['avestaAns'][0].forEach(element => { // sending the correct answers to the second section
        for (let i = 0; i < document.getElementsByClassName("thirdSectionElements").length; i++) {
            avlbleLetters = document.querySelectorAll(".thirdSectionElements > .AvestaLetters");
            if (avlbleLetters[i].textContent === element) {
                if (avlbleLetters[i] != null) move(avlbleLetters[i],animationInitiatedByShowCorrectAnswer);
                break
            }
        }
    });
    showSynonymsIfPresent();
}

const jumpToTest = () => {
    let testNo = document.getElementById("jumperInput").value;
    oldRandomNos = testNo -1;

    restartStraightTest();
}

let firstSection = document.getElementById('firstSection');

let lengthOfTests = 104
let oldRandomNos = []
// let oldRandomNos = 100 // restartStraightTest() needed for that

restartTest(); // if you switch between this & straight test, need to change quite a few things between each. Mainly noOfOldTests becomes a 0 in other & also change which function gets called in buttonPressed function.
// restartStraightTest();

const installHelpModal = () => {
        // Get the modal
    var modal = document.getElementById("helpModal");

    // Get the button that opens the modal
    var btn = document.getElementById("helpButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var modalContent = document.getElementsByClassName("modal-content")[0]; // need this to apply the exit animation on on pressing cross or outside.

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modalContent.style.animationName = "animateExit"
        modalContent.style.webkitAnimationName = "animateExit"
        modal.style.animationName = "bgExit"
        modal.style.webkitAnimationName = "bgExit"
        setTimeout(() => {
            modal.style.display = "none"; // need to set to none again otherwise it becomes visible again at orig position
            modalContent.style.animationName = "animateEntry"
            modalContent.style.webkitAnimationName = "animateEntry"
            modal.style.animationName = "bgEntry"
            modal.style.webkitAnimationName = "bgEntry"
        }, 470); // my animation is x, so this is 470 ms jic js gets delayed somehow, atleast it doesn't flicker back
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modalContent.style.animationName = "animateExit"
            modalContent.style.webkitAnimationName = "animateExit"
            modal.style.animationName = "bgExit"
            modal.style.webkitAnimationName = "bgExit"
            setTimeout(() => {
                modal.style.display = "none"; // need to set to none again otherwise it becomes visible again at orig position
                modalContent.style.animationName = "animateEntry"
                modalContent.style.webkitAnimationName = "animateEntry"
                modal.style.animationName = "bgEntry"
                modal.style.webkitAnimationName = "bgEntry"
            }, 470); // my animation is x, so this is 470 ms jic js gets delayed somehow, atleast it doesn't flicker back
    }}
}
installHelpModal();

async function showSynonymsIfPresent() {  // deleting everything from third section to show the multiple synonyms in Avesta in case synonyms are there.
    if (tests[randomNo]['avestaAns'].length > 1) { 
        // await sleep(1000);
        console.log("Note: This word has multiple Avesta translations, as .");
        let thirdSection = document.querySelector("#thirdSection");
        for (let index = thirdSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from third section
            thirdSection.children[index].remove()            
        }
        
        thirdSection.style.display = "block";

        h4Temp = document.createElement('h4'); // headingof "Note!"
        h4Temp.className = "fade-in";
        h4Temp.textContent = "Note!";
        h4Temp.style.color = "darkred"
        h4Temp.align = "center"
        thirdSection.appendChild(h4Temp);
        
        pTemp = document.createElement('p'); // slight para
        pTemp.className = "fade-in";
        pTemp.textContent = "This word can also be spelt as:"
        pTemp.align = "center"
        pTemp.style.fontSize = "18px"
        thirdSection.appendChild(pTemp);

        let userAns = "" // when user submits correct answer then i need to show only OTHER synonyms. So grabbing user answer here to exclude it from getting displayed as a synonym again. And will avoid the 0 index Avesta word answer user clicked on Help Me.
        let userAnsRaw = document.querySelectorAll("div#secondSection > p")
        userAnsRaw.forEach(elem => {
            userAns = elem.textContent + userAns
        });    

        for (let index = 0; index < tests[randomNo]["avestaAns"].length; index++) { // displaying the synonyms
            let tempStr = ""
            tests[randomNo]["avestaAns"][index].forEach(elem => {
                tempStr = elem + tempStr // add like this to autoly reverse the Avesta chars
            });
            console.log(tempStr, userAns)
            if (tempStr === userAns) continue;
            pTemp2 = document.createElement('p');
            pTemp2.className = "AvestaLetters fade-in";
            pTemp2.align = "center"
            pTemp2.textContent = tempStr
            pTemp2.style.fontSize = "50px"
            thirdSection.appendChild(pTemp2);
        }
    }
}
