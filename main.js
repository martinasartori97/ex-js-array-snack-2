const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

console.log(books);



// Filtra i libri con più di 300 pagine
const longBooks = books.filter(b => b.pages > 300);

// Estrai i titoli dei libri con più di 300 pagine
const longBooksTitle = longBooks.map(b => b.title);

// Stampa ogni titolo di libro lungo
longBooksTitle.forEach(t => console.log(t));

// Filtra i libri disponibili
const availableBooks = books.filter(b => b.available);

// Applica uno sconto del 20% ai libri disponibili
const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace('£', ''));
    const discountedPrice = (price * 0.8).toFixed(2);

    return {
        ...book, // Restituisce una copia del libro originale con il prezzo aggiornato
        price: `${discountedPrice}£`
    };
});

// Trova un libro con prezzo intero (senza decimali)
const fullPriceBook = discountedBooks.find(book => {
    const price = parseFloat(book.price.replace('£', '')); // Rimuove il simbolo di sterlina e converte il prezzo
    return price % 1 === 0; // Verifica che il prezzo sia un numero intero
});

// Estrai gli autori dei libri
const authors = books.map(b => b.author);

// Verifica se tutti gli autori sono maggiorenni
const areAuthorsAdults = authors.every(a => a.age >= 18);

// Ordina gli autori per età (dal più giovane al più vecchio)
authors.sort((a, b) => a.age - b.age);

// Stampa la lista degli autori ordinati
console.log(authors);








