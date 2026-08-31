import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setName] = useState("");
  const [expenseCategory, setCategory] = useState("");
  const [expenseAmount, setAmount] = useState("");
  const [showForm, setShow] = useState(false);
  const [editingId, setEditArrIndex] = useState();
  const [updatedTitle, setUpdatedName] = useState("");
  const [updatedAmount, setUpdateAmount] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const addExpense = () => {
    setExpenses([
      ...expenses,
      {
        title: expenseName,
        id: Date.now(),
        category: expenseCategory,
        amount: expenseAmount,
      },
    ]);
    setShow(!showForm);
    setName("");
    setAmount("");
    setCategory("");
  };
  const deleteExp = (id) => {
    setExpenses(expenses.filter((val) => val.id != id));
  };
  const updateExp = (id) => {
    setExpenses(
      expenses.map((val) => {
        if (val.id === id) {
          val.title = updatedTitle;
          val.amount = updatedAmount;
          val.category = updatedCategory;
        }
        return val;
      }),
    );
    setEditArrIndex(null);
  };
  return (
    <>
      <div>
        {/*Add Expense Section */}
        <button
          onClick={() => setShow(!showForm)}
          className="border p-1 rounded-sm"
        >
          Add Expense
        </button>
      </div>
      {/* Expense Form */}
      <div className={showForm ? "block mt-6" : "hidden"}>
        <div>
          <label className="inline-block w-50">Enter Expense Title</label>
          <input
            type="text"
            placeholder="Enter Expense name"
            onChange={(e) => setName(e.target.value)}
            value={expenseName}
            className="border ml-2 mb-4 "
          />
        </div>
        <div>
          <label className="inline-block w-50">Enter Expense Amount</label>
          <input
            type="text"
            placeholder="Enter Expense amount"
            onChange={(e) => setAmount(e.target.value)}
            className="border ml-2 mb-4"
            value={expenseAmount}
          />
        </div>
        <div>
          <label className="inline-block w-50">Enter Expense Category</label>
          <input
            type="text"
            placeholder="Enter Expense category"
            onChange={(e) => setCategory(e.target.value)}
            className="border ml-2 mb-4 "
            value={expenseCategory}
          />
        </div>
        <button onClick={addExpense} className="border p-1 rounded-sm">
          Save Expense
        </button>
        <button
          className="border p-1 rounded-sm ml-4"
          onClick={() => setShow(!showForm)}
        >
          Hide Form
        </button>
      </div>
      <div>
        {/* Expense Details */}
        {expenses.map((val) => (
          <>
            {val.id !== editingId ? (
              <div key={val.id}>
                <div className="mt-4">
                  <label>Title:</label>
                  <span className="ml-2">{val.title}</span>
                </div>
                <div>
                  <label>Amount:</label>
                  <span className="ml-2">{val.amount}</span>
                </div>
                <div>
                  <label>Category:</label>
                  <span className="ml-2">{val.category}</span>
                </div>
                <div className="mt-2">
                  <button
                    className="border p-1 rounded-sm mr-4"
                    onClick={() => setEditArrIndex(val.id)}
                  >
                    Edit Expense
                  </button>
                  <button
                    className="border p-1 rounded-sm"
                    onClick={() => deleteExp(val.id)}
                  >
                    Delete Expense
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex gap-4">
                <input
                  type="text"
                  placeholder="update title"
                  onChange={(e) => setUpdatedName(e.target.value)}
                  value={updatedTitle}
                  className="border rounded-sm"
                />
                <input
                  type="text"
                  placeholder="update category"
                  onChange={(e) => setUpdatedCategory(e.target.value)}
                  value={updatedCategory}
                  className="border rounded-sm"
                />
                <input
                  type="text"
                  placeholder="update amount"
                  onChange={(e) => setUpdateAmount(e.target.value)}
                  value={updatedAmount}
                  className="border rounded-sm"
                />
                <button
                  onClick={() => updateExp(val.id)}
                  className="border p-1 rounded-sm"
                >
                  Update Expense
                </button>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default App;
