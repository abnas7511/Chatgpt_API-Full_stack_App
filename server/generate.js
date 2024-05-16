import openaiClient from "./api.js"

const generate = async (queryDesc) =>{
    const response = await openaiClient.createCompletion({
        model: "gpt-3.5-turbo-0125",
        prompt: `Convert the following natural language description into an sql query: \n\n${queryDesc} .`,
        max_tokens: 100,
        temperature: 0,
    })

    return response.data.choices[0].text
}

export default generate