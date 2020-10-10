// Hex Colour Code Gereator Function
if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("../sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}

let iOSDevice = [ // this returns true or false. Basically it checks if either of the array items is present in nagivator.platform object or that other ipad iOS13 thing. Later on i use this as "if ios then do simple fadein animation else do shuffling animation".
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
].includes(navigator.platform)
// iPad on iOS 13 detection
|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)

const showHelpModal = () => {
    console.log("enterd")
    // Get the modal
    var modal = document.getElementById("helpModal");

    // Get the button that opens the modal
    var btn = document.getElementById("helpButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}
}

setTimeout(() => {
    showHelpModal();
}, 300);


let currentTimeout = null; // Exp1B had intiatlized the variable here.
let generatedNos = [1]; // since i'm begining with A shown to the user, in the first run A should not be generated again. So prementionig 1 here.
async function generateRandom(){
    // new Audio('../res/bell_low.mp3').play(); // this just plays the bell sound

    document.getElementById('transcription-answer').src='img/transcpAnswers/bgcolor.jpg' // setting the photo to bgcolor because iOS lazy hides the previous image leading to artifacts being left on the screen when it hides the element. Artifacts go away only after 10 or so seconds, so this covers it up nicely.\ Remember that you need to set this to the colour of your bg.
    // bgcolor file has to be the max dimnesions of the other images present at that location so that it covers up the previous image entirely. I don't face this artifcat problem in Avesta Letters at the top because there the dimensions of all the images are exactly the same so the artifacts get covered up naturally.
    
    //this hides all the answers and their headings
    let answersToBeHidden = document.getElementsByClassName('answers');
    for (var i = 0; i < 2; ++i) {
        answersToBeHidden[`${i}`].setAttribute('hidden', true);
    } 
    
    // this gives the fade in effect to the main Avesta letter at top, only for iOS devices. For others, the shuffling effect plays.
    if (iOSDevice) {
        document.getElementById('avestaLetter').setAttribute('hidden', true)
        await new Promise(r => setTimeout(r, 20))
        document.getElementById('avestaLetter').removeAttribute('hidden')
    }
    
    // this is the shuffling effect in vanilla flavour
    let counter = 0;
    if (!iOSDevice) {
        while(counter < 7){ // This whole while loop is just the showy shuffle in the beginning. Shuffling 7 images is fine.
            let randomNo = Math.floor((Math.random() * 50)+1); // here multiply by the number of images you have
            document.getElementById('avestaLetter').src=`img/avestaLetters/${randomNo}.png`;
            if (counter < 4){await new Promise(r => setTimeout(r, 50))}
            else if (counter == 4){await new Promise(r => setTimeout(r, 75))}
            else if (counter == 5){await new Promise(r => setTimeout(r, 100))}
            counter+=1
        }
    }

    //here the actual random number (for the image to be shown) is being genereated
    while(true){
        let randomNo = Math.floor((Math.random() * 50)+1); // multiply by the no of images you have.
        if(generatedNos.length === 50){generatedNos = []}; // change the no here to no of images you have.
        if(generatedNos.indexOf(randomNo) === -1){ // This check in place to ensure same random number is not regenerated in 1 run.
            generatedNos.push(randomNo);
            break
        }
    }
    let gnrtdNo = generatedNos[generatedNos.length-1] // grabbing the last number in the array.
    document.getElementById('avestaLetter').src=`img/avestaLetters/${gnrtdNo}.png` // update the avesta letter
    document.getElementById('transcription-answer').src=`img/transcpAnswers/${gnrtdNo}.png` // update the answer
    let allPronunAns = document.getElementsByClassName("pronunciation-answer");
    for (var i = 0; i < allPronunAns.length; ++i) { // this is setting ALL answers to hidden (instead of finding that 1 previous answer which was unhidden)
        allPronunAns[`${i}`].setAttribute('hidden', true);
    }
    
    // unhiding the correct answers & the headings henceforth
    document.getElementById(`ans${gnrtdNo}`).removeAttribute('hidden'); // this line is unhiding the pronuciation answer ONLY. 
    if (currentTimeout) clearTimeout(currentTimeout); // Exp1C So here basically it checks if anything exists inside variabe currentTimeout (which will be the unique ID of the timer last intiated in step A), and if yes, then it clears that timer using its ID. How cool are some reddit users huh?
    // KEEP THE ABOVE LINE HERE ONLY. Putting it at begininning of function causes unwanted behaviour, so techinally old timer needs to be cancelled JUST before new timer gets set.
    await new Promise(r => {
        currentTimeout = setTimeout(r, 2000)}); // Exp1A grabbing the Timeout ID here & putting it in currentTimeout
    let answers = document.getElementsByClassName('answers');
    for (var i = 0; i < 2; ++i) { // this line is unhiding Headings of Pronunciation & Transciprtion awa Transcption Answer.
         answers[`${i}`].removeAttribute('hidden');
    }
}   