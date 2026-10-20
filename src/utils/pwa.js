// Llama esto al cerrar sesión para que un siguiente usuario del mismo
// dispositivo no vea datos guardados en caché del anterior.
export async function limpiarCachesPrivados() {
  if ('caches' in window) {
    await caches.delete('api-cache');
  }
}

// Descarga y deja en caché el contenido de las páginas públicas
// para que Quiénes somos y Contactos abran sin conexión.
export function precargarContenido() {
  const API = import.meta.env.VITE_API_URL;
  [
    '/api/public/mision', '/api/public/vision', '/api/public/valores',
    '/api/public/antecedentes', '/api/redes-sociales', '/api/contactos',
    '/api/ubicacion', '/api/empresa',
  ].forEach((ruta) => fetch(`${API}${ruta}`).catch(() => {}));
}
