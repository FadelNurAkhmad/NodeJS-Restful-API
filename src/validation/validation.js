import { ResponseError } from "../error/response-error.js";

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false, // memvalidasi apabila ada field asing yg masuk
  });
  if (result.error) {
    throw new ResponseError(400, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
