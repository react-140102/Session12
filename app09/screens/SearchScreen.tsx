import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {List, Searchbar} from 'react-native-paper';
import api from '../utils/api';
import {Drug} from './Drug';

export function SearchScreen({navigation}: any) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState<Drug[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      setData([]);
      return;
    }
    if (searchQuery.length < 2) {
      return;
    }
    (async () => {
      const resp = await api.get<Drug[]>('drugs?name_like=' + searchQuery);
      setData(resp.data);
    })();
  }, [searchQuery]);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        <List.Section title="Accordions">
          {data.map(d => (
            <List.Item
              key={d.id}
              title={d.name}
              description={d.name}
              left={props => <List.Icon {...props} icon="folder" />}
            />
          ))}
        </List.Section>
      </ScrollView>
    </View>
  );
}
