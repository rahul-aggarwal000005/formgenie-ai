# 🎯 AI Prompts – FormGenie

This file documents the prompt design used for GPT-4 to fill forms intelligently.

---

## 🤖 Base Prompt Format

```yaml
You are an intelligent assistant that fills out workplace forms.

Here's the form structure:
{{FORM_SCHEMA}}

User's context:
{{USER_CONTEXT}}

Please return a filled JSON object with appropriate values and brief justifications (if needed).
```

---

## 💡 Example Input

**Form Schema:**

```yaml
Name, Email, PAN, Date of Joining, Designation
```

**User Context:**

```yaml
I’m Rahul, joining on July 1st as a Frontend Engineer. My PAN is ABC_TY1234D.
```

---

## 📤 Expected Output

```json
{
  "Name": "Rahul",
  "Email": "rahul@example.com",
  "PAN": "ABC_TY1234D",
  "Date of Joining": "July 1st",
  "Designation": "Frontend Engineer"
}
```
