'use strict';

$(document).ready(init);

var $source;
var numDonuts;
var colors = ['aquamarine', 'darkorange','blueviolet', 'burlywood', 'cyan', 'gold', 'cornflowerblue', 'darkseagreen', 'aqua', 'peachpuff'];

function init(){
  $('#start').click(startGame);
  $('#reset').click(startGame);
  $('#towers').on('click', '.noSource', select);  //towers div has noSource vs hasSource
  $('.source').click(unSelect);   //class source versus potentialTarget
  $('.tower').on('click', '.target', dropDonut);
}

function pickUp(){

}

function dropDonut(){

}

function unSelect(){
  $(this).siblings().removeClass('potentialTarget');
  $(this).removeClass('source');
  $('#towers').removeClass('hasSource');
  $('#towers').addClass('noSource');
}
function select(){
  if ($(this).children().length === 0) {
    return;
  }
  $('#towers').removeClass('noSource');
  $('#towers').addClass('hasSource');
  $(this).siblings().addClass('potentialTarget');
  $(this).addClass('source');
}

function startGame(){
  if ($('.tower').children().length > 0){
    $('.tower').removeClass('source');
    $('.tower').children().remove();}
  numDonuts = 1 * $('#numDonuts').val();
  console.log(numDonuts + 1 - 4);
  var width;
  var position;
  for (var i = 1; i<= numDonuts; i++){
    var $div = $('<div>');
    width = 100 - (10 * i);
    var bottomMult = 7 * (i - 1) + 9;   //bottom multiplier
    var leftMult = 5 * (i - 1) + 2;   //left multiplier
    $div.css('width', width + '%');
    $div.css('bottom', bottomMult + '%');
    $div.css('left', leftMult + '%');
    $div.attr('id', 1 + numDonuts - i + '');
    $div.css('background-color', colors[i - 1]);
    $div.text('R' + (1 + numDonuts - i));
    $('#t1').prepend($div);
  }
  $('.tower').addClass('noSource');
}

function resetGame(){

}
