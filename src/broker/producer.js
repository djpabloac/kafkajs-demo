const kafka = require(".");

const producer = kafka.producer();

module.exports.producerStart = async () => {
  await producer.connect();
  await producer.send({
    topic: 'demo-kafka',
    messages: [
      { value: 'Hello KafkaJs!!!' }
    ]
  });

  await producer.disconnect();
}