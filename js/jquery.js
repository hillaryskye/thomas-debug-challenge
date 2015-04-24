var bugSquashed = false;

$(document).ready(function(){
    $("#squashedBug").hide();
    $("#cantClickMe").show();
    $("#clickMe").hide();
});

$(document).ready(function(){
    $("#bug").click(function(){
        $("#bug").hide();
        $("#squashedBug").show();
        $("#cantClickMe").hide();
		$("#clickMe").show();
    });
});


	
	


/* Event handler. Doesn't work.
function squashBug() {
	bugSquashed = true;
}
	
var elBug = document.getElementById('bug');
elBug.onclick = squashBug; // This line doesn't work
*/


/* Event listener. Doesn't work.
function squashBug() {
	bugSquashed = true;
}

var elBug = document.getElementById('bug'); // Get the bug
elBug.addEventListener('click', squashBug, false); // This line doesn't work
*/


/* jQuery event method from Jon Duckett book. Doesn't work.
$('div.bug').on('click', function() {
	bugSquashed = true;
	document.write('Bug is squashed.');
});
*/


