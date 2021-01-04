const form = document.getElementById("form");
const list = document.getElementById("list");
const money = document.getElementById("money");
const moneyPlus = document.getElementById("moneyPlus");
const moneyMinus = document.getElementById("moneyMinus");
const balance = document.getElementById("balance");
// const btnDelete = document.querySelector(".btnDelete");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");

form.onsubmit = function (e) {
    e.preventDefault();                                       // $(document).ready(function(){ $("body");

    const data = new FormData(form);
    const s = document.createElement("span");
    // const p = document.createElement("span");
    const li = document.createElement("li");
    const span = document.createElement("span");
    // const btn = document.querySelector(".btnDelete")

    s.innerHTML = data.get("addItems");
    // p.innerHTML = data.get("addTime");
    li.innerHTML = data.get("addDate");
    // li.innerHTML = `<button type="submit" class="btnDelete" onclick="removeTransaction()">x</button>data.get("addItems");
    span.innerHTML = data.get("addMoney");

    li.appendChild(s);
    // li.appendChild(p);
    list.appendChild(li);
    li.appendChild(span);

    if (data.get("addMoney") < 0) {
        balance.innerText = parseInt(balance.innerText) + parseInt(data.get("addMoney"));
        moneyMinus.innerText = parseInt(moneyMinus.innerText) + parseInt(data.get("addMoney"));
        li.style.borderRight = "4px solid Red";

    } else {
        balance.innerText = parseInt(balance.innerText) + parseInt(data.get("addMoney"));
        moneyPlus.innerText = parseInt(moneyPlus.innerText) + parseInt(data.get("addMoney"));
        li.style.borderRight = "4px solid Green";
    }
    // Year.slice(-2);
    form.reset();
    // btnDelete.onclick.classList.remove="list"
}

// function Clock() {
//     var c = new Date();
//     var h = c.getHours();
//     var m = c.getMinutes();
//     var s = c.getSeconds();
//     h = (h>12) ? h-12 : h;
//     var amPm = (h<12) ? AM : PM;
//     h=("0"+h).slice(-2);
//     m=("0"+m).slice(-2);
//     s=("0"+s).slice(-2);
//     timeInput.innerHTML = h+":"+m+":"+s+" "+ amPm;
//     setTimeout(Clock);
// }


        // li.innerHTML = data.get("addItems")
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

       // let item = {
        //     id: listItems.length + 1,
        //     addItems: data.get("addItems"),
        //     addMoney: data.get("addMoney"),
        //     isChecked: false,
        //   };
        //   listItems.push(item);
        //   list.innerHTML=""'

        //   init