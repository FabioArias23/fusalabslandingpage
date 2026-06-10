
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "ntn_wc4863975579JF5OIDEs0hijapNDZNWUOuYRureKtIc0Ff",
});

(async () => {
  try {
    const response = await notion.users.getMe();
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error(error.body);
  }
})();
