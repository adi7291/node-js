//Async/Await are syntactic sugar for Promises)

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "ramesh", age: 34 });
    }, 1000);
  });
}

fetchUser(1)
  .then((data) => console.log(data.name))
  .catch((err) => console.log(err));
/**
 * ramesh
 */

// we can do the same thing with async await

async function getUser() {
  const user = await fetchUser(1);
  console.log(user);
}
getUser();
/**
 * { id: 1, name: 'ramesh', age: 34 }
 */
/**
 *async keyword makes function to return promise
 *await keyword pause execution until promise resolves
 *await can only be used inside async function.
 */
