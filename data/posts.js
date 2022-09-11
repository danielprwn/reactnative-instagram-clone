import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: "https://picsum.photos/200/300?random=1",
    user: USERS[0].user,
    likes: 350,
    caption:
      "Consequat voluptate dolor reprehenderit anim proident pariatur et.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "jack",
        comment:
          "Excepteur aliqua excepteur proident et officia ad non duis esse nisi.",
      },
      {
        user: "maria",
        comment: "Nostrud ipsum reprehenderit id ipsum velit ea.",
      },
    ],
  },

  {
    imageUrl: "https://picsum.photos/200/300?random=2",
    user: USERS[1].user,
    likes: 780,
    caption: "Esse elit ea officia culpa.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "micky",
        comment:
          "Excepteur aliqua excepteur proident et officia ad non duis esse nisi.",
      },
    ],
  },

  {
    imageUrl: "https://picsum.photos/200/300?random=3",
    user: USERS[2].user,
    likes: 1780,
    caption: "Eiusmod laboris eu magna id dolor sit deserunt labore.",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "billyyy",
        comment:
          "Excepteur aliqua excepteur proident et officia ad non duis esse nisi.",
      },
      {
        user: "kateee",
        comment: "Esse ea ad cillum anim Lorem incididunt veniam dolore in ex.",
      },
    ],
  },
];
