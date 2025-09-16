import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
export default function Input(props: TextInputProps){ return <TextInput placeholderTextColor="#777" {...props} style={[styles.input, props.style]} />; }
const styles = StyleSheet.create({ input:{ borderWidth:1, borderColor:'#ddd', borderRadius:10, padding:12, marginVertical:6, backgroundColor:'#fff' }});
