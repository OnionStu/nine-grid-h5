define([], function() {
	return View.extend({
		events: {
			"click .back": "stopWatchAcceleration"
		},
		render: function() {
			this.startWatchAcceleration(); //监听加速度，从而判断是否摇一摇
		},
		startWatchAcceleration: function() {
			var me = this;
			if (window.cordova) {
				me.oldValue = {
					x: null,
					y: null,
					z: null
				}
				var options = {
					frequency: 300
				};
				me.watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

			} else {
				console.log("no cordova plugin")
			}


			// 获取加速度信息成功后的回调函数 
			function onSuccess(newValue) {
				var changes = {},
					bound = 10;
				if (me.oldValue.x !== null) {
					changes.x = Math.abs(me.oldValue.x, newValue.x);
					changes.y = Math.abs(me.oldValue.y, newValue.y);
					changes.z = Math.abs(me.oldValue.z, newValue.z);
				}
				if (changes.x > bound && changes.y > bound && changes.z > bound) {
					$.alert('摇一摇');
					// alert('检测到手机晃动'); 
				}
				me.oldValue = {
					x: newValue.x,
					y: newValue.y,
					z: newValue.z
				}
				var element = document.getElementById('accelerometer');
				element.innerHTML = 'Acceleration X: ' + newValue.x + '<br />' +
					'Acceleration Y: ' + newValue.y + '<br />' +
					'Acceleration Z: ' + newValue.z + '<br />' +
					'Timestamp: ' + newValue.timestamp + '<br />';
			}

			// 获取加速度信息失败后的回调函数 
			function onError() {
				$.alert('发生错误');
			}
		},
		stopWatchAcceleration: function() { //停止监听摇一摇
			var me = this;
			if (window.cordova) {
				if (me.watchID) {
					navigator.accelerometer.clearWatch(me.watchID);
					me.watchID = null;
				}
			} else {
				console.log("no cordova plugin")
			}
		}

	});
});