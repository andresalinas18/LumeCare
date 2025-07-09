// components/WhyCaliContent.jsx
export default function WhyCaliContent() {
  return (
    <section className="relative bg-[var(--color-background)] text-black px-6 md:px-16 py-20">
      {/* Texto sticky */}
      <div className="sticky top-0 z-20 py-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          WHY CALI?
        </h2>
      </div>

      {/* Contenido debajo */}
      <div className="mt-12 max-w-4xl mx-auto space-y-10 text-lg leading-relaxed">
        <p>
          Cali es una ciudad vibrante en el suroeste de Colombia conocida por su clima cálido, cultura acogedora y precios accesibles en procedimientos médicos y estéticos.
        </p>
        <p>
          Es reconocida por tener profesionales altamente calificados, clínicas modernas y una gran oferta turística para acompañantes o tiempo de recuperación.
        </p>
        <p>
          Gracias a su ubicación, Cali ofrece fácil acceso aéreo, estadías económicas y experiencias únicas como la salsa, la gastronomía local y el turismo de bienestar.
        </p>
        <p>
          Además, nuestros pacientes disfrutan de atención personalizada desde su llegada hasta su regreso, asegurando una experiencia segura, cómoda y transformadora.
        </p>
      </div>
    </section>
  );
}