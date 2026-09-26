## Descrição

Neste exercício, você irá criar uma página web que exibe uma galeria de imagens que deverá ser estilizado.

O objetivo deste exercício é praticar o uso de seletores CSS pseudo-classes.

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/index.html -> quando for necessário alterar HTML
* src/css/estilo.css -> quando for necessário alterar CSS
* src/js/script.js -> quando for necessário alterar JavaScript

## Instruções:

 1. O arquivo **index.html** possui o código a seguir:

```html
<h1>My Gallery</h1>

<section id="gallery">
  <figure>
    <img src="https://images.unsplash.com/photo-1678662542431-935d32c2aae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Foto do Lago del Mis, Sospirolo, BL, Italia">
    <figcaption>Lago del Mis, Sospirolo, BL, Italia</figcaption>
    <a href="https://images.unsplash.com/photo-1678662542431-935d32c2aae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">View full size</a>
  </figure>
  <figure>
    <img src="https://images.unsplash.com/photo-1678319167262-cdb624958576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="Foto das montanhas totalmente cobertas por gelo em Intyamon, Rossinière, Switzerland">
    <figcaption>Intyamon, Rossinière, Switzerland</figcaption>
    <a href="https://images.unsplash.com/photo-1678319167262-cdb624958576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80">View full size</a>
  </figure>
  <figure>
    <img src="https://images.unsplash.com/photo-1661107564401-57497d8fe86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="Foto um lago próximo uma estrada em Melchsee Frutt, Kerns, Switzerland">
    <figcaption>Melchsee Frutt, Kerns, Switzerland</figcaption>
    <a href="https://images.unsplash.com/photo-1661107564401-57497d8fe86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80">View full size</a>
  </figure>
</section>

<p> Fiquem a vontade para nos enviar a sua foto por meio do <a href="mailto:meu@emai.com">nosso endereço eletrônico</a>
</p>
  
```


1. Posicione o título principal de foram centralizada horizontalmente
1. Altere a cor da fonte do título principal para *#043a83*, utilize a font-family cursive
1. Altere a cor do plano de fundo da página inteitra para *azure*
1. Altere a fonte das legendas da imagem para que tenham o tamanho de *1.2em* e para que elas fiquem em *negrito* e cor #043a83
1. Altere a cor dos links que vem logo após uma imagem de para *#007bff* e faça com que eles apareça sem o sublinhado
1. Altere a cor e o estilo do link "View full size" quando o mouse passa por cima dele para *rgb(150, 140, 243)*
1. As imagens da galeria deve possuir borda sólida de com branca com 15px de largura e arrendonda em *15 pixels*
1. As imagens devem ocupar 100% da largura da tela e deve ter o plano de fundo na cor branca
1. Adicione um efeito de sombreamento na cor #9FA3A0 às imagens na galeria de 2 pixels nos eixos x e y, com 15 pixels de blur e 0px de espalhamento* em cada lado
1. Quando o mouse passar sobre uma imagem e aumento o brilho da imagem em 20%
1. Adicione o emoji 📷 antes da primeira letra da legenda das imagens sem alterar o código HTML.

## Recomendações

**Certifique-se de validar seu código HTML usando um validador como o [W3C Markup Validation Service](https://validator.w3.org/), para garantir que seu código esteja sem erros e bem formado**.

**Experimente validar o seu código CSS em sites como:**

- <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS validation Service</a>
- <a href="https://beautifytools.com/css-validator.php" hreflang="en" target="_blank">Beatifytools CSS validator</a>
