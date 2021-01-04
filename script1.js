const form = document.getElementById("form");
const list = document.getElementById("list");
const money = document.getElementById("money");
const moneyPlus = document.getElementById("moneyPlus");
const moneyMinus = document.getElementById("moneyMinus");
const balance = document.getElementById("balance");
const btnDelete = document.querySelector(".btnDelete");
let listItems = [
    { id: 1, type: "travel", cost: "100", date: "12/12/2020" }
]
// let num;
// const num = parseInt(p);

form.onsubmit = function (e) {
    e.preventDefault();                                       // $(document).ready(function(){ $("body");
    list.innerHTML = ""
    const data = new FormData(form);
    let item = {
        id: listItems.length + 1,
        type: data.get("addItems"),
        cost: data.get("addMoney"),
    }

    listItems.push(item);
    initTracker();
    // const span = document.createElement("span");
    // const btn = document.querySelector(".btnDelete")
    // // const listItems = [
    // //     { id: 1, addItems: "Travel", addMoney: 100, isChecked: false }
    // // ]

    // // li.innerHTML = data.get("addItems")
    // li.innerHTML = `<button type="submit" class="btnDelete" onclick="removeTransaction()">x</button>${data.get("addItems")}`;
    // span.innerHTML = data.get("addMoney");
    // // btn.add.classList="btnDelete";

    // list.appendChild(li);
    // li.appendChild(span);
    // // li.appendChild(btn);
    // // list.appendChild(btn);
    // // console.log("(" + span + ")");
    // if (data.get("addMoney") < 0) {
    //     balance.innerText = parseInt(balance.innerText) + parseInt(data.get("addMoney"));
    //     moneyMinus.innerText = parseInt(moneyMinus.innerText) + parseInt(data.get("addMoney"));
    //     li.style.borderRight = "4px solid Red";

    // } else {
    //     balance.innerText = parseInt(balance.innerText) + parseInt(data.get("addMoney"));
    //     moneyPlus.innerText = parseInt(moneyPlus.innerText) + parseInt(data.get("addMoney"));
    //     li.style.borderRight = "4px solid Green";
    // }
    // form.reset();
    // btnDelete.onclick.classList.remove="list"
}

function initTracker() {
    for (let i = 0; i < listItems.length; i++) {
        let item = document.createElement("li");

        item.innerHTML = `
        ${listItems[i].type}
        <span></span>
        <button class="btnDelete" id="btnDelete${listItems[i].id}">x</button>`

        list.appendChild(item)

        document.getElementById(`btnDelete${listItems[i].id}`)
            .addEventListener("click", function (e) {
                const selectedItem = document.getElementById(e.target.id);
                listItems = listItems.filter(function(it){
                    debugger
                    return it.id != e.target.id[9]
                })
                selectedItem.parentElement.innerHTML = ""
            })
    }
}


initTracker();




      // console.log("Rs"+(moneyPlus.innerText = data.get("addMoney")));
      // add(data);
     // li.innerHTML = data.get("addMoney");
    // if (data.get("addMoney") < 0) {
    //     balance.innerText = parseInt(balance.innerText) + parseInt(data.get("addMoney"));
    // } else {
    //     balance.innerText = parseInt(balance.innerText) + parseInt(data.get("addMoney"));
    //     // console.log("Rs"+(moneyPlus.innerText = data.get("addMoney")));
    //     // add(data);
    // }

    // function add(data) {
    //     return parseInt(moneyPlus.innerText) + parseInt(data.get("addMoney"));
    // };

    // form.onsubmit = function (e) {
    //     e.preventDefault();

    //     const data = new FormData(form);
    //     const p = document.createElement("p");

    //     p.innerHTML = data.get("addMoney");

    //     moneyPlus.appendChild(p);

    //     if(money>=0)
    //     moneyPlus.appendChild(p);
    // }else{
    //     moneyMinus.appendChild(p);

        // const p = document.createElement("p");

        // p.innerHTML = data.get("addMoney");

        // moneyPlus.append(p);
        // moneyPlus.innerText = moneyPlus.innerText + data.get("addMoney");
             // num=data("p")
        // if (p>=0) {
        //     moneyMinus.appendChild(p);
        // } else {
        //     moneyPlus.appendChild(p);
        // }
    // }


