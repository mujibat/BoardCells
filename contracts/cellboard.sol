// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Cell{
    string[] ids = ["white", "black", "red"];
    uint256 private nonce = 0;

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

    mapping(uint => string) public _cells;

    function getColorforCells(uint x1, uint x2, uint y1, uint y2) public view returns(string memory, uint){
        uint x = x2 - x1;
        uint y =  y2 - y1;
        uint m = y / x;
        // console.log(m, "kkjkjkkjk");
         return (_cells[m], m);
        //return m;
    }
    constructor() {
      for(uint i = 0; i < 35; i++){
            _cells[i] = ids[getRandomValue()];
        }
    }
    
}  
