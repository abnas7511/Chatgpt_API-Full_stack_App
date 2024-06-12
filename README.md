# Querygenx - SQL Query Generator

## Overview

This project is a web application that generates SQL queries from natural language descriptions using OpenAI's GPT-3.5 API. The application is built using React for the frontend and Node.js with Express for the backend.

## Features

- Converts plain English descriptions into SQL queries.
- Uses OpenAI's GPT-3.5 API for natural language processing.
- RESTful API for generating SQL queries.
- Simple and intuitive UI built with React.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)
- An OpenAI API key

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/sql-query-generator.git
   cd sql-query-generator
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `server` directory and add your OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. **Start the server**

   ```bash
   cd server
   node index.js
   ```

   The server will start on port 3005 by default.

2. **Start the client**

   ```bash
   cd ../client
   npm start
   ```

   The client will start on port 3000 by default.

3. **Access the application**

   Open your web browser and go to `http://localhost:3000` to use the SQL query generator.

## API Endpoints

- **GET /**: Basic endpoint to check if the server is running.
- **POST /generate**: Endpoint to generate an SQL query from a natural language description.

  **Request Body:**

  ```json
  {
    "queryDesc": "your natural language description here"
  }
  ```

  **Response:**

  ```json
  {
    "response": "generated SQL query"
  }
  ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

