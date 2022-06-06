import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// function App(){return...}

const DUMMY_EXPENSES = [
  { id: "e1", title: "miscellaneous", amount: 500, date: new Date(2022, 6, 1) },
  { id: "e2", title: "House Rent", amount: 409.05, date: new Date(2022, 6, 3) },
  { id: "e3", title: "Gas Bill", amount: 201, date: new Date(2022, 6, 5) },
  { id: "e4", title: "Medicines", amount: 453, date: new Date(2022, 6, 9) },
];

const App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses];
      });   
    //console.log("In App.js");
    //console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
