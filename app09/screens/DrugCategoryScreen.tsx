import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import api from '../utils/api';
import {Category} from './Category';

//TODO: fix PropType
export function DrugCategoryScreen({navigation}: any) {
  const [data, setData] = useState<Category[]>([]);
  useEffect(() => {
    (async () => {
      const resp = await api.get<Category[]>('category');
      setData(resp.data);
    })();
  }, []);

  const renderItem = ({item}: {item: Category}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Drug', item)}>
      <View style={styles.item}>
        <Text style={styles.titleFa}>{item.persianName}</Text>
        <Text style={styles.titleEn}>{item.name}</Text>
        <Image source={require('../assets/images/drug.png')}></Image>
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
});
