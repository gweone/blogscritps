var gweone = gweone || {};

(function(gweone)
{
	gweone.getParameterByName = function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	};
	gweone.id = 'gweone-streamed';
	gweone.streamed = [197443911668992,652846865532364,816205098790743,542912866329708,2585159695140706,190266885562610,803394120143636,193326478561016,1060400024326256,3893853967299259,804854680009062,207297040489185,206096773960531,2819000111529455,755038275031529,197585898243192,217768772673907,418432485655229,2998007836910025,561641104451705,296369261342861,654982798589413,534591357185838,220875962624350,253333139030853,156134218781733,2569561806697849,210523310013849,605136190066869,137770904265633,2677381505824856,201936337724387,2934784479931853,232327351233212,2793264717419659,2935574186505723,647017702715414,856578291458625,137374007575464,546906706032024,139692517303845,200965107788458,186271569332925,620806245439219,235726327559966,1017153688685566,183714696251257,612948472861448,614389835805552,245602119937356,193983828524839,872816449823332,278756479769462,241847496819605,206716527048566,182171169742349,796214827526005,185379346072007,206727123812030,746192275906683,497358021156088,209007220290891,2743696405724754,498289924443727,887123821708402,3542586579145878];
	
	gweone.getElement = function(type = 'facebook'){
		var el = document.createElement('div');
		el.setAttribute('class', 'fb-video fb-content streamed-el')
		el.setAttribute('data-href', 'https://www.facebook.com/gweonegames/videos/2743696405724754/');
		el.setAttribute('data-width', 'auto');
		el.setAttribute('data-autoplay', 'true');
		el.setAttribute('data-show-text', 'true');
		return el;
		
	};
	
	gweone.getStream = function(){
		var ids = document.querySelectorAll('span[videoid]');
		var results = { text : '', keys: [] };		
		for(i = 0; i < ids.length; i++){			
			if(results.keys.indexOf(ids[i].getAttribute('videoid')) == -1){
				results.text = results.text + ',' + ids[i].getAttribute('videoid');
				results.keys.push(ids[i].getAttribute('videoid'));
			}
		}
		
	};
	
	gweone.getFeeds = function(bloggerUrl, callback){
		var url= bloggerUrl + '&start-index=' + gweone.getRandom(gweone.getRandom(1, 50), 190);
		$.ajax({
		  type: 'GET',
		  url: "https://api.rss2json.com/v1/api.json?api_key=yeio73cvsaa0rezatvcrxllwui2d9zoxu2xwuhpl&count=500&rss_url=" + url,
		  dataType: 'jsonp',
		  success: function(data) {  
			if(callback)
				callback(data);
		  }
		});
	};
	
	gweone.getRandom = function(min, max) {
		min = Math.ceil(Math.random() * (max - min) + min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	var el = document.getElementById(gweone.id);
	if(el){
		document.getElementById(gweone.id).appendChild(gweone.getElement());	
		$(".streamed-el").attr('data-href', 'https://www.facebook.com/gweonegames/videos/' + gweone.streamed[gweone.getRandom(0, gweone.getRandom(1, gweone.streamed.length - 1))]);
	}
})(gweone);