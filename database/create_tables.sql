CREATE TABLE doctor (
  doc_id INT UNSIGNED PRIMARY KEY comment '醫生編號',
  id_num VARCHAR(10) NOT NULL UNIQUE comment '身分證',
  doc_name VARCHAR(40) comment '姓名',
  sex ENUM('Male', 'Female') comment '性別',
  birth DATE comment '生日',
  phone_num INT UNSIGNED comment '手機號碼',
  doc_state ENUM ('working', 'quit', 'fire') NOT NULL DEFAULT 'working' comment '工作情況'
) comment '醫生';

CREATE TABLE allergy_list (
  case_id INT UNSIGNED NOT NULL COMMENT '病例號碼',
  allergy_med_id INT UNSIGNED COMMENT '過敏藥物',
  CONSTRAINT allergy_med_id FOREIGN KEY(allergy_med_id) REFERENCES medicine (med_id),
  CONSTRAINT allergy_list_case_id FOREIGN KEY(case_id) REFERENCES patient (case_id),
  PRIMARY KEY(case_id,allergy_med_id)
) COMMENT '病人過敏藥物';

CREATE TABLE patient_records (
  record_id INT UNSIGNED PRIMARY KEY auto_increment comment '看診紀錄編號',
  case_id INT UNSIGNED NOT NULL comment '病歷號碼',
  doc_id INT UNSIGNED NOT NULL comment '醫生編號',
  consulation_date DATE comment '看診日期',
  disease_name VARCHAR(20) comment '疾病名稱',
  med_days INT UNSIGNED comment '用藥天數',
  comment VARCHAR(100) NULL comment '備註',
  CONSTRAINT case_id FOREIGN KEY(case_id) REFERENCES patient (case_id) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT patient_records_doc_id FOREIGN KEY(doc_id) REFERENCES doctor (doc_id)
) comment '病歷';

CREATE TABLE member (
  id INT UNSIGNED PRIMARY KEY auto_increment comment '會員編號',
  member_name VARCHAR(20) comment '會員名稱',
  birthday DATE comment '生日',
  phone_num INT UNSIGNED comment '手機號碼',
  sex ENUM('Male', 'Female') comment '性別',
  cedit_num INT comment '信用分數'
) comment '會員資料';

CREATE TABLE member_account (
  
)

CREATE TABLE product {
  product_id INT UNSIGNED PRIMARY KEY auto_increment comment '產品編號',
  product_name VARCHAR(100) NOT NULL comment '產品名稱',
  product_description VARCHAR(100) NOT NULL comment '產品說明',
  product_price INT UNSIGNED NOT NULL comment '產品價格',
  product_discount ENUM ('0.9', '0.85', '0.8') comment '產品特價',
  product_discount_start_date DATE comment '產品折價開始日期',
  product_discount_end_date DATE comment '產品折價開始日期',
  product_number INT UNSIGNED NOT NULL comment '產品庫存'
} comment '產品';

CREATE TABLE customer_service {
  cs_id INT UNSIGNED PRIMARY KEY auto_increment comment '客服人員編號',
  cs_name VARCHAR(100) NOT NULL comment '客服人員姓名'
} comment '客服人員';

CREATE TABLE cs_record {
  cs_record_id INT UNSIGNED PRIMARY KEY auto_increment comment '客服紀錄編號',
  member_id INT UNSIGNED comment '會員編號',
  FOREIGN KEY (member_id) REFERENCES member(member_id)
} comment '客服紀錄';

CREATE TABLE cs_message {
  cs_record_id INT UNSIGNED '客服紀錄編號',
  message_id INT UNSIGNED auto_increment comment '訊息記錄編號',
  msg_content VARCHAR(100) NOT NULL comment '訊息內容',
  msg_by ENUM ('cs', 'member') NOT NULL comment '訊息建立者',
  create_time DATETIME NOT NULL comment '訊息時間'
} comment '客服訊息';