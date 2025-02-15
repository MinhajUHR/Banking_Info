import React, { useState } from 'react';
import { Search, Building2, ArrowRight, Info, UserPlus, Shield, X, Filter, GraduationCap, Globe } from 'lucide-react';
import { banks } from './data/banks';
import type { Bank } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterKeywords = [
    { label: 'All Banks', value: null },
    { label: 'Student Accounts', value: 'student', icon: GraduationCap },
    { label: 'International Services', value: 'international', icon: Globe },
    { label: 'Digital Banking', value: 'digital' },
    { label: 'Islamic Banking', value: 'islamic' },
    { label: 'SME Focus', value: 'sme' },
  ];

  const filteredBanks = banks.filter(bank => {
    const matchesSearch = bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (!activeFilter) return matchesSearch;

    const filterMatches = {
      student: bank.services.studentAccount,
      international: bank.services.internationalServices,
      digital: bank.services.digitalBanking,
      islamic: bank.services.islamicBanking,
      sme: bank.services.smeFocus,
    };

    return matchesSearch && filterMatches[activeFilter as keyof typeof filterMatches];
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2070")',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Bangladesh's Banking Sector
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore and compare all private and public banks in Bangladesh
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a bank by name or description..."
              className="w-full py-4 px-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Filter Keywords Section */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 overflow-x-auto pb-4">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {filterKeywords.map((filter) => (
              <button
                key={filter.value ?? 'all'}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors inline-flex items-center ${
                  activeFilter === filter.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
                {filter.label}
                {filter.value && (
                  <span className="ml-2 bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                    {banks.filter(bank => 
                      filter.value === 'student' ? bank.services.studentAccount :
                      filter.value === 'international' ? bank.services.internationalServices :
                      filter.value === 'digital' ? bank.services.digitalBanking :
                      filter.value === 'islamic' ? bank.services.islamicBanking :
                      filter.value === 'sme' ? bank.services.smeFocus : true
                    ).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Banking Portal?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <Info className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Information</h3>
              <p className="text-gray-600">Detailed insights about all banks in Bangladesh</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <UserPlus className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Account Opening Guide</h3>
              <p className="text-gray-600">Step-by-step process for opening accounts</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Trusted Information</h3>
              <p className="text-gray-600">Direct links to official bank websites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Private Commercial Banks</h2>
            <p className="text-gray-600">
              Showing {filteredBanks.length} of {banks.length} banks
            </p>
          </div>
        </div>
      </section>

      {/* Bank cards section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBanks.map((bank: Bank) => (
              <div key={bank.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${bank.image})` }} />
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{bank.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{bank.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {bank.services.studentAccount && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <GraduationCap className="w-3 h-3 mr-1" />
                            Student Account
                          </span>
                        )}
                        {bank.services.internationalServices && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Globe className="w-3 h-3 mr-1" />
                            International Services
                          </span>
                        )}
                      </div>
                    </div>
                    <Building2 className="text-blue-600" />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        setSelectedBank(bank);
                        setShowModal(true);
                      }}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Account Opening
                    </button>
                    <a 
                      href={bank.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Opening Steps Modal */}
      {showModal && selectedBank && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedBank.name}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Account Opening Process</h3>
              <ol className="space-y-4">
                {selectedBank.accountOpeningSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 mt-1">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Required Documents</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Valid Photo ID (National ID/Passport)</li>
                  <li>Proof of Address (Utility Bill/Rental Agreement)</li>
                  <li>Recent Passport-size Photographs</li>
                  <li>TIN Certificate (if applicable)</li>
                  <li>Initial Deposit Amount</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={selectedBank.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Official Website
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;