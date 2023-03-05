import { useState, useEffect } from "react";

function Hello() {
    // function destroyFn() {
    //   console.log("bye :(");
    // }
    // function effectFn() {
    //   console.log("created :)");
    //   return destroyFn;
    // }
    useEffect(() => {
        console.log("Hi :)");
        return () => console.log("Bye :(")
    }, []);
    return <h1>Hello</h1>;
}

function Cleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
        {showing? <Hello /> : null}
        <button onClick={onClick}>{showing? "hide" : "show"}</button>
        </div>
    );
}

export default Cleanup;
