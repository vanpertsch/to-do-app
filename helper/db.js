const spicedPg = require("spiced-pg");

const dbUsername = "postgres";
const dbUserPassword = "postgres";
const database = "todo";

const db = spicedPg(process.env.DATABASE_URL || `postgres:${dbUsername}:${dbUserPassword}@localhost:5432/${database}`);

console.log("[db] Connecting to ", database);


// ----------------------ADD------------------------------------------------
module.exports.addUser = (first, last, email, password) => {
    const q = `INSERT INTO users (first,last,email,password) VALUES($1,$2,$3,$4) RETURNING id`;
    const params = [first, last, email, password];
    return db.query(q, params);
};





// ---------------------UPDATE------------------------------------------------


// ---------------------Check------------------------------------------------
module.exports.checkEmail = (email) => {
    const q = `SELECT * FROM users WHERE email = $1`;
    const params = [email];
    return db.query(q, params);
};




// ---------------------GET--------------------------------------------------


module.exports.getPassword = (email) => {
    const q = `SELECT password  FROM users WHERE email = $1`;
    const params = [email];
    return db.query(q, params);
};

module.exports.getUserId = (email) => {
    const q = `SELECT id  FROM users WHERE email = $1`;
    const params = [email];
    return db.query(q, params);
};


