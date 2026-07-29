import { Post } from './../generated/prisma/browser';
import { prisma } from './lib/prisma';

async function main() {
  // Create a new user with a post
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: {
  //         title: 'Hello World',
  //         content: 'This is my first post!',
  //         published: true,
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'hakim',
  //     email: 'hakimcolor7777@gmail.com',
  //     posts: {
  //       create: {
  //         title: '22 hello man how are you to day !',
  //         content: 'so this is my first post forever ! how was your day sir !',
  //         published: true,
  //       },
  //     },
  //   },
  //   include: { posts: true },
  // });


  // create just post any use
  const newPost = await prisma.post.create({
    data: {
      title: 'my another post for user one',
      authorId: 1,
      content: 'no content empty ok ',
      published:true
    }
  })


  console.log('Created post..', newPost);
  // console.log('Created user:', user);

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log('All users:', JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
