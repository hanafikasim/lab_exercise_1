$(document).ready(function(){
	$.ajax({					// to perform an AJAX (asynchronous HTTP) request
		type: 'GET',			// Specifies the type of request (GET or POST)
		url: 'food_menu.xml',	// Specifies the URL to send the request to.
		dataType: 'xml',		// The data type of the server response. 
		success: function(xml){	// A function to be run when the request succeeds
			
			$(xml).find('food').each(function(){	// Find all tag with <food> from food_menu.xml
				$('#TableFood').append(				// Append <tr> element every time <food> is found
					'<tr>' + 
						'<td><img src="' + $(this).find('image').text() + '" width="200px" border="1px"></td>' +	// display the image of the food
						'<td id="col">' +
							$(this).find('name').text() + ', ' + $(this).find('price').text() +						// display the food name and price 
							'<div> </div> <div> </div>' +
							$(this).find('description').text() +													// display the description of the car
							'<div> </div>' +
							'Calories: '+ $(this).find('calories').text() +											// display the calories of the car
						'</td>' +
					'</tr>'
				);
			});
		}
	});
});