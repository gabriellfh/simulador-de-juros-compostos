
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CalculationResult, SummaryData } from '../types';
import { formatCurrency } from '../utils/calculations';

interface ResultsSectionProps {
  summary: SummaryData;
  results: CalculationResult[];
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ summary, results }) => {
  // Chart data formatting
  const chartData = results.filter((_, index) => {
    // Show all points if few, or filter for better performance on long periods
    if (results.length <= 24) return true;
    return index % Math.ceil(results.length / 15) === 0 || index === results.length - 1;
  });

  return (
    <div className="mt-12 space-y-10 animate-in fade-in duration-700">
      <h2 className="text-3xl font-bold text-green-700 border-b pb-2 border-green-100">Resultado</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-700 text-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
          <p className="text-xs uppercase tracking-wider font-semibold opacity-90 mb-1 text-center">Valor total final</p>
          <p className="text-3xl font-bold text-center">{formatCurrency(summary.totalFinal)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform hover:scale-105 transition-transform">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1 text-center">Valor total investido</p>
          <p className="text-2xl font-bold text-gray-800 text-center">{formatCurrency(summary.totalInvested)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform hover:scale-105 transition-transform">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1 text-center">Total em juros</p>
          <p className="text-2xl font-bold text-gray-800 text-center">{formatCurrency(summary.totalInterest)}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-green-700 text-center mb-8">Gráfico de Evolução</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                label={{ value: 'Meses', position: 'insideBottom', offset: -5 }} 
              />
              <YAxis 
                tickFormatter={(value) => `R$ ${value >= 1000 ? (value/1000).toFixed(0) + 'k' : value}`}
              />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                labelFormatter={(label) => `Mês ${label}`}
              />
              <Legend verticalAlign="top" align="center" height={36}/>
              <Line 
                type="monotone" 
                dataKey="totalAccumulated" 
                name="Total Acumulado" 
                stroke="#4ade80" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="totalInvested" 
                name="Valor Investido" 
                stroke="#06b6d4" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <h3 className="text-xl font-bold text-green-700 text-center py-4 bg-gray-50 border-b">Tabela de Evolução</h3>
        <div className="overflow-x-auto max-h-[500px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Mês</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Juros</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Investido</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Juros</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Acumulado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((row) => (
                <tr key={row.month} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatCurrency(row.interest)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatCurrency(row.totalInvested)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatCurrency(row.totalInterest)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{formatCurrency(row.totalAccumulated)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
