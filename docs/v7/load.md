---
id: load
title: load
---

The defineNativeHelper() method allows you to register a native helper.

## Demo

## Syntax
Sqrl.defineNativeHelper(regexp)
### Parameters
**regexp**
A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj). If you don't give any parameter and use the match() method directly, you will get an Array with an empty string:[""].
### Return value
An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
Additional properties
As explained above, some results contain additional properties as described below.

DescriptionSection
If the regular expression does not include the g flag, str.match() will return the same result as RegExp.exec(). 

See also: [`defineHelper`](define-helper)
If you need to know if a string matches a regular expression RegExp, use RegExp.test().
If you only want the first match found, you might want to use RegExp.exec() instead.
if you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() instead.
## Examples
Using match()Section
In the following example, match() is used to find 'Chapter' followed by 1 or more numeric characters followed by a decimal point and numeric character 0 or more times. The regular expression includes the i flag so that upper/lower case differences will be ignored.

var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.
Using global and ignore case flags with match()Section
The following example demonstrates the use of the global and ignore case flags with match(). All letters A through E and a through e are returned, each its own element in the array.

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
Using match() with no parameterSection
var str = "Nothing will come of nothing.";

str.match();   // returns [""]
A non-RegExp object as the parameterSection
When the parameter is a string or a number, it is implicitly converted to a RegExp by using new RegExp(obj). If it is a positive number with a positive sign, the RegExp() method will ignore the positive sign. 

var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]