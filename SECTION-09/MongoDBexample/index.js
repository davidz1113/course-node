const moongose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
moongose.connect(MONGO_URI, { useNewUrlParser: true });
const { BreakingNew } = require("./models");

//0 */4 * * *
cron.schedule("* * * * *", async () => {
  console.log("cron job executed");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element).text().toString().trim(),
      link: $(element).children().attr("href"),
    };
    BreakingNew.create([breakingNew]);
  });
});
