use project_management;

create table user(id int(11) primary key auto_increment,
                  name varchar(123),
				  username varchar(12),
                  password varchar(12)) auto_increment = 100;

create table team(id int(11) primary key auto_increment,
				  name varchar(123)) auto_increment = 200;

create table project(id int(11) primary key auto_increment,
					 name varchar(123),
					 description varchar(1234),
                     teamid int(11))auto_increment = 300 ;

create table task(id int(11) primary key auto_increment,
                  name varchar(123),
				  description varchar(1234),
				  duedate date,
                  projectid int(11),
                  userid int(11)) auto_increment = 400;

create table members(id int(11) primary key auto_increment,
					 userid int(11),
                     teamid int(11),
                     foreign key(userid) references user(id),
                     foreign key(teamid) references team(id)) auto_increment = 500;


alter table project add constraint foreign key (teamid) references team(id);
alter table task add constraint foreign key (projectid) references project(id);
alter table task add constraint foreign key (userid) references user(id);

