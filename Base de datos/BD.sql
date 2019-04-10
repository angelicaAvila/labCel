create database if not exists BD;
use BD;

	create table if not exists usuario(
		idUsuario int not null auto_increment,
		nombre varchar(20) not null unique,
		pass varchar(20) not null,
		admin bit not null,
		primary key(idUsuario)
		);

	create table if not exists producto(
		idProducto int not null auto_increment,
		nombre varchar(40) not null,
		precioPublico float not null,
		precioMayoreo float not null,
		costo float not null,
		categoria varchar(15) not null,
		marca varchar(15) not null,
		imagen blob,
		primary key(idProducto)
		);

	create table if not exists venta(
		idVenta int not null auto_increment,
		idProducto int not null,
		idUsuario int not null,
		cantidad int not null,
		precio float not null,
		fecha date not null,
		tienda varchar(15) not null,
		tipo_venta bit not null,
		primary key(idVenta,idProducto)
	
		);
