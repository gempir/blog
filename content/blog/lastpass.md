---
title: "Why you should think twice about using LastPass"
date: 2018-11-03T12:45:39+01:00
draft: false
comments: true
---
As a small disclaimer: I am a PHP developer in my day job and I love PHP. This is in no way a criticism of PHP.

I wanted to start using a password manager, since i’ve heard a lot about them and a lot of good things. The first one coming to my mind was LastPass because I have heard it somewhere on reddit or so before. After creating an account, I wanted to add 2-Factor-Authentication, because losing my LastPass account would equal losing every password of mine. I got redirected to [https://lastpass.com/update_phone.php](https://lastpass.com/update_phone.php)

Red lights flashed in my head. I get redirected to a php file in the root of the webserver? The webserver doesn’t even bother rewriting the url so that maybe the url could look like `/update_phone`. Leaving out the .php will not work either.

This is a big indicator for some really ugly and old PHP code. A friend of mine played around a bit after I joked `require(‘header.php’);` and found [https://lastpass.com/header.php](https://lastpass.com/header.php) which is literally the header of their main site.

PHP can be a beautiful language in 2016, but sites like these give PHP such a bad reputation. How am I supposed to trust a site with all my passwords that writes code like this? These might not be big security issues on the first look, but I’m willing to bet that a company writing this kind of code, will have security issues somewhere.

This isn’t intended as a witch hunt, but maybe as an impulse to change some things. I apologize for my terrible style of writing, I’m not a writer, I’m a software developer but I wanted to vent my frustration or rather my release concerns somewhere.

*Ironically, this where you can delete your account: [https://lastpass.com/delete_account.php](https://lastpass.com/delete_account.php)*

HackerNews user “DCoder” gives a great explanation why this might be alarming.

> They reflect poorly on the Lastpass *website* , not necessarily on their crypto.
> Judging from the URLs, it seems that each action is handled by a different standalone script. This is very common in legacy code bases, and it *typically* (not always) means that:
> 1) all those scripts need the same bootstrapping boilerplate copy-pasted into them, which is a maintenance nightmare. Even if you simplify it to one or two lines of boilerplate that includes a central boostrap file (or use some configuration magic to automatically run an additional script before the script you requested), it’s still worse than having a single centralized entry point that handles routing, auth, and so on. There’s always a chance that someone forgets or botches an auth check in one of these files and it goes unnoticed.
> 2) you will probably be able to make an HTTP request directly to some file that was not intended as an entry point (the author mentions header.php — this is a perfect example), and then who knows what happens, because you never planned for this and your bootstrap code doesn’t run and possibly variables expected by that script are not defined, or errors thrown by the script are not handled by a pretty error handler… kinda like doing an assembler jmp into the middle of another function, after any sanity checks it might have had.
> 3) where there’s legacy, there’s most likely outdated practices like SQL queries from string concatenation or unescaped HTML output.
> Front Controller pattern [1] is a recommended alternative.
> [1] [https://en.wikipedia.org/wiki/Front_controller](https://en.wikipedia.org/wiki/Front_controller)
