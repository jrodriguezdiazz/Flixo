import { Formik } from "formik";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import validUrl from "valid-url";
import { uploadPostSchema } from "../../schema/newPost";
import { DEFAULT_IMAGE } from "../../utils/constant";

export const FormikPostUploader = () => {
  const [thumbnail, setThumbnail] = useState(DEFAULT_IMAGE);
  return (
    <Formik
      initialValues={{ caption: "", imageURL: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
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
                <Text style={styles.errorMessage}>{errors.imageURL}</Text>
              )}
            </View>
            <Image
              style={styles.image}
              source={{
                uri: validUrl.isUri(thumbnail) ? thumbnail : DEFAULT_IMAGE,
              }}
            />
            <Button
              onPress={handleSubmit}
              title={"Share"}
              disabled={isValid}
              style={styles.button}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    // justifyContent: "space-between",
    // flexDirection: "row",
  },
  image: {
    width: 200,
    height: 330,
    marginBottom: 20,
  },
  captionInput: {
    fontSize: 15,
  },
  captionContainer: {
    flex: 1,
    marginLeft: 12,
  },
  imageURLInput: {
    fontSize: 15,
  },
  errorMessage: {
    fontSize: 10,
    color: "red",
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#F5D40F",
  },
});
