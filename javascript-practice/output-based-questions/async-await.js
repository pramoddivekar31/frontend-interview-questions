console.log("Hey JS");
const p1 = new Promise((res) => setTimeout(res, 10000, "Hii"));
const p2 = new Promise((res) => setTimeout(res, 5000, "Hii"));
const p3 = new Promise((res) => setTimeout(res, 2500, "Hii"));

const handlePromises = async () => {
  console.log("Start");

  const prom1 = await p1;

  console.log("Prom:", prom1);

  const prom2 = await p2;

  console.log("Prom2:", prom2);

  const prom3 = await p3;

  console.log("Prom3:", prom3);
};

handlePromises();

const p4 = new Promise((res) => setTimeout(res, 10000, "Hii"));

const p5 = new Promise((res) => setTimeout(res, 10000, "Hii"));

const handleProms = async () => {
  const prom1 = await p4;

  console.log("Prom:", prom1);

  const prom2 = await p5;

  console.log("Prom2:", prom2);
};

handleProms();
