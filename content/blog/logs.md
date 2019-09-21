---
title: "My story of storing chat logs" 
date: 2018-11-18T13:41:14+01:00
draft: true
---
A few years ago I was feeling creative and thought an IRC chat bot would be a great output for my creativity.
IRC itself wasn't really that common anymore, but an up and coming streaming site named twitch.tv was using IRC to run the chat used by thousands of viewers.
I started writing on this bot with simple features like the current time or repeating what I would say if I issue the command to do so. 
I quickly realized that this wasn't going anywhere since lots of big bots already supported most of the feature I offered on mine and a lot more including online dashboard etc.

What was missing though was a good chat log solution for smaller channels. Logs are so important for purposes of moderation or are just nice to go back to if you wanna go back to that link you posted a few days ago.
Basically there were a very few chat log solutions back then. The only one I knew at the time was [OverRustleLogs](https://overrustlelogs.net). In 2018 OverRustleLogs are still going strong and doing a great job, but the problem was they only logged big channels.
For a streamers with just a few hundred viewers OverRustleLogs just wasn't available. 

So I thought maybe that's my chance, make my bot log the chat and impress the streamer, I was currently watching [twitch.tv/nmplol](https://twitch.tv/nmplol), hes a pretty funny dude check him out if you like.
I had never hosted for a real audience before besides some tiny personal portfolios. Twitch is a big site and even smaller streamers still have hundreds of people in chat. 
Back then I thought hosting it myself would be annoying and too much data transfered per month. So I got the bright idea to use other sites for my logs. 
I would still store the whole logs locally but upload them on demand to [pastebin](https://pastebin.com), I even got a pro account for that purpose and also asked pastebin support for better ratelimits and they happily said yes since I wasn't doing anything bad.

If you care how this looked in terms of code here it is: [https://github.com/gempir/gempbot/tree/365110d602a09d3e3cf92a42544870cfb6109a4a](https://github.com/gempir/gempbot/tree/365110d602a09d3e3cf92a42544870cfb6109a4a) a lot has developed over time in that repository
and you can tell by the commit count, I looked back a few years to find a point of time where I used the pastebin method, the rest of the code also does other random stuff chatbots usally do, but this story is not about that.

![pastebin log](/images/blog/pastebinlog.png)

Please excuse the language in the log, twitch chat can be a crazy place. 
The pastebin method was valid at the time because only a few people were requesting logs and I was only hosting it for 1 streamer basically.