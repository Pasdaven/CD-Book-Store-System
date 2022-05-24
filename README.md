## System Analysis and Design Project : CD-Book-Store-System

## Run Locally

1. Change directory to XAMPP's htdoc

2. Clone the project

```bash
  git clone https://github.com/davidho0403/clinic-system.git
```

3. Install composer package
```bash
composer install
```

4. Copy `.env.example` to `.env`
```bash
cp .env.example .env
```

5. Configure environment variables in `.env`

6. Run XAMPP Apache Server and Database Server

7. Execute [**create_tables.sql**](/database/create_tables.sql) and [**add_test_data.sql**](/database/add_test_data.sql) in the DBMS

8. Open homepage [localhost/CD-Book-Store-System/view/](http://localhost/CD-Book-Store-System/view/)