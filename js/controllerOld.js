app.controller("MainController", function(){

	var vm = this;

	vm.audiobooks = [{
		"name": "Days of Fire",
		"type": "Audiobook",
		"image": "img/days-of-fire.jpg",
		"percentCompleted": 50,
		"now": true,
		comments: []
	},

	{
		"name": "The Big Chill",
		"type": "Audiobook",
		"image": "img/days-of-fire.jpg",
		"percentCompleted": 75,		
		"now": false,
		comments: []		
	}

	];

	vm.printbooks = [{
		"name": "The Sun Also Rises",
		"type": "Print",
		"image": "img/the-sun-also-rises.jpg",
		"percentCompleted": 80,
		"now": true,
		comments: [],
		isCollapsed: true
	}];

	vm.briefs = [{
		"name": "Where the Bodies are Buried",
		"type": "Brief",
		"image": "img/new-yorker.png",
		"percentCompleted": 50,
		now: true,
		comments: [],
		isCollapsed: true
	}];

	vm.increaseCount = function(input){
		input.percentCompleted++;
	};
	vm.decreaseCount = function(input){
		input.percentCompleted--;
	};
	
	vm.newBook = {};
	vm.selects = {};
    vm.newComment = null;
    vm.isCollapsed = true;


	vm.addBook = function(){

		var newBookType = vm.newBook.bookType;
		console.log(vm[newBookType]);

		//sets current status of existing books to false
		for(i = 0; i <= vm[newBookType].length - 1; i++){
			console.log(vm[newBookType][i].now);
			if(vm[newBookType][i].now === true){
				vm[newBookType][i].now = false;
			};
		};

		//push new book to array and sets to current
		// // var x = his will be drawn from the view and used as the book type;
            vm[newBookType].push({
            	name: vm.newBook.name,
            	image: "img/new-yorker.png",
            	percentCompleted: 0,
            	now: true,
				comments: []
            });

          //empties newBook object
          vm.newBook = {};
        };



    vm.showAll = function(input){
    	//selects template is sitting on html at bottom at load. 
    	vm.selects = vm[input];
    	console.log(vm.selects[0].name);
    };

    vm.setAsActive = function(index){
    	//sets all objects current status to false, sets selected current status to true
    	//clears selects object
    	console.log(index);

		for(i = 0; i <= vm.selects.length - 1; i++){
			if(vm.selects[i].now === true){
				vm.selects[i].now = false;
			}; 
		};

		index.now = true; 
		vm.selects = {}; 	
    };


    vm.addComment = function(input){
    	if(vm.newComment !== null)
    	input.comments.push(vm.newComment);
    	console.log(input);
    	vm.newComment = null;
    };

});