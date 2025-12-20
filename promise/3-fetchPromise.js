function fetchUser(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (userId > 0) {
        res({
          id: userId,
          name: "Ramesh lal das",
          age: 34,
          skills: ["React", "JS", "Java", "View"],
        });
      } else {
        rej("Invalid user ID");
      }
    }, 2000);
  });
}

fetchUser(1)
  .then((data) => console.log("User Found:", data.name))
  .catch((error) => {
    console.log("Error:", error);
  });
fetchUser(-1)
  .then((data) => console.log("User Found:", data))
  .catch((err) => console.log("Error:", err));
