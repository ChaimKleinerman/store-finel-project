import Product from "../types/Product";
import handleApiRes from "./apiResHandler";

//external
async function getTop5Products(): Promise<Product[]> {
    const response = await fetch('/api/products/topFiveProducts');
    return await handleApiRes(response);
}
//external
async function getProduct(pid:string): Promise<Product> {
    const response = await fetch(`/api/products`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pid: pid,
        }),
    });

    return await handleApiRes(response);
}


export default { getTop5Products, getProduct }