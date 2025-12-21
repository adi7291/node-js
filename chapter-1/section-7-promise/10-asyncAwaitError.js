function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Ramesh lal das" });
      } else {
        reject("Error:Invalid userId");
      }
    }, 1000);
  });
}
function getOrder(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Pen" },
        { id: 2, name: "pencil" },
      ]);
    }, 1000);
  });
}
function getOrderDetail(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: orderId, status: "Delivered", price: 100 });
    }, 1000);
  });
}

async function fetchAllData(userId, orderId) {
  try {
    const user = await getUser(userId);
    const order = await getOrder();
    const orderDetail = await getOrderDetail(orderId);
    return { user, order, orderDetail };
  } catch (error) {
    throw error;
  } finally {
    console.log("Function Completed");
  }
}
// console.log(fetchAllData(1, 1));

fetchAllData(-11, 1)
  .then((data) => console.log("Success Data:", data))
  .catch((err) => console.log("Error : ", err));
//Function Completed
//Error :  Error:Invalid userId
