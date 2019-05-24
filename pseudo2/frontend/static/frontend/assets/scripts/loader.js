var codeArray = [
  {
  	code: "Loading...",
    delay: 0
  }
]

var codeSequence = [];

$.each(codeArray, function(index, value) {
	var element = $('<p></p>');
	$('#loader').append(element);
  element.html(value.code);
	var elementLength = element.text().length;

  codeSequence.push({
    e: element,
    p: { width: elementLength + 'ch' },
    o: { easing: [elementLength], duration: elementLength * 40, delay: value.delay,
      begin: function() {
      	$('#codeSection').find('p').removeClass('cursor');
        $(element).addClass('cursor');
			}
    }
  })
});

$.Velocity.RunSequence(codeSequence);
