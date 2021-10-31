import {
  ContentLanguageService,
  ContentTrunkService,
  ContentLocationService,
  ContentIdiomaService,
  ContentEthnicityService,
  ContentDialetoService
} from '../../../services'

const createLanguage = async (data) => {
  const { lingua, familia, localidades, ethnicities } = data
  // Cria tronco e lingua
  let idTronco
  if (familia) {
    idTronco = familia.value
    if (familia.__isNew__) {
      const tronco = await ContentTrunkService.create({ nome: familia.value })
      idTronco = tronco.id_tronco
    }
  }
  const languageCreated = await ContentLanguageService.createLanguage({ nome: lingua, id_tronco: idTronco })

  // Formata localidades e mapeia
  const localidadesMap = localidades.map(local => {
    const geolocalizacao = local.id.trim().split(',')
    return {
      latitude: parseFloat(geolocalizacao[0]),
      longitude: parseFloat(geolocalizacao[1])
    }
  })
  // Cria localidades no banco e relaciona com lingua
  if (localidadesMap.length) {
    const localidadesCreated = await ContentLocationService.createManyLocation({ locations: localidadesMap })
    await Promise.all(localidadesCreated.map(async localidade => {
      await ContentIdiomaService.create({
        id_localidade: localidade.id_localidade,
        id_lingua: languageCreated.id_lingua
      })
    }))
  }
  // Cria etnias no banco e relaciona com lingua
  if (ethnicities) {
    const idsEtnias = await Promise.all(ethnicities.map(async eth => {
      if (eth.__isNew__) {
        const etnia = await ContentEthnicityService.create({ nome: eth.label })
        return etnia.id_etnia
      }
      return eth.value
    }))
    await Promise.all(
      idsEtnias.map(async id => ContentDialetoService.create({
        id_lingua: languageCreated.id_lingua,
        id_etnia: id
      })))
  }
}

export default createLanguage
