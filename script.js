document.onscroll = function() 
{
    if (document.documentElement.scrollHeight == window.scrollY)
        window.location.replace("youtube.com");
};