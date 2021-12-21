// 開啟連結
liff.openWindow({
    // uri：要開啟的網址
    url: uri,
  
    // external：
    // 是否要用外部瀏覽器打開，這在 LINE APP 下開頁面時會比較有感
    // 一般我們在 LINE 上開連結，都會是在 LINE 的框架下，external 設為 true，就可以直接用瀏覽器開啟而不是在 LINE 的框架下開啟
    // 預設值是 false
    external: true
  })