import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductListingScreen = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    const URL = 'https://fakestoreapi.com/products';

    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res.json(); //convert it into readable parse
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  console.log(product);
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator color={'red'} size={'large'} />
      ) : error ? (
        <Text style={styles.errorStyle}>{error}</Text>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '600',
              textAlign: 'center',
              paddingVertical: 10,
              marginHorizontal: 30,
              borderRadius: 10,
              backgroundColor: '#D0D0d0',
            }}
          >
            ProductListingScreen
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={product}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    textTransform: 'capitalize',
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {item.category}
                </Text>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={{ fontSize: 18, textAlign: 'center' }}>
                  {item.price}
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>
                  {item.title}
                </Text>

                <Text style={{ fontSize: 14, textAlign: 'center' }}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductListingScreen;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 8,
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 12,
  },
  image: {
    height: 200,
    width: 200,
  },
  errorStyle: {
    color: 'red',
    fontSize: 18,
  },
});
