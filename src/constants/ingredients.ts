import type { UnitOfMeasureDefinitions } from 'parse-ingredient';

export const germanUnits: UnitOfMeasureDefinitions = {
  // Volume - Metric
  liter: {
    short: 'l',
    plural: 'liter',
    alternates: ['lt', 'ltr'],
  },
  milliliter: {
    short: 'ml',
    plural: 'milliliter',
    alternates: [],
  },

  // Weight - Metric
  kilogramm: {
    short: 'kg',
    plural: 'kilogramm',
    alternates: ['kilo'],
  },
  gramm: {
    short: 'g',
    plural: 'gramm',
    alternates: ['gr'],
  },
  milligramm: {
    short: 'mg',
    plural: 'milligramm',
    alternates: [],
  },

  // Common cooking measures - German
  esslöffel: {
    short: 'el',
    plural: 'esslöffel',
    alternates: ['essl', 'eßlöffel', 'esslöffel', 'EL'],
  },
  teelöffel: {
    short: 'tl',
    plural: 'teelöffel',
    alternates: ['teel', 'TL'],
  },
  messerspitze: {
    short: 'msp',
    plural: 'messerspitzen',
    alternates: ['messerspitze'],
  },
  prise: {
    short: 'prise',
    plural: 'prisen',
    alternates: [],
  },

  // Traditional German measures
  pfund: {
    short: 'pfd',
    plural: 'pfund',
    alternates: ['℔'],
  },

  // Containers/Packages
  dose: {
    short: 'dose',
    plural: 'dosen',
    alternates: [],
  },
  packung: {
    short: 'pkg',
    plural: 'packungen',
    alternates: ['pack', 'pckg', 'pck'],
  },
  päckchen: {
    short: 'pck',
    plural: 'päckchen',
    alternates: ['paeckchen'],
  },
  beutel: {
    short: 'btl',
    plural: 'beutel',
    alternates: [],
  },
  becher: {
    short: 'becher',
    plural: 'becher',
    alternates: [],
  },
  glas: {
    short: 'glas',
    plural: 'gläser',
    alternates: ['glaeser'],
  },
  flasche: {
    short: 'fl',
    plural: 'flaschen',
    alternates: [],
  },
  tube: {
    short: 'tube',
    plural: 'tuben',
    alternates: [],
  },

  // Pieces/Quantities
  stück: {
    short: 'stk',
    plural: 'stück',
    alternates: ['stueck', 'st'],
  },
  zehe: {
    short: 'zehe',
    plural: 'zehen',
    alternates: [],
  },
  bund: {
    short: 'bund',
    plural: 'bunde',
    alternates: ['bd'],
  },
  zweig: {
    short: 'zweig',
    plural: 'zweige',
    alternates: [],
  },
  stange: {
    short: 'stg',
    plural: 'stangen',
    alternates: [],
  },
  scheibe: {
    short: 'sch',
    plural: 'scheiben',
    alternates: [],
  },

  // Cooking-specific
  tasse: {
    short: 'tasse',
    plural: 'tassen',
    alternates: [],
  },

  // Special measures
  etwas: {
    short: 'etwas',
    plural: 'etwas',
    alternates: ['etw'],
  },
  nach_geschmack: {
    short: 'n. g.',
    plural: 'nach geschmack',
    alternates: ['nach belieben', 'n.b.', 'n. b.'],
  },
};

/**
 * Ingredient aliases for normalization (German)
 * Key: canonical ingredient name (lowercase)
 * Value: array of variations/aliases (lowercase)
 */
export const ingredientAliases: Record<string, string[]> = {
  // Tomaten
  'tomate': ['tomaten', 'cherrytomate', 'cherrytomaten', 'cocktailtomate', 'cocktailtomaten', 'romatomate', 'romatomaten', 'strauchtomaten', 'tomatenmark', 'gehackte tomaten', 'geschälte tomaten', 'dosentomaten', 'passierte tomaten', 'stückige tomaten'],

  // Hähnchen/Geflügel
  'hähnchen': ['hühnchen', 'hähnchenbrust', 'hähnchenbrustfilet', 'hähnchenschenkel', 'hähnchenkeule', 'hähnchenkeulen', 'hähnchenflügel', 'chicken'],
  'pute': ['putenbrust', 'putenbrustfilet', 'putenschnitzel'],

  // Mehl
  'mehl': ['weizenmehl', 'typ 405', 'typ 550', 'typ 1050', 'allzweckmehl', 'universalmehl'],
  'vollkornmehl': ['weizenvollkornmehl', 'vollkorn weizenmehl'],
  'dinkelmehl': ['dinkel', 'typ 630 dinkel'],

  // Butter & Fette
  'butter': ['süßrahmbutter', 'sauerrahmbutter', 'weiche butter', 'geschmolzene butter', 'kalte butter'],
  'öl': ['speiseöl', 'pflanzenöl', 'rapsöl', 'sonnenblumenöl'],
  'olivenöl': ['natives olivenöl', 'extra natives olivenöl', 'kaltgepresstes olivenöl'],

  // Zucker
  'zucker': ['kristallzucker', 'weißer zucker', 'weisser zucker', 'raffinadezucker'],
  'brauner zucker': ['rohrzucker', 'rohrohrzucker', 'vollrohrzucker', 'braunzucker'],
  'puderzucker': ['staubzucker', 'puder zucker'],

  // Zwiebeln
  'zwiebel': ['zwiebeln', 'gemüsezwiebel', 'gemüsezwiebeln', 'gelbe zwiebel', 'gelbe zwiebeln', 'küchenzwiebel'],
  'rote zwiebel': ['rote zwiebeln', 'redzwiebel', 'redzwiebeln'],
  'frühlingszwiebel': ['frühlingszwiebeln', 'lauchzwiebel', 'lauchzwiebeln', 'bundzwiebel', 'bundzwiebeln'],
  'schalotte': ['schalotten', 'edelzwiebel', 'edelzwiebeln'],

  // Knoblauch
  'knoblauch': ['knoblauchzehe', 'knoblauchzehen', 'gehackter knoblauch', 'gepresster knoblauch', 'knoblauchpulver'],

  // Paprika
  'paprika': ['paprikaschote', 'paprikaschoten', 'gemüsepaprika'],
  'rote paprika': ['roter paprika', 'rote paprikaschote'],
  'gelbe paprika': ['gelber paprika', 'gelbe paprikaschote'],
  'grüne paprika': ['grüner paprika', 'grüne paprikaschote'],

  // Chilis
  'chili': ['chilis', 'chilischote', 'chilischoten', 'peperoni', 'peperoncini'],
  'jalapeño': ['jalapeno', 'jalapeños', 'jalapenos'],

  // Milchprodukte
  'milch': ['vollmilch', 'frische milch', 'h-milch', 'fettarme milch'],
  'sahne': ['schlagsahne', 'süße sahne', 'süsse sahne', 'saure sahne', 'schmand'],
  'käse': ['reibekäse', 'geriebener käse', 'hartkäse', 'schnittkäse'],
  'parmesan': ['parmesankäse', 'parmeggiano', 'geriebener parmesan'],
  'mozzarella': ['büffelmozzarella', 'mozzarellakäse'],
  'joghurt': ['naturjoghurt', 'jogurt', 'vollmilchjoghurt', 'griechischer joghurt'],
  'quark': ['magerquark', 'speisequark'],

  // Eier
  'ei': ['eier', 'hühnerei', 'hühnereier', 'vollei'],
  'eigelb': ['eidotter', 'dotter', 'gelb vom ei'],
  'eiweiß': ['eiweiss', 'eiklar', 'weiß vom ei'],

  // Kartoffeln
  'kartoffel': ['kartoffeln', 'erdapfel', 'erdäpfel', 'festkochende kartoffeln', 'mehlige kartoffeln', 'vorwiegend festkochend', 'mehligkochende kartoffeln'],

  // Nudeln
  'nudeln': ['pasta', 'teigwaren', 'spaghetti', 'penne', 'fusilli', 'tagliatelle', 'fettuccine', 'maccheroni'],

  // Reis
  'reis': ['langkornreis', 'rundkornreis', 'basmatireis', 'jasminreis'],

  // Gewürze
  'salz': ['meersalz', 'steinsalz', 'speisesalz', 'jodsalz', 'himalayasalz'],
  'pfeffer': ['schwarzer pfeffer', 'weißer pfeffer', 'weisser pfeffer', 'pfefferkörner', 'gemahlener pfeffer'],
  'paprikapulver': ['edelsüßes paprikapulver', 'rosenpaprika', 'paprika edelsüß'],
  'zimt': ['zimtpulver', 'gemahlener zimt', 'ceylon zimt'],
  'muskatnuss': ['muskat', 'geriebene muskatnuss'],
  'kreuzkümmel': ['cumin', 'kumin'],
  'koriander': ['koriandersamen', 'korianderblätter', 'koriandergrün'],

  // Kräuter
  'petersilie': ['glatte petersilie', 'krause petersilie', 'petersilienblätter'],
  'basilikum': ['basilikumblätter', 'frisches basilikum'],
  'thymian': ['thymianblätter', 'frischer thymian', 'getrockneter thymian'],
  'rosmarin': ['rosmarinnadeln', 'frischer rosmarin'],
  'schnittlauch': ['schnittlauchröllchen'],
  'oregano': ['getrockneter oregano', 'frischer oregano'],

  // Gemüse
  'karotte': ['karotten', 'möhre', 'möhren', 'mohrrübe', 'mohrrüben', 'wurzel', 'wurzeln'],
  'zucchini': ['zucchinis', 'zuchetti'],
  'aubergine': ['auberginen', 'melanzani'],
  'brokkoli': ['brokkoliröschen'],
  'blumenkohl': ['blumenkohlröschen', 'karfiol'],
  'spinat': ['blattspinat', 'frischer spinat', 'tk-spinat', 'tiefkühlspinat'],
  'champignon': ['champignons', 'weiße champignons', 'braune champignons'],

  // Hülsenfrüchte
  'linsen': ['rote linsen', 'grüne linsen', 'belugalinsen', 'berglinsen'],
  'kichererbsen': ['kichererbse', 'chickerbsen'],
  'kidneybohnen': ['rote bohnen', 'kidney bohnen'],
  'erdnuss': ['erdnüsse', 'erdnusskerne'],

  // Brühe/Fonds
  'brühe': ['gemüsebrühe', 'hühnerbrühe', 'rinderbrühe', 'bouillon'],
  'fond': ['gemüsefond', 'hühnerfond', 'rinderfond'],

  // Essig
  'essig': ['weißweinessig', 'rotweinessig', 'apfelessig', 'balsamico', 'aceto balsamico'],

  // Sonstiges
  'senf': ['dijon-senf', 'mittelscharfer senf', 'scharfer senf', 'süßer senf'],
  'honig': ['flüssiger honig', 'blütenhonig'],
  'backpulver': ['back pulver'],
  'natron': ['speisenatron', 'natriumhydrogencarbonat'],
  'hefe': ['frischhefe', 'trockenhefe', 'bierhefe'],
};

/**
 * Normalize an ingredient name using aliases
 */
export function normalizeIngredient(ingredient: string): string {
  const normalized = ingredient.toLowerCase().replaceAll(/\(.*\)/g, '').trim();

  // Check if it matches any canonical name
  if (ingredientAliases[normalized]) {
    return normalized;
  }

  // Check if it's an alias that should map to a canonical name
  for (const [canonical, aliases] of Object.entries(ingredientAliases)) {
    if (aliases.includes(normalized)) {
      return canonical;
    }
  }

  // Return as-is if no match found
  return normalized;
}

/**
 * Check if two ingredient names refer to the same ingredient
 */
export function isSameIngredient(ing1: string, ing2: string): boolean {
  return normalizeIngredient(ing1) === normalizeIngredient(ing2);
}
