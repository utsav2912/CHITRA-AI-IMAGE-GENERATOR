const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getChatGptSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "Write a random text prompt for CHITRA·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.",
      max_tokens: 100,
      temperature: 0.8,
    });

    context.log(`Http function processed request for url "${request.url}"`);

    const responseText = response.data.choices[0].text;

    return {
      body: responseText,
    };
  },
});

// const { app } = require("@azure/functions");

// app.http("getChatGptSuggestion", {
//   methods: ["GET", "POST"],
//   authLevel: "anonymous",
//   handler: async (request, context) => {
//     context.log(`Http function processed request for url "${request.url}"`);

//     // const name = request.query.get('name') || await request.text() || 'world';

//     return { body: `Hello, World` };
//   },
// });
