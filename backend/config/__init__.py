import os
from typing import Any

from config.settings import (
    SiteSettings,
    ApplicationSettings,
    CORSSettings,
    KafkaTopicsCA,
    KafkaSettings,
    DataBaseCredentials,
)

base_dir: str = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app_config: dict[str, Any] = ApplicationSettings().dict()
site_config: dict[str, Any] = SiteSettings().dict()
cors_config: dict[str, Any] = CORSSettings().dict()
kafka_topics_ca: dict[str, Any] = KafkaTopicsCA().dict()
kafka_config: dict[str, Any] = KafkaSettings().dict()
database_config: dict[str, Any] = DataBaseCredentials().dict()
