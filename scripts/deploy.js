const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Hán_Xìn", "Xiang_Yu", "Hangaozu"],       // Names
        ["https://ja.wikipedia.org/wiki/%E9%9F%93%E4%BF%A1#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:H%C3%A1n_X%C3%ACn.jpg", // Images
            "https://ja.wikipedia.org/wiki/%E9%A0%85%E7%BE%BD#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Xiang_Yu.jpg",
            "https://ja.wikipedia.org/wiki/%E5%8A%89%E9%82%A6#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Hangaozu.jpg"],
        [300, 100, 1000],                    // HP values
        [300, 500, 100],                       // Attack damage values
        "Modu_Chanyu", // Boss name
        "https://cdn.historycollection.com/wp-content/uploads/2017/08/Untitled-1-34.jpg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );



    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();