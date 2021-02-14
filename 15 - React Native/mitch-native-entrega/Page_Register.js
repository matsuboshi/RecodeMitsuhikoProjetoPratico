import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rowAdded } from './redux/actions';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import background from './assets/background.png';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Page_Register() {
  const [newItem, setNewItem] = useState('');

  const dispatch = useDispatch();

  const handleRegister = () => {
    if (newItem !== '') {
      dispatch(rowAdded(newItem));
      setNewItem('');
    }
  };

  const firstLetterToUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <ImageBackground source={background} style={css.imageContainer}>
      <DismissKeyboard>
        <View style={css.container1}>
          <Text style={css.title}>REGISTER A NEW ITEM:</Text>

          <View style={css.inputBorder}>
            <TextInput
              placeholder="Type a new item"
              placeholderTextColor="#FFF5"
              style={css.input}
              clearButtonMode="always"
              value={newItem}
              onChangeText={(t) => setNewItem(firstLetterToUpperCase(t))}
            />
          </View>

          <TouchableOpacity style={css.btn} onPress={handleRegister}>
            <Text style={css.texto}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboard>
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 25,
  },
  input: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 2,
    borderColor: '#fff5',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputBorder: {
    backgroundColor: '#fff2',
    width: '100%',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#6a5acd',
    marginTop: 12,
    padding: 8,
    borderRadius: 50,
    width: '50%',
  },
  texto: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
});
