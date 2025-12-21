function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Ramesh lal das", age: 34 });
      } else {
        reject("Error:Invalid UserId");
      }
    }, 1000);
  });
}
function getOrder(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "pen" },
        { id: 2, name: "pencil" },
        { id: 3, name: "book" },
      ]);
    }, 1000);
  });
}
function orderDetails(orderId) {
  return new Promise((resolve, reject) => {
    resolve({ id: orderId, price: 1000, status: "Delivered" });
  });
}

async function fetchAllData(userId) {
  const user = await getUser(1);
  const order = await getOrder(1);
  const deliveryStatus = await orderDetails(1);
  return { user, order, deliveryStatus };
}

console.log(fetchAllData(1)); //Pending
fetchAllData(1).then((data) => console.log("Final data:", data));
