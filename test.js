import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'

export default ProfileCardView = () => {
  
  const showAlert = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
          />
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonMessage]}
            onPress={() => showAlert('message')}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/color/70/000000/name.png' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonLike]}
            onPress={() => showAlert('like')}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/color/70/000000/family.png' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonLove]}
            onPress={() => showAlert('love')}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/color/70/000000/to-do.png' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonCall]}
            onPress={() => showAlert('phone')}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/office/70/000000/home-page.png' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  box: {
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    paddingTop: 10,
  },
  profileImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  button: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  buttonMessage: {
    backgroundColor: '#00BFFF',
  },
  buttonLike: {
    backgroundColor: '#228B22',
  },
  buttonLove: {
    backgroundColor: '#FF1493',
  },
  buttonCall: {
    backgroundColor: '#40E0D0',
  },
  icon: {
    width: 35,
    height: 35,
  },
})

                 