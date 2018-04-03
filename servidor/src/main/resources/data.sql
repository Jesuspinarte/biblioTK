insert into biblioteca values (1, 'Javeriana');

insert into empleado( id, username, password, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, credentials_Non_Expired, enabled, rol, empleador_id ) values (1, 'user', '123', 0, 0, 0, 0, 0, 1 ); 
insert into empleado( id, username, password, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, credentials_Non_Expired, enabled, rol, empleador_id ) values (2, 'nico', 'nico', 0, 0, 0, 0, 1, 1 ); 

insert into libro ( id, nombre, isbn, autores, prestado, despensa_id ) VALUES ( 1, 'IT', '100-100' , 'Stephen King', 0, 1 );
insert into libro ( id, nombre, isbn, autores, prestado, despensa_id ) VALUES ( 2, 'El Quijote de la Mancha', '1100-080' , 'Miguel de Cervantes',0, 1 );
insert into libro ( id, nombre, isbn, autores, prestado, despensa_id ) VALUES ( 3, 'Asesinato en el Orient Express', '100-0980' , 'Agatha Christie',0, 1 );
insert into libro ( id, nombre, isbn, autores, prestado, despensa_id ) VALUES ( 4, 'Lord of the Rings', '100-470' , 'JRR. Tolkien',0, 1 );

