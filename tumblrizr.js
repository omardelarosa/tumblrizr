// ==============================================
// ==============================================
// ================ TUMBLRIZR v0.1 ==============
// ==============================================
// ==============================================

// enclose the plugin code in a single function call for minimum footprint
(function($){
	//define tumblrize function
	$.fn.tumblrize = function(url, callback){
		//set target container to value of target or the host object;
		var target_container = $(this),
			//set url of tumblr content
			url = url,
			//create script element in DOM
			script = document.createElement('script');
			//set the newly created element's src tag to the tumblr content's url
			script.src = url;
			//define the function that's called on the successful loading of the script
			script.onload = function(e){
				//jquery-fy the target container
				var $target_container = $(target_container);
				//bind the raw tumblr_data to the host element's data store.
				target_container.data("tumblr_data",tumblr_api_read)
				//check validity of tumblr data...
				if (tumblr_api_read && tumblr_api_read.posts) {
					// if it checks out, create an element from the tumblr content's body and jquery-fy it.
					tumblr_content = $(tumblr_api_read.posts[0]["regular-body"])
					// append the newly created tumblr content element to the inside of the tumblrized element.
					target_container.html(tumblr_content)
					// reset variable created by tumblr's response javascript.
					tumblr_api_read = undefined;
					// if there's a callback function...
					if (callback) {
						// call it and send the event object and the $target_container
						callback(e,$target_container)
					}
				} else {
					// error message
					console.log("Error! Invalid response!")
					return this
				}
			};
			//an "in case of error loading" callback function
			script.onerror = function(e){
				//error message of function.
				console.log("Error!  Please check URL")
			};

		//append the script element to the target container
		target_container[0].appendChild(script)
		return this;
	}
	//alias the function to jQuery.tumblrize	
	$.fn.tumblrize

//immediately call and extend jQuery
}(jQuery));