const puppeteer = require("puppeteer");
const scrollPageToBottom = require("puppeteer-autoscroll-down");
const $ = require("cheerio");
const CronJob = require("cron").CronJob;

async function amazon(req, res) {
  const url = req.body.url;
  const busqueda = req.body.busqueda;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.amazon.com.mx/");

  // Type into search box.
  await page.type("#twotabsearchtextbox", busqueda);

  await page.click("#nav-search-submit-button");
  await page.waitForTimeout(3000);

  const articulos = await page.evaluate(()=>{
    const $articulos = document.querySelectorAll('.s-result-item s-asin');
    const data = []
    $articulos.forEach(($articulo)=>{
       data.push({
        title: $articulo.querySelector('.a-section a-spacing-none a-spacing-top-small span').textContent.trim(),
        // price: $articulo.querySelector('.price-tag-fraction').textContent.trim(),
        // link:  $articulo.querySelector('.ui-search-result__image a ').href, 
        // imgUrl:  $articulo.querySelector('.ui-search-result__image img ').getAttribute('src'), 
      })

    })

    return data;
 })
 

  await browser.close();
}

async function mercadolibre(req, res) {
  
  const busqueda = req.body;
 

  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.mercadolibre.com.mx/");
  await page.setViewport({
    width: 1200,
    height: 800
});

  // Type into search box.
  await page.type(".nav-search-input", busqueda.buscar);

  await page.click(".nav-search-btn");
  await page.waitForTimeout(1000);
  await scrollPageToBottom(page)

  const articulos = await page.evaluate(()=>{
    const $articulos = document.querySelectorAll('.ui-search-layout__item');
    
    const data = []
    $articulos.forEach(($articulo)=>{
       data.push({
        title: $articulo.querySelector('.ui-search-item__title').textContent.trim(),
        price: $articulo.querySelector('.price-tag-fraction').textContent.trim(),
        link:  $articulo.querySelector('.ui-search-result__image a ').href, 
        imgUrl:  $articulo.querySelector('.ui-search-result__image img ').getAttribute('src'), 
      })

    })

    return data;
 })
  
 

  await browser.close();
  res.status(200).send({ mercado:articulos ,message:"Articulos mercado libre" });

 
}






module.exports = {
  mercadolibre,
  amazon,
};
