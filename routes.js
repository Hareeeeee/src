const express = require("express")
const axios = require("axios")
const router = express.Router()

// AUTHENTICATING TO THE API USING YOUR API KEY
const startonApi = axios.create({
    baseURL: "https://api.starton.io",
    headers: {
        "x-api-key": "sk_live_be9ec278-dd5e-4c71-8341-dd1aece82341",
    },
})

// DEPLOYING YOUR SMART CONTRACT
axiosInstance
    .post("/v3/smart-contract/from-template", {
        network: "binance-testnet",
        signerWallet: "0x0000000000000000000000000000000000000000",
        templateId: "ERC20_META_TRANSACTION",
        name: "My first smart token",
        description: "This is the first smart contract I deploy. ",
        params: ["My first token ", "MFT", "1000000000", "0x0000000000000000000000000000000000000000"],
        speed: "average",
    })
    .then((response) => {
        console.log(response.data)
    })

    // UPLOAD SUCCESSFULL MESSAGE
    router.get("/", (req, res) => {
        res.send("Upload successful")
    })
    
    module.exports = router