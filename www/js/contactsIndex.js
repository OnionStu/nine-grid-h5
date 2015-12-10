define([], function() {
	return View.extend({
		events: {},
		render: function() {
			this.accessCommunication(); // 访问通讯录
		},
		accessCommunication: function() {
			if (window.cordova) {
				$.showPreloader();
				// find all contacts with ' ' in any name field    ,field 如果为空 则返回全部的
				var contactFindOptions = {};
				contactFindOptions.filter = "";
				contactFindOptions.multiple = true;
				/*
				查找关键字  
				名字: "displayName"  ,
				电话号码:"phoneNumbers"   //ContactField[]类型 

				*/
				var fields = ["displayName", "name", "phoneNumbers"];
				navigator.contacts.find(fields, onSuccess, onError, contactFindOptions);


				// onSuccess: Get a snapshot of the current contacts        
				function onSuccess(contacts) {

						// 联系人与电话号码 全写在这儿
						var aResult = [];

						for (var i = 0; contacts[i]; i++) {
							// console.log("Display Name = " + contacts[i].name.givenName);

							if (contacts[i].phoneNumbers && contacts[i].phoneNumbers.length) {

								var contactPhoneList = [];

								for (var j = 0; contacts[i].phoneNumbers[j]; j++) {
									var phone = contacts[i].phoneNumbers[j].value;
									//  防止该值为空时，出现null或undefined
									if (!phone || phone == "undefined" || phone == null || phone == "null") {
										phone = "";
									}
									contactPhoneList.push({
										'type': contacts[i].phoneNumbers[j].type,
										'value': phone
									});
								};
								var familyName = contacts[i].name.familyName;
								//  防止该值为空时，出现null或undefined
								if (!familyName || familyName == "undefined" || familyName == null || familyName == "null") {
									familyName = "";
								}

								var givenName = contacts[i].name.givenName;
								//  防止该值为空时，出现null或undefined
								if (!givenName || givenName == "undefined" || givenName == null || givenName == "null") {
									givenName = "";
								}
								var name = familyName + givenName;

								aResult.push({
									name: name,
									phone: contactPhoneList
								});

							};
							//
						}

						var contactList = $("#contactList");
						//迭代获取 联系人和号码
						for (var i = 0; aResult[i]; i++) {
							for (var j = 0; aResult[i].phone[j]; j++) {
								var contactEl = $("<li class='contacts-item'></li>");
								var name = $("<div class='name'>" + aResult[i].name + "</div>");
								var phone = $("<div class='phone'>" + aResult[i].phone[j].value + "</div>");
								contactEl.append(name);
								contactEl.append(phone);
								contactList.append(contactEl);
								// console.log(aResult[i].name + "----" + aResult[i].phone[j].type + "---" + aResult[i].phone[j].value);
							};
						};
						$.hidePreloader();
					}
					// onError: Failed to get the contacts   
				function onError(contactError) {
					$.hidePreloader();
					$.alert('onError!');
				}
			} else {
				console.log("no cordova plugin");
			}
		}
	});
});