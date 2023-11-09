import { FC, useMemo, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import Container from '@components/Container';
import { roundToHundredths } from '@utils/roundToHundredths';

// const loanAmount = 200000;
// const loanTermInMonths = 24;
// const interestRate = 12;
// const compound = 'differentiated' || 'annuity';
//
// const MONTHS_IN_YEAR = 12;
// const percentageOfTheInterestRate = interestRate / MONTHS_IN_YEAR / 100;
//
// let loanBalance = 200000;
//
// const annuity = () => {
//   const interest = loanBalance * percentageOfTheInterestRate;
//   const amountOfPayment = loanAmount * (percentageOfTheInterestRate + (percentageOfTheInterestRate / ((1 + percentageOfTheInterestRate) ** loanTermInMonths - 1)));
//   const repaymentOfTheMainDebt = amountOfPayment - interest;
//   loanBalance -= repaymentOfTheMainDebt;
//   return { repaymentOfTheMainDebt, interest, amountOfPayment, loanBalance };
// }
//
// const differentiated = () => {
//   const interest = loanBalance * percentageOfTheInterestRate;
//   const repaymentOfTheMainDebt = loanAmount / loanTermInMonths;
//   const amountOfPayment = repaymentOfTheMainDebt + interest;
//   loanBalance -= repaymentOfTheMainDebt;
//   return { repaymentOfTheMainDebt, interest, amountOfPayment, loanBalance };
// }
//
// for (let i = 0; i < loanTermInMonths; i++) {
//   console.log(differentiated());
// }

interface CalculatedResult {
  repaymentOfTheMainDebt: number;
  interest: number;
  amountOfPayment: number;
  loan: number;
}

interface ListItem {
  item: CalculatedResult;
}

const Home: FC = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTermInMonths, setLoanTermInMonths] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [calculatedResults, setCalculatedResults] = useState<CalculatedResult[]>([]);

  const percentageOfTheInterestRate = useMemo(() => +interestRate / 12 / 100, [interestRate]);

  const Item = ({ repaymentOfTheMainDebt, interest, amountOfPayment, loan }: CalculatedResult) => (
    <View style={styles.item}>
      <Text style={styles.title}>repaymentOfTheMainDebt: {repaymentOfTheMainDebt}</Text>
      <Text style={styles.title}>interest: {interest}</Text>
      <Text style={styles.title}>amountOfPayment: {amountOfPayment}</Text>
      <Text style={styles.title}>loan: {loan}</Text>
    </View>
  );

  const renderItem = ({ item: { repaymentOfTheMainDebt, interest, amountOfPayment, loan } }: ListItem) => (
    <Item
      repaymentOfTheMainDebt={repaymentOfTheMainDebt}
      interest={interest}
      amountOfPayment={amountOfPayment}
      loan={loan}
    />
  );

  const differentiated = () => {
    const result: CalculatedResult[] = [];

    let loanBalance = +loanAmount;

    for (let i = 0; i < +loanTermInMonths; i++) {
      const repaymentOfTheMainDebt = roundToHundredths(+loanAmount / +loanTermInMonths);
      const interest = roundToHundredths(loanBalance * percentageOfTheInterestRate);
      const amountOfPayment = roundToHundredths(repaymentOfTheMainDebt + interest);
      const loan = roundToHundredths(loanBalance);

      result.push({ repaymentOfTheMainDebt, interest, amountOfPayment, loan });
      loanBalance -= repaymentOfTheMainDebt;
    }

    setCalculatedResults(result);
  };

  const annuity = () => {
    const result: CalculatedResult[] = [];

    let loanBalance = +loanAmount;

    for (let i = 0; i < +loanTermInMonths; i++) {
      const interest = roundToHundredths(loanBalance * percentageOfTheInterestRate);
      const amountOfPayment = roundToHundredths(
        +loanAmount *
          (percentageOfTheInterestRate +
            percentageOfTheInterestRate / ((1 + percentageOfTheInterestRate) ** +loanTermInMonths - 1)),
      );
      const repaymentOfTheMainDebt = roundToHundredths(amountOfPayment - interest);
      const loan = roundToHundredths(loanBalance);

      result.push({ repaymentOfTheMainDebt, interest, amountOfPayment, loan });
      loanBalance -= repaymentOfTheMainDebt;
    }

    setCalculatedResults(result);
  };

  return (
    <Container>
      <TextInput
        keyboardType="number-pad"
        placeholder="Loan amount"
        value={loanAmount}
        onChangeText={setLoanAmount}
        style={styles.input}
      />
      <TextInput
        keyboardType="number-pad"
        placeholder="Loan term"
        value={loanTermInMonths}
        onChangeText={setLoanTermInMonths}
        style={styles.input}
      />
      <TextInput
        keyboardType="number-pad"
        placeholder="Interest rate"
        value={interestRate}
        onChangeText={setInterestRate}
        style={styles.input}
      />
      <Button onPress={differentiated} title="Calculate" color="#841584" />

      <FlatList data={calculatedResults} renderItem={renderItem} />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});

export default Home;
