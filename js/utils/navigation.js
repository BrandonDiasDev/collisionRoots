import { loadSection } from './dom.js';

export const navigation = {
    navigateTo: async (section) => {
        await loadSection(`${section}.html`);
        const module = await import(`../src/${section}.js`);
        module.init();
    }
};