define([], function() {
	return View.extend({
		events: {
			"click #takePicture": "getPicFromCamera"
		},
		render: function() {
		},
		getPicFromCamera: function() { //拍照
			var me = this;
			if (window.cordova) {
				var destinationType = navigator.camera.DestinationType;
				navigator.camera.getPicture(function(imageData) {
					// $.alert(imageData);
					me.$el.find(".img").attr("src", "data:image/jpeg;base64," + imageData);
				}, function(message) {
					console.log("发生错误");
					// $.alert('发生错误'); 
					// TODO：失败回调
				}, {
					quality: 50,
					destinationType: destinationType.DATA_URL,
					sourceType: Camera.PictureSourceType.CAMERA,
					allowEdit: true,
					encodingType: Camera.EncodingType.JPEG,
					popoverOptions: CameraPopoverOptions,
					saveToPhotoAlbum: true
				});
			} else {
				console.log("no cordova plugin")
			}
		}

	});
});