// Object literal

var Module = {
	method: function(){...},
	nextMethod: function(){...}
}

// Wrap it in a function

var Module = function () {
	var privateVar = 'I am private...';
	return {
		method: function () {...},
	},
		nextMethod: function() {...}
}