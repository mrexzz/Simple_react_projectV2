
function Projeler() {
  return (
    <><h1 style={{ margin: "50px" }}>Bazı Projelerimiz</h1>
      <div className="container text-center">
        <div className="row row-cols-4">
          <div className="col">
            <h3>10 Adet Açık Halı Saha Yapımı</h3>
            <p>Meram İlçesinde bulunan Okullara 5 Adet 15x27 ile 5 Adet 19x35 ölçülerinde toplamda 10 adet açık halı saha yapılarak Okul Yönetimlerinin hizmetine sunulmuştur.
            </p>
          </div>
          <div className="col">
            <h3>6 Adet Açık Halı Saha Yapılması</h3>
            <p>Alpaslan, Çarıklar, Kavak, Hatunsaray, Yeşiltekke ve Aşkan Mahallesine Açık Halı Saha Yapılması
            </p>
          </div>
          <div className="col">
            <h3>Tantavi Kültür ve Sanat Merkezi
            </h3>
            <p>İnşaat alanı;1422 m² Arsa alanı; 1046,96 m² Kat Adedi; B+Z+Asma Kat Tesiste, çok amaçlı salon ve kafeterya mevcuttur
            </p>
          </div>
          <div className="col">
            <h3>Yeniyol Trafik Parkı Çalışması

            </h3>
            <p>Revize çalışmasına 01.06.2020 tarihinde başlamış olup, 5026 m² proje alanı içerisinde 12 adet kameriye mevsimlik bitki dikimi ile peyzaj çalışması tamamlanmıştır.
            </p>
          </div>
        </div>
      </div>
      <div className="corner">
        <div style={{ margin: "5%" }}>
          <p className="text-center">
            Meram, Türkiye'nin Konya iline bağlı bir ilçe ve aynı zamanda bu ilçenin merkezidir. Konya'nın en büyük ve en önemli ilçelerinden biri olan Meram, tarihi, kültürel ve coğrafi açıdan zengin bir geçmişe sahiptir.
            Meram Belediyesi, ilçenin idari işlerini yürüten ve halkın yaşam kalitesini artırmak için çeşitli hizmetler sunan önemli bir kamu kurumudur. Belediye, altyapı çalışmaları, çevre düzenlemesi, kentsel dönüşüm projeleri, park ve bahçelerin bakımı, sosyal yardım faaliyetleri, kültürel etkinlikler gibi birçok alanda faaliyet gösterir.            </p>
        </div>
        <div className="container mt-6 mb-5 moon">
          <div className="row">
            <div className="col-md-6">
              <h1>Hakkında</h1>
              <p className="text-center">
              Meram Belediyesi'nin vizyonu, ilçenin sürdürülebilir kalkınması ve vatandaşların refah seviyesinin artırılmasıdır. Bu doğrultuda, modern belediyecilik anlayışını benimseyen Meram Belediyesi, teknolojik yenilikleri yakından takip ederek hizmetlerini sürekli geliştirmekte ve vatandaşların ihtiyaçlarına daha etkin bir şekilde yanıt vermeyi hedeflemektedir.
              </p>
            </div>
            <div className="col-md-6">
              <h1>Hakkında</h1>
              <p className="text-center">
              Meram Belediyesi'nin misyonu ise, ilçenin tarihi ve kültürel mirasını koruyarak, yaşanabilir bir çevre oluşturmak ve halkın katılımını sağlayarak şeffaf ve adaletli bir yönetim anlayışıyla hizmet sunmaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-hidden about'>
        <div className="container mt-7 mb-5" >
          <div className="row">
            <div className="col-md-3">
              <img
                className="img-fluid about-image"
                src="https://www.meram.bel.tr/assets/img/logo.svg"
                alt="Hakkında Resim"
              />
            </div>
            <div className="col-md-6">
              <h1 className="homeh1">Baslık</h1>
              <p className="homep1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt sapien eu metus euismod, id congue arcu euismod. Nulla
                facilisi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime harum nostrum possimus cumque aut officiis dolor nisi. Corrupti expedita incidunt sit mollitia, culpa, perferendis accusantium neque odio cupiditate recusandae tenetur.
              </p>
              <a href="#" className="mx-2 text-dark button button1">İletişim</a>
            </div>
            <div className="col-md-3 ">
              <img
                className="img-fluid about-image"
                src="https://www.meram.bel.tr/upload/medya/baskan_12.png"
                alt="Hakkında Resim"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projeler