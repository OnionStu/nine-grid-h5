define([], function() {
	return View.extend({
		events: {
			"click #scanQRCode": "onSanQRCode"
		},
		onSanQRCode: function() {
			if (window.cordova) {
				cordova.plugins.barcodeScanner.scan(
					function(result) {
						/*$.alert("We got a barcode\n" +
							"Result: " + result.text + "\n" +
							"Format: " + result.format + "\n" +
							"Cancelled: " + result.cancelled);*/


						if (window.device && window.device.platform == "iOS") {
							if (result.cancelled == 0) {
								$.alert(result.text);
							}
						} else {
							if (!result.cancelled) {
								$.alert(result.text);
							}
						}

						
					},
					function(error) {
						$.alert("Scanning failed: " + error);
					}
				);
			} else {
				console.log("no cordova plugin")
			}
		}

	});
});