const books = [
    {
        title: "Frostblood",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2017,
        price: 9.99,
        author: "Elly Blake",
        imageUrl: "/frostblood.png",
        altText: "Cover of Frostblood by Elly Blake showing a red and icy background with a flame symbol"
    },
    {
        title: "Fireblood",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2017,
        price: 9.99,
        author: "Elly Blake",
        imageUrl: "/fireblood.png",
        altText: "Cover of Fireblood by Elly Blake with a background of fiery red and ice"
    },
    {
        title: "Nightblood",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2018,
        price: 9.99,
        author: "Elly Blake",
        imageUrl: "/nightblood.png",
        altText: "Cover of Nightblood by Elly Blake showing a dark sky and icy tendrils"
    },
    {
        title: "Ash Princess",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2018,
        price: 10.99,
        author: "Laura Sebastian",
        imageUrl: "/ashprincess.",
        altText: "Cover of Ash Princess by Laura Sebastian with a shattered crown and a dark background"
    },
    {
        title: "Lady Smoke",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2019,
        price: 10.99,
        author: "Laura Sebastian",
        imageUrl: "/ladysmoke.",
        altText: "Cover of Lady Smoke by Laura Sebastian with a billowing smoke design"
    },
    {
        title: "Ember Queen",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2020,
        price: 11.99,
        author: "Laura Sebastian",
        imageUrl: "/emberqueen.",
        altText: "Cover of Ember Queen by Laura Sebastian showing a glowing ember and crown"
    },
    {
        title: "The Cruel Prince",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2018,
        price: 12.99,
        author: "Holly Black",
        imageUrl: "/thecruelprince.",
        altText: "Cover of The Cruel Prince by Holly Black with a dark forest and golden lettering"
    },
    {
        title: "The Wicked King",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2019,
        price: 12.99,
        author: "Holly Black",
        imageUrl: "https://example.com/the-wicked-king.jpg",
        altText: "Cover of The Wicked King by Holly Black with an underwater crown and waves"
    },
    {
        title: "The Queen of Nothing",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2019,
        price: 13.99,
        author: "Holly Black",
        imageUrl: "https://example.com/the-queen-of-nothing.jpg",
        altText: "Cover of The Queen of Nothing by Holly Black with a broken crown in the snow"
    },
    {
        title: "Children of Blood and Bone",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2018,
        price: 14.99,
        author: "Tomi Adeyemi",
        imageUrl: "https://example.com/children-of-blood-and-bone.jpg",
        altText: "Cover of Children of Blood and Bone by Tomi Adeyemi with a fierce girl and tribal patterns"
    },
    {
        title: "Children of Virtue and Vengeance",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2019,
        price: 14.99,
        author: "Tomi Adeyemi",
        imageUrl: "https://example.com/children-of-virtue-and-vengeance.jpg",
        altText: "Cover of Children of Virtue and Vengeance by Tomi Adeyemi with magical symbols and a fierce girl"
    },
    {
        title: "Shadow and Bone",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2012,
        price: 10.99,
        author: "Leigh Bardugo",
        imageUrl: "https://example.com/shadow-and-bone.jpg",
        altText: "Cover of Shadow and Bone by Leigh Bardugo with antlers on a dark background"
    },
    {
        title: "Siege and Storm",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2013,
        price: 10.99,
        author: "Leigh Bardugo",
        imageUrl: "https://example.com/siege-and-storm.jpg",
        altText: "Cover of Siege and Storm by Leigh Bardugo with a stormy sky and mystical creatures"
    },
    {
        title: "Ruin and Rising",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2014,
        price: 10.99,
        author: "Leigh Bardugo",
        imageUrl: "https://example.com/ruin-and-rising.jpg",
        altText: "Cover of Ruin and Rising by Leigh Bardugo showing an ancient palace and a dark sky"
    },
    {
        title: "An Ember in the Ashes",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2015,
        price: 11.99,
        author: "Sabaa Tahir",
        imageUrl: "https://example.com/an-ember-in-the-ashes.jpg",
        altText: "Cover of An Ember in the Ashes by Sabaa Tahir with a shadowy city and flames"
    },
    {
        title: "A Torch Against the Night",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2016,
        price: 11.99,
        author: "Sabaa Tahir",
        imageUrl: "https://example.com/a-torch-against-the-night.jpg",
        altText: "Cover of A Torch Against the Night by Sabaa Tahir with a dark forest and torch"
    },
    {
        title: "The Gilded Wolves",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2019,
        price: 13.99,
        author: "Roshani Chokshi",
        imageUrl: "https://example.com/the-gilded-wolves.jpg",
        altText: "Cover of The Gilded Wolves by Roshani Chokshi with golden vines and mystical symbols"
    },
    {
        title: "The Silvered Serpents",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2020,
        price: 13.99,
        author: "Roshani Chokshi",
        imageUrl: "https://example.com/the-silvered-serpents.jpg",
        altText: "Cover of The Silvered Serpents by Roshani Chokshi with a silver dragon and icy details"
    },
    {
        title: "The Bronze Beasts",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2021,
        price: 14.99,
        author: "Roshani Chokshi",
        imageUrl: "https://example.com/the-bronze-beasts.jpg",
        altText: "Cover of The Bronze Beasts by Roshani Chokshi with a bronze background and intricate designs"
    },
    {
        title: "Red Queen",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2015,
        price: 10.99,
        author: "Victoria Aveyard",
        imageUrl: "https://example.com/red-queen.jpg",
        altText: "Cover of Red Queen by Victoria Aveyard with a blood-dripping crown on a white background"
    },
    {
        title: "Glass Sword",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: false,
        releaseYear: 2016,
        price: 10.99,
        author: "Victoria Aveyard",
        imageUrl: "https://example.com/glass-sword.jpg",
        altText: "Cover of Glass Sword by Victoria Aveyard with a shattered crown on a gray background"
    },
    {
        title: "King's Cage",
        genres: ["Fantasy", "Young Adult"],
        bestSeller: true,
        releaseYear: 2017,
        price: 10.99,
        author: "Victoria Aveyard",
        imageUrl: "https://example.com/kings-cage.jpg",
        altText: "Cover of King's Cage by Victoria Aveyard with an iron cage and crown"
    }
];

export { books };