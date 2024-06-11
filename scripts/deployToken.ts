const { ethers } = require("hardhat");

//import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("Token");
  const initialSupply = "100000000000000000000000000"; 
  const name = "KOSHAKA";
  const symbol = "KSA";
  const decimals = 18;

  const token = await Token.deploy(
   name, symbol, initialSupply
  );

  await token.waitForDeployment();
  await token.deployed();

  console.log(token);

  console.log("Token deployed to:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
