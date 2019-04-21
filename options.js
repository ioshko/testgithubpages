



setsaveButtonListener ();
readOptions ();


function setsaveButtonListener () {
	$(document).on('click', '#saveButton', function () {
		//alert('TEST');
		saveOptions ();
    });
}

function readOptions () {
	$('#asanaWorkspace').val(localStorage.getItem('asanaWorkspace'));
	$('#asanaApiKey').val(localStorage.getItem('asanaApiKey'));
}

function saveOptions () {
	//alert($('#asanaWorkspace').val());
	localStorage.setItem('asanaWorkspace', $('#asanaWorkspace').val());
	localStorage.setItem('asanaApiKey', $('#asanaApiKey').val());
}