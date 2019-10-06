self.addEventListener('install', function (event) {
  console.log("SW INSTALADO!");
});

self.addEventListener('activate', function activator(event) {
  console.log('SW ATIVADO!')
});