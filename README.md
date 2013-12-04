StringBuilder
======

Emulates the core features .NET StringBuilder

Example Usage:
======

  **var sb = new StringBuilder();<br />
    sb.Append("My name is John Dor\r\n");<br />
    sb.AppendFormat("My name is {0}.\r\n", [ "John Doe" ]);<br />
    sb.AppendLine("My name is {0}.", [ "John Doe" ]);<br />
    console.log( sb.ToString() );**
<br />

Why use this over standard string concatenation
======
Standard string concatenation (Ex. c += "Dad") forces the JavaScript engine to recreate the variable every time you modify the text. As the string gets larger and larger the creation process take more memory and processing power. Which slows down processing more with each pass.<br />

This class instead uses a string array. So when you append a string you actually just add a new element to an array. You're not recreating the string each time, your adding to a structure that is designed to be modified without taking the processing hit.<br />

I created this for a project were I was generating a large about of HTML table data. Because of the customization it required using the createElement() was clunky. And string concatenation worked but very slowly. When I implemented this class I gained a 80% speed boost over string concatenation and made templating much easier.  You results may vary.



Why use an array for the parameters?
======
I was trying emulate the object array that .NET has.  This seemed like the best way to do it.

Functions:
======

.Append(s) - Add a string to the object<br />
.AppendFormat(s, []) - Add a string to the object and replace the parameters in the string with the corresponding element in the array<br />
.AppendLine(s, []) - Does the same function as AppendFormat except it appends \r\n to the end of the string <br />
.ToString() - Returns a string of all data that has been added<br />
.Clear() - Clears out all the data that exists in the object<br />
.Replace(s,b) - Finds all occurrences of a string and replaces it with the new value<br />


Disclaimer
=====
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using StringBuilder.

Licensing
======
Released under the GPL 3 license