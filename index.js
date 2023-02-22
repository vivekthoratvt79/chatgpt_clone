const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const configuration = new Configuration({
  organization: "org-owEA0m0CmLIAmw5Dg9eKvWGM",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const app = express();
const port = 3080;

app.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  res.send(response.data.choices[0].text);
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
