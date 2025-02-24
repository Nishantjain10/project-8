import { useState } from 'react';

export function useLocalCarouselImages(imagePaths: string[]) {
  const [images, setImages] = useState<string[]>(imagePaths);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const uploadImage = (imagePath: string) => {
    try {
      // Add the new image path to the existing images
      setImages([...images, imagePath]);
    } catch (err) {
      setError('Failed to upload image');
      throw err;
    }
  };

  return {
    images,
    loading,
    error,
    uploadImage
  };
}