//pauses the execution until promise is fulfilled or rejected
//await can only be used inside an async function
//await pauses an async function until a promise is resolved

function getNumber() {
  return new Promise((resolved, reject) => {
    let random = Math.floor(Math.random() * 10) + 1;
  });
}
async function demo() {
  await getNumber();
  await getNumber();
  await getNumber();
  getNumber();
}
