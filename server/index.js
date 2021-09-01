const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// we'll just use some variables as the "database" to get started

const db = {
  knowledgeCheckBlocks: [
    {
      id: 1,
      question: {
        text: "What is this a picture of?",
        media: {
          type: "image",
          url: "https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/S3jQ2LjHDoRsPUQmR7dp6hA7-IaoYPA4/d229V-nstxA6tZdi.gif",
        },
      },
      answers: [
        {
          id: 1,
          text: "Cookies and coffee",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Donuts and cider",
          isCorrect: false,
        },
      ],
      feedback: "I just love cookies and a warm cup of coffee!",
    },
  ],
};

function server() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(morgan("dev"));
  app.use(cors());

  app.get("/knowledge-check-blocks", (req, res) =>
    res.send(db.knowledgeCheckBlocks)
  );

  app.start = app.listen.bind(app, port, () =>
    console.log(`Listening on port ${port}`)
  );

  return app;
}

if (require.main === module) server().start();

module.exports = server;
