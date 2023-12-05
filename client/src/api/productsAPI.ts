import { Product } from "../types/Product";
import handleApiRes from "./apiResHandler";

// external
async function getTop5Products(): Promise<Product[]> {
    const response = await fetch('/api/products/topFiveProducts');
    const res = await handleApiRes(response);
    console.log('hello from apiProduct: top 5',res);
    return res
}



// external
async function sendReviewToDB(pid: string, title: string, review: string, rating: number,author:string,userId:string): Promise<Product> {

    const response = await fetch(`/api/products/${pid}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ review: review, rating: rating, title: title,author: author,userId:userId }),
    });

    return await handleApiRes(response);
}


async function getProductById(pid: string): Promise<Product[]> {
    console.log('hello from apiProduct',pid);
    const response = await fetch(`/api/products/${pid}`);
    return await handleApiRes(response);
}

async function getReviewsByProductIdFromDB(pid: string): Promise<Product[]> {
    const response = await fetch(`/api/products/${pid}/reviews`);
    return await handleApiRes(response);
}

async function searchProducts(searchTerm: string): Promise<Product[]> {
    const response = await fetch(`api/products/search`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm: searchTerm }),
    });
    console.log('hello from apiProduct: search',response);
    return await handleApiRes(response);
}

async function reviewFeedbackProduct(feedback:boolean){
    const response = await fetch(`/api/products/${feedback}/reviews/feedback`);
    return await handleApiRes(response);
}

export default{ searchProducts,getTop5Products, getProductById, getReviewsByProductIdFromDB, reviewFeedbackProduct,sendReviewToDB};

