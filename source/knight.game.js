var Knight = {};
Knight.Game = (function(){
	Knight.Utility.extend(Game, Knight.Event);
	function Game(canvas, fps){
		if(!fps) fps = 60;
		this._canvas = canvas;
		this._fps = fps;
	}

	Game.prototype.run = function(){
		setInterval( function(){
			this.triggerEvent('update');
			this.triggerEvent('draw');
		}.bind(this), 1000/this._fps)
	}

	return Game;
})();