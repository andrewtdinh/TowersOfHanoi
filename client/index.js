'use strict';

$(document).ready(init);

var numDonuts;
var colors = ['aquamarine', 'darkorange','blueviolet', 'burlywood', 'cyan', 'gold', 'cornflowerblue', 'darkseagreen', 'aqua', 'peachpuff'];

function init(){
  $('#start').click(startGame);
  $('#reset').click(startGame);
  $('#towers').on('click', '.noSource', select);  //tower div has noSource vs source and potentialTarget
  $('#towers').on('click', '.source', unSelect);   //class source versus potentialTarget
}

function transferDonut($target){
  if ($target.children().length === 0) {
    var $topRing = $('.source').children()[0];  //this is ordinary div
    var $tempRing = $topRing;
    $($topRing).remove();
    $($tempRing).css('bottom', '9%');
    $target.prepend($tempRing);
    $('.tower').removeClass('source'); 
    $('.tower').addClass('noSource');
  }
  else{
    debugger;
    var topTargetDonutSize = $($(this).children()[0]).attr('id') * 1;
    var movingDonutSize = $($('.source').children()[0]).attr('id') * 1;
    if (movingDonutSize > topTargetDonutSize) {
      return;
    }
    else {
      var $topRing = $($('.source').children()[0]);
      //var $tempRing = $topRing;
      $topRing.detach();
      var existingRings = $(this).children().length;
      var bottomMult = 7 * (existingRings - 1) + 9;
      $($topRing).css('bottom', bottomMult + '%');
      $($(this)).prepend($topRing);
      $('.tower').removeClass('source'); // potentialTarget');
      $('.tower').addClass('noSource');
    }
  }
}

function unSelect(){
  $(this).removeClass('source');
  $('.tower').addClass('noSource');
}

function select(){
  if ($('.tower').hasClass('source')){
    transferDonut($(this));
  }
  else if ($(this).children().length === 0) {
    return;
  }
  else {
    $(this).removeClass('noSource');
    $(this).siblings().removeClass('source');
    $(this).addClass('source');
  }
}

function startGame(){
  if ($('.tower').children().length > 0){
    $('.tower').children().remove();}
  numDonuts = 1 * $('#numDonuts').val();
  var width;
  // var position;
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
  $('.tower').removeClass('source');
  $('.tower').addClass('noSource');
}
