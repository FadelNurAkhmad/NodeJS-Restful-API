import Joi from "joi";

const createContactValidation = Joi.object({
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).optional(),
  email: Joi.string().max(200).email().optional(),
  phone: Joi.string().max(20).optional(),
});

const getContactValidation = Joi.number().positive().required();
// Method .positive() pada Joi digunakan untuk memvalidasi bahwa nilai
// angka (number) yang diberikan harus lebih besar dari 0 (alias positif).

const updateContactValidation = Joi.object({
  id: Joi.number().positive().required(),
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).optional(),
  email: Joi.string().max(200).email().optional(),
  phone: Joi.string().max(20).optional(),
});

export {
  createContactValidation,
  getContactValidation,
  updateContactValidation,
};
