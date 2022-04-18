const express = require("express");
require("dotenv").config({ path: "../server/.env" });
const PORT = 3000 || process.env.PORT;
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/schema");

//Middleware
app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
