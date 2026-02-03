
import React from 'react';

const EducationalContent: React.FC = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">
      {/* Guia de Uso */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Guia Rápido: Como usar este Simulador</h2>
        <p className="mb-6">Planejar seu futuro financeiro ficou mais simples. Siga os passos abaixo para descobrir quanto seu dinheiro pode render:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 border rounded-xl bg-slate-50">
            <span className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-md">1</span>
            <p className="text-sm font-medium">Insira o <span className="font-bold">valor inicial</span> disponível para começar.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-xl bg-slate-50">
            <span className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-md">2</span>
            <p className="text-sm font-medium">Defina o <span className="font-bold">aporte mensal</span> que você fará.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-xl bg-slate-50">
            <span className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-md">3</span>
            <p className="text-sm font-medium">Informe a <span className="font-bold">taxa de rentabilidade</span> (anual ou mensal).</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-xl bg-slate-50">
            <span className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-md">4</span>
            <p className="text-sm font-medium">Escolha o <span className="font-bold">tempo total</span> da aplicação.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-xl bg-slate-50">
            <span className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-md">5</span>
            <p className="text-sm font-medium">Clique em <span className="font-bold text-green-700">Calcular</span> e veja a mágica acontecer!</p>
          </div>
        </div>
      </section>

      {/* A Fórmula */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">A Ciência por trás dos Números</h3>
        <p>Os juros compostos são calculados sobre o montante acumulado do período anterior, e não apenas sobre o capital inicial. A fórmula matemática que rege este crescimento exponencial é:</p>
        <div className="bg-gray-100 p-8 rounded-xl text-center my-6">
          <span className="text-3xl font-serif italic text-green-800">M = C (1 + i) <sup>t</sup></span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100">
          <li><strong>M:</strong> Montante acumulado (valor final)</li>
          <li><strong>C:</strong> Capital inicial investido</li>
          <li><strong>i:</strong> Taxa de juros (em formato decimal)</li>
          <li><strong>t:</strong> Tempo da aplicação</li>
        </ul>
        <p className="text-sm text-gray-500 italic">Dica Pro: Certifique-se de que a taxa (i) e o tempo (t) estejam na mesma unidade (ex: ambos mensais ou ambos anuais) antes de calcular manualmente.</p>
      </section>

      {/* Diferença Simples vs Compostos */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Juros Simples vs. Compostos</h3>
        <p>A diferença pode parecer pequena no começo, mas o tempo é o melhor amigo dos juros compostos. Veja esta comparação com um aporte de <strong>R$ 5.000</strong> a uma taxa de <strong>1% ao mês</strong>:</p>
        
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-4">Prazo</th>
                <th className="p-4">Juros Simples</th>
                <th className="p-4">Juros Compostos</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              <tr>
                <td className="p-4 font-bold">5 Anos</td>
                <td className="p-4 text-gray-600">R$ 8.000,00</td>
                <td className="p-4 text-green-700 font-bold">R$ 9.083,48</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-bold">10 Anos</td>
                <td className="p-4 text-gray-600">R$ 11.000,00</td>
                <td className="p-4 text-green-700 font-bold">R$ 16.501,93</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">20 Anos</td>
                <td className="p-4 text-gray-600">R$ 17.000,00</td>
                <td className="p-4 text-green-700 font-bold">R$ 54.462,77</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-bold">30 Anos</td>
                <td className="p-4 text-gray-600">R$ 23.000,00</td>
                <td className="p-4 text-green-800 font-bold text-lg">R$ 179.748,21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Aplicações */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">Onde os Juros Compostos são aplicados?</h3>
        <p>Conhecidos como "juros sobre juros", eles estão em quase todas as operações financeiras do nosso dia a dia:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-50 rounded-xl border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">Investimentos</h4>
            <p className="text-sm">CDBs, Tesouro Direto e Dividendos reinvestidos em ações usam o poder exponencial para multiplicar seu patrimônio.</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">Dívidas</h4>
            <p className="text-sm">Cartão de crédito e cheque especial são o lado perigoso. Quanto mais tempo se deve, maior a "bola de neve".</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">Financiamentos</h4>
            <p className="text-sm">Imóveis e veículos usam sistemas de amortização que calculam juros sobre o saldo devedor mensalmente.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-12 opacity-60">
        <p>“Os juros compostos são a oitava maravilha do mundo. Aquele que entende, ganha; aquele que não, paga.” — Albert Einstein</p>
      </footer>
    </div>
  );
};

export default EducationalContent;
