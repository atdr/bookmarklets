# Picture-in-Picture bookmarklet for Safari

A simple bookmarklet that enables picture-in-picture for videos across the web, using [`webkitSetPresentationMode`](https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls).

## Compatibility

Incorporates 2 methods for finding the `video` tag:

- in the main document (YouTube, Netflix, most sites)
- inside the first `iframe` (BBC iPlayer)

## Tips

For sites with multiple players (like [Panopto](https://www.panopto.com)), modify the index in `document.getElementsByTagName('video')[0]` to target a specific player.