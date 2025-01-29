import React, { useState } from "react";
import { ExpenseForm } from "@/components/ExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";
import { ExpenseChart } from "@/components/ExpenseChart";
import { ExpenseSummary } from "@/components/ExpenseSummary";

interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

const Index = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (newExpense: Omit<Expense, "id">) => {
    const expense = {
      ...newExpense,
      id: crypto.randomUUID(),
    };
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container mx-auto lg:py-12 lg:px-12 bg-transparent">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-center font-sans text-pretty text-blue-600 shadow-md rounded-md transform hover:scale-110 transition-transform duration-300">Expense Tracker</h1>
        <img 
          src="/logo.webp" 
          alt="Expense Tracker Logo" 
          width={120} 
          height={80} 
          className="rounded-md shadow-md transform hover:scale-110 transition-transform duration-300" 
        />
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <ExpenseForm onSubmit={handleAddExpense} />
          <ExpenseChart expenses={expenses} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <ExpenseSummary expenses={expenses} />
          <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
  
};

export default Index;