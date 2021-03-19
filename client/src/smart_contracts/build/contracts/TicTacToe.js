const data = {
  "contractName": "TicTacToe",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "GameDraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "winner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "GameWon",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "SetID",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "betAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "roomId",
          "type": "string"
        }
      ],
      "name": "SuccessDeposit",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "roomID",
          "type": "string"
        }
      ],
      "name": "setid",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "roomID",
          "type": "string"
        }
      ],
      "name": "getid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "createPlayer",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "TotalBet",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "Winner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "player",
          "type": "address"
        }
      ],
      "name": "getBet",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "Draw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"GameDraw\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"GameWon\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"SetID\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"betAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"roomId\",\"type\":\"string\"}],\"name\":\"SuccessDeposit\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ID\",\"type\":\"uint256\"}],\"name\":\"Draw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ID\",\"type\":\"uint256\"}],\"name\":\"TotalBet\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"Winner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ID\",\"type\":\"uint256\"}],\"name\":\"createPlayer\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"}],\"name\":\"getBet\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"roomID\",\"type\":\"string\"}],\"name\":\"getid\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"roomID\",\"type\":\"string\"}],\"name\":\"setid\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/ASUS/Desktop/AirHockey/client/src/smart_contracts/contracts/TicTacToe.sol\":\"TicTacToe\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/ASUS/Desktop/AirHockey/client/src/smart_contracts/contracts/TicTacToe.sol\":{\"keccak256\":\"0xe59ba17e96b0d13155d856ea295cbfc4ca651f1bb99446ce05cd066f6f79a1ed\",\"urls\":[\"bzz-raw://6ced6ee8b1e3ea007ea5600e3e8f1bc33809ee2bfd0312e8beca5b774cbcc78e\",\"dweb:/ipfs/QmTHJkzqtorjjMBDDUyMa3rNRGSGrSUhUTbBcPqwrmvWV2\"]}},\"version\":1}",
  "bytecode": "0x608060405261138860005534801561001657600080fd5b50610f78806100266000396000f3fe6080604052600436106100705760003560e01c8063c24d443a1161004e578063c24d443a146101d1578063c860165414610299578063dbfb6b54146102e8578063f7566b491461031657610070565b80632ec31526146100755780633fd10e0b146100ba5780634c93703b146100f5575b600080fd5b34801561008157600080fd5b506100b86004803603604081101561009857600080fd5b81019080803590602001909291908035906020019092919050505061037b565b005b3480156100c657600080fd5b506100f3600480360360208110156100dd57600080fd5b81019080803590602001909291905050506104d4565b005b34801561010157600080fd5b506101bb6004803603602081101561011857600080fd5b810190808035906020019064010000000081111561013557600080fd5b82018360208201111561014757600080fd5b8035906020019184600183028401116401000000008311171561016957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610809565b6040518082815260200191505060405180910390f35b3480156101dd57600080fd5b50610297600480360360208110156101f457600080fd5b810190808035906020019064010000000081111561021157600080fd5b82018360208201111561022357600080fd5b8035906020019184600183028401116401000000008311171561024557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061087c565b005b3480156102a557600080fd5b506102d2600480360360208110156102bc57600080fd5b81019080803590602001909291905050506109d4565b6040518082815260200191505060405180910390f35b610314600480360360208110156102fe57600080fd5b8101908080359060200190929190505050610bd5565b005b34801561032257600080fd5b506103656004803603602081101561033957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e0a565b6040518082815260200191505060405180910390f35b6000600360008481526020019081526020016000209050600060018260405180828054600181600116156101000203166002900480156103f25780601f106103d05761010080835404028352918201916103f2565b820191906000526020600020905b8154815290600101906020018083116103de575b50509150509081526020016040518091039020838154811061041057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000805460020261044d866109d4565b03905061045a8282610e53565b7f2ffb5e4748e43f6ca515f554cade99a469e03fa57973c54c2cb30d8d4cb788d9828286604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a15050505050565b60006003600083815260200190815260200160002090506000600182604051808280546001816001161561010002031660029004801561054b5780601f1061052957610100808354040283529182019161054b565b820191906000526020600020905b815481529060010190602001808311610537575b5050915050908152602001604051809103902060008154811061056a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000805461064b60018560405180828054600181600116156101000203166002900480156105fc5780601f106105da5761010080835404028352918201916105fc565b820191906000526020600020905b8154815290600101906020018083116105e8575b5050915050908152602001604051809103902060008154811061061b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e0a565b039050600060018460405180828054600181600116156101000203166002900480156106ae5780601f1061068c5761010080835404028352918201916106ae565b820191906000526020600020905b81548152906001019060200180831161069a575b505091505090815260200160405180910390206001815481106106cd57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600080546107ae600187604051808280546001816001161561010002031660029004801561075f5780601f1061073d57610100808354040283529182019161075f565b820191906000526020600020905b81548152906001019060200180831161074b575b5050915050908152602001604051809103902060018154811061077e57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e0a565b0390506107bb8484610e53565b6107c58282610e53565b7fe5416c5dd91041c0ecfbade51ac1605e188bf26c47cd90d429da2617abfcc7916001604051808215151515815260200191505060405180910390a1505050505050565b60006004826040518082805190602001908083835b60208310610841578051825260208201915060208101905060208303925061081e565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b60006004826040518082805190602001908083835b602083106108b45780518252602082019150602081019050602083039250610891565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054141561099557600160055401600581905550806003600060055481526020019081526020016000209080519060200190610923929190610e9e565b506005546004826040518082805190602001908083835b6020831061095d578051825260208201915060208101905060208303925061093a565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055505b7f1b4d994d2e4863e894725bd9cb3f79df4b8187686b727486841a06d8095af4456001604051808215151515815260200191505060405180910390a150565b6000806003600084815260200190815260200160002090506000600260006001846040518082805460018160011615610100020316600290048015610a505780601f10610a2e576101008083540402835291820191610a50565b820191906000526020600020905b815481529060010190602001808311610a3c575b50509150509081526020016040518091039020600081548110610a6f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600260006001856040518082805460018160011615610100020316600290048015610b3b5780601f10610b19576101008083540402835291820191610b3b565b820191906000526020600020905b815481529060010190602001808311610b27575b50509150509081526020016040518091039020600181548110610b5a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000818301905080945050505050919050565b6000600360008381526020019081526020016000209050600033905060003490506001836040518082805460018160011615610100020316600290048015610c545780601f10610c32576101008083540402835291820191610c54565b820191906000526020600020905b815481529060010190602001808311610c40575b505091505090815260200160405180910390208290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f19f540f30ed9b4d7130a7a39aa29c73ffa62c4ee9fa0a9ece73485c1cd635811828285604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610df45780601f10610dc957610100808354040283529160200191610df4565b820191906000526020600020905b815481529060010190602001808311610dd757829003601f168201915b505094505050505060405180910390a150505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610e99573d6000803e3d6000fd5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610edf57805160ff1916838001178555610f0d565b82800160010185558215610f0d579182015b82811115610f0c578251825591602001919060010190610ef1565b5b509050610f1a9190610f1e565b5090565b610f4091905b80821115610f3c576000816000905550600101610f24565b5090565b9056fea265627a7a72315820ab48e9f1b70318e64295864ab2d8314247b53b15f1911c1df58ed52d5f53d28164736f6c63430005100032",
  "deployedBytecode": "0x6080604052600436106100705760003560e01c8063c24d443a1161004e578063c24d443a146101d1578063c860165414610299578063dbfb6b54146102e8578063f7566b491461031657610070565b80632ec31526146100755780633fd10e0b146100ba5780634c93703b146100f5575b600080fd5b34801561008157600080fd5b506100b86004803603604081101561009857600080fd5b81019080803590602001909291908035906020019092919050505061037b565b005b3480156100c657600080fd5b506100f3600480360360208110156100dd57600080fd5b81019080803590602001909291905050506104d4565b005b34801561010157600080fd5b506101bb6004803603602081101561011857600080fd5b810190808035906020019064010000000081111561013557600080fd5b82018360208201111561014757600080fd5b8035906020019184600183028401116401000000008311171561016957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610809565b6040518082815260200191505060405180910390f35b3480156101dd57600080fd5b50610297600480360360208110156101f457600080fd5b810190808035906020019064010000000081111561021157600080fd5b82018360208201111561022357600080fd5b8035906020019184600183028401116401000000008311171561024557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061087c565b005b3480156102a557600080fd5b506102d2600480360360208110156102bc57600080fd5b81019080803590602001909291905050506109d4565b6040518082815260200191505060405180910390f35b610314600480360360208110156102fe57600080fd5b8101908080359060200190929190505050610bd5565b005b34801561032257600080fd5b506103656004803603602081101561033957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e0a565b6040518082815260200191505060405180910390f35b6000600360008481526020019081526020016000209050600060018260405180828054600181600116156101000203166002900480156103f25780601f106103d05761010080835404028352918201916103f2565b820191906000526020600020905b8154815290600101906020018083116103de575b50509150509081526020016040518091039020838154811061041057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000805460020261044d866109d4565b03905061045a8282610e53565b7f2ffb5e4748e43f6ca515f554cade99a469e03fa57973c54c2cb30d8d4cb788d9828286604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a15050505050565b60006003600083815260200190815260200160002090506000600182604051808280546001816001161561010002031660029004801561054b5780601f1061052957610100808354040283529182019161054b565b820191906000526020600020905b815481529060010190602001808311610537575b5050915050908152602001604051809103902060008154811061056a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000805461064b60018560405180828054600181600116156101000203166002900480156105fc5780601f106105da5761010080835404028352918201916105fc565b820191906000526020600020905b8154815290600101906020018083116105e8575b5050915050908152602001604051809103902060008154811061061b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e0a565b039050600060018460405180828054600181600116156101000203166002900480156106ae5780601f1061068c5761010080835404028352918201916106ae565b820191906000526020600020905b81548152906001019060200180831161069a575b505091505090815260200160405180910390206001815481106106cd57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600080546107ae600187604051808280546001816001161561010002031660029004801561075f5780601f1061073d57610100808354040283529182019161075f565b820191906000526020600020905b81548152906001019060200180831161074b575b5050915050908152602001604051809103902060018154811061077e57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e0a565b0390506107bb8484610e53565b6107c58282610e53565b7fe5416c5dd91041c0ecfbade51ac1605e188bf26c47cd90d429da2617abfcc7916001604051808215151515815260200191505060405180910390a1505050505050565b60006004826040518082805190602001908083835b60208310610841578051825260208201915060208101905060208303925061081e565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b60006004826040518082805190602001908083835b602083106108b45780518252602082019150602081019050602083039250610891565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054141561099557600160055401600581905550806003600060055481526020019081526020016000209080519060200190610923929190610e9e565b506005546004826040518082805190602001908083835b6020831061095d578051825260208201915060208101905060208303925061093a565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055505b7f1b4d994d2e4863e894725bd9cb3f79df4b8187686b727486841a06d8095af4456001604051808215151515815260200191505060405180910390a150565b6000806003600084815260200190815260200160002090506000600260006001846040518082805460018160011615610100020316600290048015610a505780601f10610a2e576101008083540402835291820191610a50565b820191906000526020600020905b815481529060010190602001808311610a3c575b50509150509081526020016040518091039020600081548110610a6f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600260006001856040518082805460018160011615610100020316600290048015610b3b5780601f10610b19576101008083540402835291820191610b3b565b820191906000526020600020905b815481529060010190602001808311610b27575b50509150509081526020016040518091039020600181548110610b5a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000818301905080945050505050919050565b6000600360008381526020019081526020016000209050600033905060003490506001836040518082805460018160011615610100020316600290048015610c545780601f10610c32576101008083540402835291820191610c54565b820191906000526020600020905b815481529060010190602001808311610c40575b505091505090815260200160405180910390208290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f19f540f30ed9b4d7130a7a39aa29c73ffa62c4ee9fa0a9ece73485c1cd635811828285604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610df45780601f10610dc957610100808354040283529160200191610df4565b820191906000526020600020905b815481529060010190602001808311610dd757829003601f168201915b505094505050505060405180910390a150505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610e99573d6000803e3d6000fd5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610edf57805160ff1916838001178555610f0d565b82800160010185558215610f0d579182015b82811115610f0c578251825591602001919060010190610ef1565b5b509050610f1a9190610f1e565b5090565b610f4091905b80821115610f3c576000816000905550600101610f24565b5090565b9056fea265627a7a72315820ab48e9f1b70318e64295864ab2d8314247b53b15f1911c1df58ed52d5f53d28164736f6c63430005100032",
  "sourceMap": "117:3699:1:-;;;213:4;189:28;;117:3699;8:9:-1;5:2;;;30:1;27;20:12;5:2;117:3699:1;;;;;;;",
  "deployedSourceMap": "117:3699:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2713:334;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2713:334:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2713:334:1;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3334:477;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3334:477:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3334:477:1;;;;;;;;;;;;;;;;;:::i;:::-;;1396:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1396:105:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1396:105:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1396:105:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1396:105:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1396:105:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1396:105:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;977:332;;8:9:-1;5:2;;;30:1;27;20:12;5:2;977:332:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;977:332:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;977:332:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;977:332:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;977:332:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;977:332:1;;;;;;;;;;;;;;;:::i;:::-;;2230:251;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2230:251:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2230:251:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1698:304;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1698:304:1;;;;;;;;;;;;;;;;;:::i;:::-;;3104:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3104:98:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3104:98:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2713:334;2768:21;2790:9;:13;2800:2;2790:13;;;;;;;;;;;2768:35;;2814:30;2861:4;2866:6;2861:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2874:5;2861:19;;;;;;;;;;;;;;;;;;;;;;;;;2814:68;;2893:13;2922:10;;2920:1;:12;2907;2916:2;2907:8;:12::i;:::-;:25;2893:39;;2943:36;2954:14;2970:8;2943:10;:36::i;:::-;2995:40;3003:14;3019:8;3029:5;2995:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2713:334;;;;;:::o;3334:477::-;3376:21;3398:9;:13;3408:2;3398:13;;;;;;;;;;;3376:35;;3422:31;3470:4;3475:6;3470:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3483:1;3470:15;;;;;;;;;;;;;;;;;;;;;;;;;3422:65;;3498:9;3532:10;;3508:23;3515:4;3520:6;3515:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3528:1;3515:15;;;;;;;;;;;;;;;;;;;;;;;;;3508:6;:23::i;:::-;:34;3498:44;;3553:31;3601:4;3606:6;3601:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3614:1;3601:15;;;;;;;;;;;;;;;;;;;;;;;;;3553:65;;3629:9;3663:10;;3639:23;3646:4;3651:6;3646:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3659:1;3646:15;;;;;;;;;;;;;;;;;;;;;;;;;3639:6;:23::i;:::-;:34;3629:44;;3684:33;3695:15;3712:4;3684:10;:33::i;:::-;3728;3739:15;3756:4;3728:10;:33::i;:::-;3777:14;3786:4;3777:14;;;;;;;;;;;;;;;;;;;;;;3334:477;;;;;;:::o;1396:105::-;1453:4;1476:9;1486:6;1476:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1476:17:1;;;;;;;;;;;;;;;;;;;;;;1469:24;;1396:105;;;:::o;977:332::-;1145:1;1126:9;1136:6;1126:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1126:17:1;;;;;;;;;;;;;;;;;;;;;;:20;1123:152;;;1180:1;1171:8;;:10;1162:8;:19;;;;1216:6;1196:9;:19;1206:8;;1196:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;1255:8;;1237:9;1247:6;1237:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1237:17:1;;;;;;;;;;;;;;;;;;;;;:26;;;;1123:152;1290:11;1296:4;1290:11;;;;;;;;;;;;;;;;;;;;;;977:332;:::o;2230:251::-;2277:4;2294:21;2316:9;:13;2326:2;2316:13;;;;;;;;;;;2294:35;;2340:9;2350:7;:24;2358:4;2363:6;2358:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2371:1;2358:15;;;;;;;;;;;;;;;;;;;;;;;;;2350:24;;;;;;;;;;;;;;;;2340:34;;2385:9;2395:7;:24;2403:4;2408:6;2403:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2416:1;2403:15;;;;;;;;;;;;;;;;;;;;;;;;;2395:24;;;;;;;;;;;;;;;;2385:34;;2430:10;2446:4;2441;:9;2430:20;;2468:5;2461:12;;;;;;2230:251;;;:::o;1698:304::-;1756:21;1778:9;:13;1788:2;1778:13;;;;;;;;;;;1756:35;;1802:14;1819:10;1802:27;;1840:14;1856:9;1840:25;;1876:4;1881:6;1876:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1894:6;1876:25;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1876:25:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1928:9;1912:7;:15;1920:6;1912:15;;;;;;;;;;;;;;;:25;;;;1953:41;1968:6;1976:9;1987:6;1953:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1698:304;;;;:::o;3104:98::-;3156:4;3179:7;:15;3187:6;3179:15;;;;;;;;;;;;;;;;3172:22;;3104:98;;;:::o;2066:111::-;2143:6;:15;;:26;2159:9;2143:26;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2143:26:1;2066:111;;:::o;117:3699::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity >0.5.11;\r\n\r\n\r\n// The game logic will be implemented in this file\r\n\r\ncontract TicTacToe{\r\n\r\n    // Storing the commission as 5000 Wei\r\n\r\n    uint private commission=5000;\r\n\r\n    // Created a Mapping Game which maps from string to address array\r\n\r\n    mapping(string=>address[]) private Game;\r\n    \r\n    // Created Mapping BettAmt which maps from adddress to uint\r\n    // It maps from address of player to bet amount\r\n\r\n    mapping(address=>uint) private BettAmt;\r\n    \r\n    // Created Mapping to store the unique id vs room id string\r\n    \r\n    mapping(uint=>string) private RoomIDMap;\r\n    \r\n    // Created Mapping to store the room id string vs unique id\r\n    \r\n    mapping(string=>uint) private IDRoomMap;\r\n    \r\n    // Set a Unique ID\r\n    \r\n    uint private uniqueid;\r\n\r\n    event SetID(\r\n        bool status\r\n    );\r\n    \r\n    // Set the mappings with room id string vs unique id and unique id vs room id string\r\n    \r\n    function setid(string memory roomID) public{\r\n        // If the room ID already exists in the mapping then it will not create a new one \r\n        if(IDRoomMap[roomID]==0){\r\n            uniqueid=uniqueid+1;\r\n            RoomIDMap[uniqueid]=roomID;\r\n            IDRoomMap[roomID]=uniqueid;\r\n        }\r\n        emit SetID(true);\r\n    }\r\n    \r\n    // Get Function which returns the unique id for given string id\r\n    \r\n    function getid(string memory roomID) public view returns(uint){\r\n        return IDRoomMap[roomID];\r\n    }\r\n\r\n    event SuccessDeposit(\r\n        address sender,\r\n        uint betAmount,\r\n        string roomId\r\n    );\r\n    \r\n    // Function which accept a payment from the user and creates a user\r\n\r\n    function createPlayer(uint ID) external payable{\r\n        string storage RoomID=RoomIDMap[ID];\r\n        address sender = msg.sender;\r\n        uint betamount= msg.value;\r\n        Game[RoomID].push(sender);\r\n        BettAmt[sender]=betamount;\r\n        emit SuccessDeposit(sender, betamount, RoomID);\r\n    }\r\n\r\n    // Function to send the bet amount to the winner\r\n\r\n    function sendBetAmt(address payable winner,uint bettedAmt) private{\r\n        winner.transfer(bettedAmt);\r\n    }\r\n    \r\n    // Calculate the Total Bet Amount\r\n\r\n    function TotalBet(uint ID) public view returns(uint) {\r\n        string storage RoomID=RoomIDMap[ID];\r\n        uint Bet0=BettAmt[Game[RoomID][0]];\r\n        uint Bet1=BettAmt[Game[RoomID][1]];\r\n        uint total=Bet0+Bet1;\r\n        return total;\r\n    }\r\n\r\n    event GameWon(\r\n        address winner,\r\n        uint amount,\r\n        uint index\r\n\r\n    );\r\n    // Function to take the winner index as input\r\n    // It calculates the Winner address and send total bet to the person\r\n\r\n    function Winner(uint ID,uint index) external{\r\n        string storage RoomID=RoomIDMap[ID];\r\n        address payable winner_address=address(uint160(Game[RoomID][index]));\r\n        uint totalBet=TotalBet(ID)-2*commission;\r\n        sendBetAmt(winner_address, totalBet);\r\n        emit GameWon(winner_address, totalBet, index);\r\n\r\n\r\n    }\r\n\r\n    // Function for Get Bet Amount By Address\r\n\r\n    function getBet(address player) public view returns(uint){\r\n        return BettAmt[player];\r\n    }\r\n\r\n    event GameDraw(\r\n        bool status\r\n    );\r\n\r\n    // Function to send money to both players if it is draw game\r\n    \r\n    function Draw(uint ID) external{\r\n        string storage RoomID=RoomIDMap[ID];\r\n        address payable player0_address=address(uint160(Game[RoomID][0]));\r\n        uint bet0=getBet(Game[RoomID][0])-commission;\r\n        address payable player1_address=address(uint160(Game[RoomID][1]));\r\n        uint bet1=getBet(Game[RoomID][1])-commission;\r\n        sendBetAmt(player0_address, bet0);\r\n        sendBetAmt(player1_address, bet1);\r\n        emit GameDraw(true);\r\n\r\n        \r\n    }\r\n\r\n}",
  "sourcePath": "C:/Users/ASUS/Desktop/AirHockey/client/src/smart_contracts/contracts/TicTacToe.sol",
  "ast": {
    "absolutePath": "/C/Users/ASUS/Desktop/AirHockey/client/src/smart_contracts/contracts/TicTacToe.sol",
    "exportedSymbols": {
      "TicTacToe": [
        358
      ]
    },
    "id": 359,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          ">",
          "0.5",
          ".11"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 358,
        "linearizedBaseContracts": [
          358
        ],
        "name": "TicTacToe",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 37,
            "name": "commission",
            "nodeType": "VariableDeclaration",
            "scope": 358,
            "src": "189:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 35,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "189:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "35303030",
              "id": 36,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "213:4:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000_by_1",
                "typeString": "int_const 5000"
              },
              "value": "5000"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 42,
            "name": "Game",
            "nodeType": "VariableDeclaration",
            "scope": 358,
            "src": "299:39:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
              "typeString": "mapping(string => address[])"
            },
            "typeName": {
              "id": 41,
              "keyType": {
                "id": 38,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "307:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "299:26:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                "typeString": "mapping(string => address[])"
              },
              "valueType": {
                "baseType": {
                  "id": 39,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "315:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 40,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "315:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 46,
            "name": "BettAmt",
            "nodeType": "VariableDeclaration",
            "scope": 358,
            "src": "471:38:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 45,
              "keyType": {
                "id": 43,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "479:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "471:22:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 44,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "488:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 50,
            "name": "RoomIDMap",
            "nodeType": "VariableDeclaration",
            "scope": 358,
            "src": "593:39:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 49,
              "keyType": {
                "id": 47,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "601:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "593:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 48,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "607:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 54,
            "name": "IDRoomMap",
            "nodeType": "VariableDeclaration",
            "scope": 358,
            "src": "716:39:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint256_$",
              "typeString": "mapping(string => uint256)"
            },
            "typeName": {
              "id": 53,
              "keyType": {
                "id": 51,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "724:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "716:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint256_$",
                "typeString": "mapping(string => uint256)"
              },
              "valueType": {
                "id": 52,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "732:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 56,
            "name": "uniqueid",
            "nodeType": "VariableDeclaration",
            "scope": 358,
            "src": "798:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "798:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 60,
            "name": "SetID",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58,
                  "indexed": false,
                  "name": "status",
                  "nodeType": "VariableDeclaration",
                  "scope": 60,
                  "src": "850:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "850:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "839:29:1"
            },
            "src": "828:41:1"
          },
          {
            "body": {
              "id": 94,
              "nodeType": "Block",
              "src": "1020:289:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "IDRoomMap",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1126:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint256_$",
                          "typeString": "mapping(string memory => uint256)"
                        }
                      },
                      "id": 67,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 66,
                        "name": "roomID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62,
                        "src": "1136:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1126:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 68,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1145:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1126:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 89,
                  "nodeType": "IfStatement",
                  "src": "1123:152:1",
                  "trueBody": {
                    "id": 88,
                    "nodeType": "Block",
                    "src": "1147:128:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 74,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 70,
                            "name": "uniqueid",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "1162:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 73,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 71,
                              "name": "uniqueid",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56,
                              "src": "1171:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 72,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1180:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1171:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1162:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 75,
                        "nodeType": "ExpressionStatement",
                        "src": "1162:19:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 80,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 76,
                              "name": "RoomIDMap",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50,
                              "src": "1196:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                "typeString": "mapping(uint256 => string storage ref)"
                              }
                            },
                            "id": 78,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 77,
                              "name": "uniqueid",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56,
                              "src": "1206:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1196:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "roomID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62,
                            "src": "1216:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "1196:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 81,
                        "nodeType": "ExpressionStatement",
                        "src": "1196:26:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 86,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 82,
                              "name": "IDRoomMap",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54,
                              "src": "1237:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint256_$",
                                "typeString": "mapping(string memory => uint256)"
                              }
                            },
                            "id": 84,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 83,
                              "name": "roomID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62,
                              "src": "1247:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1237:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 85,
                            "name": "uniqueid",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "1255:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1237:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 87,
                        "nodeType": "ExpressionStatement",
                        "src": "1237:26:1"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1296:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 90,
                      "name": "SetID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "1290:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1290:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 93,
                  "nodeType": "EmitStatement",
                  "src": "1285:16:1"
                }
              ]
            },
            "documentation": null,
            "id": 95,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setid",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "name": "roomID",
                  "nodeType": "VariableDeclaration",
                  "scope": 95,
                  "src": "992:20:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "992:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "991:22:1"
            },
            "returnParameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1020:0:1"
            },
            "scope": 358,
            "src": "977:332:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 106,
              "nodeType": "Block",
              "src": "1458:43:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 102,
                      "name": "IDRoomMap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "1476:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint256_$",
                        "typeString": "mapping(string memory => uint256)"
                      }
                    },
                    "id": 104,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 103,
                      "name": "roomID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 97,
                      "src": "1486:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1476:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 101,
                  "id": 105,
                  "nodeType": "Return",
                  "src": "1469:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 107,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getid",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 97,
                  "name": "roomID",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1411:20:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:22:1"
            },
            "returnParameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1453:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:6:1"
            },
            "scope": 358,
            "src": "1396:105:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 115,
            "name": "SuccessDeposit",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 109,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 115,
                  "src": "1540:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 108,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1540:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 111,
                  "indexed": false,
                  "name": "betAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 115,
                  "src": "1565:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 110,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 113,
                  "indexed": false,
                  "name": "roomId",
                  "nodeType": "VariableDeclaration",
                  "scope": 115,
                  "src": "1590:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 112,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1590:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1529:81:1"
            },
            "src": "1509:102:1"
          },
          {
            "body": {
              "id": 155,
              "nodeType": "Block",
              "src": "1745:257:1",
              "statements": [
                {
                  "assignments": [
                    121
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121,
                      "name": "RoomID",
                      "nodeType": "VariableDeclaration",
                      "scope": 155,
                      "src": "1756:21:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 120,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1756:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 125,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 122,
                      "name": "RoomIDMap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "1778:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 124,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 123,
                      "name": "ID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 117,
                      "src": "1788:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1778:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1756:35:1"
                },
                {
                  "assignments": [
                    127
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 127,
                      "name": "sender",
                      "nodeType": "VariableDeclaration",
                      "scope": 155,
                      "src": "1802:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 126,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1802:7:1",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 130,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 128,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "1819:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1819:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1802:27:1"
                },
                {
                  "assignments": [
                    132
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 132,
                      "name": "betamount",
                      "nodeType": "VariableDeclaration",
                      "scope": 155,
                      "src": "1840:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 131,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1840:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 135,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 133,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "1856:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1856:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1840:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "1894:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 136,
                          "name": "Game",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "1876:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                            "typeString": "mapping(string memory => address[] storage ref)"
                          }
                        },
                        "id": 138,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 137,
                          "name": "RoomID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121,
                          "src": "1881:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1876:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1876:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1876:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 142,
                  "nodeType": "ExpressionStatement",
                  "src": "1876:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 143,
                        "name": "BettAmt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "1912:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 145,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "1920:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1912:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 146,
                      "name": "betamount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 132,
                      "src": "1928:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1912:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1912:25:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 150,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "1968:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "betamount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 132,
                        "src": "1976:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "RoomID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1987:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string storage pointer"
                        }
                      ],
                      "id": 149,
                      "name": "SuccessDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115,
                      "src": "1953:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,string memory)"
                      }
                    },
                    "id": 153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1953:41:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 154,
                  "nodeType": "EmitStatement",
                  "src": "1948:46:1"
                }
              ]
            },
            "documentation": null,
            "id": 156,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createPlayer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 117,
                  "name": "ID",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1720:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1720:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1719:9:1"
            },
            "returnParameters": {
              "id": 119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1745:0:1"
            },
            "scope": 358,
            "src": "1698:304:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 169,
              "nodeType": "Block",
              "src": "2132:45:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 166,
                        "name": "bettedAmt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 160,
                        "src": "2159:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 163,
                        "name": "winner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 158,
                        "src": "2143:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2143:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2143:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 168,
                  "nodeType": "ExpressionStatement",
                  "src": "2143:26:1"
                }
              ]
            },
            "documentation": null,
            "id": 170,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendBetAmt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 158,
                  "name": "winner",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2086:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:15:1",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 160,
                  "name": "bettedAmt",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "2109:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 159,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2109:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2085:39:1"
            },
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2132:0:1"
            },
            "scope": 358,
            "src": "2066:111:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 211,
              "nodeType": "Block",
              "src": "2283:198:1",
              "statements": [
                {
                  "assignments": [
                    178
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 178,
                      "name": "RoomID",
                      "nodeType": "VariableDeclaration",
                      "scope": 211,
                      "src": "2294:21:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 177,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2294:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 182,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "RoomIDMap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "2316:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 181,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "ID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 172,
                      "src": "2326:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2316:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2294:35:1"
                },
                {
                  "assignments": [
                    184
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 184,
                      "name": "Bet0",
                      "nodeType": "VariableDeclaration",
                      "scope": 211,
                      "src": "2340:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 183,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2340:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 192,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "BettAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "2350:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 191,
                    "indexExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 186,
                          "name": "Game",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "2358:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                            "typeString": "mapping(string memory => address[] storage ref)"
                          }
                        },
                        "id": 188,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 187,
                          "name": "RoomID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2363:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2358:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 190,
                      "indexExpression": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2371:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2358:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2350:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2340:34:1"
                },
                {
                  "assignments": [
                    194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 194,
                      "name": "Bet1",
                      "nodeType": "VariableDeclaration",
                      "scope": 211,
                      "src": "2385:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 193,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2385:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 202,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "BettAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "2395:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 201,
                    "indexExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 196,
                          "name": "Game",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "2403:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                            "typeString": "mapping(string memory => address[] storage ref)"
                          }
                        },
                        "id": 198,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 197,
                          "name": "RoomID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2408:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2403:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 200,
                      "indexExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2416:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2403:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2395:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2385:34:1"
                },
                {
                  "assignments": [
                    204
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 204,
                      "name": "total",
                      "nodeType": "VariableDeclaration",
                      "scope": 211,
                      "src": "2430:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 203,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2430:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 208,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 205,
                      "name": "Bet0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 184,
                      "src": "2441:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 206,
                      "name": "Bet1",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 194,
                      "src": "2446:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2441:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2430:20:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 209,
                    "name": "total",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 204,
                    "src": "2468:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 176,
                  "id": 210,
                  "nodeType": "Return",
                  "src": "2461:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 212,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "TotalBet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 172,
                  "name": "ID",
                  "nodeType": "VariableDeclaration",
                  "scope": 212,
                  "src": "2248:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 171,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2248:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2247:9:1"
            },
            "returnParameters": {
              "id": 176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 175,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 212,
                  "src": "2277:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 174,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2277:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2276:6:1"
            },
            "scope": 358,
            "src": "2230:251:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 220,
            "name": "GameWon",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 214,
                  "indexed": false,
                  "name": "winner",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "2513:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2513:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 216,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "2538:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 215,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2538:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 218,
                  "indexed": false,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 220,
                  "src": "2560:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 217,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2560:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2502:77:1"
            },
            "src": "2489:91:1"
          },
          {
            "body": {
              "id": 266,
              "nodeType": "Block",
              "src": "2757:290:1",
              "statements": [
                {
                  "assignments": [
                    228
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 228,
                      "name": "RoomID",
                      "nodeType": "VariableDeclaration",
                      "scope": 266,
                      "src": "2768:21:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 227,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2768:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 232,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 229,
                      "name": "RoomIDMap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "2790:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 231,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 230,
                      "name": "ID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 222,
                      "src": "2800:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2790:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2768:35:1"
                },
                {
                  "assignments": [
                    234
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 234,
                      "name": "winner_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 266,
                      "src": "2814:30:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 233,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2814:15:1",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 244,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 237,
                                "name": "Game",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42,
                                "src": "2861:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                                  "typeString": "mapping(string memory => address[] storage ref)"
                                }
                              },
                              "id": 239,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 238,
                                "name": "RoomID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 228,
                                "src": "2866:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2861:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 241,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 240,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 224,
                              "src": "2874:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2861:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2853:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": "uint160"
                        },
                        "id": 242,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2853:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      ],
                      "id": 235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2845:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2845:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2814:68:1"
                },
                {
                  "assignments": [
                    246
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 246,
                      "name": "totalBet",
                      "nodeType": "VariableDeclaration",
                      "scope": 266,
                      "src": "2893:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 245,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2893:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 254,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 248,
                          "name": "ID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "2916:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 247,
                        "name": "TotalBet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 212,
                        "src": "2907:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2907:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 250,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2920:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 251,
                        "name": "commission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "2922:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2920:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2907:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2893:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 256,
                        "name": "winner_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 234,
                        "src": "2954:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 257,
                        "name": "totalBet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 246,
                        "src": "2970:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 255,
                      "name": "sendBetAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "2943:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256)"
                      }
                    },
                    "id": 258,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2943:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 259,
                  "nodeType": "ExpressionStatement",
                  "src": "2943:36:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 261,
                        "name": "winner_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 234,
                        "src": "3003:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 262,
                        "name": "totalBet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 246,
                        "src": "3019:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 263,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 224,
                        "src": "3029:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 260,
                      "name": "GameWon",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2995:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2995:40:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 265,
                  "nodeType": "EmitStatement",
                  "src": "2990:45:1"
                }
              ]
            },
            "documentation": null,
            "id": 267,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Winner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 222,
                  "name": "ID",
                  "nodeType": "VariableDeclaration",
                  "scope": 267,
                  "src": "2729:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 221,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2729:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 224,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 267,
                  "src": "2737:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 223,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2737:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2728:20:1"
            },
            "returnParameters": {
              "id": 226,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2757:0:1"
            },
            "scope": 358,
            "src": "2713:334:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 278,
              "nodeType": "Block",
              "src": "3161:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 274,
                      "name": "BettAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "3179:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 276,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 275,
                      "name": "player",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 269,
                      "src": "3187:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3179:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 273,
                  "id": 277,
                  "nodeType": "Return",
                  "src": "3172:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 279,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 269,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "3120:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3120:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3119:16:1"
            },
            "returnParameters": {
              "id": 273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 272,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "3156:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 271,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3156:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3155:6:1"
            },
            "scope": 358,
            "src": "3104:98:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 283,
            "name": "GameDraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 282,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 281,
                  "indexed": false,
                  "name": "status",
                  "nodeType": "VariableDeclaration",
                  "scope": 283,
                  "src": "3235:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 280,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3235:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3224:29:1"
            },
            "src": "3210:44:1"
          },
          {
            "body": {
              "id": 356,
              "nodeType": "Block",
              "src": "3365:446:1",
              "statements": [
                {
                  "assignments": [
                    289
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 289,
                      "name": "RoomID",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "3376:21:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 288,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3376:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 293,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 290,
                      "name": "RoomIDMap",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "3398:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 292,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 291,
                      "name": "ID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 285,
                      "src": "3408:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3398:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3376:35:1"
                },
                {
                  "assignments": [
                    295
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 295,
                      "name": "player0_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "3422:31:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 294,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3422:15:1",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 305,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 298,
                                "name": "Game",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42,
                                "src": "3470:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                                  "typeString": "mapping(string memory => address[] storage ref)"
                                }
                              },
                              "id": 300,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 299,
                                "name": "RoomID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 289,
                                "src": "3475:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3470:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 302,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 301,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3483:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3470:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3462:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": "uint160"
                        },
                        "id": 303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3462:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      ],
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3454:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3454:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3422:65:1"
                },
                {
                  "assignments": [
                    307
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 307,
                      "name": "bet0",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "3498:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 306,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3498:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 317,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 309,
                              "name": "Game",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42,
                              "src": "3515:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                                "typeString": "mapping(string memory => address[] storage ref)"
                              }
                            },
                            "id": 311,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 310,
                              "name": "RoomID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 289,
                              "src": "3520:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3515:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 313,
                          "indexExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3528:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3515:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 308,
                        "name": "getBet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 279,
                        "src": "3508:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3508:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 315,
                      "name": "commission",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37,
                      "src": "3532:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3508:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3498:44:1"
                },
                {
                  "assignments": [
                    319
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 319,
                      "name": "player1_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "3553:31:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 318,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3553:15:1",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 329,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 322,
                                "name": "Game",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42,
                                "src": "3601:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                                  "typeString": "mapping(string memory => address[] storage ref)"
                                }
                              },
                              "id": 324,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 323,
                                "name": "RoomID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 289,
                                "src": "3606:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3601:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 326,
                            "indexExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3614:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3601:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3593:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": "uint160"
                        },
                        "id": 327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3593:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      ],
                      "id": 320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3585:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3585:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3553:65:1"
                },
                {
                  "assignments": [
                    331
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 331,
                      "name": "bet1",
                      "nodeType": "VariableDeclaration",
                      "scope": 356,
                      "src": "3629:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 330,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3629:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 341,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 333,
                              "name": "Game",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42,
                              "src": "3646:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_address_$dyn_storage_$",
                                "typeString": "mapping(string memory => address[] storage ref)"
                              }
                            },
                            "id": 335,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 334,
                              "name": "RoomID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 289,
                              "src": "3651:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3646:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 337,
                          "indexExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 336,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3659:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3646:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 332,
                        "name": "getBet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 279,
                        "src": "3639:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3639:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 339,
                      "name": "commission",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37,
                      "src": "3663:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3639:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3629:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 343,
                        "name": "player0_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 295,
                        "src": "3695:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 344,
                        "name": "bet0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 307,
                        "src": "3712:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 342,
                      "name": "sendBetAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "3684:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256)"
                      }
                    },
                    "id": 345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3684:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 346,
                  "nodeType": "ExpressionStatement",
                  "src": "3684:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 348,
                        "name": "player1_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 319,
                        "src": "3739:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 349,
                        "name": "bet1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 331,
                        "src": "3756:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 347,
                      "name": "sendBetAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "3728:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_payable_$_t_uint256_$returns$__$",
                        "typeString": "function (address payable,uint256)"
                      }
                    },
                    "id": 350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3728:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 351,
                  "nodeType": "ExpressionStatement",
                  "src": "3728:33:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3786:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 352,
                      "name": "GameDraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 283,
                      "src": "3777:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3777:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 355,
                  "nodeType": "EmitStatement",
                  "src": "3772:19:1"
                }
              ]
            },
            "documentation": null,
            "id": 357,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Draw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 285,
                  "name": "ID",
                  "nodeType": "VariableDeclaration",
                  "scope": 357,
                  "src": "3348:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 284,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3348:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3347:9:1"
            },
            "returnParameters": {
              "id": 287,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3365:0:1"
            },
            "scope": 358,
            "src": "3334:477:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 359,
        "src": "117:3699:1"
      }
    ],
    "src": "33:3783:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/C/Users/ASUS/Desktop/AirHockey/client/src/smart_contracts/contracts/TicTacToe.sol",
      "exportedSymbols": {
        "TicTacToe": [
          358
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">",
            "0.5",
            ".11"
          ]
        },
        "id": 34,
        "name": "PragmaDirective",
        "src": "33:24:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            358
          ],
          "name": "TicTacToe",
          "scope": 359
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "commission",
              "scope": 358,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 35,
                "name": "ElementaryTypeName",
                "src": "189:4:1"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "35303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 5000",
                  "value": "5000"
                },
                "id": 36,
                "name": "Literal",
                "src": "213:4:1"
              }
            ],
            "id": 37,
            "name": "VariableDeclaration",
            "src": "189:28:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "Game",
              "scope": 358,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string => address[])",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string => address[])"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 38,
                    "name": "ElementaryTypeName",
                    "src": "307:6:1"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "address[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 39,
                        "name": "ElementaryTypeName",
                        "src": "315:7:1"
                      }
                    ],
                    "id": 40,
                    "name": "ArrayTypeName",
                    "src": "315:9:1"
                  }
                ],
                "id": 41,
                "name": "Mapping",
                "src": "299:26:1"
              }
            ],
            "id": 42,
            "name": "VariableDeclaration",
            "src": "299:39:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "BettAmt",
              "scope": 358,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 43,
                    "name": "ElementaryTypeName",
                    "src": "479:7:1"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 44,
                    "name": "ElementaryTypeName",
                    "src": "488:4:1"
                  }
                ],
                "id": 45,
                "name": "Mapping",
                "src": "471:22:1"
              }
            ],
            "id": 46,
            "name": "VariableDeclaration",
            "src": "471:38:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "RoomIDMap",
              "scope": 358,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => string)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => string)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 47,
                    "name": "ElementaryTypeName",
                    "src": "601:4:1"
                  },
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 48,
                    "name": "ElementaryTypeName",
                    "src": "607:6:1"
                  }
                ],
                "id": 49,
                "name": "Mapping",
                "src": "593:21:1"
              }
            ],
            "id": 50,
            "name": "VariableDeclaration",
            "src": "593:39:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "IDRoomMap",
              "scope": 358,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string => uint256)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 51,
                    "name": "ElementaryTypeName",
                    "src": "724:6:1"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 52,
                    "name": "ElementaryTypeName",
                    "src": "732:4:1"
                  }
                ],
                "id": 53,
                "name": "Mapping",
                "src": "716:21:1"
              }
            ],
            "id": 54,
            "name": "VariableDeclaration",
            "src": "716:39:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "uniqueid",
              "scope": 358,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 55,
                "name": "ElementaryTypeName",
                "src": "798:4:1"
              }
            ],
            "id": 56,
            "name": "VariableDeclaration",
            "src": "798:21:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "SetID"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "status",
                      "scope": 60,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 57,
                        "name": "ElementaryTypeName",
                        "src": "850:4:1"
                      }
                    ],
                    "id": 58,
                    "name": "VariableDeclaration",
                    "src": "850:11:1"
                  }
                ],
                "id": 59,
                "name": "ParameterList",
                "src": "839:29:1"
              }
            ],
            "id": 60,
            "name": "EventDefinition",
            "src": "828:41:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "setid",
              "scope": 358,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "roomID",
                      "scope": 95,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 61,
                        "name": "ElementaryTypeName",
                        "src": "992:6:1"
                      }
                    ],
                    "id": 62,
                    "name": "VariableDeclaration",
                    "src": "992:20:1"
                  }
                ],
                "id": 63,
                "name": "ParameterList",
                "src": "991:22:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 64,
                "name": "ParameterList",
                "src": "1020:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 54,
                                  "type": "mapping(string memory => uint256)",
                                  "value": "IDRoomMap"
                                },
                                "id": 65,
                                "name": "Identifier",
                                "src": "1126:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 62,
                                  "type": "string memory",
                                  "value": "roomID"
                                },
                                "id": 66,
                                "name": "Identifier",
                                "src": "1136:6:1"
                              }
                            ],
                            "id": 67,
                            "name": "IndexAccess",
                            "src": "1126:17:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 68,
                            "name": "Literal",
                            "src": "1145:1:1"
                          }
                        ],
                        "id": 69,
                        "name": "BinaryOperation",
                        "src": "1126:20:1"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 56,
                                      "type": "uint256",
                                      "value": "uniqueid"
                                    },
                                    "id": 70,
                                    "name": "Identifier",
                                    "src": "1162:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "+",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 56,
                                          "type": "uint256",
                                          "value": "uniqueid"
                                        },
                                        "id": 71,
                                        "name": "Identifier",
                                        "src": "1171:8:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 72,
                                        "name": "Literal",
                                        "src": "1180:1:1"
                                      }
                                    ],
                                    "id": 73,
                                    "name": "BinaryOperation",
                                    "src": "1171:10:1"
                                  }
                                ],
                                "id": 74,
                                "name": "Assignment",
                                "src": "1162:19:1"
                              }
                            ],
                            "id": 75,
                            "name": "ExpressionStatement",
                            "src": "1162:19:1"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "string storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "string storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 50,
                                          "type": "mapping(uint256 => string storage ref)",
                                          "value": "RoomIDMap"
                                        },
                                        "id": 76,
                                        "name": "Identifier",
                                        "src": "1196:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 56,
                                          "type": "uint256",
                                          "value": "uniqueid"
                                        },
                                        "id": 77,
                                        "name": "Identifier",
                                        "src": "1206:8:1"
                                      }
                                    ],
                                    "id": 78,
                                    "name": "IndexAccess",
                                    "src": "1196:19:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 62,
                                      "type": "string memory",
                                      "value": "roomID"
                                    },
                                    "id": 79,
                                    "name": "Identifier",
                                    "src": "1216:6:1"
                                  }
                                ],
                                "id": 80,
                                "name": "Assignment",
                                "src": "1196:26:1"
                              }
                            ],
                            "id": 81,
                            "name": "ExpressionStatement",
                            "src": "1196:26:1"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 54,
                                          "type": "mapping(string memory => uint256)",
                                          "value": "IDRoomMap"
                                        },
                                        "id": 82,
                                        "name": "Identifier",
                                        "src": "1237:9:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 62,
                                          "type": "string memory",
                                          "value": "roomID"
                                        },
                                        "id": 83,
                                        "name": "Identifier",
                                        "src": "1247:6:1"
                                      }
                                    ],
                                    "id": 84,
                                    "name": "IndexAccess",
                                    "src": "1237:17:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 56,
                                      "type": "uint256",
                                      "value": "uniqueid"
                                    },
                                    "id": 85,
                                    "name": "Identifier",
                                    "src": "1255:8:1"
                                  }
                                ],
                                "id": 86,
                                "name": "Assignment",
                                "src": "1237:26:1"
                              }
                            ],
                            "id": 87,
                            "name": "ExpressionStatement",
                            "src": "1237:26:1"
                          }
                        ],
                        "id": 88,
                        "name": "Block",
                        "src": "1147:128:1"
                      }
                    ],
                    "id": 89,
                    "name": "IfStatement",
                    "src": "1123:152:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 60,
                              "type": "function (bool)",
                              "value": "SetID"
                            },
                            "id": 90,
                            "name": "Identifier",
                            "src": "1290:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 91,
                            "name": "Literal",
                            "src": "1296:4:1"
                          }
                        ],
                        "id": 92,
                        "name": "FunctionCall",
                        "src": "1290:11:1"
                      }
                    ],
                    "id": 93,
                    "name": "EmitStatement",
                    "src": "1285:16:1"
                  }
                ],
                "id": 94,
                "name": "Block",
                "src": "1020:289:1"
              }
            ],
            "id": 95,
            "name": "FunctionDefinition",
            "src": "977:332:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getid",
              "scope": 358,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "roomID",
                      "scope": 107,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 96,
                        "name": "ElementaryTypeName",
                        "src": "1411:6:1"
                      }
                    ],
                    "id": 97,
                    "name": "VariableDeclaration",
                    "src": "1411:20:1"
                  }
                ],
                "id": 98,
                "name": "ParameterList",
                "src": "1410:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 107,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 99,
                        "name": "ElementaryTypeName",
                        "src": "1453:4:1"
                      }
                    ],
                    "id": 100,
                    "name": "VariableDeclaration",
                    "src": "1453:4:1"
                  }
                ],
                "id": 101,
                "name": "ParameterList",
                "src": "1452:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 101
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 54,
                              "type": "mapping(string memory => uint256)",
                              "value": "IDRoomMap"
                            },
                            "id": 102,
                            "name": "Identifier",
                            "src": "1476:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 97,
                              "type": "string memory",
                              "value": "roomID"
                            },
                            "id": 103,
                            "name": "Identifier",
                            "src": "1486:6:1"
                          }
                        ],
                        "id": 104,
                        "name": "IndexAccess",
                        "src": "1476:17:1"
                      }
                    ],
                    "id": 105,
                    "name": "Return",
                    "src": "1469:24:1"
                  }
                ],
                "id": 106,
                "name": "Block",
                "src": "1458:43:1"
              }
            ],
            "id": 107,
            "name": "FunctionDefinition",
            "src": "1396:105:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "SuccessDeposit"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "sender",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 108,
                        "name": "ElementaryTypeName",
                        "src": "1540:7:1"
                      }
                    ],
                    "id": 109,
                    "name": "VariableDeclaration",
                    "src": "1540:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "betAmount",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 110,
                        "name": "ElementaryTypeName",
                        "src": "1565:4:1"
                      }
                    ],
                    "id": 111,
                    "name": "VariableDeclaration",
                    "src": "1565:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "roomId",
                      "scope": 115,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 112,
                        "name": "ElementaryTypeName",
                        "src": "1590:6:1"
                      }
                    ],
                    "id": 113,
                    "name": "VariableDeclaration",
                    "src": "1590:13:1"
                  }
                ],
                "id": 114,
                "name": "ParameterList",
                "src": "1529:81:1"
              }
            ],
            "id": 115,
            "name": "EventDefinition",
            "src": "1509:102:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "createPlayer",
              "scope": 358,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "ID",
                      "scope": 156,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 116,
                        "name": "ElementaryTypeName",
                        "src": "1720:4:1"
                      }
                    ],
                    "id": 117,
                    "name": "VariableDeclaration",
                    "src": "1720:7:1"
                  }
                ],
                "id": 118,
                "name": "ParameterList",
                "src": "1719:9:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 119,
                "name": "ParameterList",
                "src": "1745:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        121
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "RoomID",
                          "scope": 155,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 120,
                            "name": "ElementaryTypeName",
                            "src": "1756:6:1"
                          }
                        ],
                        "id": 121,
                        "name": "VariableDeclaration",
                        "src": "1756:21:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 50,
                              "type": "mapping(uint256 => string storage ref)",
                              "value": "RoomIDMap"
                            },
                            "id": 122,
                            "name": "Identifier",
                            "src": "1778:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 117,
                              "type": "uint256",
                              "value": "ID"
                            },
                            "id": 123,
                            "name": "Identifier",
                            "src": "1788:2:1"
                          }
                        ],
                        "id": 124,
                        "name": "IndexAccess",
                        "src": "1778:13:1"
                      }
                    ],
                    "id": 125,
                    "name": "VariableDeclarationStatement",
                    "src": "1756:35:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        127
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "sender",
                          "scope": 155,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "stateMutability": "nonpayable",
                              "type": "address"
                            },
                            "id": 126,
                            "name": "ElementaryTypeName",
                            "src": "1802:7:1"
                          }
                        ],
                        "id": 127,
                        "name": "VariableDeclaration",
                        "src": "1802:14:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "sender",
                          "referencedDeclaration": null,
                          "type": "address payable"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 373,
                              "type": "msg",
                              "value": "msg"
                            },
                            "id": 128,
                            "name": "Identifier",
                            "src": "1819:3:1"
                          }
                        ],
                        "id": 129,
                        "name": "MemberAccess",
                        "src": "1819:10:1"
                      }
                    ],
                    "id": 130,
                    "name": "VariableDeclarationStatement",
                    "src": "1802:27:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        132
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "betamount",
                          "scope": 155,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 131,
                            "name": "ElementaryTypeName",
                            "src": "1840:4:1"
                          }
                        ],
                        "id": 132,
                        "name": "VariableDeclaration",
                        "src": "1840:14:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "value",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 373,
                              "type": "msg",
                              "value": "msg"
                            },
                            "id": 133,
                            "name": "Identifier",
                            "src": "1856:3:1"
                          }
                        ],
                        "id": 134,
                        "name": "MemberAccess",
                        "src": "1856:9:1"
                      }
                    ],
                    "id": 135,
                    "name": "VariableDeclarationStatement",
                    "src": "1840:25:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "mapping(string memory => address[] storage ref)",
                                      "value": "Game"
                                    },
                                    "id": 136,
                                    "name": "Identifier",
                                    "src": "1876:4:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 121,
                                      "type": "string storage pointer",
                                      "value": "RoomID"
                                    },
                                    "id": 137,
                                    "name": "Identifier",
                                    "src": "1881:6:1"
                                  }
                                ],
                                "id": 138,
                                "name": "IndexAccess",
                                "src": "1876:12:1"
                              }
                            ],
                            "id": 139,
                            "name": "MemberAccess",
                            "src": "1876:17:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 127,
                              "type": "address",
                              "value": "sender"
                            },
                            "id": 140,
                            "name": "Identifier",
                            "src": "1894:6:1"
                          }
                        ],
                        "id": 141,
                        "name": "FunctionCall",
                        "src": "1876:25:1"
                      }
                    ],
                    "id": 142,
                    "name": "ExpressionStatement",
                    "src": "1876:25:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 46,
                                  "type": "mapping(address => uint256)",
                                  "value": "BettAmt"
                                },
                                "id": 143,
                                "name": "Identifier",
                                "src": "1912:7:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 127,
                                  "type": "address",
                                  "value": "sender"
                                },
                                "id": 144,
                                "name": "Identifier",
                                "src": "1920:6:1"
                              }
                            ],
                            "id": 145,
                            "name": "IndexAccess",
                            "src": "1912:15:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 132,
                              "type": "uint256",
                              "value": "betamount"
                            },
                            "id": 146,
                            "name": "Identifier",
                            "src": "1928:9:1"
                          }
                        ],
                        "id": 147,
                        "name": "Assignment",
                        "src": "1912:25:1"
                      }
                    ],
                    "id": 148,
                    "name": "ExpressionStatement",
                    "src": "1912:25:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 115,
                              "type": "function (address,uint256,string memory)",
                              "value": "SuccessDeposit"
                            },
                            "id": 149,
                            "name": "Identifier",
                            "src": "1953:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 127,
                              "type": "address",
                              "value": "sender"
                            },
                            "id": 150,
                            "name": "Identifier",
                            "src": "1968:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 132,
                              "type": "uint256",
                              "value": "betamount"
                            },
                            "id": 151,
                            "name": "Identifier",
                            "src": "1976:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 121,
                              "type": "string storage pointer",
                              "value": "RoomID"
                            },
                            "id": 152,
                            "name": "Identifier",
                            "src": "1987:6:1"
                          }
                        ],
                        "id": 153,
                        "name": "FunctionCall",
                        "src": "1953:41:1"
                      }
                    ],
                    "id": 154,
                    "name": "EmitStatement",
                    "src": "1948:46:1"
                  }
                ],
                "id": 155,
                "name": "Block",
                "src": "1745:257:1"
              }
            ],
            "id": 156,
            "name": "FunctionDefinition",
            "src": "1698:304:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "sendBetAmt",
              "scope": 358,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "private"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "winner",
                      "scope": 170,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address payable",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "payable",
                          "type": "address payable"
                        },
                        "id": 157,
                        "name": "ElementaryTypeName",
                        "src": "2086:15:1"
                      }
                    ],
                    "id": 158,
                    "name": "VariableDeclaration",
                    "src": "2086:22:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "bettedAmt",
                      "scope": 170,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 159,
                        "name": "ElementaryTypeName",
                        "src": "2109:4:1"
                      }
                    ],
                    "id": 160,
                    "name": "VariableDeclaration",
                    "src": "2109:14:1"
                  }
                ],
                "id": 161,
                "name": "ParameterList",
                "src": "2085:39:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 162,
                "name": "ParameterList",
                "src": "2132:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transfer",
                              "referencedDeclaration": null,
                              "type": "function (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 158,
                                  "type": "address payable",
                                  "value": "winner"
                                },
                                "id": 163,
                                "name": "Identifier",
                                "src": "2143:6:1"
                              }
                            ],
                            "id": 165,
                            "name": "MemberAccess",
                            "src": "2143:15:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 160,
                              "type": "uint256",
                              "value": "bettedAmt"
                            },
                            "id": 166,
                            "name": "Identifier",
                            "src": "2159:9:1"
                          }
                        ],
                        "id": 167,
                        "name": "FunctionCall",
                        "src": "2143:26:1"
                      }
                    ],
                    "id": 168,
                    "name": "ExpressionStatement",
                    "src": "2143:26:1"
                  }
                ],
                "id": 169,
                "name": "Block",
                "src": "2132:45:1"
              }
            ],
            "id": 170,
            "name": "FunctionDefinition",
            "src": "2066:111:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "TotalBet",
              "scope": 358,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "ID",
                      "scope": 212,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 171,
                        "name": "ElementaryTypeName",
                        "src": "2248:4:1"
                      }
                    ],
                    "id": 172,
                    "name": "VariableDeclaration",
                    "src": "2248:7:1"
                  }
                ],
                "id": 173,
                "name": "ParameterList",
                "src": "2247:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 212,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 174,
                        "name": "ElementaryTypeName",
                        "src": "2277:4:1"
                      }
                    ],
                    "id": 175,
                    "name": "VariableDeclaration",
                    "src": "2277:4:1"
                  }
                ],
                "id": 176,
                "name": "ParameterList",
                "src": "2276:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        178
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "RoomID",
                          "scope": 211,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 177,
                            "name": "ElementaryTypeName",
                            "src": "2294:6:1"
                          }
                        ],
                        "id": 178,
                        "name": "VariableDeclaration",
                        "src": "2294:21:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 50,
                              "type": "mapping(uint256 => string storage ref)",
                              "value": "RoomIDMap"
                            },
                            "id": 179,
                            "name": "Identifier",
                            "src": "2316:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 172,
                              "type": "uint256",
                              "value": "ID"
                            },
                            "id": 180,
                            "name": "Identifier",
                            "src": "2326:2:1"
                          }
                        ],
                        "id": 181,
                        "name": "IndexAccess",
                        "src": "2316:13:1"
                      }
                    ],
                    "id": 182,
                    "name": "VariableDeclarationStatement",
                    "src": "2294:35:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        184
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "Bet0",
                          "scope": 211,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 183,
                            "name": "ElementaryTypeName",
                            "src": "2340:4:1"
                          }
                        ],
                        "id": 184,
                        "name": "VariableDeclaration",
                        "src": "2340:9:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 46,
                              "type": "mapping(address => uint256)",
                              "value": "BettAmt"
                            },
                            "id": 185,
                            "name": "Identifier",
                            "src": "2350:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "mapping(string memory => address[] storage ref)",
                                      "value": "Game"
                                    },
                                    "id": 186,
                                    "name": "Identifier",
                                    "src": "2358:4:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 178,
                                      "type": "string storage pointer",
                                      "value": "RoomID"
                                    },
                                    "id": 187,
                                    "name": "Identifier",
                                    "src": "2363:6:1"
                                  }
                                ],
                                "id": 188,
                                "name": "IndexAccess",
                                "src": "2358:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 189,
                                "name": "Literal",
                                "src": "2371:1:1"
                              }
                            ],
                            "id": 190,
                            "name": "IndexAccess",
                            "src": "2358:15:1"
                          }
                        ],
                        "id": 191,
                        "name": "IndexAccess",
                        "src": "2350:24:1"
                      }
                    ],
                    "id": 192,
                    "name": "VariableDeclarationStatement",
                    "src": "2340:34:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        194
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "Bet1",
                          "scope": 211,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 193,
                            "name": "ElementaryTypeName",
                            "src": "2385:4:1"
                          }
                        ],
                        "id": 194,
                        "name": "VariableDeclaration",
                        "src": "2385:9:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 46,
                              "type": "mapping(address => uint256)",
                              "value": "BettAmt"
                            },
                            "id": 195,
                            "name": "Identifier",
                            "src": "2395:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "mapping(string memory => address[] storage ref)",
                                      "value": "Game"
                                    },
                                    "id": 196,
                                    "name": "Identifier",
                                    "src": "2403:4:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 178,
                                      "type": "string storage pointer",
                                      "value": "RoomID"
                                    },
                                    "id": 197,
                                    "name": "Identifier",
                                    "src": "2408:6:1"
                                  }
                                ],
                                "id": 198,
                                "name": "IndexAccess",
                                "src": "2403:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 199,
                                "name": "Literal",
                                "src": "2416:1:1"
                              }
                            ],
                            "id": 200,
                            "name": "IndexAccess",
                            "src": "2403:15:1"
                          }
                        ],
                        "id": 201,
                        "name": "IndexAccess",
                        "src": "2395:24:1"
                      }
                    ],
                    "id": 202,
                    "name": "VariableDeclarationStatement",
                    "src": "2385:34:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        204
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "total",
                          "scope": 211,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 203,
                            "name": "ElementaryTypeName",
                            "src": "2430:4:1"
                          }
                        ],
                        "id": 204,
                        "name": "VariableDeclaration",
                        "src": "2430:10:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 184,
                              "type": "uint256",
                              "value": "Bet0"
                            },
                            "id": 205,
                            "name": "Identifier",
                            "src": "2441:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 194,
                              "type": "uint256",
                              "value": "Bet1"
                            },
                            "id": 206,
                            "name": "Identifier",
                            "src": "2446:4:1"
                          }
                        ],
                        "id": 207,
                        "name": "BinaryOperation",
                        "src": "2441:9:1"
                      }
                    ],
                    "id": 208,
                    "name": "VariableDeclarationStatement",
                    "src": "2430:20:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 176
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 204,
                          "type": "uint256",
                          "value": "total"
                        },
                        "id": 209,
                        "name": "Identifier",
                        "src": "2468:5:1"
                      }
                    ],
                    "id": 210,
                    "name": "Return",
                    "src": "2461:12:1"
                  }
                ],
                "id": 211,
                "name": "Block",
                "src": "2283:198:1"
              }
            ],
            "id": 212,
            "name": "FunctionDefinition",
            "src": "2230:251:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "GameWon"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "winner",
                      "scope": 220,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 213,
                        "name": "ElementaryTypeName",
                        "src": "2513:7:1"
                      }
                    ],
                    "id": 214,
                    "name": "VariableDeclaration",
                    "src": "2513:14:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 220,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 215,
                        "name": "ElementaryTypeName",
                        "src": "2538:4:1"
                      }
                    ],
                    "id": 216,
                    "name": "VariableDeclaration",
                    "src": "2538:11:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "index",
                      "scope": 220,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 217,
                        "name": "ElementaryTypeName",
                        "src": "2560:4:1"
                      }
                    ],
                    "id": 218,
                    "name": "VariableDeclaration",
                    "src": "2560:10:1"
                  }
                ],
                "id": 219,
                "name": "ParameterList",
                "src": "2502:77:1"
              }
            ],
            "id": 220,
            "name": "EventDefinition",
            "src": "2489:91:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "Winner",
              "scope": 358,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "ID",
                      "scope": 267,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 221,
                        "name": "ElementaryTypeName",
                        "src": "2729:4:1"
                      }
                    ],
                    "id": 222,
                    "name": "VariableDeclaration",
                    "src": "2729:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 267,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 223,
                        "name": "ElementaryTypeName",
                        "src": "2737:4:1"
                      }
                    ],
                    "id": 224,
                    "name": "VariableDeclaration",
                    "src": "2737:10:1"
                  }
                ],
                "id": 225,
                "name": "ParameterList",
                "src": "2728:20:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 226,
                "name": "ParameterList",
                "src": "2757:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        228
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "RoomID",
                          "scope": 266,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 227,
                            "name": "ElementaryTypeName",
                            "src": "2768:6:1"
                          }
                        ],
                        "id": 228,
                        "name": "VariableDeclaration",
                        "src": "2768:21:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 50,
                              "type": "mapping(uint256 => string storage ref)",
                              "value": "RoomIDMap"
                            },
                            "id": 229,
                            "name": "Identifier",
                            "src": "2790:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 222,
                              "type": "uint256",
                              "value": "ID"
                            },
                            "id": 230,
                            "name": "Identifier",
                            "src": "2800:2:1"
                          }
                        ],
                        "id": 231,
                        "name": "IndexAccess",
                        "src": "2790:13:1"
                      }
                    ],
                    "id": 232,
                    "name": "VariableDeclarationStatement",
                    "src": "2768:35:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        234
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "winner_address",
                          "scope": 266,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address payable",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "stateMutability": "payable",
                              "type": "address payable"
                            },
                            "id": 233,
                            "name": "ElementaryTypeName",
                            "src": "2814:15:1"
                          }
                        ],
                        "id": 234,
                        "name": "VariableDeclaration",
                        "src": "2814:30:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address payable",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(address)",
                              "value": "address"
                            },
                            "id": 235,
                            "name": "ElementaryTypeNameExpression",
                            "src": "2845:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint160",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint160)",
                                  "value": "uint160"
                                },
                                "id": 236,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2853:7:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 42,
                                          "type": "mapping(string memory => address[] storage ref)",
                                          "value": "Game"
                                        },
                                        "id": 237,
                                        "name": "Identifier",
                                        "src": "2861:4:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 228,
                                          "type": "string storage pointer",
                                          "value": "RoomID"
                                        },
                                        "id": 238,
                                        "name": "Identifier",
                                        "src": "2866:6:1"
                                      }
                                    ],
                                    "id": 239,
                                    "name": "IndexAccess",
                                    "src": "2861:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 224,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 240,
                                    "name": "Identifier",
                                    "src": "2874:5:1"
                                  }
                                ],
                                "id": 241,
                                "name": "IndexAccess",
                                "src": "2861:19:1"
                              }
                            ],
                            "id": 242,
                            "name": "FunctionCall",
                            "src": "2853:28:1"
                          }
                        ],
                        "id": 243,
                        "name": "FunctionCall",
                        "src": "2845:37:1"
                      }
                    ],
                    "id": 244,
                    "name": "VariableDeclarationStatement",
                    "src": "2814:68:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        246
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "totalBet",
                          "scope": 266,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 245,
                            "name": "ElementaryTypeName",
                            "src": "2893:4:1"
                          }
                        ],
                        "id": 246,
                        "name": "VariableDeclaration",
                        "src": "2893:13:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 212,
                                  "type": "function (uint256) view returns (uint256)",
                                  "value": "TotalBet"
                                },
                                "id": 247,
                                "name": "Identifier",
                                "src": "2907:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 222,
                                  "type": "uint256",
                                  "value": "ID"
                                },
                                "id": 248,
                                "name": "Identifier",
                                "src": "2916:2:1"
                              }
                            ],
                            "id": 249,
                            "name": "FunctionCall",
                            "src": "2907:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "*",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 250,
                                "name": "Literal",
                                "src": "2920:1:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 37,
                                  "type": "uint256",
                                  "value": "commission"
                                },
                                "id": 251,
                                "name": "Identifier",
                                "src": "2922:10:1"
                              }
                            ],
                            "id": 252,
                            "name": "BinaryOperation",
                            "src": "2920:12:1"
                          }
                        ],
                        "id": 253,
                        "name": "BinaryOperation",
                        "src": "2907:25:1"
                      }
                    ],
                    "id": 254,
                    "name": "VariableDeclarationStatement",
                    "src": "2893:39:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 170,
                              "type": "function (address payable,uint256)",
                              "value": "sendBetAmt"
                            },
                            "id": 255,
                            "name": "Identifier",
                            "src": "2943:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 234,
                              "type": "address payable",
                              "value": "winner_address"
                            },
                            "id": 256,
                            "name": "Identifier",
                            "src": "2954:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 246,
                              "type": "uint256",
                              "value": "totalBet"
                            },
                            "id": 257,
                            "name": "Identifier",
                            "src": "2970:8:1"
                          }
                        ],
                        "id": 258,
                        "name": "FunctionCall",
                        "src": "2943:36:1"
                      }
                    ],
                    "id": 259,
                    "name": "ExpressionStatement",
                    "src": "2943:36:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 220,
                              "type": "function (address,uint256,uint256)",
                              "value": "GameWon"
                            },
                            "id": 260,
                            "name": "Identifier",
                            "src": "2995:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 234,
                              "type": "address payable",
                              "value": "winner_address"
                            },
                            "id": 261,
                            "name": "Identifier",
                            "src": "3003:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 246,
                              "type": "uint256",
                              "value": "totalBet"
                            },
                            "id": 262,
                            "name": "Identifier",
                            "src": "3019:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 224,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 263,
                            "name": "Identifier",
                            "src": "3029:5:1"
                          }
                        ],
                        "id": 264,
                        "name": "FunctionCall",
                        "src": "2995:40:1"
                      }
                    ],
                    "id": 265,
                    "name": "EmitStatement",
                    "src": "2990:45:1"
                  }
                ],
                "id": 266,
                "name": "Block",
                "src": "2757:290:1"
              }
            ],
            "id": 267,
            "name": "FunctionDefinition",
            "src": "2713:334:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getBet",
              "scope": 358,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "player",
                      "scope": 279,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 268,
                        "name": "ElementaryTypeName",
                        "src": "3120:7:1"
                      }
                    ],
                    "id": 269,
                    "name": "VariableDeclaration",
                    "src": "3120:14:1"
                  }
                ],
                "id": 270,
                "name": "ParameterList",
                "src": "3119:16:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 279,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 271,
                        "name": "ElementaryTypeName",
                        "src": "3156:4:1"
                      }
                    ],
                    "id": 272,
                    "name": "VariableDeclaration",
                    "src": "3156:4:1"
                  }
                ],
                "id": 273,
                "name": "ParameterList",
                "src": "3155:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 273
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 46,
                              "type": "mapping(address => uint256)",
                              "value": "BettAmt"
                            },
                            "id": 274,
                            "name": "Identifier",
                            "src": "3179:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 269,
                              "type": "address",
                              "value": "player"
                            },
                            "id": 275,
                            "name": "Identifier",
                            "src": "3187:6:1"
                          }
                        ],
                        "id": 276,
                        "name": "IndexAccess",
                        "src": "3179:15:1"
                      }
                    ],
                    "id": 277,
                    "name": "Return",
                    "src": "3172:22:1"
                  }
                ],
                "id": 278,
                "name": "Block",
                "src": "3161:41:1"
              }
            ],
            "id": 279,
            "name": "FunctionDefinition",
            "src": "3104:98:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "GameDraw"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "status",
                      "scope": 283,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 280,
                        "name": "ElementaryTypeName",
                        "src": "3235:4:1"
                      }
                    ],
                    "id": 281,
                    "name": "VariableDeclaration",
                    "src": "3235:11:1"
                  }
                ],
                "id": 282,
                "name": "ParameterList",
                "src": "3224:29:1"
              }
            ],
            "id": 283,
            "name": "EventDefinition",
            "src": "3210:44:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "Draw",
              "scope": 358,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "ID",
                      "scope": 357,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 284,
                        "name": "ElementaryTypeName",
                        "src": "3348:4:1"
                      }
                    ],
                    "id": 285,
                    "name": "VariableDeclaration",
                    "src": "3348:7:1"
                  }
                ],
                "id": 286,
                "name": "ParameterList",
                "src": "3347:9:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 287,
                "name": "ParameterList",
                "src": "3365:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        289
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "RoomID",
                          "scope": 356,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string"
                            },
                            "id": 288,
                            "name": "ElementaryTypeName",
                            "src": "3376:6:1"
                          }
                        ],
                        "id": 289,
                        "name": "VariableDeclaration",
                        "src": "3376:21:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 50,
                              "type": "mapping(uint256 => string storage ref)",
                              "value": "RoomIDMap"
                            },
                            "id": 290,
                            "name": "Identifier",
                            "src": "3398:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 285,
                              "type": "uint256",
                              "value": "ID"
                            },
                            "id": 291,
                            "name": "Identifier",
                            "src": "3408:2:1"
                          }
                        ],
                        "id": 292,
                        "name": "IndexAccess",
                        "src": "3398:13:1"
                      }
                    ],
                    "id": 293,
                    "name": "VariableDeclarationStatement",
                    "src": "3376:35:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        295
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "player0_address",
                          "scope": 356,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address payable",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "stateMutability": "payable",
                              "type": "address payable"
                            },
                            "id": 294,
                            "name": "ElementaryTypeName",
                            "src": "3422:15:1"
                          }
                        ],
                        "id": 295,
                        "name": "VariableDeclaration",
                        "src": "3422:31:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address payable",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(address)",
                              "value": "address"
                            },
                            "id": 296,
                            "name": "ElementaryTypeNameExpression",
                            "src": "3454:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint160",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint160)",
                                  "value": "uint160"
                                },
                                "id": 297,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3462:7:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 42,
                                          "type": "mapping(string memory => address[] storage ref)",
                                          "value": "Game"
                                        },
                                        "id": 298,
                                        "name": "Identifier",
                                        "src": "3470:4:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 289,
                                          "type": "string storage pointer",
                                          "value": "RoomID"
                                        },
                                        "id": 299,
                                        "name": "Identifier",
                                        "src": "3475:6:1"
                                      }
                                    ],
                                    "id": 300,
                                    "name": "IndexAccess",
                                    "src": "3470:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 301,
                                    "name": "Literal",
                                    "src": "3483:1:1"
                                  }
                                ],
                                "id": 302,
                                "name": "IndexAccess",
                                "src": "3470:15:1"
                              }
                            ],
                            "id": 303,
                            "name": "FunctionCall",
                            "src": "3462:24:1"
                          }
                        ],
                        "id": 304,
                        "name": "FunctionCall",
                        "src": "3454:33:1"
                      }
                    ],
                    "id": 305,
                    "name": "VariableDeclarationStatement",
                    "src": "3422:65:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        307
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "bet0",
                          "scope": 356,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 306,
                            "name": "ElementaryTypeName",
                            "src": "3498:4:1"
                          }
                        ],
                        "id": 307,
                        "name": "VariableDeclaration",
                        "src": "3498:9:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 279,
                                  "type": "function (address) view returns (uint256)",
                                  "value": "getBet"
                                },
                                "id": 308,
                                "name": "Identifier",
                                "src": "3508:6:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 42,
                                          "type": "mapping(string memory => address[] storage ref)",
                                          "value": "Game"
                                        },
                                        "id": 309,
                                        "name": "Identifier",
                                        "src": "3515:4:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 289,
                                          "type": "string storage pointer",
                                          "value": "RoomID"
                                        },
                                        "id": 310,
                                        "name": "Identifier",
                                        "src": "3520:6:1"
                                      }
                                    ],
                                    "id": 311,
                                    "name": "IndexAccess",
                                    "src": "3515:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 312,
                                    "name": "Literal",
                                    "src": "3528:1:1"
                                  }
                                ],
                                "id": 313,
                                "name": "IndexAccess",
                                "src": "3515:15:1"
                              }
                            ],
                            "id": 314,
                            "name": "FunctionCall",
                            "src": "3508:23:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 37,
                              "type": "uint256",
                              "value": "commission"
                            },
                            "id": 315,
                            "name": "Identifier",
                            "src": "3532:10:1"
                          }
                        ],
                        "id": 316,
                        "name": "BinaryOperation",
                        "src": "3508:34:1"
                      }
                    ],
                    "id": 317,
                    "name": "VariableDeclarationStatement",
                    "src": "3498:44:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        319
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "player1_address",
                          "scope": 356,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address payable",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "stateMutability": "payable",
                              "type": "address payable"
                            },
                            "id": 318,
                            "name": "ElementaryTypeName",
                            "src": "3553:15:1"
                          }
                        ],
                        "id": 319,
                        "name": "VariableDeclaration",
                        "src": "3553:31:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address payable",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(address)",
                              "value": "address"
                            },
                            "id": 320,
                            "name": "ElementaryTypeNameExpression",
                            "src": "3585:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint160",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint160)",
                                  "value": "uint160"
                                },
                                "id": 321,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3593:7:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 42,
                                          "type": "mapping(string memory => address[] storage ref)",
                                          "value": "Game"
                                        },
                                        "id": 322,
                                        "name": "Identifier",
                                        "src": "3601:4:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 289,
                                          "type": "string storage pointer",
                                          "value": "RoomID"
                                        },
                                        "id": 323,
                                        "name": "Identifier",
                                        "src": "3606:6:1"
                                      }
                                    ],
                                    "id": 324,
                                    "name": "IndexAccess",
                                    "src": "3601:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "31",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 1",
                                      "value": "1"
                                    },
                                    "id": 325,
                                    "name": "Literal",
                                    "src": "3614:1:1"
                                  }
                                ],
                                "id": 326,
                                "name": "IndexAccess",
                                "src": "3601:15:1"
                              }
                            ],
                            "id": 327,
                            "name": "FunctionCall",
                            "src": "3593:24:1"
                          }
                        ],
                        "id": 328,
                        "name": "FunctionCall",
                        "src": "3585:33:1"
                      }
                    ],
                    "id": 329,
                    "name": "VariableDeclarationStatement",
                    "src": "3553:65:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        331
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "bet1",
                          "scope": 356,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 330,
                            "name": "ElementaryTypeName",
                            "src": "3629:4:1"
                          }
                        ],
                        "id": 331,
                        "name": "VariableDeclaration",
                        "src": "3629:9:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 279,
                                  "type": "function (address) view returns (uint256)",
                                  "value": "getBet"
                                },
                                "id": 332,
                                "name": "Identifier",
                                "src": "3639:6:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 42,
                                          "type": "mapping(string memory => address[] storage ref)",
                                          "value": "Game"
                                        },
                                        "id": 333,
                                        "name": "Identifier",
                                        "src": "3646:4:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 289,
                                          "type": "string storage pointer",
                                          "value": "RoomID"
                                        },
                                        "id": 334,
                                        "name": "Identifier",
                                        "src": "3651:6:1"
                                      }
                                    ],
                                    "id": 335,
                                    "name": "IndexAccess",
                                    "src": "3646:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "31",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 1",
                                      "value": "1"
                                    },
                                    "id": 336,
                                    "name": "Literal",
                                    "src": "3659:1:1"
                                  }
                                ],
                                "id": 337,
                                "name": "IndexAccess",
                                "src": "3646:15:1"
                              }
                            ],
                            "id": 338,
                            "name": "FunctionCall",
                            "src": "3639:23:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 37,
                              "type": "uint256",
                              "value": "commission"
                            },
                            "id": 339,
                            "name": "Identifier",
                            "src": "3663:10:1"
                          }
                        ],
                        "id": 340,
                        "name": "BinaryOperation",
                        "src": "3639:34:1"
                      }
                    ],
                    "id": 341,
                    "name": "VariableDeclarationStatement",
                    "src": "3629:44:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 170,
                              "type": "function (address payable,uint256)",
                              "value": "sendBetAmt"
                            },
                            "id": 342,
                            "name": "Identifier",
                            "src": "3684:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 295,
                              "type": "address payable",
                              "value": "player0_address"
                            },
                            "id": 343,
                            "name": "Identifier",
                            "src": "3695:15:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 307,
                              "type": "uint256",
                              "value": "bet0"
                            },
                            "id": 344,
                            "name": "Identifier",
                            "src": "3712:4:1"
                          }
                        ],
                        "id": 345,
                        "name": "FunctionCall",
                        "src": "3684:33:1"
                      }
                    ],
                    "id": 346,
                    "name": "ExpressionStatement",
                    "src": "3684:33:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 170,
                              "type": "function (address payable,uint256)",
                              "value": "sendBetAmt"
                            },
                            "id": 347,
                            "name": "Identifier",
                            "src": "3728:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 319,
                              "type": "address payable",
                              "value": "player1_address"
                            },
                            "id": 348,
                            "name": "Identifier",
                            "src": "3739:15:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 331,
                              "type": "uint256",
                              "value": "bet1"
                            },
                            "id": 349,
                            "name": "Identifier",
                            "src": "3756:4:1"
                          }
                        ],
                        "id": 350,
                        "name": "FunctionCall",
                        "src": "3728:33:1"
                      }
                    ],
                    "id": 351,
                    "name": "ExpressionStatement",
                    "src": "3728:33:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 283,
                              "type": "function (bool)",
                              "value": "GameDraw"
                            },
                            "id": 352,
                            "name": "Identifier",
                            "src": "3777:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 353,
                            "name": "Literal",
                            "src": "3786:4:1"
                          }
                        ],
                        "id": 354,
                        "name": "FunctionCall",
                        "src": "3777:14:1"
                      }
                    ],
                    "id": 355,
                    "name": "EmitStatement",
                    "src": "3772:19:1"
                  }
                ],
                "id": 356,
                "name": "Block",
                "src": "3365:446:1"
              }
            ],
            "id": 357,
            "name": "FunctionDefinition",
            "src": "3334:477:1"
          }
        ],
        "id": 358,
        "name": "ContractDefinition",
        "src": "117:3699:1"
      }
    ],
    "id": 359,
    "name": "SourceUnit",
    "src": "33:3783:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0xD64284a9D2D9B019C6384F04F22d38a50b94a378",
      "transactionHash": "0xadff1c5759cc421d20d526d7db6252e92266f8d7baa76f6422e090ee303896b5"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0x9c2B068c72E8Dc4c77f9ce5b96a4BEA950aa8b2d",
      "transactionHash": "0x2e779b9505b8e5a2ae2bcdcda5403f18cdb08d434bb13494b5ad3d247cefa9f4"
    }
  },
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-19T04:05:16.507Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}

module.exports = data