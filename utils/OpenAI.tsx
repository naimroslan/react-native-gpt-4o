import OpenAI from "openai";
import envariables from "../envariables";

export const getCompletion = async (messages:any) => {
  try {

    const completion = await fetch(envariables.OPENAI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${envariables.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages
      })
    })

    if (!completion.ok) {
      throw new Error('Failed to fetch completion')
    }
    console.log("completion: ", completion)

    const data = await completion.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error)
    throw error;
  }
}