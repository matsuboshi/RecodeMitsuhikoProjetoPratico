import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rowRemoved } from './redux/actions';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import background from './assets/background.png';

export default function Page_List() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.dataList);

  const handleDelete = (id) => dispatch(rowRemoved(+id));

  return (
    <ImageBackground source={background} style={css.imageContainer}>
      <View style={css.container1}>
        <Text style={css.title}>REGISTERED ITEMS:</Text>
      </View>
      <View style={css.container2}>
        <ScrollView style={{ width: '100%' }}>
          {dataList.length === 0 && (
            <Text style={css.cardTitle}>No registered items so far!</Text>
          )}
          {dataList.length > 0 &&
            dataList.map((item, index) => (
              <View style={css.card} key={index}>
                <Text style={css.cardTitle}>{item.description}</Text>

                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Ionicons name="ios-close-circle" size={32} color="white" />
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  imageContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 9,
    backgroundColor: '#0003',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    padding: 20,
    marginTop: 0,

    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#A02E0D',
    borderRadius: 15,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
});
