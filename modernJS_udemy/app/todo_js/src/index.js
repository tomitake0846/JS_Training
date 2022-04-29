class IncompleteArea {
  #incompleteList;
  constructor() {
    this.#incompleteList = document.getElementById("incomplete-list");
  }

  addItem(toDoName){
    const toDoItem = this.#createToDoItem(toDoName);
    const incompleteListRow = this.#createIncompleteListRow(toDoItem);
    this.#incompleteList.appendChild(incompleteListRow);
  }

  #createToDoItem(toDoName){
    const li = document.createElement("li");
    li.innerText = toDoName;
    return li;
  }

  #createIncompleteListRow(toDoItem){
    const listRow = document.createElement("div");
    listRow.className = "list-row";
    listRow.appendChild(toDoItem);

    const completeButton = document.createElement("button");
    completeButton.innerText = "done";
    completeButton.addEventListener("click", () => this.#completeToDoItem(listRow));
    listRow.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click",() => this.#deleteToDoItem(listRow));
    listRow.appendChild(deleteButton);

    return listRow;
  }

  #completeToDoItem(listRow){
    const inputText = listRow.firstElementChild.innerText;
    completeArea.addItem(inputText);
    this.#deleteToDoItem(listRow);
  }
  #deleteToDoItem(listRow){
    this.#incompleteList.removeChild(listRow);
  }
}

class CompleteArea {
  #completeList;
  constructor() {
    this.#completeList = document.getElementById("complete-list");
  }
  addItem(toDoName){
    const toDoItem = this.#createToDoItem(toDoName);
    const completeListRow = this.#createCompleteListRow(toDoItem);
    this.#completeList.appendChild(completeListRow);
  }
  #createToDoItem(toDoName){
    const li = document.createElement("li");
    li.innerText = toDoName;
    return li;
  }
  #createCompleteListRow(toDoItem) {
    const listRow = document.createElement("div");
    listRow.className = "list-row";
    listRow.appendChild(toDoItem);

    const completeButton = document.createElement("button");
    completeButton.innerText = "cancel";
    completeButton.addEventListener("click", () => this.#cancelToDoItem(listRow));
    listRow.appendChild(completeButton);

    return listRow;
  }
  #cancelToDoItem(listRow){
    const inputText = listRow.firstElementChild.innerText;
    incompleteArea.addItem(inputText);
    this.#completeList.removeChild(listRow);
  }
}

const incompleteArea = new IncompleteArea(); 
const completeArea = new CompleteArea();

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  incompleteArea.addItem(inputText); 
}


document.getElementById("add-button").addEventListener("click", () => onClickAdd());
