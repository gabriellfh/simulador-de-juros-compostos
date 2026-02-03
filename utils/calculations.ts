
import { CalculatorInputs, CalculationResult, SummaryData } from '../types';

/**
 * Aplica máscara de moeda BRL em tempo real (estilo entrada de centavos)
 * Ex: Digita "1" -> "0,01"
 * Ex: Digita "123" -> "1,23"
 * Ex: Digita "123456" -> "1.234,56"
 */
export const maskCurrencyBRL = (value: string | number): string => {
  if (value === undefined || value === null) return '0,00';
  
  // Remove tudo que não é número
  let onlyDigits = value.toString().replace(/\D/g, "");
  
  // Se estiver vazio, retorna o zero formatado
  if (!onlyDigits) return '0,00';

  // Converte para número e divide por 100 para criar os centavos
  const numberValue = Number(onlyDigits) / 100;

  // Formata para o padrão brasileiro de moeda (sem o símbolo R$)
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numberValue);
};

/**
 * Converte o valor formatado (Ex: "1.234,56") de volta para número puro (1234.56)
 */
const parseCurrencyToNumber = (value: string | number): number => {
  if (typeof value === 'number') return value;
  if (!value || value.toString().trim() === '') return 0;

  // Remove pontos (milhares) e troca vírgula por ponto (decimal JS)
  const cleanValue = value.toString().replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(cleanValue);
  
  return isNaN(parsed) ? 0 : parsed;
};

export const calculateCompoundInterest = (inputs: CalculatorInputs): { results: CalculationResult[], summary: SummaryData } => {
  const initialValue = parseCurrencyToNumber(inputs.initialValue);
  const monthlyValue = parseCurrencyToNumber(inputs.monthlyValue);
  const interestRate = parseCurrencyToNumber(inputs.interestRate);
  const period = parseCurrencyToNumber(inputs.period);
  const { rateType, periodType } = inputs;

  const totalMonths = periodType === 'years' ? period * 12 : period;

  // Taxa mensal: se for anual, converte usando equivalência de juros compostos
  const monthlyRateDecimal = rateType === 'annual' 
    ? Math.pow(1 + (interestRate / 100), 1 / 12) - 1 
    : (interestRate / 100);

  const results: CalculationResult[] = [];
  let currentAccumulated = initialValue;
  let totalInvested = initialValue;
  let totalInterest = 0;

  results.push({
    month: 0,
    interest: 0,
    totalInvested: initialValue,
    totalInterest: 0,
    totalAccumulated: initialValue
  });

  for (let m = 1; m <= totalMonths; m++) {
    const interestForMonth = currentAccumulated * monthlyRateDecimal;
    totalInterest += interestForMonth;
    totalInvested += monthlyValue;
    currentAccumulated = currentAccumulated + interestForMonth + monthlyValue;

    results.push({
      month: m,
      interest: interestForMonth,
      totalInvested: totalInvested,
      totalInterest: totalInterest,
      totalAccumulated: currentAccumulated
    });
  }

  const summary: SummaryData = {
    totalFinal: currentAccumulated,
    totalInvested: totalInvested,
    totalInterest: totalInterest
  };

  return { results, summary };
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
