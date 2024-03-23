import produce from "immer";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { MouseEvent, useState } from "react";
import ExpandableText from "./components/ExpandableText";
import ExpandableTxt from "./components/ExpandableTxt";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  //const [alertVisible, setAlertVisible] = useState(false);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const longText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ratione inventore, eveniet beatae consectetur reprehenderit non nostrum libero delectus voluptatem asperiores molestias adipisci, officiis nihil quia explicabo qui dolores? Ad voluptatem voluptatum soluta distinctio adipisci, in numquam laudantium veritatis dolore illum iure omnis sed! Eos ipsum, commodi aut, magni iusto maiores ex rerum pariatur veniam obcaecati dicta? Perspiciatis nulla minima distinctio modi illum nihil ducimus excepturi, sed exercitationem voluptatem aperiam dolorem voluptates animi saepe cumque error maiores similique eum! Minus harum nobis laborum perferendis laudantium, maiores est quam repudiandae earum quos! Obcaecati ex nihil, ad perspiciatis minima vitae ipsam sint!";
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <ListGroup
  //     items={items}
  //     heading="Cities"
  //     onSelectedItem={handleSelectedItem}
  //   />
  // );
  return (
    // <div>
    //   {alertVisible && (
    //     <Alert text="Hello World" onClose={() => setAlertVisible(false)} />
    //   )}
    //   <Button children="My Button" onClick={() => setAlertVisible(true)} />
    // </div>
    // <div>
    //   {bugs.map((bug) => (
    //     <p key={bug.id}>
    //       {bug.title} {bug.fixed ? "Fixed" : "New"}
    //     </p>
    //   ))}
    //   <button onClick={handleClick}>Click Me</button>
    // </div>
    // <ExpandableTxt children={longText} />
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div>
        <ExpenseList
          expenses={visibleCategory}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}
export default App;
