from pathlib import Path
import json
from crawler import crawler
from d_parser import parse

def main():
    raw_items = crawler()
    parsed_data = parse(raw_items)

    Path("data").mkdir(exist_ok=True)
    with open("data/blbl_data.json", "w", encoding="utf-8") as f:
        json.dump(parsed_data, f, ensure_ascii=False, indent=2)

    print(f"已保存 {len(parsed_data)} 条数据到 data/blbl_data.json")


if __name__ == "__main__":
    main()
