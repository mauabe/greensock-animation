// document.body.innerHTML = `<h1> Hi</h1>`;
import { TweenMax, TimelineMax } from "gsap";
//ANIMATE TAG H1
// TweenMax.to('h1', 2, { x: 300 })

//ANIMATE id-box from css
// TweenMax.set('#box', { xPercent: -50, yPercent: -50 })
// document.addEventListener('click', event => {
//   const { clientX, clientY } = event;
//   TweenMax.to('#box', 1, { x: clientX, y: clientY})
// });

// ANIMATE BOX #2 DEFINED HERE
// TweenMax.set('#box2', {
//   backgroundColor: "green",
//   width: '50px', 
//   height: '50px',
//   x: '50px',
//   y: '50px'
// });

//ROTATE BOX 30deg ON CLICK
// document.addEventListener('click', () => {
//   TweenMax.to('#box2', .5, {
//     rotation: '+= 30'
//   })
// });

// CREATE BOX 3
TweenMax.set('#box3', {
  backgroundColor: "red",
  width: '50px', 
  height: '50px',
  x: '50px',
  y: '100px'
});

const timeline = new TimelineMax({repeat: -1});

timeline.pause();

timeline.to('#box3', .5, {x: 100});
timeline.to('#box3', .5, {y: 150});
timeline.to('#box3', .5, {x: 50});
timeline.to('#box3', .5, {y: 100});

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
// document.addEventListener('wheel', () => {
//   timeline.progress(timeline.progress() + 0.1)
// });

// USE MOUSE WHEEL BACKWARDS
document.addEventListener('wheel', event => {
  if(event.wheelDelta >0){
    // timeline.progress(timeline.progress() + 0.1)
    TweenMax.to(timeline, .25, {progress: '+=0.1'})
  } else {
    // timeline.progress(timeline.progress() - 0.1)
    TweenMax.to(timeline, .25, {progress: '-=0.1'})

  }
});



