import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace !== null) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClosed={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      {modalContent}
      <View style={styles.modalContainer}>
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 80,
  },

  placeImage: {
    width: '100%',
    height: 200,
  },

  placeName: {
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default placeDetail;
