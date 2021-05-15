---
title: How I made Sesh Part I
category: appjourneys,pleb.exe,sesh
date: 2021-05-09
---

This will be a series talking about my process making an app.
I quite like creating apps or utilities from scratch, and I felt documenting them would be a good way to check how short I have fallen with respect to the original vision behind it, and see common patterns, fallacies and all that jazz.
So let's get started with sesh, an extension I made for Google Chrome.
The link is [here]
The idea was to have a not too boring page on my Chrome everytime I open a new tab.
I'm a sucker for minimalism, dark mode, customization yada yada so I thought of putting my recently bubbling ui-ux experience to good use. And the results are not too bad for a first time project of a respectable scale.

# development wishlist
I wanted some things incorporated into the development process, as well as some customization options for the product.
For development: minimal size, so I opted to write the code in vanilla js/css. The current size stands at some 47kb. v3 of the app will be way lesser than this. I wanted to write modular code, so it could be split into files that could be later added, removed or tweaked on demand, you know...modular. I think I have half succeeded in it so far.
Another bigger thing was to take a top-down approach to decision making and coding. I tried to wean myself from dashing into selectors and callbacks without first understanding how the current work helped with the overall vision. That's pretty rare for me, since I always usually end up writing and rewriting and hammering my head when stuff doesn't work, and I don't know why I coded it in the first place.
The same approach was strived for in the ui-ux development pipeline too. Idea, requirements, (measly) research, wireframing and prototypes, yeah that's the way. You would cringe in disappointment if I showed you how the first prototype looked.

# ui-ux wishlist
Dark mode was first. Can't have white light blinding me at 4am.
Minimal content on screen. Wanted to create a soothing ui and minimalism was a priority.
A bookmarks browser with a tree view and useful functionality:
I wanted to have bookmarks search, a double-click-to-open-all-items, a right-click-to-open-random-item functionality right from day one. This idea was to be its own extension, but hey it finally saw the light of day this way.
Theming/customization:
Even I don't have the same mood on different days, so I wanted to make different types of themes for different minds. However, this hasn't met my expectations yet, and will be radically overhauled since the current themes look samey with different accent colors tacked on.

# the initial beta toil
It took about a month of late night planning and coding to get the initial version shipped finally. The most frustrating part of it all wasn't the development, but publishing it to the Chrome store; there's a lot of kinks that had to be straightened there, including an accidental removal of my extension by its algorithm.
However, the code after 0.1 wasn't what I originally envisioned, and there was a lot of room to optimize and clean up.
the 0.2 version fixed some of this, and the theming issues I mentioned before, and 0.3 will be leagues better.
The development itself had barely any struggle or roadblocks, nothing that couldn't be sorted out with google.

# mankind is introduced to sesh
That line pretty much sums up the anxiety I have when sharing something with people. Although my LinkedIn isn't super popular, this was the first time I was sharing something I had so dearly made with the network. What if people laugh at it? What if it looks so silly to the outside world? What if the design is too amateurish? were some of the recurrent thoughts haunting me. But these were just jitters that had to be disregarded, since the only way to get better at something is by seeing new perspectives, and feedback. What you do withe feedback is then upto you. So, I did it, and hey it had 7 subscribers that weren't me by the next week.
My friend Shameer even called me to discuss the app and offered some insightful thoughts and suggestions so that's a big win.

# 0.2 rises
I will write about 0.2 in the coming weeks, what it set out to do, and what it ended up doing. As I stated, making observations here I think is a great idea to show others or the future you, the ideas or the method or the events of how a product shaped up.


Simple minimal small, vanilla js etc
But themeable
Made ui, then how thought of all options ex. Custom message 
The toil to finish the first beta version. All code complexity, github and chrome store issues, packaging, making first version of the site, choosing and making themes. Not unique at all themes factoried it to make fillers. Ninja only version truly different. Initial release, LinkedIn post, shameer call. Felt very satisfied accomplished proud


[here]: http://www.reddit.com