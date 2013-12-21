Knight.Utility = (function(){
	return {
		extend: function(derived, base){
			for( var property in base ){
				if(base.hasOwnProperty(property)){
					derived[property] = base[property];
				}
			}
			function _() { this.constructor = derived; }
			_.prototype = base.prototype;
			derived.prototype = new _();
		}

	};
})();