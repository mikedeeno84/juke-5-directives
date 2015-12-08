app.directive('songTable', function(PlayerFactory){
		return{
				restrict: 'E',
scope: { mysonglist: '='},
templateUrl: '/templates/songtable.html',
link: function(scope, element, attr) {
		scope.isCurrent = function (song) {
				var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
		};

		scope.start = function (song) {
				PlayerFactory.start(song, scope.mysonglist);
		};


}
}
})
