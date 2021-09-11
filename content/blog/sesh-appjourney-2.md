---
title: How I made Sesh (0.3)
category: appjourneys,pleb.exe,sesh
date: 2021-09-11
---

Sesh 0.3 is sesh reconstructed from the ground up, both design, and engineering. With sesh0.2, I only managed to add one light theme, and one more dark theme (which doesn’t look good as I now see it).
The motivation is for sesh0.3 was two fold:
1. Engineering - coding the app from the ground up, with reusability and modularity in mind.
2. Design - Making the customization simple, diverse and modular.

Let’s dig a little deeper into what I mean, but I’ll first detail what sesh is supposed to be, again:
# Sesh - Beautiful new tab
Customise your new tab pages to be beautiful, and minimal.
Sesh can be customized in three ways: theme , content, and utilities.
*Themes:* Vanilla (which is essentially barebones sesh from 0.2), ninja, film reel (a new theme which loads a random movie poster from a curated list, and has a fancy animation when you hover on the poster, zen (a new theme which loads soothing colours and animations)
Content: date-time, nihilist quotes, bookmarks, a custom user message, or nothing.
Utilities: showing bookmarks shortcut on screen, showing pinned bookmarks on screen. I eventually want to have scripts in utilities, that run every time a new tab is opened.

# Design, deeper -
I wanted to do away with the shabby and amateur design from the previous versions. That came first. Not everything needs to be bold and big. Almost every component of sesh went through a fundamental redesign. And then I ditched all the themes from before and designed 2 new ones. I have a lot of ideas for the zen theme, and will keep adding new themes if and when they strike as being worthy of addition.

# Engineering, deeper -
The thought that drove me to redo all the code from scratch was to make sesh entirely modular. Each theme, each content, and each utility needs to be plug n play. This makes it really easy to add a new feature/theme to sesh. The engineering part is almost done. Another task accomplished with this version was reusability. Common functions were turned into hooks so other parts, and new features can use them with just one line of code. One task that I’ve been contemplating, but haven’t started is bundling-minimizing-automating the build process.
The aim is to minimise the js, html, css and put them in the build folder, to reap dividends
In app size. I’ve started looking at the best and reliable ways to do this. Webpack/gulp look like the best options so far.

Everything being done in this version will make sesh easy to update and deploy in the future, and at the same time I can use this framework for future extensions, so that’s neat.

