const prisma = require("../config/prisma");

async function createUser(user_booking) {
  try {
    await prisma.user_booking.create({
      data: user_booking,
    });
  } catch (err) {
    throw err;
  }
}
async function getAllUser() {
  try {
    const user_booking = await prisma.user_booking.findMany();
    return user_booking;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createUser,
  getAllUser,
};
