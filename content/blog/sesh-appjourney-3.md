---
title: How I rewrote Sesh (2.0)
category: appjourneys,pleb.exe,sesh
date: 2023-05-07
---

It's been almost 2 years since the last blog, and I have good updates now to show on sesh:
First, sesh has reached 2.0. It has been built to be almost completely modular, and it's been the most compressed since launch.
Last blog, I was talking about making it minimized, bundled and automate the build process. All the 3 things are now done.
I'm using webpack to build, minimize and automate the build. It's neat. The output always ends up in the dist folder, and I just need to upload a zip of that to the store when ready. I'm using webpack's watch mode to automate rebuilding.

# ui, themes:
Lately (meaning just the last month-ish) I have picked up design again, and its evident in sesh' latest form. The settings page has been redesigned, from ideas that appeared in my head since I had been thinking about design for a while. It has some interaction too, and some animations. It's what I wanted for now. It'll do for now. It might look like an overkill too, but that's alright.
I redid the movie posters theme, since the old one wasn't what I initially wanted to do. The current one isn't either, but it's cute.
There's a new google earth theme, that loads beautiful images from google earth on each new tab, and did not add much to the bundle size, since I only had to store the image ids (4 digit, some 1000 of theme) in an array, and set the src to google's own server. Neat.
I'm thinking of adding snake/tic tac toe/chess kinda themes that work offline, just because it sounds cool, but we'll see. I want to make them on canvas API, and that requires some time investment.
Oh, the next theme might actually be an analog clock; it's been on my mind for a while, so all that's left is design and figuring out how to implement it.

# code:
 I ditched lazy loading the css for each theme, since I couldn't figure out how to bundle them that way. Apart from that, there hasn't been much that went on, on the javascript side. Figuring out webpack was fun, and I'll try to find more ways to minimize the size of this code till I'm really happy about it.
 I switched styling to use SCSS, made possible with webpack, and since processing it is only a dev dependency, there's no overhead on performance, and the code is neater, and less prone to unintentional style changes.

# blog:
Overall, I'm planning to blog and document more of this as I progress; I think it's cool what I'm doing, and others might as well.
Not just sesh, but I'm planning to document and blog my journey through engineering and code; it's cool, and there's no downsides to it as far as I can see.