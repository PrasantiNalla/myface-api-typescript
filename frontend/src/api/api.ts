
export function createPostApi(message: string, imageUrl: string):
    Promise<Response>{
    const url = "http://localhost:3001/posts/create";

    const requestBody = {
        message: message,
        imageUrl: imageUrl
    }

    const response = fetch( url,{ 
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(requestBody)
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