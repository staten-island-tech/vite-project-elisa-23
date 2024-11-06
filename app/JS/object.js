const books = [
    {
        title: "Winter Whispers",
        genres: ["Romance", "Holiday - Christmas"],
        bestSeller: true,
        releaseYear: 2022,
        price: 12.99,
        author: "Emma Roberts",
        imageUrl: "https://example.com/winter-whispers.jpg",
        altText: "Cover of Winter Whispers by Emma Roberts featuring a snowy forest"
    },
    {
        title: "Under the Mistletoe",
        genres: ["Romance", "Holiday - Christmas"],
        bestSeller: true,
        releaseYear: 2021,
        price: 15.99,
        author: "Emma Roberts",
        imageUrl: "https://example.com/under-the-mistletoe.jpg",
        altText: "Cover of Under the Mistletoe by Emma Roberts with a couple embracing under mistletoe"
    },
    {
        title: "Harvest Nights",
        genres: ["Holiday - Halloween", "Horror"],
        bestSeller: false,
        releaseYear: 2020,
        price: 10.99,
        author: "Noah James",
        imageUrl: "https://example.com/harvest-nights.jpg",
        altText: "Cover of Harvest Nights by Noah James featuring a spooky pumpkin in a foggy field"
    },
    {
        title: "Ghostly Echoes",
        genres: ["Horror", "Fantasy"],
        bestSeller: true,
        releaseYear: 2019,
        price: 14.99,
        author: "Liam Porter",
        imageUrl: "https://example.com/ghostly-echoes.jpg",
        altText: "Cover of Ghostly Echoes by Liam Porter showing a haunted castle under a full moon"
    },
    {
        title: "Beyond the Stars",
        genres: ["Fantasy", "Science Fiction"],
        bestSeller: false,
        releaseYear: 2023,
        price: 18.50,
        author: "Sophia Clark",
        imageUrl: "https://example.com/beyond-the-stars.jpg",
        altText: "Cover of Beyond the Stars by Sophia Clark with a spaceship orbiting a distant planet"
    },
    {
        title: "The Hidden World",
        genres: ["Fantasy", "Adventure"],
        bestSeller: true,
        releaseYear: 2022,
        price: 20.00,
        author: "Sophia Clark",
        imageUrl: "https://example.com/the-hidden-world.jpg",
        altText: "Cover of The Hidden World by Sophia Clark with a magical forest landscape"
    },
    {
        title: "Guide to Success",
        genres: ["Informational", "Self-Help"],
        bestSeller: true,
        releaseYear: 2020,
        price: 22.00,
        author: "Michael Brooks",
        imageUrl: "https://example.com/guide-to-success.jpg",
        altText: "Cover of Guide to Success by Michael Brooks with a minimalist design and upward arrow"
    },
    {
        title: "Investing 101",
        genres: ["Informational", "Finance"],
        bestSeller: false,
        releaseYear: 2021,
        price: 17.99,
        author: "Michael Brooks",
        imageUrl: "https://example.com/investing-101.jpg",
        altText: "Cover of Investing 101 by Michael Brooks with dollar symbols and graphs"
    },
    {
        title: "Twilight Spells",
        genres: ["Fantasy", "Romance"],
        bestSeller: true,
        releaseYear: 2022,
        price: 16.99,
        author: "Liam Porter",
        imageUrl: "https://example.com/twilight-spells.jpg",
        altText: "Cover of Twilight Spells by Liam Porter with a magical spell book glowing in twilight"
    },
    {
        title: "Eternal Love",
        genres: ["Romance", "Drama"],
        bestSeller: false,
        releaseYear: 2020,
        price: 11.50,
        author: "Emma Roberts",
        imageUrl: "https://example.com/eternal-love.jpg",
        altText: "Cover of Eternal Love by Emma Roberts showing a couple walking hand in hand at sunset"
    },
    {
        title: "The Lost City",
        genres: ["Adventure", "Fantasy"],
        bestSeller: true,
        releaseYear: 2022,
        price: 18.99,
        author: "Sophia Clark",
        imageUrl: "https://example.com/the-lost-city.jpg",
        altText: "Cover of The Lost City by Sophia Clark showing ruins in a jungle"
    },
    {
        title: "Crimson Moon",
        genres: ["Horror", "Fantasy"],
        bestSeller: false,
        releaseYear: 2021,
        price: 13.99,
        author: "Noah James",
        imageUrl: "https://example.com/crimson-moon.jpg",
        altText: "Cover of Crimson Moon by Noah James with a blood-red moon over a forest"
    },
    {
        title: "Chasing Shadows",
        genres: ["Mystery", "Thriller"],
        bestSeller: true,
        releaseYear: 2019,
        price: 19.99,
        author: "Liam Porter",
        imageUrl: "https://example.com/chasing-shadows.jpg",
        altText: "Cover of Chasing Shadows by Liam Porter with a shadowy figure in a dark alley"
    },
    {
        title: "The Secret Garden",
        genres: ["Fantasy", "Romance"],
        bestSeller: false,
        releaseYear: 2020,
        price: 10.99,
        author: "Emma Roberts",
        imageUrl: "https://example.com/the-secret-garden.jpg",
        altText: "Cover of The Secret Garden by Emma Roberts with a lush, hidden garden"
    },
    {
        title: "Mastering Coding",
        genres: ["Informational", "Technology"],
        bestSeller: true,
        releaseYear: 2021,
        price: 25.00,
        author: "Michael Brooks",
        imageUrl: "https://example.com/mastering-coding.jpg",
        altText: "Cover of Mastering Coding by Michael Brooks with a digital background"
    },
    {
        title: "The Winter Witch",
        genres: ["Fantasy", "Holiday - Christmas"],
        bestSeller: false,
        releaseYear: 2023,
        price: 13.50,
        author: "Sophia Clark",
        imageUrl: "https://example.com/the-winter-witch.jpg",
        altText: "Cover of The Winter Witch by Sophia Clark with a snowy forest and a mysterious woman"
    },
    {
        title: "Financial Freedom",
        genres: ["Informational", "Finance"],
        bestSeller: true,
        releaseYear: 2022,
        price: 19.99,
        author: "Michael Brooks",
        imageUrl: "https://example.com/financial-freedom.jpg",
        altText: "Cover of Financial Freedom by Michael Brooks with a graph and upward trend"
    },
    {
        title: "Forgotten Realms",
        genres: ["Fantasy", "Adventure"],
        bestSeller: false,
        releaseYear: 2020,
        price: 17.99,
        author: "Noah James",
        imageUrl: "https://example.com/forgotten-realms.jpg",
        altText: "Cover of Forgotten Realms by Noah James with ancient ruins in a mystical landscape"
    },
    {
        title: "The Heart's Promise",
        genres: ["Romance", "Drama"],
        bestSeller: true,
        releaseYear: 2021,
        price: 12.50,
        author: "Emma Roberts",
        imageUrl: "https://example.com/the-hearts-promise.jpg",
        altText: "Cover of The Heart's Promise by Emma Roberts with a couple holding hands at sunset"
    },
    {
        title: "The Science of Success",
        genres: ["Informational", "Self-Help"],
        bestSeller: false,
        releaseYear: 2023,
        price: 21.99,
        author: "Michael Brooks",
        imageUrl: "https://example.com/science-of-success.jpg",
        altText: "Cover of The Science of Success by Michael Brooks with motivational imagery"
    },
    {
        title: "Darkened Pathways",
        genres: ["Horror", "Thriller"],
        bestSeller: true,
        releaseYear: 2019,
        price: 14.99,
        author: "Liam Porter",
        imageUrl: "https://example.com/darkened-pathways.jpg",
        altText: "Cover of Darkened Pathways by Liam Porter with a dark forest path"
    },
    {
        title: "Enchanted by the Sea",
        genres: ["Fantasy", "Romance"],
        bestSeller: false,
        releaseYear: 2022,
        price: 16.00,
        author: "Sophia Clark",
        imageUrl: "https://example.com/enchanted-by-the-sea.jpg",
        altText: "Cover of Enchanted by the Sea by Sophia Clark with a magical ocean view"
    },
    {
        title: "The Haunted Mansion",
        genres: ["Horror", "Mystery"],
        bestSeller: false,
        releaseYear: 2021,
        price: 12.99,
        author: "Noah James",
        imageUrl: "https://example.com/the-haunted-mansion.jpg",
        altText: "Cover of The Haunted Mansion by Noah James showing an eerie mansion"
    },
    {
        title: "The Last Wish",
        genres: ["Fantasy", "Adventure"],
        bestSeller: true,
        releaseYear: 2022,
        price: 15.50,
        author: "Liam Porter",
        imageUrl: "https://example.com/the-last-wish.jpg",
        altText: "Cover of The Last Wish by Liam Porter with a mystical creature"
    },
    {
        title: "City of Secrets",
        genres: ["Mystery", "Thriller"],
        bestSeller: true,
        releaseYear: 2023,
        price: 19.99,
        author: "Emma Roberts",
        imageUrl: "https://example.com/city-of-secrets.jpg",
        altText: "Cover of City of Secrets by Emma Roberts with a city skyline at night"
    },
    {
        title: "Secrets of the Night",
        genres: ["Horror", "Thriller"],
        bestSeller: false,
        releaseYear: 2024,
        price: 14.50,
        author: "Noah James",
        imageUrl: "https://example.com/secrets-of-the-night.jpg",
        altText: "Cover of Secrets of the Night by Noah James showing a dark city skyline"
    },
    {
        title: "The Lost Heir",
        genres: ["Fantasy", "Adventure"],
        bestSeller: true,
        releaseYear: 2021,
        price: 20.99,
        author: "Liam Porter",
        imageUrl: "https://example.com/the-lost-heir.jpg",
        altText: "Cover of The Lost Heir by Liam Porter with a heroic figure standing on a cliff"
    },
    {
        title: "The Dreamweaver",
        genres: ["Fantasy", "Romance"],
        bestSeller: true,
        releaseYear: 2023,
        price: 17.00,
        author: "Sophia Clark",
        imageUrl: "https://example.com/the-dreamweaver.jpg",
        altText: "Cover of The Dreamweaver by Sophia Clark with a whimsical dream landscape"
    },
    {
        title: "Moonlit Secrets",
        genres: ["Romance", "Horror"],
        bestSeller: true,
        releaseYear: 2022,
        price: 15.50,
        author: "Liam Porter",
        imageUrl: "https://example.com/moonlit-secrets.jpg",
        altText: "Cover of Moonlit Secrets by Liam Porter showing a couple in a dark, enchanted forest"
    },
    {
        title: "A Journey Through Time",
        genres: ["Fantasy", "Adventure"],
        bestSeller: false,
        releaseYear: 2021,
        price: 19.99,
        author: "Noah James",
        imageUrl: "https://example.com/a-journey-through-time.jpg",
        altText: "Cover of A Journey Through Time by Noah James featuring a time machine and swirling clocks"
    }
];

const genres = [
    "Romance",
    "Holiday - Christmas",
    "Holiday - Halloween",
    "Horror",
    "Fantasy",
    "Science Fiction",
    "Adventure",
    "Informational",
    "Self-Help",
    "Finance",
    "Technology",
    "Drama",
    "Mystery",
    "Thriller"
];

export { books };