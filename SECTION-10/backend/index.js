const server = require("./server");
const { PORT, MONGO_URI } = require("./config");
const moongose = require("mongoose");

moongose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(console.log);
