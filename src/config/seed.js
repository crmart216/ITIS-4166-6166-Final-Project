import bcrypt from 'bcrypt';
import prisma from './db.js';

try {

    await prisma.user.deleteMany();

    const userData = [
        {
            email: 'diskid@example.com',
            password: await bcrypt.hash('diskid1234', 10),
            role: 'ADMIN'
        },
        {
            email: 'datkid@example.com',
            password: await bcrypt.hash('datkid1234', 10),
            role: 'USER'
        },
        {
            email: 'anotherkid@example.com',
            password: await bcrypt.hash('anotherkid1234', 10),
            role: 'USER'
        }
    ]

    const users = await Promise.all(
        userData.map((user) => prisma.user.create({data:user})),
    );

    // TODO: seed recipe's here

    console.log('seed successful');
} catch (error) {
    console.error('Seed failed: ', error);
} finally {
    await prisma.$disconnect();
}