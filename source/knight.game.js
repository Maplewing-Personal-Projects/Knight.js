Knight.Game = (function(){
	
	function Game(canvas, fps){
		if(!fps) fps = 60;
		this._canvas = canvas;
		this._fps = fps;
	}

	Knight.Utility.extend(Game, Knight.Event);

	Game.prototype.run = function(){
		setInterval( function(){
			this.triggerEvent('update');
			this.triggerEvent('draw');
		}.bind(this), 1000/this._fps)
	}

	return Game;
})();