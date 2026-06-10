"use client";

const CTA = () => {
  return (
    <section>
      <div className="sm:py-20 py-8">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="w-full h-72 lg:h-96 rounded-2xl overflow-hidden border border-border/50 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.18!2d73.1452395!3d33.5711797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec506ce7e9f1%3A0x950c042b019c6fba!2sSmilex+Printing+Shop!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shop Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
