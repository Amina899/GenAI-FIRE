import type { Ticket, TicketDetail } from "../types";

const MOCK_TICKETS: Ticket[] = [
  { id: "2458", segment: "VIP", type: "Кредит", sentiment: "Позитивная", priority: 9, language: "RU", office: "Алматы", manager: "Иванов А.С.", status: "В обработке", aiSummary: "Заявка на ипотечный кредит 50 млн тенге. Рекомендация: подготовить индивидуальное предложение для VIP, ответ в течение 1 часа." },
  { id: "2457", segment: "Mass", type: "Вклад", sentiment: "Нейтральная", priority: 5, language: "KZ", office: "Астана", manager: "Петрова М.К.", status: "Назначено", aiSummary: "Вопрос по условиям вклада. Предложить консультацию по продуктам сбербанка." },
  { id: "2456", segment: "Priority", type: "Жалоба", sentiment: "Негативная", priority: 8, language: "RU", office: "Шымкент", manager: "Сидоров Д.П.", status: "В обработке", aiSummary: "Жалоба на задержку рассмотрения кредита. Срочно связаться с клиентом и сообщить сроки." },
  { id: "2455", segment: "Mass", type: "Карты", sentiment: "Позитивная", priority: 4, language: "EN", office: "Алматы", manager: "Алиева Л.Р.", status: "Завершено", aiSummary: "Запрос на выпуск премиальной карты. Отправить условия и форму заявки." },
  { id: "2454", segment: "VIP", type: "Переводы", sentiment: "Нейтральная", priority: 7, language: "RU", office: "Караганда", manager: "Кузнецова Е.А.", status: "В обработке", aiSummary: "Крупный перевод в СНГ. Проверить лимиты и подтвердить комиссию." },
  { id: "2453", segment: "Mass", type: "Кредит", sentiment: "Негативная", priority: 6, language: "KZ", office: "Астана", manager: "Нурланов Т.Б.", status: "Назначено", aiSummary: "Отказ в кредите — запрос пересмотра. Запросить доп. документы и перевести на повторную проверку." },
  { id: "2452", segment: "Priority", type: "Вклад", sentiment: "Позитивная", priority: 8, language: "RU", office: "Алматы", manager: "Смирнов В.И.", status: "В обработке", aiSummary: "Интерес к накопительному вкладу с повышенной ставкой. Предложить актуальные условия и записать на встречу." },
  { id: "2451", segment: "Mass", type: "Жалоба", sentiment: "Негативная", priority: 7, language: "RU", office: "Шымкент", manager: "Джумабаева А.К.", status: "Назначено", aiSummary: "Жалоба на работу отделения. Извиниться и предложить решение в течение 24 часов." },
];

export async function fetchTickets(): Promise<Ticket[]> {
  await new Promise((r) => setTimeout(r, 0));
  return [...MOCK_TICKETS];
}

export async function fetchTicketById(id: string): Promise<TicketDetail | null> {
  await new Promise((r) => setTimeout(r, 0));
  const t = MOCK_TICKETS.find((x) => x.id === id);
  if (!t) return null;
  const detail: TicketDetail = {
    ...t,
    guid: "a7f3c8e2-4b9d-11ef-8a2c-0242ac120002",
    summary: "VIP-клиент заинтересован в оформлении ипотечного кредита на сумму 50 млн тенге.",
    recommendation: "Подготовить индивидуальное предложение с учётом VIP-статуса клиента.",
    attachments: ["Заявка_кредит.pdf", "Документы.zip"],
    clientInfo: {
      gender: "Мужской",
      birthDate: "15.03.1985",
      address: "г. Алматы, пр. Абая, 150",
      coordinates: "43.2566, 76.9286",
    },
  };
  return detail;
}
