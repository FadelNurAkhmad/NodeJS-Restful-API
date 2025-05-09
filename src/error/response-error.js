class ResponseError extends Error {
  constructor(status, message) {
    super(message); // Kata kunci super digunakan untuk memanggil constructor super class Error
    this.status = status;
  }
}

export { ResponseError };
