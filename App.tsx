
import React, { useState, useCallback } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsSection from './components/ResultsSection';
import EducationalContent from './components/EducationalContent';
import { CalculatorInputs, CalculationResult, SummaryData } from './types';
import { calculateCompoundInterest, maskCurrencyBRL } from './utils/calculations';

const initialFormState: CalculatorInputs = {
  initialValue: maskCurrencyBRL("100000"), // R$ 1.000,00
  monthlyValue: maskCurrencyBRL("100000"), // R$ 1.000,00
  interestRate: 8,
  rateType: 'annual',
  period: 10,
  periodType: 'years'
};

const App: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialFormState);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<CalculationResult[]>([]);
  const [summary, setSummary] = useState<SummaryData | null>(null);

  const handleCalculate = useCallback(() => {
    const { results, summary } = calculateCompoundInterest(inputs);
    setResults(results);
    setSummary(summary);
    setShowResults(true);

    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results-view')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [inputs]);

  const handleClear = () => {
    setInputs({
      initialValue: '0,00',
      monthlyValue: '0,00',
      interestRate: '',
      rateType: 'annual',
      period: '',
      periodType: 'years'
    });
    setShowResults(false);
    setResults([]);
    setSummary(null);
  };

  return (
    <div className="min-h-screen">
      {/* Header / Navbar */}
      <header className="bg-green-700 text-white py-6 shadow-lg mb-8">
        <div className="container mx-auto px-4 max-w-6xl flex items-center">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-xl font-bold tracking-tight">GHz Invest</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-6xl pb-20">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Simulador de Juros Compostos</h2>
          <p className="text-lg text-gray-600">Planeje seu futuro com precisão matemática. Grátis e sem anúncios.</p>
        </div>

        {/* Main Form Section */}
        <section className="mb-12">
          <CalculatorForm 
            inputs={inputs} 
            setInputs={setInputs} 
            onCalculate={handleCalculate} 
            onClear={handleClear} 
          />
        </section>

        {/* Results View */}
        <div id="results-view">
          {showResults && summary && results.length > 0 && (
            <ResultsSection summary={summary} results={results} />
          )}
        </div>

        {/* Educational Content Section */}
        <EducationalContent />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg font-bold">GHz Invest</span>
            </div>
            <p className="text-sm">Ajudando você a entender o poder do tempo e dos investimentos através de ferramentas financeiras gratuitas.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Calculadora de Juros Simples</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tabela Price vs SAC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calculadora de Inflação</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Sobre</h4>
            <p className="text-sm">Desenvolvido para fins educacionais. Consulte sempre um consultor financeiro certificado antes de tomar decisões de investimento.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Simulador de Juros Compostos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;
