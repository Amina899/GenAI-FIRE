/** Заглушка ответа AI-ассистента; далее — вызов backend через shared/api/client */
export async function sendAssistantQuery(_query: string): Promise<{ text: string; hasChart?: boolean }> {
  await new Promise((r) => setTimeout(r, 500));
  return {
    text: "На основе данных за последние 30 дней, распределение VIP обращений по офисам следующее:",
    hasChart: true,
  };
}
