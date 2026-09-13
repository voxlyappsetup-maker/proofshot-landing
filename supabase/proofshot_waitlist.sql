create table if not exists public.proofshot_waitlist (
  email text primary key,
  created_at timestamptz not null default now()
);

alter table public.proofshot_waitlist enable row level security;

drop policy if exists "Allow public waitlist inserts" on public.proofshot_waitlist;

create policy "Allow public waitlist inserts"
on public.proofshot_waitlist
for insert
to anon, authenticated
with check (true);
