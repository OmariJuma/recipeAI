# AI Recipe Generator

A full-stack web application that generates personalized recipes using AI. Users can input their available ingredients, dietary preferences, and cuisine preferences to receive creative, easy-to-follow recipes with detailed instructions, shopping lists, and cooking tips.

## 🍳 Features

- **Smart Recipe Generation**: AI-powered recipe suggestions based on available ingredients and preferences
- **Real-time Chat Interface**: Interactive chat-like interface for recipe queries
- **Structured Recipe Responses**: Well-formatted recipes with:
  - Recipe title and description
  - Detailed ingredient lists
  - Step-by-step cooking instructions
  - Shopping list for missing ingredients
  - Helpful cooking tips and substitutions
- **Responsive Design**: Modern, mobile-friendly interface built with TailwindCSS
- **Message History**: View conversation history with both user requests and AI responses

## 🛠️ Technical Stack

### Backend
- **Framework**: FastAPI (Python)
- **LLM Integration**: Google Gemini 2.5 Flash
- **API Documentation**: Auto-generated Swagger/OpenAPI docs
- **CORS Support**: Configured for cross-origin requests
- **Environment Management**: Python-dotenv for secure API key handling

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS for modern, responsive design
- **State Management**: React hooks for local state
- **Real-time Updates**: Async/await for smooth API communication

## 🏗️ Architecture

### Backend Structure
```
backend/
├── app/
│   ├── api/v1/endpoints/
│   │   └── index.py          # Main API endpoints
│   ├── config/
│   │   ├── llm_setup.py      # Gemini AI configuration
│   │   └── system_instruction.py  # AI prompt engineering
│   ├── schema/
│   │   ├── request_body.py   # Request validation
│   │   └── response_body.py  # Response structure
│   └── main.py              # FastAPI application setup
└── requirements.txt         # Python dependencies
```

### Frontend Structure
```
frontend/recipe-ai/
├── src/app/
│   ├── page.tsx             # Main chat interface
│   ├── layout.tsx           # App layout
│   └── globals.css          # Global styles
├── public/                  # Static assets
└── package.json            # Node.js dependencies
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 18+
- Google Gemini API key

### Backend Setup

1. **Clone and navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   Create a `.env` file in the backend directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Start the backend server**:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend/recipe-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXT_PUBLIC_BACKEND_URI=http://localhost:8000
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📡 API Endpoints

### POST `/api/v1/genai`
Generates a recipe based on user input.

**Request Body**:
```json
{
  "user_message": "I have chicken, rice, and vegetables. I prefer Italian cuisine."
}
```

**Response**:
```json
{
  "role": "assistant",
  "title": "Italian Chicken Risotto",
  "description": "A creamy Italian risotto with chicken and vegetables",
  "ingredients": "Chicken breast, Arborio rice, vegetables, chicken broth, parmesan cheese",
  "instructions": [
    "Step 1: Prepare the chicken",
    "Step 2: Cook the risotto",
    "Step 3: Add vegetables and finish"
  ],
  "shoppingList": ["Arborio rice", "Chicken broth", "Parmesan cheese"],
  "cookingTip": "Keep the broth warm while cooking risotto for best results"
}
```

## 🎨 UI/UX Features

- **Chat-like Interface**: Familiar messaging layout for recipe queries
- **Message Types**: Distinct styling for user messages and AI responses
- **Structured Recipe Display**: Well-organized recipe information with proper formatting
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Loading States**: Smooth user experience during API calls
- **Auto-scroll**: Automatically scrolls to latest messages

## 🔧 Technical Implementation Highlights

### Backend
- **FastAPI with CORS**: Proper cross-origin resource sharing configuration
- **Pydantic Models**: Type-safe request/response validation
- **Gemini AI Integration**: Structured JSON responses using response schemas
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Environment Management**: Secure API key handling with python-dotenv

### Frontend
- **TypeScript**: Type-safe development with proper interfaces
- **React Hooks**: Modern state management with useState and useEffect
- **TailwindCSS**: Utility-first CSS framework for responsive design
- **Next.js App Router**: Latest Next.js features for optimal performance
- **Real-time Updates**: Async API communication with proper error handling

## 🧪 Testing the Application

1. Start both backend and frontend servers
2. Open the application in your browser
3. Type a recipe request like:
   - "I have chicken and rice, make me an Italian dish"
   - "I'm vegetarian and have tofu, suggest a recipe"
   - "I want a quick breakfast with eggs and bread"
4. View the AI-generated recipe with all details

## 📝 Environment Variables

### Backend (.env)
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_BACKEND_URI=http://localhost:8000
```

## 🚀 Deployment

### Backend Deployment
- Can be deployed to platforms like Railway, Render, or Heroku
- Ensure environment variables are set in deployment platform
- Use production-grade ASGI server like Gunicorn

### Frontend Deployment
- Deploy to Vercel, Netlify, or similar platforms
- Set environment variables in deployment platform
- Build command: `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This application demonstrates modern full-stack development practices with AI integration, showcasing clean code architecture, proper API design, and responsive user interfaces.