---
title: "Building a custom mechanical keyboard"
date: 2021-02-17
draft: true
comments: true
---
Building a custom keyboard can be a fun hobby and makes it possible to create something you want after your specifications.
The hardest part of all of this is sourcing the parts. Since I live in germany, I can only write about what sourcing parts is like in germany.

Great sources are 

- [AliExpress](https://aliexpress.com) - cheap and broad selection, good source for keycap set clones
- [KBDFans](https://kbdfans.com) - great to get started, my first keyboard was just build with kbdfans
- [/r/mechmarket](https://reddit.com/r/mechmarket) - you can find rare or high quality parts on here sometimes

First you'll have to figure out what layout you want. I went with 60% because I already own a 75% one and I wanted to try something smaller.
But I can't really handle a layout without arrow keys, so I went with a bit more unusual 60% layout, the MelGeek MJ64.

![MelGeek MJ64 Layout](/images/blog/building-keyboard/layout.png)

The MelGeek MJ64 supports 

- Hot-swap switch sockets
- RGB backlighting
- QMK

Hot swap means you won't have to do any soldering. 
The switches just get plugged into the PCB and can get easily removed or swapped with other switches.

Soldering isn't very hard though and some prefer it even because the switches are more stable and personally I think it's rather rare needing to swap out your switches.
So don't be afraid to pick a PCB that needs soldering if you have the tools.

RGB backlighting the keys have a little RGB LED that can be controlled via software. There is also RGB underglow which will just have a few leds pointing to the bottom,
some cases have transparent parts to give this a nice effect.

QMK is one of the biggest features for me of a custom keyboard and I'll go into detail about it later, for now just make sure your PCB supports it, though almost all do.

The PCB is only compatible to a select few cases, some cases are so custom they even come with their own custom PCB. My chosen PCB is compatible with all GH60 cases.
The material here decides the price point, if you want aluminimum you'll be paying a lot more than something more simple than plastic. Some Plastic cases can be as low as $12 while
a good aluminum case is more like $80.

Just browse AliExpress for GH60 cases to get an idea what kind of materials are available, maybe you'll also find something on /r/mechmarket with patience. 

I chose the TOFU60 case which is compatible with GH60.

![TOFU60](/images/blog/building-keyboard/tofu60.png)

Also compatible with PCB and case the plate must be. I haven't build a keyboard without a plate before, it's definetely highly recommended because it brings stability to the whole board.
And most switches are plate mount. PCB mount is more rare. 

Options are aluminimum, brass, plastic or even carbon fiber. Where aluminium is definetely the most common, brass is stiffer and heavier, most don't like the more stiff feeling.
I'll stick with something simple out of aluminium. Make sure your plate is compatible with the layout you are planning to do.

