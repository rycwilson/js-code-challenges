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

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

## diamond.js (fundamentals)
Usage:

- node diamond.js n  
- (n is number of * in middle row)

Task:

Print a diamond shape on the screen using asterisk ("*") characters.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number (as it is not possible to print diamond with even number).

## tickets.js

Description:

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
