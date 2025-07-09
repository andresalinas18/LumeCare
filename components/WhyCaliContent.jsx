// components/WhyCaliContent.jsx

import PhotoGallery from './WhyCali/PhotoGallery';
import QuoteSlider from './WhyCali/QuoteSlider';
import Logos from './WhyCali/Logos';


export default function WhyCaliContent() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <PhotoGallery />
        <QuoteSlider />
      </div>
      <div className="mt-16">
        <Logos />
      </div>
    </section>
  );
}