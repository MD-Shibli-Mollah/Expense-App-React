import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Electricity Bill", amount: 500, date: new Date(2022, 6, 1) },
    { title: "House Rent", amount: 409.05, date: new Date(2022, 6, 3) },
    { title: "Gas Bill", amount: 201, date: new Date(2022, 6, 5) },
    { title: "Medicines", amount: 453, date: new Date(2022, 6, 9) },
  ];
  return (
    <div>
      <h2>Alhamdulillah! Let's initiate!!!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
