insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values
('public-media','public-media',true,10485760,array['image/jpeg','image/png','image/webp','application/pdf']),
('citizen-documents','citizen-documents',false,10485760,array['image/jpeg','image/png','application/pdf']),
('complaint-media','complaint-media',false,52428800,array['image/jpeg','image/png','video/mp4']),
('certificates','certificates',false,10485760,array['application/pdf']) on conflict(id) do nothing;
create policy public_media_read on storage.objects for select using(bucket_id='public-media');
create policy authenticated_upload_own on storage.objects for insert to authenticated with check(bucket_id in ('citizen-documents','complaint-media') and (storage.foldername(name))[1]=auth.uid()::text);
create policy own_files_read on storage.objects for select to authenticated using((storage.foldername(name))[1]=auth.uid()::text or public.is_admin());
create policy admin_storage_all on storage.objects for all to authenticated using(public.is_admin()) with check(public.is_admin());
