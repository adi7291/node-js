function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task1 Done!!");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task2 Done1!!");
    }, 1000);
  });
}
//==============================================================
async function sequential() {
  console.time("sequential");
  const result1 = await task1();
  const result2 = await task2();
  console.timeEnd("sequential");
  return { result1, result2 };
}
sequential().then((data) => console.log(data));
/**
 * sequential: 2.023s
{ result1: 'Task1 Done!!', result2: 'Task2 Done1!!' }
 */
//================================================================
async function parallel() {
  console.time("Parallel");
  const [result1, result2] = await Promise.all([task1(), task2()]);
  console.timeEnd("Parallel");
  return { result1, result2 };
}
parallel().then((data) => console.log(data));

/**
 * Parallel: 1.018s
{ result1: 'Task1 Done!!', result2: 'Task2 Done1!!' }
 */
