function Counter1() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((currentCount) => currentCount + 1);
    }

    return (
        <div>
            <span>Contador "Local" : {count}</span>
            {" "}
            <button onClick={increment}>+</button>
        </div>
    );
}



function Counter2({ value = 0, onIncrement = null}) {
    function increment() {
        if (onIncrement){
            onIncrement();
        }
    }

    return (
        <div>
        <span>Contador "Global" : {count}</span>
        {" "}
        <button onClick={increment}>+</button>
    </div>
    );
}