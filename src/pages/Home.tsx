import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenue chez Next Gen IT</h1>
        <p className="text-lg mb-4">
          Votre partenaire de confiance pour la transformation digitale
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;