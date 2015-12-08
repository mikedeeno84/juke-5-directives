app.directive('albumView', function(){
	return {
		restrict: 'E',
		scope: { myalbumlist : '=' },
		templateUrl: '/templates/albumview.html'
	}
})