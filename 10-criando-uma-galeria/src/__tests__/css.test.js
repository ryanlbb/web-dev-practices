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



test("O título principal deve estar centralizado horizontalmente", () => {
  const item = screen.getByRole("heading", { level: 1 });
  let style =  window.getComputedStyle(item);
  expect(style.textAlign).toBe("center");
})

test("O título principal deve usar uma fonte cursiva e deve estar na cor #043a83", () => {
  const item = screen.getByRole("heading", { level: 1 });
  let style =  window.getComputedStyle(item);
  expect(style.fontFamily).toBe("cursive");
  expect(style.color).toBe("rgb(4, 58, 131)");
})

test("A cor do plano de fundo da página inteira para azure", () => {
  let style =  window.getComputedStyle(document.body);
  expect(style.backgroundColor).toBe("azure");
})

test("A fonte das legendas da imagem devem ter o tamanho de 1.2em, a cor #1c3072 e devem estar em negrito", () => {
  const captions = [
    screen.getByText("Lago del Mis, Sospirolo, BL, Italia"),
    screen.getByText("Intyamon, Rossinière, Switzerland"),
    screen.getByText("Melchsee Frutt, Kerns, Switzerland")
  ]
  for (const item of captions) {
    let style =  window.getComputedStyle(item);
    expect(style.fontSize).toBe("1.2em");
    expect(style.fontWeight).toBe("bold");
    expect(style.color).toBe("rgb(4, 58, 131)");
  }
})

test('A cor da fonte dos links "View full size" devem ter cor rgb(150, 140, 243) ', () => {
  const list = screen.getAllByText("View full size");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.color).toBe('rgb(150, 140, 243)');
  }
})

test('As imagens da galeria deve possuir borda sólida de com branca com 15px de largura e arrendonda em 15 pixels', () => {
  const list = screen.getAllByRole("figure");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.borderRadius).toBe('15px');
    expect(styles.borderWidth).toBe('15px');
    expect(styles.borderStyle).toBe('solid');
    expect(styles.borderColor).toBe('white');
  }
})

test('As imagens devem ocupar 100% da largura da tela e deve ter o plano de fundo na cor branca', () => {
  let list = screen.getAllByRole("img");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.width).toBe('100%');
  }

  list = screen.getAllByRole("figure");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.backgroundColor).toBe('white');
  }
})

test('As imagens da galeria deve um sombreamento em ambos os eixos de 2 pixels, com blur de 15 pixels e espalhamento de 0 pixel', () => {
  const list = screen.getAllByRole("figure");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.boxShadow).toBe('5px 5px 15px 0 #9FA3A0');
  }
})


test('O brilho das imagens devem ser aumentos em 20% quando o curso do mouse for posto sobre elas', () => {
  let list = screen.getAllByRole("img");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.filter).toBe('brightness(1.2)');
  }
})

