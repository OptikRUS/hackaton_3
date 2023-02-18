import os
from typing import Any

from config.settings import (
    SiteSettings,
    ApplicationSettings,
    CORSSettings,
    KafkaTopics,
    KafkaSettings,
    KafkaCAFiles,
    DataBaseCredentials,
)

base_dir: str = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app_config: dict[str, Any] = ApplicationSettings().dict()
site_config: dict[str, Any] = SiteSettings().dict()
cors_config: dict[str, Any] = CORSSettings().dict()
kafka_topics: dict[str, Any] = KafkaTopics().dict()
kafka_config: dict[str, Any] = KafkaSettings().dict()
kafka_ca_files: dict[str, Any] = KafkaCAFiles().dict()
database_config: dict[str, Any] = DataBaseCredentials().dict()
