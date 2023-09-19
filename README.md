# BoardCells Web Application

This is a simple web application that allows you to query and display colors for specific cells on a board. You can specify the coordinates of the cells, and the application will retrieve the color associated with those coordinates from a smart contract on the Ethereum blockchain.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [MetaMask](https://metamask.io/): A digital wallet for interacting with Ethereum applications.
- [Node.js](https://nodejs.org/): JavaScript runtime for running web applications.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/BoardCells.git
   ```

2. Navigate to the project directory:

   ```bash
   cd BoardCells
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Connect Your Wallet: Click the "Connect Wallet" button to connect your MetaMask wallet.

4. Query Cell Color:
   - Enter the X and Y coordinates of the cells you want to query in the input fields (X1, X2, Y1, Y2).
   - Click the "Submit" button.

5. View Results:
   - The color of the specified cells will be displayed in the corresponding boxes on the board.

## Smart Contract

This application interacts with an Ethereum smart contract deployed at the address `0xf04Eacc35543d74d9F51b682581fD4474926D3FE`. The contract ABI is provided in the code.

## Troubleshooting

- If MetaMask is not detected, please make sure you have it installed and unlocked in your browser.
- Ensure that you have provided valid coordinates (between 0 and 35) when querying cell colors.
