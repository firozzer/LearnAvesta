let isAnimating = false; // bool to prevent competing animations (clicking a photo before the previous photo has finished moving)

// FLIP technique animation (First Last Invert Play)
const flip = (avestaLetter, settings) => {
	// calculate the difference in position between where the avestaLetter  started and where it ended (First - Last = Invert)
	const invert = {
		x: settings.first.left - settings.last.left,
		y: settings.first.top - settings.last.top
	};

	animation = avestaLetter.animate(  //Exp1b - here only the animation is happening, you can put this thing in a settemout and see for yourself. The  Polyfill web-animations.min.js library is needed to be imported in the HTML for this .animate() to work in Safari/other lame browsers. THese browsers can't natively do .animate() so this library expands their capabiity to do it.
		[
			{ transform: `scale(1,1) translate(${invert.x}px, ${invert.y}px)` }, 
			{ transform: `scale(1,1) translate(0, 0)` }, // Exp1c you can see, at end of animation, it is coming back to 0,0 original position. So that means the original movement was done beforehand only.
		],
		{
			duration: 300,
			easing: "ease-out"
		}
	);
	
	animation.onfinish = () => (isAnimating = false);

	// // do the animation (Play) from the original (Invert) position to the final current position
	// try { // this fails on Safari as Safari doesn't have animate function, so using the caught pollyfill https://github.com/web-animations/web-animations-js fallback for Safari/other unsupoorted browsers.
	// 	console.log("Doing animation");
	// 	// akjdflkj("kljdflk") //just to trial and error the below catch
	// 	animation = photo.animate(  // here only the animation is happening, you can put this thing in a settemout and see for yourself.
	// 		[
	// 			{ transform: `scale(1,1) translate(${invert.x}px, ${invert.y}px)` }, 
	// 			{ transform: `scale(1,1) translate(0, 0)` }, //  you can see, at end of animation, it is coming back to 0,0 original position. So that means the original movement was done beforehand only.
	// 		],
	// 		{
	// 			duration: 100,
	// 			easing: "ease"
	// 		}
	// 	);
	// }
	// catch (err) {
	// 	console.log(`Animation failed. Error: ${err}`)
	// 	photo.animate({
	// 		// opacity: [0, 1],
	// 		transform: [`scale(1) translate(${invert.x}px, ${invert.y}px)`, `scale(1) translate(0, 0)`],
	// 	  }, {
	// 		// direction: 'alternate',
	// 		duration: 100,
	// 		easing: "ease"
	// 		// iterations: Infinity,
	// 	});
	// }
	

	// // signify that animation has completed. leaving this try catch here as MAYBE it might get error on onfinish as well.
	// try {
	// 	animation.onfinish = () => (isAnimating = false);
	// } 
	// catch(err) {
	// 	console.log(`Safari detected (iGuess). Error: ${err}`);
	// 	setTimeout(() => {
	// 		isAnimating = false;
	// 	}, 130);
	// }
};	

// move the photo from the origin to the destination
const move = (avestaLetter, animationInitiatedByShowCorrectAnswer=false) => {
	const id = Math.random(); // random number used to link the avestaLetter to its container (used in the putback function)
	const container = avestaLetter.closest(".thirdSectionElements"); // the selected avestaLetter's container element
	const siblings = [...destination.querySelectorAll(".AvestaLetters")].filter(
		(sib) => sib !== avestaLetter
	); // find the other avestaLetter elements in the destination so we can animate them when the selected avestaLetter is inserted

	let rect = avestaLetter.getBoundingClientRect(); // selected avestaLetter's DOM rect
	let first, last; // containers for the initial and final (First and Last) positions of the element

	isAnimating = true; //signify an animation has started (or is about to)

	// give both the container and the avestaLetter a data-id (used in the putback function) (using data-id and not a var because you can query for a data-attribute)
	container.dataset.id = id;
	avestaLetter.dataset.id = id;

	// assign the initial top/left px values of the avestaLetter -> move the avestaLetter to the destination -> recaculate the the avestaLetter's DOM rect in new position -> assign the final top/left values
	first = { top: rect.top, left: rect.left };

	// get the initial top/left px values for each sibling
	siblings.forEach((sib) => {
		let rect = sib.getBoundingClientRect();
		// I am assigning this value as a property of the element object because trying to keep a
		// variable linked to this element inside a loop that we can use later  in a different loop
		// would be a real big pain. Best practice is not to modify objects/classes you don't own,
		// so to be safe and avoid overwriting an existing property value (ele.first or ele.last)
		// I am prefixing the property name with __
		sib.__first = { top: rect.top, left: rect.left };
	});

	destination.insertAdjacentElement("beforeend", avestaLetter); //Exp1a - the element is moved to the new position here only. Then when the animation runs in (b), that just moves it back & does it in a cool way. This original movement happens in a jiffy so you don't notice it.
	rect = avestaLetter.getBoundingClientRect();
	last = { top: rect.top, left: rect.left };

	// get the final top/left px values for each sibling
	siblings.forEach((sib) => {
		let rect = sib.getBoundingClientRect();
		sib.__last = { top: rect.top, left: rect.left };
	});

	// send avestaLetter, and its caculated vales to the flip funciton
	flip(avestaLetter, { first, last });
	if (animationInitiatedByShowCorrectAnswer === true) return; // if user clicks "showAnswer" then sibling animation to be skipped as it causes weird animation.
	siblings.forEach((sib) => flip(sib, { first: sib.__first, last: sib.__last })); // animate the siblings
};

const putback = (avestaLetter) => {
	const id = avestaLetter.dataset.id; // get the ID of the current avestaLetter
	const container = origin.querySelector(`[data-id="${id}"]`); // query for the container w/ the matching ID
	const siblings = [...destination.querySelectorAll(".AvestaLetters")].filter(
		(sib) => sib !== avestaLetter
	); // find the other avestaLetter elements in the destination so we can animate them when the selected avestaLetter is put back

	let rect = avestaLetter.getBoundingClientRect(); // selected avestaLetter's DOM rect
	let first, last; // containers for the initial and final (First and Last) positions of the element

	isAnimating = true; //signify an animation has started (or is about to)

	first = { top: rect.top, left: rect.left }; // assign the initial top/left px values

	// get the initial top/left px values for each sibling
	siblings.forEach((sib) => {
		let rect = sib.getBoundingClientRect();
		// I am assigning this value as a property of the element object because trying to keep a
		// variable linked to this element inside a loop that we can use later  in a different loop
		// would be a real big pain. Best practice is not to modify objects/classes you don't own,
		// so to be safe and avoid overwriting an existing property value (ele.first or ele.last)
		// I am prefixing the property name with __
		sib.__first = { top: rect.top, left: rect.left };
	});

	container.insertAdjacentElement("beforeend", avestaLetter); //move the avestaLetter from the destination back to its original container

	rect = avestaLetter.getBoundingClientRect(); // selected avestaLetter's new DOM rect
	last = { top: rect.top, left: rect.left }; // assign the final top/left px values

	// get the final top/left px values for each sibling
	siblings.forEach((sib) => {
		let rect = sib.getBoundingClientRect();
		sib.__last = { top: rect.top, left: rect.left };
	});

	flip(avestaLetter, { first, last }); // animate the avestaLetter

	siblings.forEach((sib) => flip(sib, { first: sib.__first, last: sib.__last })); // animate the siblings

	// clean up the junk we added during the move function()
	container.style.height = "";
	container.style.width = "";
	container.removeAttribute("data-id");
	avestaLetter.removeAttribute("data-id");
};

//add a conditional eventListener to each photo

const origin = document.querySelector("#thirdSection"); // container where photos initially start
const destination = document.querySelector("#secondSection"); // container where selected photos go