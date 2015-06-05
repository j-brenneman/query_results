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
    p.appendChild(a);
    document.body.appendChild(p);
    }
  }
});
music_url.send(null);


// 'http://www.reddit.com/r/Music/comments/38icdz/mickey_avalon_here_ask_me_almost_anything/.json'
// new XHR
// open XHR 'get', url??
// candidate_totals . when you load .. (addEventListener)
