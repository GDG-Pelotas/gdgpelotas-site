$(function(){
	var Main = {
		init : function () {
			Main.materializeStarts.call();
		},
		cache : {
		
		},
		bind : {
			init: function () {
				
			}
		},
		materializeStarts : function () {
			$('.button-collapse').sideNav({'menuWidth': 400, activationWidth: 70});
      $('.parallax').parallax();
		}
	}

	Main.init.call();
});