# FormGenie 🧞‍♂️ – AI Form Assistant for Internal Teams

**FormGenie** is an AI-powered tool that helps teams auto-fill, explain, and export forms faster using GPT-4. Whether it's HR onboarding, finance reimbursement, or admin requests – FormGenie saves time and ensures form clarity.

---

## 🚀 Features

- 📄 Upload or describe your form structure (JSON or manual)
- 🤖 Let AI auto-fill the form based on intent
- ❓ Field-level explanations for complex fields
- 💾 Export filled forms as JSON or PDF
- 🧠 GPT-4 based prompt tuning and smart assumptions

---

## 🧰 Tech Stack

- **Frontend:** Next.js 15 (App Router), TailwindCSS, ShadCN UI
- **Backend:** Next.js API routes / server actions
- **AI:** OpenAI GPT-4
- **Database:** MongoDB Atlas
- **Auth (optional):** Clerk.dev / NextAuth.js
- **Deployment:** Vercel

---

## ✨ How It Works

1. User uploads form schema or enters fields manually
2. User gives context or intent ("I'm an engineer joining on 1st July")
3. GPT-4 fills out the form + adds explanations
4. User can edit, improve, and export the final form

---

## 📦 Local Setup

```bash
git clone https://github.com/rahulaggarwal/formgenie-ai.git
cd formgenie-ai
npm install
npm run dev
```

You’ll need an .env.local with your OpenAI API key:

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxx
```