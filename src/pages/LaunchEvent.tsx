import React from 'react';

export default function LaunchEvent() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mt-12 mb-6">Treffen Sie uns beim Sommerfest: PLACED Spritz-Bar</h2>
      <p className="mb-8">
        Im Rahmen des Sommerfests laden wir Sie herzlich an unsere gesponserte PLACED Spritz-Bar ein. Ab 18:30 Uhr können Sie in entspannter Atmosphäre kostenlose Spritz-Getränke genießen und die Gelegenheit für einen produktiven Austausch nutzen. Erfahren Sie mehr über unsere Plattform, vernetzen Sie sich mit Branchenkollegen und lassen Sie den Abend gemeinsam ausklingen.
      </p>
      <img
        src="/GVPPlaced.png"
        alt="Logo GVP"
        className="w-full max-w-full mx-auto block mb-12"
        loading="lazy"
      />
      {/* ...rest of your content... */}
    </div>
  );
} 