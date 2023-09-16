import { ethers } from "hardhat";

async function main() {

  const lock = await ethers.deployContract("Cell", []);

  await lock.waitForDeployment();

  console.log(lock.target
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// import { ethers } from "hardhat";

// // Ethereum provider URL (replace with your Ethereum node URL or Infura project URL)
// const providerUrl = "YOUR_ETHEREUM_PROVIDER_URL";

// // Replace with your contract ABI
// const contractABI: any[] = [
//     [{"inputs":[{"internalType":"int256","name":"x1","type":"int256"},{"internalType":"int256","name":"x2","type":"int256"},{"internalType":"int256","name":"y1","type":"int256"},{"internalType":"int256","name":"y2","type":"int256"}],"name":"loopthruValuesforCells","outputs":[],"stateMutability":"nonpayable","type":"function"}]
//   // Your contract ABI goes here
// ];

// // Replace with your contract address
// const contractAddress = "0xbE91503551d7b390186A8fec2296Fe8403cd0378";

// // Function to calculate m value and query cell color
// async function queryCellColor(x1: number, x2: number, y1: number, y2: number) {
//   try {
//     // Initialize ethers provider
//     const provider = new ethers.JsonRpcProvider(providerUrl);

//     // Connect to the contract
//     const contract = new ethers.Contract(contractAddress, contractABI, provider);

//     // Calculate m value
//     const x = x2 - x1;
//     const y = y2 - y1;
//     const m = y / x;

//     // Ensure that m is within the valid range (0 to 34)
//     if (m < 0 || m > 34) {
//       console.error("Invalid m value. It should be in the range of 0 to 34.");
//       return;
//     }

//     // Call the contract function to query cell color
//     const cellColor = await contract.loopthruValuesforCells(x1, x2, y1, y2);

//     console.log(`m: ${m}, Cell Color: ${cellColor}`);
//   } catch (error) {
//     console.error("Error querying cell color:", error);
//   }
// }

// // Example usage: Get user input for coordinates
// const x1 = parseInt(prompt("Enter X1:"));
// const x2 = parseInt(prompt("Enter X2:"));
// const y1 = parseInt(prompt("Enter Y1:"));
// const y2 = parseInt(prompt("Enter Y2:"));

// if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) {
//   console.error("Invalid input. Please enter valid numeric coordinates.");
// } else {
//   // Call the function to query cell color with user-provided coordinates
//   queryCellColor(x1, x2, y1, y2);
// }

// // ethers.js script to interact with the ColorGrid contract

// const ethers = require('ethers');

// const provider = new ethers.providers.JsonRpcProvider('YOUR_ETHEREUM_PROVIDER_URL'); // Replace with your Ethereum provider URL
// const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
// const abi = [/* Replace with your contract ABI */];

// const contract = new ethers.Contract(contractAddress, abi, provider);

// // Function to query the colors of cells within the specified range
// async function getColors(x1, x2, y1, y2) {
//     try {
//         const colors = await contract.getColor(x1, x2, y1, y2);
//         return colors;
//     } catch (error) {
//         console.error('Error querying colors:', error);
//         return null; // Return null to indicate an error
//     }
// }

// // Function to create and display the grid
// async function createGrid() {
//     const gridContainer = document.getElementById('grid-container');
//     const resultDiv = document.getElementById('result');

//     // Function to convert color index to color name
//     function getColorName(index) {
//         switch (index) {
//             case 0:
//                 return 'Red';
//             case 1:
//                 return 'Green';
//             case 2:
//                 return 'Blue';
//             default:
//                 return 'Unknown';
//         }
//     }

//     // Get user input values
//     const x1 = parseInt(document.getElementById('x1').value);
//     const x2 = parseInt(document.getElementById('x2').value);
//     const y1 = parseInt(document.getElementById('y1').value);
//     const y2 = parseInt(document.getElementById('y2').value);

//     if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) {
//         alert('Please enter valid numeric values for coordinates.');
//         return;
//     }

//     const colors = await getColors(x1, x2, y1, y2);

//     if (colors === null) {
//         alert('Error querying colors.');
//         return;
//     }

//     for (

// */
