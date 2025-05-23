export default class Camera {
  #currentStream;

  #videoElement;
  #selectCameraElement;
  #canvasElement;

  #takePictureButton;

  constructor({ video, cameraSelect, canvas, options = {} }) {
    this.#videoElement = video;
    this.#selectCameraElement = cameraSelect;
    this.#canvasElement = canvas;

    this.#initialListener();
  }

  static addNewStream(stream) {
    if (!Array.isArray(window.currentStreams)) {
      window.currentStreams = [stream];
      return;
    }
    window.currentStreams = [...window.currentStreams, stream];
  }

  static stopAllStreams() {
    if (!Array.isArray(window.currentStreams)) {
      window.currentStreams = [];
      return;
    }
    window.currentStreams.forEach((stream) => {
      if (stream.active) {
        stream.getTracks().forEach((track) => track.stop());
      }
    });
  }

  async #getStream() {
    if (this.#selectCameraElement) {
      const deviceId = this.#selectCameraElement.value;
      return await navigator.mediaDevices.getUserMedia({
        video: deviceId ? { deviceId: { exact: deviceId } } : true,
        audio: false,
      });
    }
    return await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
  }

  async launch() {
    this.#currentStream = await this.#getStream();

    Camera.addNewStream(this.#currentStream);

    this.#videoElement.srcObject = this.#currentStream;
    await this.#videoElement.play();

    this.#clearCanvas();
  }

  #initialListener() {
    if (this.#selectCameraElement) {
      this.#selectCameraElement.addEventListener('change', async () => {
        Camera.stopAllStreams();
        await this.launch();
      });
    }
  }

  #clearCanvas() {
    const ctx = this.#canvasElement.getContext('2d');
    ctx.fillStyle = '#ccc';
    ctx.fillRect(0, 0, this.#canvasElement.width, this.#canvasElement.height);
  }

  addCheeseButtonListener(selector, callback) {
    const button = document.querySelector(selector);
    if (button) {
      this.#takePictureButton = button;
      this.#takePictureButton.addEventListener('click', async () => {
        if (typeof callback === 'function') {
          await callback();
        }
      });
    }
  }

  takePicture() {
    const context = this.#canvasElement.getContext('2d');
    const width = this.#videoElement.videoWidth;
    const height = this.#videoElement.videoHeight;

    if (width && height) {
      this.#canvasElement.width = width;
      this.#canvasElement.height = height;
      context.drawImage(this.#videoElement, 0, 0, width, height);
      return this.#canvasElement.toDataURL('image/jpeg');
    }

    return null;
  }
}
