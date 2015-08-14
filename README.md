##comparator.js (easy)
Create a function that compares two integers, a and b, and returns a numerical value indicating if a is greater, less than, or equal to b. This function will be used as a helper function for future module challenges.

Specs:

- Use assertions to validate that the parameters passed into the function are integers
- If a is grater than b, return a positive number
- If a is less than b, return a negative number
- If a and b are equal, return a zero
- Here's an expected function prototype:
	- function compare(a, b);

Stretch goal:

- Extend your function to accept Strings as well as Integers. The function will need to detect the type of parameter passed in and determine what logic will need to be performed. Assume that a and b will be both Strings or both Integers. Use the above Specs as a guideline for your implementation. The same function prototype will apply.


##palindrome.js (easy)
Create a function that accepts a string as input and returns a boolean true if it is a palindrome (same spelling forwards and backwards) and false if otherwise. You may use built-in String and array methods within this function.

Here's an expected function prototype:

- function isPalindrome(a, b);

Notice that the function begins with the word is. Best practice reminds us to prefix any function with a boolean return with a 'has', 'is', or other similar deliniation.

Specs:

- You may use array manipulation, String manipulation, or a combination of both
Only test using single words
Palindrome Stretch Goal
- Extend your function to successfully test phrases (without punctuation.) In the test, blank spaces should not be considered in comparing the forwards and backwards forms of hte phrases.

Stretch goal: 

- Alter your function to only use a single traversal of the phrase without using any built-in String or array methods. Hint: Research loops!

## titleCase.js (fundamentals)
Usage: 

- node titleCase.js "string to convert" "minor words"

Description:

- A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

