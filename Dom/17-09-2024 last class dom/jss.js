async function fetchInfo() {
    let info = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await info.json();
    console.log(data);
}
fetchInfo()