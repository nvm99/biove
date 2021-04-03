// const url = "https://api.biove.life/";
const url = "http://localhost:2000/";
let res_profile = undefined;
export async function profile() {
    if (res_profile!=undefined)return res_profile;
    const response = await fetch(url+"user/profile", {
        method: 'GET',
        mode: 'cors', 
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Charset':'UTF-8',
            'Authorization': localStorage.getItem('token')
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
    });
    res_profile = response.json();
    console.log(res_profile)
    return res_profile;
}