Knight.Event = (function(){
	function Event(){
	}

	Event.prototype.addEventListener = function(event, listener){
		if(!this['_'+event]) this['_'+event] = [];
		this['_'+event].push(listener);
		this.triggerEvent('addEventListener', event, listener);
	}

	Event.prototype.removeEventListener = function(event, listener){
		if(this['_'+event]){
			var search = this['_'+event];
			for( var i = 0 ; i < search.length ; ++i ){
				if(listener === search[i]){
					search.splice(i, 1);
				}
			}
		}
		this.triggerEvent('removeEventListener', event, listener);
	}

	Event.prototype.triggerEvent = function(event){
		var args = Array.prototype.slice.call( arguments, 1 );
		if(this['on'+event] && typeof this['on'+event] === 'function'){
			this['on'+event].apply(this, args);
		}

		if(this['_'+event]){
			var execute = this['_'+event];
			if(execute.constructor === Array){
				for( var i = 0 ; i < execute.length ; ++i ){
					execute[i].apply(this, args);
				}
			}
			else if(typeof execute === 'function'){
				execute.apply(this, args);
			}
		}
	}

	return Event;
})();