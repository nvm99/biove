const url = "http://biove.life/";
export async function profile() {
    const response = await fetch(url+"user/profile", {
        method: 'GET',
        mode: 'cors', 
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}