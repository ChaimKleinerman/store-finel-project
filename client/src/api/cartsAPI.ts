import Cart from "../types/Cart";
import handleApiRes from "./apiResHandler";
// import dotenv from "dotenv";
// dotenv.config();
//no need for change 

async function getCart(_id: string): Promise<Cart> {
    const response = await fetch(`/api/users/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: _id,
        }),
    }) ;
    // console.log("hi from get cart");
    
    return await handleApiRes(response);
}

async function addToCart(_id:string, pid: string, quantity: string): Promise<Cart> {
    
    const response = await fetch(`/api/users/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            _id: _id,
            product_id: pid,
            quantity: quantity
        }),
    });    
    return await handleApiRes(response);
}

async function updateQuantity(pid: string, action : "inc" | "dec"):Promise<Cart> {
    
    const response = await fetch(`/api/users/cart`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pid: pid,
            action: action
        }),
    });

    return await handleApiRes(response);
}

async function deleteProductFromCart(pid: string):Promise<Cart> {
    const response = await fetch(`/api/users/cart/${pid}`, {method: "DELETE"});
    const data = await handleApiRes(response);
    return data
}


//external
async function sendCartToOms(cart:object):Promise<Cart> {
    const response =  await fetch(`/api/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cart: cart,
        }),
    });

    return await handleApiRes(response);
}




async function deleteCart():Promise<Cart> {
    const response = await fetch(`/api/users/cart`, {method: "DELETE"});
    return await handleApiRes(response);
}

export default { getCart, addToCart, updateQuantity, deleteProductFromCart, deleteCart, sendCartToOms }