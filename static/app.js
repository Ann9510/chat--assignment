function displayChat(chat) {
  const ul = document.querySelector("#chat-ul");

  const li = document.createElement("li");
  li.innerText = `${chat.content}`;

  ul.appendChild(li);
}

async function readChat() {
  const res = await fetch("/chat");
  const jsonRes = await res.json();
  const ul = document.querySelector("#chat-ul");

  ul.innerHTML = "";
  jsonRes.forEach(displayChat);
}

async function createChat(value) {
  const res = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: value,
    }),
  });
  readChat();
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  createChat(input.value);
  input.value = "";
}

const form = document.querySelector("#chat-form");
form.addEventListener("submit", handleSubmit);
