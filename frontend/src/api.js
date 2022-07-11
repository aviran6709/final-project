const customFetch = (url, headers) => {

    return fetch(url, headers).then((res) => {
        if (res.ok) {  return res.json(); }
        else { 
            Promise.reject(res.statusText); }
    })

}
class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;

    }

    getUserInfo = ()=>{
        return customFetch(`${this.baseUrl}/users/me`, { headers: this.headers })
        
    }

    getArticle =(ownerId)=>{
        return customFetch (`${this.baseUrl}/articles/${ownerId}`, { headers: this.headers })
    }
    unsavedNewArticle =(itemId)=>{
        return customFetch (`${this.baseUrl}/articles/${itemId}`, {method:"delete", headers: this.headers })
    }
  saveArticle =(data)=> {
        return customFetch(`${this.baseUrl}/articles`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                keyword: data.keyword,
                title: data.title,
                text: data.text,
                date: data.date,
                source: data.src,
                link: data.link,
                image: data.imagLink 
             
            })
        })
    }
}






 const api = new Api({
    // baseUrl: `https://api.aviran.students.nomoreparties.sbs`,
    baseUrl: `http://localhost:3003`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMxODBhOTdhZjM2ZjRkMjAzZWYxNzYiLCJpYXQiOjE2NTY4NDg1ODIsImV4cCI6MTY1NzQ1MzM4Mn0.3RiT6EcIh0rLNQfk29zCTwMI3NREV1mJOHaGTvzZDek",
        
      }
});

export default api