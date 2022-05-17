INSERT INTO `member` 
VALUES  (NULL, 'david', '2022-05-08', '0912345345', 'Male', '100'),
        (NULL, 'ho', '2022-01-08', '091234456', 'Male', '100'),
        (NULL, '阿東雅', '2022-02-08', '0912456545', 'Female', '100'),
        (NULL, '阿南懷', '2012-05-04', '0946456534', 'Male', '100'),
        (NULL, '阿南郭', '2002-05-08', '0914789784', 'Female', '100');

INSERT INTO `member_account`
VALUES  (1, 'member1@gmail.com', '1234'),
        (2, 'member2@gmail.com', 'qwer'),
        (3, 'member3@gmail.com', 'asdf'),
        (4, 'member4@gmail.com', 'zxcv'),
        (5, 'member5@gmail.com', '4321');

INSERT INTO `product` 
VALUES  (1, '鋼鐵人馬斯克', '阿什利·萬斯', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum unde vero sit repellat veritatis velit quisquam qui ipsum repellendus, tenetur iste hic iusto voluptatum ipsa molestiae minus totam, harum, amet magni facere! Voluptatibus sed animi laudantium totam alias repellendus laborum sint qui cum, nesciunt velit doloremque pariatur labore fugit, vero molestias soluta? Excepturi repellendus et sunt ea nesciunt est molestiae quos quidem ipsum. Numquam, atque?', 'http://localhost/cd-book-store-system/view/src/image/book-1.png', '100', NULL, NULL, NULL, '200'),
        (2, 'Dr. TOEIC', '金映權, 朴梓亨, 金起漢, 張重維, Jennifer Thaler', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum unde vero sit repellat veritatis velit quisquam qui ipsum repellendus, tenetur iste hic iusto voluptatum ipsa molestiae minus totam, harum, amet magni facere! Voluptatibus sed animi laudantium totam alias repellendus laborum sint qui cum, nesciunt velit doloremque pariatur labore fugit, vero molestias soluta? Excepturi repellendus et sunt ea nesciunt est molestiae quos quidem ipsum. Numquam, atque?', 'http://localhost/cd-book-store-system/view/src/image/book-2.png', '200', NULL, NULL, NULL, '20'),
        (3, '股息Cover我每一天', '大俠武林', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum unde vero sit repellat veritatis velit quisquam qui ipsum repellendus, tenetur iste hic iusto voluptatum ipsa molestiae minus totam, harum, amet magni facere! Voluptatibus sed animi laudantium totam alias repellendus laborum sint qui cum, nesciunt velit doloremque pariatur labore fugit, vero molestias soluta? Excepturi repellendus et sunt ea nesciunt est molestiae quos quidem ipsum. Numquam, atque?', 'http://localhost/cd-book-store-system/view/src/image/book-3.png', '340', NULL, NULL, NULL, '250'),
        (4, '創業這條路', '麥克．葛伯', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum unde vero sit repellat veritatis velit quisquam qui ipsum repellendus, tenetur iste hic iusto voluptatum ipsa molestiae minus totam, harum, amet magni facere! Voluptatibus sed animi laudantium totam alias repellendus laborum sint qui cum, nesciunt velit doloremque pariatur labore fugit, vero molestias soluta? Excepturi repellendus et sunt ea nesciunt est molestiae quos quidem ipsum. Numquam, atque?', 'http://localhost/cd-book-store-system/view/src/image/book-4.png', '1240', NULL, NULL, NULL, '232'),
        (5, '豆漿娘娘駕到', '阿晧（漿爸）', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum unde vero sit repellat veritatis velit quisquam qui ipsum repellendus, tenetur iste hic iusto voluptatum ipsa molestiae minus totam, harum, amet magni facere! Voluptatibus sed animi laudantium totam alias repellendus laborum sint qui cum, nesciunt velit doloremque pariatur labore fugit, vero molestias soluta? Excepturi repellendus et sunt ea nesciunt est molestiae quos quidem ipsum. Numquam, atque?', 'http://localhost/cd-book-store-system/view/src/image/book-5.png', '16800', NULL, NULL, NULL, '600');

INSERT INTO `customer_service`
VALUES  (1, 'Steve'),
        (2, 'Pascal'),
        (3, 'Jason');