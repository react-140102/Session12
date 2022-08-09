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
import {Card, Paragraph} from 'react-native-paper';
import api from '../utils/api';
import {Category} from './Category';
import {Drug} from './Drug';

export function DrugDetailScreen({route, navigation}: any) {
  const drug: Drug = route.params;
  useEffect(() => {
    navigation.setOptions({title: drug.name});
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
