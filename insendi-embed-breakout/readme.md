# Insendi embed breakout

Used to grab the `src` of Dropbox/Panopto `iframe`s on the [Insendi platform](https://www.insendi.com/platform) and navigate to that page directly, to work around Safari's cross-site cookie blocking (without disabling it as suggested, since it's still useful).

Currently WIP for Dropbox, since the actual `iframe` is nested within a wrapper `iframe`, hence resulting in origin-security errors as the bookmarklet running on the [`imperial.insendi.com`](https://imperial.insendi.com/) domain tries to access the Dropbox wrapper on [`iframed.insendi.com`](https://iframed.insendi.com/).
