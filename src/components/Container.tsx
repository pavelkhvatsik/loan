import { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <SafeAreaView style={styles.areaView}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  areaView: { flex: 1, backgroundColor: '#ccc', paddingVertical: 0, paddingHorizontal: 10 },
});

export default Container;
