const handleClick = (parameter = "Hello") => {
    console.log(parameter)
  }

export default function Clicks() {
    return (
        <button onClick={() => handleClick("Hello")}>
            Hello
        </button>
    );
}