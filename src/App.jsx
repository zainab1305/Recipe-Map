import Header from "./components/Header";
import Form from "./components/Form";
import React from "react";
function App()
{
  return (
  <>
    <Header/>
    <Form/>
    </>
  )
}
// function App()
// {
//    const [count, setCount]=React.useState(0);
//   //  function subtract() {
//   //       setCount(count - 1)
//   //   }
//    function add() {
//     event.preventDefault()
//         setCount(prevCount=> prevCount + 1)
//     }
//     // if we want old value to new value we use callbacks else count is fine
//    function subtract(event)
//    {
//     event.preventDefault()
//     setCount(prevCount=> prevCount - 1)
//    }
//   return (
//         <>
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" onClick={add} aria-label="Increase count">+</button>
//             </div>
//         </>
//     )
// }
// function App()
// {
//   const [isGoingOut, setIsGoingOut]=React.useState(true)
//   function flip(event)
//   {
//     event.preventDefault()
//     setIsGoingOut((prev) => {
//       return prev===true ? false : true
//     })

//   }
//   return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value" onClick={flip}>{isGoingOut ? "yes": "no"}</button>
//         </main>
//     )
// }
export default App