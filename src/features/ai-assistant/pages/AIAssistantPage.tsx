import { useState } from "react";
import { Send, Bot } from "lucide-react";
import { Input, Button } from "@/shared/ui";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useAssistantChat } from "../hooks/useAssistantChat";
import type { ChatMessage } from "../types";

const FOLLOW_UP_QUESTIONS = [
  "Покажи распределение по офисам",
  "Какие менеджеры наиболее загружены?",
  "Сколько обращений с приоритетом выше 8?",
  "Покажи обращения на русском языке",
  "Какой процент VIP обращений?",
  "Сравни нагрузку между офисами",
];

const SAMPLE_CHART_DATA = [
  { office: "Алматы", vip: 45 },
  { office: "Астана", vip: 38 },
  { office: "Шымкент", vip: 22 },
  { office: "Караганда", vip: 18 },
];

function MessageBubble({ message }: { message: ChatMessage }) {
  return (
    <div className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      {message.role === "assistant" && (
        <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
          <Bot size={16} className="text-foreground" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          message.role === "user" ? "bg-primary text-white" : "bg-muted text-foreground"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
}

export function AIAssistantPage() {
  const [query, setQuery] = useState("");
  const { messages, loading, sendMessage } = useAssistantChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    sendMessage(query);
    setQuery("");
  };

  const handleQuestionClick = (q: string) => setQuery(q);

  return (
    <div className="p-8">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[32px] font-semibold text-foreground mb-8">AI-ассистент</h1>

        <div className="bg-card border border-border rounded-lg flex flex-col h-[calc(100vh-200px)]">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <MessageBubble message={message} />

                {message.hasChart && (
                  <div className="mt-4 ml-11 bg-card border border-border rounded-lg p-4 max-w-[80%]">
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={SAMPLE_CHART_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="office" tick={{ fontSize: 12 }} stroke="#6B7280" />
                        <YAxis tick={{ fontSize: 12 }} stroke="#6B7280" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E5E7EB",
                            borderRadius: "6px",
                            fontSize: "12px",
                          }}
                        />
                        <Bar dataKey="vip" fill="#16A34A" radius={[4, 4, 0, 0]} name="VIP обращения" />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        📊 <strong>Выводы:</strong> Алматы лидирует по количеству VIP обращений (45), что составляет
                        36.6% от общего числа. Рекомендуется усилить команду в этом офисе.
                      </p>
                    </div>
                  </div>
                )}

                {message.role === "assistant" && (
                  <div className="mt-4 ml-11 max-w-[80%]">
                    <p className="text-xs text-muted-foreground mb-3">Уточняющие вопросы</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                      {FOLLOW_UP_QUESTIONS.map((question, qIndex) => (
                        <button
                          key={qIndex}
                          onClick={() => handleQuestionClick(question)}
                          className="text-left px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                placeholder="Задайте вопрос по распределению..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={loading}>
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
