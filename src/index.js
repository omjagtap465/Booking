const express = require('express')
const apiRoutes = require('./routes')
const bodyParser = require('body-parser');
const { ServerConfig } = require('./config');
const BookingService = require('./services/booking-service')
const {createChannels, publishMessage} = require('./utils/message-queue')
const { REMAINDER_BINDING_KEY,EXCHANGE_NAME } = require('./config/Server-config');


const db = require('./models/index')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, async (req, res) => {
    const channel  = await createChannels()
   const resp =  await  publishMessage(channel,REMAINDER_BINDING_KEY,JSON.stringify({book:"This is a book"})
    )
    console.log(resp);
    // db.sequelize.sync({alter:true})
    // const booking= new BookingService()
    // booking.createBooking(1)

    console.log(`Sucessfully started the server on ${ServerConfig.PORT} ${ServerConfig.DB_SYNC}`);
})