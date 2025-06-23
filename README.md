# FinGeniusAI

FinGeniusAI is a modern, AI-powered personal finance management web application. It empowers users to track income, expenses, budgets, and accounts with an intuitive dashboard, smart analytics, and a seamless user experience.

---

## 🚀 Features

- **User Authentication**  
  Secure sign-up and sign-in with protected routes.
- **Dashboard Overview**  
  Visual summary of accounts, budgets, income, and expenses.
- **Account Management**  
  - Create, edit, and view multiple accounts  
  - Set a default account  
  - Visualize account balances and transactions
- **Transaction Management**  
  - Add, edit, and delete transactions  
  - Categorize transactions (income/expense)  
  - Attach receipts via a built-in receipt scanner  
  - Recurring transaction support
- **Budget Tracking**  
  - Set monthly budgets  
  - Visual progress bars for budget usage  
  - Category-wise budget breakdown
- **Analytics & Charts**  
  - Income vs. expense charts  
  - Transaction overviews  
  - Account balance trends
- **Email Notifications**  
  - Transaction and budget alerts  
  - Customizable email templates
- **AI-Powered Features**  
  - Smart receipt scanning and data extraction  
  - Intelligent categorization (extendable)
- **Responsive UI**  
  - Mobile-friendly design  
  - Modern UI components

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS  
- **Backend:** Next.js API routes, Prisma ORM  
- **Database:** PostgreSQL (via Prisma) / SQLite (development)  
- **Authentication:** NextAuth.js  
- **Email:** Nodemailer  
- **AI/ML:** Custom receipt scanning logic  
- **Notifications:** Sonner  
- **Icons:** Lucide Icons  
- **Validation:** Zod

## 💻Project Structure

FinGeniusAI/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── components/       # Shared UI components
│   └── page.jsx          # Main page
├── prisma/               # Prisma schema & migrations
├── public/               # Static assets
├── styles/               # Global CSS and Tailwind configs
├── .env                  # Environment variables
├── next.config.js        # Next.js configuration
├── package.json
└── README.md

## ✨ Usage

1. **Sign up** for a new account or **sign in**.  
2. **Create accounts** (e.g., Bank, Cash, Credit Card).  
3. **Add transactions** (income or expense), attach receipts, and categorize them.  
4. **Set budgets** for different categories and track your progress.  
5. **View analytics** on the dashboard for a quick financial overview.  
6. **Receive email notifications** for important events.  

---

## 🌐 Web UI
   - 👉🏻Check Deployed Site: [Live Demo](https://fin-genius-ai.vercel.app/)
   
   - **Home Page**<br><br>![Main Dashboard](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/main_dashboard1.png)
   - **Dashboard - Expenses Visualization**<br><br>![After Running the model](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/main_dashboard2.png)
   - **Dashboard - Accounts Overview**<br><br>![Categorised table](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/categorised_table.png)
   - **Account - Transactions Overview**<br><br>![Category Distribution Bar Graph](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/category_distribution_bar_graph.png)
   - **Account - Transactions Table**<br><br>![ Supplier By Amount Distribution Bar Graph](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/supplier_amount_distribution.png)
   - **Add Transaction Form**<br><br>![Supplier Distribution Pie Chart](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/supplier_distribution_pie_chart.png)
 - **Monthly Report**<br><br>![Supplier Distribution Pie Chart](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/supplier_distribution_pie_chart.png)
- **AI Insight Report**<br><br>![Supplier Distribution Pie Chart](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/supplier_distribution_pie_chart.png)
   - **Budget Alert**<br><br>![Supplier Distribution Pie Chart](https://github.com/komal2203/acme-spend-categorization/blob/main/ui_images_for_readme/supplier_distribution_pie_chart.png)
 

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For support or business inquiries, please contact: [your-email@example.com]

---

FinGeniusAI — Take control of your finances, intelligently.

