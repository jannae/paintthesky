#Paint the Sky

Paint the sky is a web-based concept (potentially teaching assistance) environment for a planetarium space utilizing touch devices, which allows for students (designed for older kids) to create and interact with a planetary, galactic canvas space in a variety of ways.

##Full Project Concept

The "home-base" desktop browser will access the main "canvas" for projecting on the planetarium dome. When there is no one else accessing the site, the canvas is blank. Once a student logs in to "Paint the Sky," a toolbar is displayed across the top of their Safari iOS browser, and they can choose which element (stars, planets, galaxies, nebulae, etc.), with varying attributes (color, size, animation) to add to the sky. Shooting stars will shoot across the screen, planets will spin, galaxies will consume nearby stars and planets to grow themselves to the point of eventually disappearing from view, nebulae glide and morph their sparkly way slowly across the canvas.

Once their brush of choice is selected, the remainder of the canvas on the touch device is utilized for painting. A quick touch-release will simply deposit the item chosen on the canvas, and it will wander and grow/die with time unrelated to user interaction. A touch-and-hold approach will afford the student some control over the item's placement on the canvas, allowing it to be dragged, leaving behind a trail of colorful sparkles in it's wake until released to be left to it's own devices.

##Initial Prototype
The initial prototype was constructed as a demonstration of proof-of-concept for The Nature of Code: Cosmos Edition. The prototype enables a student to log in to the Paint the Sky website, touch the screen, and "draw" sparkly, colorful starry objects on the planetarium sky. The objects can be controlled as long as the touch event sustains, but once released, the object goes on autopilot for the remainder of it's lifecycle. With enough users logged into the site, the sky becomes quite an active canvas.

##Technologies

Fully web-based environment.

* Node.js
* Socket.io
* Javascript (jQuery)
* d3.js
* Processing.js
* HTML5 canvas
* iPhone/iPad Safari iOS touch event API
