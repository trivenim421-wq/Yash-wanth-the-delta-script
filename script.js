const code = document.getElementById("code");
const status = document.getElementById("status");

document.getElementById("run").onclick = () => {
  status.textContent = code.value.trim()
    ? "Demo complete — no game or Roblox script was executed."
    : "Enter some text first.";
};

document.getElementById("clear").onclick = () => {
  code.value = "";
  status.textContent = "Ready.";
};
