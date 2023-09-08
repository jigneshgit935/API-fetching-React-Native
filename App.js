import { StyleSheet, View } from 'react-native';
import ProductListingScreen from './screens/ProductListingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductListingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
