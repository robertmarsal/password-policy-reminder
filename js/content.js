// Detect if we are on a valid page
var content = {
    'https://www.facebook.com/login.php': 'a combination of at least six numbers, letters and punctuation marks (like ! and &)',
    'https://accounts.google.com/login': 'at least 8 characters',
}

var url = window.location.href;

function injectBanner(policy) {
    // Inject the banner
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', chrome.extension.getURL('/html/content.html'), true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == 'complete') {
            var inject = document.createElement('div');
            inject.innerHTML = xmlHttp.responseText
            document.body.insertBefore(inject, document.body.firstChild);

            // Set the password policy
            document.getElementById('ppr-banner-policy').innerHTML = policy;
        }
    }
}

// If we are not on a valid page stop here
if (content.hasOwnProperty(url)) {
    injectBanner(content[url]);
}
