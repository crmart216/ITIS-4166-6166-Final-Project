import bcrypt from 'bcrypt';
import prisma from './db.js';

try {

    await prisma.user.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.recipe_Category.deleteMany();

    //seeded users
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

    // seeded categories
    const categoryData = [
        { name: "Breakfast" },
        { name: "Dinner" },
        { name: "Dessert" }
    ];

    const categories = await Promise.all(
        categoryData.map(cat => prisma.recipe_Category.create({ data: cat }))
    );

    //seeded recipes
    const recipeData = [
        {
            title: "Fluffy Pancakes",
            category_id: categories[0].id,   
            author_id: users[0].id,
            description: "Light and fluffy homemade pancakes.",
            ingredients: "Flour, Eggs, Milk, Baking Powder, Sugar, Butter",
            steps: "Mix dry ingredients. Add wet ingredients. Cook on griddle.",
            notes: "Serve with maple syrup."
        },
        {
            title: "Garlic Butter Steak",
            category_id: categories[1].id,
            author_id: users[1].id,
            description: "Juicy pan-seared steak with garlic butter.",
            ingredients: "Ribeye Steak, Garlic, Butter, Salt, Pepper",
            steps: "Season steak. Sear in hot pan. Add butter + garlic.",
            notes: "Let rest before slicing."
        },
        {
            title: "Chocolate Chip Cookies",
            category_id: categories[2].id,
            author_id: users[2].id,
            description: "Soft and chewy cookies with chocolate chips.",
            ingredients: "Flour, Eggs, Sugar, Butter, Chocolate Chips, Vanilla",
            steps: "Cream butter + sugar. Add rest. Bake.",
            notes: "Don't overbake for soft cookies."
        }
    ];

    await Promise.all(
        recipeData.map((recipe) => prisma.recipe.create({ data: recipe }))
    );

    console.log('seed successful');
} catch (error) {
    console.error('Seed failed: ', error);
} finally {
    await prisma.$disconnect();
}