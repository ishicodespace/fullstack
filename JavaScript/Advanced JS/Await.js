//pauses the execution until promise is fulfilled or rejected
//await can only be used in async functions
//await keyword can only be used inside an async function and pauses the execution of the async function until the Promise it's awaiting resolves.

function getNumber() {
  return new Promise((resolved, reject) => {
    let random = Math.floor(Math.random * 10) + 1;
  });
}
async function demo() {
  await getNumber();
  await getNumber();
  await getNumber();
  getNumber();
}
