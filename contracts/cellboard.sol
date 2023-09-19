// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

// Import the SafeMath library
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Cell{
      using SafeMath for int256;
    string[] ids = ["white", "black", "red"];
    uint256 private nonce = 0;
    
     constructor() {
      for(int i = 0; i < 35; i++){
            _cells[i] = ids[getRandomValue()];
        }
    }
   

    function getRandomValue() internal returns (uint256) {
        uint256 random = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    // block.difficulty,
                    nonce++
                )
            )
        );

        // Scale the random number to be between 0 and 2
        return random % 3;
    }

    mapping(int => string) public _cells;

    function solveundefinedX(int x1, int x2) internal pure returns(int){
        int x = x2 - x1;
         if(x == 0){
            return 1;
        }else{
            return x;
        }
    }
   

    function getColorforCells(int x1, int x2, int y1, int y2) public view returns(string memory, int){
        int y =  y2 - y1;
        int m = y / solveundefinedX(x1, x2);
        if(m < 0) {
            return (_cells[int256(-m)], int256(-m));
        }else{ 
         return (_cells[m], m);
    
    }
}
   
    
}  

