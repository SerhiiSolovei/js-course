const name = "Serhii";
const age = 23;
const city = "Kyiv";
const hobbies = "Football";

let html;

// Without template strings

html = "<ul>" +
       "<li>Name: " + name + "</li>" +
       "<li>Age: " + age + "</li>" +
       "<li>City: " + city + "</li>" +
       "<li>Hobbies: " + hobbies + "</li>" +
       "</ul>"
    ;

// document.body.innerHTML = html;

// With template strings

function hello () {
  return "Hello World!";
}

html =
`
<a href="../../index.html">Home Page</a>
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>City: ${city}</li>
    <li>Hobbies: ${hobbies}</li>
    <li>Year born: 1997</li>
    <li>Some number: ${34+43}</li>
    <li>Greeting: ${hello()}</li>
    <li>${age > 25 ? "Under 25" : "Over 25"}</li>
</ul>`;


document.body.innerHTML = html;
