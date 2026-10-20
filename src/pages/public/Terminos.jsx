import { Link, useLocation } from 'react-router-dom';
import '../../styles/public/Legal.css';

// Contenido estático: va dentro del código, así que la PWA lo guarda
// al instalarse y se puede leer sin conexión.
const ACTUALIZACION = 'octubre de 2026';

const SECCIONES = [
  {
    titulo: '1. Aceptación de los términos',
    parrafos: [
      'Al navegar por este sitio, crear una cuenta o realizar un pedido en Nova Graf aceptas estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos no utilizar el sitio.',
    ],
  },
  {
    titulo: '2. Tu cuenta',
    parrafos: [
      'Para hacer pedidos necesitas una cuenta. Te comprometes a proporcionar información veraz y actualizada, y a mantener la confidencialidad de tu contraseña. Eres responsable de la actividad realizada desde tu cuenta.',
    ],
  },
  {
    titulo: '3. Productos, precios y disponibilidad',
    parrafos: [
      'Los productos, imágenes y precios mostrados en el catálogo pueden cambiar sin previo aviso. Hacemos lo posible por mantenerlos actualizados, pero pueden existir diferencias entre las imágenes de referencia y el resultado final, sobre todo en productos personalizados.',
    ],
  },
  {
    titulo: '4. Pedidos y pagos',
    parrafos: [
      'Al finalizar la compra se crea tu pedido y se te indica el método de pago elegido. El pago se divide en dos partes: un anticipo del 50 % del total para dar inicio al pedido y un saldo restante del 50 % que se liquida en la etapa de pago final de tu pedido.',
      'Algunos métodos de pago requieren que subas un comprobante. El pedido avanza una vez que verificamos el pago correspondiente.',
    ],
  },
  {
    titulo: '5. Diseños personalizados',
    parrafos: [
      'Si subes o creas un diseño, declaras que tienes derecho a usar las imágenes, logotipos, textos y demás elementos que incluyas, y que no infringen derechos de terceros ni la ley.',
      'Antes de producir te compartimos vistas previas del diseño. La producción comienza cuando las apruebas, por lo que te pedimos revisar con cuidado textos, ortografía, colores y medidas. Nova Graf no se hace responsable de errores presentes en un diseño que ya fue aprobado.',
      'Podemos rechazar diseños con contenido ilegal, ofensivo o protegido por derechos de autor que no te pertenezcan.',
    ],
  },
  {
    titulo: '6. Entregas',
    parrafos: [
      'Puedes elegir entre recoger tu pedido en tienda, recibirlo en un punto de encuentro o solicitar envío a domicilio, según las opciones disponibles al finalizar tu compra. El costo de cada opción se muestra antes de confirmar el pedido.',
      'Los tiempos de entrega son estimados y pueden variar según el tipo de producto y la carga de trabajo. Eres responsable de proporcionar una dirección correcta y completa.',
    ],
  },
  {
    titulo: '7. Cancelaciones, cambios y devoluciones',
    parrafos: [
      'Como los productos se elaboran a pedido, las solicitudes de cancelación o cambio se evalúan según el avance de tu pedido. Si recibes un producto con defectos de fabricación, contáctanos para que lo revisemos.',
    ],
  },
  {
    titulo: '8. Propiedad intelectual',
    parrafos: [
      'El nombre, el logotipo, los textos y el diseño de este sitio pertenecen a Nova Graf y no pueden usarse sin autorización. Los diseños que subas siguen siendo tuyos; nos autorizas únicamente a utilizarlos para elaborar tu pedido.',
    ],
  },
  {
    titulo: '9. Disponibilidad del sitio',
    parrafos: [
      'Procuramos que el sitio esté disponible de forma continua, pero no garantizamos que funcione sin interrupciones. Algunas secciones pueden consultarse sin conexión gracias a la versión instalable de la aplicación, pero para crear pedidos, iniciar sesión o pagar necesitas conexión a internet.',
    ],
  },
  {
    titulo: '10. Cambios a estos términos',
    parrafos: [
      'Podemos actualizar estos términos cuando sea necesario. La fecha de la última actualización aparece al inicio de esta página y el uso del sitio después de un cambio implica que lo aceptas.',
    ],
  },
];

export default function Terminos() {
  const { pathname } = useLocation();
  const esCliente = pathname.startsWith('/cliente');

  return (
    <div className="legal-page">
      <h1>Términos y Condiciones</h1>
      <p className="legal-fecha">Última actualización: {ACTUALIZACION}</p>

      {SECCIONES.map((s) => (
        <section key={s.titulo}>
          <h2>{s.titulo}</h2>
          {s.parrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}

      <p>
        Si tienes dudas sobre estos términos, visita nuestra sección de{' '}
        <Link to="/contactos">Contactos</Link>.
      </p>

      <div className="legal-links">
        <Link to={esCliente ? '/cliente/privacidad' : '/privacidad'}>Política de privacidad</Link>
        <Link to={esCliente ? '/cliente/home' : '/'}>Volver al inicio</Link>
      </div>
    </div>
  );
}
