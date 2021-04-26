CREATE TABLE Cliente (
id_cliente INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
primer_apellido VARCHAR(30) NOT NULL,
segundo_apellido VARCHAR(30) NOT NULL,
telefono INT(8) NOT NULL,
direccion_entrega VARCHAR(100) NOT NULL,
notificacion BOOLEAN NOT NULL
);
/*
INSERT INTO Cliente (nombre, primer_apellido, segundo_apellido, telefono, direccion_entrega, notificacion)
VALUES ('Kenneth','Rodriguez', 'Murillo', 72756932, 'Los ANgeles de Grecia', false);

SELECT * from Cliente;
*/

CREATE TABLE Mascota (
id_mascota INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
especie VARCHAR(30) NOT NULL,
raza VARCHAR(30) NOT NULL,
id_cliente INT(6) NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

/*
INSERT INTO Mascota (nombre, especie, raza, id_cliente)
VALUES ('Camila','Canina', 'Golden Retriever', 1);

SELECT Mascota.nombre FROM Mascota INNER JOIN Cliente ON Mascota.id_cliente = Cliente.id_cliente;

SELECT * from Mascota where id_cliente = 1;
*/

CREATE TABLE Pedido (
id_pedido INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
fecha_compra DATE NOT NULL,
fecha_vencimiento DATE NOT NULL,
consumo_dias INT(6) NOT NULL,
tiempo_aviso INT(6) NOT NULL,
id_cliente INT(6) NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE Alimento (
id_alimento INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
marca VARCHAR(30) NOT NULL,
presentacion VARCHAR(30) NOT NULL,
consumo_diario VARCHAR(30) NOT NULL,
id_mascota INT(6) NOT NULL,
FOREIGN KEY (id_mascota) REFERENCES Mascota(id_mascota)
);

CREATE TABLE Proveedor (
id_proveedor INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
telefono INT(8) NOT NULL,
correo VARCHAR(30) NOT NULL,
id_alimento INT(6) NOT NULL,
FOREIGN KEY (id_alimento) REFERENCES Alimento(id_alimento)
);