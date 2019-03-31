# greensock-animation

Snippets of animations using Greensock. **Why didn't I know about this before?????**

<img src="https://ihatetomatoes.net/wp-content/uploads/2016/09/img_greensock.png" />

Before you start, it is necessary to install `yarn` on your system. Other dependecies required are  `gsap`  and  `parcel-bundler`, covered in the `package.json` file.

More info on Greensock: 
```
https://github.com/greensock/GreenSock-JS 
https://greensock.com/  
```

Basic Greensock animation commands: 

```
TweenMax.set()
TweenMax.to()
TweenMax.from()
TweenMax.fromTo()
TimelineMax()
  timeline.pause();
  timeline.to
  timeline.progress
```

Sample Animations found here:

- [x] Animate HTML tag ("h1" in this case)
- [x] Animate element with #id from CSS  
- [x] Animate element defined in JS file: rotate (clockwise on click) 
- [x] Animate element (#box3) on mouse click on timeline
- [x] Animate element on mouse wheel, in and out, with ease in 
- [x] Animate element (#box4) to position of mouse click 
- [x] Animate elements from random positions to position of mouse click 
- [x] Animate element (#box5) on mouse hover & out and mouse down & up 
- [x] Animate element (#box6) to transform perspective on click
- [x] Animate element (#box7) generate and tansform several elements in 3D
- [x] Animate element (#eggo) with Elastic and Yoyo effects

Great tips form this repository:

Manipulate DOM elements:
```
document.addEventListener() 
document.createElement("div") 
document.body.appendChild()
document.querySelector()
document.body.innerHTML
document.body.appendChild()
Array.from({length: 5}) //this is cool Javascript
```


Neat trick to create divs on page: 
```
const divs = Array.from({length: 5}, () => {
  document.createElement("div"); 
});
```

or also:
```
const box = document.createElement('div');
box.setAttribute('class', 'box5')
document.body.appendChild(box);
```

You can follow free videos tutorial here: 
`https://egghead.io/courses/create-amazing-animations-with-greensock`

And here: 
`https://greensock.com/learning`
