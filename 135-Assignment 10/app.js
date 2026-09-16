// Q. Using the Hipo University API, create a webpage that allows the user to search and display colleges/universities located in different states of India, such as Odisha, Andhra Pradesh, Tamil Nadu, etc.


let url = "http://universities.hipolabs.com/search?country=India";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;

    let colArr = await getColleges();

    let stateColleges = colArr.filter((col) => {
        return col["state-province"]?.toLowerCase() === state.toLowerCase();
});

show(stateColleges);

});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    
    for (let col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log("error:", err)
        return [];
    }
}