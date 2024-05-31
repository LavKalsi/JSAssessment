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
const nftContainer =[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_uniqueCode,_driver,_tyres) {
    const nftObject = {
        "Name":_name,
        "UniqueCode":_uniqueCode,
        "Driver":_driver,
        "Tyres":_tyres
    }
    nftContainer.push(nftObject);
    console.log("NFT Minted = "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nftContainer.length;i++){
        console.log("\nNFT Number = ",i+1);
        console.log("Name = "+nftContainer[i].Name+", Unique Code = "+nftContainer[i].UniqueCode+", Driver = "+nftContainer[i].Driver+", Tyres = "+nftContainer[i].Tyres);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply = ",nftContainer.length)
}

// call your functions below this line
mintNFT("Train","001","Jhon","12");
mintNFT("Plane","002","Edvard","3");
mintNFT("Truck","003","Leon","6");
mintNFT("Car","004","Lisa","4");


listNFTs();
getTotalSupply();
