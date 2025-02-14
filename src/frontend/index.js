export async function fetchPosts() {
    try {
      const response = await fetch(`${API_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

export async function userLogin (username, password){
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    "username": username, 
                    "password": password
                }
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function registerUser(username, password) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })            
        })
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function makePost(title, description, price, willDeliver, token) {
    try {
        const response = await fetch(`${API_URL}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            post: {
              "title": title,
              "description": description,
              "price": price,
              "willDeliver": willDeliver
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    }

export async function fetchSinglePost(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(`Trouble fetching post ${id}`);
    }
}

export const myData = async (token) => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result)
        return result;
        ;
    } catch (err) {
        console.error(err);
    }
}

export async function makeMessage(id, content) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}/messages`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            message: {
              "content": content
              
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    }