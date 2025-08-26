let username = "";

function joinChat() {
  const input = document.getElementById("username").value.trim();
  if (input) {
    username = input;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("chat-screen").style.display = "block";
  }
}

function sendMessage() {
  const msgInput = document.getElementById("messageInput");
  const message = msgInput.value.trim();
  if (message) {
    addMessage(message, "me");
    msgInput.value = "";

    // demo: auto reply (since no server right now)
    setTimeout(() => {
      addMessage("Hello " + username + "! 👋", "other");
    }, 1000);
  }
}

function addMessage(text, type) {
  const msgBox = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "message " + type;
  div.innerText = text;
  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;
}
