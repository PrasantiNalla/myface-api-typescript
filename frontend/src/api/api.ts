import { response } from "express";

export function createPostApi(message: string, imageUrl: string):
    Promise<Response>{
    const url = "http://localhost:3001/posts/create";

    const requestBody = {
        message: message,
        imageUrl: imageUrl
    }

    //can we check url in the backend?
    const response = fetch(url, { 
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(requestBody)
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if(response.status === 200)
            {
                return response;
            } else {
                // throw new Error(`Something went wrong...${response.errors[0].param} field is invalid`);
                throw new Error(`Something went wrong...${response.errors.map((error:any)=>error.param)} field is invalid`);
            }
        })
        return response;
    }


    export function createUserApi(
        name: string, 
        username: string, 
        email: string, 
        coverImageUrl: string, 
        profileImageUrl: string,):

    Promise<Response>{
        
    const url = "http://localhost:3001/users/create";

    const requestBody = {
        name:name,
        username:username,
        email:email,
        coverImageUrl:coverImageUrl,
        profileImageUrl: profileImageUrl
    }

    const response = fetch( url,{ 
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(requestBody)
    })

        .then(response=>response.json())
        .then(response => {
            console.log(response)
            if(response.status === 200)
            {
                return response;
            } else {
                throw new Error(`Something went wrong...${response.errors.map((error:any)=>error.param)} field is invalid`);
            }
        })
        
        return response;
    }

    
    // add function for like button
    export function like(postId:number):
    Promise<Response>{
        
    const url = `http://localhost:3001/posts/${postId}/like/`;

    const response = fetch(url, { 
        method:"POST",
    })
        .then(response => {
            console.log(response)
            if(response.status === 200)
            {
                return response;
            } else {
               // throw new Error(`Something went wrong..${response.errors[0].param} field is invalid`);
                throw new Error("something went wrong")
            }
        })
        return response;
    }

        // add function for dislike button
        export function dislike(postId:number):
        Promise<Response>{
        const url = `http://localhost:3001/posts/${postId}/dislike/`;
    
        const response = fetch(url, { 
            method:"POST",
        })
            .then(response => {
                console.log(response)
                if(response.status === 200)
                {
                    return response;
                } else {
                    throw new Error('Something went wrong.');
                }
            })
            return response;
        }