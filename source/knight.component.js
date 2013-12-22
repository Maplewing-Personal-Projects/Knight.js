Knight.Component = (function(){
	function Component(game){
		this._game = game;
		this.contain = false;
	}

	Knight.Utility.extend(Component, Knight.Event);

	var _afterAdd = function(event, listener){
		if(event === 'update' || event === 'draw'){
			this._game.addEventListener(event, listener);
		}
	};

	var _afterRemove = function(event, listener){
		if(event === 'update' || event === 'draw'){
			this._game.removeEventListener(event, listener);
		}
	};

	Component.prototype.add = function(){
		if( this._update )
			this._update.forEach( function(listener){
				this._game.addEventListener('update', listener);
			}.bind(this));
		if( this._draw )
			this._draw.forEach( function(listener){
				this._game.addEventListener('draw', listener);
			}.bind(this));
		this.addEventListener('addeventlistener', _afterAdd);
		this.addEventListener('removeeventlistener', _afterRemove);
		this.contain = true;
	}

	Component.prototype.remove = function(){
		if( this._update )
			this._update.forEach( function(listener){
				this._game.removeEventListener('update', listener);
			}.bind(this));
		if( this._draw )
			this._draw.forEach( function(listener){
				this._game.removeEventListener('draw', listener);
			}.bind(this));
		this.removeEventListener('addeventlistener', _afterAdd);
		this.removeEventListener('removeeventlistener', _afterRemove);
		this.contain = false;
	}

	return Component;
})();