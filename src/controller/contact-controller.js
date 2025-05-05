import contactService from "../service/contact-service.js";

const create = async (req, res, next) => {
  try {
    const user = req.user; // berisi data user yang sedang login, biasanya diset oleh middleware autentikasi.
    const request = req.body; // data input dari request body (misalnya: nama, email, dll).
    const result = await contactService.create(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
};
