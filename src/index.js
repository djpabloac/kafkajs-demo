const { consumerStart } = require("./broker/consumer");
const { producerStart } = require("./broker/producer");

const bootstrap = async () => {
  await consumerStart();
  await producerStart();
}

bootstrap();