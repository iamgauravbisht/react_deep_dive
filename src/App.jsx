import { useEffect, useState } from "react";
import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [count, setCount] = useState(0);

// This code will run only once when the component is mounted
// useEffect(() => {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     const json = await res.json();
//     setTodos(json.todos);
//   });
// }, []);
// useEffect(() => {
//   axios
//     .get("https://sum-server.100xdevs.com/todos")
//     .then((res) => {
//       setTodos(res.data.todos);
//     })
//     .catch((error) => {
//       console.error("Error fetching todos:", error);
//     });
// }, []);

// this code will run every 10 seconds
// useEffect(() => {
//   setInterval(() => {
//     fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//       const json = await res.json();
//       setTodos(json.todos);
//     });
//   }, 10000);
// }, []);

// this code will run every time the count variable changes
// useEffect(() => {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     const json = await res.json();
//     setTodos(json.todos);
//   });
// }, [count]);

//   function updateCounter() {
//     setCount((prev) => prev + 1);
//   }

//   return (
//     <CardWrapper>
//       <button
//         onClick={updateCounter}
//         style={{ border: "2px solid green", padding: "15px 30px" }}
//       >
//         counter : {count}
//       </button>
//       <p>no. of todos : {todos.length}</p>
//       {todos.length === 0 && <h1>Loading...</h1>}
//       {todos.map((todo) => {
//         return (
//           <div key={todo.id}>
//             <h1>{todo.title}</h1>
//             <p>{todo.description}</p>
//           </div>
//         );
//       })}
//     </CardWrapper>
//   );
// }

// function CardWrapper({ children }) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
//   );
// }

function App() {
  const [id, setId] = useState(1);

  function updateId() {
    setId((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={updateId}>Update Id {id}</button>
      <div>
        <button onClick={() => setId(1)}>1</button>
        <button onClick={() => setId(2)}>2</button>
        <button onClick={() => setId(3)}>3</button>
        <button onClick={() => setId(4)}>4</button>
      </div>
      <Todo id={id} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((res) => {
        setTodo(res.data.todo);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [id]);

  // if (todo.length === 0 || todo.title === undefined) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div key={todo.id}>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
