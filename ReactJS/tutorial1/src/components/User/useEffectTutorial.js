import { useState, useEffect} from "react";

function UseEffectTutorial() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState("Available");
  
  let updateCalc = () => {
    setCount(count+1)
    setCalculation(() => count >10 ? "Not Available":"Available");
  }

  useEffect(updateCalc, [count]); // <- add the count variable here

  return (
    <>
      <p>Seat Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Seats: {calculation}</p>
    </>
  );
}


export default UseEffectTutorial;