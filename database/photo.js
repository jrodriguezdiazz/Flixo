import * as ImagePicker from "expo-image-picker";
import { storage } from "./firebase";

export const uploadImageToFirebase = async (userId) => {
  try {
    // Solicita permiso al usuario para acceder a su galería de fotos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Se requiere permiso para acceder a la galería de fotos.");
      return null;
    }

    // Permite al usuario seleccionar una imagen desde su galería de fotos
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const { uri } = result;

      // Crea una referencia a la imagen en Firebase Storage
      const imageName = `${userId}-${Date.now()}`;
      const imageRef = storage.ref(`images/${imageName}`);

      // Sube la imagen a Firebase Storage
      const response = await fetch(uri);
      const blob = await response.blob();
      await imageRef.put(blob);

      // Obtiene la URL de descarga de la imagen y la devuelve
      const downloadURL = await imageRef.getDownloadURL();
      return downloadURL;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al subir imagen a Firebase:", error);
    return null;
  }
};
