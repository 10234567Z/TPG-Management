import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import ShortEmailForm from "../components/Forms/shortForm"; // Import the form
import hoaData from "../../data/hoa.json";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Multifamily and Investment Property Management',
  description: 'Transparent pricing and fee structure for our property management services. View our competitive rates and comprehensive management packages.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 p-4 pb-0">
      <section
        className="relative w-screen p-16 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'url(/introImg.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gray-200/10 z-[-10]"
          aria-hidden="true"
        />

        <div className="flex gap-1 flex-col items-center">
          <Header>HOA Property Management</Header>
          <h4 className="mb-4 text-blue-900 text-xl font-bold" >Dedicated HOA Property Management & Maintenance Professionals</h4>
          <div className="flex flex-col sm:flex-row gap-4">
          </div>
        </div>
      </section>

      {/* Multifamily Features Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-[#003474] mb-8">
          Why Choose TPG Management for HOA & Condo Association Management?
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hoaData.hoa.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <h3 className="text-2xl font-semibold text-[#003474]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Short Form Section */}
          <div className="flex items-center justify-center">
            <ShortEmailForm />
          </div>
        </div>
      </section>
    </main>
  );
}
