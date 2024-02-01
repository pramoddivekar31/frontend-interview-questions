const delay = (ms, msg) => new Promise((res) => setTimeout(res, ms, msg));

async function asyncFunc() {
  try {
    const res = await delay(5000, "Hii");
    console.log("Succ:", res);
  } catch (e) {
    console.log("Error:", e);
  }

  console.log(res);
  console.log("Byee");
}

// const prom = new Promise((res, rej) => setTimeout(res, 1000, "Hi"));

// prom.then((res) => console.log(res)).catch(console.log);

async function fetchEmails() {
  const userDetails = fetch("https://api.github.com/users/pramoddivekar31");
  console.log("Prom:", userDetails);

  const prom1 = us

  console.log("Emails:1", await userDetails.clone().json());
  console.log("Emails:2", await userDetails.clone().json());
}

fetchEmails();
