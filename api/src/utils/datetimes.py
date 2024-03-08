from datetime import datetime

import pendulum


class Datetimes:
    def get_today(self) -> dict[str, datetime | str]:
        today = pendulum.now()
        return {"as_date": today, "as_string": str(today)}

    def format_timestamp(self, timestamp: float) -> str:
        return datetime.fromtimestamp(timestamp).strftime("%Y-%m-%d %H:%M:%S%z")
