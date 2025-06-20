import React from 'react';

const ProfileOptimization = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <img src="/icon-user.svg" alt="" className="w-8 h-8" />
          <span>Profil-Optimierung</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Unsere KI bietet Optimierungsvorschläge für Kandidatenprofile in Sekunden,
            indem sie fehlende Informationen im Lebenslauf aufzeigt und konkrete
            Verbesserungsvorschläge macht, damit Ihr Kandidat optimal beim Kunden ankommt.
          </p>

          <img
            src="/3B8A0AE3-7A0B-4786-B2D9-25089CA32330.png"
            alt="Profil Optimierung"
            className="w-full max-w-md mx-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileOptimization;
