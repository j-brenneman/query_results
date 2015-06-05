var query_string = document.location.search;
var url_object = {};
var query_parse = function(query_string) {
  var url_string = query_string;
  if (url_string === null) {
      return url_object;
  } else {
  var url_array = url_string.replace("?", "");
      url_array = url_array.split("&");
  for(i = 0; i < url_array.length; i ++) {
    var url_keys = url_array[i].split("=");
        url_object[url_keys[0]] = url_keys[1];
  }
  return url_object;
  }
};
query_parse(query_string);

var music_show_url = new XMLHttpRequest();
    music_show_url.open('get', 'http://www.reddit.com' + url_object.link + '.json');

music_show_url.addEventListener('load', function () {
  var response = music_show_url.response;
  var responseData = JSON.parse(response);

  var youtube_id = responseData[0].data.children[0].data.secure_media.oembed.url;
  var youtube_url = youtube_id.replace('watch?v=', 'v/');
  var iframe = document.createElement('iframe');
  iframe.src = youtube_url;
  iframe.height = '320';
  iframe.width = '600';
  document.body.appendChild(iframe);

  var p = document.createElement('p');
  p.innerHTML = responseData[0].data.children[0].data.secure_media.oembed.description;
  document.body.appendChild(p);
});
music_show_url.send(null);
