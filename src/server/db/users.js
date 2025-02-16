const bcrypt = require("bcrypt");
const db = require("./client");
const SALT_COUNT = 10;


const createUser = async ({ username, bio, custom_settings, avatar_url, theme, email, password, isAdmin }) => {
  try {
    if (!password) {
      throw new Error("Password is required");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    
    if (!isAdmin) isAdmin = false;
    if (!username) username = email;

    const {
      rows: [user],
    } = await db.query(
      `
      INSERT INTO users(is_admin, bio, avatar_url, username, theme, email, password_hash, created_at, custom_settings)
      VALUES($1, $2, $3, $4, $5, $6, $7, NOW(), $8)
      ON CONFLICT (email) DO NOTHING
      RETURNING id, username, email, avatar_url, bio, theme, created_at, is_admin;
      `,
      [isAdmin, bio, avatar_url, username, theme, email, hashedPassword, custom_settings]
    );

    return user;
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

const getUser = async ({ email, password }) => {
  if (!email || !password) return null;

  try {
    const user = await getUserByEmail(email);
    if (!user) return null;

    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) return null;

    delete user.password; // Remove password before returning
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
      `SELECT id, username, email, avatar_url, bio, theme, created_at, is_admin, password_hash as password
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
      `SELECT id, username, email, avatar_url, bio, theme, created_at, is_admin 
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
      `SELECT id, username, email, avatar_url, bio, theme, created_at, is_admin FROM users;`
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
