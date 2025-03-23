const db = firebase.database();

function addScholarship() {
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;

    if (name === "" || category === "" || amount === "") {
        alert("All fields are required!");
        return;
    }

    let newScholarship = db.ref("scholarships").push();
    newScholarship.set({
        name: name,
        category: category,
        amount: amount
    });

    alert("Scholarship Added Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}
