const url = "https://api.biove.life/";
// const url = "http://localhost:2000/";
export async function getCommunities() {
    const response = await fetch(url+"planting/get_list_communities", {
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
    return response.json();
}
export async function getCampaigns(community_id) {
    const response = await fetch(url+"planting/get_list_campaigns", {
        method: 'POST',
        mode: 'cors', 
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Charset':'UTF-8',
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            community_id:community_id,
        })
    });
    return response.json();
}