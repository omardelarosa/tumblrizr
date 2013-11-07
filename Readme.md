#Tumblrizr

Tumblrizr is a jQuery plugin that allows you to fetch the content from your Tumblr pages and plug it directly into your own website's pages using AJAX. To use it in your pages, just download either of the following:

###[Development Version 0.1 ](http://omardelarosa.com/tumblrizr/tumblrizr.js)

###[Production-ready, Minified Version 0.1](http://omardelarosa.com/tumblrizr/tumblrizr.min.js)


##Usage:

####Step 1:

- Select your target element by ID or class using jQuery.

```
var target_element = $('#id_of_element'),
```	

#### Step 2:

 - Set your Tumblr content URL (Don't forget to end it in /json).

```
var url_to_tumblr_content = "http://yourname.tumblr.com/staticpage/json";
```

#### Step 2B:

- If you want to set a callback function, set that to a variable:

```
var some_callback = function(e,target){
	console.log("I was called by ", target, "and my event object is ",e);
}

```

#### Step 3:

- Call the **.tumblrizr** method of the jQuery-fied target.

```
	target_element.tumblrize("http://yourname.tumblr.com/staticpage")
```
- Your Tumblr page's content should then appear inside of your target element.

#### Step 3 (alt):

- Call the **.tumblrizr** method of the jQuery-fied target and pass in your callback function

```
	target_element.tumblrize("http://yourname.tumblr.com/staticpage", some_callback)
```


##Viewing Raw Tumblr Data

After appending your Tumblr content to an element, the original Tumblr response is stored in the target element's data store.  To access the original data, try this:

```
	target_element.data("tumblr_data");
```

Your console should return a JSON-formatted object conaining the original Tumblr response along the lines of:

```
{
    "tumblelog": {
        "title": "page title goes here",
        "description": "",
        "name": "your_tumblr_user_name",
        "timezone": "US\/Eastern",
        "cname": false,
        "feeds": [
            
        ]
    },
    "posts": [
        {
            "id": null,
            "url": "",
            "url-with-slug": "",
            "type": "regular",
            "date-gmt": " GMT",
            "date": "Wed, 31 Dec 1969 19:00:00",
            "bookmarklet": null,
            "mobile": null,
            "feed-item": "",
            "from-feed-id": 0,
            "unix-timestamp": 1383682011,
            "format": "html",
            "reblog-key": "TmN3ujDJ",
            "slug": "about",
            "regular-title": "about",
            "regular-body": "<p>Some random tumblr body content</p>"
        }
    ]
};

```

### Fine Print:

This plugin is in no way endorsed or officially related to Tumblr.  For more information about using Tumblr data or its API, please visit [their very well-documented API page](http://www.tumblr.com/docs/en/api/v2).