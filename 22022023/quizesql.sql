create database quiz;
use quiz;

create table users (
	id int auto_increment,
    name varchar(256) not null,
	primary key(id)
);	

create table question_bank (
	id int auto_increment,
    name varchar(256) not null,
    primary key(id)
);

create table question (
	id int auto_increment,
    question_bank_id int,
    question varchar(256) not null,
	primary key(id),
    foreign key (question_bank_id)references question_bank(id)
);

create table options(
	id int auto_increment,
    question_id int not null,
    option_text varchar(256) not null,
    foreign key(question_id)references question(id),
    primary key(id)
);

create table answer(
	id int auto_increment,
    question_id int ,
    option_id int,
    is_correct boolean,
    foreign key(question_id) references question(id),
    foreign key(option_id) references options(id),
    primary key(id)
);

create table user_question_bank (
	user_id int,
    questionbank_id int,
    foreign key(user_id) references users(id),
    foreign key(questionbank_id) references question_bank(id)
);

alter table user_question_bank add column (user_questionbank_id int auto_increment primary key);  


