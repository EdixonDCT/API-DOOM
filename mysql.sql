#Creacion de usuario
create user 'dom_EdixonDCT'@'localhost' identified by "ADSO";
create database dom_EdixonDCT;
grant all on dom_EdixonDCT.* to dom_EdixonDCT@localhost;