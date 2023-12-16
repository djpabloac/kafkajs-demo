const kafka = require(".");

const consumer = kafka.consumer({ groupId: 'test-group' })

module.exports.consumerStart = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'demo-kafka', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString(),
      })
    },
  })
}