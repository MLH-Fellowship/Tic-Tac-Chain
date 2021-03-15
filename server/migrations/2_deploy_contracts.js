const TicTacToe = artifacts.require("TicTacToe");

module.exports = function (deployer) {
  deployer.deploy(TicTacToe);
};
