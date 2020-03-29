const models = require('../models');
const Perumahan = models.Perumahan;
const Sarana = models.Sarana;
const Koordinat = models.Koordinat;
const Foto = models.Foto;
//
Perumahan.create({
  nama_perumahan: "Bumi Citra Asri"
})
.then((newPerumahan) => {
  // The get() function allows you to recover only the DataValues of the object
  console.log("newPerumahan",newPerumahan.get())
})
.catch((err) => {
  console.log("Error while perumahan creation : ", err)
});
//
Sarana.bulkCreate([
  {nama_sarana: 'GOR BCA', luas_sarana: '302',  foto_sarana: 'assets/images/PERUMAHAN/perumahan%203.jpg , assets/images/PERUMAHAN/perumahan%203.jpg , assets/images/PERUMAHAN/perumahan%203.jpg', perumahanId: Perumahan.id},
  {nama_sarana: 'Masjid Al Anshary', luas_sarana: '222',  foto_sarana: 'assets/images/PERUMAHAN/perumahan%203.jpg, assets/images/PERUMAHAN/perumahan%203.jpg, assets/images/PERUMAHAN/perumahan%203.jpg', perumahanId: Perumahan.id},
])
.then((newUsers) => {
  console.log("newUsers",newUsers)
})
.catch((err) => {
  console.log("Error while users creation : ", err)
});

// // 1:1
// // Get the perumahan linked to a given Sarana
// Sarana.findOne({
//   where: {nama_sarana: 'GOR BCA'}, include: 'perumahan'
// })
// .then((findedSarana) => {
//   // Get the Sarana with Perumahan datas included
//   console.log(findedSarana);
//   // Get the perumahan record only
//   console.log("findedSarana",findedSarana.perumahanId)
// })
// .catch((err) => {
//   console.log("Error while find sarana : ", err)
// });
//
// 1:N
// Get the saranas for a given company
// Perumahan.findByPk(4, {include: ['saranas']})
// .then((perumahan) => {
//   // Get the Perumahan with Sarana (saranas) datas included
//   console.log("perumahan inii",perumahan);
//   // Get the Sarana (saranas) records only
//   console.log("perumahanget",perumahan.get().saranas)
// })
// .catch((err) => {
//   console.log("Error while find perumahan : ", err)
// });
// //
