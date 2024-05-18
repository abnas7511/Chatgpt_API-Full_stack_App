import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Retrieve the OpenAI API key from environment variables
const openaiApiKey = process.env.OPENAI_API_KEY;

// Check if the API key is set
if (!openaiApiKey) {
  console.error('Error: OPENAI_API_KEY is not set in the environment variables.');
  process.exit(1);
}

// Create an instance of the OpenAI API client
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

// Export the configured OpenAI API client for use in other modules
export default openai;
