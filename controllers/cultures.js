import { Culture } from '../models/culture.js'

export async function index(req, res) {
  try {
    const cultures = await Culture.find({})
    res.json(cultures)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}