import { validate } from "../validation/validation.js";
import { createContactValidation } from "../validation/contact-validation.js";
import { prismaClient } from "../application/database.js";

const create = async (user, request) => {
  const contact = validate(createContactValidation, request);
  contact.username = user.username; // Menyisipkan username dari user ke dalam objek contact.
  // Kita menambahkan properti baru (username) langsung ke objek yang sudah ada tanpa harus membuat objek baru.

  return prismaClient.contact.create({
    data: contact,
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
    },
  });
};

export default {
  create,
};
