create table employee
(
   EMP_ID int not null,
   NAME varchar(99) not null,
   ROLE varchar(99) not null,
   MANAGER int,
   primary key(EMP_ID)
);