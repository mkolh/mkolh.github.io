//NEW DIRECTIVE

//eventually the structure would look like this:

/*
main page

|
v

active book directive

|
v

count directive and/or comments directive

*/

//If I'm not totally crazy, there should be a seperate controller for the bottom
//show all section, using the same factory.

// app.directive('nowPlaying', function(){
// 	return {
// 		restrict: 'EA',
// 		scope: {},
// 		templateUrl: 'nowPlaying.html',
// 		link: function(scope, elem, attrs){

// 		}
// 	};
// });


//book factory

app.controller("MainController", function(BookTest, BookService, $http){
	console.log("Controller Active");
	var vm = this;
	vm.books = BookTest.list;
	vm.selects = [];

	vm.addNewBook = function(bookObj){

		//still doesn't take into account type of book
		//this will be solved by passing typeModel as argument

		BookTest.removeActiveBook();
		BookTest.add(bookObj);
	};

	vm.addNewComment = function(book){

		//assumes the method has been called as such:
		//main.addNewComment(brief ** which is an object **)

		if(!vm.newComment){
			BookTest.addComment(book, "Bookmark!");
		}else{
			BookTest.addComment(book, vm.newComment);
		};
		vm.newComment = null;
	};

	vm.showAll = function(){

		if(!vm.selects.length){

		vm.selects = vm.books;
		}else{
			vm.selects = [];
		};
	};

	vm.setNewActive = function(book){
		BookTest.removeActiveBook();

		BookTest.setActiveBook(book);

		vm.selects = [];
	};

	
	vm.increaseCount = function(input){
		input.percentCompleted++;
	};

	vm.decreaseCount = function(input){
		input.percentCompleted--;
	};


	/*Google Books API*/

	//test term
	vm.searchTerm = '';
	vm.bookResults = [];

	vm.search = function(){
		console.log("Search Function Triggered");

		BookService.get({ q: vm.searchTerm }, function(response){
			vm.bookResults = response.items;

			console.log(vm.bookResults[0].volumeInfo);

			vm.addNewBook(vm.bookResults[0].volumeInfo);
		});

		vm.searchTerm = '';
	};

	//typeahead
  	vm.getBook = function(val) {
    return $http.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: val,
        key: 'AIzaSyBYR5v3uPChhku2lF7Db_2ausuHLkQqlUQ'
      }
    }).then(function(response){
   	//return just the title of the book;
      return response.data.items.map(function(item){
        return item.volumeInfo.title;
      });
    });
 	};


 	//testers timeline
 	

});
