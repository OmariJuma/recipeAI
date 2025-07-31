"use client";
import { useState, useRef, useEffect } from "react";


type RecipeResponse = {
  role: "assistant";
  title: string;
  description: string;
  ingredients: string;
  instructions: string[];
  shoppingList: string[];
  cookingTip: string;
};

type UserRequest = {
  role: "user";
  userMessage: string;
};

type Message = RecipeResponse | UserRequest;

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  console.log(process.env.NEXT_PUBLIC_BACKEND_URI)
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    const userMsg: UserRequest = { role: "user", userMessage: userInput };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/genai`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_message: userInput }),
      });
      
      if (response.ok) {
        const data = await response.json();
        const recipeResponse: RecipeResponse = data;
        setMessages((prev) => [...prev, recipeResponse]);
      } else {
        console.error('Failed to fetch recipe');
      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
    

  };

  const renderMessage = (msg: Message) => {
    if (msg.role === "user") {
      return (
        <div className="rounded-lg px-4 py-2 max-w-[75%] shadow bg-orange-400 text-white">
          {msg.userMessage}
        </div>
      );
    } else {
      return (
        <div className="rounded-lg px-4 py-2 max-w-[75%] shadow bg-yellow-400 text-black">
          <h3 className="font-bold text-lg mb-2">{msg.title}</h3>
          <p className="mb-2">{msg.description}</p>
          <div className="mb-2">
            <strong>Ingredients:</strong> {msg.ingredients}
          </div>
          <div className="mb-2">
            <strong>Instructions:</strong>
            <ol className="list-decimal list-inside">
              {msg.instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ol>
          </div>
          <div className="mb-2">
            <strong>Shopping List:</strong>
            <ul className="list-disc list-inside">
              {msg.shoppingList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Cooking Tip:</strong> {msg.cookingTip}
          </div>
        </div>
      );
    }
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
              {renderMessage(msg)}
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
          className="bg-yellow-500 text-white flex-1 resize-none rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-white"
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