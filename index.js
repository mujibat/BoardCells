// let cellzero = document.getElementById("Cell0")

// function cell0() {
//     cellzero
// }
document.addEventListener("DOMContentLoaded", () => {
    // ... Previous code for querying cell color ...

    // Function to create a cell element with a click event listener
    function createCell(color) {
        const cell = document.createElement("div");
        cell.className = "box";
        cell.style.backgroundColor = color;
        cell.addEventListener("click", () => {
            alert(`Cell Color: ${color}`);
        });
        return cell;
    }

    // Function to generate and append cells to the container
    function generateCells() {
        const container = document.querySelector(".cell-container");

        // Replace these colors with the actual colors from your Solidity contract
        const colors = ["white", "black", "red"];

        for (const color of colors) {
            const cell = createCell(color);
            container.appendChild(cell);
        }
    }

    // Generate the cells when the page loads
    generateCells();
});
