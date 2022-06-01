import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Electricity Bill", amount: 500, date: new Date(2022, 6, 1) },
    { title: "House Rent", amount: 409.05, date: new Date(2022, 6, 3) },
    { title: "Gas Bill", amount: 201, date: new Date(2022, 6, 5) },
    { title: "Medicines", amount: 453, date: new Date(2022, 6, 9) },
  ];
  return (
    <div>
      <h2>Alhamdulillah! Let's initiate!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
