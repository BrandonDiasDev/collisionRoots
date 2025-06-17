import { loadSection } from './utils/dom.js'
import { navigation } from './utils/navigation.js';


// Mapeando carregamento de scripts

const sectionScripts = {
    'menu': () => import('js/src/menu.js'),
    'cena01': () => import('js/src/cena01.js'),
};

// inicia o jogo

navigation.navigateTo("menu");




