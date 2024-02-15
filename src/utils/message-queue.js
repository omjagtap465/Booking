
const  amqp = require('amqplib');
const {MESSAGE_BROKER_URL,EXCHANGE_NAME,REMAINDER_SERVICE} = require('../config/Server-config')
const createChannels = async () => {

    try {
        
        const connection = await amqp.connect(MESSAGE_BROKER_URL)
        const channel =await connection.createChannel()
        await channel.assertExchange(EXCHANGE_NAME,'direct',false)
        return channel 
    } catch (error) {
        throw error
        
    }
}
    const subscribeMessage = async(channel) => {
        try {
            
        } catch (error) {
            throw error
        }
    }
const publishMessage  = async (channel,binding_key,message) => {

    try {
       const q = await channel.assertQueue('REMAINDER_QUEUE')
        const resp  =await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message))
        return resp
    } catch (error) {   
        throw error
    }
}
module.exports = {createChannels,publishMessage}
