from pydantic import BaseSettings, Field


class AdvancedBaseSettings(BaseSettings):
    """
    Базовые настройки
    """
    class Config:
        allow_mutation = False  # Эта настройка делает объект неизменяемым.
        env_file = ".env"
        env_file_encoding = "utf-8"


class KafkaTopics(AdvancedBaseSettings):
    """
    Топики для кафки
    """
    topic_1: str = Field("topic_1", env="KAFKA_TOPIC")


class KafkaCAFiles(AdvancedBaseSettings):
    """
    CA файлы для кафки
    """
    ca_file_1: str = Field("ca_file_1", env="KAFKA_CA_FILE_1")


class KafkaSettings(AdvancedBaseSettings):
    """
    Настройки для кафки
    """
    bootstrap_servers: str = Field("host", env="KAFKA_HOST")
    security_protocol: str = Field("SASL_SSL", env="KAFKA_SASL_SSL")
    sasl_mechanism: str = Field("PLAIN", env="KAFKA_SASL_MECHANISM")
    sasl_plain_username: str = Field("user", env="KAFKA_USER")
    sasl_plain_password: str = Field("password", env="KAFKA_PASSWORD")
    auto_offset_reset: str = Field("earliest", env="KAFKA_AUTO_OFFSET_RESET")
    enable_auto_commit: bool = Field(False, env="KAFKA_ENABLE_AUTO_COMMIT")


class CORSSettings(AdvancedBaseSettings):
    """
    Настройки CORS
    """
    allow_credentials: bool = Field(True)
    allow_methods: list[str] = Field(["*"])
    allow_headers: list[str] = Field(["*", "Authorization"])
    allow_origins: list[str] = Field(["*"], env="CORS_ORIGINS")


class ApplicationSettings(AdvancedBaseSettings):
    """
    Настройки приложения FastAPI
    """
    title: str = Field("Эксгаустер API")
    description = Field(
        "Прием и сохранение потока данных с эксгаустера и предоставления интерфейса доступа к этим данным"
    )
    debug: bool = Field(True, env="DEBUG")
    version: str = Field("0.1.0", env="APP_VERSION")


class SiteSettings(AdvancedBaseSettings):
    """
    Настройки сайта
    """
    host: str = Field("127.0.0.1", env="SITE_HOST")
    port: int = Field(8000, env="SITE_PORT")
    loop: str = Field("asyncio")  # для асинхронного дебага
    log_level: str = Field("info", env="SITE_LOG_LEVEL")
    # reload: bool = Field(True, env="SITE_RELOAD")  # перезагрузка uvicorn
    reload_delay: float = Field(0.25, env="SITE_RELOAD_DELAY")


class DataBaseCredentials(BaseSettings):
    """
    Настройки базы данных
    """
    # mongodb
    host: str = Field("localhost", env="MONGO_DB_HOST")
    username: str = Field("mongo_user", env="MONGO_DB_USERNAME")
    password: str = Field("mongo_password", env="MONGO_DB_PASSWORD")
    port: str = Field("27017", env="DATABASE_PORT")
    db_name: str = Field("my_database", env="MONGO_DB_NAME")
