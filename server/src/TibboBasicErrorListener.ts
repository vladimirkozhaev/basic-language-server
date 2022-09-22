import { CommonToken } from "antlr4";
import { TBSyntaxError } from "./types";

const antlr4 = require('antlr4');

// const { SyntaxGenericError } = require(path.resolve('error', 'helper'));

/**
 * Custom Error Listener
 *
 * @returns {object}
 */


export default class TibboBasicErrorListener extends antlr4.error.ErrorListener {

	errors: Array<TBSyntaxError> = [];
	constructor(){
		super()
		//console.log("Error listener was created")
		//this.errors.push({symbol:new CommonToken("","","",1,10),line:1,column:10,message:"test message"})
	}
	/**
	 * Checks syntax error
	 *
	 * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
	 * @param {object} symbol Offending symbol
	 * @param {number} line Line of offending symbol
	 * @param {number} column Position in line of offending symbol
	 * @param {string} message Error message
	 * @param {string} payload Stack trace
	 */
	syntaxError(recognizer: object, symbol: CommonToken, line: number, column: number, message: string, payload: string) {
		console.log("------------- symbol:", symbol);
		this.errors.push({ symbol, line, column, message });
		//console.log("add error")
	}
}
