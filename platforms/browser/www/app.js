window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

// window.fn.load = function(page) {
//   var content = document.getElementById('content');
//   var menu = document.getElementById('menu');
//   content.load(page).then(menu.close.bind(menu));
// };

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'tabbardemo.html') {
    // ons.notification.toast('settings.html...', { timeout: 2000 });
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

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
