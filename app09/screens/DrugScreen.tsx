import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import api from '../utils/api';
import {Category} from './Category';
import {Drug} from './Drug';

export function DrugScreen({route, navigation}: any) {
  const category: Category = route.params;
  const [data, setData] = useState<Drug[]>([]);
  useEffect(() => {
    (async () => {
      const resp = await api.get<Drug[]>(`drugs?categoryId=${category.id}`);
      setData(resp.data);
    })();
    navigation.setOptions({title: 'دسته ' + category.persianName});
  }, [category]);

  const renderItem = ({item}: {item: Drug}) => (
    <TouchableHighlight onPress={() => navigation.navigate('DrugDetail', item)}>
      <View style={styles.item}>
        <Text style={styles.titleEn}>{item.name}</Text>
        <Image
          style={styles.drugIcon}
          source={require('../assets/images/drug.png')}></Image>
      </View>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ccf',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleFa: {
    fontSize: 22,
  },
  titleEn: {
    fontSize: 20,
  },
  drugIcon: {
    width: 40,
    height: 40,
  },
});
