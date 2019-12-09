use project_management;
insert into user values(100, "Rahul Kotha" , "rk20" , "abc");
insert into user values(101, "Sreetej Reddy" , "sr20" , "abc");
insert into user values(102, "Jayesh Kaza" , "jk20" , "abc");

insert into team values(200, "T1");

insert into members values(500, 100, 200);
insert into members values(501, 101, 200);
insert into members values(502, 102, 200);

insert into project values(300, "Project Management app","A webapp",200);

insert into task values(400, "backend", "Create tables and insert data",
                         "2019-12-10", 300, 100);

insert into task values(401, "Authentication", "Use auth0 for authentication",
                         "2019-12-12", 300, 101);

insert into task values(402, "Front end", "Design the layout and make atomic components",
                         "2019-12-12", 300, 102);