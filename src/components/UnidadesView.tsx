import React, { useState } from 'react';
import { UNITS_DATA } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Search, 
  Building2,
  Navigation
} from 'lucide-react';

export const UnidadesView: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredUnits = UNITS_DATA.filter(unit => {
    const matchesState = selectedState === 'todos' || unit.state === selectedState;
    const matchesSearch = 
      unit.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.neighborhood.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Lojas e Pontos de Atendimento
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Nossas <span className="text-red-600">Unidades</span>
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base">
            Encontre a loja ConsigaCred mais próxima de você ou receba atendimento 100% digital em todo o Brasil.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-md flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por cidade, bairro ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
            />
          </div>

          {/* State Filter Buttons */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {['todos', 'PA', 'SP', 'RJ', 'MG'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedState === st
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {st === 'todos' ? 'Todos os Estados' : st}
              </button>
            ))}
          </div>

        </div>

        {/* Units Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <div 
                key={unit.id}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:border-red-200 transition space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-red-50 text-red-600 font-black text-xs rounded-lg uppercase">
                      {unit.state} • {unit.city}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      Loja Aberta
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                    <span>Unidade {unit.city} - {unit.neighborhood}</span>
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {unit.address}
                  </p>

                  <div className="space-y-2 text-xs text-neutral-700 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>Telefone: <strong>{unit.phone}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>WhatsApp: <strong>{unit.whatsapp}</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <span>{unit.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-2">
                  <a
                    href={`https://wa.me/55${unit.whatsapp.replace(/\D/g, '')}?text=Olá!%20Gostaria%20de%20atendimento%20para%20a%20unidade%20de%20${unit.city}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(unit.address + ' ' + unit.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 hover:bg-gray-200 text-neutral-800 rounded-xl transition"
                    title="Ver no Google Maps"
                  >
                    <Navigation className="w-4 h-4 text-red-600" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              Nenhuma unidade encontrada para a busca "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
