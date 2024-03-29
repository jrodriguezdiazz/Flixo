import { Formik } from "formik";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";

import { uploadPostSchema } from "../../schema/newPost";
import { DEFAULT_IMAGE, theme } from "../../utils/constant";
import { Button } from "../commons/Button";

export const FormikPostUploader = () => {
  const { colors } = theme;

  const [thumbnail, setThumbnail] = useState(DEFAULT_IMAGE);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setThumbnail(DEFAULT_IMAGE);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Formik
      initialValues={{ caption: "", imageURL: "" }}
      onSubmit={handleSubmit}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <View>
            <View>
              <TextInput
                placeholder={"Write a caption"}
                multiline={true}
                style={styles.captionInput}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
            <View>
              <TextInput
                onChange={(event) => setThumbnail(event.nativeEvent.text)}
                placeholder={"Enter Image URL"}
                style={styles.imageURLInput}
                onChangeText={handleChange("imageURL")}
                onBlur={handleBlur("imageURL")}
                value={values.imageURL}
              />
              {errors.imageURL && (
                <Text style={styles.errorMessage(colors)}>
                  {errors.imageURL}
                </Text>
              )}
            </View>
            <Image
              style={styles.image}
              source={{
                uri: validUrl.isUri(thumbnail) ? thumbnail : DEFAULT_IMAGE,
              }}
            />
            <Button
              action={handleSubmit}
              label={"Share"}
              icon={"camera"}
            />
            <Divider
              width={1}
              orientation={"vertical"}
            />
            <Button
              action={() => console.log("")}
              label={"Take a photo!"}
              icon={"camera-enhance-outline"}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 200,
    height: 330,
    marginBottom: 20,
  },
  captionInput: {
    fontSize: 15,
  },
  imageURLInput: {
    fontSize: 15,
  },
  errorMessage: ({ error }) => ({
    fontSize: 10,
    color: error,
  }),
});
