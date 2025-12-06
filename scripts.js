// =====================================
// Order Management System - JavaScript
// =====================================

const CONFIG = {
    CATEGORIES: {
        fresh: { key: 'freshList', name: 'Fresh & Vegetables' },
        dry: { key: 'dryList', name: 'Dry Goods' },
        meat: { key: 'meatList', name: 'Meat & Dairy' },
        seafood: { key: 'seafoodList', name: 'Seafood' },
        frozen: { key: 'frozenList', name: 'Frozen' }
    },
    PRODUCT_KEYWORDS: {
        fresh: [
            // Fruits
            'apple', 'apples', 'banana', 'bananas', 'orange', 'oranges', 'grape', 'grapes', 'strawberry', 'strawberries',
            'blueberry', 'blueberries', 'raspberry', 'raspberries', 'blackberry', 'blackberries', 'mango', 'mangoes',
            'pineapple', 'watermelon', 'melon', 'cantaloupe', 'honeydew', 'peach', 'peaches', 'apricot', 'apricots',
            'plum', 'plums', 'pear', 'pears', 'kiwi', 'kiwis', 'lemon', 'lemons', 'lime', 'limes', 'grapefruit',
            'pomegranate', 'coconut', 'pineapples', 'papaya', 'avocado', 'avocados', 'fig', 'figs', 'date', 'dates',
            'guava', 'passion fruit', 'dragon fruit', 'rambutan', 'lychee', 'persimmon', 'tangerine', 'clementine',
            'mandarin', 'nectarine', 'cherry', 'cherries',
            // Vegetables
            'lettuce', 'potato', 'romaine', 'iceberg', 'spinach', 'arugula', 'rocket', 'kale', 'chard', 'collard',
            'broccoli', 'cauliflower', 'cabbage', 'red cabbage', 'green cabbage', 'brussels sprout', 'sprouts',
            'carrot', 'carrots', 'celery', 'beet', 'beets', 'beetroot', 'turnip', 'rutabaga', 'radish', 'radishes',
            'parsnip', 'asparagus', 'green bean', 'green beans', 'snap peas', 'snow pea', 'pea', 'peas',
            'corn', 'maize', 'zucchini', 'courgette', 'squash', 'butternut squash', 'acorn squash', 'pumpkin',
            'cucumber', 'cucumbers', 'tomato', 'tomatoes', 'cherry tomato', 'heirloom tomato', 'beefsteak tomato',
            'bell pepper', 'peppers', 'red pepper', 'green pepper', 'yellow pepper', 'orange pepper', 'poblano',
            'jalapeno', 'jalapenos', 'serrano', 'thai chili', 'habanero', 'ghost pepper',
            'onion', 'onions', 'red onion', 'yellow onion', 'white onion', 'sweet onion', 'vidalia',
            'garlic', 'shallot', 'shallots', 'scallion', 'scallions', 'green onion', 'leek', 'leeks',
            'mushroom', 'mushrooms', 'button mushroom', 'cremini', 'portobello', 'shiitake', 'oyster mushroom',
            'enoki', 'chanterelle', 'morel', 'porcini', 'truffle',
            'eggplant', 'aubergine', 'okra', 'artichoke', 'artichokes', 'bamboo shoot',
            'bok choy', 'chinese cabbage', 'tatsoi', 'mizuna', 'watercress', 'microgreens',
            'ginger', 'ginger root', 'turmeric', 'galangal', 'lemongrass',
            // Herbs & Leafy Greens
            'basil', 'cilantro', 'coriander', 'parsley', 'flat parsley', 'curly parsley', 'dill', 'thyme',
            'rosemary', 'oregano', 'marjoram', 'sage', 'tarragon', 'chervil', 'mint', 'spearmint', 'peppermint',
            'bay leaf', 'oregano', 'chive', 'chives', 'green herb', 'herb mix', 'salad mix', 'mixed greens',
            'arugula mix', 'mesclun', 'spring mix', 'baby spinach', 'baby lettuce'
        ],
        dry: [
            // Grains & Starches
            'rice', 'dry mint','white rice', 'brown rice', 'jasmine rice', 'basmati rice', 'arborio rice', 'wild rice',
            'pasta', 'noodle', 'noodles', 'spaghetti', 'penne', 'fettuccine', 'lasagna', 'angel hair',
            'egg noodle', 'ramen', 'rice noodle', 'wheat noodle', 'lo mein', 'orzo',
            'flour', 'all purpose flour', 'bread flour', 'pastry flour', 'whole wheat flour', 'self rising flour',
            'cornstarch', 'corn flour', 'arrowroot', 'tapioca',
            'bread', 'white bread', 'wheat bread', 'rye bread', 'sourdough', 'focaccia', 'flatbread',
            'pita', 'naan', 'tortilla', 'wrap', 'bagel', 'ciabatta',
            'cereal', 'oats', 'oatmeal', 'rolled oats', 'steel cut oats', 'granola', 'muesli', 'cornflakes',
            // Legumes & Beans
            'beans', 'bean', 'black bean', 'kidney bean', 'pinto bean', 'cannellini', 'white bean',
            'garbanzo bean', 'chickpea', 'chickpeas', 'lima bean', 'green bean', 'navy bean',
            'lentil', 'lentils', 'red lentil', 'green lentil', 'brown lentil', 'beluga lentil',
            'split pea', 'split peas', 'pea', 'peas', 'black eyed pea', 'fava bean',
            // Nuts & Seeds
            'nuts', 'nut', 'almond', 'almonds', 'cashew', 'cashews', 'walnut', 'walnuts', 'pecan', 'pecans',
            'pistachio', 'pistachios', 'macadamia', 'brazil nut', 'hazelnut', 'peanut', 'peanuts',
            'seed', 'seeds', 'sunflower seed', 'pumpkin seed', 'sesame seed', 'poppy seed', 'flax seed',
            'chia seed', 'hemp seed', 'sunflower', 'pumpkin seed', 'sesame',
            // Sugar & Sweeteners
            'sugar', 'white sugar', 'brown sugar', 'cane sugar', 'coconut sugar', 'honey', 'agave',
            'maple syrup', 'molasses', 'corn syrup', 'stevia', 'erythritol', 'xylitol',
            // Salt & Seasonings
            'salt', 'sea salt', 'kosher salt', 'himalayan salt', 'black salt', 'salt crystal',
            'pepper', 'black pepper', 'white pepper', 'pink pepper', 'sichuan pepper', 'peppercorn',
            // Spices - Essential
            'cinnamon', 'nutmeg', 'clove', 'cloves', 'allspice', 'cardamom', 'cumin', 'coriander seed',
            'fennel', 'anise', 'star anise', 'fenugreek', 'asafoetida', 'hing',
            'paprika', 'hungarian paprika', 'smoked paprika', 'cayenne', 'chili powder', 'red chili flakes',
            'curry powder', 'garam masala', 'tandoori masala', 'tikka masala', 'biryani masala',
            'turmeric', 'saffron', 'sumac', 'zahatar', 'za\'atar', 'dukkah', 'ras el hanout',
            // Spices - Detailed List
            'thyme', 'oregano', 'marjoram', 'sage', 'basil', 'dill seed', 'celery seed',
            'mustard seed', 'mustard powder', 'wasabi', 'horseradish',
            'garlic powder', 'garlic salt', 'onion powder', 'onion salt', 'celery salt',
            'ginger powder', 'ground ginger', 'turmeric powder', 'coriander powder',
            'cumin seed', 'cumin powder', 'caraway seed', 'ajwain', 'ajowan',
            'cinnamon stick', 'cinnamon powder', 'cardamom pod', 'cardamom powder',
            'clove powder', 'nutmeg powder', 'mace', 'nutmeg grater',
            'chili flakes', 'chili powder', 'red pepper flakes', 'crushed red pepper',
            'white pepper powder', 'peppercorn', 'tellicherry peppercorn', 'madagascar peppercorn',
            'sichuan peppercorn', 'long pepper', 'grains of paradise',
            'mexican oregano', 'italian seasoning', 'herbes de provence', 'bouquet garni',
            'taco seasoning', 'cajun seasoning', 'creole seasoning', 'jerk seasoning', 'berbere',
            'five spice', 'chinese five spice', 'seven spice', 'baharat', 'chinese powder',
            'pickling spice', 'mulling spice', 'pumpkin spice', 'apple pie spice',
            // Oils & Vinegars
            'oil', 'olive oil', 'extra virgin olive oil', 'canola oil', 'vegetable oil', 'sunflower oil',
            'sesame oil', 'coconut oil', 'peanut oil', 'grapeseed oil', 'walnut oil', 'hazelnut oil',
            'truffle oil', 'avocado oil', 'corn oil', 'safflower oil',
            'vinegar', 'white vinegar', 'apple cider vinegar', 'balsamic vinegar', 'red wine vinegar',
            'white wine vinegar', 'rice vinegar', 'malt vinegar', 'sherry vinegar', 'champagne vinegar',
            // Condiments & Sauces
            'soy sauce', 'tamari', 'coconut aminos', 'worcestershire', 'hot sauce', 'sriracha',
            'tabasco', 'fish sauce', 'oyster sauce', 'hoisin sauce', 'teriyaki', 'tonkatsu',
            'bbq sauce', 'ketchup', 'mustard', 'dijon mustard', 'whole grain mustard', 'yellow mustard',
            'mayo', 'mayonnaise', 'aioli', 'pesto', 'hummus', 'tahini',
            'peanut butter', 'almond butter', 'cashew butter', 'sunflower butter',
            'jam', 'jelly', 'preserves', 'marmalade', 'honey',
            // Baking Essentials
            'baking powder', 'baking soda', 'cream of tartar', 'yeast', 'active dry yeast', 'instant yeast',
            'vanilla extract', 'almond extract', 'lemon extract', 'cocoa powder', 'chocolate', 'cocoa',
            'chocolate chips', 'white chocolate', 'dark chocolate', 'bittersweet chocolate',
            // Coffee & Tea
            'coffee', 'coffee bean', 'ground coffee', 'espresso', 'coffee powder',
            'tea', 'black tea', 'green tea', 'white tea', 'oolong', 'herbal tea', 'chamomile',
            'green tea powder', 'matcha', 'chai', 'spice tea',
            // Other Dry Goods
            'raisin', 'raisins', 'dried fruit', 'cranberry', 'blueberry dried', 'apricot dried',
            'date', 'dates', 'fig', 'figs', 'prune', 'prunes', 'currant', 'goji berry',
            'coconut flake', 'shredded coconut', 'desiccated coconut'
        ],
        meat: [
            // Beef
            'beef', 'ground beef', 'chuck', 'ribeye', 'filet mignon', 'ny strip', 'sirloin', 'tenderloin',
            'brisket', 'flank', 'skirt', 't-bone', 'porterhouse', 'hanger steak', 'short ribs',
            'beef stew meat', 'beef shank', 'beef chuck roast', 'beef shoulder', 'beef brisket',
            'ground chuck', 'ground sirloin', '80/20 ground beef', '90/10 ground beef',
            // Chicken
            'chicken', 'chicken breast', 'chicken thigh', 'chicken leg', 'chicken wing', 'chicken drumstick',
            'whole chicken', 'chicken quarter', 'chicken wing', 'chicken cutlet', 'chicken tender',
            'ground chicken', 'chicken mince', 'chicken shreds', 'diced chicken', 'chicken chunk',
            'organic chicken', 'free range chicken', 'kosher chicken',
            // Pork
            'pork', 'pork chop', 'pork shoulder', 'pork butt', 'pork tenderloin', 'pork loin',
            'pork ribs', 'spare ribs', 'baby back ribs', 'st. louis ribs', 'pork belly',
            'pork shank', 'pork hock', 'ground pork', 'pork mince',
            'bacon', 'pork bacon', 'thick cut bacon', 'maple bacon', 'applewood bacon',
            'ham', 'sliced ham', 'ham steak', 'ham hock', 'prosciutto', 'jamón',
            'sausage', 'pork sausage', 'italian sausage', 'sage sausage', 'fennel sausage',
            'bratwurst', 'knockwurst', 'kielbasa', 'chorizo', 'andouille', 'linguica',
            'pancetta', 'guanciale', 'lardo', 'mortadella', 'salami', 'pepperoni',
            // Lamb
            'lamb', 'lamb chop', 'lamb shoulder', 'lamb leg', 'lamb shank', 'lamb ribs',
            'ground lamb', 'lamb mince', 'lamb stew meat', 'lamb cube', 'lamb rack',
            'rack of lamb', 'lamb loin', 'lamb saddle', 'lamb neck', 'lamb breast',
            'lamb kidney', 'lamb liver', 'lamb tongue', 'lamb heart',
            // Turkey
            'turkey', 'ground turkey', 'turkey breast', 'turkey thigh', 'turkey leg', 'turkey wing',
            'whole turkey', 'turkey drumstick', 'turkey cutlet', 'turkey mince',
            'turkey bacon', 'turkey sausage', 'sliced turkey', 'turkey deli meat',
            // Other Meats
            'veal', 'veal chop', 'veal cutlet', 'veal shank', 'veal shoulder', 'ground veal',
            'duck', 'duck breast', 'duck leg', 'whole duck', 'duck thigh',
            'rabbit', 'venison', 'game meat', 'bison', 'elk', 'ostrich', 'quail',
            'liver', 'beef liver', 'chicken liver', 'calf liver', 'pork liver',
            'kidney', 'beef kidney', 'lamb kidney', 'pork kidney',
            'tongue', 'beef tongue', 'lamb tongue', 'pork tongue',
            'oxtail', 'beef tail', 'sweetbread', 'tripe', 'brain',
            // Deli Meats & Processed Meat
            'deli meat', 'cold cut', 'sliced meat', 'turkey breast sliced', 'ham sliced',
            'roast beef', 'corned beef', 'pastrami', 'bologna', 'liverwurst',
            'head cheese', 'pâté', 'foie gras', 'terrine',
            // Dairy
            'milk', 'whole milk', 'low fat milk', 'skim milk', 'raw milk', 'organic milk',
            'cream', 'heavy cream', 'whipping cream', 'light cream', 'sour cream', 'crème fraîche',
            'butter', 'unsalted butter', 'salted butter', 'cultured butter', 'european butter',
            'ghee', 'clarified butter', 'brown butter',
            'yogurt', 'greek yogurt', 'plain yogurt', 'flavored yogurt', 'lactose free yogurt',
            'kefir', 'buttermilk', 'cultured milk', 'sour milk',
            // Cheese - General
            'cheese', 'cheddar', 'sharp cheddar', 'extra sharp cheddar', 'white cheddar',
            'mozzarella', 'fresh mozzarella', 'low moisture mozzarella', 'buffalo mozzarella', 'burrata',
            'parmesan', 'parmigiano reggiano', 'romano', 'grana padano', 'pecorino',
            'gouda', 'smoked gouda', 'edam', 'gruyere', 'emmental', 'jarlsberg',
            'brie', 'camembert', 'roquefort', 'gorgonzola', 'blue cheese', 'stilton',
            'feta', 'halloumi', 'ricotta', 'mascarpone', 'cream cheese', 'neufchatel',
            'provolone', 'swiss cheese', 'muenster', 'fontina', 'asiago',
            'manchego', 'cotija', 'queso fresco', 'paneer', 'mozzarella sticks',
            'cottage cheese', 'quark', 'chevre', 'goat cheese', 'chèvre',
            // Eggs
            'egg', 'eggs', 'chicken egg', 'large egg', 'extra large egg', 'jumbo egg',
            'brown egg', 'white egg', 'organic egg', 'free range egg', 'pastured egg',
            'duck egg', 'quail egg', 'goose egg'
        ],
        seafood: [
            // White Fish
            'fish', 'white fish', 'cod', 'atlantic cod', 'pacific cod', 'black cod', 'sablefish',
            'halibut', 'pacific halibut', 'greenland halibut', 'flounder', 'sole', 'dover sole',
            'tilapia', 'swai', 'basa', 'catfish', 'grouper', 'snapper', 'red snapper',
            'sea bass', 'chilean sea bass', 'sea bream', 'branzino', 'orata',
            'haddock', 'pollock', 'whiting', 'turbot', 'plaice', 'dab',
            'monkfish', 'hake', 'ling', 'orange roughy', 'rockfish',
            // Fatty/Oily Fish
            'salmon', 'atlantic salmon', 'sockeye salmon', 'pink salmon', 'king salmon', 'chinook',
            'coho salmon', 'silver salmon', 'wild salmon', 'farmed salmon',
            'tuna', 'yellowfin tuna', 'albacore tuna', 'bluefin tuna', 'skipjack tuna', 'bigeye tuna',
            'mackerel', 'atlantic mackerel', 'pacific mackerel', 'spanish mackerel',
            'sardine', 'sardines', 'pilchard', 'anchovy', 'anchovies', 'herring',
            'trout', 'rainbow trout', 'brown trout', 'sea trout', 'lake trout',
            'char', 'arctic char', 'brook trout',
            // Shellfish - Shrimp/Prawns
            'shrimp', 'shrimps', 'prawn', 'prawns', 'jumbo shrimp', 'colossal shrimp',
            'tiger shrimp', 'white shrimp', 'pink shrimp', 'rock shrimp',
            'large shrimp', 'medium shrimp', 'small shrimp', '16/20 shrimp', '21/25 shrimp',
            // Shellfish - Crab
            'crab', 'blue crab', 'king crab', 'snow crab', 'dungeness crab', 'stone crab',
            'mud crab', 'peekytoe crab', 'lump crab meat', 'crab claw', 'crab leg',
            // Shellfish - Lobster
            'lobster', 'maine lobster', 'spiny lobster', 'rock lobster', 'live lobster',
            'lobster tail', 'lobster meat', 'lobster claw',
            // Shellfish - Mollusks
            'oyster', 'oysters', 'clam', 'clams', 'littleneck', 'cherrystones', 'topneck',
            'mussel', 'mussels', 'scallop', 'scallops', 'sea scallop', 'bay scallop',
            'squid', 'calamari', 'octopus', 'conch', 'periwinkle', 'snail', 'escargot',
            'sea urchin', 'uni', 'abalone',
            // Fish Roe
            'caviar', 'roe', 'fish roe', 'salmon roe', 'lumpfish roe', 'tobiko',
            'ikura', 'uni roe',
            // Specialty/Prepared
            'fish fillet', 'skinless fish', 'boneless fish', 'fish steak', 'whole fish',
            'fish portion', 'fish filet', 'frozen fish', 'thawed fish',
            'seafood mix', 'seafood medley', 'mixed seafood', 'fruit de mer'
        ],
        frozen: [
            // Frozen Vegetables
            'frozen vegetable', 'frozen vegetables', 'mixed vegetable', 'peas', 'corn', 'carrot',
            'broccoli', 'cauliflower', 'spinach', 'peas and carrot', 'stir fry vegetable',
            'french fry', 'french fries', 'waffle fry', 'crinkle cut fry', 'frozen potato',
            'frozen hash brown', 'frozen tater tot', 'frozen onion ring',
            // Frozen Fruits
            'frozen fruit', 'frozen berry', 'frozen strawberry', 'frozen blueberry', 'frozen raspberry',
            'frozen mango', 'frozen pineapple', 'frozen fruit mix', 'mixed berry',
            // Frozen Meat & Seafood
            'frozen chicken', 'frozen chicken breast', 'frozen chicken thigh', 'frozen chicken wing',
            'frozen ground chicken', 'frozen chicken nugget', 'frozen chicken tender', 'chicken patty',
            'frozen beef', 'frozen ground beef', 'frozen burger', 'frozen meatball', 'frozen steak',
            'frozen pork', 'frozen pork chop', 'frozen bacon', 'frozen ham',
            'frozen turkey', 'frozen ground turkey', 'frozen turkey meatball',
            'frozen shrimp', 'frozen prawn', 'frozen fish', 'frozen salmon', 'frozen cod',
            'frozen seafood', 'frozen fish fillet', 'frozen crab', 'frozen lobster',
            'frozen scallop', 'frozen calamari', 'frozen squid', 'frozen seafood mix',
            // Frozen Prepared Meals & Dishes
            'frozen pizza', 'frozen meal', 'frozen entree', 'frozen dinner', 'tv dinner',
            'frozen lasagna', 'frozen pasta', 'frozen rice bowl', 'frozen stir fry',
            'frozen egg roll', 'frozen spring roll', 'frozen dumpling', 'potsticker',
            'frozen enchilada', 'frozen burrito', 'frozen taco', 'frozen chimichanga',
            'frozen samosa', 'frozen empanada', 'frozen croquette',
            'frozen french bread pizza', 'frozen bagel', 'frozen waffle', 'frozen pancake',
            'frozen biscuit', 'frozen muffin', 'frozen donut', 'frozen brownie',
            // Frozen Dairy & Desserts
            'ice cream', 'gelato', 'frozen yogurt', 'sorbet', 'sherbet', 'popsicle',
            'ice cream bar', 'ice cream sandwich', 'drumstick', 'frozen pop', 'italian ice',
            'frozen custard', 'frozen mousse', 'frozen cheesecake', 'frozen cake',
            // Other Frozen Items
            'ice', 'ice cube', 'crushed ice', 'shaved ice',
            'frozen dough', 'frozen bread', 'frozen cookie', 'frozen pastry'
        ]
    }
};

// DOM Elements
const DOM = {
    addBtn: document.querySelector("#add-btn"),
    deleteBtn: document.querySelector("#delete-btn"),
    resultBtn: document.querySelector("#result-btn"),
    backBtn: document.querySelector("#back-btn"),
    inputEl: document.querySelector("#input-el"),
    productContainer: document.querySelector("#product-container"),
    tableContainer: document.querySelector("#table-container"),
    resultEl: document.querySelector("#result-el"),
    resultContent: document.querySelector("#result-content"),
    productBtns: document.querySelectorAll(".product-btn"),
    headingEl: document.querySelector("#heading-el"),
    lists: {
        fresh: document.querySelector("#freshUl-el"),
        dry: document.querySelector("#dryUl-el"),
        meat: document.querySelector("#meatUl-el"),
        seafood: document.querySelector("#seafoodUl-el"),
        frozen: document.querySelector("#frozenUl-el")
    }
};

// Initialize application
function initializeApp() {
    initializeLocalStorage();
    setHeaderDate();
    attachEventListeners();
}

// Initialize localStorage with default values
function initializeLocalStorage() {
    Object.values(CONFIG.CATEGORIES).forEach(cat => {
        if (!localStorage.getItem(cat.key)) {
            localStorage.setItem(cat.key, JSON.stringify([]));
        }
    });
}

// Set header date and day
function setHeaderDate() {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = dayNames[now.getDay()];
    DOM.headingEl.innerHTML = `Shopping Order Checklist - ${formattedDate} (${currentDay})`;
}

// Attach all event listeners
function attachEventListeners() {
    DOM.addBtn.addEventListener("click", handleAddClick);
    DOM.deleteBtn.addEventListener("click", handleDeleteClick);
    DOM.resultBtn.addEventListener("click", handleResultClick);
    DOM.backBtn.addEventListener("click", handleBackClick);
    DOM.productBtns.forEach(btn => btn.addEventListener("click", handleCategoryClick));
    DOM.inputEl.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleAddClick();
    });
}

// Handle add button click
function handleAddClick() {
    const inputValue = DOM.inputEl.value.trim();
    if (inputValue) {
        // Auto-detect category
        const detectedCategory = detectCategory(inputValue);
        if (detectedCategory) {
            // Auto-add to detected category
            addItemToCategory(detectedCategory, inputValue);
            updateCategoryList(detectedCategory);
            DOM.tableContainer.style.display = "grid";
            DOM.productContainer.style.display = "none";
            DOM.inputEl.value = "";
            DOM.deleteBtn.style.display = "block";
            DOM.resultBtn.style.display = "block";
            
            // Show which category it was added to
            const categoryName = CONFIG.CATEGORIES[detectedCategory].name;
            showNotification(`✓ "${inputValue}" added to ${categoryName}!`, "success");
        } else {
            // If not auto-detected, show category selection
            DOM.productContainer.style.display = "block";
        }
    } else {
        showNotification("Please enter a product name!", "error");
    }
}

// Detect category based on product keywords
function detectCategory(product) {
    const productLower = product.toLowerCase();
    
    for (const [category, keywords] of Object.entries(CONFIG.PRODUCT_KEYWORDS)) {
        for (const keyword of keywords) {
            if (productLower.includes(keyword)) {
                return category;
            }
        }
    }
    
    return null;
}

// Show notification feedback
function showNotification(message, type = "info") {
    alert(message);
}

// Handle category button click
function handleCategoryClick(event) {
    const inputValue = DOM.inputEl.value.trim();
    if (!inputValue) return;

    const categoryKey = getCategoryKeyFromButton(event.target);
    if (!categoryKey) return;

    // Add item to localStorage
    addItemToCategory(categoryKey, inputValue);

    // Update UI
    updateCategoryList(categoryKey);
    DOM.tableContainer.style.display = "grid";
    DOM.productContainer.style.display = "none";
    DOM.inputEl.value = "";
    DOM.deleteBtn.style.display = "block";
    DOM.resultBtn.style.display = "block";
}

// Get category key from button ID
function getCategoryKeyFromButton(button) {
    const buttonId = button.id;
    if (buttonId === "fresh-btn") return "fresh";
    if (buttonId === "dry-btn") return "dry";
    if (buttonId === "meat-btn") return "meat";
    if (buttonId === "seafood-btn") return "seafood";
    if (buttonId === "frozen-btn") return "frozen";
    return null;
}

// Add item to category in localStorage
function addItemToCategory(category, item) {
    const storageKey = CONFIG.CATEGORIES[category].key;
    const items = JSON.parse(localStorage.getItem(storageKey)) || [];
    items.push(item);
    localStorage.setItem(storageKey, JSON.stringify(items));
}

// Update category list display
function updateCategoryList(category) {
    const storageKey = CONFIG.CATEGORIES[category].key;
    const items = JSON.parse(localStorage.getItem(storageKey)) || [];
    const listElement = DOM.lists[category];
    
    listElement.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}


// Handle delete button click
function handleDeleteClick() {
    if (!confirm("Are you sure you want to clear all items? This action cannot be undone.")) {
        return;
    }
    
    // Clear localStorage
    Object.values(CONFIG.CATEGORIES).forEach(cat => {
        localStorage.removeItem(cat.key);
    });

    // Clear UI
    Object.values(DOM.lists).forEach(list => {
        list.innerHTML = "";
    });

    DOM.tableContainer.style.display = "none";
    DOM.deleteBtn.style.display = "none";
    DOM.resultEl.style.display = "none";
    DOM.resultBtn.style.display = "block";
    
    showNotification("All items have been cleared.");
}

// Handle result button click
function handleResultClick() {
    const totalItems = getTotalItems();
    
    if (totalItems === 0) {
        showNotification("No items in your order list. Add some items first!");
        return;
    }

    displayOrderSummary();
    DOM.resultBtn.style.display = "none";
    DOM.resultEl.style.display = "block";
    DOM.backBtn.style.display = "block";
    DOM.deleteBtn.style.display = "block";
    DOM.tableContainer.style.display = "none";
}

// Get total number of items
function getTotalItems() {
    let total = 0;
    Object.values(CONFIG.CATEGORIES).forEach(cat => {
        const items = JSON.parse(localStorage.getItem(cat.key)) || [];
        total += items.length;
    });
    return total;
}

// Display order summary
function displayOrderSummary() {
    let html = '<div style="text-align: left;">';
    
    Object.entries(CONFIG.CATEGORIES).forEach(([key, config]) => {
        const items = JSON.parse(localStorage.getItem(config.key)) || [];
        if (items.length > 0) {
            html += `
                <h4>${config.name}</h4>
                <ul>
                    ${items.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
            `;
        }
    });
    
    const totalItems = getTotalItems();
    html += `<hr><p><strong>Total Items: ${totalItems}</strong></p></div>`;
    
    DOM.resultContent.innerHTML = html;
}

// Handle back button click
function handleBackClick() {
    DOM.resultEl.style.display = "none";
    DOM.backBtn.style.display = "none";
    DOM.resultBtn.style.display = "block";
    DOM.tableContainer.style.display = "grid";
}

// Initialize app on page load
document.addEventListener('DOMContentLoaded', initializeApp);