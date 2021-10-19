/**
 *  圖片轉 base 64 功能
 * @param {object} file image 對象
 * @param {function} callback 接收 base64 的方法
 */
export const image2Base64 = (file, callback) => {
  const img = new Image();
  img.src = window.URL.createObjectURL(file);
  img.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', img.src, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = this.response;
        const oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
          const base64 = e.target.result;
          if (typeof callback === 'function') {
            callback(base64);
          }
        };
        oFileReader.readAsDataURL(blob);
      }
    };
    xhr.send();
  };
};
