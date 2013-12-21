Knight.Component = (function(){
	function Component(game){
		this._game = game;
		this.contain = false;
	}

	Knight.Utility.extend(Component, Knight.Event);

	var _afterAdd = function(event, listener){
		if(event === 'update'){
			this._game.addEventListener('update', listener);
		}
		else if(event === 'draw'){
			this._game.addEventListener('draw', listener);
		}
	};

	var _afterRemove = function(event, listener){
		if(event === 'update'){
			this._game.removeEventListener('update', listener);
		}
		else if(event === 'draw'){
			this._game.removeEventListener('draw', listener);
		}
	};

	Component.prototype.add = function(){
		if( this._update )
			this._game.addEventListener.apply(this._game, 'update', this._update);
		if( this._draw )
			this._game.addEventListener.apply(this._game, 'draw', this._draw);
		this.addEventListener('addeventlistener', _afterAdd);
		this.addEventListener('removeeventlistener', _afterRemove);
		this.contain = true;
	}

	Component.prototype.remove = function(){
		if( this._update )
			this._game.removeEventListener.apply(this._game, 'update', this._update);
		if( this._draw )
			this._game.removeEventListener.apply(this._game, 'draw', this._draw);
		this.removeEventListener('addeventlistener', _afterAdd);
		this.removeEventListener('removeeventlistener', _afterRemove);
		this.contain = false;
	}

	return Component;
})();