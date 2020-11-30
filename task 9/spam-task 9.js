var message = "Hi"; //spam message 
var interval = 20 ; // in seconds 
var count = 20 ; //number of times to send
var notifyInterval = 5 ; //notify 
var i = 0 ;
var timer = setInterval(function(){
	document.getElementsByClassName('composer_rich_textarea')[0].innerHTML = message;
	$('.im_submit').trigger('mousedown');	
	i++;
	if( i  == count )
	clearInterval(timer);
	if( i % notifyInterval == 0)
	console.log(i + ' MESSAGES SENT');
} , interval*100 ) ;
