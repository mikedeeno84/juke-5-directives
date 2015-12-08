app.directive('songTable', function(){
	return{
		restrict: 'E',
		scope: { mysonglist: '='},
		templateUrl: '/templates/songtable.html'
	}
})