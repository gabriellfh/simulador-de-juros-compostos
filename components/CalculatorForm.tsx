
import React from 'react';
import { CalculatorInputs } from '../types';
import { maskCurrencyBRL } from '../utils/calculations';

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  setInputs: React.Dispatch<React.SetStateAction<CalculatorInputs>>;
  onCalculate: () => void;
  onClear: () => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ inputs, setInputs, onCalculate, onClear }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'initialValue' || name === 'monthlyValue') {
      // Aplica a máscara automática ao digitar
      setInputs(prev => ({
        ...prev,
        [name]: maskCurrencyBRL(value)
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center md:text-left">Simulador de Juros Compostos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Valor Inicial */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Valor inicial</label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 bg-white">
            <span className="inline-flex items-center px-4 bg-gray-50 text-gray-500 text-sm border-r border-gray-300 font-medium">
              R$
            </span>
            <input
              type="text"
              inputMode="numeric"
              name="initialValue"
              value={inputs.initialValue}
              onChange={handleChange}
              className="flex-1 block w-full p-3 text-lg bg-white text-gray-900 border-none focus:outline-none placeholder-gray-400"
              placeholder="0,00"
            />
          </div>
        </div>

        {/* Valor Mensal */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Valor mensal</label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 bg-white">
            <span className="inline-flex items-center px-4 bg-gray-50 text-gray-500 text-sm border-r border-gray-300 font-medium">
              R$
            </span>
            <input
              type="text"
              inputMode="numeric"
              name="monthlyValue"
              value={inputs.monthlyValue}
              onChange={handleChange}
              className="flex-1 block w-full p-3 text-lg bg-white text-gray-900 border-none focus:outline-none placeholder-gray-400"
              placeholder="0,00"
            />
          </div>
        </div>

        {/* Taxa de Juros */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Taxa de juros</label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 bg-white">
            <span className="inline-flex items-center px-4 bg-gray-50 text-gray-500 text-sm border-r border-gray-300 font-medium">
              %
            </span>
            <input
              type="text"
              inputMode="decimal"
              name="interestRate"
              value={inputs.interestRate}
              onChange={handleChange}
              className="flex-1 block w-full p-3 text-lg bg-white text-gray-900 border-none focus:outline-none placeholder-gray-400"
              placeholder="0"
            />
            <select
              name="rateType"
              value={inputs.rateType}
              onChange={handleChange}
              className="px-3 bg-gray-50 text-gray-700 text-sm border-l border-gray-300 focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <option value="monthly">mensal</option>
              <option value="annual">anual</option>
            </select>
          </div>
        </div>

        {/* Período */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Período</label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 bg-white">
            <input
              type="text"
              inputMode="numeric"
              name="period"
              value={inputs.period}
              onChange={handleChange}
              className="flex-1 block w-full p-3 text-lg bg-white text-gray-900 border-none focus:outline-none placeholder-gray-400"
              placeholder="0"
            />
            <select
              name="periodType"
              value={inputs.periodType}
              onChange={handleChange}
              className="px-3 bg-gray-50 text-gray-700 text-sm border-l border-gray-300 focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <option value="months">meses</option>
              <option value="years">anos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          onClick={onCalculate}
          className="w-full md:w-auto px-12 py-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-all shadow-lg active:transform active:scale-95 text-lg"
        >
          Calcular
        </button>
        
        <div className="flex gap-4">
          <button 
            onClick={onClear}
            className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors p-2"
          >
            Limpar tudo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
