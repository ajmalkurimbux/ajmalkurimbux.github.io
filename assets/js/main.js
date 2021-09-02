/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {
	//banner image
	var bannerimages = [];
	bannerimages[0] = "images/bg.jpg";
	bannerimages[1] = "images/cta01.jpg";
	//bannerimages[2] = "http://i3.ytimg.com/vi/f7d8luQ6p2Q/default.jpg";
	//bannerimages[3] = "";
	//bannerimages[4] = "";
	//bannerimages[5] = "";
	var i = 0;
	setInterval(fadeDivs,5900);
	var bannerimg = document.getElementById("banner-img");

	//banner text
	var text = ["Outfits that never <br> goes out of fashion." , "Designed <br> just for you...", "We produce <br> Clothes that will talk on your behalf."];
	var counter = 0;
	var elem = document.getElementById("banner-paragraph");
	var inst = setInterval(change, 6000);

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	//Changing images in banner
	function fadeDivs() {

				bannerimg.src = bannerimages[counter]
	}
	//Changing paragraph in banner
	function change() { 	
		elem.innerHTML = text[counter];

	  	counter++;
	  	if (counter >= text.length) {
	    	counter = 0;
	    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
		}

	}
})(jQuery);