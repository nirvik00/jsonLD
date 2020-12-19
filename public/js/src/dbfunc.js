$(function () {
	/* $('#sendDB').on('click', function (e) {
		console.log('send db function command');
		e.preventDefault();
		let dataX = document.getElementById('interactiveTAData').value;
		let frameX = document.getElementById('interactiveTAFrame').value;
		let inputs = { data: dataX, frame: frameX };
		$.ajax({
			url: '/genSol',
			method: 'POST',
			contentType: 'application/JSON',
			data: inputs,
			success: function (res) {
				console.log(res);
			},
			error: function (err) {
				console.log(err);
			},
		});
	}); */

	$('#sampleDataBtn').on('click', function (e) {
		console.log('get file data from db');
		e.preventDefault();
		$.ajax({
			url: '/data',
			method: 'GET',
			success: function (res) {
				console.log('success');
				setDataDiv(res);
			},
			error: function (err) {
				console.log('error');
				console.error(err);
			},
		});
	});

	$('#sampleFrameBtn').on('click', function (e) {
		console.log('get frame data from db');
		e.preventDefault();
		$.ajax({
			url: '/frame',
			method: 'GET',
			success: function (res) {
				console.log('success');
				setFrameDiv(res);
			},
			error: function (err) {
				console.log('error');
				console.error(err);
			},
		});
	});
});
