//mongo-structured-data answers

//1. create user

db.User.create(
{
  name: "kabah5"
},
function(err, user) {
  console.log(err, user);
})

//2. Create tweets embedded inthat user

var tweet5 = new db.Tweet ({body: {"tweet tweet"}})

//3. list all users
