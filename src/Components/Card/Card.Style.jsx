import {StyleSheet, Dimensions} from 'react-native';

const CardStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2.25,
    height: Dimensions.get("window").height / 3,
    backgroundColor: '#EEEEEE',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
  },
  image: {
    margin: "auto",
    height: "60%",
    width: "75%",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  stock: {
    fontSize: 18,
    textAlign: "center",
    color: "red",
    fontWeight: "bold"
  },
  price: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
    margin: 5,
  },
});

export default CardStyle;
