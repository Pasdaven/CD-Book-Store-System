CREATE TABLE member (
	id INT UNSIGNED PRIMARY KEY auto_increment comment '會員編號',
	member_name VARCHAR(20) comment '會員名稱',
	birthday DATE comment '生日',
	phone_num INT UNSIGNED comment '手機號碼',
	sex ENUM('Male', 'Female') comment '性別',
	cedit_num INT comment '信用分數'
) comment '會員資料';

CREATE TABLE product (
	product_id INT UNSIGNED PRIMARY KEY auto_increment comment '商品編號',
	product_name VARCHAR(100) NOT NULL comment '商品名稱',
	product_description VARCHAR(100) NOT NULL comment '商品說明',
	product_price INT UNSIGNED NOT NULL comment '商品價格',
	product_discount ENUM ('0.9', '0.85', '0.8') comment '商品特價',
	product_discount_start_date DATE comment '商品折價開始日期',
	product_discount_end_date DATE comment '商品折價開始日期',
	product_number INT UNSIGNED NOT NULL comment '商品庫存'
) comment '商品';

CREATE TABLE coupon (
  coupon_id INT UNSIGNED auto_increment comment '券編號',
	member_id INT UNSIGNED NOT NULL comment '會員編號',
  feature ENUM ('50', '100', '150', 'free-shipping') NOT NULL comment '券種類',
  coupon_month INT UNSIGNED NOT NULL comment '券月份'
) comment '券';

CREATE TABLE count_records (
	count_id INT UNSIGNED PRIMARY KEY comment '數量記數',
	product_id INT UNSIGNED NOT NULL UNIQUE comment '商品編號',
	count_num INT UNSIGNED NOT NULL comment '商品數量',
	CONSTRAINT product_id FOREIGN KEY(product_id) REFERENCES product (product_id),
) comment '數量紀錄';

CREATE TABLE order (
	order_id INT UNSIGNED PRIMARY KEY comment '訂單編號',
	member_id INT UNSIGNED NOT NULL UNIQUE comment '會員編號',
	product_id INT UNSIGNED NOT NULL UNIQUE comment '商品編號',
	coupon_id INT UNSIGNED NOT NULL UNIQUE comment '折價卷編號',
	count_id INT UNSIGNED NOT NULL UNIQUE comment '數量記數',
	deliver_method ENUM('home delivery', 'convenience store delivery') NOT NULL comment '運送方式',
	price INT comment '價格',
	phone_num INT UNSIGNED comment '手機號碼',
	convenience_store INT UNSIGNED comment '便利商店',
	address VARCHAR(100) comment '地址',
	payment ENUM('cash', 'credit card') NOT NULL comment '付款方式',
	state ENUM('wait', 'finish', 'cancel', 'return') NOT NULL comment '訂單狀態',
	CONSTRAINT member_id FOREIGN KEY(member_id) REFERENCES member (member_id),
	CONSTRAINT product_id FOREIGN KEY(product_id) REFERENCES product (product_id),
	CONSTRAINT coupon_id FOREIGN KEY(coupon_id) REFERENCES coupon (coupon_id),
	CONSTRAINT count_id FOREIGN KEY(count_id) REFERENCES count_records (count_id)
) comment '訂單';

CREATE TABLE cart (
	cart_id INT UNSIGNED PRIMARY KEY COMMENT '購物車編號',
	member_id INT UNSIGNED NOT NULL UNIQUE comment '會員編號',
	product_id INT UNSIGNED NOT NULL UNIQUE comment '商品編號',
	count_id INT UNSIGNED NOT NULL UNIQUE comment '數量記數',
	CONSTRAINT member_id FOREIGN KEY(member_id) REFERENCES member (member_id),
	CONSTRAINT product_id FOREIGN KEY(product_id) REFERENCES product (product_id),
	CONSTRAINT count_id FOREIGN KEY(count_id) REFERENCES count_record (count_id)
) COMMENT '購物車';


CREATE TABLE ad (
	ad_id INT UNSIGNED PRIMARY KEY comment '廣告編號',
	ad_description VARCHAR(100) comment '廣告說明',
	ad_img_id VARCHAR(100) comment '廣告圖片'
) comment '廣告';


CREATE TABLE customer_service (
	cs_id INT UNSIGNED PRIMARY KEY auto_increment comment '客服人員編號',
	cs_name VARCHAR(100) NOT NULL comment '客服人員姓名'
) comment '客服人員';

CREATE TABLE cs_record (
	cs_record_id INT UNSIGNED PRIMARY KEY auto_increment comment '客服紀錄編號',
	member_id INT UNSIGNED comment '會員編號',
	FOREIGN KEY (member_id) REFERENCES member(member_id)
) comment '客服紀錄';

CREATE TABLE cs_message (
	cs_record_id INT UNSIGNED '客服紀錄編號',
	message_id INT UNSIGNED auto_increment comment '訊息記錄編號',
	msg_content VARCHAR(100) NOT NULL comment '訊息內容',
	msg_by ENUM ('cs', 'member') NOT NULL comment '訊息建立者',
	create_time DATETIME NOT NULL comment '訊息時間'
) comment '客服訊息';

CREATE TABLE member_account (
	member_id INT UNSIGNED NOT NULL comment '會員編號',
	email VARCHAR(100) NOT NULL comment '信箱',
	member_password VARCHAR(100) NOT NULL comment '會員密碼',
	CONSTRAINT member_id FOREIGN KEY(member_id) REFERENCES member (member_id),
	PRIMARY KEY(member_id, email)
) comment '會員帳號密碼';

CREATE TABLE browsing_history (
	member_id INT UNSIGNED NOT NULL comment '會員編號',
	product_id INT UNSIGNED NOT NULL comment '商品編號',
	browse_time DATETIME NOT NULL comment '瀏覽時間',
	CONSTRAINT member_id FOREIGN KEY (member_id) REFERENCES member (member_id),
	CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES product (product_id),
	PRIMARY KEY (member_id, product_id)
) comment '瀏覽紀錄';

CREATE TABLE follow_list (
	member_id INT UNSIGNED NOT NULL comment '會員編號',
	product_id INT UNSIGNED NOT NULL comment '商品編號',
	CONSTRAINT member_id FOREIGN KEY (member_id) REFERENCES member (member_id),
	CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES product (product_id),
	PRIMARY KEY (member_id, product_id)
) comment '關注清單';

CREATE TABLE comment_list (
	member_id INT UNSIGNED NOT NULL comment '會員編號',
	product_id INT UNSIGNED NOT NULL comment '商品編號',
	comment_id INT UNSIGNED NOT NULL comment '評論編號',
	product_comment VARCHAR(100) NOT NULL comment '商品評論',
	comment_create_time DATETIME NOT NULL comment '評論時間',
	CONSTRAINT member_id FOREIGN KEY (member_id) REFERENCES member (member_id),
	CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES product (product_id),
	PRIMARY KEY (member_id, product_id, comment_id)
) comment '評論區';