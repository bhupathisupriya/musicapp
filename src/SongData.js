import { v4 as uuidv4 } from "uuid";

function data() {
  return [
    {
      audio:
        "https://mp3teluguwap.net/mp3/2024/Devara/All%20Hail%20The%20Tiger.mp3",
      name: "All Hail The Tiger",
      artist:"Anirudh Ravichander, Natalie Di Luccio",
      id: uuidv4(),
      color: ["#EF8EA9", "#ab417f"],
      active: true,
      cover:
        "https://naasongs.com.co/wp-content/uploads/2024/01/Devara-2024.jpg",
    },
    {
      audio:
        "https://mp3teluguwap.net/mp3/2024/Pushpa2/Pushpa2/Pushpa%20Pushpa.mp3",
      name: "Pushpa Pushpa Song (Full) ",
      id: uuidv4(),
      artist:"Nakash Aziz",
      color: ["#EF8EA9", "#ab417f"],
      active: false,
      cover:
        "https://naasongs.com.co/wp-content/uploads/2023/04/Pushpa-2-2023-Songs.jpg",
    },,
    {
      audio:
        "https://mp3teluguwap.net/mp3/2024/Family%20Star/Family%20Star/Kalyani%20Vaccha%20Vacchaa.mp3",
      name: "Kalyani Vaccha Vacchaa Song",
      id: uuidv4(),
      active: false,
      artist:"Karthik, Mangli",
      color: ["#EF8EA9", "#ab417f"],
      cover:
        "https://naasongs.com.co/wp-content/uploads/2024/03/The-Family-Star-2024.jpg",
    },
  ];
}

export default data;
