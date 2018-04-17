document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("button").onclick = function() {
        q = 'heart gifs';

        request = new XMLHttpRequest;
        request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

        request.onload = function() {
            if (request.status >= 200 & request.status < 400) {
                data = JSON.parse(request.responseText).data.image_url;
                document.getElementById("gif").innerHTML = 
                '<center><img src="'+data+'" title="GIF"></center>';
            } else {
                console.log('reached giphy, but API returned an error');
            }
        };

        request.onerror = function() {
            console.log('connection error');
        };

        request.send();
    };
});