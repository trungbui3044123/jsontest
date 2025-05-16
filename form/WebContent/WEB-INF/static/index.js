// function btnevent(){
// // get value
// var prdname= document.getElementById("prdname").value;
// var prdcost= document.getElementById("prdcost").value;
// var store= document.getElementById("store").value;

// function validate(){
//     if(prdname.length>11){
//         alert("Input lower than 10, dont do the tricks");
//     }
// }


// // test
// function addtable(){
// const table=document.getElementById("table1");
// const tr=document.createElement("tr");

// const cell1=document.createElement("td");
// cell1.innerHTML=prdname;
// const cell2=document.createElement("td");
// cell2.innerHTML=prdcost;
// const cell3=document.createElement("td");
// cell3.innerHTML=store;
// tr.appendChild(cell1);
// tr.appendChild(cell2);
// tr.appendChild(cell3);

// table.appendChild(tr);
// }



// return false;

// }
// L?y gi? tr?

function btnevent() {
    var prdname = document.getElementById("prdname").value;
    var prdcost = document.getElementById("prdcost").value;
    var store = document.getElementById("store").value;

    // Ki?m tra h?p l?
    if (prdname.length > 10) {
        alert("Input lower than 10 charecter, dont play me!");
        return false; // Ng?n vi?c th?m v?o b?ng
    }
    if (!/^[0-9]+$/.test(prdcost)) {
        alert("Input number only!");
        return false; // Ng?n vi?c th?m v?o b?ng
    }

    // G?i function th?m v?o b?ng
    addtable(prdname, prdcost, store);
    return false;
}

// Ch?nh s?a function addtable ?? nh?n tham s?
function addtable(prdname, prdcost, store) {
    const table = document.getElementById("table1");
    const tr = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.innerHTML = prdname;
    const cell2 = document.createElement("td");
    cell2.innerHTML = prdcost;
    const cell3 = document.createElement("td");
    cell3.innerHTML = store;

    tr.appendChild(cell1);
    tr.appendChild(cell2);
    tr.appendChild(cell3);

    table.appendChild(tr);
}
// t?m bi?n table v? row
// khai b?o m?ng r?ng data c?a table 
// loop qua row > khai b?o m?ng r?ng data c?a row
// loop qua c?c cell
// push t?ng cell v?o rowdataa . D?ng innerText/ Textcontent/ innerHTML property(Tg t? .value)
// push data t?ng row v?o table (V?ng l?p row)
// S? d?ng data tableDATA
function submittable() {
    const table = document.getElementById("table1");
    const row = table.getElementsByTagName("tr");
    const tableData = [];
    var total = 0;
    for (let i = 0; i < row.length; i++) {
        const cell = row[i].getElementsByTagName("td");
        const rowData = [];
        for (let x = 0; x < cell.length; x++) {

            rowData.push(cell[x].innerText);
        }
        if (cell[1]) {
            total += Number(cell[1].innerText);
        }
        tableData.push(rowData);
    }
    console.log(total);
    document.getElementById("showData").innerText = total;
    if (total > 1100) {
        alert("Spendding to much today")
        document.getElementById("target").innerText = total;
    }
}

function showtext(total) {
    const xhttp = new XMLHttpRequest();
    // xhttp.onload = function () {
    //     console.log(xhttp.responseType);
    //     document.getElementById("loadtext").innerHTML = this.responseText;
    // }
    //xhttp.open("GET", "gpt.txt", false); // m? request t?i server
    const query = total;
    xhttp.open("POST", "/submitData", true); 
            if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText); // Hi?n th? d? li?u nh?n ???c
        }
     xhttp.send("total=" + encodeURIComponent(total));; // send request
}

function submit(){
    const query = document.querySelector("input[name='prdname']").value;
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "index.html?prdname=" + encodeURIComponent(query), true); // G?i request GET
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText); // Hi?n th? d? li?u nh?n ???c
        }
    };

    xhttp.send();
};
function totaltoserver(){
    const query = document.querySelector("input[name='prdname']").value;
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "index.html?prdname=" + encodeURIComponent(query), true); // G?i request GET
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText); // Hi?n th? d? li?u nh?n ???c
        }
    };

    xhttp.send();
};


// var thì từ 2015 trở đi hạn chế dùng
// const thì khai báo cho biến không đổi
// let thì khai báo cho biến thay đổi, nhưng bị giới hạn trong scope {}

//-> Trường hợp như này
    // const query = document.querySelector("input[name='prdname']").value;
    // const xhttp = new XMLHttpRequest();

    // xhttp.open("GET", "index.html?prdname=" + encodeURIComponent(query), true); // G?i request GET
    // xhttp.onreadystatechange = function() {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //         console.log(xhttp.responseText); // Hi?n th? d? li?u nh?n ???c
    //     }
    // };

// thì value lấy từ input vào là value biến đổi . thì đnags ra là dùng let. Cơ mà dùng let thifkhong dùng đc biến đó ở trong funtion khác