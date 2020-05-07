import keys from '../keys'
export const sendGetRequest = async (url, route) => {
    
}

export const sendPostRequest = async (url, data) => {
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(url, requestOptions).then(res => res.json())
}

export const sendPostRequestWithToken = async (url, data) => {
    const bearer = "Bearer " + sessionStorage.getItem(keys['TOKEN'])
    const requestOptions = {
        method: "POST",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(url, requestOptions).then(res => res.json())
}

export const sendFormData = async (url, route, formData) => {
    
}