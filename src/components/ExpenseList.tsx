import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  const handleDelete = (id: string) => {
    onDelete(id);
    toast.success("Expense deleted successfully!");
  };

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <Card key={expense.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {expense.description}
            </CardTitle>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(expense.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              Delete
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium">Amount</p>
                <p className="text-2xl font-bold">₹{expense.amount}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Category</p>
                <p className="text-lg">{expense.category}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Date</p>
                <p className="text-lg">{new Date(expense.date).toLocaleDateString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}