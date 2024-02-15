const{Booking} = require('../models/index')
class BookingRepository {
    async createBooking(data) {
        try {
            const booking = await Booking.create(data);
            console.log(booking);
            return booking
        } catch (error) {

        }

    }
    async updateBooking(id,data) {
        try {
            console.log(id,data);
            const booking = await Booking.findByPk(id)
            if(data.status)
            {
                 booking.status = data.status
            }
            await booking.save()
            console.log(booking);
            return booking
        } catch (error) {

        }

    }
}
module.exports = BookingRepository