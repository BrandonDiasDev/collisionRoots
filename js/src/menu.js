import { navigation } from '../utils/navigation.js';

export function init() {
    document.getElementById('btn-new-game').addEventListener('click', () => {
        navigation.navigateTo('cena01');  // Usa a função compartilhada
    });
}