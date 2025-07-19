Medical Equipment Inventory Tracker
Hi there! 
This is a full-stack Medical Equipment Inventory Dashboard I built using Next.js, MongoDB, and OpenAI. It’s designed to help track, manage, and interact with hospital inventory — everything from adding new items to visualizing data, and even asking AI questions about your equipment stock.

🚀 What This Project Does
•	📦 A live-updating Inventory Table that lists all your medical equipment.
•	➕ A user-friendly Add Equipment Form to input new items.
•	📊 Charts & Summary Cards that give you a quick overview of inventory trends.
•	🤖 An AI Assistant (powered by OpenAI) that answers your inventory questions in plain English.

🛠️ Tech Stack
•	Frontend: Next.js 14, React, Tailwind CSS, ShadCN UI
•	Backend: Next.js API Routes, MongoDB Atlas (cloud NoSQL DB)
•	AI Integration: OpenAI GPT (custom prompt handling)
•	Visualization: Recharts for interactive graphs
•	Version Control: Git + GitHub

📦 How to Run This Locally
1. Clone the Repo
git clone https://github.com/YOUR_USERNAME/medical-equipment-inventory.git cd medical-equipment-inventory

3. Install Dependencies npm install

4. Set Up Environment Variables
Create a .env.local file and paste your values like this:
MONGODB_URI=your_mongo_connection_string
OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000

5. Start the Dev Server
npm run dev
Then open http://localhost:3000 in your browser.

🧠 What the AI Assistant Can Do
You can ask it things like:
•	What’s the total value of all ventilators?
•	How many X-ray machines do we have?
•	Which manufacturer has the most items?
It’s built to interpret your question and fetch real data from the MongoDB database.

📁 Project Structure (Simplified)
•	/app -> api/ai, api/equipment
•	/components -> AddEquipmentForm.tsx, AIChat.tsx, ResourceTable.tsx
•	/lib -> mongo.ts, resources.ts
•	/public -> illustrations/

🙋‍♂️ About Me
Hey! I’m Vikramjeet Paul, a Computer Science & Engineering student with a passion for building full-stack apps that solve real problems.

GitHub: https://github.com/VikramjeetPaul
LinkedIn: https://linkedin.com/in/vikramjeetpaul
