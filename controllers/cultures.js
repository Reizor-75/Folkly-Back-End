import { Culture } from '../models/culture.js'

export async function index(req, res) {
  try {
    const cultures = await Culture.find({})
    res.status(200).json(cultures)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export async function show(req, res) {
  try {
    const culture = await Culture.findById(req.params.cultureId)
    res.status(200).json(culture)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}