
const fs = require("fs");
const yargs = require("yargs");
const uniqid = require("uniqid");

// Handlers ------------------>

const loadUsers = () => {
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON)
}

const addUser = (userName, email) => {
    const users = loadUsers();
    const duplicate = users.find(user => user.userName === userName || user.email === email);

    if (!duplicate){
        users.push({
            id: uniqid(),
            userName: userName,
            email: email
        });
        saveUsers(users);
    }
}

const removeUser = (id) => {
    const users = loadUsers();
    const usersToKeep = users.filter( user => user.id != id);

    if (users.length > usersToKeep.length) {
        saveUsers(usersToKeep);
    }
}

const listUsers = () => {
    const users = loadUsers();

    users.forEach(user => {
        console.log(`User: ${user.userName}     Email: ${user.email}`);
    });
}

const readUser = (id) => {
    const users = loadUsers();
    const user = users.find( user => user.id === id);

    console.log(user);
}

const updateUser = (id, userName, email) => {
    const users = loadUsers();
    const userIndex = users.findIndex( user => user.id === id);

    if (userIndex){
        users[userIndex].userName = userName;
        users[userIndex].email = email;
        saveUsers(users);
    }
}

// Add command
yargs.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        username: {
            describe: 'Username',
            demandOption: true,
            type: 'string',
        },
        email : {
            describe: 'Email',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        console.log('Adding user');
        addUser(argv.username, argv.email);
    }
});

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        console.log('Removing user');
        removeUser(argv.id);
    }
});

// List command
yargs.command({
    command: 'list',
    describe: 'List users',
    handler(){
        console.log('List users');
        listUsers();
    }
});

// Read Command
yargs.command({
    command: 'read',
    describe: 'Read user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        console.log('Reading user');
        readUser(argv.id)
    }
});

// Update Command
yargs.command({
    command: 'update',
    describe: 'Update user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string',
        },
        username: {
            describe: 'Username',
            demandOption: true,
            type: 'string',
        },
        email : {
            describe: 'Email',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        console.log('Reading user');
        updateUser(argv.id, argv.username, argv.email)
    }
});

yargs.parse();
