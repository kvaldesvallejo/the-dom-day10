// Your code here
let input = document.querySelector("#addToDo");
input.addEventListener("keyup", addTodo);

let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
li.addEventListener("click", removeTodo);
//for (let l of li) {
//	l.addEventListener("click", removeTodo);
//}

function addTodo(event) {
	if (event.keyCode == 13) {
		let task = event.target.value;
		ul.innerHTML += `<li>
					<span><i class="fa fa-trash"></i></span> ${task}
				</li>`;

		console.log(event);
	}
}
function removeTodo(event) {
    console.log(event);
    alert("Hello World");
	//li.parentNode.removeChild(event);
}
