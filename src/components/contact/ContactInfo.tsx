import Image from 'next/image';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Adresse */}
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <Image
              src="/images/icons/location.svg"
              alt="Adresse"
              width={24}
              height={24}
              className="invert brightness-0"
            />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Notre Adresse</h3>
          <p className="mt-2 text-base text-gray-600">
            565 23e Avenue<br />
            Lachine, Québec<br />
            H8S 3V3
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <Image
              src="/images/icons/email.svg"
              alt="Email"
              width={24}
              height={24}
              className="invert brightness-0"
            />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-2 text-base text-gray-600">
            contact@nextgen-it.com
          </p>
        </div>
      </div>

      {/* Téléphone */}
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            <Image
              src="/images/icons/phone.svg"
              alt="Téléphone"
              width={24}
              height={24}
              className="invert brightness-0"
            />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
          <p className="mt-2 text-base text-gray-600">
            (514) 555-0123
          </p>
        </div>
      </div>
    </div>
  );
}
