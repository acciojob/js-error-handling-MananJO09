//your code here
class OutOfRangeError extends Error{
	constructor(arg) {
		super.('Expression should only consist of integers and +-/* characters and not < arg >');
		this.name='OutOfRangeError';
	}
	}
class InvalidExprError extends Error {
	constructor(arg) {
		super.('Expression should not have an invalid combination of expression');
		this.name='InvalidExprError';
	}
}

function evalString(expression) {
	try {
    // Check for invalid operator combinations using regular expressions
    const invalidOperatorPattern = /(\+\+|--|\+\-|\-\+|\*\/|\/\*|\+\/|\/\+|\*\*|\/\/)/;
    if (invalidOperatorPattern.test(expression)) {
      throw new InvalidExprError();
    }

	// Check if the expression starts with an invalid operator
    const startsWithInvalidOperator = +,/,*;
    if (startsWithInvalidOperator.test(expression)) {
      throw new SyntaxError('Expression should not starts with an invalid operator');
    }
	const endsWithInvalidOperator= +,/,*,-;
	if(endsWithInvalidOperator.test(expression)){
		throw new SyntaxError('Expression should not end with invalid operator');
	}	
	}
	catch (error) {
    console.error(error);
  }
}