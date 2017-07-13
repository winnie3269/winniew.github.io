function post() {
  var comments = $('#comment').val();
  $('<h1>You posted: </h1>').appendTo('body');
  $('<p>' + comments + '</p>').appendTo('body');
}
function clear() {
  $('#comment').val('');
}
$('#submit').click(post);
$('#submit').click(clear);
