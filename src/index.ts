// 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
const myApi = "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";
async function chatGptCall(): Promise<string> {
  const { ChatGPTAPI } = await import("chatgpt");
  const api = new ChatGPTAPI({
    apiKey: myApi ?? process.env["API_KEY"],
    completionParams: {
      model: process.env["MODEL"] ?? "gpt-3.5-turbo",
      temperature: Number(process.env["TEMPERATURE"] ?? 0.5),
      top_p: Number(process.env["TOP_P"] ?? 0.8),
    },
    debug: Boolean(process.env["DEBUG"] ?? false),
  });

  const res = await api.sendMessage("Hello World!");
  console.log("123123");
  console.log(res.text);
  return res.text;
}

async function run() {
  return chatGptCall();
}

run();
