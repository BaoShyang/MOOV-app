window.fn = {};

window.fn.open = function() {
  // id menu is index.html, the side splitter
  var menu = document.getElementById('menu');
  menu.open();
};

document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.id === 'result.html') {
    var content =
      '<b>Title:</b> ' +
      movieData.Title +
      '<br>' +
      '<b>Year:</b> ' +
      movieData.Year +
      '<br>' +
      '<b>Genre:</b> ' +
      movieData.Genre +
      '<br>' +
      '<b>Plot:</b> ' +
      movieData.Plot;
    $('#result').html(content);
    $('#movieposter').attr('src', movieData.Poster);
  }
});

// document.addEventListener('init', function(event) {
//   var page = event.target;

//   if (page.id === 'tabbardemo.html') {
//     page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//   }
// });

window.fn.load = function(page, mytitle) {
  var navigator = document.getElementById('myNavigator');
  var menu = document.getElementById('menu');
  data = { data: { title: mytitle }, animation: 'slide' };
  navigator.pushPage(page, data).then(menu.close.bind(menu));
};

function stopProgressCircle() {
  var progressCircle = document.getElementById('progress-circle');
  progressCircle.style.display = 'none';
  // $('.progress-circle').css('display', 'none');// JQuery
}

var movieData;
function searchMovie() {
  $('.progress-circular').css('visibility', 'visible');
  var name = document.getElementById('moviename').value;
  var url = 'http://www.omdbapi.com/?t=' + name + '&apikey=8e4b3eea';

  $.ajax(url).done(function(data) {
    if (!data.Title) {
      ons.notification.toast('Movie not found', { timeout: 2000 });
      return;
    }
    movieData = data;
    //  [0] means the Array, can refer to console log

    var navigator = document.getElementById('myNavigator');
    var menu = document.getElementById('menu');
    data = { data: { title: 'Search result' }, animation: 'slide' };
    navigator.pushPage('result.html', data).then(menu.close.bind(menu));
    $('.progress-circular').css('visibility', 'hidden');
  });
  $.ajax(url).fail(function() {
    ons.notification.toast('Connection Error', { timeout: 2000 });
  });
}

function clearInput() {
  document.getElementById('moviename').value = '';
  $('.progress-circular').css('visibility', 'hidden');
}
