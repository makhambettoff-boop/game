function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function pizza() {
  await wait(2000);
  const ok = Math.random() > 0.5;
  if (!ok) throw new Error("интернет не работает");
  return "пицерия жумыс истеп тур";
}

const btn = document.getElementById("btn");
const statusEl = document.getElementById("status");

btn.addEventListener("click", async () => {
  btn.disabled = true;
  btn.textContent = "Загрузка...";
  try {
    const result = await pizza();
    statusEl.textContent = "✅✅" + result;
  } catch (error) {
    statusEl.textContent = "🛑" + error.message;
  } finally {
    btn.disabled = false;
  }
});
