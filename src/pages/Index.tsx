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
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Expense Tracker</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <ExpenseForm onSubmit={handleAddExpense} />
          <ExpenseChart expenses={expenses} />
        </div>
        <div className="space-y-8">
          <ExpenseSummary expenses={expenses} />
          <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
};

export default Index;