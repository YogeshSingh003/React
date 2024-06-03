import Card from "./components/Card";

function App() {
  let obj = {
    nam: "Yogesh Singh",
    age: 23,
    occupation: "Software Engineer",
  };
  return (
    <>
      <div className="flex justify-around h-screen items-center">
        <Card details={obj} />
        {/* <Card /> */}
      </div>
    </>
  );
}

export default App;
