// Brainrot data from Steal a Brainrot game
const brainrotData = [
    { name: "Noobini Pizzanini", rarity: "Common", incomeRate: 1, cost: 25 },
    { name: "Lirili Larila", rarity: "Common", incomeRate: 3, cost: 250 },
    { name: "Tim Cheese", rarity: "Common", incomeRate: 5, cost: 500 },
    { name: "FluriFlura", rarity: "Common", incomeRate: 7, cost: 750 },
    { name: "Talpa Di Fero", rarity: "Common", incomeRate: 9, cost: 1000 },
    { name: "Svinina Bombardino", rarity: "Common", incomeRate: 10, cost: 1200 },
    { name: "Pipi Kiwi", rarity: "Common", incomeRate: 13, cost: 1500 },
    { name: "Trippi Troppi", rarity: "Rare", incomeRate: 15, cost: 2000 },
    { name: "Tung Tung Tung Sahur", rarity: "Rare", incomeRate: 25, cost: 3000 },
    { name: "Gangster Footera", rarity: "Rare", incomeRate: 30, cost: 4000 },
    { name: "Bandito Bobritto", rarity: "Rare", incomeRate: 35, cost: 4500 },
    { name: "Boneca Ambalabu", rarity: "Rare", incomeRate: 40, cost: 5000 },
    { name: "Cacto Hipopotamo", rarity: "Rare", incomeRate: 50, cost: 6500 },
    { name: "Ta Ta Ta Ta Sahur", rarity: "Rare", incomeRate: 55, cost: 7500 },
    { name: "Tric Trac Baraboom", rarity: "Rare", incomeRate: 65, cost: 9000 },
    { name: "Cappuccino Assassino", rarity: "Epic", incomeRate: 75, cost: 10000 },
    { name: "Brr Brr Patapim", rarity: "Epic", incomeRate: 100, cost: 15000 },
    { name: "Trulimero Trulicina", rarity: "Epic", incomeRate: 125, cost: 20000 },
    { name: "Bambini Crostini", rarity: "Epic", incomeRate: 130, cost: 22500 },
    { name: "Bananita Dolphinita", rarity: "Epic", incomeRate: 150, cost: 25000 },
    { name: "Perochello Lemonchello", rarity: "Epic", incomeRate: 160, cost: 27500 },
    { name: "Brri Brri Bicus Dicus Bombicus", rarity: "Epic", incomeRate: 175, cost: 30000 },
    { name: "Avocadini Guffo", rarity: "Epic", incomeRate: 225, cost: 35000 },
    { name: "Salamino Penguino", rarity: "Epic", incomeRate: 250, cost: 40000 },
    { name: "Burbaloni Loliloli", rarity: "Legendary", incomeRate: 200, cost: 35000 },
    { name: "Chimpazini Bananini", rarity: "Legendary", incomeRate: 300, cost: 50000 },
    { name: "Ballerina Cappuccina", rarity: "Legendary", incomeRate: 500, cost: 100000 },
    { name: "Chef Crabracadabra", rarity: "Legendary", incomeRate: 600, cost: 150000 },
    { name: "Lionel Cactuseli", rarity: "Legendary", incomeRate: 650, cost: 175000 },
    { name: "Glorbo Fruttodrillo", rarity: "Legendary", incomeRate: 750, cost: 200000 },
    { name: "Blueberrini Octopusin", rarity: "Legendary", incomeRate: 1000, cost: 250000 },
    { name: "Strawberelli Flamingelli", rarity: "Legendary", incomeRate: 1100, cost: 275000 },
    { name: "Pandaccini Bananini", rarity: "Legendary", incomeRate: 1200, cost: 300000 },
    { name: "Frigo Camelo", rarity: "Mythic", incomeRate: 1400, cost: 300000 },
    { name: "Orangutini Ananassini", rarity: "Mythic", incomeRate: 1700, cost: 400000 },
    { name: "Rhino Toasterino", rarity: "Mythic", incomeRate: 2100, cost: 450000 },
    { name: "Bombardiro Crocodilo", rarity: "Mythic", incomeRate: 2500, cost: 500000 },
    { name: "Spioniro Golubiro", rarity: "Mythic", incomeRate: 3500, cost: 750000, luckyBox: true },
    { name: "Bombombini Gusini", rarity: "Mythic", incomeRate: 5000, cost: 1000000 },
    { name: "Zibra Zubra Zibralini", rarity: "Mythic", incomeRate: 6000, cost: 1000000, luckyBox: true },
    { name: "Tigrilini Watermelini", rarity: "Mythic", incomeRate: 6500, cost: 1000000, luckyBox: true },
    { name: "Cavallo Virtuso", rarity: "Mythic", incomeRate: 7500, cost: 2500000 },
    { name: "Gorillo Watermelondrillo", rarity: "Mythic", incomeRate: 8000, cost: 3000000 },
    { name: "Coco Elefanto", rarity: "Brainrot God", incomeRate: 10000, cost: 5000000 },
    { name: "Girafa Celestre", rarity: "Brainrot God", incomeRate: 20000, cost: 7500000 },
    { name: "Gattatino Nyanino", rarity: "Brainrot God", incomeRate: 35000, cost: 7500000 },
    { name: "Matteo", rarity: "Brainrot God", incomeRate: 50000, cost: 10000000 },
    { name: "Tralalero Tralala", rarity: "Brainrot God", incomeRate: 50000, cost: 10000000 },
    { name: "Trigoligre Frutonni", rarity: "Brainrot God", incomeRate: 60000, cost: 15000000, luckyBox: true },
    { name: "Espresso Signora", rarity: "Brainrot God", incomeRate: 70000, cost: 25000000 },
    { name: "Odin Din Din Dun", rarity: "Brainrot God", incomeRate: 75000, cost: 15000000 },
    { name: "Statutino Libertino", rarity: "Brainrot God", incomeRate: 75000, cost: 20000000 },
    { name: "Orcalero Orcala", rarity: "Brainrot God", incomeRate: 100000, cost: 15000000, luckyBox: true },
    { name: "Trenostruzzo Turbo 3000", rarity: "Brainrot God", incomeRate: 150000, cost: 25000000 },
    { name: "Ballerino Lololo", rarity: "Brainrot God", incomeRate: 200000, cost: 35000000 },
    { name: "Los Crocodillitos", rarity: "Brainrot God", incomeRate: 55000, cost: 12500000 },
    { name: "Piccione Macchina", rarity: "Brainrot God", incomeRate: 0, cost: 0, tba: true },
    { name: "La Vacca Staturno Saturnita", rarity: "Secret", incomeRate: 250000, cost: 50000000 },
    { name: "Chimpanzini Spiderini", rarity: "Secret", incomeRate: 325000, cost: 100000000 },
    { name: "Tortuginni Dragonfruitini", rarity: "Secret", incomeRate: 350000, cost: 500000000, luckyBox: true },
    { name: "Los Tralaleritos", rarity: "Secret", incomeRate: 500000, cost: 150000000 },
    { name: "Las Tralaleritas", rarity: "Secret", incomeRate: 650000, cost: 150000000 },
    { name: "Graipuss Medussi", rarity: "Secret", incomeRate: 1000000, cost: 250000000 },
    { name: "Pot Hotspot", rarity: "Secret", incomeRate: 2500000, cost: 500000000, luckyBox: true },
    { name: "La Grande Combinasion", rarity: "Secret", incomeRate: 10000000, cost: 1000000000 },
    { name: "Nuclearo Dinossauro", rarity: "Secret", incomeRate: 15000000, cost: 2500000000 },
    { name: "Garama and Madundung", rarity: "Secret", incomeRate: 50000000, cost: 10000000000 },
    { name: "Las Vaquitas Saturnitas", rarity: "Secret", incomeRate: 750000, cost: 160000000 },
    { name: "Chicleteira Bicicleteira", rarity: "Secret", incomeRate: 3500000, cost: 125000000 }
];

// DOM Elements
const unitsContainer = document.getElementById('unitsContainer');
const searchInput = document.getElementById('searchInput');
const rarityFilter = document.getElementById('rarityFilter');
const sortButtons = document.querySelectorAll('.sort-btn');
const totalUnitsElement = document.getElementById('totalUnits');
const mostEfficientElement = document.getElementById('mostEfficient');
const highestIncomeElement = document.getElementById('highestIncome');

// Current filter and sort state
let currentRarityFilter = 'all';
let currentSortMethod = 'efficiency';
let searchTerm = '';

// Format large numbers with K, M, B suffixes
function formatNumber(num) {
    if (num === 0) return '0';
    if (!num) return 'TBA';
    
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

// Calculate efficiency (income per cost)
function calculateEfficiency(incomeRate, cost) {
    if (!incomeRate || !cost || incomeRate === 0 || cost === 0) return 0;
    return (incomeRate / cost) * 1000; // Multiply by 1000 to get a more readable number
}

// Create a unit card element
function createUnitCard(unit) {
    const efficiency = calculateEfficiency(unit.incomeRate, unit.cost);
    
    // Create card element
    const card = document.createElement('div');
    card.className = `unit-card ${unit.rarity.replace(' ', '-')}`;
    card.setAttribute('data-efficiency', efficiency);
    card.setAttribute('data-income', unit.incomeRate);
    card.setAttribute('data-cost', unit.cost);
    card.setAttribute('data-name', unit.name.toLowerCase());
    
    // Card content
    card.innerHTML = `
        <div class="unit-header">
            <h2>${unit.name}</h2>
            <div class="unit-rarity">${unit.rarity}${unit.luckyBox ? ' (Lucky Box)' : ''}</div>
        </div>
        <div class="unit-body">
            <div class="unit-stat">
                <span class="stat-label">Income Rate:</span>
                <span class="stat-value">${unit.tba ? 'TBA' : formatNumber(unit.incomeRate) + '/s'}</span>
            </div>
            <div class="unit-stat">
                <span class="stat-label">Cost:</span>
                <span class="stat-value">${unit.tba ? 'TBA' : formatNumber(unit.cost)}</span>
            </div>
            ${!unit.tba ? `<div class="efficiency">Efficiency: ${efficiency.toFixed(2)}</div>` : ''}
        </div>
    `;
    
    return card;
}

// Render all units based on current filters and sort
function renderUnits() {
    // Clear container
    unitsContainer.innerHTML = '';
    
    // Filter units
    let filteredUnits = brainrotData.filter(unit => {
        const matchesRarity = currentRarityFilter === 'all' || unit.rarity === currentRarityFilter;
        const matchesSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRarity && matchesSearch;
    });
    
    // Sort units
    filteredUnits.sort((a, b) => {
        switch (currentSortMethod) {
            case 'efficiency':
                const effA = calculateEfficiency(a.incomeRate, a.cost);
                const effB = calculateEfficiency(b.incomeRate, b.cost);
                return effB - effA; // Highest efficiency first
            case 'income':
                return b.incomeRate - a.incomeRate; // Highest income first
            case 'cost':
                return a.cost - b.cost; // Lowest cost first
            case 'name':
                return a.name.localeCompare(b.name); // Alphabetical
            case 'rarity':
                const rarityOrder = ["Common", "Rare", "Epic", "Legendary", "Mythic", "Brainrot God", "Secret"];
                return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
            default:
                return 0;
        }
    });
    
    // Render filtered and sorted units
    filteredUnits.forEach(unit => {
        unitsContainer.appendChild(createUnitCard(unit));
    });
    
    // Update stats
    updateStats(filteredUnits);
}

// Update statistics display
function updateStats(units) {
    totalUnitsElement.textContent = units.length;
    
    // Find most efficient unit (excluding TBA units)
    const validUnits = units.filter(unit => !unit.tba && unit.incomeRate > 0 && unit.cost > 0);
    
    if (validUnits.length > 0) {
        // Most efficient
        const mostEfficientUnit = validUnits.reduce((prev, current) => {
            const prevEff = calculateEfficiency(prev.incomeRate, prev.cost);
            const currEff = calculateEfficiency(current.incomeRate, current.cost);
            return prevEff > currEff ? prev : current;
        });
        
        mostEfficientElement.textContent = mostEfficientUnit.name;
        
        // Highest income
        const highestIncomeUnit = validUnits.reduce((prev, current) => {
            return prev.incomeRate > current.incomeRate ? prev : current;
        });
        
        highestIncomeElement.textContent = highestIncomeUnit.name;
    } else {
        mostEfficientElement.textContent = '-';
        highestIncomeElement.textContent = '-';
    }
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderUnits();
});

rarityFilter.addEventListener('change', (e) => {
    currentRarityFilter = e.target.value;
    renderUnits();
});

sortButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        sortButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update sort method
        currentSortMethod = button.getAttribute('data-sort');
        renderUnits();
    });
});

// Initial render
window.addEventListener('DOMContentLoaded', () => {
    renderUnits();
});
