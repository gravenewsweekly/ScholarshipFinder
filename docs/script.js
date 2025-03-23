document.addEventListener("DOMContentLoaded", function () {
    const scholarships = [
        { name: "Tech Scholarship", category: "engineering", amount: "$5000" },
        { name: "Medical Scholars Grant", category: "medical", amount: "$3000" },
        { name: "Creative Arts Fund", category: "arts", amount: "$2000" },
        { name: "Business Excellence Award", category: "business", amount: "$4000" }
    ];

    const list = document.getElementById("scholarship-list");
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("category");

    function renderScholarships(filter = "") {
        list.innerHTML = "";
        let filtered = scholarships.filter(s => 
            s.name.toLowerCase().includes(filter.toLowerCase()) &&
            (categoryFilter.value === "all" || s.category === categoryFilter.value)
        );

        filtered.forEach(scholarship => {
            let div = document.createElement("div");
            div.classList.add("scholarship-card");
            div.innerHTML = `<h3>${scholarship.name}</h3><p>Category: ${scholarship.category}</p><p>Amount: ${scholarship.amount}</p>`;
            list.appendChild(div);
        });
    }

    searchInput.addEventListener("input", () => renderScholarships(searchInput.value));
    categoryFilter.addEventListener("change", () => renderScholarships(searchInput.value));

    renderScholarships();
});
