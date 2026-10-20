import { Link, useLocation } from 'react-router-dom';
import '../../styles/public/Legal.css';

// Contenido estático: va dentro del código, así que la PWA lo guarda
// al instalarse y se puede leer sin conexión.
const ACTUALIZACION = 'octubre de 2026';

const SECCIONES = [
  {
    titulo: '1. Quiénes somos',
    parrafos: [
      'Nova Graf es un negocio de impresión, personalización y diseño. Esta política explica qué datos personales recopilamos cuando usas este sitio o su versión instalable, para qué los usamos y qué derechos tienes sobre ellos.',
    ],
  },
  {
    titulo: '2. Datos que recopilamos',
    lista: [
      'Datos de tu cuenta: nombre, nombre de usuario, correo electrónico, teléfono, dirección y contraseña.',
      'Si inicias sesión con Google, recibimos tu nombre y correo electrónico.',
      'Datos de tus pedidos: productos, método de entrega y de pago, dirección de envío, comprobantes de pago e historial de compras.',
      'Archivos de diseño: las imágenes y diseños que subes o creas para tus productos personalizados.',
    ],
  },
  {
    titulo: '3. Para qué usamos tus datos',
    lista: [
      'Crear y administrar tu cuenta y verificar tu correo.',
      'Procesar, producir y entregar tus pedidos.',
      'Confirmar pagos y enviarte notificaciones sobre el estado de tu pedido.',
      'Atender tus dudas, solicitudes y aclaraciones.',
      'Mejorar el funcionamiento del sitio.',
    ],
  },
  {
    titulo: '4. Tu ubicación',
    parrafos: [
      'Si usas la opción “Sugerir entrega según mi ubicación”, tu navegador te pide permiso para conocer tu posición. Con ella se calcula en tu propio dispositivo la distancia a nuestra tienda para recomendarte una opción de entrega. No enviamos ni guardamos tu ubicación en nuestros servidores.',
    ],
  },
  {
    titulo: '5. Con quién compartimos tus datos',
    parrafos: [
      'No vendemos tus datos personales. Solo los compartimos con proveedores que nos ayudan a operar el sitio, como los servicios de alojamiento, base de datos y envío de correos, y únicamente para ese fin.',
    ],
  },
  {
    titulo: '6. Datos guardados en tu dispositivo',
    parrafos: [
      'Para mantener tu sesión iniciada y para que algunas secciones públicas (como Quiénes somos y Contactos) puedan consultarse sin conexión, el sitio guarda información en tu navegador. Puedes borrarla en cualquier momento desde la configuración de tu navegador o desinstalando la aplicación.',
    ],
  },
  {
    titulo: '7. Seguridad',
    parrafos: [
      'Aplicamos medidas razonables para proteger tu información. Aun así, ningún sistema es completamente seguro, por lo que te recomendamos usar una contraseña única y no compartirla.',
    ],
  },
  {
    titulo: '8. Tus derechos',
    parrafos: [
      'Puedes solicitar el acceso, la rectificación, la cancelación de tus datos personales o oponerte a su uso (derechos ARCO), así como revocar tu consentimiento. Para ejercerlos, contáctanos desde la sección de Contactos.',
    ],
  },
  {
    titulo: '9. Cambios a esta política',
    parrafos: [
      'Podemos actualizar esta política cuando sea necesario. La fecha de la última actualización aparece al inicio de esta página.',
    ],
  },
];

export default function Politicas() {
  const { pathname } = useLocation();
  const esCliente = pathname.startsWith('/cliente');

  return (
    <div className="legal-page">
      <h1>Política de Privacidad</h1>
      <p className="legal-fecha">Última actualización: {ACTUALIZACION}</p>

      {SECCIONES.map((s) => (
        <section key={s.titulo}>
          <h2>{s.titulo}</h2>
          {s.parrafos?.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.lista && (
            <ul>
              {s.lista.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <p>
        Para cualquier duda sobre tus datos, visita nuestra sección de{' '}
        <Link to="/contactos">Contactos</Link>.
      </p>

      <div className="legal-links">
        <Link to={esCliente ? '/cliente/terminos' : '/terminos'}>Términos y condiciones</Link>
        <Link to={esCliente ? '/cliente/home' : '/'}>Volver al inicio</Link>
      </div>
    </div>
  );
}
