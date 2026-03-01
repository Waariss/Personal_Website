export const isMobileUserAgent = () => {
  const userAgent = navigator.userAgent || navigator.vendor || '';
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /android/i.test(userAgent);
  const isMobileDevice = /Mobi|Android/i.test(userAgent);

  return isIOS || isAndroid || isMobileDevice;
};
