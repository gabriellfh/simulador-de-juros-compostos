
export interface CalculationResult {
  month: number;
  interest: number;
  totalInvested: number;
  totalInterest: number;
  totalAccumulated: number;
}

export interface SummaryData {
  totalFinal: number;
  totalInvested: number;
  totalInterest: number;
}

export type RateType = 'monthly' | 'annual';
export type PeriodType = 'months' | 'years';

export interface CalculatorInputs {
  initialValue: number | string;
  monthlyValue: number | string;
  interestRate: number | string;
  rateType: RateType;
  period: number | string;
  periodType: PeriodType;
}
