import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
- [ ] Default olarak hicbir gorsel secilmesin ve bu durumda gorsel secilmedi componenti ekranda gozuksun
- [ ] products icerisinde id, name, imgName, thumbnail, isAvailable(true/false), isActive(false)
- [ ] lorem picsum gorselleri imgName icinde ve thumbnail icinde tutulsun
- [ ] Bolum sonu calismasi v1 layout uygulansin
- [ ] Img Thumbnail altinda sec butonu olsun ve sec dedigimizde isActive true olsun
*/
