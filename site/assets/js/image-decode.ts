export async function decodeImage(file: File): Promise<{ objectUrl: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const objectUrl = URL.createObjectURL(file);
        resolve({ objectUrl });
      };
      img.onerror = () => reject(new Error('Image decode failed'));
      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error('File read failed'));
    reader.readAsDataURL(file);
  });
}