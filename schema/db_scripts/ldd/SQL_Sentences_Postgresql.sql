CREATE TABLE Cliente (
id SERIAL PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
primer_apellido VARCHAR(30) NOT NULL,
segundo_apellido VARCHAR(30) NOT NULL,
telefono INTEGER NOT NULL,
direccion_entrega VARCHAR(100) NOT NULL,
notificacion BOOLEAN NOT NULL
);

CREATE TABLE Mascota (
id SERIAL PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
especie VARCHAR(30) NOT NULL,
raza VARCHAR(30) NOT NULL,
id_cliente INTEGER NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES Cliente(id)
);

CREATE TABLE Pedido (
id SERIAL PRIMARY KEY,
fecha_compra DATE NOT NULL,
fecha_vencimiento DATE NOT NULL,
consumo_dias INTEGER NOT NULL,
tiempo_aviso INTEGER NOT NULL,
id_cliente INTEGER NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES Cliente(id)
);

CREATE TABLE Alimento (
id SERIAL PRIMARY KEY,
marca VARCHAR(30) NOT NULL,
presentacion VARCHAR(30) NOT NULL,
consumo_diario VARCHAR(30) NOT NULL,
id_mascota INTEGER NOT NULL,
FOREIGN KEY (id_mascota) REFERENCES Mascota(id)
);

CREATE TABLE Proveedor (
id SERIAL PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
telefono INTEGER NOT NULL,
correo VARCHAR(30) NOT NULL,
id_alimento INTEGER NOT NULL,
FOREIGN KEY (id_alimento) REFERENCES Alimento(id)
);