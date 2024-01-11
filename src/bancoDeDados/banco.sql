drop table if exists categorias;

drop table if exists produtos;

drop table if exists usuarios;

drop table if exists clientes;

drop table if exists pedidos;

drop table if exists pedidos_produtos;

create table categorias (
	id serial primary key,
  descricao text not null
);

create table produtos (
	id serial primary key,
  nome text not null unique,
  descricao text not null,
  custo int not null,
  valor int not null,
  imagem text not null,
  categorias_id int not null,
  foreign key (categorias_id) references categorias (id)
);

create table usuarios (
	id serial primary key,
  username text not null unique,
  senha text not null
);

create table clientes (
	id serial primary key,
  nome text not null,
  email text not null unique
);

create table pedidos (
	id serial primary key,
  observacao text,
  valor_total int not null,
  clientes_id int not null,
  foreign key (Clientes_id) references clientes (id)
);

create table pedidos_produtos (
	id serial primary key,
  quantidade_produto int not null,
  valor_produto int not null,
  pedidos_id int not null,
  produtos_id int not null,
  foreign key (pedidos_id) references pedidos (id),
  foreign key (produtos_id) references produtos (id)
);
