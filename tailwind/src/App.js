import "./App.css";
import Card from "./Card";
function App() {
  let myobj = {
    uname: "kaps",
    age: 22,
  };

  return (
    <>
      <h1 className="text-7xl text-center bg-green-400 mb-4 text-black p-4 rounded-xl">
        hello world
      </h1>
      <Card name="kapil" obj={myobj} btn="click me" />
      <Card name="soham" obj={myobj} btn="visit" />
      <Card name="kekre" obj={myobj} />
    </>
  );
}

export default App;
