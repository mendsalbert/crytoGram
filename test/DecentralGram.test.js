const DecentralGram = artifacts.require("./DecentralGram.sol");

require("chai").use(require("chai-as-promised")).should();

contract("DecentralGram", ([deployer, author, tipper]) => {
  let decentralGram;

  before(async () => {
    decentralGram = await DecentralGram.deployed();
  });

  describe("deployment", async () => {
    it("deployes successfully", async () => {
      const address = await decentralGram.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await decentralGram.name();
      assert.equal(name, "DecentralGram");
    });
  });

  describe("images", async () => {
    let results, imageCount;
    const hash = "123abc";

    before(async () => {
      results = await decentralGram.uploadImage(hash, "Image Description", {
        from: author,
      });
      imageCount = await decentralGram.imageCount();
    });

    it("create image", async () => {
      assert.equal(imageCount, 1);
      const event = results.logs[0].args;
      assert.equal(event.id.toNumber(), imageCount.toNumber(), "id is correct");
      assert.equal(event.hash, hash, "Hash is correct");
      // assert.eaual(event.hash, hash ,'Image Descripi');
      // let image = await decentralGram.images(1);
      // console.log(image);
    });

    //check for image structure
    it("list images", async () => {
      const image = await decentralGram.images(imageCount);
      assert.equal(image.id.toNumber(), imageCount.toNumber(), "id is correct");
      assert.equal(image.hash, hash, "hash is correnct");
      assert.equal(
        image.description,
        "Image Description",
        "description is correnct"
      );
      assert.equal(image.tipAmount, "0", "tip amount is correct");
      assert.equal(image.author, author, "author is correct");
    });

    it("allows user to tip image", async () => {
      let oldAuthorBalance;
      oldAuthorBalance = await web3.eth.getBalance(author);
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance);

      result = await decentralGram.tipImageOwner(imageCount, {
        from: tipper,
        value: web3.utils.toWei("1", "Ether"),
      });

      const event = result.logs[0].args;
      assert.equal(event.id.toNumber(), imageCount.toNumber(), "id is correct");
      assert.equal(event.hash, hash, "Hash is correct");
      assert.equal(
        event.description,
        hash,
        "Image Description",
        "description is correct"
      );
      assert.equal(
        event.tipAmount,
        "1000000000000000000",
        "tip amount is correct",
        "Hash is correct"
      );
      assert.equal(event.author, author, "Hash is correct");

      let newAuthorBalance;
      newAuthorBalance = await web3.eth.getBalance(author);
      newAuthorBalance = new web3.utils.BN(newAuthorBalance);

      let tipImageOwner;
      tipImageOwner = await web3.utils.toWei("1", "Ether");
      tipImageOwner = new web3.utils.BN(tipImageOwner);

      const expectedBalance = oldAuthorBalance.add(tipImageOwner);
      assert.equal(newAuthorBalance.toString(), expectedBalance.toString());
    });
  });
});
