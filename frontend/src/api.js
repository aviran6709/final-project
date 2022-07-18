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

    setToken =()=>{
    const token = localStorage.getItem("jwt")
    return customFetch(`${this.baseUrl}/users/me`, { headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization:`Bearer ${token}`
  }})
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
     signup =(data)=>{

        return customFetch(`${this.baseUrl}/signup`,{
            method:"POST",
            headers: this.headers,
            body: JSON.stringify ({
                name:data.name,
                email:data.email,
                password:data.password

            })
    
    })
         } 

         signin = (data)=>{
            return customFetch(`${this.baseUrl}/signin`,{
                method:"POST",
                headers: this.headers,
                body:JSON.stringify(
                 { 
                    email:data.email,
                    password:data.password}
                )
            })}



}






 const api = new Api({
    // baseUrl: `https://api.aviran.students.nomoreparties.sbs`,
    baseUrl: `http://localhost:3003`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization:`Bearer ${localStorage.getItem("jwt")}`,
      }
});

export default api