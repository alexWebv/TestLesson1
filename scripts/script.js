var user = "Alex";
var age = 27;
var stringHard = "Hello " + user + ", Your age " + age;
var stringName = `Hello ${user}, Your age ${age}`;

function showText(text) {
    return text;
}

console.log(showText(stringName));

// git add .
// git commit -m "Message"
// git push origin master
