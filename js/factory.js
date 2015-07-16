//book factory

app.factory("BookTest", function(){
	console.log("factory is called");

	var BookTest = {};
	BookTest.indexTicker = 2;

	BookTest.list = [{
		"name": "Days of Fire",
		"type": "Audiobook",
		"image": "img/days-of-fire.jpg",
		"percentCompleted": 50,
		"now": true,
		comments: [{"text":"This a test comment. This a test comment. This a test comment.","time":50}],
		index: 1,
		description: "In Days of Fire, Peter Baker, Chief White House Correspondent for The New York Times, takes us on a gripping and intimate journey through the eight years of the Bush and Cheney administration in a tour-de-force narrative of a dramatic and controversial presidency. Theirs was the most captivating American political partnership since Richard Nixon and Henry Kissinger: a bold and untested president and his seasoned, relentless vice president. Confronted by one crisis after another, they struggled to protect the country, remake the world, and define their own relationship along the way. In Days of Fire, Peter Baker chronicles the history of the most consequential presidency in modern times through the prism of its two most compelling characters, capturing the elusive and shifting alliance of George Walker Bush and Richard Bruce Cheney as no historian has done before. He brings to life with in-the-room immediacy all the drama of an era marked by devastating terror attacks, the Iraq War, Hurricane Katrina, and financial collapse. The real story of Bush and Cheney is a far more fascinating tale than the familiar suspicion that Cheney was the power behind the throne. Drawing on hundreds of interviews with key players, and thousands of pages of never-released notes, memos, and other internal documents, Baker paints a riveting portrait of a partnership that evolved dramatically over time, from the early days when Bush leaned on Cheney, making him the most influential vice president in history, to their final hours, when the two had grown so far apart they were clashing in the West Wing. Together and separately, they were tested as no other president and vice president have been, first on a bright September morning, an unforgettable “day of fire” just months into the presidency, and on countless days of fire over the course of eight tumultuous years. Days of Fire is a monumental and definitive work that will rank with the best of presidential histories. As absorbing as a thriller, it is eye-opening and essential reading."
	},

	{
		"name": "The Big Chill",
		"type": "Audiobook",
		"image": "img/days-of-fire.jpg",
		"percentCompleted": 75,		
		"now": false,
		comments: [],
		index: 2		
	}

	];

	BookTest.findActiveBook = function(){
		for(i = 0; i <= BookTest.list.length - 1; i++){
			if(BookTest.list[i].now === true){
				return BookTest.list[i];
			};
		};
	};

	BookTest.removeActiveBook = function(){
		for(i = 0; i <= BookTest.list.length - 1; i++){
			if(BookTest.list[i].now === true){
				BookTest.list[i].now = false;
			};
		};
	};

	BookTest.setActiveBook = function(bookObj){
		bookObj.now = true;
	};

	BookTest.add = function(bookObj){

		//if !cover, put in base image
		var title = bookObj.title;
		var cover = bookObj.imageLinks.smallThumbnail;
		var description = bookObj.description;

		var indexNumber = BookTest.indexTicker + 1;
		BookTest.indexTicker++;

    	BookTest.list.push({
            	name: title,
            	image: cover,
            	percentCompleted: 0,
            	now: true,
				comments: [],
				index: indexNumber,
				description: description
            });	
	};

	BookTest.addComment = function(bookObj, comment){

		var index = bookObj.index;
		var time = bookObj.percentCompleted;
		BookTest.list[index - 1].comments.push({
			text: comment,
			time: time
		});

		


	};

	BookTest.showAll = function(){
		//necessary?
	};

	







    return BookTest;

});