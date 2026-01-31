
CREATE TABLE trips(
  id UUID PRIMARY KEY,
  customer_id UUID NOT NULL,
  vehicle_id UUID NOT NULL,
   tripCost numeric default 0,
   isCompleted boolen default false ,
   created_at timestamp with zone default now (),
   constraint fk_customer foreign key (customer_id) references users(id) on delete cascade,
   constraint fk_vehicle  foreign key (vehicle_id) references vehicles(id) on delete cascasde

)