function displayPoem(response) {
  console.log("poem generated");
  let poemFormElement = document.querySelector("#poem");
  new Typewriter(poemFormElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsElement = document.querySelector("#user-instructions");
  let apiKey = "a880btbb9f646f5672ca3c2bc8e4o564";
  let context =
    "You are romantic expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />.Make sure to follow the user instructiins.sign the peom with SheCodes AI ";
  let prompt = `User instruction: Generate a poem in French about ${instructionsElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let FormElement = document.querySelector("#poem-generator-form");
FormElement.addEventListener("submit", generatePoem);
