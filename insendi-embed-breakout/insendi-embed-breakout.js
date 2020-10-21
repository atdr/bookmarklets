javascript:try{
    location.href = document.querySelector('iframe[src^="https://iframed.insendi.com/IMPERIAL/DropBoxEmbed"]').contentDocument.querySelector('iframe[src^="https://www.dropbox.com"]').getAttribute('src');
} catch (e) {
    location.href = document.querySelector('iframe[src^="https://imperial.cloud.panopto.eu/Panopto/Pages/EmbeddedList.aspx"]').getAttribute('src');
}
