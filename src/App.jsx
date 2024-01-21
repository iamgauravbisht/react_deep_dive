// import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

// function App() {
//   const [n, setN] = useState(0);
//   const [count, setCount] = useState(0);
//   function countValue() {
//     setCount(0);
//     for (let i = 0; i < n; i++) {
//       setCount((prev) => prev + i);
//     }
//   }

//   return (
//     <div>
//       <input onChange={(e) => setN(e.target.value)} />
//       <br />
//       <button onClick={countValue}>Click to Calculate</button>
//       <br />
//       Sum from 1 to n is: {count};
//     </div>
//   );
// }

function App() {
  const [n, setN] = useState(0);
  const [counter, setCounter] = useState(0);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("inside useEffect");
  //   for (let i = 0; i <= n; i++) {
  //     setCount((prev) => prev + i);
  //   }
  // }, [n]);

  let countValue = useMemo(() => {
    console.log("inside useMemo");
    let count = 0;
    for (let i = 0; i < n; i++) {
      count += i;
    }
    return count;
  }, [n]);

  return (
    <div>
      <input onChange={(e) => setN(e.target.value)} />
      <br />
      Sum from 1 to n is: {countValue}
      {/* Sum from 1 to n is: {count} */}
      <br />
      <button onClick={() => setCounter((c) => c + 1)}>
        Counter : {counter}
      </button>
    </div>
  );
}

export default App;
