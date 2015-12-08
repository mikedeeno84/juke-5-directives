app.directive('doubleClick', function() {
		return {
				restrict: 'A',
				scope: {
						upon: '&'
				},
				link: function(scope, element, attributes) {
							  console.log(scope.upon);
							  element.on('dblclick', function() {
									  console.log('actually triggered');
									  scope.upon();
							 });
				}
		}
});
