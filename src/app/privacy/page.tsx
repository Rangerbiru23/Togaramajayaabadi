'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-600">
            Kebijakan Privasi CV TOGARMA JAYA ABADI
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
                <Eye className="w-5 h-5 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Selamat datang di CV TOGARMA JAYA ABADI. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
              <p>
                Dengan menggunakan layanan CV TOGARMA JAYA ABADI, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span>Pengumpulan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Informasi yang Kami Kumpulkan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Pribadi:</strong> Nama lengkap, alamat email, nomor telepon, alamat lengkap</li>
                <li><strong>Data Perusahaan:</strong> Nama perusahaan, jabatan, kebutuhan proyek konstruksi</li>
                <li><strong>Data Teknis:</strong> Spesifikasi proyek, lokasi bangunan, anggaran yang disiapkan</li>
                <li><strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda menggunakan website kami</li>
                <li><strong>Data Teknis:</strong> Alamat IP, browser, perangkat, dan informasi teknis lainnya</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mt-4">Cara Kami Mengumpulkan Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Formulir kontak dan konsultasi online</li>
                <li>Komunikasi langsung melalui email atau telepon</li>
                <li>Analisis penggunaan website secara otomatis</li>
                <li>Cookie dan teknologi pelacakan lainnya</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span>Penggunaan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <h3 className="font-semibold text-slate-900">Kami menggunakan data Anda untuk:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memberikan layanan konsultasi konstruksi yang profesional</li>
                <li>Menyiapkan penawaran harga dan proposal proyek</li>
                <li>Menghubungi Anda mengenai layanan konstruksi yang ditawarkan</li>
                <li>Memproses permintaan informasi tentang proyek Anda</li>
                <li>Meningkatkan kualitas layanan dan website kami</li>
                <li>Mengirimkan informasi relevan tentang layanan konstruksi</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <span>Perlindungan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                CV TOGARMA JAYA ABADI berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Enkripsi Data:</strong> Menggunakan teknologi enkripsi untuk melindungi data sensitif</li>
                <li><strong>Akses Terbatas:</strong> Hanya personil yang berwenang yang dapat mengakses data pribadi</li>
                <li><strong>Keamanan Server:</strong> Server yang aman dan terlindungi dari akses tidak sah</li>
                <li><strong>Monitoring Keamanan:</strong> Sistem monitoring untuk mendeteksi ancaman keamanan</li>
                <li><strong>Pelatihan Staff:</strong> Staff yang terlatih tentang perlindungan data pribadi</li>
              </ul>
              <p className="mt-4">
                Namun, perlu dipahami bahwa tidak ada sistem yang 100% aman. Kami berusaha keras untuk melindungi data Anda, tetapi tidak dapat menjamin keamanan absolut.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span>Pembagian Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan komersial. Data Anda hanya akan dibagikan dalam kondisi berikut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Kepada mitra bisnis yang terlibat langsung dalam proyek konstruksi Anda</li>
                <li>Kepada pihak berwenang jika diwajibkan oleh hukum</li>
                <li>Kepada penyedia layanan yang membantu operasional kami</li>
              </ul>
              <p className="mt-4">
                Semua pihak ketiga yang menerima data Anda diwajibkan untuk melindungi kerahasiaan data dan hanya menggunakan data untuk tujuan yang telah ditentukan.
              </p>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span>Hak Anda sebagai Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Sebagai pemilik data, Anda memiliki hak-hak berikut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat</li>
                <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                <li><strong>Hak Pembatasan:</strong> Membatasi pengolahan data pribadi Anda</li>
                <li><strong>Hak Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                <li><strong>Hak Penolakan:</strong> Menolak pengolahan data pribadi Anda</li>
              </ul>
              <p className="mt-4">
                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak yang tersedia.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span>Kebijakan Cookie</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookie Analitik:</strong> Membantu kami memahami cara pengguna menggunakan website</li>
                <li><strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
              </ul>
              <p className="mt-4">
                Anda dapat mengatur cookie melalui pengaturan browser Anda. Namun, menonaktifkan cookie dapat mempengaruhi fungsionalitas website.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span>Kontak Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data pribadi Anda, silakan hubungi kami:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p><strong>CV TOGARMA JAYA ABADI</strong></p>
                <p>Email: privacy@togarmajayaabadi.co.id</p>
                <p>Telepon: 085285703497</p>
                <p>Alamat: GEDUNG MARIBAYA JALAN OTISTA RAYA NOMOR 141, Kel. Kampung Melayu, Kec. Jatinegara, Kota Adm. Jakarta Timur, Prov. DKI Jakarta</p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Pembaruan Kebijakan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan peraturan yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal pembaruan terbaru.
              </p>
              <p>
                Kami merekomendasikan untuk secara berkala meninjau Kebijakan Privasi ini untuk tetap mengetahui bagaimana kami melindungi data pribadi Anda.
              </p>
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