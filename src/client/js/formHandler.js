const handleSubmit = async (event) => {
  event.preventDefault();

  // check whether url is valid or not
  const inputUrl = document.getElementById("url").value;
  if (Client.checkUrl(inputUrl)) {
    const data = await Client.postUrl("http://localhost:8081/analyze", {
      url: inputUrl,
    });
    try {
      const resultDiv = document.querySelector("#result");
      resultDiv.innerHTML = `Model: ${data.model} <br>Score: ${data.score_tag} <br>Agreement: ${data.agreement} <br>Confidence: ${data.confidence}`;
    } catch {
      console.log("couldn`t update ui");
    }
  } else {
    alert("Invalid URL1");
  }
};
///////////
const postUrl = async (url = "", data = {}) => {
  let result = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  result = await result.json();
  return result;
};

export { handleSubmit, postUrl };
