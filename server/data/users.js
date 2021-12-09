import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Pesho",
    email: "pesho@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Ivan",
    email: "ivan@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
