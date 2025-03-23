const db = firebase.database();

// Function to Fetch Scholarships
function fetchScholarships() {
    db.ref("scholarships").on("value", (snapshot) => {
        let data = snapshot.val();
        let list = document.getElementById("scholarship-list");
        list.innerHTML = ""; 

        for (let id in data) {
            let scholarship = data[id];
            list.innerHTML += `
                <div class="card">
                    <h2>${scholarship.name}</h2>
                    <p>Category: ${scholarship.category}</p>
                    <p>Amount: ₹${scholarship.amount}</p>
                </div>
            `;
        }
    });
}

// Load Scholarships on Page Load
fetchScholarships();
