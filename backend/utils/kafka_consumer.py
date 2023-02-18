import ssl

from aiokafka import AIOKafkaConsumer

from config import kafka_config, kafka_topics_ca


class KafkaConsumerContextManager:
    """
    Контекстный менеджер для получения
    """
    def __init__(
            self,
            topic: str = kafka_topics_ca.get("default_topic"),
            ca_file: str = kafka_topics_ca.get("default_ca_file_name")
    ):
        self.topic: str = topic
        self.ssl_context: ssl.SSLContext = ssl.create_default_context(cafile=ca_file)
        self.consumer: AIOKafkaConsumer

    async def __aenter__(self):
        self.consumer: AIOKafkaConsumer = AIOKafkaConsumer(
            self.topic, ssl_context=self.ssl_context, **kafka_config
        )
        await self.consumer.start()
        return self.consumer

    async def __aexit__(self, exc_type, exc, tb):
        await self.consumer.stop()
