// Create our Crypto class
// It takes a string as an argument
var Crypto = function(text) {
	//stores the sting for use elsewhere
	this.text = text

	// Use Regular Expressions ( "/ insert here / ")

	// Gets rid of all non alphanumeric characters
	//Replaces all Uppercase letters with lowercase letters
	Crypto.prototype.normalizePlaintext = function() {
		return this.text.toLowerCase().replace(/\W/g, "")
		// "W" - Any non-word character
		// "w" - Any word character
		// "" - What you want to replace the thing before it with

		//OR
		// "^" - "NOT" - Any characters not in brackets
		// "+" - Matches any string that contains the same alphanumeric character
		// "g" - Searches globally across the program
	};

	//Determines the size of the square
	Crypto.prototype.size = function() {
		var length = this.normalizePlaintext().length;
		return Math.ceil(Math.sqrt(length));
	
		// "Math.ceil" - Returns an integer to the closest whole number
		// "Math.sqrt" - Returns the square root of a number (crypto SQUARE)
		// "normalized" - Because we need to have the string normalized (see above)
		// ".length" - Returns the number of characters in a string
		// Stack overflow
	};

	// Combines the above functions to make the encoded groups
	Crypto.prototype.plaintextSegments = function() {
		var segments = [],
			npt = this.normalizePlaintext(),
			size = this.size();

		for (var i = 0; i < npt.length; i += size) {
			//extract segments from the normalized plain text and add it to the segment array
			segments.push(npt.substr(i, size));
		}
		// Return an array of strings representing segments of the normalized pain text
		return segments;
	};

	Crypto.prototype.ciphertext = function () {
		var ct = "",
			size = this.size(), // Number of columns
			segs = this.plaintextSegments(); // Rows

		//Need to create a loop through the columns
		for (var i = 0; i < size ; i += 1) {

			// Loop through the rows
			for (var j = 0; j < segs.length; j += 1) {
				ct += segs[j].charAt(i);
				//Helps get through all of the rows thorugh j, then gets all of the columns through i
			}
		}

		// Return a sting that represents the cipher text (encoded message)
		return ct;
	};
};
	
module.exports = Crypto;