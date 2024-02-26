
function Card() {
    return (
        <>
            <h1>Çalışmalarımız</h1>
            <div className='col-sm'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="p-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="https://images.pexels.com/photos/11798430/pexels-photo-11798430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Kültürel Etkinlikler:</h5>
                                        <p className="card-text">Meram Belediyesi, kültür ve sanatın gelişimine önem vererek, düzenlediği etkinliklerle ilçe sakinlerine zengin bir kültür atmosferi sunmaktadır. Konserler, tiyatro oyunları, sergiler ve film gösterimleri gibi etkinliklerle kültürel bir alanda çeşitlilik sağlanırken, yerel sanatçılara da destek verilmektedir.</p>
                                        <a href="https://www.meram.bel.tr/" className="btn btn-warning text-dark">Bilgi..</a>
                                    </div>
                                </div></div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Spor Etkinlikleri:</h5>
                                        <p className="card-text">Sağlıklı yaşam ve toplumsal birlikteliği desteklemek amacıyla düzenlenen spor etkinlikleri, Meram Belediyesi nin sosyal hizmet anlayışının bir parçasını oluşturuyor. Koşu yarışmaları, futbol turnuvaları ve spor günleri, ilçe sakinlerini spora teşvik ederek hem fiziksel hem de sosyal bir etkileşim yaratıyor.</p>
                                        <a href="https://www.meram.bel.tr/" className="btn btn-warning text-dark">Bilgi..</a>
                                    </div>
                                </div></div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Eğitim ve Seminerler:
                                        </h5>
                                        <p className="card-text">Meram Belediyesi, sadece eğlence odaklı etkinliklerle değil, aynı zamanda bilgi paylaşımını teşvik eden etkinliklerle de dikkat çekiyor. Çeşitli konularda düzenlenen seminerler, atölye çalışmaları ve eğitim programları, ilçe sakinlerine yeni bilgiler kazandırarak toplumsal bilinci artırıyor.</p>
                                        <a href="https://www.meram.bel.tr/" className="btn btn-warning text-dark">Bilgi..</a>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default Card