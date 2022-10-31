import uniqid from 'uniqid';
import fs from 'fs';

export const access_token = {
    id: uniqid(),
    token: null
}

export const addToken = (token) => {

    // access_token.token = token;
    fs.writeFile('./token.json', token, err => {
        if(err) {
            console.log(err)
        }
    })

};

export const getToken = () => {

    try {

        const data = fs.readFileSync('./token.json', 'utf-8');
        return data;

    } catch(e) { console.error(e); }

}

