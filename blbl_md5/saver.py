import json
import mysql.connector
import json
import mysql.connector

def create_database_if_not_exists():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="12345"
    )
    cursor = conn.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS blbl_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;")
    conn.commit()
    cursor.close()
    conn.close()




def save_to_mysql(json_path="data/blbl_data.json"):
    # 建数据库（如未创建）
    create_database_if_not_exists()

    # MySQL 配置
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="12345",  # 修改为你自己的密码
        database="blbl_db",
        charset="utf8mb4"
    )
    cursor = db.cursor()

    # 建表（如未创建）
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS videos (
        id BIGINT PRIMARY KEY,
        title VARCHAR(255),
        view INT,
        up_name VARCHAR(100),
        pub_time DATETIME
    )
    ''')
    db.commit()

    # 读取 JSON 数据
    with open(json_path, "r", encoding="utf-8") as f:
        videos = json.load(f)

    # 插入数据
    for video in videos:
        try:
            cursor.execute('''
                INSERT IGNORE INTO videos (id, title, view, up_name, pub_time)
                VALUES (%s, %s, %s, %s, %s)
            ''', (video["id"], video["title"], video["view"], video["up_name"], video["pub_time"]))
        except Exception as e:
            print("插入失败：", e)

    db.commit()
    cursor.close()
    db.close()

    print(f"成功写入 {len(videos)} 条数据到 MySQL")

# 支持单独执行 saver.py 测试
if __name__ == "__main__":
    save_to_mysql()

