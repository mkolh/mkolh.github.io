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

app.directive('nowPlaying', function(){
	return {
		restrict: 'EA',
		scope: {},
		templateUrl: 'nowPlaying.html',
		link: function(scope, elem, attrs){

		}
	};
});
