import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Tushar sharma',
        email: 'tushar@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Userr',
        email: 'userr@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users