/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const myNFTs = [];

function mintNFT (id,color,rarity,base,special_trait) {
    const NFT ={
        "id":id,
        "color":color,
        "rarity":rarity,
        "base":base,
        "special_trait":special_trait
    }
    if(myNFTs.push(NFT))
    console.log("Minted NFT "+NFT.id)

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0;i<myNFTs.length;i++){
        console.log("");
        console.log("Id: "+myNFTs[i].id);
        console.log("Color: "+myNFTs[i].color)
        console.log("Rarity: "+myNFTs[i].rarity)
        console.log("Base: "+myNFTs[i].base)
        console.log("Special Trait: "+myNFTs[i].special_trait)
        console.log("----------------------------");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(myNFTs.length);
}

// call your functions below this line
mintNFT("0x01","red","Common","Earth","Walking");
mintNFT("0x02","blue","Uncommon","Moon","Long Jumping");
mintNFT("0x03","green","Rare","AeroGel","Swimming");
mintNFT("0x04","yellow","Ultra Rare","Lava","Walking on Lava");
mintNFT("0x05","pink","Legendary","Mercury","Flying");
mintNFT("0x06","magenta","Mythical","Mars","Teleportation");

listNFTs();
getTotalSupply();

