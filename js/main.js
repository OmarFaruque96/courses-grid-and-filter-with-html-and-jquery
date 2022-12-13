$(document).ready(function(){

	$('.filter-opt ul li').click(function(){
		let data = $(this).attr('data-filter');
		
		// now match the data value with courses list
		$('.grid-item').each(function(index,value){
			let courses = $(this).attr('id');

			if(courses != data && data != 'all'){
				$(this).fadeOut(function(){
					$(this).hide();
				});
			}
			else{
				$(this).fadeIn(300,function(){
					$(this).show();
				});
			}
		});

	});
	
});