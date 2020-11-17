let re;
// Literal Character
re = /hello/;
re = /hello/i;  // Hello World matches hello

// Metacharacter Symbols
re = /^h/i;         // Must start with                        Example: Hello World matches ^h
re = /d$/i;         // Must end with                          Example: Hello World matches d$
re = /^hello$/i;    // Must end start with                    Example: Hello World does NOT match ^hello$
re = /h.llo/i;      // Match any one Character                Example: Hfllo World matches h.llo
re = /h*llo/i;      // Match any Character 0 or more times    Example: Hllo World matches h.llo
re = /gre?a?y/i;    // Optional Character
// Examples: Gray matches gre?a?y; Grey matches gre?a?y; Groy does NOT match gre?a?y
re = /gre?a?y\?/i;  // Escape Character                       Example: Gray? matches gre?a?y\?


// String to match
const str = 'Gray?'

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
