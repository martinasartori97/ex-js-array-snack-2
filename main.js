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

const longBooks = books.filter(b => b.pages > 300);
const longBooksTitle = longBooks.map(b => b.title);
longBooksTitle.forEach(t => console.log(t));
const availableBooks = books.filter(b => b.available);
const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace('£', ''))
    const discountedPrice = (price * .8).toFixed(2);
    return {
        ...book,
        price: `${discountedPrice}£`
    }
});
const fullPriceBook = discountedBooks.find(book => {
    const price = parseFloat(book.price.replace('£', ''));
    return price % 1 === 0;

})
const authors = books.map(b => b.author);
const areAuthorsAdults = authors.every(a => a.age >= 18);
authors.sort((a, b) => a.age - b.age);
console.log(authors);







