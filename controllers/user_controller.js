const db = require('../config/db');

const get_all = async (req, res) => {
    try {
        const snapshot = await db.collection("users").get();
        let responseArr = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            data.id = doc.id;
            responseArr.push(data);
        });
        res.send(responseArr);
    } catch (err) {
        res.send(err);
    }
};

const get_user_outline = async (req, res) => {
    try {
        const id = req.params.id;
        const snapshot = await db.collection("users").doc(id)
            .collection("outline").get();
        let responseArr = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            data.id = doc.id;
            responseArr.push(data);
        });
        res.send(responseArr);
    } catch (error) {
        res.send(error);
    }
}

const get_content = async(req, res) =>{
    try {
        // Get content from user
    } catch (err) {
        res.send(err);
    }
}

module.exports = {
    get_all,
    get_user_outline,
    get_content
}