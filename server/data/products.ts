// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";
import IProduct from "@/types/iProduct";
// eslint-disable-next-line import/named
import { categories } from "./categories";
import { Ages, Genres } from "@/constants/searchFilters";

export const products: IProduct[] = [
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Horizon Zero Dawn",
    rating: 4,
    ageRating: Ages["12+"],
    genre: Genres.RPG,
    categoriesId: [categories.pc.id, categories.playstation.id],
    description:
      "Horizon Zero Dawn is action role-playing game. The player uses ranged weapons, a spear, and stealth to combat mechanical creatures and other enemy forces, explore the open world to discover locations and take on side quests. A skill tree provides the player with new abilities and bonuses.",
    price: 19.99,
    img: "https://upload.wikimedia.org/wikipedia/ru/9/93/Horizon_Zero_Dawn.jpg",
    date: new Date(2015, 5, 15),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "CS:GO",
    rating: 4,
    ageRating: Ages["12+"],
    genre: Genres.Shooter,
    categoriesId: [categories.pc.id, categories.playstation.id, categories.xbox.id],
    description:
      "The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The game has matchmaking support that allows players to play on dedicated Valve servers.",
    price: 10,
    img: "https://www.digiseller.ru/preview/402257/p1_2304165_a8f6ba95.jpg",
    date: new Date(2021, 7, 21),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Brawl Stars",
    rating: 2,
    ageRating: Ages["3+"],
    genre: Genres.Action,
    categoriesId: [categories.playstation.id],
    description:
      "Brawl Stars is a multiplayer online battle arena and third-person hero shooter video game developed and published by the Finnish video game company Supercell. The game features various game modes, each with a different objective.",
    price: 5,
    img: "https://res.cloudinary.com/dvweto8rq/image/upload/WebAPI/Logo/Brawl_Stars_jwhuv1.jpg",
    date: new Date(2018, 11, 12),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Half-Life: Alyx",
    rating: 5,
    ageRating: Ages["16+"],
    genre: Genres.Action,
    categoriesId: [categories.pc.id],
    description:
      "Half-Life: Alyx is a first-person shooter game developed and published by Valve. Like previous Half-Life games, Alyx incorporates combat, puzzles, exploration and survival horror.",
    price: 27.99,
    img: "https://upload.wikimedia.org/wikipedia/ru/b/bb/Half-Life_Alyx_Coverart.jpg",
    date: new Date(2020, 2, 23),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "TES V Skyrim",
    rating: 5,
    ageRating: Ages["18+"],
    genre: Genres.RPG,
    categoriesId: [categories.pc.id, categories.playstation.id],
    description:
      "The game is set 200 years after the events of Oblivion, and takes place in Skyrim. Its main story focuses on the Dragonborn, a dragon who is prophesied to destroy the world. The player completes quests and develops the character by improving skills in the open-world.",
    price: 24.99,
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/3a/The_Elder_Scrolls_V_-_Skyrim.jpg/274px-The_Elder_Scrolls_V_-_Skyrim.jpg",
    date: new Date(2011, 10, 11),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Clash Royale",
    rating: 5,
    ageRating: Ages["3+"],
    genre: Genres.RPG,
    categoriesId: [categories.xbox.id],
    description:
      'Clash Royale is a tower rush video game which pits players in games featuring two or four players (1v1 or 2v2) in which the objective is to destroy the most opposing towers, with the destruction of the "King\'s Tower" being an instantaneous win.',
    price: 5,
    img: "https://res.cloudinary.com/dvweto8rq/image/upload/WebAPI/Logo/Clash_Royale_oipsjp.jpg",
    date: new Date(2016, 2, 2),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Beat Saber",
    rating: 5,
    ageRating: Ages["12+"],
    genre: Genres.Action,
    categoriesId: [categories.playstation.id, categories.xbox.id],
    description:
      "Beat Saber includes combining breathtaking neon visuals, energizing music, hand-crafted levels. With one saber in each hand slash the beats as they fly towards you, matching their direction and color to rack up points and keep the music moving!",
    price: 29.99,
    img: "https://josephpetitti.com/blog/images/beat-saber-poster.png",
    date: new Date(2019, 4, 21),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Terraria",
    rating: 5,
    ageRating: Ages["3+"],
    genre: Genres.Sandbox,
    categoriesId: [categories.pc.id, categories.playstation.id, categories.xbox.id],
    description:
      "Terraria is a 2D sandbox game with gameplay that revolves around exploration, building, crafting, combat, survival, and mining, playable in both single-player and multiplayer modes. The game has a 2D sprite tile-based graphical style reminiscent of the 16-bit sprites.",
    price: 4.49,
    img: "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/99/UP4040-PCSE00317_00-TERRARIA00000001/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
    date: new Date(2011, 4, 16),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Genshin Impact",
    rating: 4,
    ageRating: Ages["12+"],
    genre: Genres.RPG,
    categoriesId: [categories.pc.id, categories.xbox.id],
    description:
      "Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks.",
    price: 11.99,
    img: "https://m.media-amazon.com/images/M/MV5BYmQ1Y2IzYTUtNTU5NC00MmVmLTkzZTctMzIyMzE0MGZjMjZmXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_FMjpg_UX1000_.jpg",
    date: new Date(2020, 7, 28),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Counter-Strike 1.6",
    rating: 4,
    ageRating: Ages["6+"],
    genre: Genres.Shooter,
    categoriesId: [categories.pc.id],
    description:
      "Counter-Strike (CS) is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror (bombing, hostage-taking, assassination) while counter-terrorists try to prevent it (bomb defusal, hostage rescue, escort mission).",
    price: 2.49,
    img: "https://a.allegroimg.com/original/1189b9/9363950649a9bcca84903543fa5a/COUNTER-STRIKE-CS-1-6-STEAM-NOWA-GRA-PELNA-WERSJA",
    date: new Date(2010, 9, 25),
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Snake",
    rating: 3,
    ageRating: Ages["3+"],
    genre: Genres.Simulator,
    categoriesId: [categories.xbox.id],
    description:
      "Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself. After a variant was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in snake games as it found a larger audience.",
    price: 0.99,
    img: "http://bm.img.com.ua/berlin/storage/1100x999999/f/44/adb761bb396c685729cf0b56c434844f.png",
    date: new Date(1997, 0, 15),
  },
];

export default products;
