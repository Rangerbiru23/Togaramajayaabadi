'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  HardHat,
  FileText
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

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
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('about')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'about' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'services' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'portfolio' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'contact' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Kontak
              </button>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Konstruksi Gedung Perkantoran" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Badge className="mb-4 bg-blue-600 text-white">
              <HardHat className="w-4 h-4 mr-2" />
              Spesialis Konstruksi Gedung Perkantoran
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Wujudkan Gedung Perkantoran Impian Anda
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              CV TOGARMA JAYA ABADI - Mitra terpercaya untuk konstruksi gedung perkantoran yang berkualitas, profesional, dan tepat waktu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        {activeTab === 'about' && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang CV TOGARMA JAYA ABADI</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Perusahaan konstruksi terkemuka yang berfokus pada pembangunan gedung perkantoran berkualitas tinggi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Membangun Masa Depan Bisnis Anda</h3>
                <p className="text-slate-600 mb-4">
                  CV TOGARMA JAYA ABADI telah berpengalaman dalam bidang konstruksi gedung perkantoran selama bertahun-tahun. Kami memahami bahwa gedung perkantoran bukan hanya sekadar bangunan, melainkan investasi jangka panjang untuk kesuksesan bisnis Anda.
                </p>
                <p className="text-slate-600 mb-6">
                  Dengan tim profesional dan berpengalaman, kami berkomitmen untuk memberikan hasil konstruksi yang tidak hanya memenuhi standar kualitas tertinggi, tetapi juga tepat waktu dan sesuai anggaran.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Berpengalaman</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Profesional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Bergaransi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Tepat Waktu</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/team-work.jpg" 
                  alt="Tim Profesional" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                  <p className="text-slate-600">Proyek Selesai</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">100+</div>
                  <p className="text-slate-600">Klien Puas</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
                  <p className="text-slate-600">Tahun Pengalaman</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                  <p className="text-slate-600">Bergaransi</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeTab === 'services' && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Solusi konstruksi komprehensif untuk kebutuhan gedung perkantoran Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>Desain & Perencanaan</CardTitle>
                  <CardDescription>
                    Konsultasi desain arsitektur dan perencanaan konstruksi yang optimal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Desain arsitektur modern</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Perencanaan struktur</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Visualisasi 3D</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <HardHat className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>Konstruksi Bangunan</CardTitle>
                  <CardDescription>
                    Pembangunan gedung perkantoran dari fondasi hingga finishing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Gedung bertingkat</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Renovasi kantor</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Interior kantor</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>Konsultasi & Manajemen</CardTitle>
                  <CardDescription>
                    Manajemen proyek dan konsultasi konstruksi profesional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Manajemen proyek</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Quality control</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Garansi pemeliharaan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Portfolio Section */}
        {activeTab === 'portfolio' && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio Kami</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Hasil karya terbaik dari berbagai proyek konstruksi gedung perkantoran
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card key="1" className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/office-building.jpg" 
                    alt="Gedung Perkantoran Modern" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Gedung Perkantoran Modern
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Proyek konstruksi gedung perkantoran 5 lantai dengan desain modern dan fasilitas lengkap di Jakarta Selatan.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Selesai</Badge>
                    <Button variant="ghost" size="sm">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card key="2" className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/construction-planning.jpg" 
                    alt="Perencanaan Konstruksi" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Renovasi Kantor Central
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Proyek renovasi total gedung perkantoran dengan penambahan 2 lantai dan desain interior modern.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Selesai</Badge>
                    <Button variant="ghost" size="sm">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card key="3" className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Tech Park Office
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Kompleks perkantoran teknologi dengan 3 gedung bertingkat dan fasilitas co-working space.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Selesai</Badge>
                    <Button variant="ghost" size="sm">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card key="4" className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Business Center
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Gedung perkontoran komersial dengan ruang sewa dan fasilitas meeting yang lengkap.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Selesai</Badge>
                    <Button variant="ghost" size="sm">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card key="5" className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Corporate Tower
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Gedung perkantoran premium 12 lantai dengan desain arsitektur kontemporer.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Selesai</Badge>
                    <Button variant="ghost" size="sm">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card key="6" className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Green Office Park
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Kompleks perkantoran hijau dengan konsep ramah lingkungan dan taman hijau.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Selesai</Badge>
                    <Button variant="ghost" size="sm">
                      Lihat Detail
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Siap mewujudkan gedung perkantoran impian Anda? Konsultasi gratis dengan tim kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Alamat</h4>
                      <p className="text-slate-600">
                        GEDUNG MARIBAYA JALAN OTISTA RAYA NOMOR 141<br />
                        Kel. Kampung Melayu, Kec. Jatinegara<br />
                        Kota Adm. Jakarta Timur, Prov. DKI Jakarta
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Telepon</h4>
                      <p className="text-slate-600">085285703497</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-600">info@togarmajayaabadi.co.id</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Jam Operasional</h4>
                      <p className="text-slate-600">
                        Senin - Jumat: 08:00 - 17:00<br />
                        Sabtu: 08:00 - 12:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi formulir di bawah ini untuk konsultasi gratis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Jelaskan kebutuhan konstruksi Anda..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Kirim Pesan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
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