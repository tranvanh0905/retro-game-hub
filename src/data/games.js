// Auto-generated from ROM files — 2226 NES games (2038 with thumbnails)
// Generated on 2026-02-26T18:49:33.803Z

export const SYSTEMS = {
  nes: { name: 'NES', full: 'Nintendo Entertainment System', core: 'nes', color: '#e74c3c', icon: '🎮', ext: '.nes' },
  ps1: { name: 'PS1', full: 'PlayStation 1', core: 'psx', color: '#3498db', icon: '🎯', ext: '.bin' },
};

const CDN = import.meta.env.VITE_CDN_URL || '';

export function romUrl(game) {
  return `${CDN}/roms/${game.system}/${game.romFile}`;
}

export function imgUrl(game) {
  if (!game.img) return null;
  return `${CDN}/images/${game.system}/${game.slug}.png`;
}

export const FEATURED_SLUGS = new Set([
  'super-mario-bros-e',
  'super-mario-bros-2-e',
  'super-mario-bros-3-e',
  'zelda-ii-the-adventure-of-link-u',
  'zelda-no-densetsu-1-the-hyrule-fantasy-j',
  'metroid-u',
  'mega-man-u',
  'mega-man-2-u',
  'mega-man-3-u',
  'mega-man-4-u',
  'mega-man-5-u',
  'mega-man-6-u',
  'castlevania-u-prg1',
  'castlevania-ii-simon-s-quest-u',
  'castlevania-iii-dracula-s-curse-u',
  'contra-u',
  'super-contra-j',
  'mike-tyson-s-punch-out-u-prg1',
  'punch-out-u',
  'duck-hunt-jue',
  'tetris-u',
  'final-fantasy-u',
  'final-fantasy-iii-j',
  'dragon-warrior-u-prg0',
  'dragon-warrior-ii-u',
  'dragon-warrior-iii-u',
  'dragon-warrior-iv-u',
  'kirby-s-adventure-u-prg0',
  'ninja-gaiden-u',
  'ninja-gaiden-2-the-dark-sword-of-chaos-u',
  'ninja-gaiden-3-the-ancient-ship-of-doom-u',
  'battletoads-u',
  'double-dragon-u',
  'double-dragon-ii-the-revenge-u',
  'excitebike-ju',
  'ice-climber-u',
  'balloon-fight-ju',
  'donkey-kong-gc',
  'donkey-kong-jr-ju',
  'gradius-u',
  'salamander-j',
  'bomberman-u',
  'hudson-s-adventure-island-u',
  'teenage-mutant-ninja-turtles-u',
  'teenage-mutant-ninja-turtles-ii-the-arcade-game-u',
  'teenage-mutant-ninja-turtles-iii-the-manhattan-project-u',
  'river-city-ransom-u',
  'tecmo-super-bowl-u',
  'r-c-pro-am-u-prg1',
  'blaster-master-u',
  'bubble-bobble-u',
  'dr-mario-e',
  'kid-icarus-ue',
  'little-nemo-the-dream-master-u',
  'faxanadu-u',
  'crystalis-u',
  'paperboy-u',
  'spy-hunter-u',
  'galaga-u',
  'metal-gear-u',
  'bionic-commando-u',
  'batman-u',
  'chip-n-dale-rescue-rangers-u',
  'duck-tales-u',
]);

export const GAMES = [
  {
    "id": 1,
    "title": "'89 Dennou Kyuusei Uranai (J)",
    "slug": "89-dennou-kyuusei-uranai-j",
    "system": "nes",
    "romFile": "'89 Dennou Kyuusei Uranai (J).zip",
    "img": true
  },
  {
    "id": 2,
    "title": "10-Yard Fight (J)",
    "slug": "10-yard-fight-j",
    "system": "nes",
    "romFile": "10-Yard Fight (J).zip",
    "img": true
  },
  {
    "id": 3,
    "title": "10-Yard Fight (U)",
    "slug": "10-yard-fight-u",
    "system": "nes",
    "romFile": "10-Yard Fight (U).zip",
    "img": true
  },
  {
    "id": 4,
    "title": "100 Man $ Kid - Maboroshi no Teiou Hen (J)",
    "slug": "100-man-kid-maboroshi-no-teiou-hen-j",
    "system": "nes",
    "romFile": "100 Man $ Kid - Maboroshi no Teiou Hen (J).zip"
  },
  {
    "id": 5,
    "title": "110-in-1 (Unl)",
    "slug": "110-in-1-unl",
    "system": "nes",
    "romFile": "110-in-1 (Unl).zip",
    "img": true
  },
  {
    "id": 6,
    "title": "115-in-1 (Unl)",
    "slug": "115-in-1-unl",
    "system": "nes",
    "romFile": "115-in-1 (Unl).zip",
    "img": true
  },
  {
    "id": 7,
    "title": "1942 (JU)",
    "slug": "1942-ju",
    "system": "nes",
    "romFile": "1942 (JU) [!].zip",
    "img": true
  },
  {
    "id": 8,
    "title": "1942 (PC10)",
    "slug": "1942-pc10",
    "system": "nes",
    "romFile": "1942 (PC10).zip",
    "img": true
  },
  {
    "id": 9,
    "title": "1943 (J)",
    "slug": "1943-j",
    "system": "nes",
    "romFile": "1943 (J).zip",
    "img": true
  },
  {
    "id": 10,
    "title": "1943 - The Battle of Midway (U)",
    "slug": "1943-the-battle-of-midway-u",
    "system": "nes",
    "romFile": "1943 - The Battle of Midway (U).zip",
    "img": true
  },
  {
    "id": 11,
    "title": "1991 Du Ma Racing (As)",
    "slug": "1991-du-ma-racing-as",
    "system": "nes",
    "romFile": "1991 Du Ma Racing (As).zip",
    "img": true
  },
  {
    "id": 12,
    "title": "1999 - Hore, Mitakotoka! Seikimatsu (J)",
    "slug": "1999-hore-mitakotoka-seikimatsu-j",
    "system": "nes",
    "romFile": "1999 - Hore, Mitakotoka! Seikimatsu (J).zip",
    "img": true
  },
  {
    "id": 13,
    "title": "3-D Battles of World Runner, The (U)",
    "slug": "3-d-battles-of-world-runner-the-u",
    "system": "nes",
    "romFile": "3-D Battles of World Runner, The (U).zip"
  },
  {
    "id": 14,
    "title": "4 Nin Uchi Mahjong (J)",
    "slug": "4-nin-uchi-mahjong-j",
    "system": "nes",
    "romFile": "4 Nin Uchi Mahjong (J).zip",
    "img": true
  },
  {
    "id": 15,
    "title": "720 (U)",
    "slug": "720-u",
    "system": "nes",
    "romFile": "720 (U).zip"
  },
  {
    "id": 16,
    "title": "8 Eyes (J)",
    "slug": "8-eyes-j",
    "system": "nes",
    "romFile": "8 Eyes (J).zip",
    "img": true
  },
  {
    "id": 17,
    "title": "8 Eyes (U)",
    "slug": "8-eyes-u",
    "system": "nes",
    "romFile": "8 Eyes (U).zip",
    "img": true
  },
  {
    "id": 18,
    "title": "A Ressha de Ikou (J)",
    "slug": "a-ressha-de-ikou-j",
    "system": "nes",
    "romFile": "A Ressha de Ikou (J).zip",
    "img": true
  },
  {
    "id": 19,
    "title": "ASO - Armored Scrum Object (J)",
    "slug": "aso-armored-scrum-object-j",
    "system": "nes",
    "romFile": "ASO - Armored Scrum Object (J).zip",
    "img": true
  },
  {
    "id": 20,
    "title": "AV - Mahjongg (As)",
    "slug": "av-mahjongg-as",
    "system": "nes",
    "romFile": "AV - Mahjongg (As).zip"
  },
  {
    "id": 21,
    "title": "Aa Yakyuu Jinsei Icchokusen (J)",
    "slug": "aa-yakyuu-jinsei-icchokusen-j",
    "system": "nes",
    "romFile": "Aa Yakyuu Jinsei Icchokusen (J).zip",
    "img": true
  },
  {
    "id": 22,
    "title": "Abadox (J)",
    "slug": "abadox-j",
    "system": "nes",
    "romFile": "Abadox (J).zip",
    "img": true
  },
  {
    "id": 23,
    "title": "Abadox (U)",
    "slug": "abadox-u",
    "system": "nes",
    "romFile": "Abadox (U).zip",
    "img": true
  },
  {
    "id": 24,
    "title": "Abarenbou Tengu (J)",
    "slug": "abarenbou-tengu-j",
    "system": "nes",
    "romFile": "Abarenbou Tengu (J).zip",
    "img": true
  },
  {
    "id": 25,
    "title": "Aces - Iron Eagle 3 (J)",
    "slug": "aces-iron-eagle-3-j",
    "system": "nes",
    "romFile": "Aces - Iron Eagle 3 (J).zip",
    "img": true
  },
  {
    "id": 26,
    "title": "Action 52 (E)",
    "slug": "action-52-e",
    "system": "nes",
    "romFile": "Action 52 (E).zip",
    "img": true
  },
  {
    "id": 27,
    "title": "Action 52 (U)",
    "slug": "action-52-u",
    "system": "nes",
    "romFile": "Action 52 (U) [!].zip",
    "img": true
  },
  {
    "id": 28,
    "title": "Action in New York (E)",
    "slug": "action-in-new-york-e",
    "system": "nes",
    "romFile": "Action in New York (E).zip",
    "img": true
  },
  {
    "id": 29,
    "title": "Addams Family, The (U)",
    "slug": "addams-family-the-u",
    "system": "nes",
    "romFile": "Addams Family, The (U).zip",
    "img": true
  },
  {
    "id": 30,
    "title": "Addams Family, The - Pugsley's Scavenger Hunt (U)",
    "slug": "addams-family-the-pugsley-s-scavenger-hunt-u",
    "system": "nes",
    "romFile": "Addams Family, The - Pugsley's Scavenger Hunt (U).zip",
    "img": true
  },
  {
    "id": 31,
    "title": "Advanced Dungeons & Dragons - Dragon Strike (U)",
    "slug": "advanced-dungeons-dragons-dragon-strike-u",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Dragon Strike (U).zip"
  },
  {
    "id": 32,
    "title": "Advanced Dungeons & Dragons - Dragons of Flame (J)",
    "slug": "advanced-dungeons-dragons-dragons-of-flame-j",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Dragons of Flame (J).zip",
    "img": true
  },
  {
    "id": 33,
    "title": "Advanced Dungeons & Dragons - Heroes of the Lance (J)",
    "slug": "advanced-dungeons-dragons-heroes-of-the-lance-j",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Heroes of the Lance (J).zip",
    "img": true
  },
  {
    "id": 34,
    "title": "Advanced Dungeons & Dragons - Heroes of the Lance (U)",
    "slug": "advanced-dungeons-dragons-heroes-of-the-lance-u",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Heroes of the Lance (U).zip",
    "img": true
  },
  {
    "id": 35,
    "title": "Advanced Dungeons & Dragons - Hillsfar (J)",
    "slug": "advanced-dungeons-dragons-hillsfar-j",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Hillsfar (J).zip",
    "img": true
  },
  {
    "id": 36,
    "title": "Advanced Dungeons & Dragons - Hillsfar (U)",
    "slug": "advanced-dungeons-dragons-hillsfar-u",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Hillsfar (U) [!].zip",
    "img": true
  },
  {
    "id": 37,
    "title": "Advanced Dungeons & Dragons - Pool of Radiance (J)",
    "slug": "advanced-dungeons-dragons-pool-of-radiance-j",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Pool of Radiance (J).zip",
    "img": true
  },
  {
    "id": 38,
    "title": "Advanced Dungeons & Dragons - Pool of Radiance (U)",
    "slug": "advanced-dungeons-dragons-pool-of-radiance-u",
    "system": "nes",
    "romFile": "Advanced Dungeons & Dragons - Pool of Radiance (U).zip",
    "img": true
  },
  {
    "id": 39,
    "title": "Adventures in the Magic Kingdom (E)",
    "slug": "adventures-in-the-magic-kingdom-e",
    "system": "nes",
    "romFile": "Adventures in the Magic Kingdom (E) [!].zip",
    "img": true
  },
  {
    "id": 40,
    "title": "Adventures in the Magic Kingdom (U)",
    "slug": "adventures-in-the-magic-kingdom-u",
    "system": "nes",
    "romFile": "Adventures in the Magic Kingdom (U).zip",
    "img": true
  },
  {
    "id": 41,
    "title": "Adventures of Bayou Billy, The (E)",
    "slug": "adventures-of-bayou-billy-the-e",
    "system": "nes",
    "romFile": "Adventures of Bayou Billy, The (E).zip",
    "img": true
  },
  {
    "id": 42,
    "title": "Adventures of Bayou Billy, The (U)",
    "slug": "adventures-of-bayou-billy-the-u",
    "system": "nes",
    "romFile": "Adventures of Bayou Billy, The (U).zip",
    "img": true
  },
  {
    "id": 43,
    "title": "Adventures of Captain Comic, The (U)",
    "slug": "adventures-of-captain-comic-the-u",
    "system": "nes",
    "romFile": "Adventures of Captain Comic, The (U).zip"
  },
  {
    "id": 44,
    "title": "Adventures of Dino Riki, The (U)",
    "slug": "adventures-of-dino-riki-the-u",
    "system": "nes",
    "romFile": "Adventures of Dino Riki, The (U).zip"
  },
  {
    "id": 45,
    "title": "Adventures of Lolo (E)",
    "slug": "adventures-of-lolo-e",
    "system": "nes",
    "romFile": "Adventures of Lolo (E) [!].zip",
    "img": true
  },
  {
    "id": 46,
    "title": "Adventures of Lolo (J)",
    "slug": "adventures-of-lolo-j",
    "system": "nes",
    "romFile": "Adventures of Lolo (J).zip",
    "img": true
  },
  {
    "id": 47,
    "title": "Adventures of Lolo (U)",
    "slug": "adventures-of-lolo-u",
    "system": "nes",
    "romFile": "Adventures of Lolo (U) [!].zip",
    "img": true
  },
  {
    "id": 48,
    "title": "Adventures of Lolo 2 (J)",
    "slug": "adventures-of-lolo-2-j",
    "system": "nes",
    "romFile": "Adventures of Lolo 2 (J).zip",
    "img": true
  },
  {
    "id": 49,
    "title": "Adventures of Lolo 2 (U)",
    "slug": "adventures-of-lolo-2-u",
    "system": "nes",
    "romFile": "Adventures of Lolo 2 (U).zip",
    "img": true
  },
  {
    "id": 50,
    "title": "Adventures of Lolo 3 (U)",
    "slug": "adventures-of-lolo-3-u",
    "system": "nes",
    "romFile": "Adventures of Lolo 3 (U).zip",
    "img": true
  },
  {
    "id": 51,
    "title": "Adventures of Rad Gravity, The (E)",
    "slug": "adventures-of-rad-gravity-the-e",
    "system": "nes",
    "romFile": "Adventures of Rad Gravity, The (E).zip",
    "img": true
  },
  {
    "id": 52,
    "title": "Adventures of Rad Gravity, The (U)",
    "slug": "adventures-of-rad-gravity-the-u",
    "system": "nes",
    "romFile": "Adventures of Rad Gravity, The (U).zip",
    "img": true
  },
  {
    "id": 53,
    "title": "Adventures of Rocky and Bullwinkle and Friends, The (U)",
    "slug": "adventures-of-rocky-and-bullwinkle-and-friends-the-u",
    "system": "nes",
    "romFile": "Adventures of Rocky and Bullwinkle and Friends, The (U).zip",
    "img": true
  },
  {
    "id": 54,
    "title": "Adventures of Tom Sawyer (U)",
    "slug": "adventures-of-tom-sawyer-u",
    "system": "nes",
    "romFile": "Adventures of Tom Sawyer (U).zip",
    "img": true
  },
  {
    "id": 55,
    "title": "After Burner (U)",
    "slug": "after-burner-u",
    "system": "nes",
    "romFile": "After Burner (U).zip",
    "img": true
  },
  {
    "id": 56,
    "title": "After Burner II (J)",
    "slug": "after-burner-ii-j",
    "system": "nes",
    "romFile": "After Burner II (J).zip",
    "img": true
  },
  {
    "id": 57,
    "title": "Ai Sensei no Oshiete - Watashi no Hoshi (J)",
    "slug": "ai-sensei-no-oshiete-watashi-no-hoshi-j",
    "system": "nes",
    "romFile": "Ai Sensei no Oshiete - Watashi no Hoshi (J).zip",
    "img": true
  },
  {
    "id": 58,
    "title": "Ai Senshi Nicol (As)",
    "slug": "ai-senshi-nicol-as",
    "system": "nes",
    "romFile": "Ai Senshi Nicol (As).zip",
    "img": true
  },
  {
    "id": 59,
    "title": "Aigiina no Yogen - From The Legend of Balubalouk (J)",
    "slug": "aigiina-no-yogen-from-the-legend-of-balubalouk-j",
    "system": "nes",
    "romFile": "Aigiina no Yogen - From The Legend of Balubalouk (J).zip",
    "img": true
  },
  {
    "id": 60,
    "title": "Air Fortress (J)",
    "slug": "air-fortress-j",
    "system": "nes",
    "romFile": "Air Fortress (J).zip",
    "img": true
  },
  {
    "id": 61,
    "title": "Air Fortress (U)",
    "slug": "air-fortress-u",
    "system": "nes",
    "romFile": "Air Fortress (U).zip",
    "img": true
  },
  {
    "id": 62,
    "title": "Airwolf (E)",
    "slug": "airwolf-e",
    "system": "nes",
    "romFile": "Airwolf (E).zip",
    "img": true
  },
  {
    "id": 63,
    "title": "Airwolf (J)",
    "slug": "airwolf-j",
    "system": "nes",
    "romFile": "Airwolf (J).zip",
    "img": true
  },
  {
    "id": 64,
    "title": "Airwolf (U)",
    "slug": "airwolf-u",
    "system": "nes",
    "romFile": "Airwolf (U).zip",
    "img": true
  },
  {
    "id": 65,
    "title": "Akagawa Jirou no Yuurei Ressha (J)",
    "slug": "akagawa-jirou-no-yuurei-ressha-j",
    "system": "nes",
    "romFile": "Akagawa Jirou no Yuurei Ressha (J).zip",
    "img": true
  },
  {
    "id": 66,
    "title": "Akira (J)",
    "slug": "akira-j",
    "system": "nes",
    "romFile": "Akira (J).zip",
    "img": true
  },
  {
    "id": 67,
    "title": "Akuma no Shoutaijou (J)",
    "slug": "akuma-no-shoutaijou-j",
    "system": "nes",
    "romFile": "Akuma no Shoutaijou (J).zip",
    "img": true
  },
  {
    "id": 68,
    "title": "Akuma-kun - Makai no Wana (J)",
    "slug": "akuma-kun-makai-no-wana-j",
    "system": "nes",
    "romFile": "Akuma-kun - Makai no Wana (J).zip",
    "img": true
  },
  {
    "id": 69,
    "title": "Akumajou Densetsu (J)",
    "slug": "akumajou-densetsu-j",
    "system": "nes",
    "romFile": "Akumajou Densetsu (J).zip",
    "img": true
  },
  {
    "id": 70,
    "title": "Akumajou Dracula (J)",
    "slug": "akumajou-dracula-j",
    "system": "nes",
    "romFile": "Akumajou Dracula (J).zip",
    "img": true
  },
  {
    "id": 71,
    "title": "Akumajou Special - Boku Dracula-kun (J)",
    "slug": "akumajou-special-boku-dracula-kun-j",
    "system": "nes",
    "romFile": "Akumajou Special - Boku Dracula-kun (J).zip",
    "img": true
  },
  {
    "id": 72,
    "title": "Al Unser Jr. Turbo Racing (U)",
    "slug": "al-unser-jr-turbo-racing-u",
    "system": "nes",
    "romFile": "Al Unser Jr. Turbo Racing (U).zip",
    "img": true
  },
  {
    "id": 73,
    "title": "Aladdin (E)",
    "slug": "aladdin-e",
    "system": "nes",
    "romFile": "Aladdin (E) [!].zip",
    "img": true
  },
  {
    "id": 74,
    "title": "Alfred Chicken (E)",
    "slug": "alfred-chicken-e",
    "system": "nes",
    "romFile": "Alfred Chicken (E) [!].zip",
    "img": true
  },
  {
    "id": 75,
    "title": "Alfred Chicken (U)",
    "slug": "alfred-chicken-u",
    "system": "nes",
    "romFile": "Alfred Chicken (U).zip",
    "img": true
  },
  {
    "id": 76,
    "title": "Alien 3 (E)",
    "slug": "alien-3-e",
    "system": "nes",
    "romFile": "Alien 3 (E) [!].zip",
    "img": true
  },
  {
    "id": 77,
    "title": "Alien 3 (U)",
    "slug": "alien-3-u",
    "system": "nes",
    "romFile": "Alien 3 (U).zip",
    "img": true
  },
  {
    "id": 78,
    "title": "Alien Syndrome (J)",
    "slug": "alien-syndrome-j",
    "system": "nes",
    "romFile": "Alien Syndrome (J).zip",
    "img": true
  },
  {
    "id": 79,
    "title": "Alien Syndrome (U)",
    "slug": "alien-syndrome-u",
    "system": "nes",
    "romFile": "Alien Syndrome (U).zip",
    "img": true
  },
  {
    "id": 80,
    "title": "All-Pro Basketball (U)",
    "slug": "all-pro-basketball-u",
    "system": "nes",
    "romFile": "All-Pro Basketball (U).zip",
    "img": true
  },
  {
    "id": 81,
    "title": "Alpha Mission (U)",
    "slug": "alpha-mission-u",
    "system": "nes",
    "romFile": "Alpha Mission (U).zip",
    "img": true
  },
  {
    "id": 82,
    "title": "Amagon (U)",
    "slug": "amagon-u",
    "system": "nes",
    "romFile": "Amagon (U).zip",
    "img": true
  },
  {
    "id": 83,
    "title": "America Daitouryou Senkyo (J)",
    "slug": "america-daitouryou-senkyo-j",
    "system": "nes",
    "romFile": "America Daitouryou Senkyo (J).zip",
    "img": true
  },
  {
    "id": 84,
    "title": "America Oudan Ultra Quiz - Shijou Saidai no Tatakai (J)",
    "slug": "america-oudan-ultra-quiz-shijou-saidai-no-tatakai-j",
    "system": "nes",
    "romFile": "America Oudan Ultra Quiz - Shijou Saidai no Tatakai (J).zip",
    "img": true
  },
  {
    "id": 85,
    "title": "American Dream (J)",
    "slug": "american-dream-j",
    "system": "nes",
    "romFile": "American Dream (J).zip",
    "img": true
  },
  {
    "id": 86,
    "title": "American Gladiators (U)",
    "slug": "american-gladiators-u",
    "system": "nes",
    "romFile": "American Gladiators (U).zip",
    "img": true
  },
  {
    "id": 87,
    "title": "Ankoku Shinwa - Yamato Takeru Densetsu (J)",
    "slug": "ankoku-shinwa-yamato-takeru-densetsu-j",
    "system": "nes",
    "romFile": "Ankoku Shinwa - Yamato Takeru Densetsu (J).zip",
    "img": true
  },
  {
    "id": 88,
    "title": "Antarctic Adventure (J)",
    "slug": "antarctic-adventure-j",
    "system": "nes",
    "romFile": "Antarctic Adventure (J).zip"
  },
  {
    "id": 89,
    "title": "Anticipation (U)",
    "slug": "anticipation-u",
    "system": "nes",
    "romFile": "Anticipation (U).zip",
    "img": true
  },
  {
    "id": 90,
    "title": "Aoki Ookami to Shiroki Mejika - Genchou Hishi (J)",
    "slug": "aoki-ookami-to-shiroki-mejika-genchou-hishi-j",
    "system": "nes",
    "romFile": "Aoki Ookami to Shiroki Mejika - Genchou Hishi (J).zip",
    "img": true
  },
  {
    "id": 91,
    "title": "Aoki Ookami to Shiroki Mejika - Genghis Khan (J)",
    "slug": "aoki-ookami-to-shiroki-mejika-genghis-khan-j",
    "system": "nes",
    "romFile": "Aoki Ookami to Shiroki Mejika - Genghis Khan (J).zip",
    "img": true
  },
  {
    "id": 92,
    "title": "Arabian Dream Sherazaado (J)",
    "slug": "arabian-dream-sherazaado-j",
    "system": "nes",
    "romFile": "Arabian Dream Sherazaado (J).zip"
  },
  {
    "id": 93,
    "title": "Arch Rivals - A Basket Brawl! (U)",
    "slug": "arch-rivals-a-basket-brawl-u",
    "system": "nes",
    "romFile": "Arch Rivals - A Basket Brawl! (U).zip",
    "img": true
  },
  {
    "id": 94,
    "title": "Architect (Dr. PC Jr., As)",
    "slug": "architect-dr-pc-jr-as",
    "system": "nes",
    "romFile": "Architect (Dr. PC Jr.) (As).zip",
    "img": true
  },
  {
    "id": 95,
    "title": "Archon (U)",
    "slug": "archon-u",
    "system": "nes",
    "romFile": "Archon (U).zip",
    "img": true
  },
  {
    "id": 96,
    "title": "Arctic (J)",
    "slug": "arctic-j",
    "system": "nes",
    "romFile": "Arctic (J).zip",
    "img": true
  },
  {
    "id": 97,
    "title": "Argos no Senshi (J)",
    "slug": "argos-no-senshi-j",
    "system": "nes",
    "romFile": "Argos no Senshi (J).zip",
    "img": true
  },
  {
    "id": 98,
    "title": "Argus (J)",
    "slug": "argus-j",
    "system": "nes",
    "romFile": "Argus (J).zip",
    "img": true
  },
  {
    "id": 99,
    "title": "Arkanoid (J)",
    "slug": "arkanoid-j",
    "system": "nes",
    "romFile": "Arkanoid (J).zip",
    "img": true
  },
  {
    "id": 100,
    "title": "Arkanoid (U)",
    "slug": "arkanoid-u",
    "system": "nes",
    "romFile": "Arkanoid (U).zip",
    "img": true
  },
  {
    "id": 101,
    "title": "Arkanoid 2 (J)",
    "slug": "arkanoid-2-j",
    "system": "nes",
    "romFile": "Arkanoid 2 (J).zip",
    "img": true
  },
  {
    "id": 102,
    "title": "Arkista's Ring (U)",
    "slug": "arkista-s-ring-u",
    "system": "nes",
    "romFile": "Arkista's Ring (U) [!].zip",
    "img": true
  },
  {
    "id": 103,
    "title": "Armadillo (J)",
    "slug": "armadillo-j",
    "system": "nes",
    "romFile": "Armadillo (J).zip",
    "img": true
  },
  {
    "id": 104,
    "title": "Artelius (J)",
    "slug": "artelius-j",
    "system": "nes",
    "romFile": "Artelius (J) [!].zip",
    "img": true
  },
  {
    "id": 105,
    "title": "Asmik-kun Land (J)",
    "slug": "asmik-kun-land-j",
    "system": "nes",
    "romFile": "Asmik-kun Land (J).zip",
    "img": true
  },
  {
    "id": 106,
    "title": "Asterix (E)",
    "slug": "asterix-e",
    "system": "nes",
    "romFile": "Asterix (E).zip",
    "img": true
  },
  {
    "id": 107,
    "title": "Astro Fang - Super Machine (J)",
    "slug": "astro-fang-super-machine-j",
    "system": "nes",
    "romFile": "Astro Fang - Super Machine (J).zip",
    "img": true
  },
  {
    "id": 108,
    "title": "Astro Robo Sasa (J)",
    "slug": "astro-robo-sasa-j",
    "system": "nes",
    "romFile": "Astro Robo Sasa (J).zip",
    "img": true
  },
  {
    "id": 109,
    "title": "Astyanax (U, Prototype)",
    "slug": "astyanax-u-prototype",
    "system": "nes",
    "romFile": "Astyanax (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 110,
    "title": "Astyanax (U)",
    "slug": "astyanax-u",
    "system": "nes",
    "romFile": "Astyanax (U).zip",
    "img": true
  },
  {
    "id": 111,
    "title": "Atari RBI Baseball (VS)",
    "slug": "atari-rbi-baseball-vs",
    "system": "nes",
    "romFile": "Atari RBI Baseball (VS).zip"
  },
  {
    "id": 112,
    "title": "Athena (J)",
    "slug": "athena-j",
    "system": "nes",
    "romFile": "Athena (J).zip",
    "img": true
  },
  {
    "id": 113,
    "title": "Athena (U)",
    "slug": "athena-u",
    "system": "nes",
    "romFile": "Athena (U).zip",
    "img": true
  },
  {
    "id": 114,
    "title": "Athletic World (E)",
    "slug": "athletic-world-e",
    "system": "nes",
    "romFile": "Athletic World (E) [!].zip",
    "img": true
  },
  {
    "id": 115,
    "title": "Athletic World (U)",
    "slug": "athletic-world-u",
    "system": "nes",
    "romFile": "Athletic World (U).zip",
    "img": true
  },
  {
    "id": 116,
    "title": "Atlantis no Nazo (J)",
    "slug": "atlantis-no-nazo-j",
    "system": "nes",
    "romFile": "Atlantis no Nazo (J).zip",
    "img": true
  },
  {
    "id": 117,
    "title": "Attack Animal Gakuen (J)",
    "slug": "attack-animal-gakuen-j",
    "system": "nes",
    "romFile": "Attack Animal Gakuen (J).zip",
    "img": true
  },
  {
    "id": 118,
    "title": "Attack of the Killer Tomatoes (U)",
    "slug": "attack-of-the-killer-tomatoes-u",
    "system": "nes",
    "romFile": "Attack of the Killer Tomatoes (U).zip",
    "img": true
  },
  {
    "id": 119,
    "title": "Aussie Rules Footy (E)",
    "slug": "aussie-rules-footy-e",
    "system": "nes",
    "romFile": "Aussie Rules Footy (E) [!].zip",
    "img": true
  },
  {
    "id": 120,
    "title": "B-Wings (J)",
    "slug": "b-wings-j",
    "system": "nes",
    "romFile": "B-Wings (J).zip",
    "img": true
  },
  {
    "id": 121,
    "title": "Babel no Tou (J)",
    "slug": "babel-no-tou-j",
    "system": "nes",
    "romFile": "Babel no Tou (J).zip",
    "img": true
  },
  {
    "id": 122,
    "title": "Baby Boomer (U)",
    "slug": "baby-boomer-u",
    "system": "nes",
    "romFile": "Baby Boomer (U).zip",
    "img": true
  },
  {
    "id": 123,
    "title": "Back to the Future (U)",
    "slug": "back-to-the-future-u",
    "system": "nes",
    "romFile": "Back to the Future (U).zip",
    "img": true
  },
  {
    "id": 124,
    "title": "Back to the Future II & III (U)",
    "slug": "back-to-the-future-ii-iii-u",
    "system": "nes",
    "romFile": "Back to the Future II & III (U).zip"
  },
  {
    "id": 125,
    "title": "Bad Dudes (U)",
    "slug": "bad-dudes-u",
    "system": "nes",
    "romFile": "Bad Dudes (U).zip",
    "img": true
  },
  {
    "id": 126,
    "title": "Bad Dudes vs Dragon Ninja (E)",
    "slug": "bad-dudes-vs-dragon-ninja-e",
    "system": "nes",
    "romFile": "Bad Dudes vs Dragon Ninja (E) [!].zip",
    "img": true
  },
  {
    "id": 127,
    "title": "Bad News Baseball (U)",
    "slug": "bad-news-baseball-u",
    "system": "nes",
    "romFile": "Bad News Baseball (U).zip",
    "img": true
  },
  {
    "id": 128,
    "title": "Bad Street Brawler (U)",
    "slug": "bad-street-brawler-u",
    "system": "nes",
    "romFile": "Bad Street Brawler (U).zip",
    "img": true
  },
  {
    "id": 129,
    "title": "Baken Hisshou Gaku - Gate In (J)",
    "slug": "baken-hisshou-gaku-gate-in-j",
    "system": "nes",
    "romFile": "Baken Hisshou Gaku - Gate In (J).zip",
    "img": true
  },
  {
    "id": 130,
    "title": "Bakushou! Star Monomane Shitennou (J)",
    "slug": "bakushou-star-monomane-shitennou-j",
    "system": "nes",
    "romFile": "Bakushou! Star Monomane Shitennou (J).zip",
    "img": true
  },
  {
    "id": 131,
    "title": "Bakushou!! Ai no Gekijou (J)",
    "slug": "bakushou-ai-no-gekijou-j",
    "system": "nes",
    "romFile": "Bakushou!! Ai no Gekijou (J).zip",
    "img": true
  },
  {
    "id": 132,
    "title": "Bakushou!! Jinsei Gekijou (J)",
    "slug": "bakushou-jinsei-gekijou-j",
    "system": "nes",
    "romFile": "Bakushou!! Jinsei Gekijou (J).zip",
    "img": true
  },
  {
    "id": 133,
    "title": "Bakushou!! Jinsei Gekijou 2 (J)",
    "slug": "bakushou-jinsei-gekijou-2-j",
    "system": "nes",
    "romFile": "Bakushou!! Jinsei Gekijou 2 (J).zip",
    "img": true
  },
  {
    "id": 134,
    "title": "Bakushou!! Jinsei Gekijou 3 (J)",
    "slug": "bakushou-jinsei-gekijou-3-j",
    "system": "nes",
    "romFile": "Bakushou!! Jinsei Gekijou 3 (J).zip",
    "img": true
  },
  {
    "id": 135,
    "title": "Ballblazer (J)",
    "slug": "ballblazer-j",
    "system": "nes",
    "romFile": "Ballblazer (J).zip",
    "img": true
  },
  {
    "id": 136,
    "title": "Balloon Fight (E, GC)",
    "slug": "balloon-fight-e-gc",
    "system": "nes",
    "romFile": "Balloon Fight (E) (GC).zip",
    "img": true
  },
  {
    "id": 137,
    "title": "Balloon Fight (E)",
    "slug": "balloon-fight-e",
    "system": "nes",
    "romFile": "Balloon Fight (E).zip",
    "img": true
  },
  {
    "id": 138,
    "title": "Balloon Fight (JU)",
    "slug": "balloon-fight-ju",
    "system": "nes",
    "romFile": "Balloon Fight (JU) [!].zip",
    "img": true
  },
  {
    "id": 139,
    "title": "Balloon Fight (PC10)",
    "slug": "balloon-fight-pc10",
    "system": "nes",
    "romFile": "Balloon Fight (PC10).zip",
    "img": true
  },
  {
    "id": 140,
    "title": "Balloon Fight (VS, Player 2 Mode)",
    "slug": "balloon-fight-vs-player-2-mode",
    "system": "nes",
    "romFile": "Balloon Fight (VS) (Player 2 Mode).zip",
    "img": true
  },
  {
    "id": 141,
    "title": "Balloon Fight (VS)",
    "slug": "balloon-fight-vs",
    "system": "nes",
    "romFile": "Balloon Fight (VS) [!].zip",
    "img": true
  },
  {
    "id": 142,
    "title": "Baltron (J)",
    "slug": "baltron-j",
    "system": "nes",
    "romFile": "Baltron (J).zip",
    "img": true
  },
  {
    "id": 143,
    "title": "Banana (J)",
    "slug": "banana-j",
    "system": "nes",
    "romFile": "Banana (J).zip",
    "img": true
  },
  {
    "id": 144,
    "title": "Banana Prince (G)",
    "slug": "banana-prince-g",
    "system": "nes",
    "romFile": "Banana Prince (G) [!].zip",
    "img": true
  },
  {
    "id": 145,
    "title": "Bananan Ouji no Daibouken (J)",
    "slug": "bananan-ouji-no-daibouken-j",
    "system": "nes",
    "romFile": "Bananan Ouji no Daibouken (J).zip",
    "img": true
  },
  {
    "id": 146,
    "title": "Bandai Golf - Challenge Pebble Beach (U)",
    "slug": "bandai-golf-challenge-pebble-beach-u",
    "system": "nes",
    "romFile": "Bandai Golf - Challenge Pebble Beach (U).zip",
    "img": true
  },
  {
    "id": 147,
    "title": "Bandit Kings of Ancient China (U)",
    "slug": "bandit-kings-of-ancient-china-u",
    "system": "nes",
    "romFile": "Bandit Kings of Ancient China (U).zip",
    "img": true
  },
  {
    "id": 148,
    "title": "Bao Qing Tian (As)",
    "slug": "bao-qing-tian-as",
    "system": "nes",
    "romFile": "Bao Qing Tian (As).zip",
    "img": true
  },
  {
    "id": 149,
    "title": "Bao Xiao Tien Guo (Explosion Sangokushi, As)",
    "slug": "bao-xiao-tien-guo-explosion-sangokushi-as",
    "system": "nes",
    "romFile": "Bao Xiao Tien Guo (Explosion Sangokushi) (As) [!].zip",
    "img": true
  },
  {
    "id": 150,
    "title": "Barbie (E, PRG0 CHR1)",
    "slug": "barbie-e-prg0-chr1",
    "system": "nes",
    "romFile": "Barbie (E) (PRG0 CHR1).zip",
    "img": true
  },
  {
    "id": 151,
    "title": "Barbie (U, Rev 3)",
    "slug": "barbie-u-rev-3",
    "system": "nes",
    "romFile": "Barbie (U) (Rev 3).zip",
    "img": true
  },
  {
    "id": 152,
    "title": "Barbie (U, Rev X)",
    "slug": "barbie-u-rev-x",
    "system": "nes",
    "romFile": "Barbie (U) (Rev X).zip",
    "img": true
  },
  {
    "id": 153,
    "title": "Barcode World (J)",
    "slug": "barcode-world-j",
    "system": "nes",
    "romFile": "Barcode World (J).zip",
    "img": true
  },
  {
    "id": 154,
    "title": "Bard's Tale II, The - The Destiny Knight (J)",
    "slug": "bard-s-tale-ii-the-the-destiny-knight-j",
    "system": "nes",
    "romFile": "Bard's Tale II, The - The Destiny Knight (J).zip",
    "img": true
  },
  {
    "id": 155,
    "title": "Bard's Tale, The - Tales of the Unknown (J)",
    "slug": "bard-s-tale-the-tales-of-the-unknown-j",
    "system": "nes",
    "romFile": "Bard's Tale, The - Tales of the Unknown (J).zip",
    "img": true
  },
  {
    "id": 156,
    "title": "Bard's Tale, The - Tales of the Unknown (U)",
    "slug": "bard-s-tale-the-tales-of-the-unknown-u",
    "system": "nes",
    "romFile": "Bard's Tale, The - Tales of the Unknown (U) [!].zip",
    "img": true
  },
  {
    "id": 157,
    "title": "Barker Bill's Trick Shooting (U)",
    "slug": "barker-bill-s-trick-shooting-u",
    "system": "nes",
    "romFile": "Barker Bill's Trick Shooting (U).zip",
    "img": true
  },
  {
    "id": 158,
    "title": "Base Wars (U)",
    "slug": "base-wars-u",
    "system": "nes",
    "romFile": "Base Wars (U).zip"
  },
  {
    "id": 159,
    "title": "Baseball (J)",
    "slug": "baseball-j",
    "system": "nes",
    "romFile": "Baseball (J).zip",
    "img": true
  },
  {
    "id": 160,
    "title": "Baseball (PC10)",
    "slug": "baseball-pc10",
    "system": "nes",
    "romFile": "Baseball (PC10) [!].zip",
    "img": true
  },
  {
    "id": 161,
    "title": "Baseball (UE, GC)",
    "slug": "baseball-ue-gc",
    "system": "nes",
    "romFile": "Baseball (UE) (GC).zip",
    "img": true
  },
  {
    "id": 162,
    "title": "Baseball (UE)",
    "slug": "baseball-ue",
    "system": "nes",
    "romFile": "Baseball (UE) [!].zip",
    "img": true
  },
  {
    "id": 163,
    "title": "Baseball (VS, Player 1 Mode)",
    "slug": "baseball-vs-player-1-mode",
    "system": "nes",
    "romFile": "Baseball (VS) (Player 1 Mode).zip",
    "img": true
  },
  {
    "id": 164,
    "title": "Baseball (VS, Player 2 Mode)",
    "slug": "baseball-vs-player-2-mode",
    "system": "nes",
    "romFile": "Baseball (VS) (Player 2 Mode).zip",
    "img": true
  },
  {
    "id": 165,
    "title": "Baseball (VS)",
    "slug": "baseball-vs",
    "system": "nes",
    "romFile": "Baseball (VS) [!].zip",
    "img": true
  },
  {
    "id": 166,
    "title": "Baseball Fighter (J)",
    "slug": "baseball-fighter-j",
    "system": "nes",
    "romFile": "Baseball Fighter (J).zip",
    "img": true
  },
  {
    "id": 167,
    "title": "Baseball Simulator 1.000 (U)",
    "slug": "baseball-simulator-1-000-u",
    "system": "nes",
    "romFile": "Baseball Simulator 1.000 (U).zip",
    "img": true
  },
  {
    "id": 168,
    "title": "Baseball Star - Mezase Sankanou!! (J)",
    "slug": "baseball-star-mezase-sankanou-j",
    "system": "nes",
    "romFile": "Baseball Star - Mezase Sankanou!! (J).zip",
    "img": true
  },
  {
    "id": 169,
    "title": "Baseball Stars (U)",
    "slug": "baseball-stars-u",
    "system": "nes",
    "romFile": "Baseball Stars (U).zip",
    "img": true
  },
  {
    "id": 170,
    "title": "Baseball Stars II (U)",
    "slug": "baseball-stars-ii-u",
    "system": "nes",
    "romFile": "Baseball Stars II (U).zip",
    "img": true
  },
  {
    "id": 171,
    "title": "Bases Loaded (U)",
    "slug": "bases-loaded-u",
    "system": "nes",
    "romFile": "Bases Loaded (U).zip",
    "img": true
  },
  {
    "id": 172,
    "title": "Bases Loaded 3 (U)",
    "slug": "bases-loaded-3-u",
    "system": "nes",
    "romFile": "Bases Loaded 3 (U).zip",
    "img": true
  },
  {
    "id": 173,
    "title": "Bases Loaded 4 (U)",
    "slug": "bases-loaded-4-u",
    "system": "nes",
    "romFile": "Bases Loaded 4 (U).zip",
    "img": true
  },
  {
    "id": 174,
    "title": "Bases Loaded II (U)",
    "slug": "bases-loaded-ii-u",
    "system": "nes",
    "romFile": "Bases Loaded II (U).zip"
  },
  {
    "id": 175,
    "title": "Batman (E)",
    "slug": "batman-e",
    "system": "nes",
    "romFile": "Batman (E).zip",
    "img": true
  },
  {
    "id": 176,
    "title": "Batman (J)",
    "slug": "batman-j",
    "system": "nes",
    "romFile": "Batman (J).zip",
    "img": true
  },
  {
    "id": 177,
    "title": "Batman (U, Prototype)",
    "slug": "batman-u-prototype",
    "system": "nes",
    "romFile": "Batman (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 178,
    "title": "Batman (U)",
    "slug": "batman-u",
    "system": "nes",
    "romFile": "Batman (U).zip",
    "img": true
  },
  {
    "id": 179,
    "title": "Batman - Return of the Joker (U)",
    "slug": "batman-return-of-the-joker-u",
    "system": "nes",
    "romFile": "Batman - Return of the Joker (U).zip",
    "img": true
  },
  {
    "id": 180,
    "title": "Batman Returns (U)",
    "slug": "batman-returns-u",
    "system": "nes",
    "romFile": "Batman Returns (U).zip",
    "img": true
  },
  {
    "id": 181,
    "title": "Batsu & Terii (J)",
    "slug": "batsu-terii-j",
    "system": "nes",
    "romFile": "Batsu & Terii (J).zip"
  },
  {
    "id": 182,
    "title": "Battle Baseball (J)",
    "slug": "battle-baseball-j",
    "system": "nes",
    "romFile": "Battle Baseball (J).zip",
    "img": true
  },
  {
    "id": 183,
    "title": "Battle Chess (U)",
    "slug": "battle-chess-u",
    "system": "nes",
    "romFile": "Battle Chess (U).zip",
    "img": true
  },
  {
    "id": 184,
    "title": "Battle City (J)",
    "slug": "battle-city-j",
    "system": "nes",
    "romFile": "Battle City (J).zip",
    "img": true
  },
  {
    "id": 185,
    "title": "Battle City (VS, Bootleg)",
    "slug": "battle-city-vs-bootleg",
    "system": "nes",
    "romFile": "Battle City (VS) (Bootleg).zip",
    "img": true
  },
  {
    "id": 186,
    "title": "Battle City (VS)",
    "slug": "battle-city-vs",
    "system": "nes",
    "romFile": "Battle City (VS).zip",
    "img": true
  },
  {
    "id": 187,
    "title": "Battle Fleet (J)",
    "slug": "battle-fleet-j",
    "system": "nes",
    "romFile": "Battle Fleet (J).zip",
    "img": true
  },
  {
    "id": 188,
    "title": "Battle Formula (J)",
    "slug": "battle-formula-j",
    "system": "nes",
    "romFile": "Battle Formula (J).zip",
    "img": true
  },
  {
    "id": 189,
    "title": "Battle Stadium - Senbatsu Pro Yakyuu (J)",
    "slug": "battle-stadium-senbatsu-pro-yakyuu-j",
    "system": "nes",
    "romFile": "Battle Stadium - Senbatsu Pro Yakyuu (J).zip",
    "img": true
  },
  {
    "id": 190,
    "title": "Battle Storm (J)",
    "slug": "battle-storm-j",
    "system": "nes",
    "romFile": "Battle Storm (J).zip",
    "img": true
  },
  {
    "id": 191,
    "title": "Battle Tank (U)",
    "slug": "battle-tank-u",
    "system": "nes",
    "romFile": "Battle Tank (U).zip",
    "img": true
  },
  {
    "id": 192,
    "title": "Battle of Olympus, The (E)",
    "slug": "battle-of-olympus-the-e",
    "system": "nes",
    "romFile": "Battle of Olympus, The (E).zip",
    "img": true
  },
  {
    "id": 193,
    "title": "Battle of Olympus, The (U)",
    "slug": "battle-of-olympus-the-u",
    "system": "nes",
    "romFile": "Battle of Olympus, The (U).zip",
    "img": true
  },
  {
    "id": 194,
    "title": "Battleship (U)",
    "slug": "battleship-u",
    "system": "nes",
    "romFile": "Battleship (U).zip",
    "img": true
  },
  {
    "id": 195,
    "title": "Battletoads & Double Dragon - The Ultimate Team (E)",
    "slug": "battletoads-double-dragon-the-ultimate-team-e",
    "system": "nes",
    "romFile": "Battletoads & Double Dragon - The Ultimate Team (E).zip"
  },
  {
    "id": 196,
    "title": "Battletoads & Double Dragon - The Ultimate Team (U)",
    "slug": "battletoads-double-dragon-the-ultimate-team-u",
    "system": "nes",
    "romFile": "Battletoads & Double Dragon - The Ultimate Team (U).zip"
  },
  {
    "id": 197,
    "title": "Battletoads (E)",
    "slug": "battletoads-e",
    "system": "nes",
    "romFile": "Battletoads (E).zip",
    "img": true
  },
  {
    "id": 198,
    "title": "Battletoads (J)",
    "slug": "battletoads-j",
    "system": "nes",
    "romFile": "Battletoads (J).zip",
    "img": true
  },
  {
    "id": 199,
    "title": "Battletoads (U)",
    "slug": "battletoads-u",
    "system": "nes",
    "romFile": "Battletoads (U).zip",
    "img": true
  },
  {
    "id": 200,
    "title": "Be-Bop-Highschool - Koukousei Gokuraku Densetsu (J)",
    "slug": "be-bop-highschool-koukousei-gokuraku-densetsu-j",
    "system": "nes",
    "romFile": "Be-Bop-Highschool - Koukousei Gokuraku Densetsu (J).zip",
    "img": true
  },
  {
    "id": 201,
    "title": "Beauty and the Beast (E)",
    "slug": "beauty-and-the-beast-e",
    "system": "nes",
    "romFile": "Beauty and the Beast (E) [!].zip",
    "img": true
  },
  {
    "id": 202,
    "title": "Bee 52 (U)",
    "slug": "bee-52-u",
    "system": "nes",
    "romFile": "Bee 52 (U).zip",
    "img": true
  },
  {
    "id": 203,
    "title": "Beetlejuice (U)",
    "slug": "beetlejuice-u",
    "system": "nes",
    "romFile": "Beetlejuice (U) [!].zip",
    "img": true
  },
  {
    "id": 204,
    "title": "Best Keiba - Derby Stallion (J)",
    "slug": "best-keiba-derby-stallion-j",
    "system": "nes",
    "romFile": "Best Keiba - Derby Stallion (J).zip",
    "img": true
  },
  {
    "id": 205,
    "title": "Best Play Pro Yakyuu '90 (J)",
    "slug": "best-play-pro-yakyuu-90-j",
    "system": "nes",
    "romFile": "Best Play Pro Yakyuu '90 (J).zip",
    "img": true
  },
  {
    "id": 206,
    "title": "Best Play Pro Yakyuu (J, Shin Data)",
    "slug": "best-play-pro-yakyuu-j-shin-data",
    "system": "nes",
    "romFile": "Best Play Pro Yakyuu (J) (Shin Data).zip",
    "img": true
  },
  {
    "id": 207,
    "title": "Best Play Pro Yakyuu (J)",
    "slug": "best-play-pro-yakyuu-j",
    "system": "nes",
    "romFile": "Best Play Pro Yakyuu (J).zip",
    "img": true
  },
  {
    "id": 208,
    "title": "Best Play Pro Yakyuu II (J)",
    "slug": "best-play-pro-yakyuu-ii-j",
    "system": "nes",
    "romFile": "Best Play Pro Yakyuu II (J).zip",
    "img": true
  },
  {
    "id": 209,
    "title": "Best Play Pro Yakyuu Special (J)",
    "slug": "best-play-pro-yakyuu-special-j",
    "system": "nes",
    "romFile": "Best Play Pro Yakyuu Special (J).zip",
    "img": true
  },
  {
    "id": 210,
    "title": "Best of the Best - Championship Karate (U)",
    "slug": "best-of-the-best-championship-karate-u",
    "system": "nes",
    "romFile": "Best of the Best - Championship Karate (U).zip",
    "img": true
  },
  {
    "id": 211,
    "title": "Bible Adventures (U, V1.2)",
    "slug": "bible-adventures-u-v1-2",
    "system": "nes",
    "romFile": "Bible Adventures (U) (V1.2).zip",
    "img": true
  },
  {
    "id": 212,
    "title": "Bible Adventures (U, V1.3)",
    "slug": "bible-adventures-u-v1-3",
    "system": "nes",
    "romFile": "Bible Adventures (U) (V1.3).zip",
    "img": true
  },
  {
    "id": 213,
    "title": "Bible Buffet (U)",
    "slug": "bible-buffet-u",
    "system": "nes",
    "romFile": "Bible Buffet (U).zip",
    "img": true
  },
  {
    "id": 214,
    "title": "Big Bird's Hide & Speak (U)",
    "slug": "big-bird-s-hide-speak-u",
    "system": "nes",
    "romFile": "Big Bird's Hide & Speak (U).zip"
  },
  {
    "id": 215,
    "title": "Big Nose Freaks Out (U, Aladdin)",
    "slug": "big-nose-freaks-out-u-aladdin",
    "system": "nes",
    "romFile": "Big Nose Freaks Out (U) (Aladdin).zip",
    "img": true
  },
  {
    "id": 216,
    "title": "Big Nose Freaks Out (U)",
    "slug": "big-nose-freaks-out-u",
    "system": "nes",
    "romFile": "Big Nose Freaks Out (U).zip",
    "img": true
  },
  {
    "id": 217,
    "title": "Big Nose the Caveman (U)",
    "slug": "big-nose-the-caveman-u",
    "system": "nes",
    "romFile": "Big Nose the Caveman (U).zip",
    "img": true
  },
  {
    "id": 218,
    "title": "Bigfoot (U)",
    "slug": "bigfoot-u",
    "system": "nes",
    "romFile": "Bigfoot (U).zip",
    "img": true
  },
  {
    "id": 219,
    "title": "Bikkuri Nekketsu Shin Kiroku! - Harukanaru Kin Medal (J)",
    "slug": "bikkuri-nekketsu-shin-kiroku-harukanaru-kin-medal-j",
    "system": "nes",
    "romFile": "Bikkuri Nekketsu Shin Kiroku! - Harukanaru Kin Medal (J).zip",
    "img": true
  },
  {
    "id": 220,
    "title": "Bikkuriman World - Gekitou Sei Senshi (J)",
    "slug": "bikkuriman-world-gekitou-sei-senshi-j",
    "system": "nes",
    "romFile": "Bikkuriman World - Gekitou Sei Senshi (J).zip",
    "img": true
  },
  {
    "id": 221,
    "title": "Bill & Ted's Excellent Video Game Adventure (U)",
    "slug": "bill-ted-s-excellent-video-game-adventure-u",
    "system": "nes",
    "romFile": "Bill & Ted's Excellent Video Game Adventure (U).zip",
    "img": true
  },
  {
    "id": 222,
    "title": "Bill Elliott's NASCAR Challenge (U)",
    "slug": "bill-elliott-s-nascar-challenge-u",
    "system": "nes",
    "romFile": "Bill Elliott's NASCAR Challenge (U).zip",
    "img": true
  },
  {
    "id": 223,
    "title": "Binary Land (J)",
    "slug": "binary-land-j",
    "system": "nes",
    "romFile": "Binary Land (J).zip",
    "img": true
  },
  {
    "id": 224,
    "title": "Bing Kuang Ji Dan Zi - Flighty Chicken (As)",
    "slug": "bing-kuang-ji-dan-zi-flighty-chicken-as",
    "system": "nes",
    "romFile": "Bing Kuang Ji Dan Zi - Flighty Chicken (As).zip",
    "img": true
  },
  {
    "id": 225,
    "title": "Bio Miracle Bokutte Upa (J)",
    "slug": "bio-miracle-bokutte-upa-j",
    "system": "nes",
    "romFile": "Bio Miracle Bokutte Upa (J).zip",
    "img": true
  },
  {
    "id": 226,
    "title": "Bio Senshi Dan - Increaser Tono Tatakai (J)",
    "slug": "bio-senshi-dan-increaser-tono-tatakai-j",
    "system": "nes",
    "romFile": "Bio Senshi Dan - Increaser Tono Tatakai (J) [!].zip",
    "img": true
  },
  {
    "id": 227,
    "title": "Bionic Commando (E)",
    "slug": "bionic-commando-e",
    "system": "nes",
    "romFile": "Bionic Commando (E).zip",
    "img": true
  },
  {
    "id": 228,
    "title": "Bionic Commando (U)",
    "slug": "bionic-commando-u",
    "system": "nes",
    "romFile": "Bionic Commando (U) [!].zip",
    "img": true
  },
  {
    "id": 229,
    "title": "Bird Week (J)",
    "slug": "bird-week-j",
    "system": "nes",
    "romFile": "Bird Week (J).zip",
    "img": true
  },
  {
    "id": 230,
    "title": "Black Bass 2, The (J)",
    "slug": "black-bass-2-the-j",
    "system": "nes",
    "romFile": "Black Bass 2, The (J).zip",
    "img": true
  },
  {
    "id": 231,
    "title": "Black Bass USA, The (U)",
    "slug": "black-bass-usa-the-u",
    "system": "nes",
    "romFile": "Black Bass USA, The (U).zip"
  },
  {
    "id": 232,
    "title": "Black Bass, The (J)",
    "slug": "black-bass-the-j",
    "system": "nes",
    "romFile": "Black Bass, The (J).zip",
    "img": true
  },
  {
    "id": 233,
    "title": "Blackjack (U)",
    "slug": "blackjack-u",
    "system": "nes",
    "romFile": "Blackjack (U).zip",
    "img": true
  },
  {
    "id": 234,
    "title": "Blades of Steel (E)",
    "slug": "blades-of-steel-e",
    "system": "nes",
    "romFile": "Blades of Steel (E).zip",
    "img": true
  },
  {
    "id": 235,
    "title": "Blades of Steel (U)",
    "slug": "blades-of-steel-u",
    "system": "nes",
    "romFile": "Blades of Steel (U).zip",
    "img": true
  },
  {
    "id": 236,
    "title": "Blaster Master (E)",
    "slug": "blaster-master-e",
    "system": "nes",
    "romFile": "Blaster Master (E).zip",
    "img": true
  },
  {
    "id": 237,
    "title": "Blaster Master (U, Prototype)",
    "slug": "blaster-master-u-prototype",
    "system": "nes",
    "romFile": "Blaster Master (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 238,
    "title": "Blaster Master (U)",
    "slug": "blaster-master-u",
    "system": "nes",
    "romFile": "Blaster Master (U).zip",
    "img": true
  },
  {
    "id": 239,
    "title": "Blodia Land - Puzzle Quest (J)",
    "slug": "blodia-land-puzzle-quest-j",
    "system": "nes",
    "romFile": "Blodia Land - Puzzle Quest (J).zip",
    "img": true
  },
  {
    "id": 240,
    "title": "Bloody Warriors - Shan-Go no Gyakushuu (J)",
    "slug": "bloody-warriors-shan-go-no-gyakushuu-j",
    "system": "nes",
    "romFile": "Bloody Warriors - Shan-Go no Gyakushuu (J).zip",
    "img": true
  },
  {
    "id": 241,
    "title": "Blue Marlin, The (J)",
    "slug": "blue-marlin-the-j",
    "system": "nes",
    "romFile": "Blue Marlin, The (J).zip",
    "img": true
  },
  {
    "id": 242,
    "title": "Blue Marlin, The (U)",
    "slug": "blue-marlin-the-u",
    "system": "nes",
    "romFile": "Blue Marlin, The (U).zip",
    "img": true
  },
  {
    "id": 243,
    "title": "Blue Shadow (E)",
    "slug": "blue-shadow-e",
    "system": "nes",
    "romFile": "Blue Shadow (E).zip",
    "img": true
  },
  {
    "id": 244,
    "title": "Blues Brothers, The (U)",
    "slug": "blues-brothers-the-u",
    "system": "nes",
    "romFile": "Blues Brothers, The (U).zip",
    "img": true
  },
  {
    "id": 245,
    "title": "Bo Jackson Baseball (U)",
    "slug": "bo-jackson-baseball-u",
    "system": "nes",
    "romFile": "Bo Jackson Baseball (U).zip",
    "img": true
  },
  {
    "id": 246,
    "title": "Bokosuka Wars (J)",
    "slug": "bokosuka-wars-j",
    "system": "nes",
    "romFile": "Bokosuka Wars (J).zip",
    "img": true
  },
  {
    "id": 247,
    "title": "Bomber King (J)",
    "slug": "bomber-king-j",
    "system": "nes",
    "romFile": "Bomber King (J).zip",
    "img": true
  },
  {
    "id": 248,
    "title": "Bomberman (J)",
    "slug": "bomberman-j",
    "system": "nes",
    "romFile": "Bomberman (J).zip",
    "img": true
  },
  {
    "id": 249,
    "title": "Bomberman (U)",
    "slug": "bomberman-u",
    "system": "nes",
    "romFile": "Bomberman (U).zip",
    "img": true
  },
  {
    "id": 250,
    "title": "Bomberman II (J)",
    "slug": "bomberman-ii-j",
    "system": "nes",
    "romFile": "Bomberman II (J).zip",
    "img": true
  },
  {
    "id": 251,
    "title": "Bomberman II (U)",
    "slug": "bomberman-ii-u",
    "system": "nes",
    "romFile": "Bomberman II (U).zip",
    "img": true
  },
  {
    "id": 252,
    "title": "Bonk's Adventure (U)",
    "slug": "bonk-s-adventure-u",
    "system": "nes",
    "romFile": "Bonk's Adventure (U).zip",
    "img": true
  },
  {
    "id": 253,
    "title": "Booby Kids (J)",
    "slug": "booby-kids-j",
    "system": "nes",
    "romFile": "Booby Kids (J).zip",
    "img": true
  },
  {
    "id": 254,
    "title": "Boulder Dash (E)",
    "slug": "boulder-dash-e",
    "system": "nes",
    "romFile": "Boulder Dash (E) [!].zip",
    "img": true
  },
  {
    "id": 255,
    "title": "Boulder Dash (J)",
    "slug": "boulder-dash-j",
    "system": "nes",
    "romFile": "Boulder Dash (J).zip",
    "img": true
  },
  {
    "id": 256,
    "title": "Boulder Dash (U)",
    "slug": "boulder-dash-u",
    "system": "nes",
    "romFile": "Boulder Dash (U).zip",
    "img": true
  },
  {
    "id": 257,
    "title": "Boy and His Blob, A - Trouble on Blobolonia (E)",
    "slug": "boy-and-his-blob-a-trouble-on-blobolonia-e",
    "system": "nes",
    "romFile": "Boy and His Blob, A - Trouble on Blobolonia (E).zip"
  },
  {
    "id": 258,
    "title": "Boy and His Blob, A - Trouble on Blobolonia (U)",
    "slug": "boy-and-his-blob-a-trouble-on-blobolonia-u",
    "system": "nes",
    "romFile": "Boy and His Blob, A - Trouble on Blobolonia (U).zip"
  },
  {
    "id": 259,
    "title": "Bram Stoker's Dracula (E)",
    "slug": "bram-stoker-s-dracula-e",
    "system": "nes",
    "romFile": "Bram Stoker's Dracula (E).zip",
    "img": true
  },
  {
    "id": 260,
    "title": "Bram Stoker's Dracula (U)",
    "slug": "bram-stoker-s-dracula-u",
    "system": "nes",
    "romFile": "Bram Stoker's Dracula (U).zip",
    "img": true
  },
  {
    "id": 261,
    "title": "Break Time - The National Pool Tour (U)",
    "slug": "break-time-the-national-pool-tour-u",
    "system": "nes",
    "romFile": "Break Time - The National Pool Tour (U).zip",
    "img": true
  },
  {
    "id": 262,
    "title": "BreakThru (U)",
    "slug": "breakthru-u",
    "system": "nes",
    "romFile": "BreakThru (U).zip",
    "img": true
  },
  {
    "id": 263,
    "title": "Brush Roller (As)",
    "slug": "brush-roller-as",
    "system": "nes",
    "romFile": "Brush Roller (As).zip",
    "img": true
  },
  {
    "id": 264,
    "title": "Bubble Bath Babes (UE)",
    "slug": "bubble-bath-babes-ue",
    "system": "nes",
    "romFile": "Bubble Bath Babes (UE) [!].zip",
    "img": true
  },
  {
    "id": 265,
    "title": "Bubble Bobble (E)",
    "slug": "bubble-bobble-e",
    "system": "nes",
    "romFile": "Bubble Bobble (E).zip",
    "img": true
  },
  {
    "id": 266,
    "title": "Bubble Bobble (U)",
    "slug": "bubble-bobble-u",
    "system": "nes",
    "romFile": "Bubble Bobble (U).zip",
    "img": true
  },
  {
    "id": 267,
    "title": "Bubble Bobble 2 (J)",
    "slug": "bubble-bobble-2-j",
    "system": "nes",
    "romFile": "Bubble Bobble 2 (J).zip",
    "img": true
  },
  {
    "id": 268,
    "title": "Bubble Bobble Part 2 (U)",
    "slug": "bubble-bobble-part-2-u",
    "system": "nes",
    "romFile": "Bubble Bobble Part 2 (U).zip",
    "img": true
  },
  {
    "id": 269,
    "title": "Bucky O'Hare (E)",
    "slug": "bucky-o-hare-e",
    "system": "nes",
    "romFile": "Bucky O'Hare (E).zip",
    "img": true
  },
  {
    "id": 270,
    "title": "Bucky O'Hare (J)",
    "slug": "bucky-o-hare-j",
    "system": "nes",
    "romFile": "Bucky O'Hare (J).zip",
    "img": true
  },
  {
    "id": 271,
    "title": "Bucky O'Hare (U)",
    "slug": "bucky-o-hare-u",
    "system": "nes",
    "romFile": "Bucky O'Hare (U) [!].zip",
    "img": true
  },
  {
    "id": 272,
    "title": "Buggy Popper (J)",
    "slug": "buggy-popper-j",
    "system": "nes",
    "romFile": "Buggy Popper (J).zip",
    "img": true
  },
  {
    "id": 273,
    "title": "Bugs Bunny Birthday Bash (U, Prototype)",
    "slug": "bugs-bunny-birthday-bash-u-prototype",
    "system": "nes",
    "romFile": "Bugs Bunny Birthday Bash (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 274,
    "title": "Bugs Bunny Birthday Blowout, The (E)",
    "slug": "bugs-bunny-birthday-blowout-the-e",
    "system": "nes",
    "romFile": "Bugs Bunny Birthday Blowout, The (E) [!].zip",
    "img": true
  },
  {
    "id": 275,
    "title": "Bugs Bunny Birthday Blowout, The (U)",
    "slug": "bugs-bunny-birthday-blowout-the-u",
    "system": "nes",
    "romFile": "Bugs Bunny Birthday Blowout, The (U).zip",
    "img": true
  },
  {
    "id": 276,
    "title": "Bugs Bunny Crazy Castle, The (U)",
    "slug": "bugs-bunny-crazy-castle-the-u",
    "system": "nes",
    "romFile": "Bugs Bunny Crazy Castle, The (U).zip",
    "img": true
  },
  {
    "id": 277,
    "title": "Bugs Bunny Fun House (U, Prototype)",
    "slug": "bugs-bunny-fun-house-u-prototype",
    "system": "nes",
    "romFile": "Bugs Bunny Fun House (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 278,
    "title": "Bump'n'Jump (U)",
    "slug": "bump-n-jump-u",
    "system": "nes",
    "romFile": "Bump'n'Jump (U).zip",
    "img": true
  },
  {
    "id": 279,
    "title": "Burai Fighter (J)",
    "slug": "burai-fighter-j",
    "system": "nes",
    "romFile": "Burai Fighter (J).zip",
    "img": true
  },
  {
    "id": 280,
    "title": "Burai Fighter (U)",
    "slug": "burai-fighter-u",
    "system": "nes",
    "romFile": "Burai Fighter (U).zip",
    "img": true
  },
  {
    "id": 281,
    "title": "Burger Time (J)",
    "slug": "burger-time-j",
    "system": "nes",
    "romFile": "Burger Time (J).zip",
    "img": true
  },
  {
    "id": 282,
    "title": "Burger Time (U)",
    "slug": "burger-time-u",
    "system": "nes",
    "romFile": "Burger Time (U) [!].zip",
    "img": true
  },
  {
    "id": 283,
    "title": "Business Wars (J)",
    "slug": "business-wars-j",
    "system": "nes",
    "romFile": "Business Wars (J).zip",
    "img": true
  },
  {
    "id": 284,
    "title": "Cabal (U)",
    "slug": "cabal-u",
    "system": "nes",
    "romFile": "Cabal (U).zip",
    "img": true
  },
  {
    "id": 285,
    "title": "Cadillac (J)",
    "slug": "cadillac-j",
    "system": "nes",
    "romFile": "Cadillac (J).zip",
    "img": true
  },
  {
    "id": 286,
    "title": "Caesars Palace (U)",
    "slug": "caesars-palace-u",
    "system": "nes",
    "romFile": "Caesars Palace (U).zip",
    "img": true
  },
  {
    "id": 287,
    "title": "California Games (E)",
    "slug": "california-games-e",
    "system": "nes",
    "romFile": "California Games (E) [!].zip",
    "img": true
  },
  {
    "id": 288,
    "title": "California Games (U)",
    "slug": "california-games-u",
    "system": "nes",
    "romFile": "California Games (U).zip",
    "img": true
  },
  {
    "id": 289,
    "title": "California Raisins - The Grape Escape (U, Prototype)",
    "slug": "california-raisins-the-grape-escape-u-prototype",
    "system": "nes",
    "romFile": "California Raisins - The Grape Escape (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 290,
    "title": "California Raisins - The Grape Escape (U)",
    "slug": "california-raisins-the-grape-escape-u",
    "system": "nes",
    "romFile": "California Raisins - The Grape Escape (U).zip",
    "img": true
  },
  {
    "id": 291,
    "title": "Caltron 6-in-1 (U)",
    "slug": "caltron-6-in-1-u",
    "system": "nes",
    "romFile": "Caltron 6-in-1 (U).zip",
    "img": true
  },
  {
    "id": 292,
    "title": "Capcom Barcelona '92 (J)",
    "slug": "capcom-barcelona-92-j",
    "system": "nes",
    "romFile": "Capcom Barcelona '92 (J).zip",
    "img": true
  },
  {
    "id": 293,
    "title": "Captain America and The Avengers (U)",
    "slug": "captain-america-and-the-avengers-u",
    "system": "nes",
    "romFile": "Captain America and The Avengers (U).zip",
    "img": true
  },
  {
    "id": 294,
    "title": "Captain Ed (J)",
    "slug": "captain-ed-j",
    "system": "nes",
    "romFile": "Captain Ed (J).zip",
    "img": true
  },
  {
    "id": 295,
    "title": "Captain Planet and The Planeteers (U)",
    "slug": "captain-planet-and-the-planeteers-u",
    "system": "nes",
    "romFile": "Captain Planet and The Planeteers (U).zip",
    "img": true
  },
  {
    "id": 296,
    "title": "Captain Saver (J)",
    "slug": "captain-saver-j",
    "system": "nes",
    "romFile": "Captain Saver (J).zip",
    "img": true
  },
  {
    "id": 297,
    "title": "Captain Silver (J)",
    "slug": "captain-silver-j",
    "system": "nes",
    "romFile": "Captain Silver (J).zip",
    "img": true
  },
  {
    "id": 298,
    "title": "Captain Skyhawk (PC10)",
    "slug": "captain-skyhawk-pc10",
    "system": "nes",
    "romFile": "Captain Skyhawk (PC10) [!].zip",
    "img": true
  },
  {
    "id": 299,
    "title": "Captain Skyhawk (U)",
    "slug": "captain-skyhawk-u",
    "system": "nes",
    "romFile": "Captain Skyhawk (U).zip",
    "img": true
  },
  {
    "id": 300,
    "title": "Captain Tsubasa (J)",
    "slug": "captain-tsubasa-j",
    "system": "nes",
    "romFile": "Captain Tsubasa (J).zip",
    "img": true
  },
  {
    "id": 301,
    "title": "Captain Tsubasa Vol. II - Super Striker (J)",
    "slug": "captain-tsubasa-vol-ii-super-striker-j",
    "system": "nes",
    "romFile": "Captain Tsubasa Vol. II - Super Striker (J).zip",
    "img": true
  },
  {
    "id": 302,
    "title": "Casino Derby (J)",
    "slug": "casino-derby-j",
    "system": "nes",
    "romFile": "Casino Derby (J).zip",
    "img": true
  },
  {
    "id": 303,
    "title": "Casino Kid (U)",
    "slug": "casino-kid-u",
    "system": "nes",
    "romFile": "Casino Kid (U).zip",
    "img": true
  },
  {
    "id": 304,
    "title": "Casino Kid 2 (U)",
    "slug": "casino-kid-2-u",
    "system": "nes",
    "romFile": "Casino Kid 2 (U).zip"
  },
  {
    "id": 305,
    "title": "Castelian (E)",
    "slug": "castelian-e",
    "system": "nes",
    "romFile": "Castelian (E).zip",
    "img": true
  },
  {
    "id": 306,
    "title": "Castelian (U)",
    "slug": "castelian-u",
    "system": "nes",
    "romFile": "Castelian (U).zip",
    "img": true
  },
  {
    "id": 307,
    "title": "Castle Excellent (J)",
    "slug": "castle-excellent-j",
    "system": "nes",
    "romFile": "Castle Excellent (J).zip",
    "img": true
  },
  {
    "id": 308,
    "title": "Castle Quest (J)",
    "slug": "castle-quest-j",
    "system": "nes",
    "romFile": "Castle Quest (J).zip",
    "img": true
  },
  {
    "id": 309,
    "title": "Castle of Deceit (U)",
    "slug": "castle-of-deceit-u",
    "system": "nes",
    "romFile": "Castle of Deceit (U).zip",
    "img": true
  },
  {
    "id": 310,
    "title": "Castle of Dragon (U)",
    "slug": "castle-of-dragon-u",
    "system": "nes",
    "romFile": "Castle of Dragon (U).zip",
    "img": true
  },
  {
    "id": 311,
    "title": "Castlequest (U)",
    "slug": "castlequest-u",
    "system": "nes",
    "romFile": "Castlequest (U).zip",
    "img": true
  },
  {
    "id": 312,
    "title": "Castlevania (E)",
    "slug": "castlevania-e",
    "system": "nes",
    "romFile": "Castlevania (E).zip",
    "img": true
  },
  {
    "id": 313,
    "title": "Castlevania (KC)",
    "slug": "castlevania-kc",
    "system": "nes",
    "romFile": "Castlevania (KC).zip",
    "img": true
  },
  {
    "id": 314,
    "title": "Castlevania (PC10)",
    "slug": "castlevania-pc10",
    "system": "nes",
    "romFile": "Castlevania (PC10).zip",
    "img": true
  },
  {
    "id": 315,
    "title": "Castlevania (U, PRG0)",
    "slug": "castlevania-u-prg0",
    "system": "nes",
    "romFile": "Castlevania (U) (PRG0) [!].zip",
    "img": true
  },
  {
    "id": 316,
    "title": "Castlevania (U, PRG1)",
    "slug": "castlevania-u-prg1",
    "system": "nes",
    "romFile": "Castlevania (U) (PRG1).zip",
    "img": true
  },
  {
    "id": 317,
    "title": "Castlevania II - Simon's Quest (E)",
    "slug": "castlevania-ii-simon-s-quest-e",
    "system": "nes",
    "romFile": "Castlevania II - Simon's Quest (E).zip",
    "img": true
  },
  {
    "id": 318,
    "title": "Castlevania II - Simon's Quest (KC)",
    "slug": "castlevania-ii-simon-s-quest-kc",
    "system": "nes",
    "romFile": "Castlevania II - Simon's Quest (KC).zip",
    "img": true
  },
  {
    "id": 319,
    "title": "Castlevania II - Simon's Quest (U)",
    "slug": "castlevania-ii-simon-s-quest-u",
    "system": "nes",
    "romFile": "Castlevania II - Simon's Quest (U).zip",
    "img": true
  },
  {
    "id": 320,
    "title": "Castlevania III - Dracula's Curse (E)",
    "slug": "castlevania-iii-dracula-s-curse-e",
    "system": "nes",
    "romFile": "Castlevania III - Dracula's Curse (E).zip",
    "img": true
  },
  {
    "id": 321,
    "title": "Castlevania III - Dracula's Curse (KC)",
    "slug": "castlevania-iii-dracula-s-curse-kc",
    "system": "nes",
    "romFile": "Castlevania III - Dracula's Curse (KC).zip",
    "img": true
  },
  {
    "id": 322,
    "title": "Castlevania III - Dracula's Curse (U)",
    "slug": "castlevania-iii-dracula-s-curse-u",
    "system": "nes",
    "romFile": "Castlevania III - Dracula's Curse (U) [!].zip",
    "img": true
  },
  {
    "id": 323,
    "title": "Cat Ninden Teyandee (J)",
    "slug": "cat-ninden-teyandee-j",
    "system": "nes",
    "romFile": "Cat Ninden Teyandee (J).zip",
    "img": true
  },
  {
    "id": 324,
    "title": "Caveman Games (U)",
    "slug": "caveman-games-u",
    "system": "nes",
    "romFile": "Caveman Games (U).zip",
    "img": true
  },
  {
    "id": 325,
    "title": "Caveman Ninja (E)",
    "slug": "caveman-ninja-e",
    "system": "nes",
    "romFile": "Caveman Ninja (E).zip"
  },
  {
    "id": 326,
    "title": "Chack 'n Pop (J)",
    "slug": "chack-n-pop-j",
    "system": "nes",
    "romFile": "Chack 'n Pop (J).zip",
    "img": true
  },
  {
    "id": 327,
    "title": "Challenge of the Dragon (U)",
    "slug": "challenge-of-the-dragon-u",
    "system": "nes",
    "romFile": "Challenge of the Dragon (U).zip",
    "img": true
  },
  {
    "id": 328,
    "title": "Challenger (J)",
    "slug": "challenger-j",
    "system": "nes",
    "romFile": "Challenger (J).zip",
    "img": true
  },
  {
    "id": 329,
    "title": "Championship Bowling (J)",
    "slug": "championship-bowling-j",
    "system": "nes",
    "romFile": "Championship Bowling (J).zip",
    "img": true
  },
  {
    "id": 330,
    "title": "Championship Bowling (U)",
    "slug": "championship-bowling-u",
    "system": "nes",
    "romFile": "Championship Bowling (U) [!].zip",
    "img": true
  },
  {
    "id": 331,
    "title": "Championship Lode Runner (J)",
    "slug": "championship-lode-runner-j",
    "system": "nes",
    "romFile": "Championship Lode Runner (J).zip",
    "img": true
  },
  {
    "id": 332,
    "title": "Championship Pool (U)",
    "slug": "championship-pool-u",
    "system": "nes",
    "romFile": "Championship Pool (U).zip",
    "img": true
  },
  {
    "id": 333,
    "title": "Championship Rally (A)",
    "slug": "championship-rally-a",
    "system": "nes",
    "romFile": "Championship Rally (A) [!].zip",
    "img": true
  },
  {
    "id": 334,
    "title": "Chaos World (J)",
    "slug": "chaos-world-j",
    "system": "nes",
    "romFile": "Chaos World (J).zip",
    "img": true
  },
  {
    "id": 335,
    "title": "Cheetah Men II (U)",
    "slug": "cheetah-men-ii-u",
    "system": "nes",
    "romFile": "Cheetah Men II (U).zip",
    "img": true
  },
  {
    "id": 336,
    "title": "Chester Field - Ankoku Shin heno Chousen (J)",
    "slug": "chester-field-ankoku-shin-heno-chousen-j",
    "system": "nes",
    "romFile": "Chester Field - Ankoku Shin heno Chousen (J).zip",
    "img": true
  },
  {
    "id": 337,
    "title": "Chibi Maruko-Chan - Uki Uki Shopping (J)",
    "slug": "chibi-maruko-chan-uki-uki-shopping-j",
    "system": "nes",
    "romFile": "Chibi Maruko-Chan - Uki Uki Shopping (J).zip",
    "img": true
  },
  {
    "id": 338,
    "title": "Chiisana Obake - Acchi Socchi Kocchi (J)",
    "slug": "chiisana-obake-acchi-socchi-kocchi-j",
    "system": "nes",
    "romFile": "Chiisana Obake - Acchi Socchi Kocchi (J).zip",
    "img": true
  },
  {
    "id": 339,
    "title": "Chiki Chiki Machine Mou Race (J)",
    "slug": "chiki-chiki-machine-mou-race-j",
    "system": "nes",
    "romFile": "Chiki Chiki Machine Mou Race (J).zip",
    "img": true
  },
  {
    "id": 340,
    "title": "Chiller (U)",
    "slug": "chiller-u",
    "system": "nes",
    "romFile": "Chiller (U) [!].zip",
    "img": true
  },
  {
    "id": 341,
    "title": "Chip 'n Dale Rescue Rangers (E)",
    "slug": "chip-n-dale-rescue-rangers-e",
    "system": "nes",
    "romFile": "Chip 'n Dale Rescue Rangers (E).zip",
    "img": true
  },
  {
    "id": 342,
    "title": "Chip 'n Dale Rescue Rangers (PC10)",
    "slug": "chip-n-dale-rescue-rangers-pc10",
    "system": "nes",
    "romFile": "Chip 'n Dale Rescue Rangers (PC10) [!].zip",
    "img": true
  },
  {
    "id": 343,
    "title": "Chip 'n Dale Rescue Rangers (U)",
    "slug": "chip-n-dale-rescue-rangers-u",
    "system": "nes",
    "romFile": "Chip 'n Dale Rescue Rangers (U) [!].zip",
    "img": true
  },
  {
    "id": 344,
    "title": "Chip 'n Dale Rescue Rangers 2 (Prototype)",
    "slug": "chip-n-dale-rescue-rangers-2-prototype",
    "system": "nes",
    "romFile": "Chip 'n Dale Rescue Rangers 2 (Prototype).zip",
    "img": true
  },
  {
    "id": 345,
    "title": "Chip 'n Dale Rescue Rangers 2 (U)",
    "slug": "chip-n-dale-rescue-rangers-2-u",
    "system": "nes",
    "romFile": "Chip 'n Dale Rescue Rangers 2 (U).zip",
    "img": true
  },
  {
    "id": 346,
    "title": "Chip to Dale no Daisakusen (J)",
    "slug": "chip-to-dale-no-daisakusen-j",
    "system": "nes",
    "romFile": "Chip to Dale no Daisakusen (J).zip",
    "img": true
  },
  {
    "id": 347,
    "title": "Chip to Dale no Daisakusen 2 (J)",
    "slug": "chip-to-dale-no-daisakusen-2-j",
    "system": "nes",
    "romFile": "Chip to Dale no Daisakusen 2 (J).zip",
    "img": true
  },
  {
    "id": 348,
    "title": "Chitei Senkuu Vazorudaa (J)",
    "slug": "chitei-senkuu-vazorudaa-j",
    "system": "nes",
    "romFile": "Chitei Senkuu Vazorudaa (J).zip"
  },
  {
    "id": 349,
    "title": "Choplifter (J)",
    "slug": "choplifter-j",
    "system": "nes",
    "romFile": "Choplifter (J).zip",
    "img": true
  },
  {
    "id": 350,
    "title": "Chou-Wakusei Senki - MetaFight (J, NG-Dump Known)",
    "slug": "chou-wakusei-senki-metafight-j-ng-dump-known",
    "system": "nes",
    "romFile": "Chou-Wakusei Senki - MetaFight (J) (NG-Dump Known).zip",
    "img": true
  },
  {
    "id": 351,
    "title": "Choujikuu Yousai - Macross (J)",
    "slug": "choujikuu-yousai-macross-j",
    "system": "nes",
    "romFile": "Choujikuu Yousai - Macross (J).zip",
    "img": true
  },
  {
    "id": 352,
    "title": "Choujin - Ultra Baseball (J)",
    "slug": "choujin-ultra-baseball-j",
    "system": "nes",
    "romFile": "Choujin - Ultra Baseball (J).zip",
    "img": true
  },
  {
    "id": 353,
    "title": "Choujin Ookami Senki - Warwolf (J)",
    "slug": "choujin-ookami-senki-warwolf-j",
    "system": "nes",
    "romFile": "Choujin Ookami Senki - Warwolf (J).zip",
    "img": true
  },
  {
    "id": 354,
    "title": "Choujin Sentai - Jetman (J)",
    "slug": "choujin-sentai-jetman-j",
    "system": "nes",
    "romFile": "Choujin Sentai - Jetman (J).zip",
    "img": true
  },
  {
    "id": 355,
    "title": "Chu Da D (As)",
    "slug": "chu-da-d-as",
    "system": "nes",
    "romFile": "Chu Da D (As).zip",
    "img": true
  },
  {
    "id": 356,
    "title": "Chu Han Zheng Ba - The War Between Chu & Han (As)",
    "slug": "chu-han-zheng-ba-the-war-between-chu-han-as",
    "system": "nes",
    "romFile": "Chu Han Zheng Ba - The War Between Chu & Han (As).zip",
    "img": true
  },
  {
    "id": 357,
    "title": "Chubby Cherub (U)",
    "slug": "chubby-cherub-u",
    "system": "nes",
    "romFile": "Chubby Cherub (U).zip",
    "img": true
  },
  {
    "id": 358,
    "title": "Chuugoku Janshi Story - Tonpuu (J)",
    "slug": "chuugoku-janshi-story-tonpuu-j",
    "system": "nes",
    "romFile": "Chuugoku Janshi Story - Tonpuu (J).zip",
    "img": true
  },
  {
    "id": 359,
    "title": "Chuugoku Senseijutsu (J)",
    "slug": "chuugoku-senseijutsu-j",
    "system": "nes",
    "romFile": "Chuugoku Senseijutsu (J).zip",
    "img": true
  },
  {
    "id": 360,
    "title": "Chuuka Taisen (J)",
    "slug": "chuuka-taisen-j",
    "system": "nes",
    "romFile": "Chuuka Taisen (J).zip",
    "img": true
  },
  {
    "id": 361,
    "title": "Circus Caper (U)",
    "slug": "circus-caper-u",
    "system": "nes",
    "romFile": "Circus Caper (U).zip",
    "img": true
  },
  {
    "id": 362,
    "title": "Circus Charlie (J)",
    "slug": "circus-charlie-j",
    "system": "nes",
    "romFile": "Circus Charlie (J).zip",
    "img": true
  },
  {
    "id": 363,
    "title": "City Adventure Touch - Mystery of Triangle (J)",
    "slug": "city-adventure-touch-mystery-of-triangle-j",
    "system": "nes",
    "romFile": "City Adventure Touch - Mystery of Triangle (J).zip",
    "img": true
  },
  {
    "id": 364,
    "title": "City Connection (J)",
    "slug": "city-connection-j",
    "system": "nes",
    "romFile": "City Connection (J).zip",
    "img": true
  },
  {
    "id": 365,
    "title": "City Connection (U)",
    "slug": "city-connection-u",
    "system": "nes",
    "romFile": "City Connection (U).zip",
    "img": true
  },
  {
    "id": 366,
    "title": "Clash at Demonhead (U)",
    "slug": "clash-at-demonhead-u",
    "system": "nes",
    "romFile": "Clash at Demonhead (U).zip",
    "img": true
  },
  {
    "id": 367,
    "title": "Classic Concentration (U)",
    "slug": "classic-concentration-u",
    "system": "nes",
    "romFile": "Classic Concentration (U).zip",
    "img": true
  },
  {
    "id": 368,
    "title": "Cliffhanger (U)",
    "slug": "cliffhanger-u",
    "system": "nes",
    "romFile": "Cliffhanger (U).zip",
    "img": true
  },
  {
    "id": 369,
    "title": "Clu Clu Land (JU, GC)",
    "slug": "clu-clu-land-ju-gc",
    "system": "nes",
    "romFile": "Clu Clu Land (JU) (GC).zip",
    "img": true
  },
  {
    "id": 370,
    "title": "Clu Clu Land (JU)",
    "slug": "clu-clu-land-ju",
    "system": "nes",
    "romFile": "Clu Clu Land (JU).zip",
    "img": true
  },
  {
    "id": 371,
    "title": "Clu Clu Land (VS)",
    "slug": "clu-clu-land-vs",
    "system": "nes",
    "romFile": "Clu Clu Land (VS).zip",
    "img": true
  },
  {
    "id": 372,
    "title": "Cobra Command (J)",
    "slug": "cobra-command-j",
    "system": "nes",
    "romFile": "Cobra Command (J).zip",
    "img": true
  },
  {
    "id": 373,
    "title": "Cobra Command (U)",
    "slug": "cobra-command-u",
    "system": "nes",
    "romFile": "Cobra Command (U).zip",
    "img": true
  },
  {
    "id": 374,
    "title": "Cobra Triangle (E)",
    "slug": "cobra-triangle-e",
    "system": "nes",
    "romFile": "Cobra Triangle (E).zip",
    "img": true
  },
  {
    "id": 375,
    "title": "Cobra Triangle (U)",
    "slug": "cobra-triangle-u",
    "system": "nes",
    "romFile": "Cobra Triangle (U).zip",
    "img": true
  },
  {
    "id": 376,
    "title": "Cocoron (J)",
    "slug": "cocoron-j",
    "system": "nes",
    "romFile": "Cocoron (J).zip",
    "img": true
  },
  {
    "id": 377,
    "title": "Code Name - Viper (U)",
    "slug": "code-name-viper-u",
    "system": "nes",
    "romFile": "Code Name - Viper (U).zip",
    "img": true
  },
  {
    "id": 378,
    "title": "Color A Dinosaur (U)",
    "slug": "color-a-dinosaur-u",
    "system": "nes",
    "romFile": "Color A Dinosaur (U).zip",
    "img": true
  },
  {
    "id": 379,
    "title": "Columbus - Ougon no Yoake (J)",
    "slug": "columbus-ougon-no-yoake-j",
    "system": "nes",
    "romFile": "Columbus - Ougon no Yoake (J).zip",
    "img": true
  },
  {
    "id": 380,
    "title": "Commando (U)",
    "slug": "commando-u",
    "system": "nes",
    "romFile": "Commando (U).zip",
    "img": true
  },
  {
    "id": 381,
    "title": "Conan (U)",
    "slug": "conan-u",
    "system": "nes",
    "romFile": "Conan (U).zip",
    "img": true
  },
  {
    "id": 382,
    "title": "Conflict (J)",
    "slug": "conflict-j",
    "system": "nes",
    "romFile": "Conflict (J).zip",
    "img": true
  },
  {
    "id": 383,
    "title": "Conflict (U)",
    "slug": "conflict-u",
    "system": "nes",
    "romFile": "Conflict (U) [!].zip",
    "img": true
  },
  {
    "id": 384,
    "title": "Conquest of the Crystal Palace (U)",
    "slug": "conquest-of-the-crystal-palace-u",
    "system": "nes",
    "romFile": "Conquest of the Crystal Palace (U).zip",
    "img": true
  },
  {
    "id": 385,
    "title": "Contra (KC)",
    "slug": "contra-kc",
    "system": "nes",
    "romFile": "Contra (KC).zip",
    "img": true
  },
  {
    "id": 386,
    "title": "Contra (PC10)",
    "slug": "contra-pc10",
    "system": "nes",
    "romFile": "Contra (PC10).zip",
    "img": true
  },
  {
    "id": 387,
    "title": "Contra (U)",
    "slug": "contra-u",
    "system": "nes",
    "romFile": "Contra (U) [!].zip",
    "img": true
  },
  {
    "id": 388,
    "title": "Contra Force (U)",
    "slug": "contra-force-u",
    "system": "nes",
    "romFile": "Contra Force (U).zip",
    "img": true
  },
  {
    "id": 389,
    "title": "Cool World (U)",
    "slug": "cool-world-u",
    "system": "nes",
    "romFile": "Cool World (U).zip",
    "img": true
  },
  {
    "id": 390,
    "title": "Corvette ZR-1 Challenge (E)",
    "slug": "corvette-zr-1-challenge-e",
    "system": "nes",
    "romFile": "Corvette ZR-1 Challenge (E) [!].zip",
    "img": true
  },
  {
    "id": 391,
    "title": "Cosmic Epsilon (J)",
    "slug": "cosmic-epsilon-j",
    "system": "nes",
    "romFile": "Cosmic Epsilon (J).zip",
    "img": true
  },
  {
    "id": 392,
    "title": "Cosmic Wars (J)",
    "slug": "cosmic-wars-j",
    "system": "nes",
    "romFile": "Cosmic Wars (J).zip",
    "img": true
  },
  {
    "id": 393,
    "title": "Cosmo Genesis (J)",
    "slug": "cosmo-genesis-j",
    "system": "nes",
    "romFile": "Cosmo Genesis (J).zip",
    "img": true
  },
  {
    "id": 394,
    "title": "Cosmo Police Galivan (J)",
    "slug": "cosmo-police-galivan-j",
    "system": "nes",
    "romFile": "Cosmo Police Galivan (J).zip",
    "img": true
  },
  {
    "id": 395,
    "title": "Cowboy Kid (U)",
    "slug": "cowboy-kid-u",
    "system": "nes",
    "romFile": "Cowboy Kid (U).zip",
    "img": true
  },
  {
    "id": 396,
    "title": "Crackout (E)",
    "slug": "crackout-e",
    "system": "nes",
    "romFile": "Crackout (E).zip",
    "img": true
  },
  {
    "id": 397,
    "title": "Crash 'n the Boys - Street Challenge (U)",
    "slug": "crash-n-the-boys-street-challenge-u",
    "system": "nes",
    "romFile": "Crash 'n the Boys - Street Challenge (U).zip"
  },
  {
    "id": 398,
    "title": "Crayon Shin-Chan - Ora to Poi Poi (J)",
    "slug": "crayon-shin-chan-ora-to-poi-poi-j",
    "system": "nes",
    "romFile": "Crayon Shin-Chan - Ora to Poi Poi (J).zip",
    "img": true
  },
  {
    "id": 399,
    "title": "Crazy Climber (J)",
    "slug": "crazy-climber-j",
    "system": "nes",
    "romFile": "Crazy Climber (J).zip",
    "img": true
  },
  {
    "id": 400,
    "title": "Crisis Force (J)",
    "slug": "crisis-force-j",
    "system": "nes",
    "romFile": "Crisis Force (J).zip",
    "img": true
  },
  {
    "id": 401,
    "title": "Cross Fire (J)",
    "slug": "cross-fire-j",
    "system": "nes",
    "romFile": "Cross Fire (J).zip",
    "img": true
  },
  {
    "id": 402,
    "title": "Crystal Mines (U)",
    "slug": "crystal-mines-u",
    "system": "nes",
    "romFile": "Crystal Mines (U).zip",
    "img": true
  },
  {
    "id": 403,
    "title": "Crystalis (U, Prototype)",
    "slug": "crystalis-u-prototype",
    "system": "nes",
    "romFile": "Crystalis (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 404,
    "title": "Crystalis (U)",
    "slug": "crystalis-u",
    "system": "nes",
    "romFile": "Crystalis (U).zip",
    "img": true
  },
  {
    "id": 405,
    "title": "Cyberball (U)",
    "slug": "cyberball-u",
    "system": "nes",
    "romFile": "Cyberball (U).zip",
    "img": true
  },
  {
    "id": 406,
    "title": "Cybernoid - The Fighting Machine (U)",
    "slug": "cybernoid-the-fighting-machine-u",
    "system": "nes",
    "romFile": "Cybernoid - The Fighting Machine (U).zip",
    "img": true
  },
  {
    "id": 407,
    "title": "Cycle Race - Road Man (J)",
    "slug": "cycle-race-road-man-j",
    "system": "nes",
    "romFile": "Cycle Race - Road Man (J).zip",
    "img": true
  },
  {
    "id": 408,
    "title": "Dai Meiro - Meikyuu no Tatsujin (J)",
    "slug": "dai-meiro-meikyuu-no-tatsujin-j",
    "system": "nes",
    "romFile": "Dai Meiro - Meikyuu no Tatsujin (J).zip",
    "img": true
  },
  {
    "id": 409,
    "title": "Dai-2-Ji - Super Robot Taisen (As)",
    "slug": "dai-2-ji-super-robot-taisen-as",
    "system": "nes",
    "romFile": "Dai-2-Ji - Super Robot Taisen (As).zip",
    "img": true
  },
  {
    "id": 410,
    "title": "Dai-2-Ji - Super Robot Taisen (J)",
    "slug": "dai-2-ji-super-robot-taisen-j",
    "system": "nes",
    "romFile": "Dai-2-Ji - Super Robot Taisen (J).zip",
    "img": true
  },
  {
    "id": 411,
    "title": "Daikaijuu Deburas (J)",
    "slug": "daikaijuu-deburas-j",
    "system": "nes",
    "romFile": "Daikaijuu Deburas (J).zip",
    "img": true
  },
  {
    "id": 412,
    "title": "Daikoukai Jidai (J)",
    "slug": "daikoukai-jidai-j",
    "system": "nes",
    "romFile": "Daikoukai Jidai (J).zip",
    "img": true
  },
  {
    "id": 413,
    "title": "Daiku no Gen San (J)",
    "slug": "daiku-no-gen-san-j",
    "system": "nes",
    "romFile": "Daiku no Gen San (J).zip",
    "img": true
  },
  {
    "id": 414,
    "title": "Daiku no Gen San 2 - Akage no Dan no Gyakushuu (J)",
    "slug": "daiku-no-gen-san-2-akage-no-dan-no-gyakushuu-j",
    "system": "nes",
    "romFile": "Daiku no Gen San 2 - Akage no Dan no Gyakushuu (J).zip",
    "img": true
  },
  {
    "id": 415,
    "title": "Daisenryaku (J)",
    "slug": "daisenryaku-j",
    "system": "nes",
    "romFile": "Daisenryaku (J).zip",
    "img": true
  },
  {
    "id": 416,
    "title": "Daiva - Imperial of Nirsartia (J)",
    "slug": "daiva-imperial-of-nirsartia-j",
    "system": "nes",
    "romFile": "Daiva - Imperial of Nirsartia (J).zip",
    "img": true
  },
  {
    "id": 417,
    "title": "Danny Sullivan's Indy Heat (U)",
    "slug": "danny-sullivan-s-indy-heat-u",
    "system": "nes",
    "romFile": "Danny Sullivan's Indy Heat (U).zip",
    "img": true
  },
  {
    "id": 418,
    "title": "Dark Lord (J)",
    "slug": "dark-lord-j",
    "system": "nes",
    "romFile": "Dark Lord (J).zip",
    "img": true
  },
  {
    "id": 419,
    "title": "Darkman (U)",
    "slug": "darkman-u",
    "system": "nes",
    "romFile": "Darkman (U).zip",
    "img": true
  },
  {
    "id": 420,
    "title": "Darkwing Duck (E)",
    "slug": "darkwing-duck-e",
    "system": "nes",
    "romFile": "Darkwing Duck (E).zip",
    "img": true
  },
  {
    "id": 421,
    "title": "Darkwing Duck (U, Prototype)",
    "slug": "darkwing-duck-u-prototype",
    "system": "nes",
    "romFile": "Darkwing Duck (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 422,
    "title": "Darkwing Duck (U)",
    "slug": "darkwing-duck-u",
    "system": "nes",
    "romFile": "Darkwing Duck (U).zip",
    "img": true
  },
  {
    "id": 423,
    "title": "Dash Galaxy in the Alien Asylum (U)",
    "slug": "dash-galaxy-in-the-alien-asylum-u",
    "system": "nes",
    "romFile": "Dash Galaxy in the Alien Asylum (U).zip",
    "img": true
  },
  {
    "id": 424,
    "title": "Dash Yarou (J)",
    "slug": "dash-yarou-j",
    "system": "nes",
    "romFile": "Dash Yarou (J).zip",
    "img": true
  },
  {
    "id": 425,
    "title": "Datach - Battle Rush - Build Up Robot Tournament (J)",
    "slug": "datach-battle-rush-build-up-robot-tournament-j",
    "system": "nes",
    "romFile": "Datach - Battle Rush - Build Up Robot Tournament (J).zip",
    "img": true
  },
  {
    "id": 426,
    "title": "Datach - Crayon Shin Chan - Ora to Poi Poi (J)",
    "slug": "datach-crayon-shin-chan-ora-to-poi-poi-j",
    "system": "nes",
    "romFile": "Datach - Crayon Shin Chan - Ora to Poi Poi (J).zip",
    "img": true
  },
  {
    "id": 427,
    "title": "Datach - Dragon Ball Z - Gekitou Tenkaichi Budou Kai (J)",
    "slug": "datach-dragon-ball-z-gekitou-tenkaichi-budou-kai-j",
    "system": "nes",
    "romFile": "Datach - Dragon Ball Z - Gekitou Tenkaichi Budou Kai (J).zip",
    "img": true
  },
  {
    "id": 428,
    "title": "Datach - J League Super Top Players (J)",
    "slug": "datach-j-league-super-top-players-j",
    "system": "nes",
    "romFile": "Datach - J League Super Top Players (J).zip",
    "img": true
  },
  {
    "id": 429,
    "title": "Datach - SD Gundam - Gundam Wars (J)",
    "slug": "datach-sd-gundam-gundam-wars-j",
    "system": "nes",
    "romFile": "Datach - SD Gundam - Gundam Wars (J).zip",
    "img": true
  },
  {
    "id": 430,
    "title": "Datach - Ultraman Club - Supokon Fight! (J)",
    "slug": "datach-ultraman-club-supokon-fight-j",
    "system": "nes",
    "romFile": "Datach - Ultraman Club - Supokon Fight! (J).zip",
    "img": true
  },
  {
    "id": 431,
    "title": "Datach - Yuu Yuu Hakusho - Bakutou Ankoku Bujutsu Kai (J)",
    "slug": "datach-yuu-yuu-hakusho-bakutou-ankoku-bujutsu-kai-j",
    "system": "nes",
    "romFile": "Datach - Yuu Yuu Hakusho - Bakutou Ankoku Bujutsu Kai (J).zip",
    "img": true
  },
  {
    "id": 432,
    "title": "Datsugoku (J)",
    "slug": "datsugoku-j",
    "system": "nes",
    "romFile": "Datsugoku (J).zip",
    "img": true
  },
  {
    "id": 433,
    "title": "Day Dreamin' Davey (U)",
    "slug": "day-dreamin-davey-u",
    "system": "nes",
    "romFile": "Day Dreamin' Davey (U).zip",
    "img": true
  },
  {
    "id": 434,
    "title": "Days of Thunder (U)",
    "slug": "days-of-thunder-u",
    "system": "nes",
    "romFile": "Days of Thunder (U).zip",
    "img": true
  },
  {
    "id": 435,
    "title": "Deadly Towers (U)",
    "slug": "deadly-towers-u",
    "system": "nes",
    "romFile": "Deadly Towers (U).zip",
    "img": true
  },
  {
    "id": 436,
    "title": "Death Race (U)",
    "slug": "death-race-u",
    "system": "nes",
    "romFile": "Death Race (U).zip",
    "img": true
  },
  {
    "id": 437,
    "title": "Deathbots (U)",
    "slug": "deathbots-u",
    "system": "nes",
    "romFile": "Deathbots (U).zip",
    "img": true
  },
  {
    "id": 438,
    "title": "Deblock (J)",
    "slug": "deblock-j",
    "system": "nes",
    "romFile": "Deblock (J).zip",
    "img": true
  },
  {
    "id": 439,
    "title": "Decathlon (As)",
    "slug": "decathlon-as",
    "system": "nes",
    "romFile": "Decathlon (As).zip",
    "img": true
  },
  {
    "id": 440,
    "title": "Deep Dungeon 3 - Yuushi heno Tabi (J)",
    "slug": "deep-dungeon-3-yuushi-heno-tabi-j",
    "system": "nes",
    "romFile": "Deep Dungeon 3 - Yuushi heno Tabi (J).zip",
    "img": true
  },
  {
    "id": 441,
    "title": "Deep Dungeon 4 - Kuro no Youjutsushi (J)",
    "slug": "deep-dungeon-4-kuro-no-youjutsushi-j",
    "system": "nes",
    "romFile": "Deep Dungeon 4 - Kuro no Youjutsushi (J).zip",
    "img": true
  },
  {
    "id": 442,
    "title": "Defender II (U)",
    "slug": "defender-ii-u",
    "system": "nes",
    "romFile": "Defender II (U).zip",
    "img": true
  },
  {
    "id": 443,
    "title": "Defender of the Crown (E)",
    "slug": "defender-of-the-crown-e",
    "system": "nes",
    "romFile": "Defender of the Crown (E).zip",
    "img": true
  },
  {
    "id": 444,
    "title": "Defender of the Crown (F)",
    "slug": "defender-of-the-crown-f",
    "system": "nes",
    "romFile": "Defender of the Crown (F).zip",
    "img": true
  },
  {
    "id": 445,
    "title": "Defender of the Crown (U)",
    "slug": "defender-of-the-crown-u",
    "system": "nes",
    "romFile": "Defender of the Crown (U).zip",
    "img": true
  },
  {
    "id": 446,
    "title": "Defenders of Dynatron City (U)",
    "slug": "defenders-of-dynatron-city-u",
    "system": "nes",
    "romFile": "Defenders of Dynatron City (U).zip",
    "img": true
  },
  {
    "id": 447,
    "title": "Deja Vu (J)",
    "slug": "deja-vu-j",
    "system": "nes",
    "romFile": "Deja Vu (J).zip",
    "img": true
  },
  {
    "id": 448,
    "title": "Deja Vu (SW)",
    "slug": "deja-vu-sw",
    "system": "nes",
    "romFile": "Deja Vu (SW).zip",
    "img": true
  },
  {
    "id": 449,
    "title": "Deja Vu (U)",
    "slug": "deja-vu-u",
    "system": "nes",
    "romFile": "Deja Vu (U).zip",
    "img": true
  },
  {
    "id": 450,
    "title": "Demon Sword (U)",
    "slug": "demon-sword-u",
    "system": "nes",
    "romFile": "Demon Sword (U).zip",
    "img": true
  },
  {
    "id": 451,
    "title": "Dengeki - Big Bang! (J)",
    "slug": "dengeki-big-bang-j",
    "system": "nes",
    "romFile": "Dengeki - Big Bang! (J).zip",
    "img": true
  },
  {
    "id": 452,
    "title": "Densetsu no Kishi - Elrond (J)",
    "slug": "densetsu-no-kishi-elrond-j",
    "system": "nes",
    "romFile": "Densetsu no Kishi - Elrond (J).zip",
    "img": true
  },
  {
    "id": 453,
    "title": "Derby Stallion - Zenkoku Han (J)",
    "slug": "derby-stallion-zenkoku-han-j",
    "system": "nes",
    "romFile": "Derby Stallion - Zenkoku Han (J).zip"
  },
  {
    "id": 454,
    "title": "Desert Commander (U)",
    "slug": "desert-commander-u",
    "system": "nes",
    "romFile": "Desert Commander (U).zip",
    "img": true
  },
  {
    "id": 455,
    "title": "Destination Earthstar (U)",
    "slug": "destination-earthstar-u",
    "system": "nes",
    "romFile": "Destination Earthstar (U).zip",
    "img": true
  },
  {
    "id": 456,
    "title": "Destiny of an Emperor (U)",
    "slug": "destiny-of-an-emperor-u",
    "system": "nes",
    "romFile": "Destiny of an Emperor (U).zip",
    "img": true
  },
  {
    "id": 457,
    "title": "Devil Man (J)",
    "slug": "devil-man-j",
    "system": "nes",
    "romFile": "Devil Man (J).zip",
    "img": true
  },
  {
    "id": 458,
    "title": "Devil World (E)",
    "slug": "devil-world-e",
    "system": "nes",
    "romFile": "Devil World (E) [!].zip",
    "img": true
  },
  {
    "id": 459,
    "title": "Devil World (J)",
    "slug": "devil-world-j",
    "system": "nes",
    "romFile": "Devil World (J).zip",
    "img": true
  },
  {
    "id": 460,
    "title": "Dezaemon (J)",
    "slug": "dezaemon-j",
    "system": "nes",
    "romFile": "Dezaemon (J).zip",
    "img": true
  },
  {
    "id": 461,
    "title": "Di 4 Ci - Ji Qi Ren Dai Zhan (As)",
    "slug": "di-4-ci-ji-qi-ren-dai-zhan-as",
    "system": "nes",
    "romFile": "Di 4 Ci - Ji Qi Ren Dai Zhan (As).zip",
    "img": true
  },
  {
    "id": 462,
    "title": "Di Dao Zhan (As)",
    "slug": "di-dao-zhan-as",
    "system": "nes",
    "romFile": "Di Dao Zhan (As).zip",
    "img": true
  },
  {
    "id": 463,
    "title": "Dick Tracy (U)",
    "slug": "dick-tracy-u",
    "system": "nes",
    "romFile": "Dick Tracy (U).zip",
    "img": true
  },
  {
    "id": 464,
    "title": "Die Hard (E)",
    "slug": "die-hard-e",
    "system": "nes",
    "romFile": "Die Hard (E) [!].zip",
    "img": true
  },
  {
    "id": 465,
    "title": "Die Hard (J)",
    "slug": "die-hard-j",
    "system": "nes",
    "romFile": "Die Hard (J).zip",
    "img": true
  },
  {
    "id": 466,
    "title": "Die Hard (U)",
    "slug": "die-hard-u",
    "system": "nes",
    "romFile": "Die Hard (U).zip",
    "img": true
  },
  {
    "id": 467,
    "title": "Dig Dug (J)",
    "slug": "dig-dug-j",
    "system": "nes",
    "romFile": "Dig Dug (J).zip",
    "img": true
  },
  {
    "id": 468,
    "title": "Dig Dug II (J)",
    "slug": "dig-dug-ii-j",
    "system": "nes",
    "romFile": "Dig Dug II (J) [!].zip",
    "img": true
  },
  {
    "id": 469,
    "title": "Digger - The Legend of the Lost City (U)",
    "slug": "digger-the-legend-of-the-lost-city-u",
    "system": "nes",
    "romFile": "Digger - The Legend of the Lost City (U).zip",
    "img": true
  },
  {
    "id": 470,
    "title": "Digger T. Rock - The Legend of the Lost City (E)",
    "slug": "digger-t-rock-the-legend-of-the-lost-city-e",
    "system": "nes",
    "romFile": "Digger T. Rock - The Legend of the Lost City (E).zip",
    "img": true
  },
  {
    "id": 471,
    "title": "Digital Devil Monogatari - Megami Tensei (J)",
    "slug": "digital-devil-monogatari-megami-tensei-j",
    "system": "nes",
    "romFile": "Digital Devil Monogatari - Megami Tensei (J).zip"
  },
  {
    "id": 472,
    "title": "Digital Devil Monogatari - Megami Tensei II (J)",
    "slug": "digital-devil-monogatari-megami-tensei-ii-j",
    "system": "nes",
    "romFile": "Digital Devil Monogatari - Megami Tensei II (J).zip"
  },
  {
    "id": 473,
    "title": "Dirty Harry (U)",
    "slug": "dirty-harry-u",
    "system": "nes",
    "romFile": "Dirty Harry (U).zip",
    "img": true
  },
  {
    "id": 474,
    "title": "Dizzy The Adventurer (U, Aladdin)",
    "slug": "dizzy-the-adventurer-u-aladdin",
    "system": "nes",
    "romFile": "Dizzy The Adventurer (U) (Aladdin).zip",
    "img": true
  },
  {
    "id": 475,
    "title": "Dizzy The Adventurer (U)",
    "slug": "dizzy-the-adventurer-u",
    "system": "nes",
    "romFile": "Dizzy The Adventurer (U).zip",
    "img": true
  },
  {
    "id": 476,
    "title": "Doctor PC Jr. - Xue Si Dian Nao (As)",
    "slug": "doctor-pc-jr-xue-si-dian-nao-as",
    "system": "nes",
    "romFile": "Doctor PC Jr. - Xue Si Dian Nao (As).zip",
    "img": true
  },
  {
    "id": 477,
    "title": "Doctor PC Jr. - Xue Si Dian Nao (Part 1, As)",
    "slug": "doctor-pc-jr-xue-si-dian-nao-part-1-as",
    "system": "nes",
    "romFile": "Doctor PC Jr. - Xue Si Dian Nao (Part 1) (As).zip",
    "img": true
  },
  {
    "id": 478,
    "title": "Doctor PC Jr. - Xue Si Dian Nao (Part 2, As)",
    "slug": "doctor-pc-jr-xue-si-dian-nao-part-2-as",
    "system": "nes",
    "romFile": "Doctor PC Jr. - Xue Si Dian Nao (Part 2) (As).zip",
    "img": true
  },
  {
    "id": 479,
    "title": "Doki! Doki! Yuuenchi (J)",
    "slug": "doki-doki-yuuenchi-j",
    "system": "nes",
    "romFile": "Doki! Doki! Yuuenchi (J) [!].zip",
    "img": true
  },
  {
    "id": 480,
    "title": "Dokuganryuu Masamune (J)",
    "slug": "dokuganryuu-masamune-j",
    "system": "nes",
    "romFile": "Dokuganryuu Masamune (J).zip",
    "img": true
  },
  {
    "id": 481,
    "title": "Don Doko Don (J)",
    "slug": "don-doko-don-j",
    "system": "nes",
    "romFile": "Don Doko Don (J).zip",
    "img": true
  },
  {
    "id": 482,
    "title": "Don Doko Don 2 (J)",
    "slug": "don-doko-don-2-j",
    "system": "nes",
    "romFile": "Don Doko Don 2 (J).zip",
    "img": true
  },
  {
    "id": 483,
    "title": "Donald Duck (J)",
    "slug": "donald-duck-j",
    "system": "nes",
    "romFile": "Donald Duck (J).zip",
    "img": true
  },
  {
    "id": 484,
    "title": "Donald Land (J)",
    "slug": "donald-land-j",
    "system": "nes",
    "romFile": "Donald Land (J).zip",
    "img": true
  },
  {
    "id": 485,
    "title": "Dong Fang de Chuan Shuo - The Hyrule Fantasy (As)",
    "slug": "dong-fang-de-chuan-shuo-the-hyrule-fantasy-as",
    "system": "nes",
    "romFile": "Dong Fang de Chuan Shuo - The Hyrule Fantasy (As).zip",
    "img": true
  },
  {
    "id": 486,
    "title": "Donkey Kong (GC)",
    "slug": "donkey-kong-gc",
    "system": "nes",
    "romFile": "Donkey Kong (GC).zip",
    "img": true
  },
  {
    "id": 487,
    "title": "Donkey Kong 3 (JUE)",
    "slug": "donkey-kong-3-jue",
    "system": "nes",
    "romFile": "Donkey Kong 3 (JUE).zip",
    "img": true
  },
  {
    "id": 488,
    "title": "Donkey Kong Classics (U)",
    "slug": "donkey-kong-classics-u",
    "system": "nes",
    "romFile": "Donkey Kong Classics (U) [!].zip",
    "img": true
  },
  {
    "id": 489,
    "title": "Donkey Kong Jr. (GC)",
    "slug": "donkey-kong-jr-gc",
    "system": "nes",
    "romFile": "Donkey Kong Jr. (GC).zip",
    "img": true
  },
  {
    "id": 490,
    "title": "Donkey Kong Jr. (JU)",
    "slug": "donkey-kong-jr-ju",
    "system": "nes",
    "romFile": "Donkey Kong Jr. (JU).zip",
    "img": true
  },
  {
    "id": 491,
    "title": "Donkey Kong Jr. Math (U)",
    "slug": "donkey-kong-jr-math-u",
    "system": "nes",
    "romFile": "Donkey Kong Jr. Math (U).zip",
    "img": true
  },
  {
    "id": 492,
    "title": "Door Door (J)",
    "slug": "door-door-j",
    "system": "nes",
    "romFile": "Door Door (J).zip",
    "img": true
  },
  {
    "id": 493,
    "title": "Doraemon (J)",
    "slug": "doraemon-j",
    "system": "nes",
    "romFile": "Doraemon (J).zip",
    "img": true
  },
  {
    "id": 494,
    "title": "Doraemon - Giga Zombie no Gyakushuu (J)",
    "slug": "doraemon-giga-zombie-no-gyakushuu-j",
    "system": "nes",
    "romFile": "Doraemon - Giga Zombie no Gyakushuu (J).zip",
    "img": true
  },
  {
    "id": 495,
    "title": "Double Dare (U)",
    "slug": "double-dare-u",
    "system": "nes",
    "romFile": "Double Dare (U).zip",
    "img": true
  },
  {
    "id": 496,
    "title": "Double Dragon (E)",
    "slug": "double-dragon-e",
    "system": "nes",
    "romFile": "Double Dragon (E).zip",
    "img": true
  },
  {
    "id": 497,
    "title": "Double Dragon (J)",
    "slug": "double-dragon-j",
    "system": "nes",
    "romFile": "Double Dragon (J).zip",
    "img": true
  },
  {
    "id": 498,
    "title": "Double Dragon (PC10)",
    "slug": "double-dragon-pc10",
    "system": "nes",
    "romFile": "Double Dragon (PC10).zip",
    "img": true
  },
  {
    "id": 499,
    "title": "Double Dragon (U)",
    "slug": "double-dragon-u",
    "system": "nes",
    "romFile": "Double Dragon (U).zip",
    "img": true
  },
  {
    "id": 500,
    "title": "Double Dragon II - The Revenge (E)",
    "slug": "double-dragon-ii-the-revenge-e",
    "system": "nes",
    "romFile": "Double Dragon II - The Revenge (E) [!].zip",
    "img": true
  },
  {
    "id": 501,
    "title": "Double Dragon II - The Revenge (J)",
    "slug": "double-dragon-ii-the-revenge-j",
    "system": "nes",
    "romFile": "Double Dragon II - The Revenge (J).zip",
    "img": true
  },
  {
    "id": 502,
    "title": "Double Dragon II - The Revenge (U)",
    "slug": "double-dragon-ii-the-revenge-u",
    "system": "nes",
    "romFile": "Double Dragon II - The Revenge (U).zip",
    "img": true
  },
  {
    "id": 503,
    "title": "Double Dragon III - The Rosetta Stone (J)",
    "slug": "double-dragon-iii-the-rosetta-stone-j",
    "system": "nes",
    "romFile": "Double Dragon III - The Rosetta Stone (J).zip",
    "img": true
  },
  {
    "id": 504,
    "title": "Double Dragon III - The Sacred Stones (E)",
    "slug": "double-dragon-iii-the-sacred-stones-e",
    "system": "nes",
    "romFile": "Double Dragon III - The Sacred Stones (E).zip",
    "img": true
  },
  {
    "id": 505,
    "title": "Double Dragon III - The Sacred Stones (U)",
    "slug": "double-dragon-iii-the-sacred-stones-u",
    "system": "nes",
    "romFile": "Double Dragon III - The Sacred Stones (U).zip",
    "img": true
  },
  {
    "id": 506,
    "title": "Double Dribble (PC10)",
    "slug": "double-dribble-pc10",
    "system": "nes",
    "romFile": "Double Dribble (PC10).zip",
    "img": true
  },
  {
    "id": 507,
    "title": "Double Dribble (U, PRG0)",
    "slug": "double-dribble-u-prg0",
    "system": "nes",
    "romFile": "Double Dribble (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 508,
    "title": "Double Dribble (U, PRG1)",
    "slug": "double-dribble-u-prg1",
    "system": "nes",
    "romFile": "Double Dribble (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 509,
    "title": "Double Moon Densetsu (J)",
    "slug": "double-moon-densetsu-j",
    "system": "nes",
    "romFile": "Double Moon Densetsu (J).zip",
    "img": true
  },
  {
    "id": 510,
    "title": "Double Strike (U, V1.0)",
    "slug": "double-strike-u-v1-0",
    "system": "nes",
    "romFile": "Double Strike (U) (V1.0).zip"
  },
  {
    "id": 511,
    "title": "Double Strike (U, V1.1)",
    "slug": "double-strike-u-v1-1",
    "system": "nes",
    "romFile": "Double Strike (U) (V1.1).zip"
  },
  {
    "id": 512,
    "title": "Dough Boy (J)",
    "slug": "dough-boy-j",
    "system": "nes",
    "romFile": "Dough Boy (J).zip",
    "img": true
  },
  {
    "id": 513,
    "title": "Downtown - Nekketsu Koushin Kyoku - Soreyuke Dai Undoukai (J)",
    "slug": "downtown-nekketsu-koushin-kyoku-soreyuke-dai-undoukai-j-t-eng-15",
    "system": "nes",
    "romFile": "Downtown - Nekketsu Koushin Kyoku - Soreyuke Dai Undoukai (J) _T-Eng.15_.zip"
  },
  {
    "id": 514,
    "title": "Downtown - Nekketsu Monogatari (J)",
    "slug": "downtown-nekketsu-monogatari-j",
    "system": "nes",
    "romFile": "Downtown - Nekketsu Monogatari (J).zip",
    "img": true
  },
  {
    "id": 515,
    "title": "Downtown Special - Kunio Kun no Jidaigeki Dayo Zenin Shuugou! (J)",
    "slug": "downtown-special-kunio-kun-no-jidaigeki-dayo-zenin-shuugou-j-t-eng1-0",
    "system": "nes",
    "romFile": "Downtown Special - Kunio Kun no Jidaigeki Dayo Zenin Shuugou! (J) _T-Eng1.0_.zip",
    "img": true
  },
  {
    "id": 516,
    "title": "Dr. Chaos (U)",
    "slug": "dr-chaos-u",
    "system": "nes",
    "romFile": "Dr. Chaos (U).zip",
    "img": true
  },
  {
    "id": 517,
    "title": "Dr. Jekyll and Mr. Hyde (U)",
    "slug": "dr-jekyll-and-mr-hyde-u",
    "system": "nes",
    "romFile": "Dr. Jekyll and Mr. Hyde (U).zip",
    "img": true
  },
  {
    "id": 518,
    "title": "Dr. Mario (E)",
    "slug": "dr-mario-e",
    "system": "nes",
    "romFile": "Dr. Mario (E).zip",
    "img": true
  },
  {
    "id": 519,
    "title": "Drac's Night Out (U, Prototype)",
    "slug": "drac-s-night-out-u-prototype",
    "system": "nes",
    "romFile": "Drac's Night Out (U) (Prototype) [!].zip",
    "img": true
  },
  {
    "id": 520,
    "title": "Dragon Buster (J)",
    "slug": "dragon-buster-j",
    "system": "nes",
    "romFile": "Dragon Buster (J).zip",
    "img": true
  },
  {
    "id": 521,
    "title": "Dragon Buster II - Yami no Fuuin (J)",
    "slug": "dragon-buster-ii-yami-no-fuuin-j",
    "system": "nes",
    "romFile": "Dragon Buster II - Yami no Fuuin (J).zip",
    "img": true
  },
  {
    "id": 522,
    "title": "Dragon Fighter (J)",
    "slug": "dragon-fighter-j",
    "system": "nes",
    "romFile": "Dragon Fighter (J).zip",
    "img": true
  },
  {
    "id": 523,
    "title": "Dragon Fighter (U)",
    "slug": "dragon-fighter-u",
    "system": "nes",
    "romFile": "Dragon Fighter (U).zip",
    "img": true
  },
  {
    "id": 524,
    "title": "Dragon Ninja (J)",
    "slug": "dragon-ninja-j",
    "system": "nes",
    "romFile": "Dragon Ninja (J).zip",
    "img": true
  },
  {
    "id": 525,
    "title": "Dragon Power (U)",
    "slug": "dragon-power-u",
    "system": "nes",
    "romFile": "Dragon Power (U).zip",
    "img": true
  },
  {
    "id": 526,
    "title": "Dragon Quest (J)",
    "slug": "dragon-quest-j",
    "system": "nes",
    "romFile": "Dragon Quest (J).zip",
    "img": true
  },
  {
    "id": 527,
    "title": "Dragon Quest II (J)",
    "slug": "dragon-quest-ii-j",
    "system": "nes",
    "romFile": "Dragon Quest II (J).zip",
    "img": true
  },
  {
    "id": 528,
    "title": "Dragon Quest III (J)",
    "slug": "dragon-quest-iii-j",
    "system": "nes",
    "romFile": "Dragon Quest III (J).zip",
    "img": true
  },
  {
    "id": 529,
    "title": "Dragon Quest IV (J)",
    "slug": "dragon-quest-iv-j",
    "system": "nes",
    "romFile": "Dragon Quest IV (J).zip",
    "img": true
  },
  {
    "id": 530,
    "title": "Dragon Scroll - Yomigaerishi Maryuu (J)",
    "slug": "dragon-scroll-yomigaerishi-maryuu-j",
    "system": "nes",
    "romFile": "Dragon Scroll - Yomigaerishi Maryuu (J).zip",
    "img": true
  },
  {
    "id": 531,
    "title": "Dragon Slayer 4 - Drasle Family (J)",
    "slug": "dragon-slayer-4-drasle-family-j",
    "system": "nes",
    "romFile": "Dragon Slayer 4 - Drasle Family (J).zip",
    "img": true
  },
  {
    "id": 532,
    "title": "Dragon Spirit - Aratanaru Densetsu (J)",
    "slug": "dragon-spirit-aratanaru-densetsu-j",
    "system": "nes",
    "romFile": "Dragon Spirit - Aratanaru Densetsu (J).zip",
    "img": true
  },
  {
    "id": 533,
    "title": "Dragon Spirit - The New Legend (U)",
    "slug": "dragon-spirit-the-new-legend-u",
    "system": "nes",
    "romFile": "Dragon Spirit - The New Legend (U).zip",
    "img": true
  },
  {
    "id": 534,
    "title": "Dragon Unit (J)",
    "slug": "dragon-unit-j",
    "system": "nes",
    "romFile": "Dragon Unit (J).zip",
    "img": true
  },
  {
    "id": 535,
    "title": "Dragon Warrior (U, PRG0)",
    "slug": "dragon-warrior-u-prg0",
    "system": "nes",
    "romFile": "Dragon Warrior (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 536,
    "title": "Dragon Warrior (U, PRG1)",
    "slug": "dragon-warrior-u-prg1",
    "system": "nes",
    "romFile": "Dragon Warrior (U) (PRG1).zip",
    "img": true
  },
  {
    "id": 537,
    "title": "Dragon Warrior II (U)",
    "slug": "dragon-warrior-ii-u",
    "system": "nes",
    "romFile": "Dragon Warrior II (U).zip",
    "img": true
  },
  {
    "id": 538,
    "title": "Dragon Warrior III (U)",
    "slug": "dragon-warrior-iii-u",
    "system": "nes",
    "romFile": "Dragon Warrior III (U).zip",
    "img": true
  },
  {
    "id": 539,
    "title": "Dragon Warrior IV (U)",
    "slug": "dragon-warrior-iv-u",
    "system": "nes",
    "romFile": "Dragon Warrior IV (U).zip",
    "img": true
  },
  {
    "id": 540,
    "title": "Dragon Wars (J)",
    "slug": "dragon-wars-j",
    "system": "nes",
    "romFile": "Dragon Wars (J).zip",
    "img": true
  },
  {
    "id": 541,
    "title": "Dragon's Lair (E)",
    "slug": "dragon-s-lair-e",
    "system": "nes",
    "romFile": "Dragon's Lair (E).zip",
    "img": true
  },
  {
    "id": 542,
    "title": "Dragon's Lair (J)",
    "slug": "dragon-s-lair-j",
    "system": "nes",
    "romFile": "Dragon's Lair (J).zip",
    "img": true
  },
  {
    "id": 543,
    "title": "Dragon's Lair (U)",
    "slug": "dragon-s-lair-u",
    "system": "nes",
    "romFile": "Dragon's Lair (U).zip",
    "img": true
  },
  {
    "id": 544,
    "title": "Dragon, The (As)",
    "slug": "dragon-the-as",
    "system": "nes",
    "romFile": "Dragon, The (As).zip",
    "img": true
  },
  {
    "id": 545,
    "title": "Dream Master (J)",
    "slug": "dream-master-j",
    "system": "nes",
    "romFile": "Dream Master (J).zip",
    "img": true
  },
  {
    "id": 546,
    "title": "Drop Zone (E)",
    "slug": "drop-zone-e",
    "system": "nes",
    "romFile": "Drop Zone (E).zip",
    "img": true
  },
  {
    "id": 547,
    "title": "Duck (As)",
    "slug": "duck-as",
    "system": "nes",
    "romFile": "Duck (As).zip",
    "img": true
  },
  {
    "id": 548,
    "title": "Duck Hunt (JUE)",
    "slug": "duck-hunt-jue",
    "system": "nes",
    "romFile": "Duck Hunt (JUE) [!].zip",
    "img": true
  },
  {
    "id": 549,
    "title": "Duck Hunt (PC10)",
    "slug": "duck-hunt-pc10",
    "system": "nes",
    "romFile": "Duck Hunt (PC10).zip",
    "img": true
  },
  {
    "id": 550,
    "title": "Duck Hunt (VS)",
    "slug": "duck-hunt-vs",
    "system": "nes",
    "romFile": "Duck Hunt (VS).zip",
    "img": true
  },
  {
    "id": 551,
    "title": "Duck Tales (E)",
    "slug": "duck-tales-e",
    "system": "nes",
    "romFile": "Duck Tales (E).zip",
    "img": true
  },
  {
    "id": 552,
    "title": "Duck Tales (U, Prototype)",
    "slug": "duck-tales-u-prototype",
    "system": "nes",
    "romFile": "Duck Tales (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 553,
    "title": "Duck Tales (U)",
    "slug": "duck-tales-u",
    "system": "nes",
    "romFile": "Duck Tales (U).zip",
    "img": true
  },
  {
    "id": 554,
    "title": "Duck Tales 2 (E, Prototype)",
    "slug": "duck-tales-2-e-prototype",
    "system": "nes",
    "romFile": "Duck Tales 2 (E) (Prototype).zip",
    "img": true
  },
  {
    "id": 555,
    "title": "Duck Tales 2 (J)",
    "slug": "duck-tales-2-j",
    "system": "nes",
    "romFile": "Duck Tales 2 (J).zip",
    "img": true
  },
  {
    "id": 556,
    "title": "Duck Tales 2 (U)",
    "slug": "duck-tales-2-u",
    "system": "nes",
    "romFile": "Duck Tales 2 (U).zip",
    "img": true
  },
  {
    "id": 557,
    "title": "Dudes With Attitude (U)",
    "slug": "dudes-with-attitude-u",
    "system": "nes",
    "romFile": "Dudes With Attitude (U).zip",
    "img": true
  },
  {
    "id": 558,
    "title": "Dungeon & Magic - Swords of Element (J)",
    "slug": "dungeon-magic-swords-of-element-j",
    "system": "nes",
    "romFile": "Dungeon & Magic - Swords of Element (J).zip",
    "img": true
  },
  {
    "id": 559,
    "title": "Dungeon Kid (J)",
    "slug": "dungeon-kid-j",
    "system": "nes",
    "romFile": "Dungeon Kid (J).zip",
    "img": true
  },
  {
    "id": 560,
    "title": "Dungeon Magic - Sword of the Elements (U)",
    "slug": "dungeon-magic-sword-of-the-elements-u",
    "system": "nes",
    "romFile": "Dungeon Magic - Sword of the Elements (U).zip",
    "img": true
  },
  {
    "id": 561,
    "title": "Duo Bao Xiao Ying Hao - Guang Ming yu An Hei Chuan Shuo (As)",
    "slug": "duo-bao-xiao-ying-hao-guang-ming-yu-an-hei-chuan-shuo-as",
    "system": "nes",
    "romFile": "Duo Bao Xiao Ying Hao - Guang Ming yu An Hei Chuan Shuo (As).zip",
    "img": true
  },
  {
    "id": 562,
    "title": "Dusty Diamond's All-Star Softball (U)",
    "slug": "dusty-diamond-s-all-star-softball-u",
    "system": "nes",
    "romFile": "Dusty Diamond's All-Star Softball (U).zip",
    "img": true
  },
  {
    "id": 563,
    "title": "Dynablaster (E)",
    "slug": "dynablaster-e",
    "system": "nes",
    "romFile": "Dynablaster (E).zip",
    "img": true
  },
  {
    "id": 564,
    "title": "Dynamite Batman (J)",
    "slug": "dynamite-batman-j",
    "system": "nes",
    "romFile": "Dynamite Batman (J).zip",
    "img": true
  },
  {
    "id": 565,
    "title": "Dynamite Bowl (J)",
    "slug": "dynamite-bowl-j",
    "system": "nes",
    "romFile": "Dynamite Bowl (J).zip",
    "img": true
  },
  {
    "id": 566,
    "title": "Dynowarz - Destruction of Spondylus (U)",
    "slug": "dynowarz-destruction-of-spondylus-u",
    "system": "nes",
    "romFile": "Dynowarz - Destruction of Spondylus (U).zip",
    "img": true
  },
  {
    "id": 567,
    "title": "Earthbound (U, Prototype)",
    "slug": "earthbound-u-prototype",
    "system": "nes",
    "romFile": "Earthbound (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 568,
    "title": "Earthbound Zero (Demiforce v1.01 Hack-1, U)",
    "slug": "earthbound-zero-demiforce-v1-01-hack-1-u",
    "system": "nes",
    "romFile": "Earthbound Zero (Demiforce v1.01 Hack-1) (U).zip"
  },
  {
    "id": 569,
    "title": "Earthbound Zero (Demiforce v1.01 Hack-2, U)",
    "slug": "earthbound-zero-demiforce-v1-01-hack-2-u",
    "system": "nes",
    "romFile": "Earthbound Zero (Demiforce v1.01 Hack-2) (U).zip"
  },
  {
    "id": 570,
    "title": "Edu (As)",
    "slug": "edu-as",
    "system": "nes",
    "romFile": "Edu (As).zip"
  },
  {
    "id": 571,
    "title": "Eggland - Meikyuu no Fukkatsu (J)",
    "slug": "eggland-meikyuu-no-fukkatsu-j",
    "system": "nes",
    "romFile": "Eggland - Meikyuu no Fukkatsu (J).zip"
  },
  {
    "id": 572,
    "title": "Egypt (J)",
    "slug": "egypt-j",
    "system": "nes",
    "romFile": "Egypt (J).zip",
    "img": true
  },
  {
    "id": 573,
    "title": "Elevator Action (J)",
    "slug": "elevator-action-j",
    "system": "nes",
    "romFile": "Elevator Action (J).zip",
    "img": true
  },
  {
    "id": 574,
    "title": "Elevator Action (U)",
    "slug": "elevator-action-u",
    "system": "nes",
    "romFile": "Elevator Action (U).zip",
    "img": true
  },
  {
    "id": 575,
    "title": "Eliminator Boat Duel (U)",
    "slug": "eliminator-boat-duel-u",
    "system": "nes",
    "romFile": "Eliminator Boat Duel (U).zip",
    "img": true
  },
  {
    "id": 576,
    "title": "Elite (E)",
    "slug": "elite-e",
    "system": "nes",
    "romFile": "Elite (E).zip",
    "img": true
  },
  {
    "id": 577,
    "title": "Elysion (J)",
    "slug": "elysion-j",
    "system": "nes",
    "romFile": "Elysion (J).zip",
    "img": true
  },
  {
    "id": 578,
    "title": "Emo Yan no 10 Bai Pro Yakyuu (J)",
    "slug": "emo-yan-no-10-bai-pro-yakyuu-j",
    "system": "nes",
    "romFile": "Emo Yan no 10 Bai Pro Yakyuu (J).zip"
  },
  {
    "id": 579,
    "title": "Erika to Satoru no Yume Bouken (J)",
    "slug": "erika-to-satoru-no-yume-bouken-j",
    "system": "nes",
    "romFile": "Erika to Satoru no Yume Bouken (J).zip",
    "img": true
  },
  {
    "id": 580,
    "title": "Erunaaku no Zaihou (J)",
    "slug": "erunaaku-no-zaihou-j",
    "system": "nes",
    "romFile": "Erunaaku no Zaihou (J).zip",
    "img": true
  },
  {
    "id": 581,
    "title": "Escape From Atlantis (Prototype)",
    "slug": "escape-from-atlantis-prototype",
    "system": "nes",
    "romFile": "Escape From Atlantis (Prototype).zip",
    "img": true
  },
  {
    "id": 582,
    "title": "Esper Bouken Tai (J)",
    "slug": "esper-bouken-tai-j",
    "system": "nes",
    "romFile": "Esper Bouken Tai (J).zip",
    "img": true
  },
  {
    "id": 583,
    "title": "Esper Dream 2 - Aratanaru Tatakai (J)",
    "slug": "esper-dream-2-aratanaru-tatakai-j",
    "system": "nes",
    "romFile": "Esper Dream 2 - Aratanaru Tatakai (J).zip",
    "img": true
  },
  {
    "id": 584,
    "title": "Excitebike (E)",
    "slug": "excitebike-e",
    "system": "nes",
    "romFile": "Excitebike (E).zip",
    "img": true
  },
  {
    "id": 585,
    "title": "Excitebike (GC)",
    "slug": "excitebike-gc",
    "system": "nes",
    "romFile": "Excitebike (GC).zip",
    "img": true
  },
  {
    "id": 586,
    "title": "Excitebike (JU)",
    "slug": "excitebike-ju",
    "system": "nes",
    "romFile": "Excitebike (JU) [!].zip",
    "img": true
  },
  {
    "id": 587,
    "title": "Excitebike (PC10)",
    "slug": "excitebike-pc10",
    "system": "nes",
    "romFile": "Excitebike (PC10).zip",
    "img": true
  },
  {
    "id": 588,
    "title": "Excitebike (VS)",
    "slug": "excitebike-vs",
    "system": "nes",
    "romFile": "Excitebike (VS).zip",
    "img": true
  },
  {
    "id": 589,
    "title": "Exciting Boxing (J)",
    "slug": "exciting-boxing-j",
    "system": "nes",
    "romFile": "Exciting Boxing (J).zip",
    "img": true
  },
  {
    "id": 590,
    "title": "Exciting Rally - World Rally Championship (J)",
    "slug": "exciting-rally-world-rally-championship-j",
    "system": "nes",
    "romFile": "Exciting Rally - World Rally Championship (J).zip",
    "img": true
  },
  {
    "id": 591,
    "title": "Exed Exes (J)",
    "slug": "exed-exes-j",
    "system": "nes",
    "romFile": "Exed Exes (J).zip",
    "img": true
  },
  {
    "id": 592,
    "title": "Exerion (J)",
    "slug": "exerion-j",
    "system": "nes",
    "romFile": "Exerion (J).zip",
    "img": true
  },
  {
    "id": 593,
    "title": "Exodus (U, V4.0)",
    "slug": "exodus-u-v4-0",
    "system": "nes",
    "romFile": "Exodus (U) (V4.0) [!].zip"
  },
  {
    "id": 594,
    "title": "F-1 Race (J)",
    "slug": "f-1-race-j",
    "system": "nes",
    "romFile": "F-1 Race (J).zip",
    "img": true
  },
  {
    "id": 595,
    "title": "F-1 Sensation (J)",
    "slug": "f-1-sensation-j",
    "system": "nes",
    "romFile": "F-1 Sensation (J).zip",
    "img": true
  },
  {
    "id": 596,
    "title": "F-117A Stealth Fighter (U)",
    "slug": "f-117a-stealth-fighter-u",
    "system": "nes",
    "romFile": "F-117A Stealth Fighter (U) [!].zip",
    "img": true
  },
  {
    "id": 597,
    "title": "F-15 City War (U)",
    "slug": "f-15-city-war-u",
    "system": "nes",
    "romFile": "F-15 City War (U).zip",
    "img": true
  },
  {
    "id": 598,
    "title": "F-15 Strike Eagle (U)",
    "slug": "f-15-strike-eagle-u",
    "system": "nes",
    "romFile": "F-15 Strike Eagle (U).zip",
    "img": true
  },
  {
    "id": 599,
    "title": "F1 Circus (J)",
    "slug": "f1-circus-j",
    "system": "nes",
    "romFile": "F1 Circus (J).zip",
    "img": true
  },
  {
    "id": 600,
    "title": "FC Genjin - Freakthoropus Computerus (J)",
    "slug": "fc-genjin-freakthoropus-computerus-j",
    "system": "nes",
    "romFile": "FC Genjin - Freakthoropus Computerus (J).zip",
    "img": true
  },
  {
    "id": 601,
    "title": "Famicom Disk System BIOS (J)",
    "slug": "famicom-disk-system-bios-j",
    "system": "nes",
    "romFile": "Famicom Disk System BIOS (J).zip"
  },
  {
    "id": 602,
    "title": "Famicom Doubutsu Seitai Zukan! - Katte ni Shirokuma - Mori wo Sukue no Maki! (J)",
    "slug": "famicom-doubutsu-seitai-zukan-katte-ni-shirokuma-mori-wo-sukue-no-maki-j",
    "system": "nes",
    "romFile": "Famicom Doubutsu Seitai Zukan! - Katte ni Shirokuma - Mori wo Sukue no Maki! (J).zip",
    "img": true
  },
  {
    "id": 603,
    "title": "Famicom Igo Nyuumon (J)",
    "slug": "famicom-igo-nyuumon-j",
    "system": "nes",
    "romFile": "Famicom Igo Nyuumon (J).zip",
    "img": true
  },
  {
    "id": 604,
    "title": "Famicom Jump - Eiyuu Retsuden (J)",
    "slug": "famicom-jump-eiyuu-retsuden-j",
    "system": "nes",
    "romFile": "Famicom Jump - Eiyuu Retsuden (J).zip",
    "img": true
  },
  {
    "id": 605,
    "title": "Famicom Jump II - Saikyou no 7 Nin (J)",
    "slug": "famicom-jump-ii-saikyou-no-7-nin-j",
    "system": "nes",
    "romFile": "Famicom Jump II - Saikyou no 7 Nin (J).zip",
    "img": true
  },
  {
    "id": 606,
    "title": "Famicom Meijin Sen (J)",
    "slug": "famicom-meijin-sen-j",
    "system": "nes",
    "romFile": "Famicom Meijin Sen (J).zip",
    "img": true
  },
  {
    "id": 607,
    "title": "Famicom Shougi - Ryuuousen (J)",
    "slug": "famicom-shougi-ryuuousen-j",
    "system": "nes",
    "romFile": "Famicom Shougi - Ryuuousen (J).zip",
    "img": true
  },
  {
    "id": 608,
    "title": "Famicom Top Management (J)",
    "slug": "famicom-top-management-j",
    "system": "nes",
    "romFile": "Famicom Top Management (J).zip",
    "img": true
  },
  {
    "id": 609,
    "title": "Famicom Wars (J)",
    "slug": "famicom-wars-j",
    "system": "nes",
    "romFile": "Famicom Wars (J).zip",
    "img": true
  },
  {
    "id": 610,
    "title": "Famicom Yakyuu Han (J)",
    "slug": "famicom-yakyuu-han-j",
    "system": "nes",
    "romFile": "Famicom Yakyuu Han (J).zip"
  },
  {
    "id": 611,
    "title": "Family BASIC (J, V2.0a)",
    "slug": "family-basic-j-v2-0a",
    "system": "nes",
    "romFile": "Family BASIC (J) (V2.0a).zip",
    "img": true
  },
  {
    "id": 612,
    "title": "Family BASIC (J, V2.1a)",
    "slug": "family-basic-j-v2-1a",
    "system": "nes",
    "romFile": "Family BASIC (J) (V2.1a).zip",
    "img": true
  },
  {
    "id": 613,
    "title": "Family BASIC (J, V3.0)",
    "slug": "family-basic-j-v3-0",
    "system": "nes",
    "romFile": "Family BASIC (J) (V3.0).zip",
    "img": true
  },
  {
    "id": 614,
    "title": "Family Block (J)",
    "slug": "family-block-j",
    "system": "nes",
    "romFile": "Family Block (J).zip",
    "img": true
  },
  {
    "id": 615,
    "title": "Family Boxing (J)",
    "slug": "family-boxing-j",
    "system": "nes",
    "romFile": "Family Boxing (J).zip",
    "img": true
  },
  {
    "id": 616,
    "title": "Family Circuit '91 (J)",
    "slug": "family-circuit-91-j",
    "system": "nes",
    "romFile": "Family Circuit '91 (J).zip",
    "img": true
  },
  {
    "id": 617,
    "title": "Family Circuit (J)",
    "slug": "family-circuit-j",
    "system": "nes",
    "romFile": "Family Circuit (J).zip",
    "img": true
  },
  {
    "id": 618,
    "title": "Family Computer - Othello (J)",
    "slug": "family-computer-othello-j",
    "system": "nes",
    "romFile": "Family Computer - Othello (J).zip",
    "img": true
  },
  {
    "id": 619,
    "title": "Family Feud (U)",
    "slug": "family-feud-u",
    "system": "nes",
    "romFile": "Family Feud (U).zip",
    "img": true
  },
  {
    "id": 620,
    "title": "Family Jockey (J)",
    "slug": "family-jockey-j",
    "system": "nes",
    "romFile": "Family Jockey (J).zip",
    "img": true
  },
  {
    "id": 621,
    "title": "Family Mahjong (J)",
    "slug": "family-mahjong-j",
    "system": "nes",
    "romFile": "Family Mahjong (J).zip",
    "img": true
  },
  {
    "id": 622,
    "title": "Family Mahjong II - Shanghai heno Michi (J)",
    "slug": "family-mahjong-ii-shanghai-heno-michi-j",
    "system": "nes",
    "romFile": "Family Mahjong II - Shanghai heno Michi (J).zip",
    "img": true
  },
  {
    "id": 623,
    "title": "Family Pinball (J)",
    "slug": "family-pinball-j",
    "system": "nes",
    "romFile": "Family Pinball (J).zip",
    "img": true
  },
  {
    "id": 624,
    "title": "Family Quiz (J)",
    "slug": "family-quiz-j",
    "system": "nes",
    "romFile": "Family Quiz (J).zip",
    "img": true
  },
  {
    "id": 625,
    "title": "Family School (J)",
    "slug": "family-school-j",
    "system": "nes",
    "romFile": "Family School (J).zip",
    "img": true
  },
  {
    "id": 626,
    "title": "Family Tennis (J)",
    "slug": "family-tennis-j",
    "system": "nes",
    "romFile": "Family Tennis (J).zip",
    "img": true
  },
  {
    "id": 627,
    "title": "Family Trainer - Aerobics Studio (J)",
    "slug": "family-trainer-aerobics-studio-j",
    "system": "nes",
    "romFile": "Family Trainer - Aerobics Studio (J).zip",
    "img": true
  },
  {
    "id": 628,
    "title": "Family Trainer - Athletic World (J)",
    "slug": "family-trainer-athletic-world-j",
    "system": "nes",
    "romFile": "Family Trainer - Athletic World (J).zip",
    "img": true
  },
  {
    "id": 629,
    "title": "Family Trainer - Daiundoukai (J)",
    "slug": "family-trainer-daiundoukai-j",
    "system": "nes",
    "romFile": "Family Trainer - Daiundoukai (J).zip",
    "img": true
  },
  {
    "id": 630,
    "title": "Family Trainer - Fuuun! Takeshi Shiro 2 (J)",
    "slug": "family-trainer-fuuun-takeshi-shiro-2-j",
    "system": "nes",
    "romFile": "Family Trainer - Fuuun! Takeshi Shiro 2 (J).zip"
  },
  {
    "id": 631,
    "title": "Family Trainer - Jogging Race (J)",
    "slug": "family-trainer-jogging-race-j",
    "system": "nes",
    "romFile": "Family Trainer - Jogging Race (J).zip",
    "img": true
  },
  {
    "id": 632,
    "title": "Family Trainer - Manhattan Police (J)",
    "slug": "family-trainer-manhattan-police-j",
    "system": "nes",
    "romFile": "Family Trainer - Manhattan Police (J).zip",
    "img": true
  },
  {
    "id": 633,
    "title": "Family Trainer - Meiro Daisakusen (J)",
    "slug": "family-trainer-meiro-daisakusen-j",
    "system": "nes",
    "romFile": "Family Trainer - Meiro Daisakusen (J).zip",
    "img": true
  },
  {
    "id": 634,
    "title": "Family Trainer - Rairai Kyonshiizu (J)",
    "slug": "family-trainer-rairai-kyonshiizu-j",
    "system": "nes",
    "romFile": "Family Trainer - Rairai Kyonshiizu (J).zip"
  },
  {
    "id": 635,
    "title": "Family Trainer - Running Stadium (J)",
    "slug": "family-trainer-running-stadium-j",
    "system": "nes",
    "romFile": "Family Trainer - Running Stadium (J).zip",
    "img": true
  },
  {
    "id": 636,
    "title": "Family Trainer - Totsugeki! Fuuun Takeshi Shiro (J)",
    "slug": "family-trainer-totsugeki-fuuun-takeshi-shiro-j",
    "system": "nes",
    "romFile": "Family Trainer - Totsugeki! Fuuun Takeshi Shiro (J).zip"
  },
  {
    "id": 637,
    "title": "Famista '89 - Kaimaku Han!! (J)",
    "slug": "famista-89-kaimaku-han-j",
    "system": "nes",
    "romFile": "Famista '89 - Kaimaku Han!! (J).zip"
  },
  {
    "id": 638,
    "title": "Famista '90 (J)",
    "slug": "famista-90-j",
    "system": "nes",
    "romFile": "Famista '90 (J).zip",
    "img": true
  },
  {
    "id": 639,
    "title": "Famista '91 (J)",
    "slug": "famista-91-j",
    "system": "nes",
    "romFile": "Famista '91 (J).zip",
    "img": true
  },
  {
    "id": 640,
    "title": "Famista '92 (J)",
    "slug": "famista-92-j",
    "system": "nes",
    "romFile": "Famista '92 (J).zip",
    "img": true
  },
  {
    "id": 641,
    "title": "Famista '93 (J)",
    "slug": "famista-93-j",
    "system": "nes",
    "romFile": "Famista '93 (J).zip",
    "img": true
  },
  {
    "id": 642,
    "title": "Famista '94 (J)",
    "slug": "famista-94-j",
    "system": "nes",
    "romFile": "Famista '94 (J).zip",
    "img": true
  },
  {
    "id": 643,
    "title": "Fantastic Adventures of Dizzy, The (U)",
    "slug": "fantastic-adventures-of-dizzy-the-u",
    "system": "nes",
    "romFile": "Fantastic Adventures of Dizzy, The (U).zip",
    "img": true
  },
  {
    "id": 644,
    "title": "Fantastic Adventures of Dizzy, The (UE, Aladdin)",
    "slug": "fantastic-adventures-of-dizzy-the-ue-aladdin",
    "system": "nes",
    "romFile": "Fantastic Adventures of Dizzy, The (UE) (Aladdin).zip",
    "img": true
  },
  {
    "id": 645,
    "title": "Fantasy Zone (J)",
    "slug": "fantasy-zone-j",
    "system": "nes",
    "romFile": "Fantasy Zone (J).zip",
    "img": true
  },
  {
    "id": 646,
    "title": "Fantasy Zone (U)",
    "slug": "fantasy-zone-u",
    "system": "nes",
    "romFile": "Fantasy Zone (U).zip",
    "img": true
  },
  {
    "id": 647,
    "title": "Fantasy Zone 2 - The Teardrop of Opa-Opa (J)",
    "slug": "fantasy-zone-2-the-teardrop-of-opa-opa-j",
    "system": "nes",
    "romFile": "Fantasy Zone 2 - The Teardrop of Opa-Opa (J).zip"
  },
  {
    "id": 648,
    "title": "Faria (J)",
    "slug": "faria-j",
    "system": "nes",
    "romFile": "Faria (J).zip",
    "img": true
  },
  {
    "id": 649,
    "title": "Faria - A World of Mystery and Danger! (U)",
    "slug": "faria-a-world-of-mystery-and-danger-u",
    "system": "nes",
    "romFile": "Faria - A World of Mystery and Danger! (U).zip"
  },
  {
    "id": 650,
    "title": "Fatal Fury 2 (As)",
    "slug": "fatal-fury-2-as",
    "system": "nes",
    "romFile": "Fatal Fury 2 (As).zip",
    "img": true
  },
  {
    "id": 651,
    "title": "Faxanadu (E)",
    "slug": "faxanadu-e",
    "system": "nes",
    "romFile": "Faxanadu (E).zip",
    "img": true
  },
  {
    "id": 652,
    "title": "Faxanadu (J)",
    "slug": "faxanadu-j",
    "system": "nes",
    "romFile": "Faxanadu (J).zip",
    "img": true
  },
  {
    "id": 653,
    "title": "Faxanadu (U)",
    "slug": "faxanadu-u",
    "system": "nes",
    "romFile": "Faxanadu (U).zip",
    "img": true
  },
  {
    "id": 654,
    "title": "Felix the Cat (U)",
    "slug": "felix-the-cat-u",
    "system": "nes",
    "romFile": "Felix the Cat (U).zip",
    "img": true
  },
  {
    "id": 655,
    "title": "Ferrari - Grand Prix Challenge (E)",
    "slug": "ferrari-grand-prix-challenge-e",
    "system": "nes",
    "romFile": "Ferrari - Grand Prix Challenge (E) [!].zip",
    "img": true
  },
  {
    "id": 656,
    "title": "Ferrari - Grand Prix Challenge (J)",
    "slug": "ferrari-grand-prix-challenge-j",
    "system": "nes",
    "romFile": "Ferrari - Grand Prix Challenge (J).zip",
    "img": true
  },
  {
    "id": 657,
    "title": "Ferrari - Grand Prix Challenge (U)",
    "slug": "ferrari-grand-prix-challenge-u",
    "system": "nes",
    "romFile": "Ferrari - Grand Prix Challenge (U) [!].zip",
    "img": true
  },
  {
    "id": 658,
    "title": "Fester's Quest (PC10)",
    "slug": "fester-s-quest-pc10",
    "system": "nes",
    "romFile": "Fester's Quest (PC10).zip",
    "img": true
  },
  {
    "id": 659,
    "title": "Fester's Quest (U, Prototype)",
    "slug": "fester-s-quest-u-prototype",
    "system": "nes",
    "romFile": "Fester's Quest (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 660,
    "title": "Fester's Quest (U)",
    "slug": "fester-s-quest-u",
    "system": "nes",
    "romFile": "Fester's Quest (U) [!].zip",
    "img": true
  },
  {
    "id": 661,
    "title": "Field Combat (J)",
    "slug": "field-combat-j",
    "system": "nes",
    "romFile": "Field Combat (J) [!].zip",
    "img": true
  },
  {
    "id": 662,
    "title": "Fighting Golf (J)",
    "slug": "fighting-golf-j",
    "system": "nes",
    "romFile": "Fighting Golf (J).zip",
    "img": true
  },
  {
    "id": 663,
    "title": "Fighting Road (J)",
    "slug": "fighting-road-j",
    "system": "nes",
    "romFile": "Fighting Road (J).zip",
    "img": true
  },
  {
    "id": 664,
    "title": "Final Fantasy (J)",
    "slug": "final-fantasy-j",
    "system": "nes",
    "romFile": "Final Fantasy (J).zip",
    "img": true
  },
  {
    "id": 665,
    "title": "Final Fantasy (U)",
    "slug": "final-fantasy-u",
    "system": "nes",
    "romFile": "Final Fantasy (U) [!].zip",
    "img": true
  },
  {
    "id": 666,
    "title": "Final Fantasy II (J)",
    "slug": "final-fantasy-ii-j",
    "system": "nes",
    "romFile": "Final Fantasy II (J).zip",
    "img": true
  },
  {
    "id": 667,
    "title": "Final Fantasy III (J)",
    "slug": "final-fantasy-iii-j",
    "system": "nes",
    "romFile": "Final Fantasy III (J).zip",
    "img": true
  },
  {
    "id": 668,
    "title": "Final Fantasy V (Unl)",
    "slug": "final-fantasy-v-unl",
    "system": "nes",
    "romFile": "Final Fantasy V (Unl).zip",
    "img": true
  },
  {
    "id": 669,
    "title": "Final Lap (J)",
    "slug": "final-lap-j",
    "system": "nes",
    "romFile": "Final Lap (J).zip",
    "img": true
  },
  {
    "id": 670,
    "title": "Final Mission (J)",
    "slug": "final-mission-j",
    "system": "nes",
    "romFile": "Final Mission (J).zip",
    "img": true
  },
  {
    "id": 671,
    "title": "Fire 'n Ice (U)",
    "slug": "fire-n-ice-u",
    "system": "nes",
    "romFile": "Fire 'n Ice (U).zip",
    "img": true
  },
  {
    "id": 672,
    "title": "Fire Emblem (J)",
    "slug": "fire-emblem-j",
    "system": "nes",
    "romFile": "Fire Emblem (J).zip",
    "img": true
  },
  {
    "id": 673,
    "title": "Fire Emblem Gaiden (J)",
    "slug": "fire-emblem-gaiden-j",
    "system": "nes",
    "romFile": "Fire Emblem Gaiden (J).zip",
    "img": true
  },
  {
    "id": 674,
    "title": "Firehouse Rescue (U)",
    "slug": "firehouse-rescue-u",
    "system": "nes",
    "romFile": "Firehouse Rescue (U).zip"
  },
  {
    "id": 675,
    "title": "Fist of the North Star (U)",
    "slug": "fist-of-the-north-star-u",
    "system": "nes",
    "romFile": "Fist of the North Star (U).zip",
    "img": true
  },
  {
    "id": 676,
    "title": "Flappy (J)",
    "slug": "flappy-j",
    "system": "nes",
    "romFile": "Flappy (J).zip",
    "img": true
  },
  {
    "id": 677,
    "title": "Fleet Commander (J)",
    "slug": "fleet-commander-j",
    "system": "nes",
    "romFile": "Fleet Commander (J).zip",
    "img": true
  },
  {
    "id": 678,
    "title": "Flight of the Intruder (U)",
    "slug": "flight-of-the-intruder-u",
    "system": "nes",
    "romFile": "Flight of the Intruder (U).zip",
    "img": true
  },
  {
    "id": 679,
    "title": "Flintstones, The - The Rescue of Dino & Hoppy (E)",
    "slug": "flintstones-the-the-rescue-of-dino-hoppy-e",
    "system": "nes",
    "romFile": "Flintstones, The - The Rescue of Dino & Hoppy (E).zip",
    "img": true
  },
  {
    "id": 680,
    "title": "Flintstones, The - The Rescue of Dino & Hoppy (J)",
    "slug": "flintstones-the-the-rescue-of-dino-hoppy-j",
    "system": "nes",
    "romFile": "Flintstones, The - The Rescue of Dino & Hoppy (J).zip",
    "img": true
  },
  {
    "id": 681,
    "title": "Flintstones, The - The Rescue of Dino & Hoppy (U)",
    "slug": "flintstones-the-the-rescue-of-dino-hoppy-u",
    "system": "nes",
    "romFile": "Flintstones, The - The Rescue of Dino & Hoppy (U).zip",
    "img": true
  },
  {
    "id": 682,
    "title": "Flintstones, The - The Surprise at Dinosaur Peak! (U)",
    "slug": "flintstones-the-the-surprise-at-dinosaur-peak-u",
    "system": "nes",
    "romFile": "Flintstones, The - The Surprise at Dinosaur Peak! (U).zip",
    "img": true
  },
  {
    "id": 683,
    "title": "Flipull - An Exciting Cube Game (J)",
    "slug": "flipull-an-exciting-cube-game-j",
    "system": "nes",
    "romFile": "Flipull - An Exciting Cube Game (J).zip",
    "img": true
  },
  {
    "id": 684,
    "title": "Flying Dragon - The Secret Scroll (U)",
    "slug": "flying-dragon-the-secret-scroll-u",
    "system": "nes",
    "romFile": "Flying Dragon - The Secret Scroll (U).zip",
    "img": true
  },
  {
    "id": 685,
    "title": "Flying Hero (J)",
    "slug": "flying-hero-j",
    "system": "nes",
    "romFile": "Flying Hero (J).zip",
    "img": true
  },
  {
    "id": 686,
    "title": "Flying Warriors (U)",
    "slug": "flying-warriors-u",
    "system": "nes",
    "romFile": "Flying Warriors (U).zip",
    "img": true
  },
  {
    "id": 687,
    "title": "Fong Shen Bang - Zhu Lu Zhi Zhan (As)",
    "slug": "fong-shen-bang-zhu-lu-zhi-zhan-as",
    "system": "nes",
    "romFile": "Fong Shen Bang - Zhu Lu Zhi Zhan (As).zip",
    "img": true
  },
  {
    "id": 688,
    "title": "Formation Z (J)",
    "slug": "formation-z-j",
    "system": "nes",
    "romFile": "Formation Z (J).zip",
    "img": true
  },
  {
    "id": 689,
    "title": "Formula 1 Sensation (E)",
    "slug": "formula-1-sensation-e",
    "system": "nes",
    "romFile": "Formula 1 Sensation (E) [!].zip",
    "img": true
  },
  {
    "id": 690,
    "title": "Formula One - Built To Win (U)",
    "slug": "formula-one-built-to-win-u",
    "system": "nes",
    "romFile": "Formula One - Built To Win (U) [!].zip",
    "img": true
  },
  {
    "id": 691,
    "title": "Foton - The Ultimate Game on Planet Earth (J)",
    "slug": "foton-the-ultimate-game-on-planet-earth-j",
    "system": "nes",
    "romFile": "Foton - The Ultimate Game on Planet Earth (J).zip",
    "img": true
  },
  {
    "id": 692,
    "title": "Four Players Tennis (E)",
    "slug": "four-players-tennis-e",
    "system": "nes",
    "romFile": "Four Players Tennis (E) [!].zip",
    "img": true
  },
  {
    "id": 693,
    "title": "Frankenstein - The Monster Returns (U)",
    "slug": "frankenstein-the-monster-returns-u",
    "system": "nes",
    "romFile": "Frankenstein - The Monster Returns (U).zip",
    "img": true
  },
  {
    "id": 694,
    "title": "Free Fall (U, Prototype)",
    "slug": "free-fall-u-prototype",
    "system": "nes",
    "romFile": "Free Fall (U) (Prototype) [!].zip",
    "img": true
  },
  {
    "id": 695,
    "title": "Freedom Force (U)",
    "slug": "freedom-force-u",
    "system": "nes",
    "romFile": "Freedom Force (U) [!].zip",
    "img": true
  },
  {
    "id": 696,
    "title": "Freedom Force (VS)",
    "slug": "freedom-force-vs",
    "system": "nes",
    "romFile": "Freedom Force (VS).zip",
    "img": true
  },
  {
    "id": 697,
    "title": "Friday the 13th (U)",
    "slug": "friday-the-13th-u",
    "system": "nes",
    "romFile": "Friday the 13th (U).zip",
    "img": true
  },
  {
    "id": 698,
    "title": "Front Line (J)",
    "slug": "front-line-j",
    "system": "nes",
    "romFile": "Front Line (J).zip",
    "img": true
  },
  {
    "id": 699,
    "title": "Fudou Myouou Den (J)",
    "slug": "fudou-myouou-den-j",
    "system": "nes",
    "romFile": "Fudou Myouou Den (J).zip",
    "img": true
  },
  {
    "id": 700,
    "title": "Fun House (U)",
    "slug": "fun-house-u",
    "system": "nes",
    "romFile": "Fun House (U).zip",
    "img": true
  },
  {
    "id": 701,
    "title": "Fushigi na Blobby - Blobania no Kiki (J)",
    "slug": "fushigi-na-blobby-blobania-no-kiki-j",
    "system": "nes",
    "romFile": "Fushigi na Blobby - Blobania no Kiki (J).zip",
    "img": true
  },
  {
    "id": 702,
    "title": "Fushigi no Umi no Nadia (J)",
    "slug": "fushigi-no-umi-no-nadia-j",
    "system": "nes",
    "romFile": "Fushigi no Umi no Nadia (J).zip",
    "img": true
  },
  {
    "id": 703,
    "title": "Fuzzical Fighter (J)",
    "slug": "fuzzical-fighter-j",
    "system": "nes",
    "romFile": "Fuzzical Fighter (J).zip",
    "img": true
  },
  {
    "id": 704,
    "title": "G.I. Joe (U)",
    "slug": "g-i-joe-u",
    "system": "nes",
    "romFile": "G.I. Joe (U).zip"
  },
  {
    "id": 705,
    "title": "G.I. Joe - The Atlantis Factor (U)",
    "slug": "g-i-joe-the-atlantis-factor-u",
    "system": "nes",
    "romFile": "G.I. Joe - The Atlantis Factor (U).zip",
    "img": true
  },
  {
    "id": 706,
    "title": "Galaga (E)",
    "slug": "galaga-e",
    "system": "nes",
    "romFile": "Galaga (E).zip",
    "img": true
  },
  {
    "id": 707,
    "title": "Galaga (J)",
    "slug": "galaga-j",
    "system": "nes",
    "romFile": "Galaga (J).zip",
    "img": true
  },
  {
    "id": 708,
    "title": "Galaga (U)",
    "slug": "galaga-u",
    "system": "nes",
    "romFile": "Galaga (U).zip",
    "img": true
  },
  {
    "id": 709,
    "title": "Galaxian (J)",
    "slug": "galaxian-j",
    "system": "nes",
    "romFile": "Galaxian (J).zip",
    "img": true
  },
  {
    "id": 710,
    "title": "Galaxy 5000 (E)",
    "slug": "galaxy-5000-e",
    "system": "nes",
    "romFile": "Galaxy 5000 (E).zip",
    "img": true
  },
  {
    "id": 711,
    "title": "Galaxy 5000 (U)",
    "slug": "galaxy-5000-u",
    "system": "nes",
    "romFile": "Galaxy 5000 (U).zip",
    "img": true
  },
  {
    "id": 712,
    "title": "Galg (J)",
    "slug": "galg-j",
    "system": "nes",
    "romFile": "Galg (J) [!].zip",
    "img": true
  },
  {
    "id": 713,
    "title": "Gambler Jiko Chuushin Ha - Mahjong Game (J)",
    "slug": "gambler-jiko-chuushin-ha-mahjong-game-j",
    "system": "nes",
    "romFile": "Gambler Jiko Chuushin Ha - Mahjong Game (J).zip",
    "img": true
  },
  {
    "id": 714,
    "title": "Gambler Jiko Chuushin Ha 2 (J)",
    "slug": "gambler-jiko-chuushin-ha-2-j",
    "system": "nes",
    "romFile": "Gambler Jiko Chuushin Ha 2 (J).zip",
    "img": true
  },
  {
    "id": 715,
    "title": "Game Party (J)",
    "slug": "game-party-j",
    "system": "nes",
    "romFile": "Game Party (J).zip",
    "img": true
  },
  {
    "id": 716,
    "title": "Ganbare Goemon 2 (J)",
    "slug": "ganbare-goemon-2-j",
    "system": "nes",
    "romFile": "Ganbare Goemon 2 (J).zip",
    "img": true
  },
  {
    "id": 717,
    "title": "Ganbare Goemon Gaiden - Kieta Ougon Kiseru (J)",
    "slug": "ganbare-goemon-gaiden-kieta-ougon-kiseru-j",
    "system": "nes",
    "romFile": "Ganbare Goemon Gaiden - Kieta Ougon Kiseru (J).zip",
    "img": true
  },
  {
    "id": 718,
    "title": "Ganbare Goemon Gaiden 2 - Tenka no Zaihou (J)",
    "slug": "ganbare-goemon-gaiden-2-tenka-no-zaihou-j",
    "system": "nes",
    "romFile": "Ganbare Goemon Gaiden 2 - Tenka no Zaihou (J).zip",
    "img": true
  },
  {
    "id": 719,
    "title": "Ganbare Goemon! - Karakuri Douchuu (J)",
    "slug": "ganbare-goemon-karakuri-douchuu-j",
    "system": "nes",
    "romFile": "Ganbare Goemon! - Karakuri Douchuu (J).zip",
    "img": true
  },
  {
    "id": 720,
    "title": "Ganbare Pennant Race! (J)",
    "slug": "ganbare-pennant-race-j",
    "system": "nes",
    "romFile": "Ganbare Pennant Race! (J).zip",
    "img": true
  },
  {
    "id": 721,
    "title": "Ganso Saiyuuki - Super Monkey Daibouken (J)",
    "slug": "ganso-saiyuuki-super-monkey-daibouken-j",
    "system": "nes",
    "romFile": "Ganso Saiyuuki - Super Monkey Daibouken (J).zip",
    "img": true
  },
  {
    "id": 722,
    "title": "Garfield - A Week of Garfield (J)",
    "slug": "garfield-a-week-of-garfield-j",
    "system": "nes",
    "romFile": "Garfield - A Week of Garfield (J).zip",
    "img": true
  },
  {
    "id": 723,
    "title": "Gargoyle's Quest II - The Demon Darkness (E)",
    "slug": "gargoyle-s-quest-ii-the-demon-darkness-e",
    "system": "nes",
    "romFile": "Gargoyle's Quest II - The Demon Darkness (E).zip"
  },
  {
    "id": 724,
    "title": "Gargoyle's Quest II - The Demon Darkness (U)",
    "slug": "gargoyle-s-quest-ii-the-demon-darkness-u",
    "system": "nes",
    "romFile": "Gargoyle's Quest II - The Demon Darkness (U).zip"
  },
  {
    "id": 725,
    "title": "Garou Densetsu Special (As)",
    "slug": "garou-densetsu-special-as",
    "system": "nes",
    "romFile": "Garou Densetsu Special (As).zip",
    "img": true
  },
  {
    "id": 726,
    "title": "Gauntlet (PC10)",
    "slug": "gauntlet-pc10",
    "system": "nes",
    "romFile": "Gauntlet (PC10).zip",
    "img": true
  },
  {
    "id": 727,
    "title": "Gauntlet (U)",
    "slug": "gauntlet-u",
    "system": "nes",
    "romFile": "Gauntlet (U) [!].zip",
    "img": true
  },
  {
    "id": 728,
    "title": "Gauntlet II (E)",
    "slug": "gauntlet-ii-e",
    "system": "nes",
    "romFile": "Gauntlet II (E).zip",
    "img": true
  },
  {
    "id": 729,
    "title": "Gauntlet II (U)",
    "slug": "gauntlet-ii-u",
    "system": "nes",
    "romFile": "Gauntlet II (U).zip",
    "img": true
  },
  {
    "id": 730,
    "title": "Gegege no Kitarou - Youkai Dai Makyou (J)",
    "slug": "gegege-no-kitarou-youkai-dai-makyou-j",
    "system": "nes",
    "romFile": "Gegege no Kitarou - Youkai Dai Makyou (J).zip",
    "img": true
  },
  {
    "id": 731,
    "title": "Gegege no Kitarou 2 - Youkai Gundan no Chousen (J)",
    "slug": "gegege-no-kitarou-2-youkai-gundan-no-chousen-j",
    "system": "nes",
    "romFile": "Gegege no Kitarou 2 - Youkai Gundan no Chousen (J).zip",
    "img": true
  },
  {
    "id": 732,
    "title": "Geimos (J)",
    "slug": "geimos-j",
    "system": "nes",
    "romFile": "Geimos (J).zip",
    "img": true
  },
  {
    "id": 733,
    "title": "Gekikame Ninja Den (J)",
    "slug": "gekikame-ninja-den-j",
    "system": "nes",
    "romFile": "Gekikame Ninja Den (J).zip",
    "img": true
  },
  {
    "id": 734,
    "title": "Gekitotsu Yonku Battle (J)",
    "slug": "gekitotsu-yonku-battle-j",
    "system": "nes",
    "romFile": "Gekitotsu Yonku Battle (J).zip",
    "img": true
  },
  {
    "id": 735,
    "title": "Gekitou Pro Wrestling!! - Toukon Densetsu (J)",
    "slug": "gekitou-pro-wrestling-toukon-densetsu-j",
    "system": "nes",
    "romFile": "Gekitou Pro Wrestling!! - Toukon Densetsu (J).zip",
    "img": true
  },
  {
    "id": 736,
    "title": "Gekitou Stadium!! (J)",
    "slug": "gekitou-stadium-j",
    "system": "nes",
    "romFile": "Gekitou Stadium!! (J).zip",
    "img": true
  },
  {
    "id": 737,
    "title": "Gemfire (U)",
    "slug": "gemfire-u",
    "system": "nes",
    "romFile": "Gemfire (U).zip",
    "img": true
  },
  {
    "id": 738,
    "title": "Genghis Khan (U)",
    "slug": "genghis-khan-u",
    "system": "nes",
    "romFile": "Genghis Khan (U).zip",
    "img": true
  },
  {
    "id": 739,
    "title": "Genpei Touma Den - Computer Boardgame (J)",
    "slug": "genpei-touma-den-computer-boardgame-j",
    "system": "nes",
    "romFile": "Genpei Touma Den - Computer Boardgame (J).zip",
    "img": true
  },
  {
    "id": 740,
    "title": "George Foreman's KO Boxing (U)",
    "slug": "george-foreman-s-ko-boxing-u",
    "system": "nes",
    "romFile": "George Foreman's KO Boxing (U).zip",
    "img": true
  },
  {
    "id": 741,
    "title": "Getsufuu Maden (J)",
    "slug": "getsufuu-maden-j",
    "system": "nes",
    "romFile": "Getsufuu Maden (J).zip",
    "img": true
  },
  {
    "id": 742,
    "title": "Ghostbusters (J)",
    "slug": "ghostbusters-j",
    "system": "nes",
    "romFile": "Ghostbusters (J).zip",
    "img": true
  },
  {
    "id": 743,
    "title": "Ghostbusters (U)",
    "slug": "ghostbusters-u",
    "system": "nes",
    "romFile": "Ghostbusters (U).zip",
    "img": true
  },
  {
    "id": 744,
    "title": "Ghostbusters 2 (E)",
    "slug": "ghostbusters-2-e",
    "system": "nes",
    "romFile": "Ghostbusters 2 (E) [!].zip",
    "img": true
  },
  {
    "id": 745,
    "title": "Ghostbusters 2 (U)",
    "slug": "ghostbusters-2-u",
    "system": "nes",
    "romFile": "Ghostbusters 2 (U).zip",
    "img": true
  },
  {
    "id": 746,
    "title": "Ghosts'n Goblins (E)",
    "slug": "ghosts-n-goblins-e",
    "system": "nes",
    "romFile": "Ghosts'n Goblins (E).zip",
    "img": true
  },
  {
    "id": 747,
    "title": "Ghosts'n Goblins (U)",
    "slug": "ghosts-n-goblins-u",
    "system": "nes",
    "romFile": "Ghosts'n Goblins (U) [!].zip",
    "img": true
  },
  {
    "id": 748,
    "title": "Ghoul School (U)",
    "slug": "ghoul-school-u",
    "system": "nes",
    "romFile": "Ghoul School (U).zip",
    "img": true
  },
  {
    "id": 749,
    "title": "Gilligan's Island (U)",
    "slug": "gilligan-s-island-u",
    "system": "nes",
    "romFile": "Gilligan's Island (U).zip"
  },
  {
    "id": 750,
    "title": "Gimmi a Break - Shijou Saikyou no Quiz Ou Ketteisen (J)",
    "slug": "gimmi-a-break-shijou-saikyou-no-quiz-ou-ketteisen-j",
    "system": "nes",
    "romFile": "Gimmi a Break - Shijou Saikyou no Quiz Ou Ketteisen (J).zip",
    "img": true
  },
  {
    "id": 751,
    "title": "Gimmi a Break - Shijou Saikyou no Quiz Ou Ketteisen 2 (J)",
    "slug": "gimmi-a-break-shijou-saikyou-no-quiz-ou-ketteisen-2-j",
    "system": "nes",
    "romFile": "Gimmi a Break - Shijou Saikyou no Quiz Ou Ketteisen 2 (J).zip",
    "img": true
  },
  {
    "id": 752,
    "title": "Gimmick! (J)",
    "slug": "gimmick-j",
    "system": "nes",
    "romFile": "Gimmick! (J).zip",
    "img": true
  },
  {
    "id": 753,
    "title": "Ginga Eiyuu Densetsu (J)",
    "slug": "ginga-eiyuu-densetsu-j",
    "system": "nes",
    "romFile": "Ginga Eiyuu Densetsu (J).zip",
    "img": true
  },
  {
    "id": 754,
    "title": "Ginga no Sannin (J)",
    "slug": "ginga-no-sannin-j",
    "system": "nes",
    "romFile": "Ginga no Sannin (J).zip",
    "img": true
  },
  {
    "id": 755,
    "title": "Goal! (E)",
    "slug": "goal-e",
    "system": "nes",
    "romFile": "Goal! (E).zip",
    "img": true
  },
  {
    "id": 756,
    "title": "Goal! (U)",
    "slug": "goal-u",
    "system": "nes",
    "romFile": "Goal! (U).zip",
    "img": true
  },
  {
    "id": 757,
    "title": "Goal! 2 (E)",
    "slug": "goal-2-e",
    "system": "nes",
    "romFile": "Goal! 2 (E).zip",
    "img": true
  },
  {
    "id": 758,
    "title": "Goal! Two (U)",
    "slug": "goal-two-u",
    "system": "nes",
    "romFile": "Goal! Two (U).zip",
    "img": true
  },
  {
    "id": 759,
    "title": "Goal!! (J)",
    "slug": "goal-j",
    "system": "nes",
    "romFile": "Goal!! (J).zip",
    "img": true
  },
  {
    "id": 760,
    "title": "God Slayer - Haruka Tenkuu no Sonata (J)",
    "slug": "god-slayer-haruka-tenkuu-no-sonata-j",
    "system": "nes",
    "romFile": "God Slayer - Haruka Tenkuu no Sonata (J).zip",
    "img": true
  },
  {
    "id": 761,
    "title": "Godzilla (J)",
    "slug": "godzilla-j",
    "system": "nes",
    "romFile": "Godzilla (J).zip",
    "img": true
  },
  {
    "id": 762,
    "title": "Godzilla - Monster of Monsters! (E)",
    "slug": "godzilla-monster-of-monsters-e",
    "system": "nes",
    "romFile": "Godzilla - Monster of Monsters! (E).zip",
    "img": true
  },
  {
    "id": 763,
    "title": "Godzilla - Monster of Monsters! (U)",
    "slug": "godzilla-monster-of-monsters-u",
    "system": "nes",
    "romFile": "Godzilla - Monster of Monsters! (U).zip",
    "img": true
  },
  {
    "id": 764,
    "title": "Godzilla 2 - War of the Monsters (U)",
    "slug": "godzilla-2-war-of-the-monsters-u",
    "system": "nes",
    "romFile": "Godzilla 2 - War of the Monsters (U).zip",
    "img": true
  },
  {
    "id": 765,
    "title": "Gold Medal Challenge '92 (U)",
    "slug": "gold-medal-challenge-92-u",
    "system": "nes",
    "romFile": "Gold Medal Challenge '92 (U).zip"
  },
  {
    "id": 766,
    "title": "Golf '92, The (J)",
    "slug": "golf-92-the-j",
    "system": "nes",
    "romFile": "Golf '92, The (J).zip",
    "img": true
  },
  {
    "id": 767,
    "title": "Golf (E)",
    "slug": "golf-e",
    "system": "nes",
    "romFile": "Golf (E).zip",
    "img": true
  },
  {
    "id": 768,
    "title": "Golf (GC)",
    "slug": "golf-gc",
    "system": "nes",
    "romFile": "Golf (GC).zip",
    "img": true
  },
  {
    "id": 769,
    "title": "Golf (JU)",
    "slug": "golf-ju",
    "system": "nes",
    "romFile": "Golf (JU).zip",
    "img": true
  },
  {
    "id": 770,
    "title": "Golf (PC10)",
    "slug": "golf-pc10",
    "system": "nes",
    "romFile": "Golf (PC10).zip",
    "img": true
  },
  {
    "id": 771,
    "title": "Golf (VS)",
    "slug": "golf-vs",
    "system": "nes",
    "romFile": "Golf (VS).zip",
    "img": true
  },
  {
    "id": 772,
    "title": "Golf Club - Birdy Rush (J)",
    "slug": "golf-club-birdy-rush-j",
    "system": "nes",
    "romFile": "Golf Club - Birdy Rush (J).zip",
    "img": true
  },
  {
    "id": 773,
    "title": "Golf Grand Slam (J)",
    "slug": "golf-grand-slam-j",
    "system": "nes",
    "romFile": "Golf Grand Slam (J).zip",
    "img": true
  },
  {
    "id": 774,
    "title": "Golf Grand Slam (U)",
    "slug": "golf-grand-slam-u",
    "system": "nes",
    "romFile": "Golf Grand Slam (U).zip",
    "img": true
  },
  {
    "id": 775,
    "title": "Golf Ko Open (J)",
    "slug": "golf-ko-open-j",
    "system": "nes",
    "romFile": "Golf Ko Open (J).zip",
    "img": true
  },
  {
    "id": 776,
    "title": "Golgo 13 - Dai 1 Shou - Kamigami no Tasogare (J)",
    "slug": "golgo-13-dai-1-shou-kamigami-no-tasogare-j",
    "system": "nes",
    "romFile": "Golgo 13 - Dai 1 Shou - Kamigami no Tasogare (J).zip",
    "img": true
  },
  {
    "id": 777,
    "title": "Golgo 13 - The Riddle of Icarus (J)",
    "slug": "golgo-13-the-riddle-of-icarus-j",
    "system": "nes",
    "romFile": "Golgo 13 - The Riddle of Icarus (J).zip",
    "img": true
  },
  {
    "id": 778,
    "title": "Golgo 13 - Top Secret Episode (U)",
    "slug": "golgo-13-top-secret-episode-u",
    "system": "nes",
    "romFile": "Golgo 13 - Top Secret Episode (U).zip",
    "img": true
  },
  {
    "id": 779,
    "title": "Gomoku Narabe (J)",
    "slug": "gomoku-narabe-j",
    "system": "nes",
    "romFile": "Gomoku Narabe (J).zip",
    "img": true
  },
  {
    "id": 780,
    "title": "Goonies II, The (E)",
    "slug": "goonies-ii-the-e",
    "system": "nes",
    "romFile": "Goonies II, The (E).zip",
    "img": true
  },
  {
    "id": 781,
    "title": "Goonies II, The (U)",
    "slug": "goonies-ii-the-u",
    "system": "nes",
    "romFile": "Goonies II, The (U).zip",
    "img": true
  },
  {
    "id": 782,
    "title": "Goonies II, The - Fratelli Saigo no Chousen (J, Prototype)",
    "slug": "goonies-ii-the-fratelli-saigo-no-chousen-j-prototype",
    "system": "nes",
    "romFile": "Goonies II, The - Fratelli Saigo no Chousen (J) (Prototype).zip",
    "img": true
  },
  {
    "id": 783,
    "title": "Goonies II, The - Fratelli Saigo no Chousen (J)",
    "slug": "goonies-ii-the-fratelli-saigo-no-chousen-j",
    "system": "nes",
    "romFile": "Goonies II, The - Fratelli Saigo no Chousen (J).zip",
    "img": true
  },
  {
    "id": 784,
    "title": "Goonies, The (J)",
    "slug": "goonies-the-j",
    "system": "nes",
    "romFile": "Goonies, The (J).zip",
    "img": true
  },
  {
    "id": 785,
    "title": "Goonies, The (PC10)",
    "slug": "goonies-the-pc10",
    "system": "nes",
    "romFile": "Goonies, The (PC10).zip",
    "img": true
  },
  {
    "id": 786,
    "title": "Gorby no Pipeline Daisakusen (J)",
    "slug": "gorby-no-pipeline-daisakusen-j",
    "system": "nes",
    "romFile": "Gorby no Pipeline Daisakusen (J).zip",
    "img": true
  },
  {
    "id": 787,
    "title": "Gorilla Man, The (J)",
    "slug": "gorilla-man-the-j",
    "system": "nes",
    "romFile": "Gorilla Man, The (J).zip",
    "img": true
  },
  {
    "id": 788,
    "title": "Gotcha! - The Sport! (U)",
    "slug": "gotcha-the-sport-u",
    "system": "nes",
    "romFile": "Gotcha! - The Sport! (U).zip",
    "img": true
  },
  {
    "id": 789,
    "title": "Gozonji - Yaji Kita Chin Douchuu (J)",
    "slug": "gozonji-yaji-kita-chin-douchuu-j",
    "system": "nes",
    "romFile": "Gozonji - Yaji Kita Chin Douchuu (J).zip",
    "img": true
  },
  {
    "id": 790,
    "title": "Gradius (ArchiMENdes Hen, J)",
    "slug": "gradius-archimendes-hen-j",
    "system": "nes",
    "romFile": "Gradius (ArchiMENdes Hen) (J).zip",
    "img": true
  },
  {
    "id": 791,
    "title": "Gradius (E)",
    "slug": "gradius-e",
    "system": "nes",
    "romFile": "Gradius (E).zip",
    "img": true
  },
  {
    "id": 792,
    "title": "Gradius (J)",
    "slug": "gradius-j",
    "system": "nes",
    "romFile": "Gradius (J).zip",
    "img": true
  },
  {
    "id": 793,
    "title": "Gradius (PC10)",
    "slug": "gradius-pc10",
    "system": "nes",
    "romFile": "Gradius (PC10).zip",
    "img": true
  },
  {
    "id": 794,
    "title": "Gradius (U)",
    "slug": "gradius-u",
    "system": "nes",
    "romFile": "Gradius (U).zip",
    "img": true
  },
  {
    "id": 795,
    "title": "Gradius (VS)",
    "slug": "gradius-vs",
    "system": "nes",
    "romFile": "Gradius (VS).zip",
    "img": true
  },
  {
    "id": 796,
    "title": "Gradius II (J)",
    "slug": "gradius-ii-j",
    "system": "nes",
    "romFile": "Gradius II (J).zip",
    "img": true
  },
  {
    "id": 797,
    "title": "Grand Master (J)",
    "slug": "grand-master-j",
    "system": "nes",
    "romFile": "Grand Master (J).zip",
    "img": true
  },
  {
    "id": 798,
    "title": "Great Battle Cyber (J)",
    "slug": "great-battle-cyber-j",
    "system": "nes",
    "romFile": "Great Battle Cyber (J).zip",
    "img": true
  },
  {
    "id": 799,
    "title": "Great Boxing - Rush Up (J)",
    "slug": "great-boxing-rush-up-j",
    "system": "nes",
    "romFile": "Great Boxing - Rush Up (J).zip",
    "img": true
  },
  {
    "id": 800,
    "title": "Great Deal (J)",
    "slug": "great-deal-j",
    "system": "nes",
    "romFile": "Great Deal (J).zip",
    "img": true
  },
  {
    "id": 801,
    "title": "Great Tank (J)",
    "slug": "great-tank-j",
    "system": "nes",
    "romFile": "Great Tank (J).zip",
    "img": true
  },
  {
    "id": 802,
    "title": "Great Waldo Search, The (U)",
    "slug": "great-waldo-search-the-u",
    "system": "nes",
    "romFile": "Great Waldo Search, The (U).zip",
    "img": true
  },
  {
    "id": 803,
    "title": "Greg Norman's Golf Power (U)",
    "slug": "greg-norman-s-golf-power-u",
    "system": "nes",
    "romFile": "Greg Norman's Golf Power (U).zip",
    "img": true
  },
  {
    "id": 804,
    "title": "Gremlin 2 - Shinshu Tanjou (J)",
    "slug": "gremlin-2-shinshu-tanjou-j",
    "system": "nes",
    "romFile": "Gremlin 2 - Shinshu Tanjou (J).zip",
    "img": true
  },
  {
    "id": 805,
    "title": "Gremlins 2 - The New Batch (E)",
    "slug": "gremlins-2-the-new-batch-e",
    "system": "nes",
    "romFile": "Gremlins 2 - The New Batch (E) [!].zip",
    "img": true
  },
  {
    "id": 806,
    "title": "Gremlins 2 - The New Batch (U)",
    "slug": "gremlins-2-the-new-batch-u",
    "system": "nes",
    "romFile": "Gremlins 2 - The New Batch (U).zip",
    "img": true
  },
  {
    "id": 807,
    "title": "Gryzor (J)",
    "slug": "gryzor-j",
    "system": "nes",
    "romFile": "Gryzor (J).zip"
  },
  {
    "id": 808,
    "title": "Guardian Legend, The (U)",
    "slug": "guardian-legend-the-u",
    "system": "nes",
    "romFile": "Guardian Legend, The (U).zip",
    "img": true
  },
  {
    "id": 809,
    "title": "Guardic Gaiden (J)",
    "slug": "guardic-gaiden-j",
    "system": "nes",
    "romFile": "Guardic Gaiden (J).zip",
    "img": true
  },
  {
    "id": 810,
    "title": "Guerrilla War (U)",
    "slug": "guerrilla-war-u",
    "system": "nes",
    "romFile": "Guerrilla War (U).zip",
    "img": true
  },
  {
    "id": 811,
    "title": "Guevara (J)",
    "slug": "guevara-j",
    "system": "nes",
    "romFile": "Guevara (J).zip",
    "img": true
  },
  {
    "id": 812,
    "title": "Gumshoe (UE)",
    "slug": "gumshoe-ue",
    "system": "nes",
    "romFile": "Gumshoe (UE).zip",
    "img": true
  },
  {
    "id": 813,
    "title": "Gun Hed (J)",
    "slug": "gun-hed-j",
    "system": "nes",
    "romFile": "Gun Hed (J).zip",
    "img": true
  },
  {
    "id": 814,
    "title": "Gun Nac (J)",
    "slug": "gun-nac-j",
    "system": "nes",
    "romFile": "Gun Nac (J).zip",
    "img": true
  },
  {
    "id": 815,
    "title": "Gun Nac (U)",
    "slug": "gun-nac-u",
    "system": "nes",
    "romFile": "Gun Nac (U).zip",
    "img": true
  },
  {
    "id": 816,
    "title": "Gun Sight (J)",
    "slug": "gun-sight-j",
    "system": "nes",
    "romFile": "Gun Sight (J).zip",
    "img": true
  },
  {
    "id": 817,
    "title": "Gun-Dec (J)",
    "slug": "gun-dec-j",
    "system": "nes",
    "romFile": "Gun-Dec (J).zip",
    "img": true
  },
  {
    "id": 818,
    "title": "Gun.Smoke (E)",
    "slug": "gun-smoke-e",
    "system": "nes",
    "romFile": "Gun.Smoke (E).zip",
    "img": true
  },
  {
    "id": 819,
    "title": "Gun.Smoke (U)",
    "slug": "gun-smoke-u",
    "system": "nes",
    "romFile": "Gun.Smoke (U).zip",
    "img": true
  },
  {
    "id": 820,
    "title": "Gyrodine (J)",
    "slug": "gyrodine-j",
    "system": "nes",
    "romFile": "Gyrodine (J).zip",
    "img": true
  },
  {
    "id": 821,
    "title": "Gyromite (JUE)",
    "slug": "gyromite-jue",
    "system": "nes",
    "romFile": "Gyromite (JUE).zip",
    "img": true
  },
  {
    "id": 822,
    "title": "Gyruss (U)",
    "slug": "gyruss-u",
    "system": "nes",
    "romFile": "Gyruss (U).zip",
    "img": true
  },
  {
    "id": 823,
    "title": "HES 6-in-1 (A)",
    "slug": "hes-6-in-1-a",
    "system": "nes",
    "romFile": "HES 6-in-1 (A).zip",
    "img": true
  },
  {
    "id": 824,
    "title": "Haja no Fuuin (J)",
    "slug": "haja-no-fuuin-j",
    "system": "nes",
    "romFile": "Haja no Fuuin (J).zip",
    "img": true
  },
  {
    "id": 825,
    "title": "Hammerin' Harry (E)",
    "slug": "hammerin-harry-e",
    "system": "nes",
    "romFile": "Hammerin' Harry (E) [!].zip",
    "img": true
  },
  {
    "id": 826,
    "title": "Hana no Star Kaidou (J)",
    "slug": "hana-no-star-kaidou-j",
    "system": "nes",
    "romFile": "Hana no Star Kaidou (J).zip",
    "img": true
  },
  {
    "id": 827,
    "title": "Hanafuda Yuukyou Den - Nagarebana Oryuu (J)",
    "slug": "hanafuda-yuukyou-den-nagarebana-oryuu-j",
    "system": "nes",
    "romFile": "Hanafuda Yuukyou Den - Nagarebana Oryuu (J).zip",
    "img": true
  },
  {
    "id": 828,
    "title": "Hanjuku Eiyuu (J)",
    "slug": "hanjuku-eiyuu-j",
    "system": "nes",
    "romFile": "Hanjuku Eiyuu (J).zip"
  },
  {
    "id": 829,
    "title": "Happy Birthday Bugs (J)",
    "slug": "happy-birthday-bugs-j",
    "system": "nes",
    "romFile": "Happy Birthday Bugs (J).zip",
    "img": true
  },
  {
    "id": 830,
    "title": "Harlem Globetrotters (U)",
    "slug": "harlem-globetrotters-u",
    "system": "nes",
    "romFile": "Harlem Globetrotters (U).zip",
    "img": true
  },
  {
    "id": 831,
    "title": "Hatris (J)",
    "slug": "hatris-j",
    "system": "nes",
    "romFile": "Hatris (J).zip",
    "img": true
  },
  {
    "id": 832,
    "title": "Hatris (U)",
    "slug": "hatris-u",
    "system": "nes",
    "romFile": "Hatris (U).zip",
    "img": true
  },
  {
    "id": 833,
    "title": "Hayauchi Super Igo (J)",
    "slug": "hayauchi-super-igo-j",
    "system": "nes",
    "romFile": "Hayauchi Super Igo (J).zip",
    "img": true
  },
  {
    "id": 834,
    "title": "Heavy Barrel (J)",
    "slug": "heavy-barrel-j",
    "system": "nes",
    "romFile": "Heavy Barrel (J).zip",
    "img": true
  },
  {
    "id": 835,
    "title": "Heavy Barrel (U)",
    "slug": "heavy-barrel-u",
    "system": "nes",
    "romFile": "Heavy Barrel (U).zip",
    "img": true
  },
  {
    "id": 836,
    "title": "Heavy Shreddin' (U)",
    "slug": "heavy-shreddin-u",
    "system": "nes",
    "romFile": "Heavy Shreddin' (U).zip",
    "img": true
  },
  {
    "id": 837,
    "title": "Hebereke (J)",
    "slug": "hebereke-j",
    "system": "nes",
    "romFile": "Hebereke (J).zip",
    "img": true
  },
  {
    "id": 838,
    "title": "Hector 87 (J)",
    "slug": "hector-87-j",
    "system": "nes",
    "romFile": "Hector 87 (J).zip",
    "img": true
  },
  {
    "id": 839,
    "title": "Heisei Tensai Bakabon (J)",
    "slug": "heisei-tensai-bakabon-j",
    "system": "nes",
    "romFile": "Heisei Tensai Bakabon (J).zip",
    "img": true
  },
  {
    "id": 840,
    "title": "Hello Kitty World (J)",
    "slug": "hello-kitty-world-j",
    "system": "nes",
    "romFile": "Hello Kitty World (J).zip",
    "img": true
  },
  {
    "id": 841,
    "title": "Hello Kitty no Ohanabatake (J)",
    "slug": "hello-kitty-no-ohanabatake-j",
    "system": "nes",
    "romFile": "Hello Kitty no Ohanabatake (J).zip",
    "img": true
  },
  {
    "id": 842,
    "title": "Herakles no Eikou - Toujin Makyou Den (J)",
    "slug": "herakles-no-eikou-toujin-makyou-den-j",
    "system": "nes",
    "romFile": "Herakles no Eikou - Toujin Makyou Den (J).zip",
    "img": true
  },
  {
    "id": 843,
    "title": "Herakles no Eikou 2 - Titan no Metsubou (J)",
    "slug": "herakles-no-eikou-2-titan-no-metsubou-j",
    "system": "nes",
    "romFile": "Herakles no Eikou 2 - Titan no Metsubou (J).zip",
    "img": true
  },
  {
    "id": 844,
    "title": "Hero Quest (U, Prototype)",
    "slug": "hero-quest-u-prototype",
    "system": "nes",
    "romFile": "Hero Quest (U) (Prototype) [!].zip",
    "img": true
  },
  {
    "id": 845,
    "title": "Hi no Tori - Houou Hen - Gaou no Bouken (J)",
    "slug": "hi-no-tori-houou-hen-gaou-no-bouken-j",
    "system": "nes",
    "romFile": "Hi no Tori - Houou Hen - Gaou no Bouken (J).zip"
  },
  {
    "id": 846,
    "title": "Higemaru Makaijima - Nanatsu no Shima Daibouken (J)",
    "slug": "higemaru-makaijima-nanatsu-no-shima-daibouken-j",
    "system": "nes",
    "romFile": "Higemaru Makaijima - Nanatsu no Shima Daibouken (J).zip",
    "img": true
  },
  {
    "id": 847,
    "title": "High Speed (U)",
    "slug": "high-speed-u",
    "system": "nes",
    "romFile": "High Speed (U).zip",
    "img": true
  },
  {
    "id": 848,
    "title": "Highway Star (J)",
    "slug": "highway-star-j",
    "system": "nes",
    "romFile": "Highway Star (J).zip",
    "img": true
  },
  {
    "id": 849,
    "title": "Hirake! Ponkikki (J)",
    "slug": "hirake-ponkikki-j",
    "system": "nes",
    "romFile": "Hirake! Ponkikki (J).zip",
    "img": true
  },
  {
    "id": 850,
    "title": "Hiryuu no Ken - Ougi no Shou (J)",
    "slug": "hiryuu-no-ken-ougi-no-shou-j",
    "system": "nes",
    "romFile": "Hiryuu no Ken - Ougi no Shou (J).zip"
  },
  {
    "id": 851,
    "title": "Hiryuu no Ken II - Dragon no Tsubasa (J)",
    "slug": "hiryuu-no-ken-ii-dragon-no-tsubasa-j",
    "system": "nes",
    "romFile": "Hiryuu no Ken II - Dragon no Tsubasa (J).zip",
    "img": true
  },
  {
    "id": 852,
    "title": "Hiryuu no Ken III - 5 Nin no Ryuu Senshi (J)",
    "slug": "hiryuu-no-ken-iii-5-nin-no-ryuu-senshi-j",
    "system": "nes",
    "romFile": "Hiryuu no Ken III - 5 Nin no Ryuu Senshi (J).zip",
    "img": true
  },
  {
    "id": 853,
    "title": "Hiryuu no Ken Special - Fighting Wars (J)",
    "slug": "hiryuu-no-ken-special-fighting-wars-j",
    "system": "nes",
    "romFile": "Hiryuu no Ken Special - Fighting Wars (J).zip",
    "img": true
  },
  {
    "id": 854,
    "title": "Hissatsu Doujou Yaburi (J)",
    "slug": "hissatsu-doujou-yaburi-j",
    "system": "nes",
    "romFile": "Hissatsu Doujou Yaburi (J).zip",
    "img": true
  },
  {
    "id": 855,
    "title": "Hissatsu Shigoto Nin (J)",
    "slug": "hissatsu-shigoto-nin-j",
    "system": "nes",
    "romFile": "Hissatsu Shigoto Nin (J).zip",
    "img": true
  },
  {
    "id": 856,
    "title": "Hitler no Fukkatsu - Top Secret (J)",
    "slug": "hitler-no-fukkatsu-top-secret-j",
    "system": "nes",
    "romFile": "Hitler no Fukkatsu - Top Secret (J).zip",
    "img": true
  },
  {
    "id": 857,
    "title": "Hogan's Alley (JU)",
    "slug": "hogan-s-alley-ju",
    "system": "nes",
    "romFile": "Hogan's Alley (JU) [!].zip",
    "img": true
  },
  {
    "id": 858,
    "title": "Hogan's Alley (PC10)",
    "slug": "hogan-s-alley-pc10",
    "system": "nes",
    "romFile": "Hogan's Alley (PC10).zip",
    "img": true
  },
  {
    "id": 859,
    "title": "Hogan's Alley (VS)",
    "slug": "hogan-s-alley-vs",
    "system": "nes",
    "romFile": "Hogan's Alley (VS).zip",
    "img": true
  },
  {
    "id": 860,
    "title": "Hokkaidou Rensa Satsujin - Ohotsuku ni Kiyu (J)",
    "slug": "hokkaidou-rensa-satsujin-ohotsuku-ni-kiyu-j",
    "system": "nes",
    "romFile": "Hokkaidou Rensa Satsujin - Ohotsuku ni Kiyu (J).zip"
  },
  {
    "id": 861,
    "title": "Hokuto no Ken (J)",
    "slug": "hokuto-no-ken-j",
    "system": "nes",
    "romFile": "Hokuto no Ken (J).zip",
    "img": true
  },
  {
    "id": 862,
    "title": "Hokuto no Ken 2 - Seikimatsu Kyuuseishu Densetsu (J)",
    "slug": "hokuto-no-ken-2-seikimatsu-kyuuseishu-densetsu-j",
    "system": "nes",
    "romFile": "Hokuto no Ken 2 - Seikimatsu Kyuuseishu Densetsu (J).zip",
    "img": true
  },
  {
    "id": 863,
    "title": "Hokuto no Ken 3 - Shin Seiki Souzou Seiken Restuden (J)",
    "slug": "hokuto-no-ken-3-shin-seiki-souzou-seiken-restuden-j",
    "system": "nes",
    "romFile": "Hokuto no Ken 3 - Shin Seiki Souzou Seiken Restuden (J).zip",
    "img": true
  },
  {
    "id": 864,
    "title": "Hokuto no Ken 4 - Shichisei Haken Den - Hokuto Shinken no Kanata he (J)",
    "slug": "hokuto-no-ken-4-shichisei-haken-den-hokuto-shinken-no-kanata-he-j",
    "system": "nes",
    "romFile": "Hokuto no Ken 4 - Shichisei Haken Den - Hokuto Shinken no Kanata he (J).zip",
    "img": true
  },
  {
    "id": 865,
    "title": "Hollywood Squares (U)",
    "slug": "hollywood-squares-u",
    "system": "nes",
    "romFile": "Hollywood Squares (U).zip",
    "img": true
  },
  {
    "id": 866,
    "title": "Holy Diver (J)",
    "slug": "holy-diver-j",
    "system": "nes",
    "romFile": "Holy Diver (J).zip",
    "img": true
  },
  {
    "id": 867,
    "title": "Home Alone (U)",
    "slug": "home-alone-u",
    "system": "nes",
    "romFile": "Home Alone (U) [!].zip",
    "img": true
  },
  {
    "id": 868,
    "title": "Home Alone 2 - Lost in New York (U)",
    "slug": "home-alone-2-lost-in-new-york-u",
    "system": "nes",
    "romFile": "Home Alone 2 - Lost in New York (U).zip",
    "img": true
  },
  {
    "id": 869,
    "title": "Home Run Nighter '90 - The Pennant League (J)",
    "slug": "home-run-nighter-90-the-pennant-league-j",
    "system": "nes",
    "romFile": "Home Run Nighter '90 - The Pennant League (J).zip",
    "img": true
  },
  {
    "id": 870,
    "title": "Home Run Nighter - Pennant League!! (J)",
    "slug": "home-run-nighter-pennant-league-j",
    "system": "nes",
    "romFile": "Home Run Nighter - Pennant League!! (J).zip",
    "img": true
  },
  {
    "id": 871,
    "title": "Honey (As)",
    "slug": "honey-as",
    "system": "nes",
    "romFile": "Honey (As).zip"
  },
  {
    "id": 872,
    "title": "Honoo no Doukyuuji - Dodge Danpei (J)",
    "slug": "honoo-no-doukyuuji-dodge-danpei-j",
    "system": "nes",
    "romFile": "Honoo no Doukyuuji - Dodge Danpei (J).zip",
    "img": true
  },
  {
    "id": 873,
    "title": "Honoo no Doukyuuji - Dodge Danpei 2 (J)",
    "slug": "honoo-no-doukyuuji-dodge-danpei-2-j",
    "system": "nes",
    "romFile": "Honoo no Doukyuuji - Dodge Danpei 2 (J).zip",
    "img": true
  },
  {
    "id": 874,
    "title": "Hook (E)",
    "slug": "hook-e",
    "system": "nes",
    "romFile": "Hook (E).zip",
    "img": true
  },
  {
    "id": 875,
    "title": "Hook (J)",
    "slug": "hook-j",
    "system": "nes",
    "romFile": "Hook (J).zip",
    "img": true
  },
  {
    "id": 876,
    "title": "Hook (U)",
    "slug": "hook-u",
    "system": "nes",
    "romFile": "Hook (U).zip",
    "img": true
  },
  {
    "id": 877,
    "title": "Hoops (U)",
    "slug": "hoops-u",
    "system": "nes",
    "romFile": "Hoops (U).zip",
    "img": true
  },
  {
    "id": 878,
    "title": "Hoshi no Kirby - Yume no Izumi no Monogatari (J)",
    "slug": "hoshi-no-kirby-yume-no-izumi-no-monogatari-j",
    "system": "nes",
    "romFile": "Hoshi no Kirby - Yume no Izumi no Monogatari (J).zip",
    "img": true
  },
  {
    "id": 879,
    "title": "Hoshi o Miru Hito (J)",
    "slug": "hoshi-o-miru-hito-j",
    "system": "nes",
    "romFile": "Hoshi o Miru Hito (J).zip",
    "img": true
  },
  {
    "id": 880,
    "title": "Hostages - The Embassy Mission (J)",
    "slug": "hostages-the-embassy-mission-j",
    "system": "nes",
    "romFile": "Hostages - The Embassy Mission (J).zip",
    "img": true
  },
  {
    "id": 881,
    "title": "Hot Slot (UE)",
    "slug": "hot-slot-ue",
    "system": "nes",
    "romFile": "Hot Slot (UE).zip",
    "img": true
  },
  {
    "id": 882,
    "title": "Hototogisu (J)",
    "slug": "hototogisu-j",
    "system": "nes",
    "romFile": "Hototogisu (J).zip",
    "img": true
  },
  {
    "id": 883,
    "title": "Hottaaman no Chitei Tanken (J)",
    "slug": "hottaaman-no-chitei-tanken-j",
    "system": "nes",
    "romFile": "Hottaaman no Chitei Tanken (J).zip"
  },
  {
    "id": 884,
    "title": "Houma ga Toki (J)",
    "slug": "houma-ga-toki-j",
    "system": "nes",
    "romFile": "Houma ga Toki (J).zip",
    "img": true
  },
  {
    "id": 885,
    "title": "Huang Di (As)",
    "slug": "huang-di-as",
    "system": "nes",
    "romFile": "Huang Di (As).zip",
    "img": true
  },
  {
    "id": 886,
    "title": "Hudson Hawk (J)",
    "slug": "hudson-hawk-j",
    "system": "nes",
    "romFile": "Hudson Hawk (J).zip",
    "img": true
  },
  {
    "id": 887,
    "title": "Hudson Hawk (U)",
    "slug": "hudson-hawk-u",
    "system": "nes",
    "romFile": "Hudson Hawk (U).zip",
    "img": true
  },
  {
    "id": 888,
    "title": "Hudson's Adventure Island (E)",
    "slug": "hudson-s-adventure-island-e",
    "system": "nes",
    "romFile": "Hudson's Adventure Island (E) [!].zip",
    "img": true
  },
  {
    "id": 889,
    "title": "Hudson's Adventure Island (U)",
    "slug": "hudson-s-adventure-island-u",
    "system": "nes",
    "romFile": "Hudson's Adventure Island (U).zip",
    "img": true
  },
  {
    "id": 890,
    "title": "Hudson's Adventure Island II (E)",
    "slug": "hudson-s-adventure-island-ii-e",
    "system": "nes",
    "romFile": "Hudson's Adventure Island II (E).zip",
    "img": true
  },
  {
    "id": 891,
    "title": "Hudson's Adventure Island II (U)",
    "slug": "hudson-s-adventure-island-ii-u",
    "system": "nes",
    "romFile": "Hudson's Adventure Island II (U).zip",
    "img": true
  },
  {
    "id": 892,
    "title": "Hudson's Adventure Island III (U)",
    "slug": "hudson-s-adventure-island-iii-u",
    "system": "nes",
    "romFile": "Hudson's Adventure Island III (U).zip"
  },
  {
    "id": 893,
    "title": "Hunt for Red October, The (E)",
    "slug": "hunt-for-red-october-the-e",
    "system": "nes",
    "romFile": "Hunt for Red October, The (E) [!].zip",
    "img": true
  },
  {
    "id": 894,
    "title": "Hunt for Red October, The (U)",
    "slug": "hunt-for-red-october-the-u",
    "system": "nes",
    "romFile": "Hunt for Red October, The (U).zip",
    "img": true
  },
  {
    "id": 895,
    "title": "Hyakkiyakou (J)",
    "slug": "hyakkiyakou-j",
    "system": "nes",
    "romFile": "Hyakkiyakou (J).zip",
    "img": true
  },
  {
    "id": 896,
    "title": "Hyaku no Sekai no Monogatari - The Tales on a Watery Wilderness (J)",
    "slug": "hyaku-no-sekai-no-monogatari-the-tales-on-a-watery-wilderness-j",
    "system": "nes",
    "romFile": "Hyaku no Sekai no Monogatari - The Tales on a Watery Wilderness (J).zip",
    "img": true
  },
  {
    "id": 897,
    "title": "Hydlide (U)",
    "slug": "hydlide-u",
    "system": "nes",
    "romFile": "Hydlide (U).zip",
    "img": true
  },
  {
    "id": 898,
    "title": "Hydlide 3 - Yami Kara no Houmonsha (J)",
    "slug": "hydlide-3-yami-kara-no-houmonsha-j",
    "system": "nes",
    "romFile": "Hydlide 3 - Yami Kara no Houmonsha (J).zip",
    "img": true
  },
  {
    "id": 899,
    "title": "Hydlide Special (J)",
    "slug": "hydlide-special-j",
    "system": "nes",
    "romFile": "Hydlide Special (J).zip",
    "img": true
  },
  {
    "id": 900,
    "title": "Hyokkori Hyoutan Shima - Nazo no Kaizokusen (J)",
    "slug": "hyokkori-hyoutan-shima-nazo-no-kaizokusen-j",
    "system": "nes",
    "romFile": "Hyokkori Hyoutan Shima - Nazo no Kaizokusen (J).zip"
  },
  {
    "id": 901,
    "title": "Hyper Olympic (Genteiban!, J)",
    "slug": "hyper-olympic-genteiban-j",
    "system": "nes",
    "romFile": "Hyper Olympic (Genteiban!) (J).zip",
    "img": true
  },
  {
    "id": 902,
    "title": "Hyper Olympic (J)",
    "slug": "hyper-olympic-j",
    "system": "nes",
    "romFile": "Hyper Olympic (J).zip",
    "img": true
  },
  {
    "id": 903,
    "title": "Hyper Sports (J)",
    "slug": "hyper-sports-j",
    "system": "nes",
    "romFile": "Hyper Sports (J).zip",
    "img": true
  },
  {
    "id": 904,
    "title": "I Can Remember (U)",
    "slug": "i-can-remember-u",
    "system": "nes",
    "romFile": "I Can Remember (U).zip"
  },
  {
    "id": 905,
    "title": "I Love Softball (J)",
    "slug": "i-love-softball-j",
    "system": "nes",
    "romFile": "I Love Softball (J).zip",
    "img": true
  },
  {
    "id": 906,
    "title": "Ice Climber (JE)",
    "slug": "ice-climber-je",
    "system": "nes",
    "romFile": "Ice Climber (JE).zip",
    "img": true
  },
  {
    "id": 907,
    "title": "Ice Climber (U)",
    "slug": "ice-climber-u",
    "system": "nes",
    "romFile": "Ice Climber (U) [!].zip",
    "img": true
  },
  {
    "id": 908,
    "title": "Ice Climber (VS, Player 1 Mode)",
    "slug": "ice-climber-vs-player-1-mode",
    "system": "nes",
    "romFile": "Ice Climber (VS) (Player 1 Mode).zip",
    "img": true
  },
  {
    "id": 909,
    "title": "Ice Climber (VS, Player 2 Mode)",
    "slug": "ice-climber-vs-player-2-mode",
    "system": "nes",
    "romFile": "Ice Climber (VS) (Player 2 Mode).zip",
    "img": true
  },
  {
    "id": 910,
    "title": "Ice Climber (VS)",
    "slug": "ice-climber-vs",
    "system": "nes",
    "romFile": "Ice Climber (VS).zip",
    "img": true
  },
  {
    "id": 911,
    "title": "Ice Hockey (As)",
    "slug": "ice-hockey-as",
    "system": "nes",
    "romFile": "Ice Hockey (As).zip",
    "img": true
  },
  {
    "id": 912,
    "title": "Ice Hockey (U)",
    "slug": "ice-hockey-u",
    "system": "nes",
    "romFile": "Ice Hockey (U) [!].zip",
    "img": true
  },
  {
    "id": 913,
    "title": "Ide Yousuke Meijin no Jissen Mahjong (J)",
    "slug": "ide-yousuke-meijin-no-jissen-mahjong-j",
    "system": "nes",
    "romFile": "Ide Yousuke Meijin no Jissen Mahjong (J).zip",
    "img": true
  },
  {
    "id": 914,
    "title": "Ide Yousuke Meijin no Jissen Mahjong 2 (J)",
    "slug": "ide-yousuke-meijin-no-jissen-mahjong-2-j",
    "system": "nes",
    "romFile": "Ide Yousuke Meijin no Jissen Mahjong 2 (J).zip",
    "img": true
  },
  {
    "id": 915,
    "title": "Idol Hakkenden (J)",
    "slug": "idol-hakkenden-j",
    "system": "nes",
    "romFile": "Idol Hakkenden (J).zip",
    "img": true
  },
  {
    "id": 916,
    "title": "Idol Shisen Mahjong (J)",
    "slug": "idol-shisen-mahjong-j",
    "system": "nes",
    "romFile": "Idol Shisen Mahjong (J).zip",
    "img": true
  },
  {
    "id": 917,
    "title": "Igo - Kyuu Roban Taikyoku (J)",
    "slug": "igo-kyuu-roban-taikyoku-j",
    "system": "nes",
    "romFile": "Igo - Kyuu Roban Taikyoku (J).zip",
    "img": true
  },
  {
    "id": 918,
    "title": "Igo Meikan (J)",
    "slug": "igo-meikan-j",
    "system": "nes",
    "romFile": "Igo Meikan (J).zip",
    "img": true
  },
  {
    "id": 919,
    "title": "Igo Shinan '91 (J)",
    "slug": "igo-shinan-91-j",
    "system": "nes",
    "romFile": "Igo Shinan '91 (J).zip",
    "img": true
  },
  {
    "id": 920,
    "title": "Igo Shinan '92 (J)",
    "slug": "igo-shinan-92-j",
    "system": "nes",
    "romFile": "Igo Shinan '92 (J).zip",
    "img": true
  },
  {
    "id": 921,
    "title": "Igo Shinan '93 (J)",
    "slug": "igo-shinan-93-j",
    "system": "nes",
    "romFile": "Igo Shinan '93 (J).zip",
    "img": true
  },
  {
    "id": 922,
    "title": "Igo Shinan '94 (J)",
    "slug": "igo-shinan-94-j",
    "system": "nes",
    "romFile": "Igo Shinan '94 (J).zip",
    "img": true
  },
  {
    "id": 923,
    "title": "Igo Shinan (J)",
    "slug": "igo-shinan-j",
    "system": "nes",
    "romFile": "Igo Shinan (J).zip",
    "img": true
  },
  {
    "id": 924,
    "title": "Ikari (J)",
    "slug": "ikari-j",
    "system": "nes",
    "romFile": "Ikari (J).zip",
    "img": true
  },
  {
    "id": 925,
    "title": "Ikari II - Dogosoken (J)",
    "slug": "ikari-ii-dogosoken-j",
    "system": "nes",
    "romFile": "Ikari II - Dogosoken (J).zip",
    "img": true
  },
  {
    "id": 926,
    "title": "Ikari III (J)",
    "slug": "ikari-iii-j",
    "system": "nes",
    "romFile": "Ikari III (J).zip",
    "img": true
  },
  {
    "id": 927,
    "title": "Ikari III - The Rescue (U)",
    "slug": "ikari-iii-the-rescue-u",
    "system": "nes",
    "romFile": "Ikari III - The Rescue (U).zip",
    "img": true
  },
  {
    "id": 928,
    "title": "Ikari Warriors (E)",
    "slug": "ikari-warriors-e",
    "system": "nes",
    "romFile": "Ikari Warriors (E).zip",
    "img": true
  },
  {
    "id": 929,
    "title": "Ikari Warriors (U, PRG0)",
    "slug": "ikari-warriors-u-prg0",
    "system": "nes",
    "romFile": "Ikari Warriors (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 930,
    "title": "Ikari Warriors (U, PRG1)",
    "slug": "ikari-warriors-u-prg1",
    "system": "nes",
    "romFile": "Ikari Warriors (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 931,
    "title": "Ikari Warriors II - Victory Road (U)",
    "slug": "ikari-warriors-ii-victory-road-u",
    "system": "nes",
    "romFile": "Ikari Warriors II - Victory Road (U).zip",
    "img": true
  },
  {
    "id": 932,
    "title": "Ike Ike! Nekketsu Hockey Bu - Subette Koronde Dai Rantou (J)",
    "slug": "ike-ike-nekketsu-hockey-bu-subette-koronde-dai-rantou-j-t-eng1-0-brc",
    "system": "nes",
    "romFile": "Ike Ike! Nekketsu Hockey Bu - Subette Koronde Dai Rantou (J) _T-Eng1.0_BRC_.zip",
    "img": true
  },
  {
    "id": 933,
    "title": "Ikinari Musician (J)",
    "slug": "ikinari-musician-j",
    "system": "nes",
    "romFile": "Ikinari Musician (J).zip",
    "img": true
  },
  {
    "id": 934,
    "title": "Ikki (J)",
    "slug": "ikki-j",
    "system": "nes",
    "romFile": "Ikki (J).zip",
    "img": true
  },
  {
    "id": 935,
    "title": "Image Fight (J)",
    "slug": "image-fight-j",
    "system": "nes",
    "romFile": "Image Fight (J).zip",
    "img": true
  },
  {
    "id": 936,
    "title": "Image Fight (U)",
    "slug": "image-fight-u",
    "system": "nes",
    "romFile": "Image Fight (U).zip",
    "img": true
  },
  {
    "id": 937,
    "title": "Immortal, The (U)",
    "slug": "immortal-the-u",
    "system": "nes",
    "romFile": "Immortal, The (U).zip",
    "img": true
  },
  {
    "id": 938,
    "title": "Impossible Mission II (U)",
    "slug": "impossible-mission-ii-u",
    "system": "nes",
    "romFile": "Impossible Mission II (U).zip",
    "img": true
  },
  {
    "id": 939,
    "title": "Incredible Crash Dummies, The (U)",
    "slug": "incredible-crash-dummies-the-u",
    "system": "nes",
    "romFile": "Incredible Crash Dummies, The (U).zip",
    "img": true
  },
  {
    "id": 940,
    "title": "Indiana Jones and the Last Crusade (E)",
    "slug": "indiana-jones-and-the-last-crusade-e",
    "system": "nes",
    "romFile": "Indiana Jones and the Last Crusade (E) [!].zip",
    "img": true
  },
  {
    "id": 941,
    "title": "Indiana Jones and the Last Crusade (U, Taito)",
    "slug": "indiana-jones-and-the-last-crusade-u-taito",
    "system": "nes",
    "romFile": "Indiana Jones and the Last Crusade (U) (Taito).zip",
    "img": true
  },
  {
    "id": 942,
    "title": "Indiana Jones and the Last Crusade (U, UBI Soft)",
    "slug": "indiana-jones-and-the-last-crusade-u-ubi-soft",
    "system": "nes",
    "romFile": "Indiana Jones and the Last Crusade (U) (UBI Soft).zip",
    "img": true
  },
  {
    "id": 943,
    "title": "Indiana Jones and the Temple of Doom (U, Mindscape)",
    "slug": "indiana-jones-and-the-temple-of-doom-u-mindscape",
    "system": "nes",
    "romFile": "Indiana Jones and the Temple of Doom (U) (Mindscape).zip",
    "img": true
  },
  {
    "id": 944,
    "title": "Indiana Jones and the Temple of Doom (U, Tengen)",
    "slug": "indiana-jones-and-the-temple-of-doom-u-tengen",
    "system": "nes",
    "romFile": "Indiana Jones and the Temple of Doom (U) (Tengen).zip",
    "img": true
  },
  {
    "id": 945,
    "title": "Indora no Hikari (J)",
    "slug": "indora-no-hikari-j",
    "system": "nes",
    "romFile": "Indora no Hikari (J).zip",
    "img": true
  },
  {
    "id": 946,
    "title": "Infiltrator (U)",
    "slug": "infiltrator-u",
    "system": "nes",
    "romFile": "Infiltrator (U).zip",
    "img": true
  },
  {
    "id": 947,
    "title": "Insector X (J)",
    "slug": "insector-x-j",
    "system": "nes",
    "romFile": "Insector X (J).zip",
    "img": true
  },
  {
    "id": 948,
    "title": "International Cricket (E, Prototype)",
    "slug": "international-cricket-e-prototype",
    "system": "nes",
    "romFile": "International Cricket (E) (Prototype).zip",
    "img": true
  },
  {
    "id": 949,
    "title": "International Cricket (E)",
    "slug": "international-cricket-e",
    "system": "nes",
    "romFile": "International Cricket (E) [!].zip",
    "img": true
  },
  {
    "id": 950,
    "title": "Iron Tank (U)",
    "slug": "iron-tank-u",
    "system": "nes",
    "romFile": "Iron Tank (U).zip"
  },
  {
    "id": 951,
    "title": "Ironsword - Wizards & Warriors II (E)",
    "slug": "ironsword-wizards-warriors-ii-e",
    "system": "nes",
    "romFile": "Ironsword - Wizards & Warriors II (E) [!].zip",
    "img": true
  },
  {
    "id": 952,
    "title": "Ironsword - Wizards & Warriors II (U)",
    "slug": "ironsword-wizards-warriors-ii-u",
    "system": "nes",
    "romFile": "Ironsword - Wizards & Warriors II (U).zip",
    "img": true
  },
  {
    "id": 953,
    "title": "Isaki Shuugorou no Keiba Hisshou Gaku (J)",
    "slug": "isaki-shuugorou-no-keiba-hisshou-gaku-j",
    "system": "nes",
    "romFile": "Isaki Shuugorou no Keiba Hisshou Gaku (J).zip",
    "img": true
  },
  {
    "id": 954,
    "title": "Ishin no Arashi (J)",
    "slug": "ishin-no-arashi-j",
    "system": "nes",
    "romFile": "Ishin no Arashi (J).zip",
    "img": true
  },
  {
    "id": 955,
    "title": "Isolated Warrior (E)",
    "slug": "isolated-warrior-e",
    "system": "nes",
    "romFile": "Isolated Warrior (E).zip",
    "img": true
  },
  {
    "id": 956,
    "title": "Isolated Warrior (U)",
    "slug": "isolated-warrior-u",
    "system": "nes",
    "romFile": "Isolated Warrior (U).zip",
    "img": true
  },
  {
    "id": 957,
    "title": "Itadaki Street - Watashi no Mise ni Yottette (J)",
    "slug": "itadaki-street-watashi-no-mise-ni-yottette-j",
    "system": "nes",
    "romFile": "Itadaki Street - Watashi no Mise ni Yottette (J).zip",
    "img": true
  },
  {
    "id": 958,
    "title": "Ivan Ironman Stewart's Super Off-Road (U)",
    "slug": "ivan-ironman-stewart-s-super-off-road-u",
    "system": "nes",
    "romFile": "Ivan Ironman Stewart's Super Off-Road (U).zip"
  },
  {
    "id": 959,
    "title": "J-League Fighting Soccer - The King of Ace Strikers (J)",
    "slug": "j-league-fighting-soccer-the-king-of-ace-strikers-j",
    "system": "nes",
    "romFile": "J-League Fighting Soccer - The King of Ace Strikers (J).zip",
    "img": true
  },
  {
    "id": 960,
    "title": "J-League Winning Goal (J)",
    "slug": "j-league-winning-goal-j",
    "system": "nes",
    "romFile": "J-League Winning Goal (J).zip",
    "img": true
  },
  {
    "id": 961,
    "title": "JJ - Tobidase Daisakusen Part 2 (J)",
    "slug": "jj-tobidase-daisakusen-part-2-j",
    "system": "nes",
    "romFile": "JJ - Tobidase Daisakusen Part 2 (J).zip",
    "img": true
  },
  {
    "id": 962,
    "title": "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf (E)",
    "slug": "jack-nicklaus-greatest-18-holes-of-major-championship-golf-e",
    "system": "nes",
    "romFile": "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf (E).zip",
    "img": true
  },
  {
    "id": 963,
    "title": "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf (U)",
    "slug": "jack-nicklaus-greatest-18-holes-of-major-championship-golf-u",
    "system": "nes",
    "romFile": "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf (U).zip",
    "img": true
  },
  {
    "id": 964,
    "title": "Jackal (KC)",
    "slug": "jackal-kc",
    "system": "nes",
    "romFile": "Jackal (KC).zip",
    "img": true
  },
  {
    "id": 965,
    "title": "Jackal (U)",
    "slug": "jackal-u",
    "system": "nes",
    "romFile": "Jackal (U).zip",
    "img": true
  },
  {
    "id": 966,
    "title": "Jackie Chan (J)",
    "slug": "jackie-chan-j",
    "system": "nes",
    "romFile": "Jackie Chan (J).zip",
    "img": true
  },
  {
    "id": 967,
    "title": "Jackie Chan's Action Kung Fu (E)",
    "slug": "jackie-chan-s-action-kung-fu-e",
    "system": "nes",
    "romFile": "Jackie Chan's Action Kung Fu (E) [!].zip",
    "img": true
  },
  {
    "id": 968,
    "title": "Jackie Chan's Action Kung Fu (U)",
    "slug": "jackie-chan-s-action-kung-fu-u",
    "system": "nes",
    "romFile": "Jackie Chan's Action Kung Fu (U).zip",
    "img": true
  },
  {
    "id": 969,
    "title": "Jajamaru Gekimaden - Maboroshi no Kinmajou (J)",
    "slug": "jajamaru-gekimaden-maboroshi-no-kinmajou-j",
    "system": "nes",
    "romFile": "Jajamaru Gekimaden - Maboroshi no Kinmajou (J).zip",
    "img": true
  },
  {
    "id": 970,
    "title": "Jajamaru Ninpou Chou (J)",
    "slug": "jajamaru-ninpou-chou-j",
    "system": "nes",
    "romFile": "Jajamaru Ninpou Chou (J) [!].zip",
    "img": true
  },
  {
    "id": 971,
    "title": "Jajamaru no Daibouken (J)",
    "slug": "jajamaru-no-daibouken-j",
    "system": "nes",
    "romFile": "Jajamaru no Daibouken (J).zip",
    "img": true
  },
  {
    "id": 972,
    "title": "Jangou (J)",
    "slug": "jangou-j",
    "system": "nes",
    "romFile": "Jangou (J).zip",
    "img": true
  },
  {
    "id": 973,
    "title": "Jarinko Chie - Bakudan Musume no Shiawase Sagashi (J)",
    "slug": "jarinko-chie-bakudan-musume-no-shiawase-sagashi-j",
    "system": "nes",
    "romFile": "Jarinko Chie - Bakudan Musume no Shiawase Sagashi (J).zip",
    "img": true
  },
  {
    "id": 974,
    "title": "Jaws (U)",
    "slug": "jaws-u",
    "system": "nes",
    "romFile": "Jaws (U) [!].zip",
    "img": true
  },
  {
    "id": 975,
    "title": "Jeopardy! (U)",
    "slug": "jeopardy-u",
    "system": "nes",
    "romFile": "Jeopardy! (U).zip",
    "img": true
  },
  {
    "id": 976,
    "title": "Jeopardy! 25th Anniversary Edition (U)",
    "slug": "jeopardy-25th-anniversary-edition-u",
    "system": "nes",
    "romFile": "Jeopardy! 25th Anniversary Edition (U).zip",
    "img": true
  },
  {
    "id": 977,
    "title": "Jeopardy! Junior Edition (U)",
    "slug": "jeopardy-junior-edition-u",
    "system": "nes",
    "romFile": "Jeopardy! Junior Edition (U).zip",
    "img": true
  },
  {
    "id": 978,
    "title": "Jesus - Kyoufu no Bio Monster (J)",
    "slug": "jesus-kyoufu-no-bio-monster-j",
    "system": "nes",
    "romFile": "Jesus - Kyoufu no Bio Monster (J).zip",
    "img": true
  },
  {
    "id": 979,
    "title": "Jetsons, The - Cogswell's Caper! (E)",
    "slug": "jetsons-the-cogswell-s-caper-e",
    "system": "nes",
    "romFile": "Jetsons, The - Cogswell's Caper! (E) [!].zip",
    "img": true
  },
  {
    "id": 980,
    "title": "Jetsons, The - Cogswell's Caper! (J)",
    "slug": "jetsons-the-cogswell-s-caper-j",
    "system": "nes",
    "romFile": "Jetsons, The - Cogswell's Caper! (J).zip",
    "img": true
  },
  {
    "id": 981,
    "title": "Jetsons, The - Cogswell's Caper! (U)",
    "slug": "jetsons-the-cogswell-s-caper-u",
    "system": "nes",
    "romFile": "Jetsons, The - Cogswell's Caper! (U).zip",
    "img": true
  },
  {
    "id": 982,
    "title": "Ji Jia Zhan Shi (As)",
    "slug": "ji-jia-zhan-shi-as",
    "system": "nes",
    "romFile": "Ji Jia Zhan Shi (As).zip",
    "img": true
  },
  {
    "id": 983,
    "title": "Jigoku Gokuraku Maru (J)",
    "slug": "jigoku-gokuraku-maru-j",
    "system": "nes",
    "romFile": "Jigoku Gokuraku Maru (J).zip",
    "img": true
  },
  {
    "id": 984,
    "title": "Jikuu Yuuden - Debias (J)",
    "slug": "jikuu-yuuden-debias-j",
    "system": "nes",
    "romFile": "Jikuu Yuuden - Debias (J).zip",
    "img": true
  },
  {
    "id": 985,
    "title": "Jimmy Connor's Tennis (E)",
    "slug": "jimmy-connor-s-tennis-e",
    "system": "nes",
    "romFile": "Jimmy Connor's Tennis (E).zip"
  },
  {
    "id": 986,
    "title": "Jimmy Connor's Tennis (U)",
    "slug": "jimmy-connor-s-tennis-u",
    "system": "nes",
    "romFile": "Jimmy Connor's Tennis (U).zip"
  },
  {
    "id": 987,
    "title": "Jing Ke Xin Zhuan (As)",
    "slug": "jing-ke-xin-zhuan-as",
    "system": "nes",
    "romFile": "Jing Ke Xin Zhuan (As).zip",
    "img": true
  },
  {
    "id": 988,
    "title": "Joe & Mac (U)",
    "slug": "joe-mac-u",
    "system": "nes",
    "romFile": "Joe & Mac (U).zip",
    "img": true
  },
  {
    "id": 989,
    "title": "John Elway's Quarterback (U)",
    "slug": "john-elway-s-quarterback-u",
    "system": "nes",
    "romFile": "John Elway's Quarterback (U).zip",
    "img": true
  },
  {
    "id": 990,
    "title": "Jongbou (J)",
    "slug": "jongbou-j",
    "system": "nes",
    "romFile": "Jongbou (J).zip",
    "img": true
  },
  {
    "id": 991,
    "title": "Jordan Vs Bird - One On One (U)",
    "slug": "jordan-vs-bird-one-on-one-u",
    "system": "nes",
    "romFile": "Jordan Vs Bird - One On One (U).zip",
    "img": true
  },
  {
    "id": 992,
    "title": "Joshua (U, V5.0 CHR 6.0)",
    "slug": "joshua-u-v5-0-chr-6-0",
    "system": "nes",
    "romFile": "Joshua (U) (V5.0 CHR 6.0).zip"
  },
  {
    "id": 993,
    "title": "Joshua (U, V6.0)",
    "slug": "joshua-u-v6-0",
    "system": "nes",
    "romFile": "Joshua (U) (V6.0) [!].zip"
  },
  {
    "id": 994,
    "title": "Journey to Silius (U)",
    "slug": "journey-to-silius-u",
    "system": "nes",
    "romFile": "Journey to Silius (U).zip",
    "img": true
  },
  {
    "id": 995,
    "title": "Joust (J)",
    "slug": "joust-j",
    "system": "nes",
    "romFile": "Joust (J).zip",
    "img": true
  },
  {
    "id": 996,
    "title": "Joust (U)",
    "slug": "joust-u",
    "system": "nes",
    "romFile": "Joust (U).zip",
    "img": true
  },
  {
    "id": 997,
    "title": "Joy Mech Fight (J)",
    "slug": "joy-mech-fight-j",
    "system": "nes",
    "romFile": "Joy Mech Fight (J).zip",
    "img": true
  },
  {
    "id": 998,
    "title": "Joypad Test Cartridge (U)",
    "slug": "joypad-test-cartridge-u",
    "system": "nes",
    "romFile": "Joypad Test Cartridge (U).zip"
  },
  {
    "id": 999,
    "title": "JuJu Densetsu (J)",
    "slug": "juju-densetsu-j",
    "system": "nes",
    "romFile": "JuJu Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1000,
    "title": "Jumbo Ozaki no Hole in One Professional (J)",
    "slug": "jumbo-ozaki-no-hole-in-one-professional-j",
    "system": "nes",
    "romFile": "Jumbo Ozaki no Hole in One Professional (J).zip",
    "img": true
  },
  {
    "id": 1001,
    "title": "Jumpin' Kid - Jack to Mame no Ki Monogatari (J)",
    "slug": "jumpin-kid-jack-to-mame-no-ki-monogatari-j",
    "system": "nes",
    "romFile": "Jumpin' Kid - Jack to Mame no Ki Monogatari (J).zip",
    "img": true
  },
  {
    "id": 1002,
    "title": "Jungle Book, The (E)",
    "slug": "jungle-book-the-e",
    "system": "nes",
    "romFile": "Jungle Book, The (E) [!].zip",
    "img": true
  },
  {
    "id": 1003,
    "title": "Jungle Book, The (U)",
    "slug": "jungle-book-the-u",
    "system": "nes",
    "romFile": "Jungle Book, The (U).zip",
    "img": true
  },
  {
    "id": 1004,
    "title": "Jurassic Park (U)",
    "slug": "jurassic-park-u",
    "system": "nes",
    "romFile": "Jurassic Park (U).zip",
    "img": true
  },
  {
    "id": 1005,
    "title": "Just Breed (J)",
    "slug": "just-breed-j",
    "system": "nes",
    "romFile": "Just Breed (J).zip",
    "img": true
  },
  {
    "id": 1006,
    "title": "Juuouki (J)",
    "slug": "juuouki-j",
    "system": "nes",
    "romFile": "Juuouki (J).zip",
    "img": true
  },
  {
    "id": 1007,
    "title": "Juuryoku Soukou Metal Storm (J)",
    "slug": "juuryoku-soukou-metal-storm-j",
    "system": "nes",
    "romFile": "Juuryoku Soukou Metal Storm (J).zip",
    "img": true
  },
  {
    "id": 1008,
    "title": "Juvei Quest (J)",
    "slug": "juvei-quest-j",
    "system": "nes",
    "romFile": "Juvei Quest (J).zip",
    "img": true
  },
  {
    "id": 1009,
    "title": "Kabuki - Quantum Fighter (E)",
    "slug": "kabuki-quantum-fighter-e",
    "system": "nes",
    "romFile": "Kabuki - Quantum Fighter (E).zip",
    "img": true
  },
  {
    "id": 1010,
    "title": "Kabuki - Quantum Fighter (U)",
    "slug": "kabuki-quantum-fighter-u",
    "system": "nes",
    "romFile": "Kabuki - Quantum Fighter (U).zip",
    "img": true
  },
  {
    "id": 1011,
    "title": "Kabushiki Doujou (J)",
    "slug": "kabushiki-doujou-j",
    "system": "nes",
    "romFile": "Kabushiki Doujou (J).zip",
    "img": true
  },
  {
    "id": 1012,
    "title": "Kaettekita! Gunjin Shougi - Nanya Sore! (J)",
    "slug": "kaettekita-gunjin-shougi-nanya-sore-j",
    "system": "nes",
    "romFile": "Kaettekita! Gunjin Shougi - Nanya Sore! (J).zip",
    "img": true
  },
  {
    "id": 1013,
    "title": "Kage (J)",
    "slug": "kage-j",
    "system": "nes",
    "romFile": "Kage (J).zip",
    "img": true
  },
  {
    "id": 1014,
    "title": "Kage no Densetsu (J)",
    "slug": "kage-no-densetsu-j",
    "system": "nes",
    "romFile": "Kage no Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1015,
    "title": "Kagerou Densetsu (J)",
    "slug": "kagerou-densetsu-j",
    "system": "nes",
    "romFile": "Kagerou Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1016,
    "title": "Kaguya Hime Densetsu (J)",
    "slug": "kaguya-hime-densetsu-j",
    "system": "nes",
    "romFile": "Kaguya Hime Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1017,
    "title": "Kaijuu Monogatari (J)",
    "slug": "kaijuu-monogatari-j",
    "system": "nes",
    "romFile": "Kaijuu Monogatari (J).zip",
    "img": true
  },
  {
    "id": 1018,
    "title": "Kaiketsu Yanchamaru (J)",
    "slug": "kaiketsu-yanchamaru-j",
    "system": "nes",
    "romFile": "Kaiketsu Yanchamaru (J).zip",
    "img": true
  },
  {
    "id": 1019,
    "title": "Kaiketsu Yanchamaru 2 - Karakuri Land (J)",
    "slug": "kaiketsu-yanchamaru-2-karakuri-land-j",
    "system": "nes",
    "romFile": "Kaiketsu Yanchamaru 2 - Karakuri Land (J).zip",
    "img": true
  },
  {
    "id": 1020,
    "title": "Kaiketsu Yanchamaru 3 - Taiketsu! Zouringen (J)",
    "slug": "kaiketsu-yanchamaru-3-taiketsu-zouringen-j",
    "system": "nes",
    "romFile": "Kaiketsu Yanchamaru 3 - Taiketsu! Zouringen (J).zip",
    "img": true
  },
  {
    "id": 1021,
    "title": "Kakefu Kun no Jump Tengoku - Speed Jigoku (J)",
    "slug": "kakefu-kun-no-jump-tengoku-speed-jigoku-j",
    "system": "nes",
    "romFile": "Kakefu Kun no Jump Tengoku - Speed Jigoku (J).zip",
    "img": true
  },
  {
    "id": 1022,
    "title": "Kame no Ongaeshi - Urashima Densetsu (J)",
    "slug": "kame-no-ongaeshi-urashima-densetsu-j",
    "system": "nes",
    "romFile": "Kame no Ongaeshi - Urashima Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1023,
    "title": "Kamen Rider Club (J)",
    "slug": "kamen-rider-club-j",
    "system": "nes",
    "romFile": "Kamen Rider Club (J).zip",
    "img": true
  },
  {
    "id": 1024,
    "title": "Kamen Rider SD - Guranshokkaa no Yabou (J)",
    "slug": "kamen-rider-sd-guranshokkaa-no-yabou-j",
    "system": "nes",
    "romFile": "Kamen Rider SD - Guranshokkaa no Yabou (J).zip",
    "img": true
  },
  {
    "id": 1025,
    "title": "Kamen no Ninja - Akakage (J)",
    "slug": "kamen-no-ninja-akakage-j",
    "system": "nes",
    "romFile": "Kamen no Ninja - Akakage (J).zip",
    "img": true
  },
  {
    "id": 1026,
    "title": "Kamen no Ninja - Hanamaru (J)",
    "slug": "kamen-no-ninja-hanamaru-j",
    "system": "nes",
    "romFile": "Kamen no Ninja - Hanamaru (J).zip",
    "img": true
  },
  {
    "id": 1027,
    "title": "Kanshakudama Nage Kantarou no Toukaidou Gojuusan Tsugi (J)",
    "slug": "kanshakudama-nage-kantarou-no-toukaidou-gojuusan-tsugi-j",
    "system": "nes",
    "romFile": "Kanshakudama Nage Kantarou no Toukaidou Gojuusan Tsugi (J).zip",
    "img": true
  },
  {
    "id": 1028,
    "title": "Karakuri Kengou Den - Musashi Road - Karakuri Nin Hashiru! (J)",
    "slug": "karakuri-kengou-den-musashi-road-karakuri-nin-hashiru-j",
    "system": "nes",
    "romFile": "Karakuri Kengou Den - Musashi Road - Karakuri Nin Hashiru! (J).zip",
    "img": true
  },
  {
    "id": 1029,
    "title": "Karaoke Studio (J)",
    "slug": "karaoke-studio-j",
    "system": "nes",
    "romFile": "Karaoke Studio (J).zip",
    "img": true
  },
  {
    "id": 1030,
    "title": "Karaoke Studio Senyou Cassette Vol 1 (J)",
    "slug": "karaoke-studio-senyou-cassette-vol-1-j",
    "system": "nes",
    "romFile": "Karaoke Studio Senyou Cassette Vol 1 (J).zip",
    "img": true
  },
  {
    "id": 1031,
    "title": "Karaoke Studio Senyou Cassette Vol 2 (J)",
    "slug": "karaoke-studio-senyou-cassette-vol-2-j",
    "system": "nes",
    "romFile": "Karaoke Studio Senyou Cassette Vol 2 (J).zip",
    "img": true
  },
  {
    "id": 1032,
    "title": "Karate Champ (U)",
    "slug": "karate-champ-u",
    "system": "nes",
    "romFile": "Karate Champ (U).zip",
    "img": true
  },
  {
    "id": 1033,
    "title": "Karate Kid, The (U)",
    "slug": "karate-kid-the-u",
    "system": "nes",
    "romFile": "Karate Kid, The (U).zip",
    "img": true
  },
  {
    "id": 1034,
    "title": "Karateka (J)",
    "slug": "karateka-j",
    "system": "nes",
    "romFile": "Karateka (J).zip",
    "img": true
  },
  {
    "id": 1035,
    "title": "Karnov (J)",
    "slug": "karnov-j",
    "system": "nes",
    "romFile": "Karnov (J).zip",
    "img": true
  },
  {
    "id": 1036,
    "title": "Karnov (U)",
    "slug": "karnov-u",
    "system": "nes",
    "romFile": "Karnov (U).zip",
    "img": true
  },
  {
    "id": 1037,
    "title": "Kawa no Nushi Tsuri (J)",
    "slug": "kawa-no-nushi-tsuri-j",
    "system": "nes",
    "romFile": "Kawa no Nushi Tsuri (J).zip",
    "img": true
  },
  {
    "id": 1038,
    "title": "Keiba Simulation - Honmei (J)",
    "slug": "keiba-simulation-honmei-j",
    "system": "nes",
    "romFile": "Keiba Simulation - Honmei (J).zip",
    "img": true
  },
  {
    "id": 1039,
    "title": "Kero Kero Keroppi no Daibouken (J)",
    "slug": "kero-kero-keroppi-no-daibouken-j",
    "system": "nes",
    "romFile": "Kero Kero Keroppi no Daibouken (J).zip",
    "img": true
  },
  {
    "id": 1040,
    "title": "Kero Kero Keroppi no Daibouken 2 - Donuts Ike ha Oosawagi! (J)",
    "slug": "kero-kero-keroppi-no-daibouken-2-donuts-ike-ha-oosawagi-j",
    "system": "nes",
    "romFile": "Kero Kero Keroppi no Daibouken 2 - Donuts Ike ha Oosawagi! (J).zip",
    "img": true
  },
  {
    "id": 1041,
    "title": "Keroppi to Keroriinu no Splash Bomb! (J)",
    "slug": "keroppi-to-keroriinu-no-splash-bomb-j",
    "system": "nes",
    "romFile": "Keroppi to Keroriinu no Splash Bomb! (J).zip",
    "img": true
  },
  {
    "id": 1042,
    "title": "Kick Master (U)",
    "slug": "kick-master-u",
    "system": "nes",
    "romFile": "Kick Master (U).zip",
    "img": true
  },
  {
    "id": 1043,
    "title": "Kick Off (E)",
    "slug": "kick-off-e",
    "system": "nes",
    "romFile": "Kick Off (E).zip",
    "img": true
  },
  {
    "id": 1044,
    "title": "Kickle Cubicle (E)",
    "slug": "kickle-cubicle-e",
    "system": "nes",
    "romFile": "Kickle Cubicle (E) [!].zip",
    "img": true
  },
  {
    "id": 1045,
    "title": "Kickle Cubicle (U)",
    "slug": "kickle-cubicle-u",
    "system": "nes",
    "romFile": "Kickle Cubicle (U).zip",
    "img": true
  },
  {
    "id": 1046,
    "title": "Kid Icarus (UE)",
    "slug": "kid-icarus-ue",
    "system": "nes",
    "romFile": "Kid Icarus (UE).zip",
    "img": true
  },
  {
    "id": 1047,
    "title": "Kid Klown (U)",
    "slug": "kid-klown-u",
    "system": "nes",
    "romFile": "Kid Klown (U).zip"
  },
  {
    "id": 1048,
    "title": "Kid Kool (U)",
    "slug": "kid-kool-u",
    "system": "nes",
    "romFile": "Kid Kool (U).zip",
    "img": true
  },
  {
    "id": 1049,
    "title": "Kid Niki - Radical Ninja (U, PRG0)",
    "slug": "kid-niki-radical-ninja-u-prg0",
    "system": "nes",
    "romFile": "Kid Niki - Radical Ninja (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 1050,
    "title": "Kid Niki - Radical Ninja (U, PRG1)",
    "slug": "kid-niki-radical-ninja-u-prg1",
    "system": "nes",
    "romFile": "Kid Niki - Radical Ninja (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 1051,
    "title": "King Kong 2 - Ikari no Megaton Punch (J)",
    "slug": "king-kong-2-ikari-no-megaton-punch-j",
    "system": "nes",
    "romFile": "King Kong 2 - Ikari no Megaton Punch (J).zip",
    "img": true
  },
  {
    "id": 1052,
    "title": "King Neptune's Adventure (U)",
    "slug": "king-neptune-s-adventure-u",
    "system": "nes",
    "romFile": "King Neptune's Adventure (U).zip",
    "img": true
  },
  {
    "id": 1053,
    "title": "King of Kings (J)",
    "slug": "king-of-kings-j",
    "system": "nes",
    "romFile": "King of Kings (J).zip",
    "img": true
  },
  {
    "id": 1054,
    "title": "King of Kings, The (U, V1.1)",
    "slug": "king-of-kings-the-u-v1-1",
    "system": "nes",
    "romFile": "King of Kings, The (U) (V1.1).zip",
    "img": true
  },
  {
    "id": 1055,
    "title": "King of Kings, The (U, V1.2)",
    "slug": "king-of-kings-the-u-v1-2",
    "system": "nes",
    "romFile": "King of Kings, The (U) (V1.2) [!].zip",
    "img": true
  },
  {
    "id": 1056,
    "title": "King of Kings, The (U, V1.3)",
    "slug": "king-of-kings-the-u-v1-3",
    "system": "nes",
    "romFile": "King of Kings, The (U) (V1.3).zip",
    "img": true
  },
  {
    "id": 1057,
    "title": "King of Kings, The (U, V5.0 CHR 1.3)",
    "slug": "king-of-kings-the-u-v5-0-chr-1-3",
    "system": "nes",
    "romFile": "King of Kings, The (U) (V5.0 CHR 1.3).zip",
    "img": true
  },
  {
    "id": 1058,
    "title": "King's Knight (J)",
    "slug": "king-s-knight-j",
    "system": "nes",
    "romFile": "King's Knight (J).zip",
    "img": true
  },
  {
    "id": 1059,
    "title": "King's Knight (U)",
    "slug": "king-s-knight-u",
    "system": "nes",
    "romFile": "King's Knight (U).zip",
    "img": true
  },
  {
    "id": 1060,
    "title": "King's Quest V (U)",
    "slug": "king-s-quest-v-u",
    "system": "nes",
    "romFile": "King's Quest V (U).zip",
    "img": true
  },
  {
    "id": 1061,
    "title": "Kings of the Beach (U)",
    "slug": "kings-of-the-beach-u",
    "system": "nes",
    "romFile": "Kings of the Beach (U).zip",
    "img": true
  },
  {
    "id": 1062,
    "title": "Kinnikuman - Muscle Tag Match (J)",
    "slug": "kinnikuman-muscle-tag-match-j",
    "system": "nes",
    "romFile": "Kinnikuman - Muscle Tag Match (J).zip",
    "img": true
  },
  {
    "id": 1063,
    "title": "Kirby's Adventure (G)",
    "slug": "kirby-s-adventure-g",
    "system": "nes",
    "romFile": "Kirby's Adventure (G) [!].zip",
    "img": true
  },
  {
    "id": 1064,
    "title": "Kirby's Adventure (U, PRG0)",
    "slug": "kirby-s-adventure-u-prg0",
    "system": "nes",
    "romFile": "Kirby's Adventure (U) (PRG0) [!].zip",
    "img": true
  },
  {
    "id": 1065,
    "title": "Kiteretsu Dai Hyakka (J)",
    "slug": "kiteretsu-dai-hyakka-j",
    "system": "nes",
    "romFile": "Kiteretsu Dai Hyakka (J).zip",
    "img": true
  },
  {
    "id": 1066,
    "title": "Kiwi Kraze (U)",
    "slug": "kiwi-kraze-u",
    "system": "nes",
    "romFile": "Kiwi Kraze (U).zip",
    "img": true
  },
  {
    "id": 1067,
    "title": "Klash Ball (U)",
    "slug": "klash-ball-u",
    "system": "nes",
    "romFile": "Klash Ball (U).zip",
    "img": true
  },
  {
    "id": 1068,
    "title": "Klax (J)",
    "slug": "klax-j",
    "system": "nes",
    "romFile": "Klax (J).zip",
    "img": true
  },
  {
    "id": 1069,
    "title": "Klax (U)",
    "slug": "klax-u",
    "system": "nes",
    "romFile": "Klax (U).zip",
    "img": true
  },
  {
    "id": 1070,
    "title": "Knight Rider (J)",
    "slug": "knight-rider-j",
    "system": "nes",
    "romFile": "Knight Rider (J).zip",
    "img": true
  },
  {
    "id": 1071,
    "title": "Knight Rider (U)",
    "slug": "knight-rider-u",
    "system": "nes",
    "romFile": "Knight Rider (U).zip",
    "img": true
  },
  {
    "id": 1072,
    "title": "Konami Hyper Soccer (E)",
    "slug": "konami-hyper-soccer-e",
    "system": "nes",
    "romFile": "Konami Hyper Soccer (E).zip",
    "img": true
  },
  {
    "id": 1073,
    "title": "Konamic Sports in Seoul (J)",
    "slug": "konamic-sports-in-seoul-j",
    "system": "nes",
    "romFile": "Konamic Sports in Seoul (J).zip",
    "img": true
  },
  {
    "id": 1074,
    "title": "Kouryuu Densetsu Villgust Gaiden (J)",
    "slug": "kouryuu-densetsu-villgust-gaiden-j",
    "system": "nes",
    "romFile": "Kouryuu Densetsu Villgust Gaiden (J).zip",
    "img": true
  },
  {
    "id": 1075,
    "title": "Koushien (J)",
    "slug": "koushien-j",
    "system": "nes",
    "romFile": "Koushien (J).zip",
    "img": true
  },
  {
    "id": 1076,
    "title": "Krazy Kreatures (U)",
    "slug": "krazy-kreatures-u",
    "system": "nes",
    "romFile": "Krazy Kreatures (U).zip",
    "img": true
  },
  {
    "id": 1077,
    "title": "Krion Conquest, The (U)",
    "slug": "krion-conquest-the-u",
    "system": "nes",
    "romFile": "Krion Conquest, The (U).zip",
    "img": true
  },
  {
    "id": 1078,
    "title": "Krusty's Fun House (E)",
    "slug": "krusty-s-fun-house-e",
    "system": "nes",
    "romFile": "Krusty's Fun House (E).zip",
    "img": true
  },
  {
    "id": 1079,
    "title": "Krusty's Fun House (U)",
    "slug": "krusty-s-fun-house-u",
    "system": "nes",
    "romFile": "Krusty's Fun House (U).zip",
    "img": true
  },
  {
    "id": 1080,
    "title": "Kujaku Ou (J)",
    "slug": "kujaku-ou-j",
    "system": "nes",
    "romFile": "Kujaku Ou (J).zip",
    "img": true
  },
  {
    "id": 1081,
    "title": "Kujaku Ou 2 (J)",
    "slug": "kujaku-ou-2-j",
    "system": "nes",
    "romFile": "Kujaku Ou 2 (J).zip",
    "img": true
  },
  {
    "id": 1082,
    "title": "Kung Fu (PC10)",
    "slug": "kung-fu-pc10",
    "system": "nes",
    "romFile": "Kung Fu (PC10).zip",
    "img": true
  },
  {
    "id": 1083,
    "title": "Kung Fu (U)",
    "slug": "kung-fu-u",
    "system": "nes",
    "romFile": "Kung Fu (U) [!].zip",
    "img": true
  },
  {
    "id": 1084,
    "title": "Kung-Fu Heroes (U)",
    "slug": "kung-fu-heroes-u",
    "system": "nes",
    "romFile": "Kung-Fu Heroes (U).zip",
    "img": true
  },
  {
    "id": 1085,
    "title": "Kunio Kun no Nekketsu Soccer League (J)",
    "slug": "kunio-kun-no-nekketsu-soccer-league-j-t-eng1-1-pentarouzero",
    "system": "nes",
    "romFile": "Kunio Kun no Nekketsu Soccer League (J) [T-Eng1.1 pentarouzero].zip",
    "img": true
  },
  {
    "id": 1086,
    "title": "Kurogane Hiroshi no Yosou Daisuki! - Kachiuma Densetsu (J)",
    "slug": "kurogane-hiroshi-no-yosou-daisuki-kachiuma-densetsu-j",
    "system": "nes",
    "romFile": "Kurogane Hiroshi no Yosou Daisuki! - Kachiuma Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1087,
    "title": "Kyonshiizu 2 (J)",
    "slug": "kyonshiizu-2-j",
    "system": "nes",
    "romFile": "Kyonshiizu 2 (J).zip",
    "img": true
  },
  {
    "id": 1088,
    "title": "Kyoro Chan Land (J)",
    "slug": "kyoro-chan-land-j",
    "system": "nes",
    "romFile": "Kyoro Chan Land (J).zip",
    "img": true
  },
  {
    "id": 1089,
    "title": "Kyouryuu Sentai Juuranger (J)",
    "slug": "kyouryuu-sentai-juuranger-j",
    "system": "nes",
    "romFile": "Kyouryuu Sentai Juuranger (J).zip",
    "img": true
  },
  {
    "id": 1090,
    "title": "Kyuukyoku Harikiri Koushien (J)",
    "slug": "kyuukyoku-harikiri-koushien-j",
    "system": "nes",
    "romFile": "Kyuukyoku Harikiri Koushien (J).zip",
    "img": true
  },
  {
    "id": 1091,
    "title": "Kyuukyoku Harikiri Stadium '88 (J)",
    "slug": "kyuukyoku-harikiri-stadium-88-j",
    "system": "nes",
    "romFile": "Kyuukyoku Harikiri Stadium '88 (J).zip",
    "img": true
  },
  {
    "id": 1092,
    "title": "Kyuukyoku Harikiri Stadium (J)",
    "slug": "kyuukyoku-harikiri-stadium-j",
    "system": "nes",
    "romFile": "Kyuukyoku Harikiri Stadium (J).zip",
    "img": true
  },
  {
    "id": 1093,
    "title": "Kyuukyoku Harikiri Stadium - Heisei Gannen Han (J)",
    "slug": "kyuukyoku-harikiri-stadium-heisei-gannen-han-j",
    "system": "nes",
    "romFile": "Kyuukyoku Harikiri Stadium - Heisei Gannen Han (J).zip"
  },
  {
    "id": 1094,
    "title": "Kyuukyoku Harikiri Stadium 3 (J)",
    "slug": "kyuukyoku-harikiri-stadium-3-j",
    "system": "nes",
    "romFile": "Kyuukyoku Harikiri Stadium 3 (J).zip",
    "img": true
  },
  {
    "id": 1095,
    "title": "Kyuukyoku Tiger (J)",
    "slug": "kyuukyoku-tiger-j",
    "system": "nes",
    "romFile": "Kyuukyoku Tiger (J).zip",
    "img": true
  },
  {
    "id": 1096,
    "title": "L'Empereur (J)",
    "slug": "l-empereur-j",
    "system": "nes",
    "romFile": "L'Empereur (J).zip"
  },
  {
    "id": 1097,
    "title": "L'Empereur (U)",
    "slug": "l-empereur-u",
    "system": "nes",
    "romFile": "L'Empereur (U).zip"
  },
  {
    "id": 1098,
    "title": "Labyrinth (J)",
    "slug": "labyrinth-j",
    "system": "nes",
    "romFile": "Labyrinth (J).zip",
    "img": true
  },
  {
    "id": 1099,
    "title": "Ladies Golf (VS)",
    "slug": "ladies-golf-vs",
    "system": "nes",
    "romFile": "Ladies Golf (VS).zip"
  },
  {
    "id": 1100,
    "title": "Lagrange Point (J)",
    "slug": "lagrange-point-j",
    "system": "nes",
    "romFile": "Lagrange Point (J).zip",
    "img": true
  },
  {
    "id": 1101,
    "title": "Laser Invasion (U)",
    "slug": "laser-invasion-u",
    "system": "nes",
    "romFile": "Laser Invasion (U).zip",
    "img": true
  },
  {
    "id": 1102,
    "title": "Last Action Hero (U)",
    "slug": "last-action-hero-u",
    "system": "nes",
    "romFile": "Last Action Hero (U) [!].zip",
    "img": true
  },
  {
    "id": 1103,
    "title": "Last Armageddon (J)",
    "slug": "last-armageddon-j",
    "system": "nes",
    "romFile": "Last Armageddon (J).zip",
    "img": true
  },
  {
    "id": 1104,
    "title": "Last Ninja, The (U)",
    "slug": "last-ninja-the-u",
    "system": "nes",
    "romFile": "Last Ninja, The (U).zip",
    "img": true
  },
  {
    "id": 1105,
    "title": "Last Starfighter, The (U)",
    "slug": "last-starfighter-the-u",
    "system": "nes",
    "romFile": "Last Starfighter, The (U).zip",
    "img": true
  },
  {
    "id": 1106,
    "title": "Law of the West (J)",
    "slug": "law-of-the-west-j",
    "system": "nes",
    "romFile": "Law of the West (J).zip",
    "img": true
  },
  {
    "id": 1107,
    "title": "Layla (J)",
    "slug": "layla-j",
    "system": "nes",
    "romFile": "Layla (J) [!].zip",
    "img": true
  },
  {
    "id": 1108,
    "title": "Lee Trevino's Fighting Golf (U)",
    "slug": "lee-trevino-s-fighting-golf-u",
    "system": "nes",
    "romFile": "Lee Trevino's Fighting Golf (U).zip",
    "img": true
  },
  {
    "id": 1109,
    "title": "Legacy of the Wizard (U)",
    "slug": "legacy-of-the-wizard-u",
    "system": "nes",
    "romFile": "Legacy of the Wizard (U).zip",
    "img": true
  },
  {
    "id": 1110,
    "title": "Legend of Kage, The (U)",
    "slug": "legend-of-kage-the-u",
    "system": "nes",
    "romFile": "Legend of Kage, The (U).zip",
    "img": true
  },
  {
    "id": 1111,
    "title": "Legend of Prince Valiant, The (E)",
    "slug": "legend-of-prince-valiant-the-e",
    "system": "nes",
    "romFile": "Legend of Prince Valiant, The (E).zip",
    "img": true
  },
  {
    "id": 1112,
    "title": "Legend of the Ghost Lion (U)",
    "slug": "legend-of-the-ghost-lion-u",
    "system": "nes",
    "romFile": "Legend of the Ghost Lion (U).zip",
    "img": true
  },
  {
    "id": 1113,
    "title": "Legendary Wings (U)",
    "slug": "legendary-wings-u",
    "system": "nes",
    "romFile": "Legendary Wings (U).zip",
    "img": true
  },
  {
    "id": 1114,
    "title": "Legends of the Diamond (U)",
    "slug": "legends-of-the-diamond-u",
    "system": "nes",
    "romFile": "Legends of the Diamond (U).zip"
  },
  {
    "id": 1115,
    "title": "Lemmings (U)",
    "slug": "lemmings-u",
    "system": "nes",
    "romFile": "Lemmings (U).zip",
    "img": true
  },
  {
    "id": 1116,
    "title": "Les Chevaliers Du Zodiaque - La Legende D'or (F)",
    "slug": "les-chevaliers-du-zodiaque-la-legende-d-or-f",
    "system": "nes",
    "romFile": "Les Chevaliers Du Zodiaque - La Legende D'or (F) [!].zip"
  },
  {
    "id": 1117,
    "title": "Lethal Weapon (E, Prototype)",
    "slug": "lethal-weapon-e-prototype",
    "system": "nes",
    "romFile": "Lethal Weapon (E) (Prototype).zip",
    "img": true
  },
  {
    "id": 1118,
    "title": "Lethal Weapon (U)",
    "slug": "lethal-weapon-u",
    "system": "nes",
    "romFile": "Lethal Weapon (U).zip",
    "img": true
  },
  {
    "id": 1119,
    "title": "Lifeforce (E)",
    "slug": "lifeforce-e",
    "system": "nes",
    "romFile": "Lifeforce (E) [!].zip"
  },
  {
    "id": 1120,
    "title": "Lifeforce (U)",
    "slug": "lifeforce-u",
    "system": "nes",
    "romFile": "Lifeforce (U).zip"
  },
  {
    "id": 1121,
    "title": "Linus Spacehead's Cosmic Crusade (Aladdin, U)",
    "slug": "linus-spacehead-s-cosmic-crusade-aladdin-u",
    "system": "nes",
    "romFile": "Linus Spacehead's Cosmic Crusade (Aladdin) (U).zip",
    "img": true
  },
  {
    "id": 1122,
    "title": "Lion King, The (E)",
    "slug": "lion-king-the-e",
    "system": "nes",
    "romFile": "Lion King, The (E).zip",
    "img": true
  },
  {
    "id": 1123,
    "title": "Lipple Island (J)",
    "slug": "lipple-island-j",
    "system": "nes",
    "romFile": "Lipple Island (J).zip",
    "img": true
  },
  {
    "id": 1124,
    "title": "Little League Baseball - Championship Series (U)",
    "slug": "little-league-baseball-championship-series-u",
    "system": "nes",
    "romFile": "Little League Baseball - Championship Series (U).zip",
    "img": true
  },
  {
    "id": 1125,
    "title": "Little Magic (J)",
    "slug": "little-magic-j",
    "system": "nes",
    "romFile": "Little Magic (J).zip",
    "img": true
  },
  {
    "id": 1126,
    "title": "Little Mermaid - Ningyo Hime (J)",
    "slug": "little-mermaid-ningyo-hime-j",
    "system": "nes",
    "romFile": "Little Mermaid - Ningyo Hime (J).zip",
    "img": true
  },
  {
    "id": 1127,
    "title": "Little Mermaid, The (U)",
    "slug": "little-mermaid-the-u",
    "system": "nes",
    "romFile": "Little Mermaid, The (U).zip",
    "img": true
  },
  {
    "id": 1128,
    "title": "Little Nemo - The Dream Master (E)",
    "slug": "little-nemo-the-dream-master-e",
    "system": "nes",
    "romFile": "Little Nemo - The Dream Master (E).zip",
    "img": true
  },
  {
    "id": 1129,
    "title": "Little Nemo - The Dream Master (U)",
    "slug": "little-nemo-the-dream-master-u",
    "system": "nes",
    "romFile": "Little Nemo - The Dream Master (U).zip",
    "img": true
  },
  {
    "id": 1130,
    "title": "Little Ninja Brothers (E)",
    "slug": "little-ninja-brothers-e",
    "system": "nes",
    "romFile": "Little Ninja Brothers (E).zip",
    "img": true
  },
  {
    "id": 1131,
    "title": "Little Ninja Brothers (U)",
    "slug": "little-ninja-brothers-u",
    "system": "nes",
    "romFile": "Little Ninja Brothers (U).zip",
    "img": true
  },
  {
    "id": 1132,
    "title": "Little Samson (U)",
    "slug": "little-samson-u",
    "system": "nes",
    "romFile": "Little Samson (U).zip",
    "img": true
  },
  {
    "id": 1133,
    "title": "Live in Power Bowl - TM Network (J)",
    "slug": "live-in-power-bowl-tm-network-j",
    "system": "nes",
    "romFile": "Live in Power Bowl - TM Network (J).zip"
  },
  {
    "id": 1134,
    "title": "Lode Runner (J)",
    "slug": "lode-runner-j",
    "system": "nes",
    "romFile": "Lode Runner (J).zip",
    "img": true
  },
  {
    "id": 1135,
    "title": "Lode Runner (U)",
    "slug": "lode-runner-u",
    "system": "nes",
    "romFile": "Lode Runner (U).zip",
    "img": true
  },
  {
    "id": 1136,
    "title": "Lone Ranger, The (U)",
    "slug": "lone-ranger-the-u",
    "system": "nes",
    "romFile": "Lone Ranger, The (U).zip",
    "img": true
  },
  {
    "id": 1137,
    "title": "Loopz (U)",
    "slug": "loopz-u",
    "system": "nes",
    "romFile": "Loopz (U).zip",
    "img": true
  },
  {
    "id": 1138,
    "title": "Lord of King, The (J)",
    "slug": "lord-of-king-the-j",
    "system": "nes",
    "romFile": "Lord of King, The (J).zip",
    "img": true
  },
  {
    "id": 1139,
    "title": "Lost Word of Jenny (J)",
    "slug": "lost-word-of-jenny-j",
    "system": "nes",
    "romFile": "Lost Word of Jenny (J).zip"
  },
  {
    "id": 1140,
    "title": "Lot Lot (J)",
    "slug": "lot-lot-j",
    "system": "nes",
    "romFile": "Lot Lot (J).zip",
    "img": true
  },
  {
    "id": 1141,
    "title": "Low G Man (E)",
    "slug": "low-g-man-e",
    "system": "nes",
    "romFile": "Low G Man (E).zip"
  },
  {
    "id": 1142,
    "title": "Low G Man (U)",
    "slug": "low-g-man-u",
    "system": "nes",
    "romFile": "Low G Man (U) [!].zip"
  },
  {
    "id": 1143,
    "title": "Lunar Ball (J)",
    "slug": "lunar-ball-j",
    "system": "nes",
    "romFile": "Lunar Ball (J).zip",
    "img": true
  },
  {
    "id": 1144,
    "title": "Lunar Pool (E)",
    "slug": "lunar-pool-e",
    "system": "nes",
    "romFile": "Lunar Pool (E).zip",
    "img": true
  },
  {
    "id": 1145,
    "title": "Lunar Pool (U)",
    "slug": "lunar-pool-u",
    "system": "nes",
    "romFile": "Lunar Pool (U).zip",
    "img": true
  },
  {
    "id": 1146,
    "title": "Lupin Sansei - Pandora no Isan (J)",
    "slug": "lupin-sansei-pandora-no-isan-j",
    "system": "nes",
    "romFile": "Lupin Sansei - Pandora no Isan (J).zip",
    "img": true
  },
  {
    "id": 1147,
    "title": "M.C. Kids (E)",
    "slug": "m-c-kids-e",
    "system": "nes",
    "romFile": "M.C. Kids (E) [!].zip",
    "img": true
  },
  {
    "id": 1148,
    "title": "M.C. Kids (F)",
    "slug": "m-c-kids-f",
    "system": "nes",
    "romFile": "M.C. Kids (F) [!].zip",
    "img": true
  },
  {
    "id": 1149,
    "title": "M.C. Kids (U)",
    "slug": "m-c-kids-u",
    "system": "nes",
    "romFile": "M.C. Kids (U).zip",
    "img": true
  },
  {
    "id": 1150,
    "title": "M.U.L.E. (U)",
    "slug": "m-u-l-e-u",
    "system": "nes",
    "romFile": "M.U.L.E. (U).zip",
    "img": true
  },
  {
    "id": 1151,
    "title": "M.U.S.C.L.E. (U)",
    "slug": "m-u-s-c-l-e-u",
    "system": "nes",
    "romFile": "M.U.S.C.L.E. (U).zip"
  },
  {
    "id": 1152,
    "title": "M82 Game Selectable Working Product Display (E)",
    "slug": "m82-game-selectable-working-product-display-e",
    "system": "nes",
    "romFile": "M82 Game Selectable Working Product Display (E).zip",
    "img": true
  },
  {
    "id": 1153,
    "title": "Mach Rider (E)",
    "slug": "mach-rider-e",
    "system": "nes",
    "romFile": "Mach Rider (E) [!].zip",
    "img": true
  },
  {
    "id": 1154,
    "title": "Mach Rider (JU)",
    "slug": "mach-rider-ju",
    "system": "nes",
    "romFile": "Mach Rider (JU).zip",
    "img": true
  },
  {
    "id": 1155,
    "title": "Mach Rider (VS)",
    "slug": "mach-rider-vs",
    "system": "nes",
    "romFile": "Mach Rider (VS).zip",
    "img": true
  },
  {
    "id": 1156,
    "title": "Mad City (J, Prototype)",
    "slug": "mad-city-j-prototype",
    "system": "nes",
    "romFile": "Mad City (J) (Prototype).zip",
    "img": true
  },
  {
    "id": 1157,
    "title": "Mad City (J)",
    "slug": "mad-city-j",
    "system": "nes",
    "romFile": "Mad City (J).zip",
    "img": true
  },
  {
    "id": 1158,
    "title": "Mad Max (U)",
    "slug": "mad-max-u",
    "system": "nes",
    "romFile": "Mad Max (U) [!].zip",
    "img": true
  },
  {
    "id": 1159,
    "title": "Mafat Conspiracy - Golgo 13 (U)",
    "slug": "mafat-conspiracy-golgo-13-u",
    "system": "nes",
    "romFile": "Mafat Conspiracy - Golgo 13 (U).zip"
  },
  {
    "id": 1160,
    "title": "Magic Candle, The (J)",
    "slug": "magic-candle-the-j",
    "system": "nes",
    "romFile": "Magic Candle, The (J).zip",
    "img": true
  },
  {
    "id": 1161,
    "title": "Magic Darts (J)",
    "slug": "magic-darts-j",
    "system": "nes",
    "romFile": "Magic Darts (J).zip",
    "img": true
  },
  {
    "id": 1162,
    "title": "Magic Darts (U)",
    "slug": "magic-darts-u",
    "system": "nes",
    "romFile": "Magic Darts (U).zip",
    "img": true
  },
  {
    "id": 1163,
    "title": "Magic Jewelry (As)",
    "slug": "magic-jewelry-as",
    "system": "nes",
    "romFile": "Magic Jewelry (As).zip",
    "img": true
  },
  {
    "id": 1164,
    "title": "Magic John (J)",
    "slug": "magic-john-j",
    "system": "nes",
    "romFile": "Magic John (J).zip",
    "img": true
  },
  {
    "id": 1165,
    "title": "Magic Johnson's Fast Break (U)",
    "slug": "magic-johnson-s-fast-break-u",
    "system": "nes",
    "romFile": "Magic Johnson's Fast Break (U).zip",
    "img": true
  },
  {
    "id": 1166,
    "title": "Magic of Scheherazade, The (U)",
    "slug": "magic-of-scheherazade-the-u",
    "system": "nes",
    "romFile": "Magic of Scheherazade, The (U).zip",
    "img": true
  },
  {
    "id": 1167,
    "title": "Magical Doropie (J)",
    "slug": "magical-doropie-j",
    "system": "nes",
    "romFile": "Magical Doropie (J).zip",
    "img": true
  },
  {
    "id": 1168,
    "title": "Magical Taruruuto Kun - Fantastic World!! (J)",
    "slug": "magical-taruruuto-kun-fantastic-world-j",
    "system": "nes",
    "romFile": "Magical Taruruuto Kun - Fantastic World!! (J).zip",
    "img": true
  },
  {
    "id": 1169,
    "title": "Magical Taruruuto Kun 2 - Mahou Daibouken (J)",
    "slug": "magical-taruruuto-kun-2-mahou-daibouken-j",
    "system": "nes",
    "romFile": "Magical Taruruuto Kun 2 - Mahou Daibouken (J).zip",
    "img": true
  },
  {
    "id": 1170,
    "title": "Magician (U, Prototype)",
    "slug": "magician-u-prototype",
    "system": "nes",
    "romFile": "Magician (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1171,
    "title": "Magician (U)",
    "slug": "magician-u",
    "system": "nes",
    "romFile": "Magician (U).zip",
    "img": true
  },
  {
    "id": 1172,
    "title": "Magmax (J)",
    "slug": "magmax-j",
    "system": "nes",
    "romFile": "Magmax (J).zip",
    "img": true
  },
  {
    "id": 1173,
    "title": "Magmax (U, Prototype)",
    "slug": "magmax-u-prototype",
    "system": "nes",
    "romFile": "Magmax (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1174,
    "title": "Magmax (U)",
    "slug": "magmax-u",
    "system": "nes",
    "romFile": "Magmax (U).zip",
    "img": true
  },
  {
    "id": 1175,
    "title": "Magnum Kiki Ippatsu - Empire City - 1931 (J)",
    "slug": "magnum-kiki-ippatsu-empire-city-1931-j",
    "system": "nes",
    "romFile": "Magnum Kiki Ippatsu - Empire City - 1931 (J).zip",
    "img": true
  },
  {
    "id": 1176,
    "title": "Maharaja (J)",
    "slug": "maharaja-j",
    "system": "nes",
    "romFile": "Maharaja (J).zip",
    "img": true
  },
  {
    "id": 1177,
    "title": "Mahjong (J)",
    "slug": "mahjong-j",
    "system": "nes",
    "romFile": "Mahjong (J).zip",
    "img": true
  },
  {
    "id": 1178,
    "title": "Mahjong (VS, Player 1 Mode)",
    "slug": "mahjong-vs-player-1-mode",
    "system": "nes",
    "romFile": "Mahjong (VS) (Player 1 Mode).zip",
    "img": true
  },
  {
    "id": 1179,
    "title": "Mahjong (VS, Player 2 Mode)",
    "slug": "mahjong-vs-player-2-mode",
    "system": "nes",
    "romFile": "Mahjong (VS) (Player 2 Mode).zip",
    "img": true
  },
  {
    "id": 1180,
    "title": "Mahjong (VS)",
    "slug": "mahjong-vs",
    "system": "nes",
    "romFile": "Mahjong (VS) [!].zip",
    "img": true
  },
  {
    "id": 1181,
    "title": "Mahjong Club - Nagatachou (J)",
    "slug": "mahjong-club-nagatachou-j",
    "system": "nes",
    "romFile": "Mahjong Club - Nagatachou (J).zip",
    "img": true
  },
  {
    "id": 1182,
    "title": "Mahjong RPG Dora Dora Dora (J)",
    "slug": "mahjong-rpg-dora-dora-dora-j",
    "system": "nes",
    "romFile": "Mahjong RPG Dora Dora Dora (J).zip",
    "img": true
  },
  {
    "id": 1183,
    "title": "Mahjong Taikai (J)",
    "slug": "mahjong-taikai-j",
    "system": "nes",
    "romFile": "Mahjong Taikai (J).zip",
    "img": true
  },
  {
    "id": 1184,
    "title": "Mahjong Taisen (J)",
    "slug": "mahjong-taisen-j",
    "system": "nes",
    "romFile": "Mahjong Taisen (J).zip",
    "img": true
  },
  {
    "id": 1185,
    "title": "Mahou no Princess Minky Momo - Remember Dream (J)",
    "slug": "mahou-no-princess-minky-momo-remember-dream-j",
    "system": "nes",
    "romFile": "Mahou no Princess Minky Momo - Remember Dream (J).zip",
    "img": true
  },
  {
    "id": 1186,
    "title": "Maison Ikkoku (J)",
    "slug": "maison-ikkoku-j",
    "system": "nes",
    "romFile": "Maison Ikkoku (J).zip",
    "img": true
  },
  {
    "id": 1187,
    "title": "Majaventure - Mahjong Senki (J)",
    "slug": "majaventure-mahjong-senki-j",
    "system": "nes",
    "romFile": "Majaventure - Mahjong Senki (J).zip",
    "img": true
  },
  {
    "id": 1188,
    "title": "Majin Eiyuu Den Wataru Gaiden (J)",
    "slug": "majin-eiyuu-den-wataru-gaiden-j",
    "system": "nes",
    "romFile": "Majin Eiyuu Den Wataru Gaiden (J).zip",
    "img": true
  },
  {
    "id": 1189,
    "title": "Major League (J)",
    "slug": "major-league-j",
    "system": "nes",
    "romFile": "Major League (J).zip",
    "img": true
  },
  {
    "id": 1190,
    "title": "Major League Baseball (U, PRG1)",
    "slug": "major-league-baseball-u-prg1",
    "system": "nes",
    "romFile": "Major League Baseball (U) (PRG1).zip",
    "img": true
  },
  {
    "id": 1191,
    "title": "Major League Baseball (U)",
    "slug": "major-league-baseball-u",
    "system": "nes",
    "romFile": "Major League Baseball (U).zip",
    "img": true
  },
  {
    "id": 1192,
    "title": "Majou Densetsu 2 - Daimashikyou Galious (J)",
    "slug": "majou-densetsu-2-daimashikyou-galious-j",
    "system": "nes",
    "romFile": "Majou Densetsu 2 - Daimashikyou Galious (J).zip",
    "img": true
  },
  {
    "id": 1193,
    "title": "Makai-Mura (J)",
    "slug": "makai-mura-j",
    "system": "nes",
    "romFile": "Makai-Mura (J).zip",
    "img": true
  },
  {
    "id": 1194,
    "title": "Maniac Mansion (E)",
    "slug": "maniac-mansion-e",
    "system": "nes",
    "romFile": "Maniac Mansion (E).zip",
    "img": true
  },
  {
    "id": 1195,
    "title": "Maniac Mansion (J)",
    "slug": "maniac-mansion-j",
    "system": "nes",
    "romFile": "Maniac Mansion (J).zip",
    "img": true
  },
  {
    "id": 1196,
    "title": "Maniac Mansion (SW)",
    "slug": "maniac-mansion-sw",
    "system": "nes",
    "romFile": "Maniac Mansion (SW).zip",
    "img": true
  },
  {
    "id": 1197,
    "title": "Maniac Mansion (U)",
    "slug": "maniac-mansion-u",
    "system": "nes",
    "romFile": "Maniac Mansion (U).zip",
    "img": true
  },
  {
    "id": 1198,
    "title": "Mappy (J)",
    "slug": "mappy-j",
    "system": "nes",
    "romFile": "Mappy (J) [!].zip",
    "img": true
  },
  {
    "id": 1199,
    "title": "Mappy Kids (J)",
    "slug": "mappy-kids-j",
    "system": "nes",
    "romFile": "Mappy Kids (J).zip",
    "img": true
  },
  {
    "id": 1200,
    "title": "Mappy-Land (J)",
    "slug": "mappy-land-j",
    "system": "nes",
    "romFile": "Mappy-Land (J).zip",
    "img": true
  },
  {
    "id": 1201,
    "title": "Mappy-Land (U)",
    "slug": "mappy-land-u",
    "system": "nes",
    "romFile": "Mappy-Land (U).zip",
    "img": true
  },
  {
    "id": 1202,
    "title": "Marble Madness (E)",
    "slug": "marble-madness-e",
    "system": "nes",
    "romFile": "Marble Madness (E).zip",
    "img": true
  },
  {
    "id": 1203,
    "title": "Marble Madness (U)",
    "slug": "marble-madness-u",
    "system": "nes",
    "romFile": "Marble Madness (U).zip",
    "img": true
  },
  {
    "id": 1204,
    "title": "Mari - Ayami - Luka no AV Poker (Pu Nu Jing Ling, As)",
    "slug": "mari-ayami-luka-no-av-poker-pu-nu-jing-ling-as",
    "system": "nes",
    "romFile": "Mari - Ayami - Luka no AV Poker (Pu Nu Jing Ling) (As).zip"
  },
  {
    "id": 1205,
    "title": "Marusa no Onna (J)",
    "slug": "marusa-no-onna-j",
    "system": "nes",
    "romFile": "Marusa no Onna (J).zip",
    "img": true
  },
  {
    "id": 1206,
    "title": "Marvel's X-Men (U)",
    "slug": "marvel-s-x-men-u",
    "system": "nes",
    "romFile": "Marvel's X-Men (U).zip"
  },
  {
    "id": 1207,
    "title": "Mashou (J)",
    "slug": "mashou-j",
    "system": "nes",
    "romFile": "Mashou (J).zip",
    "img": true
  },
  {
    "id": 1208,
    "title": "Master Chu & The Drunkard Hu (U)",
    "slug": "master-chu-the-drunkard-hu-u",
    "system": "nes",
    "romFile": "Master Chu & The Drunkard Hu (U).zip",
    "img": true
  },
  {
    "id": 1209,
    "title": "Master_Fighter_II_ (Unl)",
    "slug": "master-fighter-ii-unl-a1",
    "system": "nes",
    "romFile": "Master_Fighter_II_(Unl)_[a1].zip",
    "img": true
  },
  {
    "id": 1210,
    "title": "Masuzoe Youichi - Icchou Made Famicom (J)",
    "slug": "masuzoe-youichi-icchou-made-famicom-j",
    "system": "nes",
    "romFile": "Masuzoe Youichi - Icchou Made Famicom (J).zip"
  },
  {
    "id": 1211,
    "title": "Matendouji (J)",
    "slug": "matendouji-j",
    "system": "nes",
    "romFile": "Matendouji (J).zip",
    "img": true
  },
  {
    "id": 1212,
    "title": "Matsumoto Tooru no Kabushiki Hisshou Gaku (J)",
    "slug": "matsumoto-tooru-no-kabushiki-hisshou-gaku-j",
    "system": "nes",
    "romFile": "Matsumoto Tooru no Kabushiki Hisshou Gaku (J).zip",
    "img": true
  },
  {
    "id": 1213,
    "title": "Matsumoto Tooru no Kabushiki Hisshou Gaku 2 (J)",
    "slug": "matsumoto-tooru-no-kabushiki-hisshou-gaku-2-j",
    "system": "nes",
    "romFile": "Matsumoto Tooru no Kabushiki Hisshou Gaku 2 (J).zip",
    "img": true
  },
  {
    "id": 1214,
    "title": "Max Warrior - Wakusei Kaigenrei (J)",
    "slug": "max-warrior-wakusei-kaigenrei-j",
    "system": "nes",
    "romFile": "Max Warrior - Wakusei Kaigenrei (J).zip",
    "img": true
  },
  {
    "id": 1215,
    "title": "Mechanized Attack (U)",
    "slug": "mechanized-attack-u",
    "system": "nes",
    "romFile": "Mechanized Attack (U).zip",
    "img": true
  },
  {
    "id": 1216,
    "title": "Mega Man (E)",
    "slug": "mega-man-e",
    "system": "nes",
    "romFile": "Mega Man (E) [!].zip",
    "img": true
  },
  {
    "id": 1217,
    "title": "Mega Man (U)",
    "slug": "mega-man-u",
    "system": "nes",
    "romFile": "Mega Man (U).zip",
    "img": true
  },
  {
    "id": 1218,
    "title": "Mega Man 2 (E)",
    "slug": "mega-man-2-e",
    "system": "nes",
    "romFile": "Mega Man 2 (E) [!].zip",
    "img": true
  },
  {
    "id": 1219,
    "title": "Mega Man 2 (U)",
    "slug": "mega-man-2-u",
    "system": "nes",
    "romFile": "Mega Man 2 (U).zip",
    "img": true
  },
  {
    "id": 1220,
    "title": "Mega Man 3 (PC10)",
    "slug": "mega-man-3-pc10",
    "system": "nes",
    "romFile": "Mega Man 3 (PC10) [!].zip",
    "img": true
  },
  {
    "id": 1221,
    "title": "Mega Man 3 (U, Prototype)",
    "slug": "mega-man-3-u-prototype",
    "system": "nes",
    "romFile": "Mega Man 3 (U) (Prototype) [!].zip",
    "img": true
  },
  {
    "id": 1222,
    "title": "Mega Man 3 (U)",
    "slug": "mega-man-3-u",
    "system": "nes",
    "romFile": "Mega Man 3 (U) [!].zip",
    "img": true
  },
  {
    "id": 1223,
    "title": "Mega Man 4 (E)",
    "slug": "mega-man-4-e",
    "system": "nes",
    "romFile": "Mega Man 4 (E).zip",
    "img": true
  },
  {
    "id": 1224,
    "title": "Mega Man 4 (U)",
    "slug": "mega-man-4-u",
    "system": "nes",
    "romFile": "Mega Man 4 (U).zip",
    "img": true
  },
  {
    "id": 1225,
    "title": "Mega Man 5 (U)",
    "slug": "mega-man-5-u",
    "system": "nes",
    "romFile": "Mega Man 5 (U).zip",
    "img": true
  },
  {
    "id": 1226,
    "title": "Mega Man 6 (U)",
    "slug": "mega-man-6-u",
    "system": "nes",
    "romFile": "Mega Man 6 (U).zip",
    "img": true
  },
  {
    "id": 1227,
    "title": "Mei Nu Quan (Honey Peach, As)",
    "slug": "mei-nu-quan-honey-peach-as",
    "system": "nes",
    "romFile": "Mei Nu Quan (Honey Peach) (As).zip"
  },
  {
    "id": 1228,
    "title": "Meiji Ishin (J)",
    "slug": "meiji-ishin-j",
    "system": "nes",
    "romFile": "Meiji Ishin (J).zip",
    "img": true
  },
  {
    "id": 1229,
    "title": "Meikyuu Kumikyoku (J)",
    "slug": "meikyuu-kumikyoku-j",
    "system": "nes",
    "romFile": "Meikyuu Kumikyoku (J).zip"
  },
  {
    "id": 1230,
    "title": "Meikyuu Shima (J)",
    "slug": "meikyuu-shima-j",
    "system": "nes",
    "romFile": "Meikyuu Shima (J).zip"
  },
  {
    "id": 1231,
    "title": "Meimon! Dai San Yakyuu Bu (J)",
    "slug": "meimon-dai-san-yakyuu-bu-j",
    "system": "nes",
    "romFile": "Meimon! Dai San Yakyuu Bu (J).zip",
    "img": true
  },
  {
    "id": 1232,
    "title": "Meimon! Takonishi Ouendan - Kouha 6 Nin Shuu (J)",
    "slug": "meimon-takonishi-ouendan-kouha-6-nin-shuu-j",
    "system": "nes",
    "romFile": "Meimon! Takonishi Ouendan - Kouha 6 Nin Shuu (J).zip",
    "img": true
  },
  {
    "id": 1233,
    "title": "Meitantei Holmes - Kiri no London Satsujin Jiken (J)",
    "slug": "meitantei-holmes-kiri-no-london-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Meitantei Holmes - Kiri no London Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1234,
    "title": "Meitantei Holmes - M Kara no Chousenjou (J)",
    "slug": "meitantei-holmes-m-kara-no-chousenjou-j",
    "system": "nes",
    "romFile": "Meitantei Holmes - M Kara no Chousenjou (J).zip",
    "img": true
  },
  {
    "id": 1235,
    "title": "Melville's Flame (J)",
    "slug": "melville-s-flame-j",
    "system": "nes",
    "romFile": "Melville's Flame (J).zip",
    "img": true
  },
  {
    "id": 1236,
    "title": "Menace Beach (U)",
    "slug": "menace-beach-u",
    "system": "nes",
    "romFile": "Menace Beach (U).zip",
    "img": true
  },
  {
    "id": 1237,
    "title": "Mendel Palace (U)",
    "slug": "mendel-palace-u",
    "system": "nes",
    "romFile": "Mendel Palace (U).zip",
    "img": true
  },
  {
    "id": 1238,
    "title": "Mermaids of Atlantis (U)",
    "slug": "mermaids-of-atlantis-u",
    "system": "nes",
    "romFile": "Mermaids of Atlantis (U).zip"
  },
  {
    "id": 1239,
    "title": "Metal Fighter (U)",
    "slug": "metal-fighter-u",
    "system": "nes",
    "romFile": "Metal Fighter (U).zip",
    "img": true
  },
  {
    "id": 1240,
    "title": "Metal Flame Psybuster (J)",
    "slug": "metal-flame-psybuster-j",
    "system": "nes",
    "romFile": "Metal Flame Psybuster (J).zip",
    "img": true
  },
  {
    "id": 1241,
    "title": "Metal Gear (E)",
    "slug": "metal-gear-e",
    "system": "nes",
    "romFile": "Metal Gear (E) [!].zip",
    "img": true
  },
  {
    "id": 1242,
    "title": "Metal Gear (J)",
    "slug": "metal-gear-j",
    "system": "nes",
    "romFile": "Metal Gear (J).zip",
    "img": true
  },
  {
    "id": 1243,
    "title": "Metal Gear (U)",
    "slug": "metal-gear-u",
    "system": "nes",
    "romFile": "Metal Gear (U).zip",
    "img": true
  },
  {
    "id": 1244,
    "title": "Metal Max (J)",
    "slug": "metal-max-j",
    "system": "nes",
    "romFile": "Metal Max (J).zip",
    "img": true
  },
  {
    "id": 1245,
    "title": "Metal Mech (U)",
    "slug": "metal-mech-u",
    "system": "nes",
    "romFile": "Metal Mech (U).zip"
  },
  {
    "id": 1246,
    "title": "Metal Slader Glory (J)",
    "slug": "metal-slader-glory-j",
    "system": "nes",
    "romFile": "Metal Slader Glory (J).zip",
    "img": true
  },
  {
    "id": 1247,
    "title": "Metal Storm (U)",
    "slug": "metal-storm-u",
    "system": "nes",
    "romFile": "Metal Storm (U).zip",
    "img": true
  },
  {
    "id": 1248,
    "title": "Metro-Cross (J)",
    "slug": "metro-cross-j",
    "system": "nes",
    "romFile": "Metro-Cross (J).zip",
    "img": true
  },
  {
    "id": 1249,
    "title": "Metroid (E)",
    "slug": "metroid-e",
    "system": "nes",
    "romFile": "Metroid (E) [!].zip",
    "img": true
  },
  {
    "id": 1250,
    "title": "Metroid (U)",
    "slug": "metroid-u",
    "system": "nes",
    "romFile": "Metroid (U) [!].zip",
    "img": true
  },
  {
    "id": 1251,
    "title": "Mezase Pachi Pro - Pachio Kun (J)",
    "slug": "mezase-pachi-pro-pachio-kun-j",
    "system": "nes",
    "romFile": "Mezase Pachi Pro - Pachio Kun (J).zip",
    "img": true
  },
  {
    "id": 1252,
    "title": "Mezase Top Pro - Green ni Kakeru Yume (J)",
    "slug": "mezase-top-pro-green-ni-kakeru-yume-j",
    "system": "nes",
    "romFile": "Mezase Top Pro - Green ni Kakeru Yume (J).zip",
    "img": true
  },
  {
    "id": 1253,
    "title": "MiG 29 - Soviet Fighter (U)",
    "slug": "mig-29-soviet-fighter-u",
    "system": "nes",
    "romFile": "MiG 29 - Soviet Fighter (U).zip",
    "img": true
  },
  {
    "id": 1254,
    "title": "Michael Andretti's World Grand Prix (U)",
    "slug": "michael-andretti-s-world-grand-prix-u",
    "system": "nes",
    "romFile": "Michael Andretti's World Grand Prix (U).zip"
  },
  {
    "id": 1255,
    "title": "Mickey Mouse (J)",
    "slug": "mickey-mouse-j",
    "system": "nes",
    "romFile": "Mickey Mouse (J).zip",
    "img": true
  },
  {
    "id": 1256,
    "title": "Mickey Mouse 3 - Yume Fuusen (J)",
    "slug": "mickey-mouse-3-yume-fuusen-j",
    "system": "nes",
    "romFile": "Mickey Mouse 3 - Yume Fuusen (J).zip",
    "img": true
  },
  {
    "id": 1257,
    "title": "Mickey Mousecapade (U)",
    "slug": "mickey-mousecapade-u",
    "system": "nes",
    "romFile": "Mickey Mousecapade (U).zip",
    "img": true
  },
  {
    "id": 1258,
    "title": "Mickey's Adventures in Numberland (U)",
    "slug": "mickey-s-adventures-in-numberland-u",
    "system": "nes",
    "romFile": "Mickey's Adventures in Numberland (U).zip"
  },
  {
    "id": 1259,
    "title": "Mickey's Safari in Letterland (U)",
    "slug": "mickey-s-safari-in-letterland-u",
    "system": "nes",
    "romFile": "Mickey's Safari in Letterland (U).zip",
    "img": true
  },
  {
    "id": 1260,
    "title": "Micro Machines (Aladdin, UE)",
    "slug": "micro-machines-aladdin-ue",
    "system": "nes",
    "romFile": "Micro Machines (Aladdin) (UE).zip",
    "img": true
  },
  {
    "id": 1261,
    "title": "Micro Machines (U)",
    "slug": "micro-machines-u",
    "system": "nes",
    "romFile": "Micro Machines (U).zip",
    "img": true
  },
  {
    "id": 1262,
    "title": "Might and Magic (J)",
    "slug": "might-and-magic-j",
    "system": "nes",
    "romFile": "Might and Magic (J).zip",
    "img": true
  },
  {
    "id": 1263,
    "title": "Might and Magic (U)",
    "slug": "might-and-magic-u",
    "system": "nes",
    "romFile": "Might and Magic (U).zip",
    "img": true
  },
  {
    "id": 1264,
    "title": "Mighty Bomb Jack (J)",
    "slug": "mighty-bomb-jack-j",
    "system": "nes",
    "romFile": "Mighty Bomb Jack (J).zip",
    "img": true
  },
  {
    "id": 1265,
    "title": "Mighty Bomb Jack (U)",
    "slug": "mighty-bomb-jack-u",
    "system": "nes",
    "romFile": "Mighty Bomb Jack (U).zip",
    "img": true
  },
  {
    "id": 1266,
    "title": "Mighty Final Fight (J)",
    "slug": "mighty-final-fight-j",
    "system": "nes",
    "romFile": "Mighty Final Fight (J).zip",
    "img": true
  },
  {
    "id": 1267,
    "title": "Mighty Final Fight (U)",
    "slug": "mighty-final-fight-u",
    "system": "nes",
    "romFile": "Mighty Final Fight (U).zip",
    "img": true
  },
  {
    "id": 1268,
    "title": "Mike Tyson's Punch-Out!! (E, PRG0)",
    "slug": "mike-tyson-s-punch-out-e-prg0",
    "system": "nes",
    "romFile": "Mike Tyson's Punch-Out!! (E) (PRG0) [!].zip",
    "img": true
  },
  {
    "id": 1269,
    "title": "Mike Tyson's Punch-Out!! (E, PRG1)",
    "slug": "mike-tyson-s-punch-out-e-prg1",
    "system": "nes",
    "romFile": "Mike Tyson's Punch-Out!! (E) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 1270,
    "title": "Mike Tyson's Punch-Out!! (PC10)",
    "slug": "mike-tyson-s-punch-out-pc10",
    "system": "nes",
    "romFile": "Mike Tyson's Punch-Out!! (PC10).zip",
    "img": true
  },
  {
    "id": 1271,
    "title": "Mike Tyson's Punch-Out!! (U, PRG0)",
    "slug": "mike-tyson-s-punch-out-u-prg0",
    "system": "nes",
    "romFile": "Mike Tyson's Punch-Out!! (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 1272,
    "title": "Mike Tyson's Punch-Out!! (U, PRG1)",
    "slug": "mike-tyson-s-punch-out-u-prg1",
    "system": "nes",
    "romFile": "Mike Tyson's Punch-Out!! (U) (PRG1).zip",
    "img": true
  },
  {
    "id": 1273,
    "title": "Millipede (J)",
    "slug": "millipede-j",
    "system": "nes",
    "romFile": "Millipede (J).zip",
    "img": true
  },
  {
    "id": 1274,
    "title": "Millipede (U)",
    "slug": "millipede-u",
    "system": "nes",
    "romFile": "Millipede (U).zip",
    "img": true
  },
  {
    "id": 1275,
    "title": "Milon's Secret Castle (J)",
    "slug": "milon-s-secret-castle-j",
    "system": "nes",
    "romFile": "Milon's Secret Castle (J) [!].zip",
    "img": true
  },
  {
    "id": 1276,
    "title": "Milon's Secret Castle (U)",
    "slug": "milon-s-secret-castle-u",
    "system": "nes",
    "romFile": "Milon's Secret Castle (U).zip",
    "img": true
  },
  {
    "id": 1277,
    "title": "Mindseeker (J)",
    "slug": "mindseeker-j",
    "system": "nes",
    "romFile": "Mindseeker (J).zip",
    "img": true
  },
  {
    "id": 1278,
    "title": "Minelvaton Saga (J)",
    "slug": "minelvaton-saga-j",
    "system": "nes",
    "romFile": "Minelvaton Saga (J).zip",
    "img": true
  },
  {
    "id": 1279,
    "title": "Mini Putt (J)",
    "slug": "mini-putt-j",
    "system": "nes",
    "romFile": "Mini Putt (J).zip",
    "img": true
  },
  {
    "id": 1280,
    "title": "Minna no Taabou no Nakayoshi Daisakusen (J)",
    "slug": "minna-no-taabou-no-nakayoshi-daisakusen-j",
    "system": "nes",
    "romFile": "Minna no Taabou no Nakayoshi Daisakusen (J).zip",
    "img": true
  },
  {
    "id": 1281,
    "title": "Miracle Piano Teaching System, The (U)",
    "slug": "miracle-piano-teaching-system-the-u",
    "system": "nes",
    "romFile": "Miracle Piano Teaching System, The (U).zip",
    "img": true
  },
  {
    "id": 1282,
    "title": "Miracle Ropit's Adventure in 2100 (J)",
    "slug": "miracle-ropit-s-adventure-in-2100-j",
    "system": "nes",
    "romFile": "Miracle Ropit's Adventure in 2100 (J).zip",
    "img": true
  },
  {
    "id": 1283,
    "title": "Mirai Senshi - Lios (J)",
    "slug": "mirai-senshi-lios-j",
    "system": "nes",
    "romFile": "Mirai Senshi - Lios (J).zip",
    "img": true
  },
  {
    "id": 1284,
    "title": "Mirai Shinwa Jarvas (J)",
    "slug": "mirai-shinwa-jarvas-j",
    "system": "nes",
    "romFile": "Mirai Shinwa Jarvas (J).zip",
    "img": true
  },
  {
    "id": 1285,
    "title": "Mission Cobra (U)",
    "slug": "mission-cobra-u",
    "system": "nes",
    "romFile": "Mission Cobra (U).zip",
    "img": true
  },
  {
    "id": 1286,
    "title": "Mission Impossible (E)",
    "slug": "mission-impossible-e",
    "system": "nes",
    "romFile": "Mission Impossible (E) [!].zip",
    "img": true
  },
  {
    "id": 1287,
    "title": "Mission Impossible (U)",
    "slug": "mission-impossible-u",
    "system": "nes",
    "romFile": "Mission Impossible (U).zip",
    "img": true
  },
  {
    "id": 1288,
    "title": "Mississippi Satsujin Jiken (J)",
    "slug": "mississippi-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Mississippi Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1289,
    "title": "Mito Koumon (J)",
    "slug": "mito-koumon-j",
    "system": "nes",
    "romFile": "Mito Koumon (J).zip",
    "img": true
  },
  {
    "id": 1290,
    "title": "Mito Koumon - Sekai Manyuu Ki (J)",
    "slug": "mito-koumon-sekai-manyuu-ki-j",
    "system": "nes",
    "romFile": "Mito Koumon - Sekai Manyuu Ki (J).zip",
    "img": true
  },
  {
    "id": 1291,
    "title": "Mitsume ga Tooru (J)",
    "slug": "mitsume-ga-tooru-j",
    "system": "nes",
    "romFile": "Mitsume ga Tooru (J).zip",
    "img": true
  },
  {
    "id": 1292,
    "title": "Mizushima Shinji no Dai Koushien (J)",
    "slug": "mizushima-shinji-no-dai-koushien-j",
    "system": "nes",
    "romFile": "Mizushima Shinji no Dai Koushien (J).zip",
    "img": true
  },
  {
    "id": 1293,
    "title": "Moai Kun (J)",
    "slug": "moai-kun-j",
    "system": "nes",
    "romFile": "Moai Kun (J).zip",
    "img": true
  },
  {
    "id": 1294,
    "title": "Mobile Suit Z Gundam - Hot Scramble (J)",
    "slug": "mobile-suit-z-gundam-hot-scramble-j",
    "system": "nes",
    "romFile": "Mobile Suit Z Gundam - Hot Scramble (J).zip",
    "img": true
  },
  {
    "id": 1295,
    "title": "Moe Pro! '90 - Kandou Hen (J)",
    "slug": "moe-pro-90-kandou-hen-j",
    "system": "nes",
    "romFile": "Moe Pro! '90 - Kandou Hen (J).zip",
    "img": true
  },
  {
    "id": 1296,
    "title": "Moe Pro! - Saikyou Hen (J)",
    "slug": "moe-pro-saikyou-hen-j",
    "system": "nes",
    "romFile": "Moe Pro! - Saikyou Hen (J).zip",
    "img": true
  },
  {
    "id": 1297,
    "title": "Moero TwinBee - Cinnamon Hakase wo Sukue! (J)",
    "slug": "moero-twinbee-cinnamon-hakase-wo-sukue-j",
    "system": "nes",
    "romFile": "Moero TwinBee - Cinnamon Hakase wo Sukue! (J).zip",
    "img": true
  },
  {
    "id": 1298,
    "title": "Moero!! Junior Basket - Two on Two (J)",
    "slug": "moero-junior-basket-two-on-two-j",
    "system": "nes",
    "romFile": "Moero!! Junior Basket - Two on Two (J).zip",
    "img": true
  },
  {
    "id": 1299,
    "title": "Moero!! Juudou Warriors (J)",
    "slug": "moero-juudou-warriors-j",
    "system": "nes",
    "romFile": "Moero!! Juudou Warriors (J).zip",
    "img": true
  },
  {
    "id": 1300,
    "title": "Moero!! Pro Soccer (J)",
    "slug": "moero-pro-soccer-j",
    "system": "nes",
    "romFile": "Moero!! Pro Soccer (J).zip",
    "img": true
  },
  {
    "id": 1301,
    "title": "Moero!! Pro Tennis (J)",
    "slug": "moero-pro-tennis-j",
    "system": "nes",
    "romFile": "Moero!! Pro Tennis (J).zip",
    "img": true
  },
  {
    "id": 1302,
    "title": "Moero!! Pro Yakyuu '88 - Ketteiban (J)",
    "slug": "moero-pro-yakyuu-88-ketteiban-j",
    "system": "nes",
    "romFile": "Moero!! Pro Yakyuu '88 - Ketteiban (J).zip",
    "img": true
  },
  {
    "id": 1303,
    "title": "Moero!! Pro Yakyuu (Black, J)",
    "slug": "moero-pro-yakyuu-black-j",
    "system": "nes",
    "romFile": "Moero!! Pro Yakyuu (Black) (J).zip",
    "img": true
  },
  {
    "id": 1304,
    "title": "Moero!! Pro Yakyuu (Red, J)",
    "slug": "moero-pro-yakyuu-red-j",
    "system": "nes",
    "romFile": "Moero!! Pro Yakyuu (Red) (J).zip",
    "img": true
  },
  {
    "id": 1305,
    "title": "Moeru! Oniisan (J)",
    "slug": "moeru-oniisan-j",
    "system": "nes",
    "romFile": "Moeru! Oniisan (J).zip",
    "img": true
  },
  {
    "id": 1306,
    "title": "Momotarou Densetsu (J)",
    "slug": "momotarou-densetsu-j",
    "system": "nes",
    "romFile": "Momotarou Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1307,
    "title": "Momotarou Densetsu Gaiden (J)",
    "slug": "momotarou-densetsu-gaiden-j",
    "system": "nes",
    "romFile": "Momotarou Densetsu Gaiden (J).zip",
    "img": true
  },
  {
    "id": 1308,
    "title": "Momotarou Dentetsu (J)",
    "slug": "momotarou-dentetsu-j",
    "system": "nes",
    "romFile": "Momotarou Dentetsu (J).zip",
    "img": true
  },
  {
    "id": 1309,
    "title": "Money Game 2 - Kabutochou no Kiseki, The (J)",
    "slug": "money-game-2-kabutochou-no-kiseki-the-j",
    "system": "nes",
    "romFile": "Money Game 2 - Kabutochou no Kiseki, The (J).zip"
  },
  {
    "id": 1310,
    "title": "Money Game, The (J)",
    "slug": "money-game-the-j",
    "system": "nes",
    "romFile": "Money Game, The (J).zip",
    "img": true
  },
  {
    "id": 1311,
    "title": "Monopoly (J)",
    "slug": "monopoly-j",
    "system": "nes",
    "romFile": "Monopoly (J).zip",
    "img": true
  },
  {
    "id": 1312,
    "title": "Monopoly (U)",
    "slug": "monopoly-u",
    "system": "nes",
    "romFile": "Monopoly (U).zip",
    "img": true
  },
  {
    "id": 1313,
    "title": "Monster In My Pocket (E)",
    "slug": "monster-in-my-pocket-e",
    "system": "nes",
    "romFile": "Monster In My Pocket (E).zip",
    "img": true
  },
  {
    "id": 1314,
    "title": "Monster In My Pocket (U)",
    "slug": "monster-in-my-pocket-u",
    "system": "nes",
    "romFile": "Monster In My Pocket (U).zip",
    "img": true
  },
  {
    "id": 1315,
    "title": "Monster Maker - 7 Tsu no Hihou (J)",
    "slug": "monster-maker-7-tsu-no-hihou-j",
    "system": "nes",
    "romFile": "Monster Maker - 7 Tsu no Hihou (J).zip",
    "img": true
  },
  {
    "id": 1316,
    "title": "Monster Party (U)",
    "slug": "monster-party-u",
    "system": "nes",
    "romFile": "Monster Party (U).zip",
    "img": true
  },
  {
    "id": 1317,
    "title": "Monster Truck Rally (U)",
    "slug": "monster-truck-rally-u",
    "system": "nes",
    "romFile": "Monster Truck Rally (U).zip",
    "img": true
  },
  {
    "id": 1318,
    "title": "Moon Crystal (J)",
    "slug": "moon-crystal-j",
    "system": "nes",
    "romFile": "Moon Crystal (J).zip",
    "img": true
  },
  {
    "id": 1319,
    "title": "Moon Ranger (U)",
    "slug": "moon-ranger-u",
    "system": "nes",
    "romFile": "Moon Ranger (U).zip",
    "img": true
  },
  {
    "id": 1320,
    "title": "Morita Kazuo no Shougi (J)",
    "slug": "morita-kazuo-no-shougi-j",
    "system": "nes",
    "romFile": "Morita Kazuo no Shougi (J).zip",
    "img": true
  },
  {
    "id": 1321,
    "title": "Mother (J)",
    "slug": "mother-j",
    "system": "nes",
    "romFile": "Mother (J).zip",
    "img": true
  },
  {
    "id": 1322,
    "title": "Motocross Champion (J)",
    "slug": "motocross-champion-j",
    "system": "nes",
    "romFile": "Motocross Champion (J).zip",
    "img": true
  },
  {
    "id": 1323,
    "title": "Motor City Patrol (U)",
    "slug": "motor-city-patrol-u",
    "system": "nes",
    "romFile": "Motor City Patrol (U).zip",
    "img": true
  },
  {
    "id": 1324,
    "title": "Mottomo Abunai Deka (J)",
    "slug": "mottomo-abunai-deka-j",
    "system": "nes",
    "romFile": "Mottomo Abunai Deka (J).zip",
    "img": true
  },
  {
    "id": 1325,
    "title": "Mouryou Senki Madara (J)",
    "slug": "mouryou-senki-madara-j",
    "system": "nes",
    "romFile": "Mouryou Senki Madara (J).zip",
    "img": true
  },
  {
    "id": 1326,
    "title": "Mr. Gimmick (E)",
    "slug": "mr-gimmick-e",
    "system": "nes",
    "romFile": "Mr. Gimmick (E) [!].zip",
    "img": true
  },
  {
    "id": 1327,
    "title": "Muppet Adventure - Chaos at the Carnival (U)",
    "slug": "muppet-adventure-chaos-at-the-carnival-u",
    "system": "nes",
    "romFile": "Muppet Adventure - Chaos at the Carnival (U).zip",
    "img": true
  },
  {
    "id": 1328,
    "title": "Musashi no Bouken (J)",
    "slug": "musashi-no-bouken-j",
    "system": "nes",
    "romFile": "Musashi no Bouken (J).zip",
    "img": true
  },
  {
    "id": 1329,
    "title": "Musashi no Ken - Tadaima Shugyou Chuu (J)",
    "slug": "musashi-no-ken-tadaima-shugyou-chuu-j",
    "system": "nes",
    "romFile": "Musashi no Ken - Tadaima Shugyou Chuu (J).zip",
    "img": true
  },
  {
    "id": 1330,
    "title": "Mutant Virus, The (U)",
    "slug": "mutant-virus-the-u",
    "system": "nes",
    "romFile": "Mutant Virus, The (U).zip"
  },
  {
    "id": 1331,
    "title": "My Life My Love - Boku no Yume - Watashi no Negai (J)",
    "slug": "my-life-my-love-boku-no-yume-watashi-no-negai-j",
    "system": "nes",
    "romFile": "My Life My Love - Boku no Yume - Watashi no Negai (J).zip",
    "img": true
  },
  {
    "id": 1332,
    "title": "Mystery Quest (U)",
    "slug": "mystery-quest-u",
    "system": "nes",
    "romFile": "Mystery Quest (U).zip",
    "img": true
  },
  {
    "id": 1333,
    "title": "NARC (U)",
    "slug": "narc-u",
    "system": "nes",
    "romFile": "NARC (U).zip",
    "img": true
  },
  {
    "id": 1334,
    "title": "NES Open Tournament Golf (U)",
    "slug": "nes-open-tournament-golf-u",
    "system": "nes",
    "romFile": "NES Open Tournament Golf (U).zip",
    "img": true
  },
  {
    "id": 1335,
    "title": "NES Play Action Football (U)",
    "slug": "nes-play-action-football-u",
    "system": "nes",
    "romFile": "NES Play Action Football (U).zip",
    "img": true
  },
  {
    "id": 1336,
    "title": "NES PowerPad Test Cart (U)",
    "slug": "nes-powerpad-test-cart-u",
    "system": "nes",
    "romFile": "NES PowerPad Test Cart (U) [!].zip"
  },
  {
    "id": 1337,
    "title": "NES Test Cart (Official Nintendo, U)",
    "slug": "nes-test-cart-official-nintendo-u",
    "system": "nes",
    "romFile": "NES Test Cart (Official Nintendo) (U) [!].zip"
  },
  {
    "id": 1338,
    "title": "NFL Football (U)",
    "slug": "nfl-football-u",
    "system": "nes",
    "romFile": "NFL Football (U).zip"
  },
  {
    "id": 1339,
    "title": "Nagagutsu wo Haita Neko - Sekai Isshuu 80 Nichi Daibouken (J)",
    "slug": "nagagutsu-wo-haita-neko-sekai-isshuu-80-nichi-daibouken-j",
    "system": "nes",
    "romFile": "Nagagutsu wo Haita Neko - Sekai Isshuu 80 Nichi Daibouken (J).zip",
    "img": true
  },
  {
    "id": 1340,
    "title": "Naitou 9 Dan - Shougi Hiden (J)",
    "slug": "naitou-9-dan-shougi-hiden-j",
    "system": "nes",
    "romFile": "Naitou 9 Dan - Shougi Hiden (J).zip",
    "img": true
  },
  {
    "id": 1341,
    "title": "Nakajima Satoru - F-1 Hero (J)",
    "slug": "nakajima-satoru-f-1-hero-j",
    "system": "nes",
    "romFile": "Nakajima Satoru - F-1 Hero (J).zip",
    "img": true
  },
  {
    "id": 1342,
    "title": "Nakajima Satoru - F-1 Hero 2 (J)",
    "slug": "nakajima-satoru-f-1-hero-2-j",
    "system": "nes",
    "romFile": "Nakajima Satoru - F-1 Hero 2 (J).zip",
    "img": true
  },
  {
    "id": 1343,
    "title": "Nakayoshi to Issho (J)",
    "slug": "nakayoshi-to-issho-j",
    "system": "nes",
    "romFile": "Nakayoshi to Issho (J).zip",
    "img": true
  },
  {
    "id": 1344,
    "title": "Namco Classic (J)",
    "slug": "namco-classic-j",
    "system": "nes",
    "romFile": "Namco Classic (J).zip",
    "img": true
  },
  {
    "id": 1345,
    "title": "Namco Classic 2 (J)",
    "slug": "namco-classic-2-j",
    "system": "nes",
    "romFile": "Namco Classic 2 (J).zip"
  },
  {
    "id": 1346,
    "title": "Namcot Mahjong 3 - Mahjong Tengoku (J)",
    "slug": "namcot-mahjong-3-mahjong-tengoku-j",
    "system": "nes",
    "romFile": "Namcot Mahjong 3 - Mahjong Tengoku (J).zip"
  },
  {
    "id": 1347,
    "title": "Nangoku Shirei!! - Spy Vs Spy (J)",
    "slug": "nangoku-shirei-spy-vs-spy-j",
    "system": "nes",
    "romFile": "Nangoku Shirei!! - Spy Vs Spy (J).zip",
    "img": true
  },
  {
    "id": 1348,
    "title": "Nantettatte!! Baseball (J)",
    "slug": "nantettatte-baseball-j",
    "system": "nes",
    "romFile": "Nantettatte!! Baseball (J).zip",
    "img": true
  },
  {
    "id": 1349,
    "title": "Napoleon Senki (J)",
    "slug": "napoleon-senki-j",
    "system": "nes",
    "romFile": "Napoleon Senki (J).zip",
    "img": true
  },
  {
    "id": 1350,
    "title": "Navy Blue (J)",
    "slug": "navy-blue-j",
    "system": "nes",
    "romFile": "Navy Blue (J).zip",
    "img": true
  },
  {
    "id": 1351,
    "title": "Nekketsu Kakutou Densetsu (Riki Kunio, J)",
    "slug": "nekketsu-kakutou-densetsu-riki-kunio-j-t-eng0-95",
    "system": "nes",
    "romFile": "Nekketsu Kakutou Densetsu (Riki Kunio) (J) _T-Eng0.95_.zip",
    "img": true
  },
  {
    "id": 1352,
    "title": "Nekketsu Kouha - Kunio Kun (J)",
    "slug": "nekketsu-kouha-kunio-kun-j",
    "system": "nes",
    "romFile": "Nekketsu Kouha - Kunio Kun (J).zip",
    "img": true
  },
  {
    "id": 1353,
    "title": "Nekketsu Koukou Dodgeball Bu (J)",
    "slug": "nekketsu-koukou-dodgeball-bu-j",
    "system": "nes",
    "romFile": "Nekketsu Koukou Dodgeball Bu (J).zip",
    "img": true
  },
  {
    "id": 1354,
    "title": "Nekketsu Koukou Dodgeball Bu - Soccer Hen (J)",
    "slug": "nekketsu-koukou-dodgeball-bu-soccer-hen-j",
    "system": "nes",
    "romFile": "Nekketsu Koukou Dodgeball Bu - Soccer Hen (J).zip",
    "img": true
  },
  {
    "id": 1355,
    "title": "Nekketsu! Street Basket - Ganbare Dunk Heroes (J)",
    "slug": "nekketsu-street-basket-ganbare-dunk-heroes-j-t-eng0-50",
    "system": "nes",
    "romFile": "Nekketsu! Street Basket - Ganbare Dunk Heroes (J) [T-Eng0.50].zip",
    "img": true
  },
  {
    "id": 1356,
    "title": "Nemo - Pajama Hero (J)",
    "slug": "nemo-pajama-hero-j",
    "system": "nes",
    "romFile": "Nemo - Pajama Hero (J).zip"
  },
  {
    "id": 1357,
    "title": "New Ghostbusters II (E)",
    "slug": "new-ghostbusters-ii-e",
    "system": "nes",
    "romFile": "New Ghostbusters II (E) [!].zip",
    "img": true
  },
  {
    "id": 1358,
    "title": "New Ghostbusters II (J)",
    "slug": "new-ghostbusters-ii-j",
    "system": "nes",
    "romFile": "New Ghostbusters II (J).zip",
    "img": true
  },
  {
    "id": 1359,
    "title": "New York Nyankies (J)",
    "slug": "new-york-nyankies-j",
    "system": "nes",
    "romFile": "New York Nyankies (J).zip",
    "img": true
  },
  {
    "id": 1360,
    "title": "New Zealand Story (E)",
    "slug": "new-zealand-story-e",
    "system": "nes",
    "romFile": "New Zealand Story (E).zip"
  },
  {
    "id": 1361,
    "title": "Nichibutsu Mahjong 3 - Mahjong G Men (J)",
    "slug": "nichibutsu-mahjong-3-mahjong-g-men-j",
    "system": "nes",
    "romFile": "Nichibutsu Mahjong 3 - Mahjong G Men (J).zip",
    "img": true
  },
  {
    "id": 1362,
    "title": "Nigel Mansell's World Championship Challenge (U)",
    "slug": "nigel-mansell-s-world-championship-challenge-u",
    "system": "nes",
    "romFile": "Nigel Mansell's World Championship Challenge (U).zip",
    "img": true
  },
  {
    "id": 1363,
    "title": "Night Arrow (As)",
    "slug": "night-arrow-as",
    "system": "nes",
    "romFile": "Night Arrow (As).zip",
    "img": true
  },
  {
    "id": 1364,
    "title": "Nightmare on Elm Street, A (U)",
    "slug": "nightmare-on-elm-street-a-u",
    "system": "nes",
    "romFile": "Nightmare on Elm Street, A (U).zip",
    "img": true
  },
  {
    "id": 1365,
    "title": "Nightshade (U)",
    "slug": "nightshade-u",
    "system": "nes",
    "romFile": "Nightshade (U).zip",
    "img": true
  },
  {
    "id": 1366,
    "title": "Nihonichi no Mei Kantoku (J)",
    "slug": "nihonichi-no-mei-kantoku-j",
    "system": "nes",
    "romFile": "Nihonichi no Mei Kantoku (J).zip",
    "img": true
  },
  {
    "id": 1367,
    "title": "Niji no Silk Road (J)",
    "slug": "niji-no-silk-road-j",
    "system": "nes",
    "romFile": "Niji no Silk Road (J).zip",
    "img": true
  },
  {
    "id": 1368,
    "title": "Ningen Heiki - Dead Fox (J)",
    "slug": "ningen-heiki-dead-fox-j",
    "system": "nes",
    "romFile": "Ningen Heiki - Dead Fox (J).zip",
    "img": true
  },
  {
    "id": 1369,
    "title": "Ninja Cop Saizou (J)",
    "slug": "ninja-cop-saizou-j",
    "system": "nes",
    "romFile": "Ninja Cop Saizou (J).zip",
    "img": true
  },
  {
    "id": 1370,
    "title": "Ninja Crusaders (U)",
    "slug": "ninja-crusaders-u",
    "system": "nes",
    "romFile": "Ninja Crusaders (U).zip",
    "img": true
  },
  {
    "id": 1371,
    "title": "Ninja Crusaders - Ryuuga (J)",
    "slug": "ninja-crusaders-ryuuga-j",
    "system": "nes",
    "romFile": "Ninja Crusaders - Ryuuga (J).zip",
    "img": true
  },
  {
    "id": 1372,
    "title": "Ninja Gaiden (PC10)",
    "slug": "ninja-gaiden-pc10",
    "system": "nes",
    "romFile": "Ninja Gaiden (PC10).zip",
    "img": true
  },
  {
    "id": 1373,
    "title": "Ninja Gaiden (U)",
    "slug": "ninja-gaiden-u",
    "system": "nes",
    "romFile": "Ninja Gaiden (U) [!].zip",
    "img": true
  },
  {
    "id": 1374,
    "title": "Ninja Gaiden 2 - The Dark Sword of Chaos (U, Prototype)",
    "slug": "ninja-gaiden-2-the-dark-sword-of-chaos-u-prototype",
    "system": "nes",
    "romFile": "Ninja Gaiden 2 - The Dark Sword of Chaos (U) (Prototype).zip"
  },
  {
    "id": 1375,
    "title": "Ninja Gaiden 2 - The Dark Sword of Chaos (U)",
    "slug": "ninja-gaiden-2-the-dark-sword-of-chaos-u",
    "system": "nes",
    "romFile": "Ninja Gaiden 2 - The Dark Sword of Chaos (U).zip"
  },
  {
    "id": 1376,
    "title": "Ninja Gaiden 3 - The Ancient Ship of Doom (PC10)",
    "slug": "ninja-gaiden-3-the-ancient-ship-of-doom-pc10",
    "system": "nes",
    "romFile": "Ninja Gaiden 3 - The Ancient Ship of Doom (PC10).zip"
  },
  {
    "id": 1377,
    "title": "Ninja Gaiden 3 - The Ancient Ship of Doom (U)",
    "slug": "ninja-gaiden-3-the-ancient-ship-of-doom-u",
    "system": "nes",
    "romFile": "Ninja Gaiden 3 - The Ancient Ship of Doom (U) [!].zip"
  },
  {
    "id": 1378,
    "title": "Ninja Hattori Kun (J)",
    "slug": "ninja-hattori-kun-j",
    "system": "nes",
    "romFile": "Ninja Hattori Kun (J).zip"
  },
  {
    "id": 1379,
    "title": "Ninja Jajamaru - Ginga Daisakusen (J)",
    "slug": "ninja-jajamaru-ginga-daisakusen-j",
    "system": "nes",
    "romFile": "Ninja Jajamaru - Ginga Daisakusen (J).zip",
    "img": true
  },
  {
    "id": 1380,
    "title": "Ninja Jajamaru Kun (J)",
    "slug": "ninja-jajamaru-kun-j",
    "system": "nes",
    "romFile": "Ninja Jajamaru Kun (J).zip",
    "img": true
  },
  {
    "id": 1381,
    "title": "Ninja Jajamaru Kun (VS)",
    "slug": "ninja-jajamaru-kun-vs",
    "system": "nes",
    "romFile": "Ninja Jajamaru Kun (VS).zip",
    "img": true
  },
  {
    "id": 1382,
    "title": "Ninja Kid (U)",
    "slug": "ninja-kid-u",
    "system": "nes",
    "romFile": "Ninja Kid (U).zip",
    "img": true
  },
  {
    "id": 1383,
    "title": "Ninja Kun (J)",
    "slug": "ninja-kun-j",
    "system": "nes",
    "romFile": "Ninja Kun (J).zip"
  },
  {
    "id": 1384,
    "title": "Ninja Kun - Ashura no Shou (J)",
    "slug": "ninja-kun-ashura-no-shou-j",
    "system": "nes",
    "romFile": "Ninja Kun - Ashura no Shou (J).zip",
    "img": true
  },
  {
    "id": 1385,
    "title": "Ninja Ryukenden (J)",
    "slug": "ninja-ryukenden-j",
    "system": "nes",
    "romFile": "Ninja Ryukenden (J).zip",
    "img": true
  },
  {
    "id": 1386,
    "title": "Ninja Ryukenden II - Ankoku no Jashin Ken (J)",
    "slug": "ninja-ryukenden-ii-ankoku-no-jashin-ken-j",
    "system": "nes",
    "romFile": "Ninja Ryukenden II - Ankoku no Jashin Ken (J).zip",
    "img": true
  },
  {
    "id": 1387,
    "title": "Ninja Ryukenden III - Yomi no Hakobune (J)",
    "slug": "ninja-ryukenden-iii-yomi-no-hakobune-j",
    "system": "nes",
    "romFile": "Ninja Ryukenden III - Yomi no Hakobune (J).zip",
    "img": true
  },
  {
    "id": 1388,
    "title": "Ninjara Hoi! (J)",
    "slug": "ninjara-hoi-j",
    "system": "nes",
    "romFile": "Ninjara Hoi! (J).zip",
    "img": true
  },
  {
    "id": 1389,
    "title": "Nintendo World Championships 1990 (U)",
    "slug": "nintendo-world-championships-1990-u",
    "system": "nes",
    "romFile": "Nintendo World Championships 1990 (U) [!].zip",
    "img": true
  },
  {
    "id": 1390,
    "title": "Nintendo World Cup (E, Rev 3)",
    "slug": "nintendo-world-cup-e-rev-3",
    "system": "nes",
    "romFile": "Nintendo World Cup (E) (Rev 3).zip",
    "img": true
  },
  {
    "id": 1391,
    "title": "Nintendo World Cup (E)",
    "slug": "nintendo-world-cup-e",
    "system": "nes",
    "romFile": "Nintendo World Cup (E).zip",
    "img": true
  },
  {
    "id": 1392,
    "title": "Nintendo World Cup (PC10)",
    "slug": "nintendo-world-cup-pc10",
    "system": "nes",
    "romFile": "Nintendo World Cup (PC10).zip",
    "img": true
  },
  {
    "id": 1393,
    "title": "Nintendo World Cup (U)",
    "slug": "nintendo-world-cup-u",
    "system": "nes",
    "romFile": "Nintendo World Cup (U).zip",
    "img": true
  },
  {
    "id": 1394,
    "title": "Nishimura Kyoutarou Mystery - Blue Train Satsujin Jiken (J)",
    "slug": "nishimura-kyoutarou-mystery-blue-train-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Nishimura Kyoutarou Mystery - Blue Train Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1395,
    "title": "Nishimura Kyoutarou Mystery - Super Express Satsujin Jiken (J)",
    "slug": "nishimura-kyoutarou-mystery-super-express-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Nishimura Kyoutarou Mystery - Super Express Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1396,
    "title": "Noah's Ark (E)",
    "slug": "noah-s-ark-e",
    "system": "nes",
    "romFile": "Noah's Ark (E) [!].zip",
    "img": true
  },
  {
    "id": 1397,
    "title": "Nobunaga no Yabou - Bushou Fuuun Roku (J)",
    "slug": "nobunaga-no-yabou-bushou-fuuun-roku-j",
    "system": "nes",
    "romFile": "Nobunaga no Yabou - Bushou Fuuun Roku (J).zip",
    "img": true
  },
  {
    "id": 1398,
    "title": "Nobunaga no Yabou - Sengoku Gunyuu Den (J)",
    "slug": "nobunaga-no-yabou-sengoku-gunyuu-den-j",
    "system": "nes",
    "romFile": "Nobunaga no Yabou - Sengoku Gunyuu Den (J).zip",
    "img": true
  },
  {
    "id": 1399,
    "title": "Nobunaga no Yabou - Zenkoku Han (J)",
    "slug": "nobunaga-no-yabou-zenkoku-han-j",
    "system": "nes",
    "romFile": "Nobunaga no Yabou - Zenkoku Han (J).zip"
  },
  {
    "id": 1400,
    "title": "Nobunaga's Ambition (U)",
    "slug": "nobunaga-s-ambition-u",
    "system": "nes",
    "romFile": "Nobunaga's Ambition (U).zip",
    "img": true
  },
  {
    "id": 1401,
    "title": "Nobunaga's Ambition 2 (U)",
    "slug": "nobunaga-s-ambition-2-u",
    "system": "nes",
    "romFile": "Nobunaga's Ambition 2 (U).zip"
  },
  {
    "id": 1402,
    "title": "North & South (E)",
    "slug": "north-south-e",
    "system": "nes",
    "romFile": "North & South (E) [!].zip",
    "img": true
  },
  {
    "id": 1403,
    "title": "North & South (J)",
    "slug": "north-south-j",
    "system": "nes",
    "romFile": "North & South (J).zip",
    "img": true
  },
  {
    "id": 1404,
    "title": "North & South (U)",
    "slug": "north-south-u",
    "system": "nes",
    "romFile": "North & South (U).zip",
    "img": true
  },
  {
    "id": 1405,
    "title": "Nuts & Milk (J)",
    "slug": "nuts-milk-j",
    "system": "nes",
    "romFile": "Nuts & Milk (J).zip",
    "img": true
  },
  {
    "id": 1406,
    "title": "Obake no Q Tarou - Wanwan Panic (J)",
    "slug": "obake-no-q-tarou-wanwan-panic-j",
    "system": "nes",
    "romFile": "Obake no Q Tarou - Wanwan Panic (J).zip",
    "img": true
  },
  {
    "id": 1407,
    "title": "Obocchama Kun (J)",
    "slug": "obocchama-kun-j",
    "system": "nes",
    "romFile": "Obocchama Kun (J).zip",
    "img": true
  },
  {
    "id": 1408,
    "title": "Oeka Kids - Anpanman no Hiragana Daisuki (J)",
    "slug": "oeka-kids-anpanman-no-hiragana-daisuki-j",
    "system": "nes",
    "romFile": "Oeka Kids - Anpanman no Hiragana Daisuki (J).zip",
    "img": true
  },
  {
    "id": 1409,
    "title": "Oeka Kids - Anpanman to Oekaki Shiyou!! (J)",
    "slug": "oeka-kids-anpanman-to-oekaki-shiyou-j",
    "system": "nes",
    "romFile": "Oeka Kids - Anpanman to Oekaki Shiyou!! (J).zip",
    "img": true
  },
  {
    "id": 1410,
    "title": "Ohootsuku ni Kiyu - Hokkaidou Rensa Satsujin (J)",
    "slug": "ohootsuku-ni-kiyu-hokkaidou-rensa-satsujin-j",
    "system": "nes",
    "romFile": "Ohootsuku ni Kiyu - Hokkaidou Rensa Satsujin (J).zip"
  },
  {
    "id": 1411,
    "title": "Oishinbo (J)",
    "slug": "oishinbo-j",
    "system": "nes",
    "romFile": "Oishinbo (J).zip",
    "img": true
  },
  {
    "id": 1412,
    "title": "Olympus no Tatakai (J)",
    "slug": "olympus-no-tatakai-j",
    "system": "nes",
    "romFile": "Olympus no Tatakai (J).zip",
    "img": true
  },
  {
    "id": 1413,
    "title": "Onyanko Town (J)",
    "slug": "onyanko-town-j",
    "system": "nes",
    "romFile": "Onyanko Town (J) [!].zip",
    "img": true
  },
  {
    "id": 1414,
    "title": "Operation Secret Storm (U)",
    "slug": "operation-secret-storm-u",
    "system": "nes",
    "romFile": "Operation Secret Storm (U).zip",
    "img": true
  },
  {
    "id": 1415,
    "title": "Operation Wolf (E)",
    "slug": "operation-wolf-e",
    "system": "nes",
    "romFile": "Operation Wolf (E) [!].zip",
    "img": true
  },
  {
    "id": 1416,
    "title": "Operation Wolf (J)",
    "slug": "operation-wolf-j",
    "system": "nes",
    "romFile": "Operation Wolf (J).zip",
    "img": true
  },
  {
    "id": 1417,
    "title": "Operation Wolf (U)",
    "slug": "operation-wolf-u",
    "system": "nes",
    "romFile": "Operation Wolf (U).zip",
    "img": true
  },
  {
    "id": 1418,
    "title": "Orb 3D (U)",
    "slug": "orb-3d-u",
    "system": "nes",
    "romFile": "Orb 3D (U).zip",
    "img": true
  },
  {
    "id": 1419,
    "title": "Osomatsu Kun (J)",
    "slug": "osomatsu-kun-j",
    "system": "nes",
    "romFile": "Osomatsu Kun (J).zip",
    "img": true
  },
  {
    "id": 1420,
    "title": "Otaku no Seiza - An Adventure in the Otaku Galaxy (J)",
    "slug": "otaku-no-seiza-an-adventure-in-the-otaku-galaxy-j",
    "system": "nes",
    "romFile": "Otaku no Seiza - An Adventure in the Otaku Galaxy (J).zip",
    "img": true
  },
  {
    "id": 1421,
    "title": "Othello (U)",
    "slug": "othello-u",
    "system": "nes",
    "romFile": "Othello (U).zip",
    "img": true
  },
  {
    "id": 1422,
    "title": "Outlanders (J)",
    "slug": "outlanders-j",
    "system": "nes",
    "romFile": "Outlanders (J).zip",
    "img": true
  },
  {
    "id": 1423,
    "title": "Over Horizon (E)",
    "slug": "over-horizon-e",
    "system": "nes",
    "romFile": "Over Horizon (E) [!].zip",
    "img": true
  },
  {
    "id": 1424,
    "title": "Over Horizon (J)",
    "slug": "over-horizon-j",
    "system": "nes",
    "romFile": "Over Horizon (J).zip",
    "img": true
  },
  {
    "id": 1425,
    "title": "Overlord (U)",
    "slug": "overlord-u",
    "system": "nes",
    "romFile": "Overlord (U).zip",
    "img": true
  },
  {
    "id": 1426,
    "title": "P'radikus Conflict, The (U)",
    "slug": "p-radikus-conflict-the-u",
    "system": "nes",
    "romFile": "P'radikus Conflict, The (U).zip"
  },
  {
    "id": 1427,
    "title": "POW - Prisoners of War (U)",
    "slug": "pow-prisoners-of-war-u",
    "system": "nes",
    "romFile": "POW - Prisoners of War (U).zip"
  },
  {
    "id": 1428,
    "title": "Paaman - Enban wo Torikaese!! (J)",
    "slug": "paaman-enban-wo-torikaese-j",
    "system": "nes",
    "romFile": "Paaman - Enban wo Torikaese!! (J).zip"
  },
  {
    "id": 1429,
    "title": "Paaman Part 2 - Himitsu Kessha Madoodan wo Taose! (J)",
    "slug": "paaman-part-2-himitsu-kessha-madoodan-wo-taose-j",
    "system": "nes",
    "romFile": "Paaman Part 2 - Himitsu Kessha Madoodan wo Taose! (J).zip"
  },
  {
    "id": 1430,
    "title": "Pachi Com (J)",
    "slug": "pachi-com-j",
    "system": "nes",
    "romFile": "Pachi Com (J).zip",
    "img": true
  },
  {
    "id": 1431,
    "title": "Pachi-Slot Adventure 2 - Sorotta Kun no Pachi Slot Tanteidan (J)",
    "slug": "pachi-slot-adventure-2-sorotta-kun-no-pachi-slot-tanteidan-j",
    "system": "nes",
    "romFile": "Pachi-Slot Adventure 2 - Sorotta Kun no Pachi Slot Tanteidan (J).zip",
    "img": true
  },
  {
    "id": 1432,
    "title": "Pachi-Slot Adventure 3 - Bitaoshii 7 Kenzan! (J)",
    "slug": "pachi-slot-adventure-3-bitaoshii-7-kenzan-j",
    "system": "nes",
    "romFile": "Pachi-Slot Adventure 3 - Bitaoshii 7 Kenzan! (J).zip",
    "img": true
  },
  {
    "id": 1433,
    "title": "Pachinko Daisakusen (J)",
    "slug": "pachinko-daisakusen-j",
    "system": "nes",
    "romFile": "Pachinko Daisakusen (J).zip",
    "img": true
  },
  {
    "id": 1434,
    "title": "Pachinko Daisakusen 2 (J)",
    "slug": "pachinko-daisakusen-2-j",
    "system": "nes",
    "romFile": "Pachinko Daisakusen 2 (J).zip",
    "img": true
  },
  {
    "id": 1435,
    "title": "Pachio Kun 2 (J)",
    "slug": "pachio-kun-2-j",
    "system": "nes",
    "romFile": "Pachio Kun 2 (J).zip",
    "img": true
  },
  {
    "id": 1436,
    "title": "Pachio Kun 3 (J)",
    "slug": "pachio-kun-3-j",
    "system": "nes",
    "romFile": "Pachio Kun 3 (J).zip",
    "img": true
  },
  {
    "id": 1437,
    "title": "Pachio Kun 4 (J)",
    "slug": "pachio-kun-4-j",
    "system": "nes",
    "romFile": "Pachio Kun 4 (J).zip",
    "img": true
  },
  {
    "id": 1438,
    "title": "Pachio Kun 5 (J)",
    "slug": "pachio-kun-5-j",
    "system": "nes",
    "romFile": "Pachio Kun 5 (J).zip",
    "img": true
  },
  {
    "id": 1439,
    "title": "Palamedes (J)",
    "slug": "palamedes-j",
    "system": "nes",
    "romFile": "Palamedes (J).zip",
    "img": true
  },
  {
    "id": 1440,
    "title": "Palamedes (U)",
    "slug": "palamedes-u",
    "system": "nes",
    "romFile": "Palamedes (U).zip",
    "img": true
  },
  {
    "id": 1441,
    "title": "Palamedes 2 - Star Twinkles (J)",
    "slug": "palamedes-2-star-twinkles-j",
    "system": "nes",
    "romFile": "Palamedes 2 - Star Twinkles (J).zip",
    "img": true
  },
  {
    "id": 1442,
    "title": "Panic Restaurant (U)",
    "slug": "panic-restaurant-u",
    "system": "nes",
    "romFile": "Panic Restaurant (U).zip",
    "img": true
  },
  {
    "id": 1443,
    "title": "Paperboy (J)",
    "slug": "paperboy-j",
    "system": "nes",
    "romFile": "Paperboy (J).zip",
    "img": true
  },
  {
    "id": 1444,
    "title": "Paperboy (U)",
    "slug": "paperboy-u",
    "system": "nes",
    "romFile": "Paperboy (U).zip",
    "img": true
  },
  {
    "id": 1445,
    "title": "Paperboy 2 (U)",
    "slug": "paperboy-2-u",
    "system": "nes",
    "romFile": "Paperboy 2 (U).zip",
    "img": true
  },
  {
    "id": 1446,
    "title": "Papillion (As)",
    "slug": "papillion-as",
    "system": "nes",
    "romFile": "Papillion (As) [!].zip"
  },
  {
    "id": 1447,
    "title": "Parallel World (J)",
    "slug": "parallel-world-j",
    "system": "nes",
    "romFile": "Parallel World (J).zip",
    "img": true
  },
  {
    "id": 1448,
    "title": "Parasol Henbee (J)",
    "slug": "parasol-henbee-j",
    "system": "nes",
    "romFile": "Parasol Henbee (J).zip",
    "img": true
  },
  {
    "id": 1449,
    "title": "Parasol Stars - The Story of Bubble Bobble 3 (E)",
    "slug": "parasol-stars-the-story-of-bubble-bobble-3-e",
    "system": "nes",
    "romFile": "Parasol Stars - The Story of Bubble Bobble 3 (E) [!].zip"
  },
  {
    "id": 1450,
    "title": "Paris-Dakar Rally Special (J)",
    "slug": "paris-dakar-rally-special-j",
    "system": "nes",
    "romFile": "Paris-Dakar Rally Special (J).zip",
    "img": true
  },
  {
    "id": 1451,
    "title": "Parodius (E)",
    "slug": "parodius-e",
    "system": "nes",
    "romFile": "Parodius (E).zip",
    "img": true
  },
  {
    "id": 1452,
    "title": "Parodius da! (J)",
    "slug": "parodius-da-j",
    "system": "nes",
    "romFile": "Parodius da! (J).zip",
    "img": true
  },
  {
    "id": 1453,
    "title": "Peek-A-Boo Poker (UE)",
    "slug": "peek-a-boo-poker-ue",
    "system": "nes",
    "romFile": "Peek-A-Boo Poker (UE) [!].zip",
    "img": true
  },
  {
    "id": 1454,
    "title": "Peepar Time (J)",
    "slug": "peepar-time-j",
    "system": "nes",
    "romFile": "Peepar Time (J).zip",
    "img": true
  },
  {
    "id": 1455,
    "title": "Penguin Kun Wars (J)",
    "slug": "penguin-kun-wars-j",
    "system": "nes",
    "romFile": "Penguin Kun Wars (J).zip",
    "img": true
  },
  {
    "id": 1456,
    "title": "Perfect Bowling (J)",
    "slug": "perfect-bowling-j",
    "system": "nes",
    "romFile": "Perfect Bowling (J).zip",
    "img": true
  },
  {
    "id": 1457,
    "title": "Perfect Fit (U)",
    "slug": "perfect-fit-u",
    "system": "nes",
    "romFile": "Perfect Fit (U).zip"
  },
  {
    "id": 1458,
    "title": "Pesterminator - The Western Exterminator (U)",
    "slug": "pesterminator-the-western-exterminator-u",
    "system": "nes",
    "romFile": "Pesterminator - The Western Exterminator (U).zip",
    "img": true
  },
  {
    "id": 1459,
    "title": "Peter Pan & The Pirates (U)",
    "slug": "peter-pan-the-pirates-u",
    "system": "nes",
    "romFile": "Peter Pan & The Pirates (U).zip"
  },
  {
    "id": 1460,
    "title": "Phantom Fighter (U)",
    "slug": "phantom-fighter-u",
    "system": "nes",
    "romFile": "Phantom Fighter (U).zip",
    "img": true
  },
  {
    "id": 1461,
    "title": "Pi Nuo Cao De Fu Su (As)",
    "slug": "pi-nuo-cao-de-fu-su-as",
    "system": "nes",
    "romFile": "Pi Nuo Cao De Fu Su (As).zip",
    "img": true
  },
  {
    "id": 1462,
    "title": "Pictionary (U)",
    "slug": "pictionary-u",
    "system": "nes",
    "romFile": "Pictionary (U).zip",
    "img": true
  },
  {
    "id": 1463,
    "title": "Pinball (E)",
    "slug": "pinball-e",
    "system": "nes",
    "romFile": "Pinball (E) [!].zip",
    "img": true
  },
  {
    "id": 1464,
    "title": "Pinball (GC)",
    "slug": "pinball-gc",
    "system": "nes",
    "romFile": "Pinball (GC).zip",
    "img": true
  },
  {
    "id": 1465,
    "title": "Pinball (JU)",
    "slug": "pinball-ju",
    "system": "nes",
    "romFile": "Pinball (JU).zip",
    "img": true
  },
  {
    "id": 1466,
    "title": "Pinball (VS)",
    "slug": "pinball-vs",
    "system": "nes",
    "romFile": "Pinball (VS).zip",
    "img": true
  },
  {
    "id": 1467,
    "title": "Pinball Quest (E)",
    "slug": "pinball-quest-e",
    "system": "nes",
    "romFile": "Pinball Quest (E) [!].zip",
    "img": true
  },
  {
    "id": 1468,
    "title": "Pinball Quest (J)",
    "slug": "pinball-quest-j",
    "system": "nes",
    "romFile": "Pinball Quest (J).zip",
    "img": true
  },
  {
    "id": 1469,
    "title": "Pinball Quest (U)",
    "slug": "pinball-quest-u",
    "system": "nes",
    "romFile": "Pinball Quest (U).zip",
    "img": true
  },
  {
    "id": 1470,
    "title": "Pinbot (E)",
    "slug": "pinbot-e",
    "system": "nes",
    "romFile": "Pinbot (E).zip",
    "img": true
  },
  {
    "id": 1471,
    "title": "Pinbot (PC10)",
    "slug": "pinbot-pc10",
    "system": "nes",
    "romFile": "Pinbot (PC10).zip",
    "img": true
  },
  {
    "id": 1472,
    "title": "Pinbot (U)",
    "slug": "pinbot-u",
    "system": "nes",
    "romFile": "Pinbot (U) [!].zip",
    "img": true
  },
  {
    "id": 1473,
    "title": "Pipe Dream (U)",
    "slug": "pipe-dream-u",
    "system": "nes",
    "romFile": "Pipe Dream (U).zip",
    "img": true
  },
  {
    "id": 1474,
    "title": "Pirates! (U)",
    "slug": "pirates-u",
    "system": "nes",
    "romFile": "Pirates! (U).zip",
    "img": true
  },
  {
    "id": 1475,
    "title": "Pizza Pop! (J)",
    "slug": "pizza-pop-j",
    "system": "nes",
    "romFile": "Pizza Pop! (J).zip",
    "img": true
  },
  {
    "id": 1476,
    "title": "Plasma Ball (J)",
    "slug": "plasma-ball-j",
    "system": "nes",
    "romFile": "Plasma Ball (J).zip",
    "img": true
  },
  {
    "id": 1477,
    "title": "Platoon (U, PRG0)",
    "slug": "platoon-u-prg0",
    "system": "nes",
    "romFile": "Platoon (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 1478,
    "title": "Platoon (U, PRG1)",
    "slug": "platoon-u-prg1",
    "system": "nes",
    "romFile": "Platoon (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 1479,
    "title": "Platoon (VS)",
    "slug": "platoon-vs",
    "system": "nes",
    "romFile": "Platoon (VS).zip",
    "img": true
  },
  {
    "id": 1480,
    "title": "Playbox BASIC (Prototype V0.0)",
    "slug": "playbox-basic-prototype-v0-0",
    "system": "nes",
    "romFile": "Playbox BASIC (Prototype V0.0).zip"
  },
  {
    "id": 1481,
    "title": "Pocahontas (As)",
    "slug": "pocahontas-as",
    "system": "nes",
    "romFile": "Pocahontas (As).zip",
    "img": true
  },
  {
    "id": 1482,
    "title": "Pocket Zaurus - Juu Ouken no Nazo (J)",
    "slug": "pocket-zaurus-juu-ouken-no-nazo-j",
    "system": "nes",
    "romFile": "Pocket Zaurus - Juu Ouken no Nazo (J).zip",
    "img": true
  },
  {
    "id": 1483,
    "title": "Poke Block (U, Prototype)",
    "slug": "poke-block-u-prototype",
    "system": "nes",
    "romFile": "Poke Block (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1484,
    "title": "Poker (As)",
    "slug": "poker-as",
    "system": "nes",
    "romFile": "Poker (As).zip",
    "img": true
  },
  {
    "id": 1485,
    "title": "Pooyan (J)",
    "slug": "pooyan-j",
    "system": "nes",
    "romFile": "Pooyan (J).zip",
    "img": true
  },
  {
    "id": 1486,
    "title": "Popeye (JU, PRG0)",
    "slug": "popeye-ju-prg0",
    "system": "nes",
    "romFile": "Popeye (JU) (PRG0) [!].zip",
    "img": true
  },
  {
    "id": 1487,
    "title": "Popeye (JU, PRG1)",
    "slug": "popeye-ju-prg1",
    "system": "nes",
    "romFile": "Popeye (JU) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 1488,
    "title": "Popeye no Eigo Asobi (J)",
    "slug": "popeye-no-eigo-asobi-j",
    "system": "nes",
    "romFile": "Popeye no Eigo Asobi (J).zip",
    "img": true
  },
  {
    "id": 1489,
    "title": "Port Test Cartridge (U)",
    "slug": "port-test-cartridge-u",
    "system": "nes",
    "romFile": "Port Test Cartridge (U).zip"
  },
  {
    "id": 1490,
    "title": "Portopia Renzoku Satsujin Jiken (J)",
    "slug": "portopia-renzoku-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Portopia Renzoku Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1491,
    "title": "Power Blade (PC10)",
    "slug": "power-blade-pc10",
    "system": "nes",
    "romFile": "Power Blade (PC10) [!].zip",
    "img": true
  },
  {
    "id": 1492,
    "title": "Power Blade (U)",
    "slug": "power-blade-u",
    "system": "nes",
    "romFile": "Power Blade (U) [!].zip",
    "img": true
  },
  {
    "id": 1493,
    "title": "Power Blade 2 (U)",
    "slug": "power-blade-2-u",
    "system": "nes",
    "romFile": "Power Blade 2 (U).zip",
    "img": true
  },
  {
    "id": 1494,
    "title": "Power Blazer (J)",
    "slug": "power-blazer-j",
    "system": "nes",
    "romFile": "Power Blazer (J).zip",
    "img": true
  },
  {
    "id": 1495,
    "title": "Power Pad Dance Aerobics (U)",
    "slug": "power-pad-dance-aerobics-u",
    "system": "nes",
    "romFile": "Power Pad Dance Aerobics (U).zip"
  },
  {
    "id": 1496,
    "title": "Power Punch 2 (U)",
    "slug": "power-punch-2-u",
    "system": "nes",
    "romFile": "Power Punch 2 (U).zip"
  },
  {
    "id": 1497,
    "title": "Power Soccer (J)",
    "slug": "power-soccer-j",
    "system": "nes",
    "romFile": "Power Soccer (J).zip",
    "img": true
  },
  {
    "id": 1498,
    "title": "Predator (J)",
    "slug": "predator-j",
    "system": "nes",
    "romFile": "Predator (J).zip",
    "img": true
  },
  {
    "id": 1499,
    "title": "Predator (U)",
    "slug": "predator-u",
    "system": "nes",
    "romFile": "Predator (U).zip",
    "img": true
  },
  {
    "id": 1500,
    "title": "President no Sentaku (J)",
    "slug": "president-no-sentaku-j",
    "system": "nes",
    "romFile": "President no Sentaku (J).zip",
    "img": true
  },
  {
    "id": 1501,
    "title": "Prince of Persia (U)",
    "slug": "prince-of-persia-u",
    "system": "nes",
    "romFile": "Prince of Persia (U).zip",
    "img": true
  },
  {
    "id": 1502,
    "title": "Princess Tomato in Salad Kingdom (U, Prototype)",
    "slug": "princess-tomato-in-salad-kingdom-u-prototype",
    "system": "nes",
    "romFile": "Princess Tomato in Salad Kingdom (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1503,
    "title": "Princess Tomato in Salad Kingdom (U)",
    "slug": "princess-tomato-in-salad-kingdom-u",
    "system": "nes",
    "romFile": "Princess Tomato in Salad Kingdom (U).zip",
    "img": true
  },
  {
    "id": 1504,
    "title": "Pro Action Replay (E)",
    "slug": "pro-action-replay-e",
    "system": "nes",
    "romFile": "Pro Action Replay (E) [!].zip",
    "img": true
  },
  {
    "id": 1505,
    "title": "Pro Action Replay (Rev B, U)",
    "slug": "pro-action-replay-rev-b-u",
    "system": "nes",
    "romFile": "Pro Action Replay (Rev B) (U) [!].zip",
    "img": true
  },
  {
    "id": 1506,
    "title": "Pro Sport Hockey (U)",
    "slug": "pro-sport-hockey-u",
    "system": "nes",
    "romFile": "Pro Sport Hockey (U).zip",
    "img": true
  },
  {
    "id": 1507,
    "title": "Pro Wrestling (PC10)",
    "slug": "pro-wrestling-pc10",
    "system": "nes",
    "romFile": "Pro Wrestling (PC10).zip",
    "img": true
  },
  {
    "id": 1508,
    "title": "Pro Wrestling (U, PRG0)",
    "slug": "pro-wrestling-u-prg0",
    "system": "nes",
    "romFile": "Pro Wrestling (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 1509,
    "title": "Pro Wrestling (U, PRG1)",
    "slug": "pro-wrestling-u-prg1",
    "system": "nes",
    "romFile": "Pro Wrestling (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 1510,
    "title": "Pro Yakyuu - Family Stadium '87 (J)",
    "slug": "pro-yakyuu-family-stadium-87-j",
    "system": "nes",
    "romFile": "Pro Yakyuu - Family Stadium '87 (J).zip",
    "img": true
  },
  {
    "id": 1511,
    "title": "Pro Yakyuu - Family Stadium '88 (J)",
    "slug": "pro-yakyuu-family-stadium-88-j",
    "system": "nes",
    "romFile": "Pro Yakyuu - Family Stadium '88 (J).zip",
    "img": true
  },
  {
    "id": 1512,
    "title": "Pro Yakyuu - Family Stadium (J)",
    "slug": "pro-yakyuu-family-stadium-j",
    "system": "nes",
    "romFile": "Pro Yakyuu - Family Stadium (J).zip",
    "img": true
  },
  {
    "id": 1513,
    "title": "Pro Yakyuu Satsujin Jiken! (J)",
    "slug": "pro-yakyuu-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Pro Yakyuu Satsujin Jiken! (J).zip",
    "img": true
  },
  {
    "id": 1514,
    "title": "Probotector (E)",
    "slug": "probotector-e",
    "system": "nes",
    "romFile": "Probotector (E).zip",
    "img": true
  },
  {
    "id": 1515,
    "title": "Probotector II - Return of the Evil Forces (E)",
    "slug": "probotector-ii-return-of-the-evil-forces-e",
    "system": "nes",
    "romFile": "Probotector II - Return of the Evil Forces (E).zip",
    "img": true
  },
  {
    "id": 1516,
    "title": "Project Q (J)",
    "slug": "project-q-j",
    "system": "nes",
    "romFile": "Project Q (J).zip",
    "img": true
  },
  {
    "id": 1517,
    "title": "Punch-Out!! (E)",
    "slug": "punch-out-e",
    "system": "nes",
    "romFile": "Punch-Out!! (E) [!].zip",
    "img": true
  },
  {
    "id": 1518,
    "title": "Punch-Out!! (GC)",
    "slug": "punch-out-gc",
    "system": "nes",
    "romFile": "Punch-Out!! (GC).zip",
    "img": true
  },
  {
    "id": 1519,
    "title": "Punch-Out!! (J)",
    "slug": "punch-out-j",
    "system": "nes",
    "romFile": "Punch-Out!! (J).zip",
    "img": true
  },
  {
    "id": 1520,
    "title": "Punch-Out!! (U)",
    "slug": "punch-out-u",
    "system": "nes",
    "romFile": "Punch-Out!! (U).zip",
    "img": true
  },
  {
    "id": 1521,
    "title": "Punisher, The (U)",
    "slug": "punisher-the-u",
    "system": "nes",
    "romFile": "Punisher, The (U).zip",
    "img": true
  },
  {
    "id": 1522,
    "title": "Puss 'n Boots - Pero's Great Adventure (U)",
    "slug": "puss-n-boots-pero-s-great-adventure-u",
    "system": "nes",
    "romFile": "Puss 'n Boots - Pero's Great Adventure (U).zip",
    "img": true
  },
  {
    "id": 1523,
    "title": "Puyo Puyo (J)",
    "slug": "puyo-puyo-j",
    "system": "nes",
    "romFile": "Puyo Puyo (J).zip",
    "img": true
  },
  {
    "id": 1524,
    "title": "Puzslot (J)",
    "slug": "puzslot-j",
    "system": "nes",
    "romFile": "Puzslot (J).zip",
    "img": true
  },
  {
    "id": 1525,
    "title": "Puzznic (J)",
    "slug": "puzznic-j",
    "system": "nes",
    "romFile": "Puzznic (J).zip",
    "img": true
  },
  {
    "id": 1526,
    "title": "Puzznic (U)",
    "slug": "puzznic-u",
    "system": "nes",
    "romFile": "Puzznic (U).zip",
    "img": true
  },
  {
    "id": 1527,
    "title": "Pyokotan no Dai Meiro (J)",
    "slug": "pyokotan-no-dai-meiro-j",
    "system": "nes",
    "romFile": "Pyokotan no Dai Meiro (J).zip",
    "img": true
  },
  {
    "id": 1528,
    "title": "Q-bert (U)",
    "slug": "q-bert-u",
    "system": "nes",
    "romFile": "Q-bert (U).zip",
    "img": true
  },
  {
    "id": 1529,
    "title": "Qix (U)",
    "slug": "qix-u",
    "system": "nes",
    "romFile": "Qix (U).zip",
    "img": true
  },
  {
    "id": 1530,
    "title": "Quarter Back Scramble (J)",
    "slug": "quarter-back-scramble-j",
    "system": "nes",
    "romFile": "Quarter Back Scramble (J).zip",
    "img": true
  },
  {
    "id": 1531,
    "title": "Quarth (J)",
    "slug": "quarth-j",
    "system": "nes",
    "romFile": "Quarth (J).zip",
    "img": true
  },
  {
    "id": 1532,
    "title": "Quattro Adventure (U, Aladdin)",
    "slug": "quattro-adventure-u-aladdin",
    "system": "nes",
    "romFile": "Quattro Adventure (U) (Aladdin).zip",
    "img": true
  },
  {
    "id": 1533,
    "title": "Quattro Adventure (U)",
    "slug": "quattro-adventure-u",
    "system": "nes",
    "romFile": "Quattro Adventure (U).zip",
    "img": true
  },
  {
    "id": 1534,
    "title": "Quattro Arcade (U)",
    "slug": "quattro-arcade-u",
    "system": "nes",
    "romFile": "Quattro Arcade (U).zip",
    "img": true
  },
  {
    "id": 1535,
    "title": "Quattro Sports (U, Aladdin)",
    "slug": "quattro-sports-u-aladdin",
    "system": "nes",
    "romFile": "Quattro Sports (U) (Aladdin).zip",
    "img": true
  },
  {
    "id": 1536,
    "title": "Quattro Sports (U)",
    "slug": "quattro-sports-u",
    "system": "nes",
    "romFile": "Quattro Sports (U).zip",
    "img": true
  },
  {
    "id": 1537,
    "title": "Quest of Ki, The (J)",
    "slug": "quest-of-ki-the-j",
    "system": "nes",
    "romFile": "Quest of Ki, The (J).zip",
    "img": true
  },
  {
    "id": 1538,
    "title": "Quinty (J)",
    "slug": "quinty-j",
    "system": "nes",
    "romFile": "Quinty (J).zip",
    "img": true
  },
  {
    "id": 1539,
    "title": "R.B.I. Baseball (U)",
    "slug": "r-b-i-baseball-u",
    "system": "nes",
    "romFile": "R.B.I. Baseball (U).zip",
    "img": true
  },
  {
    "id": 1540,
    "title": "R.B.I. Baseball 2 (U)",
    "slug": "r-b-i-baseball-2-u",
    "system": "nes",
    "romFile": "R.B.I. Baseball 2 (U).zip",
    "img": true
  },
  {
    "id": 1541,
    "title": "R.B.I. Baseball 3 (U)",
    "slug": "r-b-i-baseball-3-u",
    "system": "nes",
    "romFile": "R.B.I. Baseball 3 (U).zip",
    "img": true
  },
  {
    "id": 1542,
    "title": "R.C. Pro-Am (E, PRG0)",
    "slug": "r-c-pro-am-e-prg0",
    "system": "nes",
    "romFile": "R.C. Pro-Am (E) (PRG0).zip",
    "img": true
  },
  {
    "id": 1543,
    "title": "R.C. Pro-Am (E, PRG1)",
    "slug": "r-c-pro-am-e-prg1",
    "system": "nes",
    "romFile": "R.C. Pro-Am (E) (PRG1).zip",
    "img": true
  },
  {
    "id": 1544,
    "title": "R.C. Pro-Am (PC10)",
    "slug": "r-c-pro-am-pc10",
    "system": "nes",
    "romFile": "R.C. Pro-Am (PC10).zip",
    "img": true
  },
  {
    "id": 1545,
    "title": "R.C. Pro-Am (U, PRG0)",
    "slug": "r-c-pro-am-u-prg0",
    "system": "nes",
    "romFile": "R.C. Pro-Am (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 1546,
    "title": "R.C. Pro-Am (U, PRG1)",
    "slug": "r-c-pro-am-u-prg1",
    "system": "nes",
    "romFile": "R.C. Pro-Am (U) (PRG1).zip",
    "img": true
  },
  {
    "id": 1547,
    "title": "R.C. Pro-Am 2 (U)",
    "slug": "r-c-pro-am-2-u",
    "system": "nes",
    "romFile": "R.C. Pro-Am 2 (U).zip"
  },
  {
    "id": 1548,
    "title": "RPG Jinsei Game (J)",
    "slug": "rpg-jinsei-game-j",
    "system": "nes",
    "romFile": "RPG Jinsei Game (J).zip",
    "img": true
  },
  {
    "id": 1549,
    "title": "Race America (U)",
    "slug": "race-america-u",
    "system": "nes",
    "romFile": "Race America (U).zip",
    "img": true
  },
  {
    "id": 1550,
    "title": "Racer Mini Yonku - Japan Cup (J)",
    "slug": "racer-mini-yonku-japan-cup-j",
    "system": "nes",
    "romFile": "Racer Mini Yonku - Japan Cup (J).zip",
    "img": true
  },
  {
    "id": 1551,
    "title": "Racket Attack (E)",
    "slug": "racket-attack-e",
    "system": "nes",
    "romFile": "Racket Attack (E) [!].zip",
    "img": true
  },
  {
    "id": 1552,
    "title": "Racket Attack (U)",
    "slug": "racket-attack-u",
    "system": "nes",
    "romFile": "Racket Attack (U).zip",
    "img": true
  },
  {
    "id": 1553,
    "title": "Rackets & Rivals (E)",
    "slug": "rackets-rivals-e",
    "system": "nes",
    "romFile": "Rackets & Rivals (E) [!].zip",
    "img": true
  },
  {
    "id": 1554,
    "title": "Rad Racer (E)",
    "slug": "rad-racer-e",
    "system": "nes",
    "romFile": "Rad Racer (E).zip",
    "img": true
  },
  {
    "id": 1555,
    "title": "Rad Racer (PC10)",
    "slug": "rad-racer-pc10",
    "system": "nes",
    "romFile": "Rad Racer (PC10).zip",
    "img": true
  },
  {
    "id": 1556,
    "title": "Rad Racer (U)",
    "slug": "rad-racer-u",
    "system": "nes",
    "romFile": "Rad Racer (U).zip",
    "img": true
  },
  {
    "id": 1557,
    "title": "Rad Racer 2 (PC10)",
    "slug": "rad-racer-2-pc10",
    "system": "nes",
    "romFile": "Rad Racer 2 (PC10) [!].zip"
  },
  {
    "id": 1558,
    "title": "Rad Racer 2 (U)",
    "slug": "rad-racer-2-u",
    "system": "nes",
    "romFile": "Rad Racer 2 (U) [!].zip"
  },
  {
    "id": 1559,
    "title": "Rad Racket - Deluxe Tennis II (U)",
    "slug": "rad-racket-deluxe-tennis-ii-u",
    "system": "nes",
    "romFile": "Rad Racket - Deluxe Tennis II (U) [!].zip",
    "img": true
  },
  {
    "id": 1560,
    "title": "Radia Senki - Reimei Hen (J)",
    "slug": "radia-senki-reimei-hen-j",
    "system": "nes",
    "romFile": "Radia Senki - Reimei Hen (J).zip",
    "img": true
  },
  {
    "id": 1561,
    "title": "Raf World (J)",
    "slug": "raf-world-j",
    "system": "nes",
    "romFile": "Raf World (J).zip",
    "img": true
  },
  {
    "id": 1562,
    "title": "Raid 2020 (U)",
    "slug": "raid-2020-u",
    "system": "nes",
    "romFile": "Raid 2020 (U) [!].zip",
    "img": true
  },
  {
    "id": 1563,
    "title": "Raid on Bungeling Bay (J)",
    "slug": "raid-on-bungeling-bay-j",
    "system": "nes",
    "romFile": "Raid on Bungeling Bay (J).zip",
    "img": true
  },
  {
    "id": 1564,
    "title": "Raid on Bungeling Bay (U)",
    "slug": "raid-on-bungeling-bay-u",
    "system": "nes",
    "romFile": "Raid on Bungeling Bay (U).zip",
    "img": true
  },
  {
    "id": 1565,
    "title": "Rainbow Islands - The Story of Bubble Bobble 2 (E)",
    "slug": "rainbow-islands-the-story-of-bubble-bobble-2-e",
    "system": "nes",
    "romFile": "Rainbow Islands - The Story of Bubble Bobble 2 (E) [!].zip",
    "img": true
  },
  {
    "id": 1566,
    "title": "Rainbow Islands - The Story of Bubble Bobble 2 (J)",
    "slug": "rainbow-islands-the-story-of-bubble-bobble-2-j",
    "system": "nes",
    "romFile": "Rainbow Islands - The Story of Bubble Bobble 2 (J).zip",
    "img": true
  },
  {
    "id": 1567,
    "title": "Rainbow Islands - The Story of Bubble Bobble 2 (U)",
    "slug": "rainbow-islands-the-story-of-bubble-bobble-2-u",
    "system": "nes",
    "romFile": "Rainbow Islands - The Story of Bubble Bobble 2 (U).zip",
    "img": true
  },
  {
    "id": 1568,
    "title": "Rally Bike (U)",
    "slug": "rally-bike-u",
    "system": "nes",
    "romFile": "Rally Bike (U).zip",
    "img": true
  },
  {
    "id": 1569,
    "title": "Rambo (J)",
    "slug": "rambo-j",
    "system": "nes",
    "romFile": "Rambo (J).zip",
    "img": true
  },
  {
    "id": 1570,
    "title": "Rambo (U)",
    "slug": "rambo-u",
    "system": "nes",
    "romFile": "Rambo (U).zip",
    "img": true
  },
  {
    "id": 1571,
    "title": "Rampage (U)",
    "slug": "rampage-u",
    "system": "nes",
    "romFile": "Rampage (U).zip",
    "img": true
  },
  {
    "id": 1572,
    "title": "Rampart (J)",
    "slug": "rampart-j",
    "system": "nes",
    "romFile": "Rampart (J).zip",
    "img": true
  },
  {
    "id": 1573,
    "title": "Rampart (U)",
    "slug": "rampart-u",
    "system": "nes",
    "romFile": "Rampart (U).zip",
    "img": true
  },
  {
    "id": 1574,
    "title": "Rasaaru Ishii no Childs Quest (J)",
    "slug": "rasaaru-ishii-no-childs-quest-j",
    "system": "nes",
    "romFile": "Rasaaru Ishii no Childs Quest (J).zip"
  },
  {
    "id": 1575,
    "title": "Red Ariimaa 2 (J)",
    "slug": "red-ariimaa-2-j",
    "system": "nes",
    "romFile": "Red Ariimaa 2 (J).zip"
  },
  {
    "id": 1576,
    "title": "Reigen Doushi (J)",
    "slug": "reigen-doushi-j",
    "system": "nes",
    "romFile": "Reigen Doushi (J).zip",
    "img": true
  },
  {
    "id": 1577,
    "title": "Remote Control (U)",
    "slug": "remote-control-u",
    "system": "nes",
    "romFile": "Remote Control (U).zip",
    "img": true
  },
  {
    "id": 1578,
    "title": "Ren & Stimpy Show, The (U)",
    "slug": "ren-stimpy-show-the-u",
    "system": "nes",
    "romFile": "Ren & Stimpy Show, The (U).zip"
  },
  {
    "id": 1579,
    "title": "Renegade (U)",
    "slug": "renegade-u",
    "system": "nes",
    "romFile": "Renegade (U).zip",
    "img": true
  },
  {
    "id": 1580,
    "title": "Rescue - The Embassy Mission (E)",
    "slug": "rescue-the-embassy-mission-e",
    "system": "nes",
    "romFile": "Rescue - The Embassy Mission (E) [!].zip",
    "img": true
  },
  {
    "id": 1581,
    "title": "Rescue - The Embassy Mission (U, Prototype)",
    "slug": "rescue-the-embassy-mission-u-prototype",
    "system": "nes",
    "romFile": "Rescue - The Embassy Mission (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1582,
    "title": "Rescue - The Embassy Mission (U)",
    "slug": "rescue-the-embassy-mission-u",
    "system": "nes",
    "romFile": "Rescue - The Embassy Mission (U).zip",
    "img": true
  },
  {
    "id": 1583,
    "title": "Ring King (U)",
    "slug": "ring-king-u",
    "system": "nes",
    "romFile": "Ring King (U).zip",
    "img": true
  },
  {
    "id": 1584,
    "title": "River City Ransom (U)",
    "slug": "river-city-ransom-u",
    "system": "nes",
    "romFile": "River City Ransom (U).zip",
    "img": true
  },
  {
    "id": 1585,
    "title": "Road Fighter (E)",
    "slug": "road-fighter-e",
    "system": "nes",
    "romFile": "Road Fighter (E) [!].zip",
    "img": true
  },
  {
    "id": 1586,
    "title": "Road Fighter (J)",
    "slug": "road-fighter-j",
    "system": "nes",
    "romFile": "Road Fighter (J).zip",
    "img": true
  },
  {
    "id": 1587,
    "title": "Road Runner (U)",
    "slug": "road-runner-u",
    "system": "nes",
    "romFile": "Road Runner (U).zip",
    "img": true
  },
  {
    "id": 1588,
    "title": "RoadBlasters (U)",
    "slug": "roadblasters-u",
    "system": "nes",
    "romFile": "RoadBlasters (U).zip",
    "img": true
  },
  {
    "id": 1589,
    "title": "Robin Hood - Prince of Thieves (G)",
    "slug": "robin-hood-prince-of-thieves-g",
    "system": "nes",
    "romFile": "Robin Hood - Prince of Thieves (G) [!].zip",
    "img": true
  },
  {
    "id": 1590,
    "title": "Robin Hood - Prince of Thieves (U)",
    "slug": "robin-hood-prince-of-thieves-u",
    "system": "nes",
    "romFile": "Robin Hood - Prince of Thieves (U).zip",
    "img": true
  },
  {
    "id": 1591,
    "title": "Robo Warrior (U)",
    "slug": "robo-warrior-u",
    "system": "nes",
    "romFile": "Robo Warrior (U).zip",
    "img": true
  },
  {
    "id": 1592,
    "title": "Robocco Wars (J)",
    "slug": "robocco-wars-j",
    "system": "nes",
    "romFile": "Robocco Wars (J).zip",
    "img": true
  },
  {
    "id": 1593,
    "title": "Robocop (E)",
    "slug": "robocop-e",
    "system": "nes",
    "romFile": "Robocop (E) [!].zip",
    "img": true
  },
  {
    "id": 1594,
    "title": "Robocop (J)",
    "slug": "robocop-j",
    "system": "nes",
    "romFile": "Robocop (J).zip",
    "img": true
  },
  {
    "id": 1595,
    "title": "Robocop (U, Prototype)",
    "slug": "robocop-u-prototype",
    "system": "nes",
    "romFile": "Robocop (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1596,
    "title": "Robocop (U)",
    "slug": "robocop-u",
    "system": "nes",
    "romFile": "Robocop (U).zip",
    "img": true
  },
  {
    "id": 1597,
    "title": "Robocop 2 (J)",
    "slug": "robocop-2-j",
    "system": "nes",
    "romFile": "Robocop 2 (J).zip",
    "img": true
  },
  {
    "id": 1598,
    "title": "Robocop 2 (U)",
    "slug": "robocop-2-u",
    "system": "nes",
    "romFile": "Robocop 2 (U).zip",
    "img": true
  },
  {
    "id": 1599,
    "title": "Robocop 3 (U)",
    "slug": "robocop-3-u",
    "system": "nes",
    "romFile": "Robocop 3 (U).zip",
    "img": true
  },
  {
    "id": 1600,
    "title": "Robocop Vs The Terminator (U, Prototype)",
    "slug": "robocop-vs-the-terminator-u-prototype",
    "system": "nes",
    "romFile": "Robocop Vs The Terminator (U) (Prototype).zip"
  },
  {
    "id": 1601,
    "title": "Robodemons (U)",
    "slug": "robodemons-u",
    "system": "nes",
    "romFile": "Robodemons (U).zip",
    "img": true
  },
  {
    "id": 1602,
    "title": "Rock 'n' Ball (U)",
    "slug": "rock-n-ball-u",
    "system": "nes",
    "romFile": "Rock 'n' Ball (U).zip",
    "img": true
  },
  {
    "id": 1603,
    "title": "Rocket Ranger (U)",
    "slug": "rocket-ranger-u",
    "system": "nes",
    "romFile": "Rocket Ranger (U) [!].zip",
    "img": true
  },
  {
    "id": 1604,
    "title": "Rocketeer, The (U)",
    "slug": "rocketeer-the-u",
    "system": "nes",
    "romFile": "Rocketeer, The (U).zip",
    "img": true
  },
  {
    "id": 1605,
    "title": "Rockin' Kats (E)",
    "slug": "rockin-kats-e",
    "system": "nes",
    "romFile": "Rockin' Kats (E) [!].zip",
    "img": true
  },
  {
    "id": 1606,
    "title": "Rockin' Kats (PC10)",
    "slug": "rockin-kats-pc10",
    "system": "nes",
    "romFile": "Rockin' Kats (PC10) [!].zip",
    "img": true
  },
  {
    "id": 1607,
    "title": "Rockin' Kats (U)",
    "slug": "rockin-kats-u",
    "system": "nes",
    "romFile": "Rockin' Kats (U) [!].zip",
    "img": true
  },
  {
    "id": 1608,
    "title": "Rockman (J)",
    "slug": "rockman-j",
    "system": "nes",
    "romFile": "Rockman (J).zip",
    "img": true
  },
  {
    "id": 1609,
    "title": "Rockman 2 - Dr. Wily no Nazo (J)",
    "slug": "rockman-2-dr-wily-no-nazo-j",
    "system": "nes",
    "romFile": "Rockman 2 - Dr. Wily no Nazo (J).zip",
    "img": true
  },
  {
    "id": 1610,
    "title": "Rockman 3 - Dr. Wily no Saigo! (J)",
    "slug": "rockman-3-dr-wily-no-saigo-j",
    "system": "nes",
    "romFile": "Rockman 3 - Dr. Wily no Saigo! (J).zip",
    "img": true
  },
  {
    "id": 1611,
    "title": "Rockman 4 - Aratanaru Yabou!! (J)",
    "slug": "rockman-4-aratanaru-yabou-j",
    "system": "nes",
    "romFile": "Rockman 4 - Aratanaru Yabou!! (J).zip",
    "img": true
  },
  {
    "id": 1612,
    "title": "Rockman 5 - Blues no Wana! (J)",
    "slug": "rockman-5-blues-no-wana-j",
    "system": "nes",
    "romFile": "Rockman 5 - Blues no Wana! (J).zip",
    "img": true
  },
  {
    "id": 1613,
    "title": "Rockman 6 - Shijou Saidai no Tatakai!! (J)",
    "slug": "rockman-6-shijou-saidai-no-tatakai-j",
    "system": "nes",
    "romFile": "Rockman 6 - Shijou Saidai no Tatakai!! (J).zip",
    "img": true
  },
  {
    "id": 1614,
    "title": "Rod Land (E)",
    "slug": "rod-land-e",
    "system": "nes",
    "romFile": "Rod Land (E) [!].zip",
    "img": true
  },
  {
    "id": 1615,
    "title": "Rod Land (J)",
    "slug": "rod-land-j",
    "system": "nes",
    "romFile": "Rod Land (J).zip",
    "img": true
  },
  {
    "id": 1616,
    "title": "Roger Clemens MVP Baseball (U)",
    "slug": "roger-clemens-mvp-baseball-u",
    "system": "nes",
    "romFile": "Roger Clemens MVP Baseball (U).zip"
  },
  {
    "id": 1617,
    "title": "Rokudenashi Blues (J)",
    "slug": "rokudenashi-blues-j",
    "system": "nes",
    "romFile": "Rokudenashi Blues (J).zip",
    "img": true
  },
  {
    "id": 1618,
    "title": "Rollerball (J)",
    "slug": "rollerball-j",
    "system": "nes",
    "romFile": "Rollerball (J).zip",
    "img": true
  },
  {
    "id": 1619,
    "title": "Rollerball (U)",
    "slug": "rollerball-u",
    "system": "nes",
    "romFile": "Rollerball (U).zip",
    "img": true
  },
  {
    "id": 1620,
    "title": "Rollerblade Racer (U)",
    "slug": "rollerblade-racer-u",
    "system": "nes",
    "romFile": "Rollerblade Racer (U).zip",
    "img": true
  },
  {
    "id": 1621,
    "title": "Rollergames (U)",
    "slug": "rollergames-u",
    "system": "nes",
    "romFile": "Rollergames (U) [!].zip",
    "img": true
  },
  {
    "id": 1622,
    "title": "Rolling Thunder (J)",
    "slug": "rolling-thunder-j",
    "system": "nes",
    "romFile": "Rolling Thunder (J).zip",
    "img": true
  },
  {
    "id": 1623,
    "title": "Rolling Thunder (U)",
    "slug": "rolling-thunder-u",
    "system": "nes",
    "romFile": "Rolling Thunder (U).zip",
    "img": true
  },
  {
    "id": 1624,
    "title": "Romance of the Three Kingdoms (U)",
    "slug": "romance-of-the-three-kingdoms-u",
    "system": "nes",
    "romFile": "Romance of the Three Kingdoms (U).zip",
    "img": true
  },
  {
    "id": 1625,
    "title": "Romance of the Three Kingdoms II (U)",
    "slug": "romance-of-the-three-kingdoms-ii-u",
    "system": "nes",
    "romFile": "Romance of the Three Kingdoms II (U) [!].zip",
    "img": true
  },
  {
    "id": 1626,
    "title": "Romancia (J)",
    "slug": "romancia-j",
    "system": "nes",
    "romFile": "Romancia (J).zip",
    "img": true
  },
  {
    "id": 1627,
    "title": "Roundball - 2-on-2 Challenge (U)",
    "slug": "roundball-2-on-2-challenge-u",
    "system": "nes",
    "romFile": "Roundball - 2-on-2 Challenge (U).zip",
    "img": true
  },
  {
    "id": 1628,
    "title": "Route-16 Turbo (J)",
    "slug": "route-16-turbo-j",
    "system": "nes",
    "romFile": "Route-16 Turbo (J).zip",
    "img": true
  },
  {
    "id": 1629,
    "title": "Royal Blood (J)",
    "slug": "royal-blood-j",
    "system": "nes",
    "romFile": "Royal Blood (J).zip",
    "img": true
  },
  {
    "id": 1630,
    "title": "Rush'n Attack (E)",
    "slug": "rush-n-attack-e",
    "system": "nes",
    "romFile": "Rush'n Attack (E).zip",
    "img": true
  },
  {
    "id": 1631,
    "title": "Rush'n Attack (PC10)",
    "slug": "rush-n-attack-pc10",
    "system": "nes",
    "romFile": "Rush'n Attack (PC10).zip",
    "img": true
  },
  {
    "id": 1632,
    "title": "Rush'n Attack (U)",
    "slug": "rush-n-attack-u",
    "system": "nes",
    "romFile": "Rush'n Attack (U).zip",
    "img": true
  },
  {
    "id": 1633,
    "title": "Rygar (E)",
    "slug": "rygar-e",
    "system": "nes",
    "romFile": "Rygar (E) [!].zip",
    "img": true
  },
  {
    "id": 1634,
    "title": "Rygar (PC10)",
    "slug": "rygar-pc10",
    "system": "nes",
    "romFile": "Rygar (PC10).zip",
    "img": true
  },
  {
    "id": 1635,
    "title": "Rygar (U)",
    "slug": "rygar-u",
    "system": "nes",
    "romFile": "Rygar (U).zip",
    "img": true
  },
  {
    "id": 1636,
    "title": "SCAT - Special Cybernetic Attack Team (U)",
    "slug": "scat-special-cybernetic-attack-team-u",
    "system": "nes",
    "romFile": "SCAT - Special Cybernetic Attack Team (U).zip"
  },
  {
    "id": 1637,
    "title": "SD Battle Oozumou - Heisei Hero Basho (J)",
    "slug": "sd-battle-oozumou-heisei-hero-basho-j",
    "system": "nes",
    "romFile": "SD Battle Oozumou - Heisei Hero Basho (J).zip",
    "img": true
  },
  {
    "id": 1638,
    "title": "SD Gundam - Gachapon Senshi 2 - Capsule Senki (J)",
    "slug": "sd-gundam-gachapon-senshi-2-capsule-senki-j",
    "system": "nes",
    "romFile": "SD Gundam - Gachapon Senshi 2 - Capsule Senki (J).zip",
    "img": true
  },
  {
    "id": 1639,
    "title": "SD Gundam - Gachapon Senshi 3 - Eiyuu Senki (J)",
    "slug": "sd-gundam-gachapon-senshi-3-eiyuu-senki-j",
    "system": "nes",
    "romFile": "SD Gundam - Gachapon Senshi 3 - Eiyuu Senki (J).zip",
    "img": true
  },
  {
    "id": 1640,
    "title": "SD Gundam - Gachapon Senshi 4 - NewType Story (J)",
    "slug": "sd-gundam-gachapon-senshi-4-newtype-story-j",
    "system": "nes",
    "romFile": "SD Gundam - Gachapon Senshi 4 - NewType Story (J).zip",
    "img": true
  },
  {
    "id": 1641,
    "title": "SD Gundam - Gachapon Senshi 5 - Battle of Universal Century (J)",
    "slug": "sd-gundam-gachapon-senshi-5-battle-of-universal-century-j",
    "system": "nes",
    "romFile": "SD Gundam - Gachapon Senshi 5 - Battle of Universal Century (J).zip",
    "img": true
  },
  {
    "id": 1642,
    "title": "SD Gundam Gaiden - Knight Gundam Monogatari (J)",
    "slug": "sd-gundam-gaiden-knight-gundam-monogatari-j",
    "system": "nes",
    "romFile": "SD Gundam Gaiden - Knight Gundam Monogatari (J).zip",
    "img": true
  },
  {
    "id": 1643,
    "title": "SD Gundam Gaiden - Knight Gundam Monogatari 2 - Hikari no Kishi (J)",
    "slug": "sd-gundam-gaiden-knight-gundam-monogatari-2-hikari-no-kishi-j",
    "system": "nes",
    "romFile": "SD Gundam Gaiden - Knight Gundam Monogatari 2 - Hikari no Kishi (J).zip",
    "img": true
  },
  {
    "id": 1644,
    "title": "SD Gundam Gaiden - Knight Gundam Monogatari 3 - Densetsu no Kishi Dan (J)",
    "slug": "sd-gundam-gaiden-knight-gundam-monogatari-3-densetsu-no-kishi-dan-j",
    "system": "nes",
    "romFile": "SD Gundam Gaiden - Knight Gundam Monogatari 3 - Densetsu no Kishi Dan (J).zip",
    "img": true
  },
  {
    "id": 1645,
    "title": "SD Hero Soukessen - Taose! Aku no Gundan (J)",
    "slug": "sd-hero-soukessen-taose-aku-no-gundan-j",
    "system": "nes",
    "romFile": "SD Hero Soukessen - Taose! Aku no Gundan (J).zip",
    "img": true
  },
  {
    "id": 1646,
    "title": "SD Keiji - Blader (J)",
    "slug": "sd-keiji-blader-j",
    "system": "nes",
    "romFile": "SD Keiji - Blader (J).zip",
    "img": true
  },
  {
    "id": 1647,
    "title": "SD Sengoku Bushou Retsuden (J)",
    "slug": "sd-sengoku-bushou-retsuden-j",
    "system": "nes",
    "romFile": "SD Sengoku Bushou Retsuden (J).zip",
    "img": true
  },
  {
    "id": 1648,
    "title": "SWAT - Special Weapons and Tactics (J)",
    "slug": "swat-special-weapons-and-tactics-j",
    "system": "nes",
    "romFile": "SWAT - Special Weapons and Tactics (J).zip",
    "img": true
  },
  {
    "id": 1649,
    "title": "Saint Seiya - Ougon Densetsu (J)",
    "slug": "saint-seiya-ougon-densetsu-j",
    "system": "nes",
    "romFile": "Saint Seiya - Ougon Densetsu (J).zip",
    "img": true
  },
  {
    "id": 1650,
    "title": "Saint Seiya - Ougon Densetsu Kanketsu Hen (J)",
    "slug": "saint-seiya-ougon-densetsu-kanketsu-hen-j",
    "system": "nes",
    "romFile": "Saint Seiya - Ougon Densetsu Kanketsu Hen (J).zip",
    "img": true
  },
  {
    "id": 1651,
    "title": "Saint Seiya - Ougon Densetsu Kanketsu Hen (Prototype)",
    "slug": "saint-seiya-ougon-densetsu-kanketsu-hen-prototype",
    "system": "nes",
    "romFile": "Saint Seiya - Ougon Densetsu Kanketsu Hen (Prototype).zip",
    "img": true
  },
  {
    "id": 1652,
    "title": "Saiyuuki World (J)",
    "slug": "saiyuuki-world-j",
    "system": "nes",
    "romFile": "Saiyuuki World (J).zip",
    "img": true
  },
  {
    "id": 1653,
    "title": "Saiyuuki World 2 - Tenjoukai no Majin (J)",
    "slug": "saiyuuki-world-2-tenjoukai-no-majin-j",
    "system": "nes",
    "romFile": "Saiyuuki World 2 - Tenjoukai no Majin (J).zip",
    "img": true
  },
  {
    "id": 1654,
    "title": "Sakigake!! Otoko Juku - Shippuu Ichi Gou Sei (J)",
    "slug": "sakigake-otoko-juku-shippuu-ichi-gou-sei-j",
    "system": "nes",
    "romFile": "Sakigake!! Otoko Juku - Shippuu Ichi Gou Sei (J).zip",
    "img": true
  },
  {
    "id": 1655,
    "title": "Salad no Kuni no Tomato Hime (J)",
    "slug": "salad-no-kuni-no-tomato-hime-j",
    "system": "nes",
    "romFile": "Salad no Kuni no Tomato Hime (J).zip",
    "img": true
  },
  {
    "id": 1656,
    "title": "Salamander (J)",
    "slug": "salamander-j",
    "system": "nes",
    "romFile": "Salamander (J).zip",
    "img": true
  },
  {
    "id": 1657,
    "title": "San Guo Zhi (As)",
    "slug": "san-guo-zhi-as",
    "system": "nes",
    "romFile": "San Guo Zhi (As).zip",
    "img": true
  },
  {
    "id": 1658,
    "title": "San Guo Zhi - Qun Xiong Zheng Ba (As)",
    "slug": "san-guo-zhi-qun-xiong-zheng-ba-as",
    "system": "nes",
    "romFile": "San Guo Zhi - Qun Xiong Zheng Ba (As).zip",
    "img": true
  },
  {
    "id": 1659,
    "title": "San Guo Zhi 4 - Chi Bi Feng Yun (As)",
    "slug": "san-guo-zhi-4-chi-bi-feng-yun-as",
    "system": "nes",
    "romFile": "San Guo Zhi 4 - Chi Bi Feng Yun (As) [!].zip"
  },
  {
    "id": 1660,
    "title": "San Shi Liu Ji (As)",
    "slug": "san-shi-liu-ji-as",
    "system": "nes",
    "romFile": "San Shi Liu Ji (As).zip",
    "img": true
  },
  {
    "id": 1661,
    "title": "Sanada Juu Yuushi (J)",
    "slug": "sanada-juu-yuushi-j",
    "system": "nes",
    "romFile": "Sanada Juu Yuushi (J).zip",
    "img": true
  },
  {
    "id": 1662,
    "title": "Sangokushi (J)",
    "slug": "sangokushi-j",
    "system": "nes",
    "romFile": "Sangokushi (J).zip",
    "img": true
  },
  {
    "id": 1663,
    "title": "Sangokushi - Chuugen no Hasha (J)",
    "slug": "sangokushi-chuugen-no-hasha-j",
    "system": "nes",
    "romFile": "Sangokushi - Chuugen no Hasha (J).zip",
    "img": true
  },
  {
    "id": 1664,
    "title": "Sangokushi - Eiketsu Den (Beta)",
    "slug": "sangokushi-eiketsu-den-beta",
    "system": "nes",
    "romFile": "Sangokushi - Eiketsu Den (Beta).zip"
  },
  {
    "id": 1665,
    "title": "Sangokushi 2 (J)",
    "slug": "sangokushi-2-j",
    "system": "nes",
    "romFile": "Sangokushi 2 (J).zip",
    "img": true
  },
  {
    "id": 1666,
    "title": "Sangokushi 2 - Haou no Tairiku (J)",
    "slug": "sangokushi-2-haou-no-tairiku-j",
    "system": "nes",
    "romFile": "Sangokushi 2 - Haou no Tairiku (J).zip",
    "img": true
  },
  {
    "id": 1667,
    "title": "Sanma no Mei Tantei (J)",
    "slug": "sanma-no-mei-tantei-j",
    "system": "nes",
    "romFile": "Sanma no Mei Tantei (J).zip",
    "img": true
  },
  {
    "id": 1668,
    "title": "Sanrio Carnival (J)",
    "slug": "sanrio-carnival-j",
    "system": "nes",
    "romFile": "Sanrio Carnival (J).zip",
    "img": true
  },
  {
    "id": 1669,
    "title": "Sanrio Carnival 2 (J)",
    "slug": "sanrio-carnival-2-j",
    "system": "nes",
    "romFile": "Sanrio Carnival 2 (J).zip",
    "img": true
  },
  {
    "id": 1670,
    "title": "Sanrio Cup - Pon Pon Volley (J)",
    "slug": "sanrio-cup-pon-pon-volley-j",
    "system": "nes",
    "romFile": "Sanrio Cup - Pon Pon Volley (J).zip",
    "img": true
  },
  {
    "id": 1671,
    "title": "Sansaara Naaga (J)",
    "slug": "sansaara-naaga-j",
    "system": "nes",
    "romFile": "Sansaara Naaga (J).zip"
  },
  {
    "id": 1672,
    "title": "Sansuu 1 Nen - Keisan Game (J)",
    "slug": "sansuu-1-nen-keisan-game-j",
    "system": "nes",
    "romFile": "Sansuu 1 Nen - Keisan Game (J).zip",
    "img": true
  },
  {
    "id": 1673,
    "title": "Sansuu 2 Nen - Keisan Game (J)",
    "slug": "sansuu-2-nen-keisan-game-j",
    "system": "nes",
    "romFile": "Sansuu 2 Nen - Keisan Game (J).zip",
    "img": true
  },
  {
    "id": 1674,
    "title": "Sansuu 3 Nen - Keisan Game (J)",
    "slug": "sansuu-3-nen-keisan-game-j",
    "system": "nes",
    "romFile": "Sansuu 3 Nen - Keisan Game (J).zip",
    "img": true
  },
  {
    "id": 1675,
    "title": "Sansuu 4 Nen - Keisan Game (J)",
    "slug": "sansuu-4-nen-keisan-game-j",
    "system": "nes",
    "romFile": "Sansuu 4 Nen - Keisan Game (J).zip",
    "img": true
  },
  {
    "id": 1676,
    "title": "Sansuu 5 & 6 Nen - Keisan Game (J)",
    "slug": "sansuu-5-6-nen-keisan-game-j",
    "system": "nes",
    "romFile": "Sansuu 5 & 6 Nen - Keisan Game (J).zip",
    "img": true
  },
  {
    "id": 1677,
    "title": "Satomi Hakkenden (J)",
    "slug": "satomi-hakkenden-j",
    "system": "nes",
    "romFile": "Satomi Hakkenden (J).zip",
    "img": true
  },
  {
    "id": 1678,
    "title": "Satsui no Kaisou - Power Soft Satsujin Jiken (J)",
    "slug": "satsui-no-kaisou-power-soft-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Satsui no Kaisou - Power Soft Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1679,
    "title": "Satsujin Club (J)",
    "slug": "satsujin-club-j",
    "system": "nes",
    "romFile": "Satsujin Club (J).zip",
    "img": true
  },
  {
    "id": 1680,
    "title": "Section Z (U)",
    "slug": "section-z-u",
    "system": "nes",
    "romFile": "Section Z (U).zip",
    "img": true
  },
  {
    "id": 1681,
    "title": "Seicross (J)",
    "slug": "seicross-j",
    "system": "nes",
    "romFile": "Seicross (J).zip",
    "img": true
  },
  {
    "id": 1682,
    "title": "Seicross (U)",
    "slug": "seicross-u",
    "system": "nes",
    "romFile": "Seicross (U).zip",
    "img": true
  },
  {
    "id": 1683,
    "title": "Seikima II - Akuma no Gyakushuu (J)",
    "slug": "seikima-ii-akuma-no-gyakushuu-j",
    "system": "nes",
    "romFile": "Seikima II - Akuma no Gyakushuu (J).zip",
    "img": true
  },
  {
    "id": 1684,
    "title": "Seirei Densetsu Lickle (J)",
    "slug": "seirei-densetsu-lickle-j",
    "system": "nes",
    "romFile": "Seirei Densetsu Lickle (J).zip",
    "img": true
  },
  {
    "id": 1685,
    "title": "Seirei Gari (J)",
    "slug": "seirei-gari-j",
    "system": "nes",
    "romFile": "Seirei Gari (J).zip",
    "img": true
  },
  {
    "id": 1686,
    "title": "Seiryaku Simulation - Inbou no Wakusei - Shancara (J)",
    "slug": "seiryaku-simulation-inbou-no-wakusei-shancara-j",
    "system": "nes",
    "romFile": "Seiryaku Simulation - Inbou no Wakusei - Shancara (J).zip",
    "img": true
  },
  {
    "id": 1687,
    "title": "Sekiryuuou (J)",
    "slug": "sekiryuuou-j",
    "system": "nes",
    "romFile": "Sekiryuuou (J).zip",
    "img": true
  },
  {
    "id": 1688,
    "title": "Sendai no Tomio no Daiginnan (J)",
    "slug": "sendai-no-tomio-no-daiginnan-j",
    "system": "nes",
    "romFile": "Sendai no Tomio no Daiginnan (J).zip"
  },
  {
    "id": 1689,
    "title": "Senjou no Ookami (J)",
    "slug": "senjou-no-ookami-j",
    "system": "nes",
    "romFile": "Senjou no Ookami (J).zip",
    "img": true
  },
  {
    "id": 1690,
    "title": "Sensha Senryaku - Sabaku no Kitsune (J)",
    "slug": "sensha-senryaku-sabaku-no-kitsune-j",
    "system": "nes",
    "romFile": "Sensha Senryaku - Sabaku no Kitsune (J).zip",
    "img": true
  },
  {
    "id": 1691,
    "title": "Sesame Street 123 (U)",
    "slug": "sesame-street-123-u",
    "system": "nes",
    "romFile": "Sesame Street 123 (U).zip",
    "img": true
  },
  {
    "id": 1692,
    "title": "Sesame Street ABC (U)",
    "slug": "sesame-street-abc-u",
    "system": "nes",
    "romFile": "Sesame Street ABC (U).zip",
    "img": true
  },
  {
    "id": 1693,
    "title": "Sesame Street ABC - 123 (U)",
    "slug": "sesame-street-abc-123-u",
    "system": "nes",
    "romFile": "Sesame Street ABC - 123 (U).zip",
    "img": true
  },
  {
    "id": 1694,
    "title": "Sesame Street Countdown (U)",
    "slug": "sesame-street-countdown-u",
    "system": "nes",
    "romFile": "Sesame Street Countdown (U).zip",
    "img": true
  },
  {
    "id": 1695,
    "title": "Shadow Brain (J)",
    "slug": "shadow-brain-j",
    "system": "nes",
    "romFile": "Shadow Brain (J).zip",
    "img": true
  },
  {
    "id": 1696,
    "title": "Shadow Warriors (E)",
    "slug": "shadow-warriors-e",
    "system": "nes",
    "romFile": "Shadow Warriors (E).zip",
    "img": true
  },
  {
    "id": 1697,
    "title": "Shadow Warriors Episode II - The Dark Sword of Chaos (E)",
    "slug": "shadow-warriors-episode-ii-the-dark-sword-of-chaos-e",
    "system": "nes",
    "romFile": "Shadow Warriors Episode II - The Dark Sword of Chaos (E) [!].zip"
  },
  {
    "id": 1698,
    "title": "Shadow of the Ninja (U)",
    "slug": "shadow-of-the-ninja-u",
    "system": "nes",
    "romFile": "Shadow of the Ninja (U).zip",
    "img": true
  },
  {
    "id": 1699,
    "title": "Shadowgate (E)",
    "slug": "shadowgate-e",
    "system": "nes",
    "romFile": "Shadowgate (E) [!].zip",
    "img": true
  },
  {
    "id": 1700,
    "title": "Shadowgate (F)",
    "slug": "shadowgate-f",
    "system": "nes",
    "romFile": "Shadowgate (F) [!].zip",
    "img": true
  },
  {
    "id": 1701,
    "title": "Shadowgate (J)",
    "slug": "shadowgate-j",
    "system": "nes",
    "romFile": "Shadowgate (J).zip",
    "img": true
  },
  {
    "id": 1702,
    "title": "Shadowgate (SW)",
    "slug": "shadowgate-sw",
    "system": "nes",
    "romFile": "Shadowgate (SW).zip",
    "img": true
  },
  {
    "id": 1703,
    "title": "Shadowgate (U)",
    "slug": "shadowgate-u",
    "system": "nes",
    "romFile": "Shadowgate (U).zip",
    "img": true
  },
  {
    "id": 1704,
    "title": "Shaffle Fight (J)",
    "slug": "shaffle-fight-j",
    "system": "nes",
    "romFile": "Shaffle Fight (J).zip",
    "img": true
  },
  {
    "id": 1705,
    "title": "Shanghai (J)",
    "slug": "shanghai-j",
    "system": "nes",
    "romFile": "Shanghai (J).zip",
    "img": true
  },
  {
    "id": 1706,
    "title": "Shanghai 2 (J)",
    "slug": "shanghai-2-j",
    "system": "nes",
    "romFile": "Shanghai 2 (J).zip"
  },
  {
    "id": 1707,
    "title": "Shatterhand (E)",
    "slug": "shatterhand-e",
    "system": "nes",
    "romFile": "Shatterhand (E) [!].zip",
    "img": true
  },
  {
    "id": 1708,
    "title": "Shatterhand (U)",
    "slug": "shatterhand-u",
    "system": "nes",
    "romFile": "Shatterhand (U).zip",
    "img": true
  },
  {
    "id": 1709,
    "title": "Sheng Hen Pao (AKA Twin Loud Cannon, As)",
    "slug": "sheng-hen-pao-aka-twin-loud-cannon-as",
    "system": "nes",
    "romFile": "Sheng Hen Pao (AKA Twin Loud Cannon) (As).zip"
  },
  {
    "id": 1710,
    "title": "Sheng Huo Lie Zhuan (As)",
    "slug": "sheng-huo-lie-zhuan-as",
    "system": "nes",
    "romFile": "Sheng Huo Lie Zhuan (As).zip",
    "img": true
  },
  {
    "id": 1711,
    "title": "Sherlock Holmes - Hakushaku Reijou Yuukai Jiken (J)",
    "slug": "sherlock-holmes-hakushaku-reijou-yuukai-jiken-j",
    "system": "nes",
    "romFile": "Sherlock Holmes - Hakushaku Reijou Yuukai Jiken (J).zip",
    "img": true
  },
  {
    "id": 1712,
    "title": "Shikinjou (J)",
    "slug": "shikinjou-j",
    "system": "nes",
    "romFile": "Shikinjou (J).zip",
    "img": true
  },
  {
    "id": 1713,
    "title": "Shin 4 Nin Uchi Mahjong - Yakuman Tengoku (J)",
    "slug": "shin-4-nin-uchi-mahjong-yakuman-tengoku-j",
    "system": "nes",
    "romFile": "Shin 4 Nin Uchi Mahjong - Yakuman Tengoku (J).zip",
    "img": true
  },
  {
    "id": 1714,
    "title": "Shin Jinrui - The New Type (J)",
    "slug": "shin-jinrui-the-new-type-j",
    "system": "nes",
    "romFile": "Shin Jinrui - The New Type (J).zip",
    "img": true
  },
  {
    "id": 1715,
    "title": "Shin Moero!! Pro Yakyuu (J)",
    "slug": "shin-moero-pro-yakyuu-j",
    "system": "nes",
    "romFile": "Shin Moero!! Pro Yakyuu (J).zip",
    "img": true
  },
  {
    "id": 1716,
    "title": "Shin Satomi Hakken-Den - Hikari to Yami no Tatakai (J)",
    "slug": "shin-satomi-hakken-den-hikari-to-yami-no-tatakai-j",
    "system": "nes",
    "romFile": "Shin Satomi Hakken-Den - Hikari to Yami no Tatakai (J).zip",
    "img": true
  },
  {
    "id": 1717,
    "title": "Shingen The Ruler (U)",
    "slug": "shingen-the-ruler-u",
    "system": "nes",
    "romFile": "Shingen The Ruler (U).zip",
    "img": true
  },
  {
    "id": 1718,
    "title": "Shinobi (U)",
    "slug": "shinobi-u",
    "system": "nes",
    "romFile": "Shinobi (U).zip",
    "img": true
  },
  {
    "id": 1719,
    "title": "Shinsenden (J)",
    "slug": "shinsenden-j",
    "system": "nes",
    "romFile": "Shinsenden (J).zip",
    "img": true
  },
  {
    "id": 1720,
    "title": "Shockwave (U)",
    "slug": "shockwave-u",
    "system": "nes",
    "romFile": "Shockwave (U).zip",
    "img": true
  },
  {
    "id": 1721,
    "title": "Shooting Range (U)",
    "slug": "shooting-range-u",
    "system": "nes",
    "romFile": "Shooting Range (U).zip",
    "img": true
  },
  {
    "id": 1722,
    "title": "Short Order - Eggsplode (U)",
    "slug": "short-order-eggsplode-u",
    "system": "nes",
    "romFile": "Short Order - Eggsplode (U) [!].zip",
    "img": true
  },
  {
    "id": 1723,
    "title": "Shougi Meikan '92 (J)",
    "slug": "shougi-meikan-92-j",
    "system": "nes",
    "romFile": "Shougi Meikan '92 (J).zip",
    "img": true
  },
  {
    "id": 1724,
    "title": "Shougi Meikan '93 (J)",
    "slug": "shougi-meikan-93-j",
    "system": "nes",
    "romFile": "Shougi Meikan '93 (J).zip",
    "img": true
  },
  {
    "id": 1725,
    "title": "Shougun (J)",
    "slug": "shougun-j",
    "system": "nes",
    "romFile": "Shougun (J).zip",
    "img": true
  },
  {
    "id": 1726,
    "title": "Shoukoushi Ceddie (J)",
    "slug": "shoukoushi-ceddie-j",
    "system": "nes",
    "romFile": "Shoukoushi Ceddie (J).zip",
    "img": true
  },
  {
    "id": 1727,
    "title": "Shounen Ashibe - Nepal Daibouken no Maki (J)",
    "slug": "shounen-ashibe-nepal-daibouken-no-maki-j",
    "system": "nes",
    "romFile": "Shounen Ashibe - Nepal Daibouken no Maki (J).zip",
    "img": true
  },
  {
    "id": 1728,
    "title": "Shufflepuck Cafe (J)",
    "slug": "shufflepuck-cafe-j",
    "system": "nes",
    "romFile": "Shufflepuck Cafe (J).zip",
    "img": true
  },
  {
    "id": 1729,
    "title": "Shui Hu Zhuan (As)",
    "slug": "shui-hu-zhuan-as",
    "system": "nes",
    "romFile": "Shui Hu Zhuan (As).zip",
    "img": true
  },
  {
    "id": 1730,
    "title": "Side Pocket (J)",
    "slug": "side-pocket-j",
    "system": "nes",
    "romFile": "Side Pocket (J).zip",
    "img": true
  },
  {
    "id": 1731,
    "title": "Side Pocket (U)",
    "slug": "side-pocket-u",
    "system": "nes",
    "romFile": "Side Pocket (U).zip",
    "img": true
  },
  {
    "id": 1732,
    "title": "Silent Assault (U)",
    "slug": "silent-assault-u",
    "system": "nes",
    "romFile": "Silent Assault (U).zip",
    "img": true
  },
  {
    "id": 1733,
    "title": "Silent Service (E)",
    "slug": "silent-service-e",
    "system": "nes",
    "romFile": "Silent Service (E).zip",
    "img": true
  },
  {
    "id": 1734,
    "title": "Silent Service (U)",
    "slug": "silent-service-u",
    "system": "nes",
    "romFile": "Silent Service (U).zip",
    "img": true
  },
  {
    "id": 1735,
    "title": "Silk Worm (U)",
    "slug": "silk-worm-u",
    "system": "nes",
    "romFile": "Silk Worm (U).zip",
    "img": true
  },
  {
    "id": 1736,
    "title": "Silva Saga (J)",
    "slug": "silva-saga-j",
    "system": "nes",
    "romFile": "Silva Saga (J).zip",
    "img": true
  },
  {
    "id": 1737,
    "title": "Silver Surfer (U)",
    "slug": "silver-surfer-u",
    "system": "nes",
    "romFile": "Silver Surfer (U).zip",
    "img": true
  },
  {
    "id": 1738,
    "title": "Simpsons, The - Bart Vs. the Space Mutants (E)",
    "slug": "simpsons-the-bart-vs-the-space-mutants-e",
    "system": "nes",
    "romFile": "Simpsons, The - Bart Vs. the Space Mutants (E) [!].zip",
    "img": true
  },
  {
    "id": 1739,
    "title": "Simpsons, The - Bart Vs. the Space Mutants (U)",
    "slug": "simpsons-the-bart-vs-the-space-mutants-u",
    "system": "nes",
    "romFile": "Simpsons, The - Bart Vs. the Space Mutants (U).zip",
    "img": true
  },
  {
    "id": 1740,
    "title": "Simpsons, The - Bart Vs. the World (U)",
    "slug": "simpsons-the-bart-vs-the-world-u",
    "system": "nes",
    "romFile": "Simpsons, The - Bart Vs. the World (U).zip",
    "img": true
  },
  {
    "id": 1741,
    "title": "Simpsons, The - Bartman Meets Radioactive Man (Prototype)",
    "slug": "simpsons-the-bartman-meets-radioactive-man-prototype",
    "system": "nes",
    "romFile": "Simpsons, The - Bartman Meets Radioactive Man (Prototype).zip",
    "img": true
  },
  {
    "id": 1742,
    "title": "Simpsons, The - Bartman Meets Radioactive Man (U)",
    "slug": "simpsons-the-bartman-meets-radioactive-man-u",
    "system": "nes",
    "romFile": "Simpsons, The - Bartman Meets Radioactive Man (U).zip",
    "img": true
  },
  {
    "id": 1743,
    "title": "Skate or Die 2 - The Search for Double Trouble (U)",
    "slug": "skate-or-die-2-the-search-for-double-trouble-u",
    "system": "nes",
    "romFile": "Skate or Die 2 - The Search for Double Trouble (U).zip",
    "img": true
  },
  {
    "id": 1744,
    "title": "Skate or Die! (E)",
    "slug": "skate-or-die-e",
    "system": "nes",
    "romFile": "Skate or Die! (E) [!].zip",
    "img": true
  },
  {
    "id": 1745,
    "title": "Skate or Die! (U)",
    "slug": "skate-or-die-u",
    "system": "nes",
    "romFile": "Skate or Die! (U).zip",
    "img": true
  },
  {
    "id": 1746,
    "title": "Ski or Die (U)",
    "slug": "ski-or-die-u",
    "system": "nes",
    "romFile": "Ski or Die (U).zip",
    "img": true
  },
  {
    "id": 1747,
    "title": "Skull & Crossbones (U)",
    "slug": "skull-crossbones-u",
    "system": "nes",
    "romFile": "Skull & Crossbones (U).zip",
    "img": true
  },
  {
    "id": 1748,
    "title": "Sky Destroyer (J)",
    "slug": "sky-destroyer-j",
    "system": "nes",
    "romFile": "Sky Destroyer (J).zip",
    "img": true
  },
  {
    "id": 1749,
    "title": "Sky Kid (J)",
    "slug": "sky-kid-j",
    "system": "nes",
    "romFile": "Sky Kid (J).zip",
    "img": true
  },
  {
    "id": 1750,
    "title": "Sky Kid (U)",
    "slug": "sky-kid-u",
    "system": "nes",
    "romFile": "Sky Kid (U).zip",
    "img": true
  },
  {
    "id": 1751,
    "title": "Sky Shark (U)",
    "slug": "sky-shark-u",
    "system": "nes",
    "romFile": "Sky Shark (U).zip",
    "img": true
  },
  {
    "id": 1752,
    "title": "Slalom (E)",
    "slug": "slalom-e",
    "system": "nes",
    "romFile": "Slalom (E).zip",
    "img": true
  },
  {
    "id": 1753,
    "title": "Slalom (U)",
    "slug": "slalom-u",
    "system": "nes",
    "romFile": "Slalom (U).zip",
    "img": true
  },
  {
    "id": 1754,
    "title": "Smash T.V. (E)",
    "slug": "smash-t-v-e",
    "system": "nes",
    "romFile": "Smash T.V. (E) [!].zip",
    "img": true
  },
  {
    "id": 1755,
    "title": "Smash T.V. (U)",
    "slug": "smash-t-v-u",
    "system": "nes",
    "romFile": "Smash T.V. (U) [!].zip",
    "img": true
  },
  {
    "id": 1756,
    "title": "Smurfs, The (E)",
    "slug": "smurfs-the-e",
    "system": "nes",
    "romFile": "Smurfs, The (E) [!].zip",
    "img": true
  },
  {
    "id": 1757,
    "title": "Snake Rattle'n Roll (E)",
    "slug": "snake-rattle-n-roll-e",
    "system": "nes",
    "romFile": "Snake Rattle'n Roll (E).zip",
    "img": true
  },
  {
    "id": 1758,
    "title": "Snake Rattle'n Roll (U)",
    "slug": "snake-rattle-n-roll-u",
    "system": "nes",
    "romFile": "Snake Rattle'n Roll (U).zip",
    "img": true
  },
  {
    "id": 1759,
    "title": "Snake's Revenge (E)",
    "slug": "snake-s-revenge-e",
    "system": "nes",
    "romFile": "Snake's Revenge (E) [!].zip",
    "img": true
  },
  {
    "id": 1760,
    "title": "Snake's Revenge (U)",
    "slug": "snake-s-revenge-u",
    "system": "nes",
    "romFile": "Snake's Revenge (U).zip",
    "img": true
  },
  {
    "id": 1761,
    "title": "Snoopy's Silly Sports Spectacular (U)",
    "slug": "snoopy-s-silly-sports-spectacular-u",
    "system": "nes",
    "romFile": "Snoopy's Silly Sports Spectacular (U).zip",
    "img": true
  },
  {
    "id": 1762,
    "title": "Snow Bros (J)",
    "slug": "snow-bros-j",
    "system": "nes",
    "romFile": "Snow Bros (J).zip",
    "img": true
  },
  {
    "id": 1763,
    "title": "Snow Bros (U)",
    "slug": "snow-bros-u",
    "system": "nes",
    "romFile": "Snow Bros (U).zip",
    "img": true
  },
  {
    "id": 1764,
    "title": "Soap Panic (J)",
    "slug": "soap-panic-j",
    "system": "nes",
    "romFile": "Soap Panic (J).zip",
    "img": true
  },
  {
    "id": 1765,
    "title": "Soccer (E)",
    "slug": "soccer-e",
    "system": "nes",
    "romFile": "Soccer (E) [!].zip",
    "img": true
  },
  {
    "id": 1766,
    "title": "Soccer (GC)",
    "slug": "soccer-gc",
    "system": "nes",
    "romFile": "Soccer (GC).zip",
    "img": true
  },
  {
    "id": 1767,
    "title": "Soccer (JU)",
    "slug": "soccer-ju",
    "system": "nes",
    "romFile": "Soccer (JU).zip",
    "img": true
  },
  {
    "id": 1768,
    "title": "Soccer (VS)",
    "slug": "soccer-vs",
    "system": "nes",
    "romFile": "Soccer (VS).zip",
    "img": true
  },
  {
    "id": 1769,
    "title": "Soccer League - Winner's Cup (J)",
    "slug": "soccer-league-winner-s-cup-j",
    "system": "nes",
    "romFile": "Soccer League - Winner's Cup (J).zip",
    "img": true
  },
  {
    "id": 1770,
    "title": "Softball Tengoku (J)",
    "slug": "softball-tengoku-j",
    "system": "nes",
    "romFile": "Softball Tengoku (J).zip",
    "img": true
  },
  {
    "id": 1771,
    "title": "Solar Jetman - Hunt for the Golden Warpship (E)",
    "slug": "solar-jetman-hunt-for-the-golden-warpship-e",
    "system": "nes",
    "romFile": "Solar Jetman - Hunt for the Golden Warpship (E).zip",
    "img": true
  },
  {
    "id": 1772,
    "title": "Solar Jetman - Hunt for the Golden Warpship (U)",
    "slug": "solar-jetman-hunt-for-the-golden-warpship-u",
    "system": "nes",
    "romFile": "Solar Jetman - Hunt for the Golden Warpship (U).zip",
    "img": true
  },
  {
    "id": 1773,
    "title": "Solitaire (U)",
    "slug": "solitaire-u",
    "system": "nes",
    "romFile": "Solitaire (U).zip",
    "img": true
  },
  {
    "id": 1774,
    "title": "Solomon no Kagi (J)",
    "slug": "solomon-no-kagi-j",
    "system": "nes",
    "romFile": "Solomon no Kagi (J).zip",
    "img": true
  },
  {
    "id": 1775,
    "title": "Solomon no Kagi 2 - Coolmin Tou Kyuushutsu Sakusen (J)",
    "slug": "solomon-no-kagi-2-coolmin-tou-kyuushutsu-sakusen-j",
    "system": "nes",
    "romFile": "Solomon no Kagi 2 - Coolmin Tou Kyuushutsu Sakusen (J).zip",
    "img": true
  },
  {
    "id": 1776,
    "title": "Solomon's Key (E)",
    "slug": "solomon-s-key-e",
    "system": "nes",
    "romFile": "Solomon's Key (E) [!].zip",
    "img": true
  },
  {
    "id": 1777,
    "title": "Solomon's Key (U)",
    "slug": "solomon-s-key-u",
    "system": "nes",
    "romFile": "Solomon's Key (U) [!].zip",
    "img": true
  },
  {
    "id": 1778,
    "title": "Solomon's Key 2 (E)",
    "slug": "solomon-s-key-2-e",
    "system": "nes",
    "romFile": "Solomon's Key 2 (E) [!].zip",
    "img": true
  },
  {
    "id": 1779,
    "title": "Solomon's Key 2 (U, Prototype)",
    "slug": "solomon-s-key-2-u-prototype",
    "system": "nes",
    "romFile": "Solomon's Key 2 (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1780,
    "title": "Solstice (E)",
    "slug": "solstice-e",
    "system": "nes",
    "romFile": "Solstice (E) [!].zip",
    "img": true
  },
  {
    "id": 1781,
    "title": "Solstice (J)",
    "slug": "solstice-j",
    "system": "nes",
    "romFile": "Solstice (J).zip",
    "img": true
  },
  {
    "id": 1782,
    "title": "Solstice (U)",
    "slug": "solstice-u",
    "system": "nes",
    "romFile": "Solstice (U).zip",
    "img": true
  },
  {
    "id": 1783,
    "title": "Somari (As)",
    "slug": "somari-as",
    "system": "nes",
    "romFile": "Somari (As).zip",
    "img": true
  },
  {
    "id": 1784,
    "title": "Son Son (J)",
    "slug": "son-son-j",
    "system": "nes",
    "romFile": "Son Son (J).zip",
    "img": true
  },
  {
    "id": 1785,
    "title": "Sore Ike! Anapanman - Minna de Hiking Game! (J)",
    "slug": "sore-ike-anapanman-minna-de-hiking-game-j",
    "system": "nes",
    "romFile": "Sore Ike! Anapanman - Minna de Hiking Game! (J).zip",
    "img": true
  },
  {
    "id": 1786,
    "title": "Space Harrier (J)",
    "slug": "space-harrier-j",
    "system": "nes",
    "romFile": "Space Harrier (J).zip",
    "img": true
  },
  {
    "id": 1787,
    "title": "Space Hunter (J)",
    "slug": "space-hunter-j",
    "system": "nes",
    "romFile": "Space Hunter (J).zip",
    "img": true
  },
  {
    "id": 1788,
    "title": "Space Invaders (J)",
    "slug": "space-invaders-j",
    "system": "nes",
    "romFile": "Space Invaders (J).zip",
    "img": true
  },
  {
    "id": 1789,
    "title": "Space Shadow (J)",
    "slug": "space-shadow-j",
    "system": "nes",
    "romFile": "Space Shadow (J).zip",
    "img": true
  },
  {
    "id": 1790,
    "title": "Space Shuttle Project (U)",
    "slug": "space-shuttle-project-u",
    "system": "nes",
    "romFile": "Space Shuttle Project (U).zip",
    "img": true
  },
  {
    "id": 1791,
    "title": "Spartan X (J)",
    "slug": "spartan-x-j",
    "system": "nes",
    "romFile": "Spartan X (J) [!].zip",
    "img": true
  },
  {
    "id": 1792,
    "title": "Spartan X 2 (J)",
    "slug": "spartan-x-2-j",
    "system": "nes",
    "romFile": "Spartan X 2 (J).zip",
    "img": true
  },
  {
    "id": 1793,
    "title": "Spelunker (J)",
    "slug": "spelunker-j",
    "system": "nes",
    "romFile": "Spelunker (J).zip",
    "img": true
  },
  {
    "id": 1794,
    "title": "Spelunker (U)",
    "slug": "spelunker-u",
    "system": "nes",
    "romFile": "Spelunker (U) [!].zip",
    "img": true
  },
  {
    "id": 1795,
    "title": "Spelunker 2 - Yuusha heno Chousen (J)",
    "slug": "spelunker-2-yuusha-heno-chousen-j",
    "system": "nes",
    "romFile": "Spelunker 2 - Yuusha heno Chousen (J).zip",
    "img": true
  },
  {
    "id": 1796,
    "title": "Spider-Man - Return of the Sinister Six (U)",
    "slug": "spider-man-return-of-the-sinister-six-u",
    "system": "nes",
    "romFile": "Spider-Man - Return of the Sinister Six (U) [!].zip",
    "img": true
  },
  {
    "id": 1797,
    "title": "Spiritual Warfare (U, Prototype)",
    "slug": "spiritual-warfare-u-prototype",
    "system": "nes",
    "romFile": "Spiritual Warfare (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1798,
    "title": "Spiritual Warfare (U, V6.0)",
    "slug": "spiritual-warfare-u-v6-0",
    "system": "nes",
    "romFile": "Spiritual Warfare (U) (V6.0).zip",
    "img": true
  },
  {
    "id": 1799,
    "title": "Spiritual Warfare (U, V6.1)",
    "slug": "spiritual-warfare-u-v6-1",
    "system": "nes",
    "romFile": "Spiritual Warfare (U) (V6.1).zip",
    "img": true
  },
  {
    "id": 1800,
    "title": "Splatter House - Wanpaku Graffiti (J)",
    "slug": "splatter-house-wanpaku-graffiti-j",
    "system": "nes",
    "romFile": "Splatter House - Wanpaku Graffiti (J).zip",
    "img": true
  },
  {
    "id": 1801,
    "title": "Spot (J)",
    "slug": "spot-j",
    "system": "nes",
    "romFile": "Spot (J).zip",
    "img": true
  },
  {
    "id": 1802,
    "title": "Spot (U)",
    "slug": "spot-u",
    "system": "nes",
    "romFile": "Spot (U).zip",
    "img": true
  },
  {
    "id": 1803,
    "title": "Spy Hunter (U)",
    "slug": "spy-hunter-u",
    "system": "nes",
    "romFile": "Spy Hunter (U).zip",
    "img": true
  },
  {
    "id": 1804,
    "title": "Spy Vs Spy (E)",
    "slug": "spy-vs-spy-e",
    "system": "nes",
    "romFile": "Spy Vs Spy (E) [!].zip",
    "img": true
  },
  {
    "id": 1805,
    "title": "Spy Vs Spy (J)",
    "slug": "spy-vs-spy-j",
    "system": "nes",
    "romFile": "Spy Vs Spy (J).zip",
    "img": true
  },
  {
    "id": 1806,
    "title": "Spy Vs Spy (U)",
    "slug": "spy-vs-spy-u",
    "system": "nes",
    "romFile": "Spy Vs Spy (U).zip",
    "img": true
  },
  {
    "id": 1807,
    "title": "Sqoon (J)",
    "slug": "sqoon-j",
    "system": "nes",
    "romFile": "Sqoon (J) [!].zip",
    "img": true
  },
  {
    "id": 1808,
    "title": "Sqoon (U)",
    "slug": "sqoon-u",
    "system": "nes",
    "romFile": "Sqoon (U).zip",
    "img": true
  },
  {
    "id": 1809,
    "title": "Square no Tom Sawyer (J)",
    "slug": "square-no-tom-sawyer-j",
    "system": "nes",
    "romFile": "Square no Tom Sawyer (J).zip",
    "img": true
  },
  {
    "id": 1810,
    "title": "Stack Up (Robot Block, JU)",
    "slug": "stack-up-robot-block-ju",
    "system": "nes",
    "romFile": "Stack Up (Robot Block) (JU).zip",
    "img": true
  },
  {
    "id": 1811,
    "title": "Stadium Events (E)",
    "slug": "stadium-events-e",
    "system": "nes",
    "romFile": "Stadium Events (E) [!].zip",
    "img": true
  },
  {
    "id": 1812,
    "title": "Stadium Events (U)",
    "slug": "stadium-events-u",
    "system": "nes",
    "romFile": "Stadium Events (U) [!].zip",
    "img": true
  },
  {
    "id": 1813,
    "title": "Stanley - The Search for Dr. Livingston (U)",
    "slug": "stanley-the-search-for-dr-livingston-u",
    "system": "nes",
    "romFile": "Stanley - The Search for Dr. Livingston (U).zip",
    "img": true
  },
  {
    "id": 1814,
    "title": "Star Force (J)",
    "slug": "star-force-j",
    "system": "nes",
    "romFile": "Star Force (J) [!].zip",
    "img": true
  },
  {
    "id": 1815,
    "title": "Star Force (U)",
    "slug": "star-force-u",
    "system": "nes",
    "romFile": "Star Force (U).zip",
    "img": true
  },
  {
    "id": 1816,
    "title": "Star Gate (J)",
    "slug": "star-gate-j",
    "system": "nes",
    "romFile": "Star Gate (J).zip",
    "img": true
  },
  {
    "id": 1817,
    "title": "Star Luster (J)",
    "slug": "star-luster-j",
    "system": "nes",
    "romFile": "Star Luster (J).zip",
    "img": true
  },
  {
    "id": 1818,
    "title": "Star Luster (VS)",
    "slug": "star-luster-vs",
    "system": "nes",
    "romFile": "Star Luster (VS).zip",
    "img": true
  },
  {
    "id": 1819,
    "title": "Star Soldier (J)",
    "slug": "star-soldier-j",
    "system": "nes",
    "romFile": "Star Soldier (J).zip",
    "img": true
  },
  {
    "id": 1820,
    "title": "Star Soldier (U)",
    "slug": "star-soldier-u",
    "system": "nes",
    "romFile": "Star Soldier (U).zip",
    "img": true
  },
  {
    "id": 1821,
    "title": "Star Trek - 25th Anniversary (U)",
    "slug": "star-trek-25th-anniversary-u",
    "system": "nes",
    "romFile": "Star Trek - 25th Anniversary (U).zip",
    "img": true
  },
  {
    "id": 1822,
    "title": "Star Trek - The Next Generation (U)",
    "slug": "star-trek-the-next-generation-u",
    "system": "nes",
    "romFile": "Star Trek - The Next Generation (U).zip",
    "img": true
  },
  {
    "id": 1823,
    "title": "Star Voyager (U)",
    "slug": "star-voyager-u",
    "system": "nes",
    "romFile": "Star Voyager (U).zip",
    "img": true
  },
  {
    "id": 1824,
    "title": "Star Wars (E)",
    "slug": "star-wars-e",
    "system": "nes",
    "romFile": "Star Wars (E).zip",
    "img": true
  },
  {
    "id": 1825,
    "title": "Star Wars (J, Namco)",
    "slug": "star-wars-j-namco",
    "system": "nes",
    "romFile": "Star Wars (J) (Namco).zip",
    "img": true
  },
  {
    "id": 1826,
    "title": "Star Wars (J, Victor)",
    "slug": "star-wars-j-victor",
    "system": "nes",
    "romFile": "Star Wars (J) (Victor).zip",
    "img": true
  },
  {
    "id": 1827,
    "title": "Star Wars (U)",
    "slug": "star-wars-u",
    "system": "nes",
    "romFile": "Star Wars (U).zip",
    "img": true
  },
  {
    "id": 1828,
    "title": "Star Wars - The Empire Strikes Back (J)",
    "slug": "star-wars-the-empire-strikes-back-j",
    "system": "nes",
    "romFile": "Star Wars - The Empire Strikes Back (J).zip",
    "img": true
  },
  {
    "id": 1829,
    "title": "Star Wars - The Empire Strikes Back (U)",
    "slug": "star-wars-the-empire-strikes-back-u",
    "system": "nes",
    "romFile": "Star Wars - The Empire Strikes Back (U).zip",
    "img": true
  },
  {
    "id": 1830,
    "title": "Starship Hector (U)",
    "slug": "starship-hector-u",
    "system": "nes",
    "romFile": "Starship Hector (U).zip",
    "img": true
  },
  {
    "id": 1831,
    "title": "Startropics (E)",
    "slug": "startropics-e",
    "system": "nes",
    "romFile": "Startropics (E) [!].zip",
    "img": true
  },
  {
    "id": 1832,
    "title": "Startropics (U)",
    "slug": "startropics-u",
    "system": "nes",
    "romFile": "Startropics (U).zip",
    "img": true
  },
  {
    "id": 1833,
    "title": "Startropics 2 - Zoda's Revenge (U)",
    "slug": "startropics-2-zoda-s-revenge-u",
    "system": "nes",
    "romFile": "Startropics 2 - Zoda's Revenge (U).zip"
  },
  {
    "id": 1834,
    "title": "Stealth ATF (E)",
    "slug": "stealth-atf-e",
    "system": "nes",
    "romFile": "Stealth ATF (E).zip",
    "img": true
  },
  {
    "id": 1835,
    "title": "Stealth ATF (U)",
    "slug": "stealth-atf-u",
    "system": "nes",
    "romFile": "Stealth ATF (U).zip",
    "img": true
  },
  {
    "id": 1836,
    "title": "Sted - Iseki Wakusei no Yabou (J)",
    "slug": "sted-iseki-wakusei-no-yabou-j",
    "system": "nes",
    "romFile": "Sted - Iseki Wakusei no Yabou (J).zip",
    "img": true
  },
  {
    "id": 1837,
    "title": "Stick Hunter - Exciting Ice Hockey (J)",
    "slug": "stick-hunter-exciting-ice-hockey-j",
    "system": "nes",
    "romFile": "Stick Hunter - Exciting Ice Hockey (J).zip",
    "img": true
  },
  {
    "id": 1838,
    "title": "Stinger (U)",
    "slug": "stinger-u",
    "system": "nes",
    "romFile": "Stinger (U).zip",
    "img": true
  },
  {
    "id": 1839,
    "title": "Street Cop (U)",
    "slug": "street-cop-u",
    "system": "nes",
    "romFile": "Street Cop (U).zip",
    "img": true
  },
  {
    "id": 1840,
    "title": "Street Fighter 2010 (J)",
    "slug": "street-fighter-2010-j",
    "system": "nes",
    "romFile": "Street Fighter 2010 (J).zip",
    "img": true
  },
  {
    "id": 1841,
    "title": "Street Fighter 2010 (U)",
    "slug": "street-fighter-2010-u",
    "system": "nes",
    "romFile": "Street Fighter 2010 (U).zip",
    "img": true
  },
  {
    "id": 1842,
    "title": "Street Gangs (E)",
    "slug": "street-gangs-e",
    "system": "nes",
    "romFile": "Street Gangs (E).zip",
    "img": true
  },
  {
    "id": 1843,
    "title": "Strider (U)",
    "slug": "strider-u",
    "system": "nes",
    "romFile": "Strider (U).zip",
    "img": true
  },
  {
    "id": 1844,
    "title": "Stroke and Match Golf (VS)",
    "slug": "stroke-and-match-golf-vs",
    "system": "nes",
    "romFile": "Stroke and Match Golf (VS) [!].zip"
  },
  {
    "id": 1845,
    "title": "Stunt Kids (U)",
    "slug": "stunt-kids-u",
    "system": "nes",
    "romFile": "Stunt Kids (U).zip",
    "img": true
  },
  {
    "id": 1846,
    "title": "Sugoro Quest - Dice no Senshitachi (As)",
    "slug": "sugoro-quest-dice-no-senshitachi-as",
    "system": "nes",
    "romFile": "Sugoro Quest - Dice no Senshitachi (As).zip",
    "img": true
  },
  {
    "id": 1847,
    "title": "Sugoro Quest - Dice no Senshitachi (J)",
    "slug": "sugoro-quest-dice-no-senshitachi-j",
    "system": "nes",
    "romFile": "Sugoro Quest - Dice no Senshitachi (J).zip",
    "img": true
  },
  {
    "id": 1848,
    "title": "Suikoden - Tenmei no Chikai (J)",
    "slug": "suikoden-tenmei-no-chikai-j",
    "system": "nes",
    "romFile": "Suikoden - Tenmei no Chikai (J).zip",
    "img": true
  },
  {
    "id": 1849,
    "title": "Sukeban Deka 3 (J)",
    "slug": "sukeban-deka-3-j",
    "system": "nes",
    "romFile": "Sukeban Deka 3 (J).zip",
    "img": true
  },
  {
    "id": 1850,
    "title": "Summer Carnival '92 - Recca (J)",
    "slug": "summer-carnival-92-recca-j",
    "system": "nes",
    "romFile": "Summer Carnival '92 - Recca (J).zip",
    "img": true
  },
  {
    "id": 1851,
    "title": "Sunday Funday (U)",
    "slug": "sunday-funday-u",
    "system": "nes",
    "romFile": "Sunday Funday (U).zip"
  },
  {
    "id": 1852,
    "title": "Sunman (E, Prototype)",
    "slug": "sunman-e-prototype",
    "system": "nes",
    "romFile": "Sunman (E) (Prototype).zip",
    "img": true
  },
  {
    "id": 1853,
    "title": "Super Arabian (J)",
    "slug": "super-arabian-j",
    "system": "nes",
    "romFile": "Super Arabian (J).zip",
    "img": true
  },
  {
    "id": 1854,
    "title": "Super Black Onyx (J)",
    "slug": "super-black-onyx-j",
    "system": "nes",
    "romFile": "Super Black Onyx (J).zip",
    "img": true
  },
  {
    "id": 1855,
    "title": "Super C (KC)",
    "slug": "super-c-kc",
    "system": "nes",
    "romFile": "Super C (KC).zip",
    "img": true
  },
  {
    "id": 1856,
    "title": "Super C (PC10)",
    "slug": "super-c-pc10",
    "system": "nes",
    "romFile": "Super C (PC10).zip",
    "img": true
  },
  {
    "id": 1857,
    "title": "Super C (U)",
    "slug": "super-c-u",
    "system": "nes",
    "romFile": "Super C (U) [!].zip",
    "img": true
  },
  {
    "id": 1858,
    "title": "Super Cars (U)",
    "slug": "super-cars-u",
    "system": "nes",
    "romFile": "Super Cars (U).zip",
    "img": true
  },
  {
    "id": 1859,
    "title": "Super Chinese (J)",
    "slug": "super-chinese-j",
    "system": "nes",
    "romFile": "Super Chinese (J).zip",
    "img": true
  },
  {
    "id": 1860,
    "title": "Super Chinese 2 - Dragon Kid (J)",
    "slug": "super-chinese-2-dragon-kid-j",
    "system": "nes",
    "romFile": "Super Chinese 2 - Dragon Kid (J).zip",
    "img": true
  },
  {
    "id": 1861,
    "title": "Super Chinese 3 (J)",
    "slug": "super-chinese-3-j",
    "system": "nes",
    "romFile": "Super Chinese 3 (J).zip",
    "img": true
  },
  {
    "id": 1862,
    "title": "Super Contra (J)",
    "slug": "super-contra-j",
    "system": "nes",
    "romFile": "Super Contra (J).zip",
    "img": true
  },
  {
    "id": 1863,
    "title": "Super Dodge Ball (U)",
    "slug": "super-dodge-ball-u",
    "system": "nes",
    "romFile": "Super Dodge Ball (U).zip",
    "img": true
  },
  {
    "id": 1864,
    "title": "Super Donkey Kong - Xiang Jiao Chuan (As)",
    "slug": "super-donkey-kong-xiang-jiao-chuan-as",
    "system": "nes",
    "romFile": "Super Donkey Kong - Xiang Jiao Chuan (As).zip",
    "img": true
  },
  {
    "id": 1865,
    "title": "Super Donkey Kong 2",
    "slug": "super-donkey-kong-2-p1",
    "system": "nes",
    "romFile": "Super Donkey Kong 2 [p1].zip",
    "img": true
  },
  {
    "id": 1866,
    "title": "Super Donkey Kong",
    "slug": "super-donkey-kong-p1",
    "system": "nes",
    "romFile": "Super Donkey Kong [p1][!].zip",
    "img": true
  },
  {
    "id": 1867,
    "title": "Super Dyna'mix Badminton (J)",
    "slug": "super-dyna-mix-badminton-j",
    "system": "nes",
    "romFile": "Super Dyna'mix Badminton (J).zip",
    "img": true
  },
  {
    "id": 1868,
    "title": "Super Glove Ball (U)",
    "slug": "super-glove-ball-u",
    "system": "nes",
    "romFile": "Super Glove Ball (U).zip",
    "img": true
  },
  {
    "id": 1869,
    "title": "Super Jeopardy! (U)",
    "slug": "super-jeopardy-u",
    "system": "nes",
    "romFile": "Super Jeopardy! (U).zip",
    "img": true
  },
  {
    "id": 1870,
    "title": "Super Mario Bros. (E)",
    "slug": "super-mario-bros-e",
    "system": "nes",
    "romFile": "Super Mario Bros. (E).zip",
    "img": true
  },
  {
    "id": 1871,
    "title": "Super Mario Bros. + Duck Hunt (E)",
    "slug": "super-mario-bros-duck-hunt-e",
    "system": "nes",
    "romFile": "Super Mario Bros. + Duck Hunt (E).zip",
    "img": true
  },
  {
    "id": 1872,
    "title": "Super Mario Bros. 2 (E)",
    "slug": "super-mario-bros-2-e",
    "system": "nes",
    "romFile": "Super Mario Bros. 2 (E) [!].zip",
    "img": true
  },
  {
    "id": 1873,
    "title": "Super Mario Bros. 3 (E)",
    "slug": "super-mario-bros-3-e",
    "system": "nes",
    "romFile": "Super Mario Bros. 3 (E).zip",
    "img": true
  },
  {
    "id": 1874,
    "title": "Super Mogura Tataki!! - Pokkun Moguraa (J)",
    "slug": "super-mogura-tataki-pokkun-moguraa-j",
    "system": "nes",
    "romFile": "Super Mogura Tataki!! - Pokkun Moguraa (J).zip"
  },
  {
    "id": 1875,
    "title": "Super Momotarou Dentetsu (J)",
    "slug": "super-momotarou-dentetsu-j",
    "system": "nes",
    "romFile": "Super Momotarou Dentetsu (J).zip",
    "img": true
  },
  {
    "id": 1876,
    "title": "Super Off-Road (E)",
    "slug": "super-off-road-e",
    "system": "nes",
    "romFile": "Super Off-Road (E) [!].zip"
  },
  {
    "id": 1877,
    "title": "Super Pinball (J)",
    "slug": "super-pinball-j",
    "system": "nes",
    "romFile": "Super Pinball (J).zip",
    "img": true
  },
  {
    "id": 1878,
    "title": "Super Pitfall (J)",
    "slug": "super-pitfall-j",
    "system": "nes",
    "romFile": "Super Pitfall (J).zip",
    "img": true
  },
  {
    "id": 1879,
    "title": "Super Pitfall (U)",
    "slug": "super-pitfall-u",
    "system": "nes",
    "romFile": "Super Pitfall (U).zip",
    "img": true
  },
  {
    "id": 1880,
    "title": "Super Real Baseball '88 (J)",
    "slug": "super-real-baseball-88-j",
    "system": "nes",
    "romFile": "Super Real Baseball '88 (J).zip",
    "img": true
  },
  {
    "id": 1881,
    "title": "Super Rugby (J)",
    "slug": "super-rugby-j",
    "system": "nes",
    "romFile": "Super Rugby (J).zip",
    "img": true
  },
  {
    "id": 1882,
    "title": "Super Skater (VS)",
    "slug": "super-skater-vs",
    "system": "nes",
    "romFile": "Super Skater (VS).zip"
  },
  {
    "id": 1883,
    "title": "Super Sky Kid (VS)",
    "slug": "super-sky-kid-vs",
    "system": "nes",
    "romFile": "Super Sky Kid (VS).zip"
  },
  {
    "id": 1884,
    "title": "Super Spike V'Ball (E)",
    "slug": "super-spike-v-ball-e",
    "system": "nes",
    "romFile": "Super Spike V'Ball (E) [!].zip",
    "img": true
  },
  {
    "id": 1885,
    "title": "Super Spike V'Ball (U)",
    "slug": "super-spike-v-ball-u",
    "system": "nes",
    "romFile": "Super Spike V'Ball (U).zip",
    "img": true
  },
  {
    "id": 1886,
    "title": "Super Spike V'Ball + Nintendo World Cup (U)",
    "slug": "super-spike-v-ball-nintendo-world-cup-u",
    "system": "nes",
    "romFile": "Super Spike V'Ball + Nintendo World Cup (U) [!].zip",
    "img": true
  },
  {
    "id": 1887,
    "title": "Super Sports Challenge (E, Aladdin)",
    "slug": "super-sports-challenge-e-aladdin",
    "system": "nes",
    "romFile": "Super Sports Challenge (E) (Aladdin).zip",
    "img": true
  },
  {
    "id": 1888,
    "title": "Super Sprint (J)",
    "slug": "super-sprint-j",
    "system": "nes",
    "romFile": "Super Sprint (J).zip",
    "img": true
  },
  {
    "id": 1889,
    "title": "Super Sprint (U)",
    "slug": "super-sprint-u",
    "system": "nes",
    "romFile": "Super Sprint (U).zip",
    "img": true
  },
  {
    "id": 1890,
    "title": "Super Spy Hunter (U)",
    "slug": "super-spy-hunter-u",
    "system": "nes",
    "romFile": "Super Spy Hunter (U).zip",
    "img": true
  },
  {
    "id": 1891,
    "title": "Super Star Force (J)",
    "slug": "super-star-force-j",
    "system": "nes",
    "romFile": "Super Star Force (J).zip",
    "img": true
  },
  {
    "id": 1892,
    "title": "Super Team Games (U)",
    "slug": "super-team-games-u",
    "system": "nes",
    "romFile": "Super Team Games (U).zip",
    "img": true
  },
  {
    "id": 1893,
    "title": "Super Turrican (E)",
    "slug": "super-turrican-e",
    "system": "nes",
    "romFile": "Super Turrican (E).zip",
    "img": true
  },
  {
    "id": 1894,
    "title": "Super Xevious (VS)",
    "slug": "super-xevious-vs",
    "system": "nes",
    "romFile": "Super Xevious (VS).zip"
  },
  {
    "id": 1895,
    "title": "Super Xevious - Gump no Nazo (J)",
    "slug": "super-xevious-gump-no-nazo-j",
    "system": "nes",
    "romFile": "Super Xevious - Gump no Nazo (J).zip",
    "img": true
  },
  {
    "id": 1896,
    "title": "Superman (J)",
    "slug": "superman-j",
    "system": "nes",
    "romFile": "Superman (J).zip",
    "img": true
  },
  {
    "id": 1897,
    "title": "Superman (U)",
    "slug": "superman-u",
    "system": "nes",
    "romFile": "Superman (U).zip",
    "img": true
  },
  {
    "id": 1898,
    "title": "Superstar Pro Wrestling (J)",
    "slug": "superstar-pro-wrestling-j",
    "system": "nes",
    "romFile": "Superstar Pro Wrestling (J).zip",
    "img": true
  },
  {
    "id": 1899,
    "title": "Swamp Thing (U)",
    "slug": "swamp-thing-u",
    "system": "nes",
    "romFile": "Swamp Thing (U) [!].zip",
    "img": true
  },
  {
    "id": 1900,
    "title": "Sweet Home (J)",
    "slug": "sweet-home-j",
    "system": "nes",
    "romFile": "Sweet Home (J).zip",
    "img": true
  },
  {
    "id": 1901,
    "title": "Sword Master (E)",
    "slug": "sword-master-e",
    "system": "nes",
    "romFile": "Sword Master (E) [!].zip",
    "img": true
  },
  {
    "id": 1902,
    "title": "Sword Master (J)",
    "slug": "sword-master-j",
    "system": "nes",
    "romFile": "Sword Master (J).zip",
    "img": true
  },
  {
    "id": 1903,
    "title": "Sword Master (U)",
    "slug": "sword-master-u",
    "system": "nes",
    "romFile": "Sword Master (U).zip",
    "img": true
  },
  {
    "id": 1904,
    "title": "Swords and Serpents (E)",
    "slug": "swords-and-serpents-e",
    "system": "nes",
    "romFile": "Swords and Serpents (E) [!].zip",
    "img": true
  },
  {
    "id": 1905,
    "title": "Swords and Serpents (U)",
    "slug": "swords-and-serpents-u",
    "system": "nes",
    "romFile": "Swords and Serpents (U).zip",
    "img": true
  },
  {
    "id": 1906,
    "title": "T&C 2 - Thrilla's Surfari (U)",
    "slug": "t-c-2-thrilla-s-surfari-u",
    "system": "nes",
    "romFile": "T&C 2 - Thrilla's Surfari (U).zip"
  },
  {
    "id": 1907,
    "title": "T&C Surf Design (U)",
    "slug": "t-c-surf-design-u",
    "system": "nes",
    "romFile": "T&C Surf Design (U).zip"
  },
  {
    "id": 1908,
    "title": "Taboo - The Sixth Sense (U)",
    "slug": "taboo-the-sixth-sense-u",
    "system": "nes",
    "romFile": "Taboo - The Sixth Sense (U).zip",
    "img": true
  },
  {
    "id": 1909,
    "title": "Tag Team Pro-Wrestling (J)",
    "slug": "tag-team-pro-wrestling-j",
    "system": "nes",
    "romFile": "Tag Team Pro-Wrestling (J).zip",
    "img": true
  },
  {
    "id": 1910,
    "title": "Tag Team Wrestling (U)",
    "slug": "tag-team-wrestling-u",
    "system": "nes",
    "romFile": "Tag Team Wrestling (U).zip",
    "img": true
  },
  {
    "id": 1911,
    "title": "Tagin' Dragon (U)",
    "slug": "tagin-dragon-u",
    "system": "nes",
    "romFile": "Tagin' Dragon (U).zip",
    "img": true
  },
  {
    "id": 1912,
    "title": "Taito Basketball (J)",
    "slug": "taito-basketball-j",
    "system": "nes",
    "romFile": "Taito Basketball (J).zip",
    "img": true
  },
  {
    "id": 1913,
    "title": "Taito Chase H.Q. (J)",
    "slug": "taito-chase-h-q-j",
    "system": "nes",
    "romFile": "Taito Chase H.Q. (J).zip",
    "img": true
  },
  {
    "id": 1914,
    "title": "Taito Grand Prix - Eikou heno License (J)",
    "slug": "taito-grand-prix-eikou-heno-license-j",
    "system": "nes",
    "romFile": "Taito Grand Prix - Eikou heno License (J).zip",
    "img": true
  },
  {
    "id": 1915,
    "title": "Taiyou no Shinden - Asteka 2 (J)",
    "slug": "taiyou-no-shinden-asteka-2-j",
    "system": "nes",
    "romFile": "Taiyou no Shinden - Asteka 2 (J).zip",
    "img": true
  },
  {
    "id": 1916,
    "title": "Taiyou no Yuusha Firebird (J)",
    "slug": "taiyou-no-yuusha-firebird-j",
    "system": "nes",
    "romFile": "Taiyou no Yuusha Firebird (J).zip",
    "img": true
  },
  {
    "id": 1917,
    "title": "Takahashi Meijin no Bouken Shima (J)",
    "slug": "takahashi-meijin-no-bouken-shima-j",
    "system": "nes",
    "romFile": "Takahashi Meijin no Bouken Shima (J) [!].zip"
  },
  {
    "id": 1918,
    "title": "Takahashi Meijin no Bouken Shima II (J)",
    "slug": "takahashi-meijin-no-bouken-shima-ii-j",
    "system": "nes",
    "romFile": "Takahashi Meijin no Bouken Shima II (J).zip"
  },
  {
    "id": 1919,
    "title": "Takahashi Meijin no Bouken Shima III (J)",
    "slug": "takahashi-meijin-no-bouken-shima-iii-j",
    "system": "nes",
    "romFile": "Takahashi Meijin no Bouken Shima III (J).zip"
  },
  {
    "id": 1920,
    "title": "Takahashi Meijin no Bouken Shima IV (J)",
    "slug": "takahashi-meijin-no-bouken-shima-iv-j",
    "system": "nes",
    "romFile": "Takahashi Meijin no Bouken Shima IV (J).zip"
  },
  {
    "id": 1921,
    "title": "Takahashi Meijin no Bugutte Honey (J)",
    "slug": "takahashi-meijin-no-bugutte-honey-j",
    "system": "nes",
    "romFile": "Takahashi Meijin no Bugutte Honey (J).zip",
    "img": true
  },
  {
    "id": 1922,
    "title": "Takeda Shingen (J)",
    "slug": "takeda-shingen-j",
    "system": "nes",
    "romFile": "Takeda Shingen (J).zip",
    "img": true
  },
  {
    "id": 1923,
    "title": "Takeda Shingen 2 (J)",
    "slug": "takeda-shingen-2-j",
    "system": "nes",
    "romFile": "Takeda Shingen 2 (J).zip",
    "img": true
  },
  {
    "id": 1924,
    "title": "Takeshi no Chousenjou (J, 1986)",
    "slug": "takeshi-no-chousenjou-j-1986",
    "system": "nes",
    "romFile": "Takeshi no Chousenjou (J) (1986).zip",
    "img": true
  },
  {
    "id": 1925,
    "title": "Takeshi no Chousenjou (J, 1990)",
    "slug": "takeshi-no-chousenjou-j-1990",
    "system": "nes",
    "romFile": "Takeshi no Chousenjou (J) (1990).zip",
    "img": true
  },
  {
    "id": 1926,
    "title": "Takeshi no Sengoku Fuuunji (J)",
    "slug": "takeshi-no-sengoku-fuuunji-j",
    "system": "nes",
    "romFile": "Takeshi no Sengoku Fuuunji (J).zip",
    "img": true
  },
  {
    "id": 1927,
    "title": "TaleSpin (E)",
    "slug": "talespin-e",
    "system": "nes",
    "romFile": "TaleSpin (E) [!].zip",
    "img": true
  },
  {
    "id": 1928,
    "title": "TaleSpin (U)",
    "slug": "talespin-u",
    "system": "nes",
    "romFile": "TaleSpin (U).zip",
    "img": true
  },
  {
    "id": 1929,
    "title": "Tamura Koushou Mahjong Seminar (J)",
    "slug": "tamura-koushou-mahjong-seminar-j",
    "system": "nes",
    "romFile": "Tamura Koushou Mahjong Seminar (J).zip",
    "img": true
  },
  {
    "id": 1930,
    "title": "Tanigawa Kouji no Shougi Shinan 2 (J)",
    "slug": "tanigawa-kouji-no-shougi-shinan-2-j",
    "system": "nes",
    "romFile": "Tanigawa Kouji no Shougi Shinan 2 (J).zip",
    "img": true
  },
  {
    "id": 1931,
    "title": "Tanigawa Kouji no Shougi Shinan 3 (J)",
    "slug": "tanigawa-kouji-no-shougi-shinan-3-j",
    "system": "nes",
    "romFile": "Tanigawa Kouji no Shougi Shinan 3 (J).zip",
    "img": true
  },
  {
    "id": 1932,
    "title": "Tantei Jinguuji Saburou - Toki no Sugiyuku Mama ni (J)",
    "slug": "tantei-jinguuji-saburou-toki-no-sugiyuku-mama-ni-j",
    "system": "nes",
    "romFile": "Tantei Jinguuji Saburou - Toki no Sugiyuku Mama ni (J).zip",
    "img": true
  },
  {
    "id": 1933,
    "title": "Tantei Jinguuji Saburou - Yokohamakou Renzoku Satsujin Jiken (J)",
    "slug": "tantei-jinguuji-saburou-yokohamakou-renzoku-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Tantei Jinguuji Saburou - Yokohamakou Renzoku Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 1934,
    "title": "Tao (J)",
    "slug": "tao-j",
    "system": "nes",
    "romFile": "Tao (J).zip",
    "img": true
  },
  {
    "id": 1935,
    "title": "Target Renegade (U)",
    "slug": "target-renegade-u",
    "system": "nes",
    "romFile": "Target Renegade (U).zip",
    "img": true
  },
  {
    "id": 1936,
    "title": "Tashiro Masashi no Princess ga Ippai (J)",
    "slug": "tashiro-masashi-no-princess-ga-ippai-j",
    "system": "nes",
    "romFile": "Tashiro Masashi no Princess ga Ippai (J).zip",
    "img": true
  },
  {
    "id": 1937,
    "title": "Tatakae!! Rahmen Man - Sakuretsu Choujin 102 Gei (J)",
    "slug": "tatakae-rahmen-man-sakuretsu-choujin-102-gei-j",
    "system": "nes",
    "romFile": "Tatakae!! Rahmen Man - Sakuretsu Choujin 102 Gei (J).zip",
    "img": true
  },
  {
    "id": 1938,
    "title": "Tatakai no Banka (J)",
    "slug": "tatakai-no-banka-j",
    "system": "nes",
    "romFile": "Tatakai no Banka (J).zip",
    "img": true
  },
  {
    "id": 1939,
    "title": "Tecmo Baseball (U)",
    "slug": "tecmo-baseball-u",
    "system": "nes",
    "romFile": "Tecmo Baseball (U).zip",
    "img": true
  },
  {
    "id": 1940,
    "title": "Tecmo Bowl (J)",
    "slug": "tecmo-bowl-j",
    "system": "nes",
    "romFile": "Tecmo Bowl (J).zip",
    "img": true
  },
  {
    "id": 1941,
    "title": "Tecmo Bowl (PC10)",
    "slug": "tecmo-bowl-pc10",
    "system": "nes",
    "romFile": "Tecmo Bowl (PC10).zip",
    "img": true
  },
  {
    "id": 1942,
    "title": "Tecmo Bowl (U, PRG0)",
    "slug": "tecmo-bowl-u-prg0",
    "system": "nes",
    "romFile": "Tecmo Bowl (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 1943,
    "title": "Tecmo Bowl (U, PRG1)",
    "slug": "tecmo-bowl-u-prg1",
    "system": "nes",
    "romFile": "Tecmo Bowl (U) (PRG1).zip",
    "img": true
  },
  {
    "id": 1944,
    "title": "Tecmo Bowl (U, Prototype)",
    "slug": "tecmo-bowl-u-prototype",
    "system": "nes",
    "romFile": "Tecmo Bowl (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1945,
    "title": "Tecmo Cup - Soccer Game (U)",
    "slug": "tecmo-cup-soccer-game-u",
    "system": "nes",
    "romFile": "Tecmo Cup - Soccer Game (U).zip",
    "img": true
  },
  {
    "id": 1946,
    "title": "Tecmo NBA Basketball (U)",
    "slug": "tecmo-nba-basketball-u",
    "system": "nes",
    "romFile": "Tecmo NBA Basketball (U).zip",
    "img": true
  },
  {
    "id": 1947,
    "title": "Tecmo Super Bowl (J)",
    "slug": "tecmo-super-bowl-j",
    "system": "nes",
    "romFile": "Tecmo Super Bowl (J).zip",
    "img": true
  },
  {
    "id": 1948,
    "title": "Tecmo Super Bowl (U)",
    "slug": "tecmo-super-bowl-u",
    "system": "nes",
    "romFile": "Tecmo Super Bowl (U).zip",
    "img": true
  },
  {
    "id": 1949,
    "title": "Tecmo World Cup Soccer (J)",
    "slug": "tecmo-world-cup-soccer-j",
    "system": "nes",
    "romFile": "Tecmo World Cup Soccer (J).zip",
    "img": true
  },
  {
    "id": 1950,
    "title": "Tecmo World Wrestling (E)",
    "slug": "tecmo-world-wrestling-e",
    "system": "nes",
    "romFile": "Tecmo World Wrestling (E).zip",
    "img": true
  },
  {
    "id": 1951,
    "title": "Tecmo World Wrestling (U)",
    "slug": "tecmo-world-wrestling-u",
    "system": "nes",
    "romFile": "Tecmo World Wrestling (U).zip",
    "img": true
  },
  {
    "id": 1952,
    "title": "Teenage Mutant Hero Turtles (E)",
    "slug": "teenage-mutant-hero-turtles-e",
    "system": "nes",
    "romFile": "Teenage Mutant Hero Turtles (E).zip",
    "img": true
  },
  {
    "id": 1953,
    "title": "Teenage Mutant Hero Turtles II - The Arcade Game (E)",
    "slug": "teenage-mutant-hero-turtles-ii-the-arcade-game-e",
    "system": "nes",
    "romFile": "Teenage Mutant Hero Turtles II - The Arcade Game (E) [!].zip",
    "img": true
  },
  {
    "id": 1954,
    "title": "Teenage Mutant Ninja Turtles (I)",
    "slug": "teenage-mutant-ninja-turtles-i",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles (I).zip",
    "img": true
  },
  {
    "id": 1955,
    "title": "Teenage Mutant Ninja Turtles (J)",
    "slug": "teenage-mutant-ninja-turtles-j",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles (J).zip",
    "img": true
  },
  {
    "id": 1956,
    "title": "Teenage Mutant Ninja Turtles (PC10)",
    "slug": "teenage-mutant-ninja-turtles-pc10",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles (PC10).zip",
    "img": true
  },
  {
    "id": 1957,
    "title": "Teenage Mutant Ninja Turtles (U)",
    "slug": "teenage-mutant-ninja-turtles-u",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles (U) [!].zip",
    "img": true
  },
  {
    "id": 1958,
    "title": "Teenage Mutant Ninja Turtles - Tournament Fighters (U)",
    "slug": "teenage-mutant-ninja-turtles-tournament-fighters-u",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles - Tournament Fighters (U).zip",
    "img": true
  },
  {
    "id": 1959,
    "title": "Teenage Mutant Ninja Turtles II - The Arcade Game (J)",
    "slug": "teenage-mutant-ninja-turtles-ii-the-arcade-game-j",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles II - The Arcade Game (J).zip",
    "img": true
  },
  {
    "id": 1960,
    "title": "Teenage Mutant Ninja Turtles II - The Arcade Game (PC10)",
    "slug": "teenage-mutant-ninja-turtles-ii-the-arcade-game-pc10",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles II - The Arcade Game (PC10).zip",
    "img": true
  },
  {
    "id": 1961,
    "title": "Teenage Mutant Ninja Turtles II - The Arcade Game (U)",
    "slug": "teenage-mutant-ninja-turtles-ii-the-arcade-game-u",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles II - The Arcade Game (U) [!].zip",
    "img": true
  },
  {
    "id": 1962,
    "title": "Teenage Mutant Ninja Turtles III - The Manhattan Project (U)",
    "slug": "teenage-mutant-ninja-turtles-iii-the-manhattan-project-u",
    "system": "nes",
    "romFile": "Teenage Mutant Ninja Turtles III - The Manhattan Project (U).zip",
    "img": true
  },
  {
    "id": 1963,
    "title": "Tekken 2",
    "slug": "tekken-2-p1",
    "system": "nes",
    "romFile": "Tekken 2 [p1].zip",
    "img": true
  },
  {
    "id": 1964,
    "title": "Tenchi o Kurau (J)",
    "slug": "tenchi-o-kurau-j",
    "system": "nes",
    "romFile": "Tenchi o Kurau (J).zip",
    "img": true
  },
  {
    "id": 1965,
    "title": "Tenchi o Kurau II - Shokatsu Koumei Den (J)",
    "slug": "tenchi-o-kurau-ii-shokatsu-koumei-den-j",
    "system": "nes",
    "romFile": "Tenchi o Kurau II - Shokatsu Koumei Den (J).zip",
    "img": true
  },
  {
    "id": 1966,
    "title": "Tenkaichi Bushi - Keru Naguuru (J)",
    "slug": "tenkaichi-bushi-keru-naguuru-j",
    "system": "nes",
    "romFile": "Tenkaichi Bushi - Keru Naguuru (J).zip",
    "img": true
  },
  {
    "id": 1967,
    "title": "Tennis (E)",
    "slug": "tennis-e",
    "system": "nes",
    "romFile": "Tennis (E) [!].zip",
    "img": true
  },
  {
    "id": 1968,
    "title": "Tennis (GC)",
    "slug": "tennis-gc",
    "system": "nes",
    "romFile": "Tennis (GC).zip",
    "img": true
  },
  {
    "id": 1969,
    "title": "Tennis (JU)",
    "slug": "tennis-ju",
    "system": "nes",
    "romFile": "Tennis (JU) [!].zip",
    "img": true
  },
  {
    "id": 1970,
    "title": "Tennis (PC10)",
    "slug": "tennis-pc10",
    "system": "nes",
    "romFile": "Tennis (PC10).zip",
    "img": true
  },
  {
    "id": 1971,
    "title": "Tennis (VS, Player 2 Mode)",
    "slug": "tennis-vs-player-2-mode",
    "system": "nes",
    "romFile": "Tennis (VS) (Player 2 Mode).zip",
    "img": true
  },
  {
    "id": 1972,
    "title": "Tennis (VS)",
    "slug": "tennis-vs",
    "system": "nes",
    "romFile": "Tennis (VS) [!].zip",
    "img": true
  },
  {
    "id": 1973,
    "title": "Tennis (VS)",
    "slug": "tennis-vs",
    "system": "nes",
    "romFile": "Tennis (VS).zip",
    "img": true
  },
  {
    "id": 1974,
    "title": "Terao no Dosukoi Oozumou (J)",
    "slug": "terao-no-dosukoi-oozumou-j",
    "system": "nes",
    "romFile": "Terao no Dosukoi Oozumou (J).zip",
    "img": true
  },
  {
    "id": 1975,
    "title": "Terminator 2 - Judgment Day (E)",
    "slug": "terminator-2-judgment-day-e",
    "system": "nes",
    "romFile": "Terminator 2 - Judgment Day (E) [!].zip",
    "img": true
  },
  {
    "id": 1976,
    "title": "Terminator 2 - Judgment Day (J)",
    "slug": "terminator-2-judgment-day-j",
    "system": "nes",
    "romFile": "Terminator 2 - Judgment Day (J).zip",
    "img": true
  },
  {
    "id": 1977,
    "title": "Terminator 2 - Judgment Day (U, Prototype)",
    "slug": "terminator-2-judgment-day-u-prototype",
    "system": "nes",
    "romFile": "Terminator 2 - Judgment Day (U) (Prototype).zip",
    "img": true
  },
  {
    "id": 1978,
    "title": "Terminator 2 - Judgment Day (U)",
    "slug": "terminator-2-judgment-day-u",
    "system": "nes",
    "romFile": "Terminator 2 - Judgment Day (U).zip",
    "img": true
  },
  {
    "id": 1979,
    "title": "Terminator, The (U)",
    "slug": "terminator-the-u",
    "system": "nes",
    "romFile": "Terminator, The (U).zip",
    "img": true
  },
  {
    "id": 1980,
    "title": "Terra Cresta (J)",
    "slug": "terra-cresta-j",
    "system": "nes",
    "romFile": "Terra Cresta (J).zip",
    "img": true
  },
  {
    "id": 1981,
    "title": "Terra Cresta (U)",
    "slug": "terra-cresta-u",
    "system": "nes",
    "romFile": "Terra Cresta (U).zip",
    "img": true
  },
  {
    "id": 1982,
    "title": "Tetrastar - The Fighter (J)",
    "slug": "tetrastar-the-fighter-j",
    "system": "nes",
    "romFile": "Tetrastar - The Fighter (J).zip",
    "img": true
  },
  {
    "id": 1983,
    "title": "Tetris (J)",
    "slug": "tetris-j",
    "system": "nes",
    "romFile": "Tetris (J).zip",
    "img": true
  },
  {
    "id": 1984,
    "title": "Tetris (U)",
    "slug": "tetris-u",
    "system": "nes",
    "romFile": "Tetris (U) [!].zip",
    "img": true
  },
  {
    "id": 1985,
    "title": "Tetris (VS)",
    "slug": "tetris-vs",
    "system": "nes",
    "romFile": "Tetris (VS).zip",
    "img": true
  },
  {
    "id": 1986,
    "title": "Tetris 2 (E)",
    "slug": "tetris-2-e",
    "system": "nes",
    "romFile": "Tetris 2 (E).zip",
    "img": true
  },
  {
    "id": 1987,
    "title": "Tetris 2 (U)",
    "slug": "tetris-2-u",
    "system": "nes",
    "romFile": "Tetris 2 (U) [!].zip",
    "img": true
  },
  {
    "id": 1988,
    "title": "Tetris 2 + Bombliss (J)",
    "slug": "tetris-2-bombliss-j",
    "system": "nes",
    "romFile": "Tetris 2 + Bombliss (J).zip",
    "img": true
  },
  {
    "id": 1989,
    "title": "Tetris Flash (J)",
    "slug": "tetris-flash-j",
    "system": "nes",
    "romFile": "Tetris Flash (J).zip",
    "img": true
  },
  {
    "id": 1990,
    "title": "Tetsudou Ou - Famicom Boardgame (J)",
    "slug": "tetsudou-ou-famicom-boardgame-j",
    "system": "nes",
    "romFile": "Tetsudou Ou - Famicom Boardgame (J).zip",
    "img": true
  },
  {
    "id": 1991,
    "title": "Tetsuwan Atom (J)",
    "slug": "tetsuwan-atom-j",
    "system": "nes",
    "romFile": "Tetsuwan Atom (J).zip",
    "img": true
  },
  {
    "id": 1992,
    "title": "Thexder (J)",
    "slug": "thexder-j",
    "system": "nes",
    "romFile": "Thexder (J) [!].zip",
    "img": true
  },
  {
    "id": 1993,
    "title": "Three Stooges (U, Prototype)",
    "slug": "three-stooges-u-prototype",
    "system": "nes",
    "romFile": "Three Stooges (U) (Prototype).zip"
  },
  {
    "id": 1994,
    "title": "Three Stooges (U)",
    "slug": "three-stooges-u",
    "system": "nes",
    "romFile": "Three Stooges (U).zip"
  },
  {
    "id": 1995,
    "title": "Thunder & Lightning (U)",
    "slug": "thunder-lightning-u",
    "system": "nes",
    "romFile": "Thunder & Lightning (U).zip",
    "img": true
  },
  {
    "id": 1996,
    "title": "Thunderbirds (J)",
    "slug": "thunderbirds-j",
    "system": "nes",
    "romFile": "Thunderbirds (J).zip",
    "img": true
  },
  {
    "id": 1997,
    "title": "Thunderbirds (U)",
    "slug": "thunderbirds-u",
    "system": "nes",
    "romFile": "Thunderbirds (U).zip",
    "img": true
  },
  {
    "id": 1998,
    "title": "Thundercade (U)",
    "slug": "thundercade-u",
    "system": "nes",
    "romFile": "Thundercade (U).zip",
    "img": true
  },
  {
    "id": 1999,
    "title": "Tiger-Heli (E)",
    "slug": "tiger-heli-e",
    "system": "nes",
    "romFile": "Tiger-Heli (E) [!].zip",
    "img": true
  },
  {
    "id": 2000,
    "title": "Tiger-Heli (J)",
    "slug": "tiger-heli-j",
    "system": "nes",
    "romFile": "Tiger-Heli (J) [!].zip",
    "img": true
  },
  {
    "id": 2001,
    "title": "Tiger-Heli (U)",
    "slug": "tiger-heli-u",
    "system": "nes",
    "romFile": "Tiger-Heli (U).zip",
    "img": true
  },
  {
    "id": 2002,
    "title": "Tiles of Fate (U)",
    "slug": "tiles-of-fate-u",
    "system": "nes",
    "romFile": "Tiles of Fate (U).zip",
    "img": true
  },
  {
    "id": 2003,
    "title": "Time Diver Eon Man (As)",
    "slug": "time-diver-eon-man-as",
    "system": "nes",
    "romFile": "Time Diver Eon Man (As).zip",
    "img": true
  },
  {
    "id": 2004,
    "title": "Time Lord (E)",
    "slug": "time-lord-e",
    "system": "nes",
    "romFile": "Time Lord (E).zip",
    "img": true
  },
  {
    "id": 2005,
    "title": "Time Lord (U)",
    "slug": "time-lord-u",
    "system": "nes",
    "romFile": "Time Lord (U).zip",
    "img": true
  },
  {
    "id": 2006,
    "title": "Time Zone (J)",
    "slug": "time-zone-j",
    "system": "nes",
    "romFile": "Time Zone (J).zip",
    "img": true
  },
  {
    "id": 2007,
    "title": "Times of Lore (J)",
    "slug": "times-of-lore-j",
    "system": "nes",
    "romFile": "Times of Lore (J).zip",
    "img": true
  },
  {
    "id": 2008,
    "title": "Times of Lore (U)",
    "slug": "times-of-lore-u",
    "system": "nes",
    "romFile": "Times of Lore (U).zip",
    "img": true
  },
  {
    "id": 2009,
    "title": "Tiny Toon Adventures (J)",
    "slug": "tiny-toon-adventures-j",
    "system": "nes",
    "romFile": "Tiny Toon Adventures (J).zip",
    "img": true
  },
  {
    "id": 2010,
    "title": "Tiny Toon Adventures (U)",
    "slug": "tiny-toon-adventures-u",
    "system": "nes",
    "romFile": "Tiny Toon Adventures (U).zip",
    "img": true
  },
  {
    "id": 2011,
    "title": "Tiny Toon Adventures 2 - Montana Land e Youkoso (J)",
    "slug": "tiny-toon-adventures-2-montana-land-e-youkoso-j",
    "system": "nes",
    "romFile": "Tiny Toon Adventures 2 - Montana Land e Youkoso (J).zip",
    "img": true
  },
  {
    "id": 2012,
    "title": "Tiny Toon Adventures 2 - Trouble in Wackyland (U)",
    "slug": "tiny-toon-adventures-2-trouble-in-wackyland-u",
    "system": "nes",
    "romFile": "Tiny Toon Adventures 2 - Trouble in Wackyland (U).zip",
    "img": true
  },
  {
    "id": 2013,
    "title": "Tiny Toon Adventures Cartoon Workshop (U)",
    "slug": "tiny-toon-adventures-cartoon-workshop-u",
    "system": "nes",
    "romFile": "Tiny Toon Adventures Cartoon Workshop (U).zip",
    "img": true
  },
  {
    "id": 2014,
    "title": "Titan (J)",
    "slug": "titan-j",
    "system": "nes",
    "romFile": "Titan (J).zip",
    "img": true
  },
  {
    "id": 2015,
    "title": "To The Earth (U)",
    "slug": "to-the-earth-u",
    "system": "nes",
    "romFile": "To The Earth (U).zip",
    "img": true
  },
  {
    "id": 2016,
    "title": "Toki (U)",
    "slug": "toki-u",
    "system": "nes",
    "romFile": "Toki (U).zip",
    "img": true
  },
  {
    "id": 2017,
    "title": "Toki no Tabibito (J)",
    "slug": "toki-no-tabibito-j",
    "system": "nes",
    "romFile": "Toki no Tabibito (J).zip",
    "img": true
  },
  {
    "id": 2018,
    "title": "Tokkyuu Shirei - Solbrain (J)",
    "slug": "tokkyuu-shirei-solbrain-j",
    "system": "nes",
    "romFile": "Tokkyuu Shirei - Solbrain (J).zip",
    "img": true
  },
  {
    "id": 2019,
    "title": "Tokoro San no Mamoru mo Semeru mo (J)",
    "slug": "tokoro-san-no-mamoru-mo-semeru-mo-j",
    "system": "nes",
    "romFile": "Tokoro San no Mamoru mo Semeru mo (J).zip",
    "img": true
  },
  {
    "id": 2020,
    "title": "Tom & Jerry and Tuffy (J)",
    "slug": "tom-jerry-and-tuffy-j",
    "system": "nes",
    "romFile": "Tom & Jerry and Tuffy (J).zip"
  },
  {
    "id": 2021,
    "title": "Tom & Jerry and Tuffy (U)",
    "slug": "tom-jerry-and-tuffy-u",
    "system": "nes",
    "romFile": "Tom & Jerry and Tuffy (U).zip"
  },
  {
    "id": 2022,
    "title": "Tom Sawyer no Bouken (J)",
    "slug": "tom-sawyer-no-bouken-j",
    "system": "nes",
    "romFile": "Tom Sawyer no Bouken (J).zip",
    "img": true
  },
  {
    "id": 2023,
    "title": "Tombs and Treasure (U)",
    "slug": "tombs-and-treasure-u",
    "system": "nes",
    "romFile": "Tombs and Treasure (U).zip"
  },
  {
    "id": 2024,
    "title": "Tonjan! (J)",
    "slug": "tonjan-j",
    "system": "nes",
    "romFile": "Tonjan! (J).zip",
    "img": true
  },
  {
    "id": 2025,
    "title": "Toobin' (U)",
    "slug": "toobin-u",
    "system": "nes",
    "romFile": "Toobin' (U).zip",
    "img": true
  },
  {
    "id": 2026,
    "title": "Top Players' Tennis - Featuring Chris Evert & Ivan Lendl (U)",
    "slug": "top-players-tennis-featuring-chris-evert-ivan-lendl-u",
    "system": "nes",
    "romFile": "Top Players' Tennis - Featuring Chris Evert & Ivan Lendl (U).zip"
  },
  {
    "id": 2027,
    "title": "Top Rider (J)",
    "slug": "top-rider-j",
    "system": "nes",
    "romFile": "Top Rider (J).zip",
    "img": true
  },
  {
    "id": 2028,
    "title": "Top Striker (J)",
    "slug": "top-striker-j",
    "system": "nes",
    "romFile": "Top Striker (J).zip",
    "img": true
  },
  {
    "id": 2029,
    "title": "Total Recall (U)",
    "slug": "total-recall-u",
    "system": "nes",
    "romFile": "Total Recall (U).zip",
    "img": true
  },
  {
    "id": 2030,
    "title": "Totally Rad (E)",
    "slug": "totally-rad-e",
    "system": "nes",
    "romFile": "Totally Rad (E) [!].zip",
    "img": true
  },
  {
    "id": 2031,
    "title": "Totally Rad (U)",
    "slug": "totally-rad-u",
    "system": "nes",
    "romFile": "Totally Rad (U).zip",
    "img": true
  },
  {
    "id": 2032,
    "title": "Totsuzen! Machoman (J, Prototype)",
    "slug": "totsuzen-machoman-j-prototype",
    "system": "nes",
    "romFile": "Totsuzen! Machoman (J) (Prototype).zip"
  },
  {
    "id": 2033,
    "title": "Totsuzen! Machoman (J)",
    "slug": "totsuzen-machoman-j",
    "system": "nes",
    "romFile": "Totsuzen! Machoman (J).zip"
  },
  {
    "id": 2034,
    "title": "Touch Down Fever (J)",
    "slug": "touch-down-fever-j",
    "system": "nes",
    "romFile": "Touch Down Fever (J).zip",
    "img": true
  },
  {
    "id": 2035,
    "title": "Touch Down Fever (U)",
    "slug": "touch-down-fever-u",
    "system": "nes",
    "romFile": "Touch Down Fever (U).zip",
    "img": true
  },
  {
    "id": 2036,
    "title": "Touhou Kenbun Roku (J)",
    "slug": "touhou-kenbun-roku-j",
    "system": "nes",
    "romFile": "Touhou Kenbun Roku (J).zip",
    "img": true
  },
  {
    "id": 2037,
    "title": "Toukon Club (J)",
    "slug": "toukon-club-j",
    "system": "nes",
    "romFile": "Toukon Club (J).zip",
    "img": true
  },
  {
    "id": 2038,
    "title": "Toukyou Pachi Slot Adventure (J)",
    "slug": "toukyou-pachi-slot-adventure-j",
    "system": "nes",
    "romFile": "Toukyou Pachi Slot Adventure (J).zip",
    "img": true
  },
  {
    "id": 2039,
    "title": "Tower of Druaga, The (J)",
    "slug": "tower-of-druaga-the-j",
    "system": "nes",
    "romFile": "Tower of Druaga, The (J).zip",
    "img": true
  },
  {
    "id": 2040,
    "title": "Toxic Crusaders (U)",
    "slug": "toxic-crusaders-u",
    "system": "nes",
    "romFile": "Toxic Crusaders (U).zip",
    "img": true
  },
  {
    "id": 2041,
    "title": "Track & Field (PC10)",
    "slug": "track-field-pc10",
    "system": "nes",
    "romFile": "Track & Field (PC10).zip",
    "img": true
  },
  {
    "id": 2042,
    "title": "Track & Field (U)",
    "slug": "track-field-u",
    "system": "nes",
    "romFile": "Track & Field (U).zip",
    "img": true
  },
  {
    "id": 2043,
    "title": "Track & Field 2 (E)",
    "slug": "track-field-2-e",
    "system": "nes",
    "romFile": "Track & Field 2 (E).zip"
  },
  {
    "id": 2044,
    "title": "Track & Field 2 (U)",
    "slug": "track-field-2-u",
    "system": "nes",
    "romFile": "Track & Field 2 (U).zip"
  },
  {
    "id": 2045,
    "title": "Track & Field in Barcelona (E)",
    "slug": "track-field-in-barcelona-e",
    "system": "nes",
    "romFile": "Track & Field in Barcelona (E).zip",
    "img": true
  },
  {
    "id": 2046,
    "title": "Transformers - Comvoy no Nazo (J)",
    "slug": "transformers-comvoy-no-nazo-j",
    "system": "nes",
    "romFile": "Transformers - Comvoy no Nazo (J).zip",
    "img": true
  },
  {
    "id": 2047,
    "title": "Treasure Master (U)",
    "slug": "treasure-master-u",
    "system": "nes",
    "romFile": "Treasure Master (U).zip",
    "img": true
  },
  {
    "id": 2048,
    "title": "Triathron, The (J)",
    "slug": "triathron-the-j",
    "system": "nes",
    "romFile": "Triathron, The (J).zip",
    "img": true
  },
  {
    "id": 2049,
    "title": "Trog (U)",
    "slug": "trog-u",
    "system": "nes",
    "romFile": "Trog (U).zip",
    "img": true
  },
  {
    "id": 2050,
    "title": "Trojan (E)",
    "slug": "trojan-e",
    "system": "nes",
    "romFile": "Trojan (E).zip",
    "img": true
  },
  {
    "id": 2051,
    "title": "Trojan (PC10)",
    "slug": "trojan-pc10",
    "system": "nes",
    "romFile": "Trojan (PC10).zip",
    "img": true
  },
  {
    "id": 2052,
    "title": "Trojan (U)",
    "slug": "trojan-u",
    "system": "nes",
    "romFile": "Trojan (U).zip",
    "img": true
  },
  {
    "id": 2053,
    "title": "Trolls in Crazyland, The (E)",
    "slug": "trolls-in-crazyland-the-e",
    "system": "nes",
    "romFile": "Trolls in Crazyland, The (E).zip",
    "img": true
  },
  {
    "id": 2054,
    "title": "Trolls on Treasure Island (U)",
    "slug": "trolls-on-treasure-island-u",
    "system": "nes",
    "romFile": "Trolls on Treasure Island (U).zip",
    "img": true
  },
  {
    "id": 2055,
    "title": "Tsuppari Oozumou (J)",
    "slug": "tsuppari-oozumou-j",
    "system": "nes",
    "romFile": "Tsuppari Oozumou (J).zip",
    "img": true
  },
  {
    "id": 2056,
    "title": "Tsuppari Wars (J)",
    "slug": "tsuppari-wars-j",
    "system": "nes",
    "romFile": "Tsuppari Wars (J).zip",
    "img": true
  },
  {
    "id": 2057,
    "title": "Tsuri Kichi Sanpei - Blue Marlin Hen (J)",
    "slug": "tsuri-kichi-sanpei-blue-marlin-hen-j",
    "system": "nes",
    "romFile": "Tsuri Kichi Sanpei - Blue Marlin Hen (J).zip",
    "img": true
  },
  {
    "id": 2058,
    "title": "Tsuru Pika Hagemaru - Mezase! Tsuru Seko no Akashi (J)",
    "slug": "tsuru-pika-hagemaru-mezase-tsuru-seko-no-akashi-j",
    "system": "nes",
    "romFile": "Tsuru Pika Hagemaru - Mezase! Tsuru Seko no Akashi (J).zip",
    "img": true
  },
  {
    "id": 2059,
    "title": "Turbo Racing (E)",
    "slug": "turbo-racing-e",
    "system": "nes",
    "romFile": "Turbo Racing (E).zip",
    "img": true
  },
  {
    "id": 2060,
    "title": "Twin Cobra (U)",
    "slug": "twin-cobra-u",
    "system": "nes",
    "romFile": "Twin Cobra (U).zip",
    "img": true
  },
  {
    "id": 2061,
    "title": "Twin Eagle (U)",
    "slug": "twin-eagle-u",
    "system": "nes",
    "romFile": "Twin Eagle (U).zip",
    "img": true
  },
  {
    "id": 2062,
    "title": "Twin Eagle - Revenge Joe's Brother (J)",
    "slug": "twin-eagle-revenge-joe-s-brother-j",
    "system": "nes",
    "romFile": "Twin Eagle - Revenge Joe's Brother (J).zip",
    "img": true
  },
  {
    "id": 2063,
    "title": "TwinBee (J)",
    "slug": "twinbee-j",
    "system": "nes",
    "romFile": "TwinBee (J).zip",
    "img": true
  },
  {
    "id": 2064,
    "title": "TwinBee 3 - Poko Poko Dai Maou (J)",
    "slug": "twinbee-3-poko-poko-dai-maou-j",
    "system": "nes",
    "romFile": "TwinBee 3 - Poko Poko Dai Maou (J).zip",
    "img": true
  },
  {
    "id": 2065,
    "title": "U-Force Test Cartridge (U)",
    "slug": "u-force-test-cartridge-u",
    "system": "nes",
    "romFile": "U-Force Test Cartridge (U).zip"
  },
  {
    "id": 2066,
    "title": "US Championship V'Ball (J)",
    "slug": "us-championship-v-ball-j",
    "system": "nes",
    "romFile": "US Championship V'Ball (J).zip"
  },
  {
    "id": 2067,
    "title": "USA Ice Hockey in FC (J)",
    "slug": "usa-ice-hockey-in-fc-j",
    "system": "nes",
    "romFile": "USA Ice Hockey in FC (J).zip",
    "img": true
  },
  {
    "id": 2068,
    "title": "Uchuu Keibitai SDF (J)",
    "slug": "uchuu-keibitai-sdf-j",
    "system": "nes",
    "romFile": "Uchuu Keibitai SDF (J).zip",
    "img": true
  },
  {
    "id": 2069,
    "title": "Uchuusen - Cosmo Carrier (J)",
    "slug": "uchuusen-cosmo-carrier-j",
    "system": "nes",
    "romFile": "Uchuusen - Cosmo Carrier (J).zip",
    "img": true
  },
  {
    "id": 2070,
    "title": "Ufouria (E)",
    "slug": "ufouria-e",
    "system": "nes",
    "romFile": "Ufouria (E).zip"
  },
  {
    "id": 2071,
    "title": "Ultima - Exodus (U)",
    "slug": "ultima-exodus-u",
    "system": "nes",
    "romFile": "Ultima - Exodus (U).zip",
    "img": true
  },
  {
    "id": 2072,
    "title": "Ultima - Kyoufu no Exodus (J)",
    "slug": "ultima-kyoufu-no-exodus-j",
    "system": "nes",
    "romFile": "Ultima - Kyoufu no Exodus (J).zip",
    "img": true
  },
  {
    "id": 2073,
    "title": "Ultima - Quest of the Avatar (U)",
    "slug": "ultima-quest-of-the-avatar-u",
    "system": "nes",
    "romFile": "Ultima - Quest of the Avatar (U).zip",
    "img": true
  },
  {
    "id": 2074,
    "title": "Ultima - Seisha heno Michi (J)",
    "slug": "ultima-seisha-heno-michi-j",
    "system": "nes",
    "romFile": "Ultima - Seisha heno Michi (J).zip"
  },
  {
    "id": 2075,
    "title": "Ultima - Warriors of Destiny (U)",
    "slug": "ultima-warriors-of-destiny-u",
    "system": "nes",
    "romFile": "Ultima - Warriors of Destiny (U).zip",
    "img": true
  },
  {
    "id": 2076,
    "title": "Ultimate Air Combat (E)",
    "slug": "ultimate-air-combat-e",
    "system": "nes",
    "romFile": "Ultimate Air Combat (E) [!].zip",
    "img": true
  },
  {
    "id": 2077,
    "title": "Ultimate Air Combat (U)",
    "slug": "ultimate-air-combat-u",
    "system": "nes",
    "romFile": "Ultimate Air Combat (U).zip",
    "img": true
  },
  {
    "id": 2078,
    "title": "Ultimate Basketball (U)",
    "slug": "ultimate-basketball-u",
    "system": "nes",
    "romFile": "Ultimate Basketball (U).zip",
    "img": true
  },
  {
    "id": 2079,
    "title": "Ultimate League Soccer (E)",
    "slug": "ultimate-league-soccer-e",
    "system": "nes",
    "romFile": "Ultimate League Soccer (E) [!].zip",
    "img": true
  },
  {
    "id": 2080,
    "title": "Ultimate League Soccer (U)",
    "slug": "ultimate-league-soccer-u",
    "system": "nes",
    "romFile": "Ultimate League Soccer (U).zip",
    "img": true
  },
  {
    "id": 2081,
    "title": "Ultimate Stuntman (U)",
    "slug": "ultimate-stuntman-u",
    "system": "nes",
    "romFile": "Ultimate Stuntman (U).zip"
  },
  {
    "id": 2082,
    "title": "Ultraman Club - Kaijuu Dai Kessen!! (J)",
    "slug": "ultraman-club-kaijuu-dai-kessen-j",
    "system": "nes",
    "romFile": "Ultraman Club - Kaijuu Dai Kessen!! (J).zip",
    "img": true
  },
  {
    "id": 2083,
    "title": "Ultraman Club 2 - Kaettekita Ultraman Club (J)",
    "slug": "ultraman-club-2-kaettekita-ultraman-club-j",
    "system": "nes",
    "romFile": "Ultraman Club 2 - Kaettekita Ultraman Club (J).zip",
    "img": true
  },
  {
    "id": 2084,
    "title": "Ultraman Club 3 (J)",
    "slug": "ultraman-club-3-j",
    "system": "nes",
    "romFile": "Ultraman Club 3 (J).zip",
    "img": true
  },
  {
    "id": 2085,
    "title": "Uncharted Waters (U)",
    "slug": "uncharted-waters-u",
    "system": "nes",
    "romFile": "Uncharted Waters (U).zip",
    "img": true
  },
  {
    "id": 2086,
    "title": "Uninvited (U)",
    "slug": "uninvited-u",
    "system": "nes",
    "romFile": "Uninvited (U).zip",
    "img": true
  },
  {
    "id": 2087,
    "title": "Untouchables, The (E)",
    "slug": "untouchables-the-e",
    "system": "nes",
    "romFile": "Untouchables, The (E) [!].zip",
    "img": true
  },
  {
    "id": 2088,
    "title": "Untouchables, The (J)",
    "slug": "untouchables-the-j",
    "system": "nes",
    "romFile": "Untouchables, The (J).zip",
    "img": true
  },
  {
    "id": 2089,
    "title": "Untouchables, The (U)",
    "slug": "untouchables-the-u",
    "system": "nes",
    "romFile": "Untouchables, The (U).zip",
    "img": true
  },
  {
    "id": 2090,
    "title": "Urban Champion (JU)",
    "slug": "urban-champion-ju",
    "system": "nes",
    "romFile": "Urban Champion (JU).zip",
    "img": true
  },
  {
    "id": 2091,
    "title": "Urusei Yatsura - Lum no Wedding Bell (J)",
    "slug": "urusei-yatsura-lum-no-wedding-bell-j",
    "system": "nes",
    "romFile": "Urusei Yatsura - Lum no Wedding Bell (J).zip",
    "img": true
  },
  {
    "id": 2092,
    "title": "Ushio to Tora - Shinen no Daiyou (J)",
    "slug": "ushio-to-tora-shinen-no-daiyou-j",
    "system": "nes",
    "romFile": "Ushio to Tora - Shinen no Daiyou (J).zip",
    "img": true
  },
  {
    "id": 2093,
    "title": "Utsurun Desu (J)",
    "slug": "utsurun-desu-j",
    "system": "nes",
    "romFile": "Utsurun Desu (J).zip",
    "img": true
  },
  {
    "id": 2094,
    "title": "VS Castlevania (VS)",
    "slug": "vs-castlevania-vs",
    "system": "nes",
    "romFile": "VS Castlevania (VS).zip",
    "img": true
  },
  {
    "id": 2095,
    "title": "VS Slalom (VS)",
    "slug": "vs-slalom-vs",
    "system": "nes",
    "romFile": "VS Slalom (VS).zip",
    "img": true
  },
  {
    "id": 2096,
    "title": "VS Super Mario Bros. (VS)",
    "slug": "vs-super-mario-bros-vs",
    "system": "nes",
    "romFile": "VS Super Mario Bros. (VS).zip",
    "img": true
  },
  {
    "id": 2097,
    "title": "VS TKO Boxing (VS)",
    "slug": "vs-tko-boxing-vs",
    "system": "nes",
    "romFile": "VS TKO Boxing (VS) [!].zip",
    "img": true
  },
  {
    "id": 2098,
    "title": "Valis - The Fantastic Soldier (J)",
    "slug": "valis-the-fantastic-soldier-j",
    "system": "nes",
    "romFile": "Valis - The Fantastic Soldier (J).zip",
    "img": true
  },
  {
    "id": 2099,
    "title": "Valkyrie no Bouken - Toki no Kagi Densetsu (J)",
    "slug": "valkyrie-no-bouken-toki-no-kagi-densetsu-j",
    "system": "nes",
    "romFile": "Valkyrie no Bouken - Toki no Kagi Densetsu (J).zip",
    "img": true
  },
  {
    "id": 2100,
    "title": "Vegas Connection - Casino Kara Ai wo Komete (J)",
    "slug": "vegas-connection-casino-kara-ai-wo-komete-j",
    "system": "nes",
    "romFile": "Vegas Connection - Casino Kara Ai wo Komete (J).zip",
    "img": true
  },
  {
    "id": 2101,
    "title": "Vegas Dream (U)",
    "slug": "vegas-dream-u",
    "system": "nes",
    "romFile": "Vegas Dream (U).zip",
    "img": true
  },
  {
    "id": 2102,
    "title": "Venice Beach Volleyball (U)",
    "slug": "venice-beach-volleyball-u",
    "system": "nes",
    "romFile": "Venice Beach Volleyball (U).zip",
    "img": true
  },
  {
    "id": 2103,
    "title": "Venus Senki (J)",
    "slug": "venus-senki-j",
    "system": "nes",
    "romFile": "Venus Senki (J).zip"
  },
  {
    "id": 2104,
    "title": "Vice - Project Doom (U)",
    "slug": "vice-project-doom-u",
    "system": "nes",
    "romFile": "Vice - Project Doom (U).zip",
    "img": true
  },
  {
    "id": 2105,
    "title": "Videomation (U)",
    "slug": "videomation-u",
    "system": "nes",
    "romFile": "Videomation (U).zip",
    "img": true
  },
  {
    "id": 2106,
    "title": "Vindicators (U)",
    "slug": "vindicators-u",
    "system": "nes",
    "romFile": "Vindicators (U).zip",
    "img": true
  },
  {
    "id": 2107,
    "title": "Viva! Las Vegas (J)",
    "slug": "viva-las-vegas-j",
    "system": "nes",
    "romFile": "Viva! Las Vegas (J).zip",
    "img": true
  },
  {
    "id": 2108,
    "title": "Volguard II (J)",
    "slug": "volguard-ii-j",
    "system": "nes",
    "romFile": "Volguard II (J).zip",
    "img": true
  },
  {
    "id": 2109,
    "title": "Volleyball (PC10)",
    "slug": "volleyball-pc10",
    "system": "nes",
    "romFile": "Volleyball (PC10).zip",
    "img": true
  },
  {
    "id": 2110,
    "title": "Volleyball (U)",
    "slug": "volleyball-u",
    "system": "nes",
    "romFile": "Volleyball (U).zip",
    "img": true
  },
  {
    "id": 2111,
    "title": "WCW World Championship Wrestling (U)",
    "slug": "wcw-world-championship-wrestling-u",
    "system": "nes",
    "romFile": "WCW World Championship Wrestling (U).zip",
    "img": true
  },
  {
    "id": 2112,
    "title": "WWF King of the Ring (U)",
    "slug": "wwf-king-of-the-ring-u",
    "system": "nes",
    "romFile": "WWF King of the Ring (U).zip",
    "img": true
  },
  {
    "id": 2113,
    "title": "WWF Steel Cage Challenge (E)",
    "slug": "wwf-steel-cage-challenge-e",
    "system": "nes",
    "romFile": "WWF Steel Cage Challenge (E).zip"
  },
  {
    "id": 2114,
    "title": "WWF Steel Cage Challenge (U)",
    "slug": "wwf-steel-cage-challenge-u",
    "system": "nes",
    "romFile": "WWF Steel Cage Challenge (U).zip"
  },
  {
    "id": 2115,
    "title": "WWF Wrestlemania (U)",
    "slug": "wwf-wrestlemania-u",
    "system": "nes",
    "romFile": "WWF Wrestlemania (U).zip",
    "img": true
  },
  {
    "id": 2116,
    "title": "WWF Wrestlemania Challenge (J)",
    "slug": "wwf-wrestlemania-challenge-j",
    "system": "nes",
    "romFile": "WWF Wrestlemania Challenge (J).zip",
    "img": true
  },
  {
    "id": 2117,
    "title": "WWF Wrestlemania Challenge (U)",
    "slug": "wwf-wrestlemania-challenge-u",
    "system": "nes",
    "romFile": "WWF Wrestlemania Challenge (U).zip",
    "img": true
  },
  {
    "id": 2118,
    "title": "Wacky Races (U)",
    "slug": "wacky-races-u",
    "system": "nes",
    "romFile": "Wacky Races (U).zip",
    "img": true
  },
  {
    "id": 2119,
    "title": "Wagyan Land (J)",
    "slug": "wagyan-land-j",
    "system": "nes",
    "romFile": "Wagyan Land (J).zip",
    "img": true
  },
  {
    "id": 2120,
    "title": "Wagyan Land 2 (J)",
    "slug": "wagyan-land-2-j",
    "system": "nes",
    "romFile": "Wagyan Land 2 (J).zip",
    "img": true
  },
  {
    "id": 2121,
    "title": "Wagyan Land 3 (J)",
    "slug": "wagyan-land-3-j",
    "system": "nes",
    "romFile": "Wagyan Land 3 (J).zip",
    "img": true
  },
  {
    "id": 2122,
    "title": "Wai Wai World (J)",
    "slug": "wai-wai-world-j",
    "system": "nes",
    "romFile": "Wai Wai World (J).zip",
    "img": true
  },
  {
    "id": 2123,
    "title": "Wai Wai World 2 - SOS!! Paseri Jou (J)",
    "slug": "wai-wai-world-2-sos-paseri-jou-j",
    "system": "nes",
    "romFile": "Wai Wai World 2 - SOS!! Paseri Jou (J).zip",
    "img": true
  },
  {
    "id": 2124,
    "title": "Wai Xing Zhan Shi (As)",
    "slug": "wai-xing-zhan-shi-as",
    "system": "nes",
    "romFile": "Wai Xing Zhan Shi (As).zip",
    "img": true
  },
  {
    "id": 2125,
    "title": "Wall Street Kid (U)",
    "slug": "wall-street-kid-u",
    "system": "nes",
    "romFile": "Wall Street Kid (U).zip",
    "img": true
  },
  {
    "id": 2126,
    "title": "Wally Bear and the No Gang (U)",
    "slug": "wally-bear-and-the-no-gang-u",
    "system": "nes",
    "romFile": "Wally Bear and the No Gang (U).zip",
    "img": true
  },
  {
    "id": 2127,
    "title": "Wanpaku Duck Yume Bouken (J)",
    "slug": "wanpaku-duck-yume-bouken-j",
    "system": "nes",
    "romFile": "Wanpaku Duck Yume Bouken (J).zip",
    "img": true
  },
  {
    "id": 2128,
    "title": "Wanpaku Kokkun no Gourmet World (J)",
    "slug": "wanpaku-kokkun-no-gourmet-world-j",
    "system": "nes",
    "romFile": "Wanpaku Kokkun no Gourmet World (J).zip",
    "img": true
  },
  {
    "id": 2129,
    "title": "Wario's Woods (U)",
    "slug": "wario-s-woods-u",
    "system": "nes",
    "romFile": "Wario's Woods (U) [!].zip",
    "img": true
  },
  {
    "id": 2130,
    "title": "Warpman (J)",
    "slug": "warpman-j",
    "system": "nes",
    "romFile": "Warpman (J).zip",
    "img": true
  },
  {
    "id": 2131,
    "title": "Wayne Gretzky Hockey (U)",
    "slug": "wayne-gretzky-hockey-u",
    "system": "nes",
    "romFile": "Wayne Gretzky Hockey (U).zip",
    "img": true
  },
  {
    "id": 2132,
    "title": "Wayne's World (U)",
    "slug": "wayne-s-world-u",
    "system": "nes",
    "romFile": "Wayne's World (U).zip",
    "img": true
  },
  {
    "id": 2133,
    "title": "Werewolf - The Last Warrior (U)",
    "slug": "werewolf-the-last-warrior-u",
    "system": "nes",
    "romFile": "Werewolf - The Last Warrior (U).zip",
    "img": true
  },
  {
    "id": 2134,
    "title": "Western Kids (J)",
    "slug": "western-kids-j",
    "system": "nes",
    "romFile": "Western Kids (J).zip",
    "img": true
  },
  {
    "id": 2135,
    "title": "Wheel of Fortune (U, PRG0)",
    "slug": "wheel-of-fortune-u-prg0",
    "system": "nes",
    "romFile": "Wheel of Fortune (U) (PRG0).zip",
    "img": true
  },
  {
    "id": 2136,
    "title": "Wheel of Fortune (U, PRG1)",
    "slug": "wheel-of-fortune-u-prg1",
    "system": "nes",
    "romFile": "Wheel of Fortune (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 2137,
    "title": "Wheel of Fortune - Starring Vanna White (U)",
    "slug": "wheel-of-fortune-starring-vanna-white-u",
    "system": "nes",
    "romFile": "Wheel of Fortune - Starring Vanna White (U).zip",
    "img": true
  },
  {
    "id": 2138,
    "title": "Wheel of Fortune Family Edition (U)",
    "slug": "wheel-of-fortune-family-edition-u",
    "system": "nes",
    "romFile": "Wheel of Fortune Family Edition (U).zip",
    "img": true
  },
  {
    "id": 2139,
    "title": "Wheel of Fortune Junior Edition (U)",
    "slug": "wheel-of-fortune-junior-edition-u",
    "system": "nes",
    "romFile": "Wheel of Fortune Junior Edition (U).zip",
    "img": true
  },
  {
    "id": 2140,
    "title": "Where in Time is Carmen Sandiego (U)",
    "slug": "where-in-time-is-carmen-sandiego-u",
    "system": "nes",
    "romFile": "Where in Time is Carmen Sandiego (U).zip",
    "img": true
  },
  {
    "id": 2141,
    "title": "Where's Waldo (U)",
    "slug": "where-s-waldo-u",
    "system": "nes",
    "romFile": "Where's Waldo (U).zip",
    "img": true
  },
  {
    "id": 2142,
    "title": "White Lion Densetsu (J)",
    "slug": "white-lion-densetsu-j",
    "system": "nes",
    "romFile": "White Lion Densetsu (J).zip",
    "img": true
  },
  {
    "id": 2143,
    "title": "Who Framed Roger Rabbit (U)",
    "slug": "who-framed-roger-rabbit-u",
    "system": "nes",
    "romFile": "Who Framed Roger Rabbit (U).zip",
    "img": true
  },
  {
    "id": 2144,
    "title": "Whomp'Em (U)",
    "slug": "whomp-em-u",
    "system": "nes",
    "romFile": "Whomp'Em (U).zip"
  },
  {
    "id": 2145,
    "title": "Widget (U)",
    "slug": "widget-u",
    "system": "nes",
    "romFile": "Widget (U).zip",
    "img": true
  },
  {
    "id": 2146,
    "title": "Wild Gunman (PC10)",
    "slug": "wild-gunman-pc10",
    "system": "nes",
    "romFile": "Wild Gunman (PC10).zip",
    "img": true
  },
  {
    "id": 2147,
    "title": "Wild Gunman (U, PRG0)",
    "slug": "wild-gunman-u-prg0",
    "system": "nes",
    "romFile": "Wild Gunman (U) (PRG0) [!].zip",
    "img": true
  },
  {
    "id": 2148,
    "title": "Wild Gunman (U, PRG1)",
    "slug": "wild-gunman-u-prg1",
    "system": "nes",
    "romFile": "Wild Gunman (U) (PRG1) [!].zip",
    "img": true
  },
  {
    "id": 2149,
    "title": "Willow (J)",
    "slug": "willow-j",
    "system": "nes",
    "romFile": "Willow (J).zip",
    "img": true
  },
  {
    "id": 2150,
    "title": "Willow (U)",
    "slug": "willow-u",
    "system": "nes",
    "romFile": "Willow (U).zip",
    "img": true
  },
  {
    "id": 2151,
    "title": "Wily & Light no Rockboard - That's Paradise (J)",
    "slug": "wily-light-no-rockboard-that-s-paradise-j",
    "system": "nes",
    "romFile": "Wily & Light no Rockboard - That's Paradise (J).zip",
    "img": true
  },
  {
    "id": 2152,
    "title": "Win, Lose or Draw (U)",
    "slug": "win-lose-or-draw-u",
    "system": "nes",
    "romFile": "Win, Lose or Draw (U).zip",
    "img": true
  },
  {
    "id": 2153,
    "title": "Wing of Madoola, The (J)",
    "slug": "wing-of-madoola-the-j",
    "system": "nes",
    "romFile": "Wing of Madoola, The (J).zip",
    "img": true
  },
  {
    "id": 2154,
    "title": "Winter Games (U)",
    "slug": "winter-games-u",
    "system": "nes",
    "romFile": "Winter Games (U).zip",
    "img": true
  },
  {
    "id": 2155,
    "title": "Wit's (J)",
    "slug": "wit-s-j",
    "system": "nes",
    "romFile": "Wit's (J).zip",
    "img": true
  },
  {
    "id": 2156,
    "title": "Wizardry - Legacy of Llylgamyn (J)",
    "slug": "wizardry-legacy-of-llylgamyn-j",
    "system": "nes",
    "romFile": "Wizardry - Legacy of Llylgamyn (J).zip"
  },
  {
    "id": 2157,
    "title": "Wizardry - Proving Grounds of the Mad Overlord (J)",
    "slug": "wizardry-proving-grounds-of-the-mad-overlord-j",
    "system": "nes",
    "romFile": "Wizardry - Proving Grounds of the Mad Overlord (J).zip",
    "img": true
  },
  {
    "id": 2158,
    "title": "Wizardry - Proving Grounds of the Mad Overlord (U)",
    "slug": "wizardry-proving-grounds-of-the-mad-overlord-u",
    "system": "nes",
    "romFile": "Wizardry - Proving Grounds of the Mad Overlord (U).zip",
    "img": true
  },
  {
    "id": 2159,
    "title": "Wizardry - The Knight of Diamonds (J)",
    "slug": "wizardry-the-knight-of-diamonds-j",
    "system": "nes",
    "romFile": "Wizardry - The Knight of Diamonds (J).zip"
  },
  {
    "id": 2160,
    "title": "Wizardry - The Knight of Diamonds (U)",
    "slug": "wizardry-the-knight-of-diamonds-u",
    "system": "nes",
    "romFile": "Wizardry - The Knight of Diamonds (U).zip"
  },
  {
    "id": 2161,
    "title": "Wizards & Warriors (E)",
    "slug": "wizards-warriors-e",
    "system": "nes",
    "romFile": "Wizards & Warriors (E).zip",
    "img": true
  },
  {
    "id": 2162,
    "title": "Wizards & Warriors (U)",
    "slug": "wizards-warriors-u",
    "system": "nes",
    "romFile": "Wizards & Warriors (U).zip",
    "img": true
  },
  {
    "id": 2163,
    "title": "Wizards & Warriors 3 (U)",
    "slug": "wizards-warriors-3-u",
    "system": "nes",
    "romFile": "Wizards & Warriors 3 (U).zip"
  },
  {
    "id": 2164,
    "title": "Wolverine (U)",
    "slug": "wolverine-u",
    "system": "nes",
    "romFile": "Wolverine (U).zip",
    "img": true
  },
  {
    "id": 2165,
    "title": "Woody Poko (J)",
    "slug": "woody-poko-j",
    "system": "nes",
    "romFile": "Woody Poko (J).zip",
    "img": true
  },
  {
    "id": 2166,
    "title": "World Boxing (J)",
    "slug": "world-boxing-j",
    "system": "nes",
    "romFile": "World Boxing (J).zip",
    "img": true
  },
  {
    "id": 2167,
    "title": "World Champ (U)",
    "slug": "world-champ-u",
    "system": "nes",
    "romFile": "World Champ (U) [!].zip",
    "img": true
  },
  {
    "id": 2168,
    "title": "World Class Track Meet (U)",
    "slug": "world-class-track-meet-u",
    "system": "nes",
    "romFile": "World Class Track Meet (U).zip",
    "img": true
  },
  {
    "id": 2169,
    "title": "World Games (U)",
    "slug": "world-games-u",
    "system": "nes",
    "romFile": "World Games (U).zip",
    "img": true
  },
  {
    "id": 2170,
    "title": "World Grand-Prix - Pole To Finish (J)",
    "slug": "world-grand-prix-pole-to-finish-j",
    "system": "nes",
    "romFile": "World Grand-Prix - Pole To Finish (J).zip",
    "img": true
  },
  {
    "id": 2171,
    "title": "World Super Tennis (J)",
    "slug": "world-super-tennis-j",
    "system": "nes",
    "romFile": "World Super Tennis (J).zip",
    "img": true
  },
  {
    "id": 2172,
    "title": "Wrath of the Black Manta (E)",
    "slug": "wrath-of-the-black-manta-e",
    "system": "nes",
    "romFile": "Wrath of the Black Manta (E) [!].zip",
    "img": true
  },
  {
    "id": 2173,
    "title": "Wrath of the Black Manta (U)",
    "slug": "wrath-of-the-black-manta-u",
    "system": "nes",
    "romFile": "Wrath of the Black Manta (U).zip",
    "img": true
  },
  {
    "id": 2174,
    "title": "Wrecking Crew (JUE)",
    "slug": "wrecking-crew-jue",
    "system": "nes",
    "romFile": "Wrecking Crew (JUE).zip",
    "img": true
  },
  {
    "id": 2175,
    "title": "Wrecking Crew (VS, Player 1 Mode)",
    "slug": "wrecking-crew-vs-player-1-mode",
    "system": "nes",
    "romFile": "Wrecking Crew (VS) (Player 1 Mode).zip",
    "img": true
  },
  {
    "id": 2176,
    "title": "Wrecking Crew (VS, Player 2 Mode)",
    "slug": "wrecking-crew-vs-player-2-mode",
    "system": "nes",
    "romFile": "Wrecking Crew (VS) (Player 2 Mode).zip",
    "img": true
  },
  {
    "id": 2177,
    "title": "Wrecking Crew (VS)",
    "slug": "wrecking-crew-vs",
    "system": "nes",
    "romFile": "Wrecking Crew (VS) [!].zip",
    "img": true
  },
  {
    "id": 2178,
    "title": "Wrestlemania Challenge (E)",
    "slug": "wrestlemania-challenge-e",
    "system": "nes",
    "romFile": "Wrestlemania Challenge (E) [!].zip"
  },
  {
    "id": 2179,
    "title": "Wurm (U)",
    "slug": "wurm-u",
    "system": "nes",
    "romFile": "Wurm (U).zip"
  },
  {
    "id": 2180,
    "title": "Xenophobe (U)",
    "slug": "xenophobe-u",
    "system": "nes",
    "romFile": "Xenophobe (U).zip",
    "img": true
  },
  {
    "id": 2181,
    "title": "Xevious (E)",
    "slug": "xevious-e",
    "system": "nes",
    "romFile": "Xevious (E).zip",
    "img": true
  },
  {
    "id": 2182,
    "title": "Xevious (J)",
    "slug": "xevious-j",
    "system": "nes",
    "romFile": "Xevious (J).zip",
    "img": true
  },
  {
    "id": 2183,
    "title": "Xevious (U)",
    "slug": "xevious-u",
    "system": "nes",
    "romFile": "Xevious (U).zip",
    "img": true
  },
  {
    "id": 2184,
    "title": "Xexyz (U)",
    "slug": "xexyz-u",
    "system": "nes",
    "romFile": "Xexyz (U).zip",
    "img": true
  },
  {
    "id": 2185,
    "title": "Xia Ke Qing (As)",
    "slug": "xia-ke-qing-as",
    "system": "nes",
    "romFile": "Xia Ke Qing (As).zip"
  },
  {
    "id": 2186,
    "title": "Xiao Ma Li (As)",
    "slug": "xiao-ma-li-as",
    "system": "nes",
    "romFile": "Xiao Ma Li (As).zip",
    "img": true
  },
  {
    "id": 2187,
    "title": "Xing Ji Wu Shi - Super Fighter (As)",
    "slug": "xing-ji-wu-shi-super-fighter-as",
    "system": "nes",
    "romFile": "Xing Ji Wu Shi - Super Fighter (As).zip",
    "img": true
  },
  {
    "id": 2188,
    "title": "Yamamura Misa Suspense - Kyouto Hana no Misshitsu Satsujin Jiken (J)",
    "slug": "yamamura-misa-suspense-kyouto-hana-no-misshitsu-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Yamamura Misa Suspense - Kyouto Hana no Misshitsu Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 2189,
    "title": "Yamamura Misa Suspense - Kyouto Ryuu no Tera Satsujin (J)",
    "slug": "yamamura-misa-suspense-kyouto-ryuu-no-tera-satsujin-j",
    "system": "nes",
    "romFile": "Yamamura Misa Suspense - Kyouto Ryuu no Tera Satsujin (J).zip"
  },
  {
    "id": 2190,
    "title": "Yamamura Misa Suspense - Kyouto Zaiteku Satsujin Jiken (J)",
    "slug": "yamamura-misa-suspense-kyouto-zaiteku-satsujin-jiken-j",
    "system": "nes",
    "romFile": "Yamamura Misa Suspense - Kyouto Zaiteku Satsujin Jiken (J).zip",
    "img": true
  },
  {
    "id": 2191,
    "title": "Yang Jia Jiang - Yang's Troops (As)",
    "slug": "yang-jia-jiang-yang-s-troops-as",
    "system": "nes",
    "romFile": "Yang Jia Jiang - Yang's Troops (As).zip",
    "img": true
  },
  {
    "id": 2192,
    "title": "Yie Ar Kung-Fu (J, V1.2)",
    "slug": "yie-ar-kung-fu-j-v1-2",
    "system": "nes",
    "romFile": "Yie Ar Kung-Fu (J) (V1.2).zip",
    "img": true
  },
  {
    "id": 2193,
    "title": "Yie Ar Kung-Fu (J, V1.4)",
    "slug": "yie-ar-kung-fu-j-v1-4",
    "system": "nes",
    "romFile": "Yie Ar Kung-Fu (J) (V1.4).zip",
    "img": true
  },
  {
    "id": 2194,
    "title": "Yin He Shi Dai (As)",
    "slug": "yin-he-shi-dai-as",
    "system": "nes",
    "romFile": "Yin He Shi Dai (As).zip",
    "img": true
  },
  {
    "id": 2195,
    "title": "Yo! Noid (PC10)",
    "slug": "yo-noid-pc10",
    "system": "nes",
    "romFile": "Yo! Noid (PC10) [!].zip",
    "img": true
  },
  {
    "id": 2196,
    "title": "Yo! Noid (U)",
    "slug": "yo-noid-u",
    "system": "nes",
    "romFile": "Yo! Noid (U).zip",
    "img": true
  },
  {
    "id": 2197,
    "title": "Yong Zhe Dou E Long - Dragon Quest IV (As)",
    "slug": "yong-zhe-dou-e-long-dragon-quest-iv-as",
    "system": "nes",
    "romFile": "Yong Zhe Dou E Long - Dragon Quest IV (As).zip"
  },
  {
    "id": 2198,
    "title": "Yong Zhe Dou E Long - Dragon Quest VI (As)",
    "slug": "yong-zhe-dou-e-long-dragon-quest-vi-as",
    "system": "nes",
    "romFile": "Yong Zhe Dou E Long - Dragon Quest VI (As).zip"
  },
  {
    "id": 2199,
    "title": "Yong Zhe Dou e Long - Dragon Quest V (As)",
    "slug": "yong-zhe-dou-e-long-dragon-quest-v-as",
    "system": "nes",
    "romFile": "Yong Zhe Dou e Long - Dragon Quest V (As).zip"
  },
  {
    "id": 2200,
    "title": "Yong Zhe Dou e Long - Dragon Quest VII (As)",
    "slug": "yong-zhe-dou-e-long-dragon-quest-vii-as",
    "system": "nes",
    "romFile": "Yong Zhe Dou e Long - Dragon Quest VII (As).zip"
  },
  {
    "id": 2201,
    "title": "Yoshi (U)",
    "slug": "yoshi-u",
    "system": "nes",
    "romFile": "Yoshi (U).zip",
    "img": true
  },
  {
    "id": 2202,
    "title": "Yoshi no Cookie (J)",
    "slug": "yoshi-no-cookie-j",
    "system": "nes",
    "romFile": "Yoshi no Cookie (J).zip",
    "img": true
  },
  {
    "id": 2203,
    "title": "Yoshi no Tamago (J)",
    "slug": "yoshi-no-tamago-j",
    "system": "nes",
    "romFile": "Yoshi no Tamago (J).zip",
    "img": true
  },
  {
    "id": 2204,
    "title": "Yoshi's Cookie (U)",
    "slug": "yoshi-s-cookie-u",
    "system": "nes",
    "romFile": "Yoshi's Cookie (U).zip",
    "img": true
  },
  {
    "id": 2205,
    "title": "Youkai Douchuuki (J)",
    "slug": "youkai-douchuuki-j",
    "system": "nes",
    "romFile": "Youkai Douchuuki (J).zip",
    "img": true
  },
  {
    "id": 2206,
    "title": "Youkai Kurabu (J)",
    "slug": "youkai-kurabu-j",
    "system": "nes",
    "romFile": "Youkai Kurabu (J).zip"
  },
  {
    "id": 2207,
    "title": "Young Indiana Jones Chronicles, The (U)",
    "slug": "young-indiana-jones-chronicles-the-u",
    "system": "nes",
    "romFile": "Young Indiana Jones Chronicles, The (U).zip",
    "img": true
  },
  {
    "id": 2208,
    "title": "Ys (J)",
    "slug": "ys-j",
    "system": "nes",
    "romFile": "Ys (J).zip",
    "img": true
  },
  {
    "id": 2209,
    "title": "Ys II - Ancient Ys Vanished - The Final Chapter (J)",
    "slug": "ys-ii-ancient-ys-vanished-the-final-chapter-j",
    "system": "nes",
    "romFile": "Ys II - Ancient Ys Vanished - The Final Chapter (J).zip",
    "img": true
  },
  {
    "id": 2210,
    "title": "Ys III - Wanderers From Ys (J)",
    "slug": "ys-iii-wanderers-from-ys-j",
    "system": "nes",
    "romFile": "Ys III - Wanderers From Ys (J).zip",
    "img": true
  },
  {
    "id": 2211,
    "title": "Yu Zhou Zhan Jiang - Space General (As)",
    "slug": "yu-zhou-zhan-jiang-space-general-as",
    "system": "nes",
    "romFile": "Yu Zhou Zhan Jiang - Space General (As).zip"
  },
  {
    "id": 2212,
    "title": "Yume Penguin Monogatari (J)",
    "slug": "yume-penguin-monogatari-j",
    "system": "nes",
    "romFile": "Yume Penguin Monogatari (J).zip",
    "img": true
  },
  {
    "id": 2213,
    "title": "Yuu Yuu Hakusho Final - Makai Saikyou Retsuden (As)",
    "slug": "yuu-yuu-hakusho-final-makai-saikyou-retsuden-as",
    "system": "nes",
    "romFile": "Yuu Yuu Hakusho Final - Makai Saikyou Retsuden (As).zip"
  },
  {
    "id": 2214,
    "title": "Zanac (U)",
    "slug": "zanac-u",
    "system": "nes",
    "romFile": "Zanac (U).zip",
    "img": true
  },
  {
    "id": 2215,
    "title": "Zelda DX (Zelda Hack)",
    "slug": "zelda-dx-zelda-hack",
    "system": "nes",
    "romFile": "Zelda DX (Zelda Hack).zip"
  },
  {
    "id": 2216,
    "title": "Zelda II - The Adventure of Link (U)",
    "slug": "zelda-ii-the-adventure-of-link-u",
    "system": "nes",
    "romFile": "Zelda II - The Adventure of Link (U).zip",
    "img": true
  },
  {
    "id": 2217,
    "title": "Zelda no Densetsu 1 - The Hyrule Fantasy (J)",
    "slug": "zelda-no-densetsu-1-the-hyrule-fantasy-j",
    "system": "nes",
    "romFile": "Zelda no Densetsu 1 - The Hyrule Fantasy (J).zip",
    "img": true
  },
  {
    "id": 2218,
    "title": "Zen Intergalactic Ninja (U)",
    "slug": "zen-intergalactic-ninja-u",
    "system": "nes",
    "romFile": "Zen Intergalactic Ninja (U).zip",
    "img": true
  },
  {
    "id": 2219,
    "title": "Zenbei!! Pro Basket (J)",
    "slug": "zenbei-pro-basket-j",
    "system": "nes",
    "romFile": "Zenbei!! Pro Basket (J).zip",
    "img": true
  },
  {
    "id": 2220,
    "title": "Zhan Guo Qun Xiong Zhuan (As)",
    "slug": "zhan-guo-qun-xiong-zhuan-as",
    "system": "nes",
    "romFile": "Zhan Guo Qun Xiong Zhuan (As).zip",
    "img": true
  },
  {
    "id": 2221,
    "title": "Zippy Race (J)",
    "slug": "zippy-race-j",
    "system": "nes",
    "romFile": "Zippy Race (J).zip",
    "img": true
  },
  {
    "id": 2222,
    "title": "Zoids - Chuuou Tairiku no Tatakai (J)",
    "slug": "zoids-chuuou-tairiku-no-tatakai-j",
    "system": "nes",
    "romFile": "Zoids - Chuuou Tairiku no Tatakai (J).zip",
    "img": true
  },
  {
    "id": 2223,
    "title": "Zoids 2 - Zenebasu no Gyakushuu (J)",
    "slug": "zoids-2-zenebasu-no-gyakushuu-j",
    "system": "nes",
    "romFile": "Zoids 2 - Zenebasu no Gyakushuu (J).zip"
  },
  {
    "id": 2224,
    "title": "Zoids Mokushiroku (J)",
    "slug": "zoids-mokushiroku-j",
    "system": "nes",
    "romFile": "Zoids Mokushiroku (J).zip",
    "img": true
  },
  {
    "id": 2225,
    "title": "Zombie Hunter (J)",
    "slug": "zombie-hunter-j",
    "system": "nes",
    "romFile": "Zombie Hunter (J).zip",
    "img": true
  },
  {
    "id": 2226,
    "title": "Zombie Nation (U)",
    "slug": "zombie-nation-u",
    "system": "nes",
    "romFile": "Zombie Nation (U).zip",
    "img": true
  },
  {
    "id": 2227,
    "title": "Yu-Gi-Oh! Forbidden Memories",
    "slug": "yu-gi-oh-forbidden-memories",
    "system": "ps1",
    "romFile": "yu-gi-oh-forbidden-memories.7z",
    "img": true
  }
];
