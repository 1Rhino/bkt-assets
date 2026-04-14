$(document).ready(function(){                
               $("a[rel=bkt_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Hình ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' (Cuộn chuột xem hình) : &nbsp;&nbsp;' + title : '') + '</span>';
				}
			});    
            
})