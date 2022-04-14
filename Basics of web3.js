##Getting latest Block

web3.eth.getBlockNumber((err,res)=>{
       console.log(res);                                        //this will emit the latest block number;)
)

##Getting specific block details

web3.eth.getBlock(1,(blockErr,blockInfo)=>{
     console.log(blockInfo)                                     //it wil provide all the information about the block
}) 

##Getting details about transaction hash

web3.eth.getTransaction('0xe94edfb3580c7e6233cf29c92fb3bf3646c52a2e904db4d3aff4ac1784c385db',(err,res)=>{
    console.log(res);
})

