function showSampleData() {
	console.log('sample data');
}

function showSampleFrame() {
	console.log('sample frame');
}

function setDataDiv(res) {
	// console.log(res);
	let ta = document.getElementById('interactiveTAData');
	prettyPrint(ta, res);
}

function setFrameDiv(res) {
	let ta = document.getElementById('interactiveTAFrame');
	prettyPrint(ta, res);
}

function prettyPrint(ta, res) {
	try {
		var pretty = JSON.stringify(res, undefined, 4);
		ta.value = pretty;
	} catch (err) {
		console.log(err);
		ta.value = JSON.stringify(res);
	}
}

function clearPanels() {
	let ta = document.getElementById('interactiveTAData');
	let tb = document.getElementById('interactiveTAFrame');
	ta.value = 'Data';
	tb.value = 'Frame';
}

async function genFrame() {
	console.log('generate solutions');
	let data = JSON.parse(document.getElementById('interactiveTAData').value);
	let frame = JSON.parse(document.getElementById('interactiveTAFrame').value);
	console.log(typeof data);
	console.log(typeof frame);

	try {
		let framedData = await jsonld.frame(data, frame);
		let ta = document.getElementById('outputTAFrame');
		prettyPrint(ta, framedData);
		let div = document.getElementById('floatingOutputPanel');
		div.style.display = 'block';
	} catch (e) {
		// console.log(e);
	}
}

function hideOutput() {
	let ta = document.getElementById('floatingOutputPanel');
	ta.style.display = 'none';
}
