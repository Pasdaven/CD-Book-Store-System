CREATE TABLE member (
    member_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '會員編號',
    member_name VARCHAR(20) COMMENT '會員名稱',
    birthday DATE COMMENT '生日',
    phone_num INT UNSIGNED COMMENT '手機號碼',
    sex ENUM('Male', 'Female') COMMENT '性別',
    credit_num INT COMMENT '信用分數'
) COMMENT '會員資料';

CREATE TABLE product (
    product_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '商品編號',
    product_name VARCHAR(100) NOT NULL COMMENT '商品名稱',
    product_author VARCHAR(100) NOT NULL COMMENT '作者名稱',
    product_description VARCHAR(500) NOT NULL COMMENT '商品說明',
    product_image VARCHAR(100) NOT NULL COMMENT '商品圖片',
    product_price INT UNSIGNED NOT NULL COMMENT '商品價格',
    product_discount ENUM ('0.9', '0.85', '0.8') COMMENT '商品特價',
    product_discount_start_date DATE COMMENT '商品折價開始日期',
    product_discount_end_date DATE COMMENT '商品折價開始日期',
    product_number INT UNSIGNED NOT NULL COMMENT '商品庫存'
) COMMENT '商品';

CREATE TABLE order_list (
    order_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '訂單編號',
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    name VARCHAR(100) NOT NULL COMMENT '購買者名稱',
    deliver_method ENUM('home delivery', 'convenience store delivery') NOT NULL COMMENT '運送方式',
    subtotal INT COMMENT '原始價格',
    deliver INT COMMENT '運費',
    discount INT COMMENT '折扣',
    price INT COMMENT '總和價格',
    phone_num VARCHAR(10) comment '手機號碼',
    convenience_store VARCHAR(10) COMMENT '便利商店',
    order_address VARCHAR(100) COMMENT '地址',
    payment ENUM('cash', 'credit card') NOT NULL COMMENT '付款方式',
    order_state ENUM('wait', 'finish', 'cancel', 'return') NOT NULL COMMENT '訂單狀態',
    FOREIGN KEY(member_id) REFERENCES member (member_id)
) COMMENT '訂單';

CREATE TABLE coupon (
    coupon_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '券編號',
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    feature ENUM ('50', '100', '150', 'free-shipping') NOT NULL COMMENT '券種類',
    order_id INT UNSIGNED COMMENT '訂單編號',
    coupon_month VARCHAR(100) NOT NULL COMMENT '券月份',
    FOREIGN KEY(order_id) REFERENCES order_list (order_id)
) COMMENT '券';

CREATE TABLE order_product (
    order_id INT UNSIGNED NOT NULL COMMENT '訂單編號',
    product_id INT UNSIGNED NOT NULL COMMENT '商品編號',
    count_num INT UNSIGNED NOT NULL COMMENT '商品數量',
    FOREIGN KEY(product_id) REFERENCES product (product_id),
    FOREIGN KEY(order_id) REFERENCES order_list (order_id),
    PRIMARY KEY(order_id, product_id)
) COMMENT '訂單商品';

CREATE TABLE cart (
    cart_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '購物車編號',
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    product_id INT UNSIGNED NOT NULL COMMENT '商品編號',
    count_num INT UNSIGNED NOT NULL COMMENT '商品數量',
    FOREIGN KEY(member_id) REFERENCES member (member_id),
    FOREIGN KEY(product_id) REFERENCES product (product_id)
) COMMENT '購物車';

CREATE TABLE ad (
    ad_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '廣告編號',
    ad_description VARCHAR(100) COMMENT '廣告說明',
    ad_img_id VARCHAR(100) COMMENT '廣告圖片'
) COMMENT '廣告';

CREATE TABLE customer_service (
    cs_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '客服人員編號',
    cs_name VARCHAR(100) NOT NULL COMMENT '客服人員姓名'
) COMMENT '客服人員';

CREATE TABLE cs_record (
    cs_record_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '客服紀錄編號',
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    cs_id INT UNSIGNED NOT NULL COMMENT '客服人員編號',
    topic ENUM ('product', 'other') NOT NULL COMMENT '主題',
    product_id INT UNSIGNED comment '商品編號',
    FOREIGN KEY (member_id) REFERENCES member(member_id),
    FOREIGN KEY (cs_id) REFERENCES customer_service(cs_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
) COMMENT '客服紀錄';

CREATE TABLE cs_message (
    message_id INT UNSIGNED auto_increment COMMENT '訊息記錄編號',
    cs_record_id INT UNSIGNED comment '客服紀錄編號',
    msg_content VARCHAR(100) NOT NULL COMMENT '訊息內容',
    msg_by ENUM ('cs', 'member') NOT NULL COMMENT '訊息建立者',
    create_time DATETIME NOT NULL comment '訊息時間',
    FOREIGN KEY(cs_record_id) REFERENCES cs_record(cs_record_id),
    PRIMARY KEY (message_id, cs_record_id)
) COMMENT '客服訊息';

CREATE TABLE member_account (
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT '信箱',
    member_password VARCHAR(100) NOT NULL COMMENT '會員密碼',
    FOREIGN KEY(member_id) REFERENCES member (member_id),
    PRIMARY KEY(member_id, email)
) COMMENT '會員帳號密碼';

CREATE TABLE browsing_history (
    browsing_his_id INT UNSIGNED PRIMARY KEY auto_increment COMMENT '瀏覽紀錄編號',
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    product_id INT UNSIGNED NOT NULL COMMENT '商品編號',
    browse_time DATETIME NOT NULL COMMENT '瀏覽時間',
    FOREIGN KEY (member_id) REFERENCES member (member_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id)
) COMMENT '瀏覽紀錄';

CREATE TABLE follow_list (
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    product_id INT UNSIGNED NOT NULL COMMENT '商品編號',
    FOREIGN KEY (member_id) REFERENCES member (member_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id),
    PRIMARY KEY (member_id, product_id)
) COMMENT '關注清單';

CREATE TABLE comment_list (
    member_id INT UNSIGNED NOT NULL COMMENT '會員編號',
    product_id INT UNSIGNED NOT NULL COMMENT '商品編號',
    comment_id INT UNSIGNED PRIMARY KEY auto_increment comment '評論編號',
    star INT COMMENT '評價星星',
    product_comment VARCHAR(100) NOT NULL COMMENT '商品評論',
    comment_create_time DATETIME NOT NULL COMMENT '評論時間',
    FOREIGN KEY (member_id) REFERENCES member (member_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id)
) COMMENT '評論區';