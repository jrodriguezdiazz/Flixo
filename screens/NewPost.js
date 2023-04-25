import { Camera } from "expo-camera";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Formik } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { AuthenticatedUserContext } from "../App";
import { Button } from "../components/commons/Button";
import { Loading } from "../components/commons/Loading";
import { NoPostsFound } from "../components/post/NotPostFound";
import { storage } from "../database/firebase";
import { addPost } from "../database/post";
import { findUserById } from "../database/user";
import { DEFAULT_IMAGE } from "../utils/constant";

export const NewPost = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);
  const [currentUser, setCurrentUser] = useState(null);
  const refObject = useRef(null);

  useEffect(() => {
    (async () => {
      const fetchedUser = await findUserById(uid);
      setCurrentUser(fetchedUser);
      const { status } = await Camera.getCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await refObject.current.takePictureAsync();
    setPhoto(photo);
    setIsPreviewVisible(true);
  };
  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const uploadPhotoToFirebase = async () => {
    try {
      setIsLoading(true);
      if (photo) {
        const reference = ref(storage, `photos/${Date.now()}.jpg`);
        const metadata = {
          contentType: "image/jpeg",
        };
        const response = await fetch(photo.uri);
        const blob = await response.blob();
        await uploadBytes(reference, blob, metadata);
        const url = await getDownloadURL(reference);
        return url;
      }
      return DEFAULT_IMAGE;
    } catch (e) {
      console.error(e);
      return DEFAULT_IMAGE;
    } finally {
      setIsLoading(false);
    }
  };

  if (hasPermission === null || isLoading) {
    return <Loading />;
  }
  if (hasPermission === false) {
    return (
      <NoPostsFound
        message={"You have not granted access to the camera... 📸"}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {!isPreviewVisible && (
        <Camera
          style={{ flex: 1 }}
          type={cameraType}
          ref={refObject}
        >
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              action={flipCamera}
              label={"Flip"}
              icon={"camera-flip-outline"}
            />
            <Button
              style={styles.button}
              action={takePhoto}
              label={"Take a photo"}
              icon={"camera"}
            />
          </View>
        </Camera>
      )}
      {isPreviewVisible && (
        <Formik
          initialValues={{ caption: "" }}
          onSubmit={async (values, { resetForm }) => {
            const imageURL = await uploadPhotoToFirebase();
            console.log(imageURL);
            // const imageURL = DEFAULT_IMAGE;
            if (imageURL) {
              await addPost(currentUser, values.caption, imageURL);
              setIsPreviewVisible(false);
            }
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
                placeholder="Caption"
              />
              <Image
                source={{ uri: photo.uri }}
                style={styles.thumbnail}
              />
              <Button
                style={styles.publishButton}
                action={handleSubmit}
                label={"Publish"}
                icon={"publish"}
              />
            </View>
          )}
        </Formik>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "flex-end",
    alignContent: "stretch",
    padding: 10,
  },
  button: {
    width: 190,
    height: 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
  },
  thumbnail: {
    width: 200,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  input: {
    width: 200,
    minHeight: 50,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  publishButton: {
    width: 190,
    height: 40,
  },
});
