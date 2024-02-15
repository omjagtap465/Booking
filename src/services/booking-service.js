const { BookingRepository } = require('../repositories')
const axios = require('axios');
const { REMAINDER_BINDING_KEY } = require('../config/Server-config');
const {createChannel, publishMessage} = require('../utils/message-queue')
class BookingService {
    constructor() {
        this.BookingRepository = new BookingRepository()
    }
    async createBooking(data) {
        try {
            
            const apiUrl = `http://localhost:3000/api/v1/getflight/${data.flightId}`;
            let  response = await axios.get(apiUrl);
            response   = response.data
            console.log('GET Response:', response.data);
            if(data.totalSeats>response.totalSeats)
            {
                throw error 
            }
            
            const totalSeatsRemaining = response.totalSeats - data.totalSeats
            console.log(response.price,data.totalSeats,totalSeatsRemaining);
            const totalCostOfSeats = response.price *data.totalSeats 
        
            const bookingData = {
                userId:data.userId,
                flightId:data.flightId,
                totalSeats:data.totalSeats,
                totalCost:totalCostOfSeats
            }
            // console.log(response.data);
            const booking =await this.BookingRepository.createBooking(bookingData)
            console.log("lnfkndfklbnl",booking.id);
            const updateBooking = await this.BookingRepository.updateBooking(booking.id,{status:"confirmed"})
            const flightUpdate = await axios.patch(apiUrl, {
                totalSeats:totalSeatsRemaining
            })
            console.log(flightUpdate);
          
            return updateBooking

// flightid
// status no need to updata first 

// flights seats check if avail and then add while booking creation
// calculate cost by price field in the flights get req multiply by the stats
// /send the data as whole  object

        } catch (error) {
            console.error('Error:', error);
        }

    }
} 
module.exports=BookingService