const fs = require('fs');
import {screen, getByRole, getAllByRole} from '@testing-library/dom'

beforeEach(() => {
  const fileContent = fs.readFileSync('src/index.html', 'utf8');
  const cssContent = fs.readFileSync('src/css/estilo.css', 'utf-8')

  const style = document.createElement("style")
  style.innerHTML = cssContent

  document.head.appendChild(style)
  document.body.innerHTML = fileContent
});

afterEach(() => {
  // cleanup on exiting
   document.body.innerHTML = ""
   document.head.innerHTML = ""
});



test("A família de fontes da página inteira como 'Helvetica, Arial, sans-serif'", () => {
  let style =  window.getComputedStyle(document.body);
  expect(style.fontFamily).toBe("Helvetica, Arial, sans-serif");
})

test('A cor de fundo do cabeçalho (header) deve ser #1282A2', () => {
  const item = screen.getByRole("banner");
  const style =  window.getComputedStyle(item);
  expect(style.backgroundColor).toBe('rgb(18, 130, 162)');
})

test('A cor da fonte dos links de navegação devem ser #FEFCFB', () => {
  const nav = screen.getByRole("navigation");
  const list = getAllByRole(nav, "link");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.color).toBe('rgb(254, 252, 251)');
  }
})

test('A cor da fonte dos títulos das seções devem ser #001F54', () => {
  const levels = [1, 2]
  for (const level of levels) {
    const list = screen.getAllByRole("heading", { level });
    for (let item of list) {
      const styles =  window.getComputedStyle(item);
      expect(styles.color).toBe('rgb(0, 31, 84)');
    }
  }
})


test('O tamanho da fonte das datas dos artigos deve ser de 14px', () => {
  const list = document.querySelectorAll("article p.date")
  for (let item of list) {      
    const styles =  window.getComputedStyle(item);
    expect(styles.fontSize).toBe('14px');
  }
})

test('O estilo da fonte das datas dos artigos deve ser de itálico', () => {
  const list = document.querySelectorAll("article p.date")
  for (let item of list) {      
    const styles =  window.getComputedStyle(item);
    expect(styles.fontStyle).toBe('italic');
  }
})

test('A cor da fonte das datas dos artigos deve ser #034078', () => {
  const list = document.querySelectorAll("article p.date")
  for (let item of list) {      
    const styles =  window.getComputedStyle(item);
    expect(styles.color).toBe('rgb(3, 64, 120)');
  }
})

test('A cor do plano de fundo os itens ímpares da lista da seção Artigos em destaque devem ser na cor #B0E3F1', () => {
  const list = document.querySelectorAll("#destaques > ul >li:nth-child(2n + 1)")
  for (let item of list) {      
    const styles =  window.getComputedStyle(item);
    expect(styles.backgroundColor).toBe('rgb(176, 227, 241)');
  }
})

test('A cor da fonte dos links localizados dentro de um h3 devem ser #034078', () => {
  const h3s = screen.getAllByRole("heading", { level: 3 });
  for (const h3 of h3s) {
    const item = getByRole(h3, "link");
    const styles =  window.getComputedStyle(item);
    expect(styles.color).toBe('rgb(18, 130, 162)');
  }
})