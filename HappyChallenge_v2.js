const axios = require('axios');
const urlGet = 'https://happyreturnsqatest.free.beeceptor.com/getProductVariants';
const urlPost = 'https://happyreturnsqatest.free.beeceptor.com/order';
let jsonObject;

const getResponse = () => {
    try {
        return axios.get(urlGet);
    } catch (error) {
        console.error(error);
    }
}

const postObject = () => {
    try {
        console.log("\n\njsonObject:\n");
        console.log(jsonObject);
        return axios.post(urlPost, jsonObject);
    } catch (error) {
        console.error(error);
    }
}

const performGetAndPost = async () => {
    const response = await getResponse();
    console.log(response);

    jsonObject = response.data.variants[0]

    console.log("\n\njsonObject:\n");
    console.log(jsonObject);

    console.log("***************************");
    console.log("***************************");
    console.log("***************************");

    console.log("Now performing POST");

    console.log("***************************");
    console.log("***************************");
    console.log("***************************");

    postObject();
}

performGetAndPost();