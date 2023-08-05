import { expect } from "chai";
import { ethers } from "hardhat";

describe("IPRToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("IPRToken");

    const instance = await ContractFactory.deploy();
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("IPRToken");
  });
});
