export default class API {
    static URL = "https://ajax.test-danit.com/api/v2/cards";

    static getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API.token || localStorage.token}`
        }
    }

    static async login(userData) {
        return await fetch(`${API.URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => {
            if (res.ok) {
                return res.text()
            } else {
                return res.ok
            }
        });
    };


    static saveToken(tokenFromResponse) {
        API.token = tokenFromResponse;
    };

    static async saveCard(cardToSave) {
        const res = await fetch(`${API.URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API.token || localStorage.token}`
            },
            body: JSON.stringify(cardToSave)
        });

        return res.json();
    }

    static async getAllCards() {
        const res = await fetch(`${API.URL}`, {
            method: 'GET',
            headers: API.getHeaders(),
        });

        return res.json();
    }

    static async deleteCard(id) {
        await fetch(`${API.URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${API.token || localStorage.token}`
            },
        });
    }

    static async editCard(newCard) {
        const res = await fetch(`${API.URL}/${newCard.id}`, {
            method: 'PUT',
            headers: API.getHeaders(),
            body: JSON.stringify(newCard)
        });

        return res.json();
    }
}
