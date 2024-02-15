const {BookingService} = require('../services/index')
const bookingService = new BookingService()
const createBooking = async (req, res) => {
    try {
        console.log(req.body);
        const flight = await bookingService.createBooking(req.body)
        console.log(flight);
        res.status(201).json(flight);

    } catch (error) {
        // console.error('Error creating city:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
module.exports = {createBooking}