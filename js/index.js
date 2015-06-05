var music_url = new XMLHttpRequest();

music_url.open('get', 'http://www.reddit.com/r/Music/.json');
music_url.addEventListener('load', function () {

  var response = music_url.response;
  var responseData = JSON.parse(response);

  for (var i = 0; i < responseData.data.children.length; i++) {
    if (responseData.data.children[i].data.domain === "youtube.com") {
    var a = document.createElement('a');
    a.innerHTML = responseData.data.children[i].data.title;
    console.log(responseData.data.children[i]);
    a.href = '/show.html?link=' + responseData.data.children[i].data.permalink;

    var p = document.createElement('p');
    var div = document.getElementsByTagName('div')[0];
    p.appendChild(a);
    div.appendChild(p);
    }
  }
});
music_url.send(null);
