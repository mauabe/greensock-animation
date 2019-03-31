import { TweenMax, TimelineMax, Elastic } from "gsap";

// document.body.innerHTML = `<h1> Hi</h1>`;

/*
//ANIMATE TAG H1
TweenMax.to('h1', 2, { x: 300 })

//ANIMATE id-box from css
TweenMax.set('#box', { xPercent: -50, yPercent: -50 })
document.addEventListener('click', event => {
  const { clientX, clientY } = event;
  TweenMax.to('#box', 1, { x: clientX, y: clientY})
});
*/

/*
// ANIMATE BOX #2 DEFINED HERE GREEN
TweenMax.set('#box2', {
  backgroundColor: "green",
  width: '50px', 
  height: '50px',
  x: '50px',
  y: '50px'
});

ROTATE BOX 30deg ON CLICK
document.addEventListener('click', () => {
  TweenMax.to('#box2', .5, {
    rotation: '+= 30'
  })
});
*/

/*
// CREATE BOX 3 RED
TweenMax.set('#box3', {
  backgroundColor: "red",
  width: '50px', 
  height: '50px',
  x: '50px',
  y: '100px',
});

const timeline = new TimelineMax({repeat: -1});

timeline.pause();

timeline.to('#box3', 0.5, {x: 100});
timeline.to('#box3', 0.5, {y: 150});
timeline.to('#box3', 0.5, {x: 50});
timeline.to('#box3', 0.5, {y: 100});

document
  .querySelector('#box3')
  .addEventListener('click', () => {
    // timeline.resume()
    if(timeline.isActive()){
      timeline.pause()
    } else { 
      timeline.resume()
    }
});


// USE MOUSE WHEEL TO CONTROL ANIMATION
document.addEventListener('wheel', () => {
  timeline.progress(timeline.progress() + 0.1)
});

USE MOUSE WHEEL BACKWARDS
document.addEventListener('wheel', event => {
  if(event.wheelDelta >0){
    // timeline.progress(timeline.progress() + 0.1)
    TweenMax.to(timeline, .25, {progress: '+=0.1'})
  } else {
    // timeline.progress(timeline.progress() - 0.1)
    TweenMax.to(timeline, .25, {progress: '-=0.1'})
  }
});
*/

/*
// CREATE BOX 4  YELLOW
TweenMax.set('#box4', {
  backgroundColor: "yellow",
  width: '50px', 
  height: '50px',
  x: '150px',
  y: '150px',
  xPercent: '-50',
  yPercent: '-50'
})

document.addEventListener("click", event => {
  const { x, y } = event;
  TweenMax.fromTo('#box4', 1, { x, y}, {x: 200, y: 200})
});
*/

/*
// CREATE ARRAY OF DIVS AND ANIMATE 
const divs = Array.from({length: 5}, () => {
  document.createElement("div"); 
});
console.log('divs created:', divs);

// const divs = document.createDocumentFragment();
    // for (let i=0; i<10; i++) {
    //     divs.appendChild(document.createElement("div"));
    // }
    // document.body.appendChild(divs);

divs.forEach(div => {
  TweenMax.set(div, {
    position: 'absolute',
    x: `${Math.random() * window.innerWidth}px`,
    y: `${Math.random() * window.innerHeight}px`,
    width: 20,
    height: 20,
    backgroundColor: "green",
    border: '3px solid black'
  });
  document.body.appendChild(div);
});

TweenMax.to(divs, 5, {x: 100, y: 100});

document.addEventListener('click', event => {
  // const { x, y } = event;
  // TweenMax.killTweensOf(event.target);
  TweenMax.killAll(true);
});
*/
/*
//  ADD ANIMATION ON MOUSE EVENT
const box = document.createElement('div');
box.setAttribute('class', 'box5')
document.body.appendChild(box);

box.addEventListener("mouseover", () => {
  TweenMax.to(box, .25, {className: '+=hover'})
});

box.addEventListener("mouseout", () => {
  TweenMax.to(box, .25, {className: '-=hover'})
});

box.addEventListener("mousedown", () => {
  TweenMax.to(box, .25, {className: '+=down'})
});

box.addEventListener("mouseup", () => {
  TweenMax.to(box, .25, {className: '-=down'})
});
*/
/*
//  ADD ANIMATION ON MOUSE EVENT with PERSPECTIVE
const box6 = document.createElement('div');
box6.setAttribute('class', 'box6')
document.body.appendChild(box6);

TweenMax.set(box6, {transformPerspective: 200});

box6.addEventListener('click', () => {
  TweenMax.to(box6, 1, {rotationY: '+=180'})
});
*/

/*
//  ADD ANIMATION ON MOUSE EVENT with PERSPECTIVE
document.addEventListener("mouseover", event => {
  TweenMax.set(document.body, {perspective: 200});
  TweenMax.set(document.body, {perspective: event.x});

});

Array.from({length: 30})
  .map(()=> document.createElement('div'))
  .forEach(box7 => {
    box7.setAttribute('class', 'box7')
    document.body.appendChild(box7)

    // box7.addEventListener('click', () => {
    //   if(!TweenMax.isTweening(box7)){
    //     TweenMax.to(box7, 1, {rotationY: '+=180'})
    //   }

    TweenMax.set(box7, {rotationY: '30'})
  })
  */

// ANIMATE as ELASTIC & YOYO
const eggo = document.querySelector('#eggo');

TweenMax.to(eggo, 1.75, {
  scale: 1.25,
  repeat: -1, //negative value = infinite times
  yoyo: true,
  ease: Elastic.easeInOut
})
