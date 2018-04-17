document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("button").onclick = function() {
        let request;
        try {
            request = new XMLHttpRequest();
        }
        catch (e) {
            try {
                request = new ActiveXObject('Msxml2.XMLHTTP');
            }
            catch (e) {
                try {
                    request = new ActiveXObject('Microsoft.XMLHTTP');
                } 
                catch (e) {
                    alert('Your browser broke!');
                    return false;
                }
            }
        }

        let q = 'heart gifs';
        request.open('GET', `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${q}`, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                data = JSON.parse(request.responseText).data.image_url;
                document.getElementById("gif").innerHTML = 
                `<center><img src="${data}" title="GIF"></center>`;
            } else {
                console.log('Reached giphy, but API returned an error.');
            }
        };

        request.onerror = function() {
            console.log('Connection error.');
        };

        request.send();
    };
});