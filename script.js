const shopItems = [
    { name: "Bestsellr Pack", price: "6 Chapters", image: "images/pizza.png" },
    { name: "Hardcopy of your Story", price: "6 Chapters", image: "images/hardcopy.png" },
    { name: "Book Grant - $5(Stackable)", price: "1 Chapter", image: "images/bookgrant.png" },
    { name: "BookMarks (Set of 4)", price: "4 Chapters", image: "images/bookmarks.png" },
    { name: "HackClub Stickers(Set of 5)", price: "3 Chapters", image: "images/stickers.png" },
    { name: "Kindle Subscription Grant", price: "4 Chapters", image: "images/kindle.png" },
    { name: "Pocket Friendly Book Lamp", price: "5 Chapters", image: "images/booklamp.png" },
    { name: "Book themed Tote Bag", price: "2 Chapters", image: "images/totebag.png" },
    { name: "Illusion Metal Bookends", price: "2 Chapters", image: "images/bookends.png" },
    { name: "A Diary", price: "3 Chapters", image: "images/diary.png" },
    { name: "DIY Book nook kit", price: "10 Chapters", image: "images/booknooks.png" },
    { name: "Bestsellr Magazine", price: "15 Chapters", image: "images/printing.png" },
    { name: "Vintage Scrapbook Kit", price: "5 Chapters", image: "images/scrapbook.png" },
    { name: "Mystery Gift", price:"15 Chapters", image: "images/mystery.png"}
];

function generateShopCards(items, containerId) {
    const container = document.getElementById(containerId);
    
    const allCards = items.map(item => 
        `<div class="shop-card">
            <div class="shop-card-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <p class="shop-price">${item.price}</p>
        </div>`
    ).join('');
    
    const duplicateCards = items.slice(0, 7).map(item => 
        `<div class="shop-card">
            <div class="shop-card-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <p class="shop-price">${item.price}</p>
        </div>`
    ).join('');

    container.innerHTML = allCards + duplicateCards;
}

function initializeFAQ() {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq => {
        faq.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
}

generateShopCards(shopItems, 'shop-items');
initializeFAQ();