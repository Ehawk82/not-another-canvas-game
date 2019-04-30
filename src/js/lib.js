const cH = window.innerHeight, cW = window.innerWidth;

var btnNames = ["▫","▪","◽","◾","◻","◼","⬜","⬛","🔲","🔳"];

var userNACG = {
	level: 0,
	quark: {
		up: {
			count: 0,
			polarity: true,
			entities: {},
			color: "red"
		},
		down: {
            count: 0,
			polarity: false,
			entities: {},
			color: "blue"
		}
	},
	particle: {
		proton: {
			count: 0,
			charge: 0
		},
		nuetron: {
            count: 0,
			charge: 0
		},
		electron: {
			count: 0,
			charge: 0
		}
	},
	element: {
		Actinium: {	
			symbol: "Ac", 
			mass:	89,
			count: 0
		},
		Aluminum: {	
			symbol: "Al", 
			mass:	13,
			count: 0
		},
		Americium: {	
			symbol: "Am", 
			mass:	95,
			count: 0 
		},
		Antimony: {	
			symbol: "Sb", 
			mass:	51,
			count: 0 
		},
		Argon: {	
			symbol: "Ar", 
			mass:	18,
			count: 0 
		},
		Arsenic: {	
			symbol: "As", 
			mass:	33,
			count: 0 
		},
		Astatine: {	
			symbol: "At", 
			mass:	85,
			count: 0 
		},
		Barium: {	
			symbol: "Ba", 
			mass:	56,
			count: 0 
		},
		Berkelium: {	
			symbol: "Bk", 
			mass:	97,
			count: 0 
		},
		Beryllium: {	
			symbol: "Be", 
			mass:	4,
			count: 0 
		},
		Bismuth: {	
			symbol: "Bi", 
			mass:	83,
			count: 0 
		},
		Bohrium: {		
			symbol: "Bh", 
			mass:	107,
			count: 0 
		},
		Boron: {		
			symbol: "B", 
			mass:	5,
			count: 0 
		},
		Bromine: {		
			symbol: "Br", 
			mass:	35,
			count: 0 
		},
		Cadmium: {		
			symbol: "Cd", 
			mass:	48,
			count: 0 
		},
		Calcium: {		
			symbol: "Ca", 
			mass:	20,
			count: 0 
		},
		Californium: {		
			symbol: "Cf", 
			mass:	98,
			count: 0 
		},
		Carbon: {		
			symbol: "C", 
			mass:	6,
			count: 0 
		},
		Cerium: {		
			symbol: "Ce", 
			mass:	58,
			count: 0 
		},
		Cesium: {		
			symbol: "Cs", 
			mass:	55,
			count: 0 
		},
		Chlorine: {		
			symbol: "Cl", 
			mass:	17,
			count: 0 
		},
		Chromium: {		
			symbol: "Cr", 
			mass:	24,
			count: 0 
		},
		Cobalt: {		
			symbol: "Co", 
			mass:	27,
			count: 0 
		},
		Copernicium: {		
			symbol: "Cn", 
			mass:	112,
			count: 0 
		},
		Copper: {		
			symbol: "Cu", 
			mass:	29,
			count: 0 
		},
		Curium: {		
			symbol: "Cm", 
			mass:	96,
			count: 0 
		},
		Darmstadtium: {		
			symbol: "Ds", 
			mass:	110,
			count: 0 
		},
		Dubnium: {		
			symbol: "Db", 
			mass:	105,
			count: 0 
		},
		Dysprosium: {		
			symbol: "Dy", 
			mass:	66,
			count: 0 
		},
		Einsteinium: {		
			symbol: "Es", 
			mass:	99,
			count: 0 
		},
		Erbium: {		
			symbol: "Er", 
			mass:	68,
			count: 0 
		},
		Europium: {		
			symbol: "Eu", 
			mass:	63,
			count: 0 
		},
		Fermium: {		
			symbol: "Fm", 
			mass:	100,
			count: 0 
		},
		Flerovium: {		
			symbol: "Fl", 
			mass:	114,
			count: 0 
		},
		Fluorine: {		
			symbol: "F", 
			mass:	9,
			count: 0 
		},
		Francium: {		
			symbol: "Fr", 
			mass:	87,
			count: 0 
		},
		Gadolinium: {		
			symbol: "Gd", 
			mass:	64,
			count: 0 
		},
		Gallium: {		
			symbol: "Ga", 
			mass:	31,
			count: 0 
		},
		Germanium: {		
			symbol: "Ge", 
			mass:	32,
			count: 0 
		},
		Gold: {		
			symbol: "Au", 
			mass:	79,
			count: 0 
		},
		Hafnium: {		
			symbol: "Hf",
			mass:	72,
			count: 0 
		},
		Hassium: {		
			symbol: "Hs", 
			mass:	108,
			count: 0 
		},
		Helium: {		
			symbol: "He", 
			mass:	2,
			count: 0 
		},
		Holmium: {		
			symbol: "Ho", 
			mass:	67,
			count: 0 
		},
		Hydrogen: {		
			symbol: "H", 
			mass:	1,
			count: 0 
		},
		Indium: {		
			symbol: "In",
			mass:	49,
			count: 0 
		},
		Iodine: {		
			symbol: "I", 
			mass:	53,
			count: 0 
		},
		Iridium: {		
			symbol: "Ir", 
			mass:	77,
			count: 0 
		},
		Iron: {		
			symbol: "Fe", 
			mass:	26,
			count: 0 
		},
		Krypton: {		
			symbol: "Kr", 
			mass:	36,
			count: 0 
		},
		Lanthanum: {		
			symbol: "La", 
			mass:	57,
			count: 0 
		},
		Lawrencium: {		
			symbol: "Lr", 
			mass:	103,
			count: 0 
		},
		Lead: {		
			symbol: "Pb", 
			mass:	82,
			count: 0 
		},
		Lithium: {		
			symbol: "Li", 
			mass:	3,
			count: 0 
		},
		Livermorium: { 		
			symbol: "Lv", 
			mass:	116,
			count: 0 
		},
		Lutetium: {		
			symbol: "Lu",
			 mass:	71,
			count: 0 
		},
		Magnesium: {		
			symbol: "Mg", 
			mass:	12,
			count: 0 
		},
		Manganese: {		
			symbol: "Mn", 
			mass:	25,
			count: 0 
		},
		Meitnerium: {		
			symbol: "Mt", 
			mass:	109,
			count: 0 
		},
		Mendelevium: {		
			symbol: "Md", 
			mass:	101,
			count: 0
			 },
		Mercury: {		
			symbol: "Hg", 
			mass:	80,
			count: 0 
		},
		Molybdenum: {		
			symbol: "Mo", 
			mass:	42,
			count: 0 
		},
		Moscovium: {		
			symbol: "Mc", 
			mass:	115,
			count: 0 
		},
		Neodymium: {		
			symbol: "Nd", 
			mass:	60,
			count: 0 
		},
		Neon: {		
			symbol: "Ne", 
			mass:	10,
			count: 0 
		},
		Neptunium: {		
			symbol: "Np", 
			mass:	93,
			count: 0 
		},
		Nickel: {		
			symbol: "Ni", 
			mass:	28,
			count: 0 
		},
		Nihonium: {		
			symbol: "Nh", 
			mass:	113,
			count: 0 
		},
		Niobium: {		
			symbol: "Nb", 
			mass:	41,
			count: 0 
		},
		Nitrogen: {	
			symbol: "N", 
			mass:	7,
			count: 0 
		},
		Nobelium: {	
			symbol: "No", 
			mass:	102,
			count: 0 
		},
		Oganesson: { 	
			symbol: "Og", 
			mass:	118,
			count: 0 
		},
		Osmium: {	
			symbol: "Os", 
			mass:	76,
			count: 0 
		},
		Oxygen: {	
			symbol: "O", 
			mass:	8,
			count: 0 
		},
		Palladium: {	
			symbol: "Pd", 
			mass:	46,
			count: 0 
		},
		Phosphorus: {	
			symbol: "P", 
			mass:	15,
			count: 0 
		},
		Platinum: {	
			symbol: "Pt", 
			mass:	78,
			count: 0 
		},
		Plutonium: {	
			symbol: "Pu", 
			mass:	94,
			count: 0 
		},
		Polonium: {	
			symbol: "Po", 
			mass:	84,
			count: 0 
		},
		Potassium: {	
			symbol: "K", 
			mass:	19,
			count: 0 
		},
		Praseodymium: {	
			symbol: "Pr", 
			mass:	59,
			count: 0 
		},
		Promethium: {	
			symbol: "Pm", 
			mass:	61,
			count: 0 
		},
		Protactinium: {	
			symbol: "Pa", 
			mass:	91,
			count: 0 
		},
		Radium: {	
			symbol: "Ra", 
			mass:	88,
			count: 0 
		},
		Radon: {	
			symbol: "Rn", 
			mass:	86,
			count: 0 
		},
		Rhenium: {	
			symbol: "Re", 
			mass:	75,
			count: 0 
		},
		Rhodium: {	
			symbol: "Rh", 
			mass:	45,
			count: 0 
		},
		Roentgenium: {	
			symbol: "Rg", 
			mass:	111,
			count: 0 
		},
		Rubidium: {	
			symbol: "Rb", 
			mass:	37,
			count: 0 
		},
		Ruthenium: {	
			symbol: "Ru", 
			mass:	44 
		},
		Rutherfordium: {	
			symbol: "Rf", 
			mass:	104,
			count: 0 
		},
		Samarium: {	
			symbol: "Sm", 
			mass:	62,
			count: 0 
		},
		Scandium: {	
			symbol: "Sc", 
			mass:	21,
			count: 0 
		},
		Seaborgium: {	
			symbol: "Sg", 
			mass:	106,
			count: 0 
		},
		Selenium: {	
			symbol: "Se", 
			mass:	34,
			count: 0 
		},
		Silicon: {	
			symbol: "Si", 
			mass:	14,
			count: 0 
		},
		Silver: {	
			symbol: "Ag", 
			mass:	47,
			count: 0 
		},
		Sodium: {	
			symbol: "Na", 
			mass:	11,
			count: 0 
		},
		Strontium: {	
			symbol: "Sr", 
			mass:	38,
			count: 0 
		},
		Sulfur: {	
			symbol: "S", 
			mass:	16,
			count: 0 
		},
		Tantalum: {	
			symbol: "Ta", 
			mass:	73,
			count: 0 
		},
		Technetium: {	
			symbol: "Tc", 
			mass:	43,
			count: 0 
		},
		Tellurium: {	
			symbol: "Te", 
			mass:	52,
			count: 0 
		},
		Tennessine: {	
			symbol: "Ts", 
			mass:	117,
			count: 0 
		},
		Terbium: {	
			symbol: "Tb", 
			mass:	65,
			count: 0 
		},
		Thallium: {	
			symbol: "Tl", 
			mass:	81,
			count: 0 
		},
		Thorium: {	
			symbol: "Th", 
			mass:	90,
			count: 0 
		},
		Thulium: {	
			symbol: "Tm", 
			mass:	69,
			count: 0 
		},
		Tin: {	
			symbol: "Sn", 
			mass:	50,
			count: 0 
		},
		Titanium: {	
			symbol: "Ti", 
			mass:	22,
			count: 0 
		},
		Tungsten: {	
			symbol: "W", 
			mass:	74,
			count: 0 
		},
		Uranium: {	
			symbol: "U", 
			mass:	92,
			count: 0 
		},
		Vanadium: {	
			symbol: "V", 
			mass:	23,
			count: 0 
		},
		Xenon: {	
			symbol: "Xe", 
			mass:	54,
			count: 0 
		},
		Ytterbium: {	
			symbol: "Yb", 
			mass:	70,
			count: 0 
		},
		Yttrium: {	
			symbol: "Y", 
			mass:	39,
			count: 0 
		},
		Zinc: {	
			symbol: "Zn", 
			mass:	30,
			count: 0 
		},
		Zirconium: {	
			symbol: "Zr", 
			mass:	40,
			count: 0
		}
	},
	compound: {
		water: {
			temp: 0,
			count: 0
		},
		peroxide: {
			temp: 0,
			count: 0
		}
	},
	mass: {
		land: {
			count: 0
		},
		sea: {
			count: 0
		}
	},
    organism: {
    	singleCell: {},
    	multiCell: {},
    	aquatic: {},
        bacterium: {},
        fungi: {},
        fauna: {},
        floral: {}
    },
    beings: {
    	floresiensis: {},
    	habilis: {},
        rudolfensis: {},
        erectus: {},
        ergaster: {},
        erectus_s_s: {},
        denisovan: {},
        antecessor: {},
        heidelbergensis: {},
        heidelbergensis_s_s: {},
        neanderthalensis: {},
        denisova: {},
        sapiens: {},
        illustra: {}
    },
    tech: {
    	stone: {},
    	iron: {},
    	bronze: {},
    	dark: {},
    	industrial: {},
    	atomic: {},
    	post_atomic: {},
    	nano: {},
    	post_nano: {},
    },
    spaceship: {
    	alpha: {},
    	beta: {},
    	theta: {},
    	epsilon: {},
    	omega: {},
    	zeta: {}
    },
    wormholeKey: {
    	sagA: {},
    	sagB: {},
    	metA: {},
    	metB: {},
    	metC: {},
    	jazA: {},
    	jazB: {}
    },
    
};
