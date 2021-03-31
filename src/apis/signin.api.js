const url = "http://localhost:2000/";
export async function register(email, password, name, yearOfBirth) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',  
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            yearOfBirth: yearOfBirth
        })
    });
    return response.json(); 
}
export async function login_firebase(token) {
    const response = await fetch(url+"auth/firebase", {
        method: 'POST',
        mode: 'cors', 
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            idtoken: token,
        })
    });
    return response.json();
}