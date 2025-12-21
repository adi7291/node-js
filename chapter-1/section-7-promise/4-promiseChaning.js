function getUser(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (userId > 0) {
        res({
          id: userId,
          name: "Ramesh lal das",
          age: 34,
          skills: ["js", "react", "AI"],
        });
      } else {
        rej("Invalid User");
      }
    }, 2000);
  });
}
function getOrder(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { id: 1, item: "Book" },
        { id: 2, item: "Pencil" },
        { id: 3, item: "Pen" },
      ]);
    }, 1000);
  });
}
function getOrderDetails(orderId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: orderId, price: "20", status: "Delivered" });
    }, 1000);
  });
}

getUser(-11)
  .then((user) => {
    console.log("User", user.name);
    return getOrder(user.id);
  })
  .then((orders) => {
    console.log("Orders:", orders);
    return getOrderDetails(orders[0].id);
  })
  .then((details) => {
    console.log("Delivery Status:", details.status);
  })
  .catch((err) => console.log("Error:", err))
  .finally(() => {
    console.log("Finally runs regardless of promise success or fails");
  });

// let user = getUser(1).then((user) => {
//   console.log("User:", user.name);
//   return getOrder(user.id);
// });
// let order = user.then((orders) => {
//   console.log("Orders:", orders);
//   return orderDetails(orders[1].id);
// });
// order.then((details) => {
//   console.log("Order delivery status:", details.status);
// });
// });
