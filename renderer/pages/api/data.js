import getToken from "../../lib/token";

export default async function handler(req, res) {
    
    const res = getToken();
    
    res.status(200).json({
        "access_token": res
    });

}