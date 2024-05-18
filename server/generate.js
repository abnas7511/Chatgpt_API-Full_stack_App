import openaiClient from "./api.js";

const generate = async (queryDescription) => {
  const chatGPT = async (queryDescription) => {
    const messages = [
      { role: "system", content: "You are a translator from plain English to SQL." },
      { role: "user", content: "Convert the following natural language description into an SQL query:\n\nShow all the elements in the table users" },
      { role: "assistant", content: "SELECT * FROM users;" },
      { role: "user", content: `Convert the following natural language description into an SQL query:\n\n${queryDescription}` },
    ];

    try {
      const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      // Assuming the correct structure based on the API response format
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error creating chat completion:", error);
      throw new Error("Failed to generate SQL query");
    }
  };

  try {
    const sqlQuery = await chatGPT(queryDescription);
    return sqlQuery;
  } catch (error) {
    console.error("Error generating SQL query:", error);
    throw error;
  }
};

export default generate;

