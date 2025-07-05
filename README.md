# new-tab

This page was meant as a catch-all for opening a new tab, it would be an easily accessible place for bookmarks and also offer a flexible search bar that could go to different pages depending on user input (shortcuts). However, I like using chrome's omnibox (search bar) for lots of things, it has an autocomplete that pulls from both history and bookmarks, something that a website just can't do.

I wanted the new tab to focus directly onto the text box, to allow for typing immediately. However, it was a little bit slow (sometimes page load could take a second and miss the first few keystrokes). Also, it didn't have the same autofill capabilities that chrome has.

I considered making it in the omnibox, and then having to tab into the page, however, it would require clicking tab twice to get past the chrome bookmarks bar. It wasn't a good solution. If I was going to use this it had to be super streamlined, and this wasn't it.

I think I got the wrong architecture for this. When I discovered you could make a new tab load any url, I thought it would be a great opportunity. But I think a chrome extensions is a much better idea.

I am now using Google's ' site search', which works pretty well. I can come up with shortcuts to quickly go to a site, and I like this a lot. (check it out at `chrome://settings/searchEngines`).

Maybe I'll make a chrome extension for this, but no plans as of yet.
