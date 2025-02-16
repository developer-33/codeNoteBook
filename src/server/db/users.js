const bcrypt = require("bcrypt");
const db = require("./client"); // Keep one import for db
const SALT_COUNT = 10;
const { JWT_SECRET } = process.env;

const createUser = async ({ username,bio,custom_settings, avatar_url,theme, email, password, isAdmin }) => {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
   
  if(!isAdmin){
      isAdmin = false
  }

  if(!username){
    username=email
  }
  try {
    const {
      rows: [user],
    } = await db.query(
      `




      INSERT INTO users(isAdmin,bio,avatar_url,username,theme,email,password,created_At,custom_settings )
      VALUES($1, $2, $3, $4,$5,$6,$7,$8)
      ON CONFLICT (email) DO NOTHING
      RETURNING * `,
      [isAdmin,bio,avatar_url,username,email,password,created_At,custom_settings] // Default username to email if missing
    );

    return user;
  } catch (err) {
    throw err;
  }
};

const getUser = async ({ email, password }) => {
  if (!email || !password) return null;

  try {
    const user = await getUserByEmail(email);
    if (!user) return null;

    const passwordsMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordsMatch) return null;

    delete user.password_hash; // Remove password before returning
    return user;
  } catch (err) {
    throw err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const {
      rows: [user],
    } = await db.query(
      `SELECT id, username, email, avatar_url, bio, theme, created_at, isAdmin, password_hash 
       FROM users WHERE email=$1;`,
      [email]
    );

    return user || null;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (id) => {
  try {
    const {
      rows: [user],
    } = await db.query(
      `SELECT id, username, email, avatar_url, bio, theme, created_at, isAdmin 
       FROM users WHERE id=$1;`,
      [id]
    );

    return user || null;
  } catch (error) {
    throw error;
  }
};

async function getAllUsers() {
  try {
    const { rows } = await db.query(
      `SELECT id, username, email, avatar_url, bio, theme, created_at, isAdmin FROM users;`
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserByEmail,
  getUserById,
  getAllUsers,
};
