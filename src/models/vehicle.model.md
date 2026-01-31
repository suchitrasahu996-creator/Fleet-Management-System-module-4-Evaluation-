CREATE TABLE vehicles (
  id uuid primary key ,
  registration_number  text unique not null,
  owner_id uuid not null , 
  driver_id uuid  not null,
  isAvailable boolean default true ;
  created_at timestamp with zone default now(),
  constraint fk_owner foreign key (owner_id ) references users(id) on delete cascade,
  constraintfk_driver foreign key (driver_id) references users (id) on delete set null

)