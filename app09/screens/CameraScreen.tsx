import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '50%',
  },
  pic: {
    width: '100%',
    height: '40%',
  },
});
export function CameraScreen({navigation}: any) {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef<Camera>(null);
  const [picPath, setPicPath] = useState('');

  const [hasPermission, setHasPermission] = useState(false);
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      if (cameraPermission !== 'authorized') {
        console.log(cameraPermission);
        const newCameraPermission = await Camera.requestCameraPermission();
        console.log(newCameraPermission);
        setHasPermission(newCameraPermission === 'authorized');
      } else {
        setHasPermission(true);
      }
    })();
  });
  const takePhoto = async () => {
    // const photo = await camera!.current!.takePhoto({
    //   flash: 'on'
    // })

    if (camera && camera.current) {
      const photo = await camera.current.takePhoto({
        flash: 'on',
      });
      setPicPath(photo.path);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {hasPermission ? (
        <>
          {device && (
            <>
              <Button onPress={takePhoto}>Take</Button>
              <Camera
                ref={camera}
                style={styles.camera}
                device={device}
                isActive={true}
                photo={true}
              />
              <Image
                style={styles.pic}
                source={{uri: 'file://' + picPath}}></Image>
            </>
          )}
        </>
      ) : (
        <>
          <Text>No Permission</Text>
        </>
      )}
    </View>
  );
}
