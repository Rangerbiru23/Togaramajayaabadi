'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Shield, Users, Gavel, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="CV TOGARMA JAYA ABADI" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">CV TOGARMA JAYA ABADI</h1>
                <p className="text-xs text-slate-600">Konstruksi Gedung Perkantoran</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-xl text-slate-600">
            Syarat dan Ketentuan Layanan CV TOGARMA JAYA ABADI
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Selamat datang di CV TOGARMA JAYA ABADI. Syarat dan Ketentuan ini ("Syarat") mengatur penggunaan layanan konstruksi yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh Syarat ini.
              </p>
              <p>
                CV TOGARMA JAYA ABADI adalah perusahaan konstruksi yang bergerak di bidang pembangunan gedung perkantoran. Kami berkomitmen untuk memberikan layanan konstruksi berkualitas tinggi dengan standar profesional.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Definisi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <ul className="space-y-2">
                <li><strong>"Perusahaan"</strong> merujuk pada CV TOGARMA JAYA ABADI.</li>
                <li><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan konstruksi kami.</li>
                <li><strong>"Layanan"</strong> merujuk pada semua layanan konstruksi gedung perkantoran yang kami sediakan.</li>
                <li><strong>"Proyek"</strong> merujuk pada pekerjaan konstruksi spesifik yang disepakati antara Perusahaan dan Klien.</li>
                <li><strong>"Website"</strong> merujuk pada situs web resmi CV TOGARMA JAYA ABADI.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Layanan Konstruksi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Layanan yang Kami Sediakan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Desain dan perencanaan arsitektur gedung perkantoran</li>
                <li>Konstruksi gedung perkantoran baru</li>
                <li>Renovasi dan perluasan gedung perkantoran</li>
                <li>Desain interior kantor</li>
                <li>Konsultasi manajemen proyek konstruksi</li>
                <li>Supervisi dan quality control</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Standar Layanan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Semua pekerjaan dilakukan sesuai dengan standar konstruksi Indonesia</li>
                <li>Menggunakan material berkualitas tinggi</li>
                <li>Dikerjakan oleh tenaga ahli berpengalaman</li>
                <li>Dilengkapi dengan garansi konstruksi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Tanggung Jawab Klien</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Klien bertanggung jawab untuk:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap tentang proyek</li>
                <li>Menyediakan dokumen perizinan yang diperlukan</li>
                <li>Memastikan lokasi proyek dapat diakses dengan aman</li>
                <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
                <li>Memberikan keputusan tepat waktu untuk persetujuan desain</li>
                <li>Mematuhi jadwal yang telah disepakati untuk inspeksi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Syarat Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Struktur Pembayaran:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Uang Muka:</strong> 30% dari total nilai kontrak</li>
                <li><strong>Pembayaran Tahapan:</strong> Sesuai dengan milestone yang disepakati</li>
                <li><strong>Pelunasan:</strong> 100% setelah proyek selesai dan diserahkan</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Ketentuan Pembayaran:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pembayaran harus dilakukan tepat waktu sesuai invoice</li>
                <li>Keterlambatan pembayaran akan dikenakan denda 2% per bulan</li>
                <li>Pembayaran dapat dilakukan melalui transfer bank atau tunai</li>
                <li>Semua pembayaran harus menggunakan rekening perusahaan resmi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Project Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                <span>Jadwal Proyek</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Estimasi Waktu:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gedung perkantoran 1 lantai: 3-4 bulan</li>
                <li>Gedung perkantoran 2-3 lantai: 6-8 bulan</li>
                <li>Gedung perkantoran 4+ lantai: 10-12 bulan</li>
                <li>Renovasi kantor: 1-3 bulan</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Penundaan Proyek:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perusahaan tidak bertanggung jawab atas keterlambatan karena cuaca buruk</li>
                <li>Perubahan desain dari klien dapat mempengaruhi jadwal</li>
                <li>Keterlambatan perizinan dari pihak berwenang</li>
                <li>Force majeure atau keadaan di luar kendali</li>
              </ul>
            </CardContent>
          </Card>

          {/* Warranty */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Garansi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Garansi Konstruksi:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Struktur Bangunan:</strong> Garansi 10 tahun untuk kerusakan struktural</li>
                <li><strong>Atap:</strong> Garansi 5 tahun untuk kebocoran</li>
                <li><strong>Pengecatan:</strong> Garansi 2 tahun</li>
                <li><strong>Instalasi Listrik & Air:</strong> Garansi 1 tahun</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Ketentuan Garansi:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garansi tidak berlaku untuk kerusakan karena kesalahan penggunaan</li>
                <li>Garansi tidak mencakup kerusakan karena bencana alam</li>
                <li>Klaim garansi harus disertai dengan bukti dokumentasi</li>
                <li>Perusahaan berhak melakukan inspeksi sebelum pengajuan garansi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Hak Kekayaan Intelektual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Semua desain, gambar teknis, dan dokumen perencanaan yang dibuat oleh CV TOGARMA JAYA ABADI merupakan hak kekayaan intelektual perusahaan. Klien tidak boleh menggunakan desain tersebut untuk proyek lain tanpa izin tertulis dari perusahaan.
              </p>
              <p>
                Setelah pelunasan pembayaran penuh, klien memiliki hak penggunaan desain untuk gedung yang dibangun, namun hak cipta desain tetap milik CV TOGARMA JAYA ABADI.
              </p>
            </CardContent>
          </Card>

          {/* Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gavel className="w-5 h-5 text-blue-600" />
                <span>Batasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Tanggung Jawab Perusahaan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perusahaan bertanggung jawab atas kualitas pekerjaan sesuai kontrak</li>
                <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung</li>
                <li>Maksimal tanggung jawab perusahaan sebesar nilai kontrak</li>
                <li>Perusahaan memiliki asuransi untuk proyek konstruksi</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Force Majeure:</h3>
              <p>
                Perusahaan tidak bertanggung jawab atas keterlambatan atau ketidakmampuan melaksanakan kontrak karena keadaan di luar kendali seperti bencana alam, perang, kerusuhan, atau perubahan peraturan pemerintah.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                <span>Pemutusan Kontrak</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Pemutusan oleh Klien:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Klien dapat memutuskan kontrak dengan pemberitahuan 30 hari</li>
                <li>Klien harus membayar semua pekerjaan yang telah selesai</li>
                <li>Biaya pembatalan sebesar 20% dari nilai kontrak</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Pemutusan oleh Perusahaan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jika klien gagal melakukan pembayaran tepat waktu</li>
                <li>Jika klien melanggar ketentuan kontrak</li>
                <li>Jika terjadi force majeure</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gavel className="w-5 h-5 text-blue-600" />
                <span>Penyelesaian Sengketa</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Semua sengketa yang timbul dari atau berhubungan dengan kontrak ini akan diselesaikan terlebih dahulu melalui musyawarah dan mufakat secara kekeluargaan.
              </p>
              <p>
                Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui pengadilan negeri Jakarta Timur.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Penerimaan Syarat</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Dengan menggunakan layanan CV TOGARMA JAYA ABADI, Anda menyatakan bahwa:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</li>
                <li>Anda memiliki kapasitas hukum untuk mengikatkan diri dalam kontrak</li>
                <li>Anda akan mematuhi semua ketentuan yang berlaku</li>
                <li>Informasi yang Anda berikan adalah akurat dan lengkap</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p><strong>CV TOGARMA JAYA ABADI</strong></p>
                <p>Email: legal@togarmajayaabadi.co.id</p>
                <p>Telepon: 085285703497</p>
                <p>Alamat: GEDUNG MARIBAYA JALAN OTISTA RAYA NOMOR 141, Kel. Kampung Melayu, Kec. Jatinegara, Kota Adm. Jakarta Timur, Prov. DKI Jakarta</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="CV TOGARMA JAYA ABADI" className="h-8 w-auto" />
                <h3 className="text-lg font-bold">CV TOGARMA JAYA ABADI</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Mitra terpercaya untuk konstruksi gedung perkantoran berkualitas tinggi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Desain & Perencanaan</li>
                <li>Konstruksi Bangunan</li>
                <li>Renovasi Kantor</li>
                <li>Konsultasi Proyek</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>085285703497</li>
                <li>Jakarta Timur, DKI Jakarta</li>
                <li>info@togarmajayaabadi.co.id</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 CV TOGARMA JAYA ABADI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}