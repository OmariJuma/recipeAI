"use client";
import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Dummy assistant reply for demo
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const userMsg = { role: "user" as const, text: userInput };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");

    // TODO: Replace with actual API call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Here's a recipe suggestion for you!" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-yellow-100">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[75%] shadow ${
                  msg.role === "user"
                    ? "bg-orange-400 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>
      <form
        onSubmit={sendMessage}
        className="border-t px-4 py-3 flex items-center gap-2"
      >
        <input
        type="text"
          className="bg-yellow-500 text-white flex-1 resize-none  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-white"
          placeholder="What do you want to cook today?"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}