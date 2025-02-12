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

export async function create(req, res) {
  try {
    const culture = await Culture.create(req.body)
    res.status(201).json(culture)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export async function update(req, res) {
  try {
    const culture = await Culture.findByIdAndUpdate(
      req.params.cultureId,
      req.body,
      { new: true }
    )
    res.status(200).json(culture)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export async function createLesson(req, res) {
  try {
    const culture = await Culture.findById(req.params.cultureId)
    culture.lessons.push(req.body)
    await culture.save()
    const newLesson = culture.lessons[culture.lessons.length - 1]
    res.status(201).json(newLesson)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export async function showLesson(req, res) {
  // try {
  //   const culture = await Culture.findById(req.params.cultureId)
  //   const lesson = culture.lessons.findById(req.params.lessonId)
  //   res.status(200).json(lesson)
  // } catch (err) {
  //   console.log(`🚨`, err)
  //   res.status(500).json(`🚨`, err)
  // }
}