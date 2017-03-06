// Detect if we are on a valid page
var host = window.location.host;
var path = window.location.pathname;

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
if (data.hasOwnProperty(host) && path.match(data[host].match)) {
    injectBanner(data[host].policy);
}
