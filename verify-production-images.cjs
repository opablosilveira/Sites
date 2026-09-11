const { chromium } = require('@playwright/test');
const fs = require('node:fs');
const sites = ['clinica-integra-itu','cafe-e-prosa-itu','itu-reliquias','vegas-lounge-pub','doce-alice-cosmeticos','dr-renato-gandolfi','dr-marcos-ramos','stop-car-itu'];
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 fs.mkdirSync('../asset-verification',{recursive:true});
 const results = [];
 for (const slug of sites) {
  const page = await browser.newPage({viewport:{width:1440,height:1000}});
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  await page.goto(`https://${slug}.vercel.app/`,{waitUntil:'domcontentloaded'});
  await page.locator('.hero-video video').waitFor({state:'attached'});
  await page.locator('.hero-video video').evaluate(v => v.readyState >= 1 ? undefined : new Promise((resolve, reject) => { const timer=setTimeout(()=>reject(new Error('video metadata timeout')),20000); v.addEventListener('loadedmetadata',()=>{clearTimeout(timer);resolve()}, {once:true}); }));
  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.evaluate(async()=>{await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
  const images=await page.locator('img').evaluateAll(imgs=>imgs.map(i=>({src:i.getAttribute('src'),width:i.naturalWidth,ok:i.complete&&i.naturalWidth>0})));
  const video=await page.locator('.hero-video video').evaluate(v=>({src:v.querySelector('source')?.getAttribute('src'),readyState:v.readyState,duration:v.duration,poster:v.getAttribute('poster')}));
  const favicon=await page.locator('link[rel="icon"]').getAttribute('href');
  const response=await page.request.get(new URL(favicon,page.url()).href);
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:`../asset-verification/${slug}-desktop.png`,fullPage:true});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:`../asset-verification/${slug}-mobile.png`,fullPage:true});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  const contactImage=images.find(i=>i.src?.startsWith('/images/photo-'));
  const ok=images.length>=3&&images.every(i=>i.ok&&i.src.startsWith('/images/'))&&video.src==='/media/hero-vsl.mp4'&&video.readyState>=1&&video.duration>0&&video.poster!==contactImage?.src&&response.ok()&&response.headers()['content-type'].includes('image/')&&!overflow&&!errors.length;
  const result={slug,ok,images,video,favicon,status:response.status(),overflow,errors}; results.push(result); console.log(JSON.stringify(result));
  await page.close();
 }
 await browser.close(); fs.writeFileSync('../asset-verification/results.json',JSON.stringify(results,null,2));
 if(results.some(r=>!r.ok))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
