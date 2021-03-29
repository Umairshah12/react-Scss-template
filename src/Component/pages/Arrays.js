import user1 from "../assets/images/img3.jpg";
import user4 from "../assets/images/img4.jpg";

const PostsData = [
  {
    id: 1,
    userName: "John Doa",
    UserImg: user1,
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam
                  scelerisque urna et mauris mattis sit amet interdum tellus
                  pulvinar Aenean blandit pulvinar rhoncus.`,
    thumbsUp: 3,
  },
  {
    id: 2,
    userName: "Alex",
    UserImg: user4,
    description: `Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam
                  scelerisque urna et mauris mattis sit amet interdum tellus
                  pulvinar Aenean blandit pulvinar rhoncus.`,
    thumbsUp: 5,
  },
];

const UserProfiles = [
  {
    id: 1,
    userimg: user1,
    userName: "John.Doa",
    address: "Seatell, WA",
    post: "Developer at Microsoft",
    coarses: ["HTML", "CSS", "JAVASCRIPT", "PYTHON"],
  },
  {
    id: 2,
    userimg: user4,
    userName: "Alex",
    address: "California",
    post: "Developer at Microsoft",
    coarses: ["HTML", "CSS", "JAVASCRIPT", "PYTHON"],
  },
];
export { PostsData, UserProfiles };
