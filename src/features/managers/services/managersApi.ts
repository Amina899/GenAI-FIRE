import type { Manager } from "../types";

const MOCK_MANAGERS: Manager[] = [
  { name: "Иванов Андрей Сергеевич", office: "Алматы", skills: ["VIP", "ENG", "Ипотека"], activeRequests: 12 },
  { name: "Петрова Мария Константиновна", office: "Астана", skills: ["VIP", "KZ"], activeRequests: 15 },
  { name: "Сидоров Дмитрий Павлович", office: "Шымкент", skills: ["KZ", "Кредиты"], activeRequests: 10 },
  { name: "Алиева Лейла Рашидовна", office: "Алматы", skills: ["VIP", "ENG", "KZ"], activeRequests: 13 },
  { name: "Кузнецова Елена Александровна", office: "Караганда", skills: ["ENG", "Вклады"], activeRequests: 9 },
  { name: "Нурланов Тимур Болатович", office: "Астана", skills: ["VIP", "KZ", "Ипотека"], activeRequests: 14 },
  { name: "Смирнов Владимир Игоревич", office: "Алматы", skills: ["ENG", "Карты"], activeRequests: 11 },
  { name: "Джумабаева Айгуль Кадыровна", office: "Шымкент", skills: ["KZ", "Переводы"], activeRequests: 8 },
];

export async function fetchManagers(): Promise<Manager[]> {
  await new Promise((r) => setTimeout(r, 0));
  return [...MOCK_MANAGERS];
}
