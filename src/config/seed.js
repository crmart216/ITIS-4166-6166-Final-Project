import bcrypt from 'bcrypt';
import prisma from './config/db.js';

try {

    await prisma.user.deleteMany();

    const userData = [
        {
            email: 'diskid@example.com',
            password: await bcrypt.hash('diskid1234', 10)
        },
        {
            email: 'datkid@example.com',
            password: await bcrypt.hash('datkid1234', 10)
        },
        {
            email: 'anotherkid@example.com',
            password: await bcrypt.hash('anotherkid1234', 10)
        }
    ]

    const users = await Promise.all(
        userData.map((user) => prisma.user.create({data:user})),
    );

    // TODO: seed recipe's here


} catch (error) {
    console.error('Seed failed: ', error);
} finally {
    await prisma.$disconnect();
}