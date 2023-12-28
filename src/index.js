// React ve ReactDOM/client kütüphanelerini içe aktar
import React from "react";
import ReactDOM from "react-dom/client";

// App bileşenini içe aktar
import App from "./App";

// "root" elementini hedefle ve React uygulamasını oluştur
const root = ReactDOM.createRoot(document.getElementById("root"));

// Uygulamayı "root" elementine render et
root.render(
  // React.StrictMode içinde uygulamayı çalıştır
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
