import { GoogleGenAI } from "@google/genai";
import { CHAT_SYSTEM_INSTRUCTION, MENU_ITEMS } from '../constants';

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const sendMessageToChef = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const client = getAI();
    
    // Construct a context-aware prompt
    const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.price}): ${item.description}`).join('\n');
    
    const fullSystemInstruction = `${CHAT_SYSTEM_INSTRUCTION}\n\nHere is our current menu:\n${menuContext}`;

    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: fullSystemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({
      message: userMessage
    });

    return response.text || "I apologize, I am momentarily distracted in the kitchen. Please ask again.";
  } catch (error) {
    console.error("Error talking to Gemini:", error);
    return "The spirits of the kitchen are quiet right now. Please try again later.";
  }
};
