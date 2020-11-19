let re;
// Literal Character
re = /hello/;
re = /hello/i;  // Hello World matches hello

// Metacharacter Symbols
re = /^h/i;         // Must start with                          Example: Hello World matches ^h
re = /d$/i;         // Must end with                            Example: Hello World matches d$
re = /^hello$/i;    // Must end start with                      Example: Hello World does NOT match ^hello$
re = /h.llo/i;      // Match any one Character                  Example: Hfllo World matches h.llo
re = /h*llo/i;      // Match any Character 0 or more times      Example: Hllo World matches h.llo
re = /gre?a?y/i;    // Optional Character
// Examples: Gray matches gre?a?y; Grey matches gre?a?y; Groy does NOT match gre?a?y
re = /gre?a?y\?/i;  // Escape Character                         Example: Gray? matches gre?a?y\?

// Brackets [] - Character Sets
re = /gr[ae]y/i;    // Must be an a or e                        Example: Gray matches gr[ae]y
re = /[GF]ray/i;    // Must be an G or F                        Example: Fray matches [GF]ray
re = /[^GF]ray/i;   // Match anything except G or F             Example: Tray matches [^GF]ray
re = /[A-Z]ray/;    // Match any uppercase letter               Example: Gray matches [^GF]ray
re = /[a-z]ray/;    // Match any lowercase letter               Example: gray matches [a-z]ray
re = /[A-Za-z]ray/; // Match any letter                         Example: Gray matches [a-z]ray
re = /[0-9]ray/;    // Match any digit                          Example: 8ray matches [a-z]ray

// Braces {} - Quantifiers
re = /Hel{2}o/i;    // Must occur exactly {m} amount of times   Example: Hello matches Hel{2}o
re = /Hel{2,4}o/i;  // Must occur between {m} amount of times   Example: Helllo matches Hel{2,4}o
re = /Hel{2,}o/i;   // Must occur at least {m} times             Example: Hellllllo matches Hel{2,}o

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;     // Example: 3x3x3x matches ^([0-9]x){3}$

// String to match
const str = '3x3x3x'

//Log Results
const results = re.exec(str);
console.log(results); // ["Hello", index: 0, input: "Hello World", groups: undefined]


function reTest(re,str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  };
};

reTest(re, str);
