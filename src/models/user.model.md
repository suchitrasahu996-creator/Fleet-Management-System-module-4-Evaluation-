CREATE TABLE users(
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT not null check (role in ('customer','owner','driver')),
  created_at timestamp  default now()
);