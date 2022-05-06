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
) comment '會員資料'

CREATE TABLE member_account (
  
)