import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo-light.png"
                alt="NextGen IT Solutions"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400">
              Votre partenaire de confiance pour tous vos besoins en solutions informatiques.
              De la maintenance au développement, en passant par le conseil et l'infographie.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#maintenance" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#conseil" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Conseil
                </Link>
              </li>
              <li>
                <Link href="/services#developpement" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Développement
                </Link>
              </li>
              <li>
                <Link href="/services#infographie" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Infographie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Image src="/images/icons/location.svg" alt="Adresse" width={20} height={20} className="invert" />
                <span className="text-gray-400">565 23e Avenue, Lachine, QC</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/images/icons/phone.svg" alt="Téléphone" width={20} height={20} className="invert" />
                <a href="tel:+15144305875" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +1 (514) 430-5875
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/images/icons/email.svg" alt="Email" width={20} height={20} className="invert" />
                <a href="mailto:contact@ng-its.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  contact@ng-its.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Image src="/images/icons/facebook.svg" alt="Facebook" width={24} height={24} className="invert" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Image src="/images/icons/twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {currentYear} NextGen IT Solutions. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;