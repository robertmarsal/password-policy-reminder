var xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', chrome.extension.getURL('/html/content.html'), true);
xmlHttp.send(null);

xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 'complete') {
        var inject = document.createElement('div');
        inject.innerHTML = xmlHttp.responseText
        document.body.insertBefore(inject, document.body.firstChild);
    }
}
