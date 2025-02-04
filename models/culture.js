import mongoose from 'mongoose'

const Schema = mongoose.Schema

const lessonSchema= new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  lessonType:{
    type: String,
    enum: ['Movies','Music','Televison', 'Literature', 'Traditions'],
    default: 'Movies'
  },
  correctAnswer: { type: String, required: true },
  incorrectAnswer: [{ type: String, required: true }]
}, {
  timestamps: true
})

const culutreSchema = new Schema({
  name: { type: String, required: true },
  lang: { type: String, required: true },
  popCultureTypes: [{
    type: String,
    enum: ['Movies','Music','Televison', 'Literature', 'Traditions'],
    default: 'Movies'
  }],
  lessons: [lessonSchema],
},{
  timestamps: true,
})

const Culture = mongoose.model('Culture', culutreSchema)

export { Culture }
