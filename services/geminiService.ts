
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

export const getGeminiResponse = async (history: ChatMessage[], prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    Você é o Assistente Virtual da Auto Mecânica KAEN. 
    Seu objetivo único agora é realizar agendamentos de serviços automotivos.
    
    PROTOCOLO DE AGENDAMENTO:
    1. Você DEVE coletar as seguintes informações do cliente:
       - Nome Completo
       - Telefone de Contato
       - Modelo do Carro
       - Serviço Desejado (Troca de óleo, Freios, Suspensão, Injeção Eletrônica, Revisão Geral, Ar-condicionado)
    
    2. Seja educado e profissional. Use o tema Preto e Vermelho da oficina em suas falas.
    
    3. Quando você tiver TODAS as informações acima, você DEVE gerar uma mensagem final de confirmação que contenha exatamente o texto: "AGENDAMENTO_CONCLUIDO" seguido do resumo dos dados.
    
    4. Se o cliente perguntar preços, diga que a avaliação é gratuita e os valores dependem das peças necessárias.
    
    5. Não direcione para o WhatsApp. O agendamento é feito por aqui.
    
    Mantenha as respostas curtas e focadas em completar o cadastro do agendamento.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.5,
      },
    });

    return response.text || "Desculpe, tive um problema técnico. Pode repetir?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive um erro no sistema. Por favor, recarregue a página e tente novamente.";
  }
};
