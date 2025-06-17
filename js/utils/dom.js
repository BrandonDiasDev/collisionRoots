export async function loadSection(path) {
    path = 'html/' + path;
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById('raizes-app').innerHTML = html;
}