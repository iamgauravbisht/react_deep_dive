// import {} from "react";

// function App() {
//   return (
//     <div>
//       <CardWrapper>
//         <CardWrapper>
//           <h1>Gaurav bisht</h1>
//         </CardWrapper>
//         <h2>GodLike</h2>
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({ children }) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert("hello");
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);

  // console.log(todos);
  function updateCounter() {
    setCount((prev) => prev + 1);
  }
  return (
    <CardWrapper>
      <button
        onClick={updateCounter}
        style={{ border: "2px solid green", padding: "15px 30px" }}
      >
        counter : {count}
      </button>
      <p>no. of todos : {todos.length}</p>
      {todos.length === 0 && <h1>Loading...</h1>}
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </CardWrapper>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
  );
}

export default App;
