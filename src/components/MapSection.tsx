const MapSection = () => {
  return (
    <section className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.4682999999998!2d12.2167!3d65.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1680a03f32fc95f5!2sT.%20Seljevoll%20Maskinentrepren%C3%B8r!5e0!3m2!1sen!2sno!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-all duration-500"
        title="T. Seljevoll Maskinentreprenør Lokasjon"
      />
    </section>
  );
};

export default MapSection;