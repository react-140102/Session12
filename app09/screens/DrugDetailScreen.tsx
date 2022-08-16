import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Button, Card, Paragraph} from 'react-native-paper';
import api from '../utils/api';
import {Category} from './Category';
import {Drug} from './Drug';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DrugDetailScreen({route, navigation}: any) {
  const drug: Drug = route.params;
  const [favorites, setFavorites] = useState<number[]>([]);
  useEffect(() => {
    navigation.setOptions({title: drug.name});

    (async () => {
      //Serialization / Deserialization
      setFavorites(
        JSON.parse((await AsyncStorage.getItem('favorites')) || '[]'),
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    })();
  }, [favorites]);

  const toggleFav = async () => {
    if (favorites.indexOf(drug.id) > -1) {
      setFavorites(favorites.filter(x => x !== drug.id));
    } else {
      setFavorites([...favorites, drug.id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Button
          icon={
            favorites.indexOf(drug.id) > -1
              ? 'cards-heart'
              : 'cards-heart-outline'
          }
          mode="contained"
          onPress={toggleFav}>
          علاقه مندی
        </Button>
        <Card>
          <Card.Title title="نام دارو" />
          <Card.Content>
            <Paragraph>{drug.name}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <Card.Title title="موارد مصرف" />
          <Card.Content>
            <Paragraph>{drug.usage}</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
