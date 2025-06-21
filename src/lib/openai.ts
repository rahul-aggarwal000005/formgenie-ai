// lib/openai.ts
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  baseURL: process.env.OPENAI_BASE_URL, // Use OpenRouter URL
});

// export const openai = {
//   chat: {
//     completions: {
//       create: async ({ messages }: any) => {
//         const example = {
//           Name: "Rahul Aggarwal",
//           Email: "rahul@example.com",
//           PAN: "ABCDE1234F",
//           "Date of Joining": "2024-06-01",
//         };

//         return {
//           choices: [{ message: { content: JSON.stringify(example, null, 2) } }],
//         };
//       },
//     },
//   },
// };
