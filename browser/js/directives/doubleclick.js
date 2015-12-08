app.directive('doubleClick', function() {
		return {
				restrict: 'A',
				scope: {
						uponDoubleClick: '&'
				},
				link: function(scope, element) {
							  console.log('double-clicked');
							  element.dblclick(scope.uponDoubleClick);
				}
		}
});
