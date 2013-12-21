Knight.Event = (function(){
	function Event(){
	}

	Event.prototype.addEventListener = function(event, listener){
		if(!this['_'+event]) this['_'+event] = [];
		this['_'+event].push(listener);
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
	}

	Event.prototype.triggerEvent = function(event){
		if(this['on'+event] && typeof this['on'+event] === 'function'){
			this['on'+event].call(this);
		}

		if(this['_'+event]){
			var execute = this['_'+event];
			if(execute.constructor === Array){
				for( var i = 0 ; i < execute.length ; ++i ){
					execute[i].call(this);
				}
			}
			else if(typeof execute === 'function'){
				execute.call(this);
			}
		}
	}

	return Event;
})();