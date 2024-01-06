import React from "react";

function App() {
  return (
    <>
      <Header title={"Gaurav Bisht 1"} />
      <Header title={"Gaurav Bisht 2"} />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
