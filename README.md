# NEXTJS-CAR-RENTAL

<h5>

Bu proje, Next.js ve TypeScript kullanılarak geliştirilen full-stack bir araç kiralama platformudur. Kullanıcılar, farklı araçları filtreleyerek detaylı inceleyebilir ve uygun gördükleri aracı Stripe entegrasyonu sayesinde güvenli bir şekilde kiralayabilirler. Modern bir tasarım anlayışıyla geliştirilen platform, performans, SEO uyumluluğu ve kullanıcı deneyimi açısından optimize edilmiştir.

📌 Kullanılan Teknolojiler ve Özellikler

1️⃣ Frontend (Next.js & TypeScript)
Next.js (App Router): Performans optimizasyonu ve SEO uyumu için kullanıldı.
TypeScript: Daha güvenli ve ölçeklenebilir bir yapı oluşturmak için tercih edildi.
Tailwind CSS: Esnek ve modern UI tasarımları için kullanıldı.
Next/Image: Optimize edilmiş, hızlı yüklenen ve responsive görseller için kullanıldı.
Dynamic Routing: Her araç için dinamik sayfalar oluşturuldu (/cars/[id]).
Server-Side Rendering (SSR) & Static Site Generation (SSG): Sayfa yüklenme hızlarını artırmak ve SEO uyumluluğunu artırmak için belirli sayfalar statik, bazıları ise sunucu tarafında render edildi.

2️⃣ Backend (Next.js API Routes & MongoDB)
Next.js API Routes: Backend tarafındaki işlemler için kullanıldı. (Örneğin, araç verileri, kiralama işlemleri ve ödeme yönetimi)
MongoDB (Mongoose): Araç bilgileri ve kullanıcı kiralama geçmişini saklamak için kullanıldı.
Authentication & Authorization: Kullanıcıların giriş yapmasını sağlamak için kimlik doğrulama mekanizmaları eklendi.

3️⃣ Ödeme Sistemi (Stripe API)
Stripe Checkout: Kullanıcıların araç kiralama işlemini güvenli bir şekilde tamamlaması için entegre edildi.
Webhooks: Ödeme başarıyla tamamlandığında kiralama bilgilerini veritabanına kaydetmek için kullanıldı.
Fatura Yönetimi: Kullanıcılara ödeme sonrası fatura oluşturma mekanizması sağlandı.

4️⃣ Kullanıcı Deneyimi & Ekstra Özellikler
Filtreleme & Sıralama: Kullanıcılar, araçları yakıt tipi, vites türü ve koltuk sayısına göre filtreleyebilir.
Favorilere Ekleme: Kullanıcılar beğendikleri araçları favorilerine ekleyebilir.
Responsive Tasarım: Mobil, tablet ve masaüstü cihazlarda mükemmel deneyim için optimize edildi.
404 ve Hata Sayfaları: Kullanıcı dostu hata sayfaları tasarlandı.
SEO Optimizasyonu: Meta etiketler ve Open Graph ayarları yapılarak SEO desteği sağlandı.

</h5>

<h6>Gif Dosyası : </h6>

![](tanıtım.gif)
